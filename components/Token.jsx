import React from "react";
import { useTranslation } from "react-i18next";

const Token = () => {
    const { t } = useTranslation();

    return (
        <>
            <div id="Tokenomics" className="px-5">
                {/* Versión de escritorio */}
                <div className="hidden lg:block">
                    <h1 className="text-white text-5xl font-bold text-center ml-4 ">
                        {t("tokenomics.desktop.title")}{" "}
                        <span className="text-[#00F6BC]">{t("tokenomics.desktop.highlight")}</span>
                    </h1>
                    <div className="flex h-[4rem] justify-center items-center">
                        <div className="relative flex justify-center items-center">
                            {/* Primera imagen grande */}
                            <img
                                src={t("tokenomics.desktop.image")}
                                alt={t("tokenomics.alt.distribution")}
                                style={{ width: "800px", height: "800px" }}
                            />

                            {/* Segunda imagen pequeña */}
                            <img
                                src="/TokenDistribution/Token.svg"
                                alt={t("tokenomics.alt.token")}
                                className="hover:opacity-15"
                                style={{
                                    position: "absolute",
                                    width: "480px",
                                    height: "380px",
                                    top: "220px",
                                    left: "180px",
                                    transition: "transform 0.5s ease-in-out",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = "scale(1.1)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = "scale(1)";
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Versión móvil */}
                <h1 className="text-white text-5xl font-bold text-center lg:hidden">
                    {t("tokenomics.mobile.title")}{" "}
                    <span className="text-[#00F6BC]">{t("tokenomics.mobile.highlight")}</span>
                </h1>
                <div className="flex justify-center items-center lg:hidden ">
                    <div className="relative flex justify-center items-center">
                        {/* Primera imagen grande */}
                        <img
                            src={t("tokenomics.mobile.image")}       
                            alt={t("tokenomics.alt.distribution")}
                            style={{ width: "400px", height: "400px" }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Token;
