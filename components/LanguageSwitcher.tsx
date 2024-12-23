import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="fixed right-5 top-20 flex flex-col gap-2 z-50">
      {/* Botón en inglés */}
      <button
        onClick={() => changeLanguage('en')}
        className="w-12 h-8 bg-[#0A7269]/30 text-white font-bold rounded-md shadow-md hover:scale-125  transition-all"
      >
        EN
      </button>
      {/* Botón en español */}
      <button
        onClick={() => changeLanguage('es')}
        className="w-12 h-8 bg-[#0A7269]/30 text-white font-bold rounded-md shadow-md hover:scale-125 transition-all"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageSwitcher;
