import React from "react";

const Token = () => {
    return (
        <>
            <div id="Tokenomics">
                {/* Versión de escritorio */}
                <div className="hidden lg:block">
                    <h1 className="text-white text-5xl font-bold text-center ">
                        Token <span className="text-[#00F6BC]">Distribution</span>
                    </h1>
                    <div className="flex h-[4rem] justify-center items-center">
                        <div className="relative flex justify-center items-center">
                            {/* Primera imagen grande */}
                            <img
                                src="/TokenDistribution/Distribution.svg"
                                alt="Distribution"
                                style={{ width: '1000px', height: '1000px' }}
                            />

                            {/* Segunda imagen pequeña */}
                            <img
                                src="/TokenDistribution/Token.svg"
                                alt="Token"
                                className="hover:opacity-15"
                                style={{
                                    position: 'absolute',
                                    width: '680px',
                                    height: '680px',
                                    top: '270px',
                                    left: '170px',
                                    transition: 'transform 0.5s ease-in-out',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.1)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)';
                                }}
                            />
                        </div>
                    </div>
                </div>

                {/* Versión móvil */}
                <h1 className="text-white text-5xl font-bold text-center sm:hidden">
                    Token <span className="text-[#00F6BC]">Distribution</span>
                </h1>
                <div className="flex  h-[4rem] justify-center items-center sm:hidden ">

                    <div className="relative flex justify-center items-center">
                        {/* Primera imagen grande */}
                        <img
                            src="/TokenDistribution/Distribution.svg"
                            alt="Distribution"
                            style={{ width: '400px', height: '400px' }}
                        />

                        {/* Segunda imagen pequeña */}
                        <img
                            src="/TokenDistribution/Token.svg"
                            alt="Token"
                            style={{
                                position: 'absolute',
                                width: '240px',
                                height: '240px',
                                top: '115px',
                                left: '85px',
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Token;
