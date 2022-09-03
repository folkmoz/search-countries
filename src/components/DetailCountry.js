import DetailText from "@components/DetailText";
import axios from "axios";
import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { toURI } from "@src/utils";

export default function DetailCountry({ detail, borderCountries }) {
    const {
        flags,
        name,
        population,
        subregion,
        capital,
        region,
        currencies,
        languages,
    } = detail;
    const getNativeName = () => {
        if (!name.nativeName) {
            return name.common;
        }
        const key = Object.keys(name.nativeName).at(-1);
        return name.nativeName[key].common;
    };

    const getCurrencies = () => {
        const key = Object.keys(currencies).at(0);
        return currencies[key].name;
    };

    const getLanguageNames = () => {
        if (!languages || typeof languages === "undefined") return;
        return Object.keys(languages)
            .map((key) => {
                return languages[key];
            })
            .join(", ");
    };

    const displayBorderCountries = () => {
        return borderCountries.map((country) => (
            <Link href={`/detail/${toURI(country)}`} key={country}>
                <a>
                    <div
                        className={
                            "dark:bg-dark-blue font-light text-center py-2 px-6 shadow rounded-sm"
                        }
                    >
                        {country}
                    </div>
                </a>
            </Link>
        ));
    };

    return (
        <>
            <div className={"mt-14"}>
                <div className="lg:flex-row flex flex-col">
                    <div className={"basis-2/5"}>
                        <img
                            className={
                                "md:max-h-[60vh] md:h-full lg:max-h-[70%] lg:min-h-[370px] h-[300px] w-full object-cover"
                            }
                            src={flags.svg}
                            alt={`${name.common}'s flag`}
                        />
                    </div>
                    <div className={"basis-3/5"}>
                        <div
                            className={
                                "dark:text-white lg:pl-36 lg:pt-10 pt-16 text-dark-blue-text"
                            }
                        >
                            <div className={"text-4xl mb-6 font-bold"}>
                                {name.common}
                            </div>
                            <div
                                className={
                                    "md:flex-row md:gap-40 gap-10 flex flex-col"
                                }
                            >
                                <div className={"flex flex-col gap-2"}>
                                    <DetailText
                                        title={"native name"}
                                        describe={getNativeName()}
                                    />
                                    <DetailText
                                        title={"population"}
                                        describe={population}
                                    />
                                    <DetailText
                                        title={"region"}
                                        describe={region}
                                    />
                                    {subregion && (
                                        <DetailText
                                            title={"sub region"}
                                            describe={subregion}
                                        />
                                    )}
                                    {capital && (
                                        <DetailText
                                            title={"capital"}
                                            describe={capital}
                                        />
                                    )}
                                </div>
                                <div className={"flex flex-col gap-2"}>
                                    <DetailText
                                        title={"top level domain"}
                                        describe={detail.tld}
                                    />
                                    {currencies && (
                                        <DetailText
                                            title={"currencies"}
                                            describe={getCurrencies()}
                                        />
                                    )}
                                    {languages && languages.length !== 0 && (
                                        <DetailText
                                            title={"Languages"}
                                            describe={getLanguageNames()}
                                        />
                                    )}
                                </div>
                            </div>
                            {borderCountries && (
                                <div className="mt-16">
                                    <DetailText title={"border countries"}>
                                        <div className="sm:mt-0 inline-flex flex-wrap gap-2 mt-2">
                                            {displayBorderCountries()}
                                        </div>
                                    </DetailText>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
