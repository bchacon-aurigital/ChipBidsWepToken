"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { useTranslation } from "react-i18next"; // Para manejar la traducción
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  onComplete, // Nueva prop opcional
}: {
  words: string;
  className?: string;
  onComplete?: () => void; // Callback cuando la animación termina
}) => {
  const [scope, animate] = useAnimate();
  const { t } = useTranslation(); // Hook para obtener las traducciones
  const highlightIndex = parseInt(t("textEffect.highlightIndex") as string); // Obtener el índice dinámico desde el JSON

  let linesArray = words.split("\n");

  useEffect(() => {
    // Ejecutar la animación de las palabras
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
        onComplete: onComplete, // Llamar a onComplete cuando todo termina
      }
    );
  }, [scope.current, animate, onComplete]);

  const renderWords = () => {
    let globalWordCount = 0; // Contador global de palabras

    return (
      <motion.div ref={scope}>
        {linesArray.map((line, lineIdx) => {
          const wordsInLine = line.split(" ");
          return (
            <div key={`line-${lineIdx}`}>
              {wordsInLine.map((word) => {
                const currentWordIndex = globalWordCount++;
                return (
                  <motion.span
                    key={`word-${currentWordIndex}`}
                    className={`${currentWordIndex >= highlightIndex // Cambia el índice dinámicamente desde el JSON
                        ? "text-[#00D8FF]"
                        : "dark:text-white text-black"
                      } opacity-0`}
                  >
                    {word}{" "}
                  </motion.span>
                );
              })}
            </div>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black leading-snug">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};

export default TextGenerateEffect;
