import { useEffect } from "react";
import DetailText from "@components/DetailText";

export default function CountryCard({ country }) {
    const { flags, name, population, region, capital } = country;

    return (
        <>
            <div
                className={
                    "md:w-[300px] dark:text-white dark:bg-dark-blue mb-8 w-full text-dark-blue-text shadow-tools bg-white rounded-xl overflow-hidden"
                }
            >
                <div>
                    <img
                        className={"h-[165px] w-full object-cover"}
                        src={flags.svg}
                        alt={`${name.common}'s flag`}
                    />
                </div>
                <div className={"px-4 py-6"}>
                    <div className="text-md font-bold">{name.common}</div>
                    <div className={"mt-4 flex flex-col gap-1"}>
                        <DetailText
                            title={"population"}
                            describe={population}
                        />
                        <DetailText title={"region"} describe={region} />
                        <DetailText title={"capital"} describe={capital} />
                    </div>
                </div>
            </div>
        </>
    );
}
