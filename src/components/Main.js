import Toolbars from "@components/Toolbars";
import CountryCard from "@components/CountryCard";
import Link from "next/link";
import SkeletonCard from "@components/SkeletonCard";
import { useFetchCountries } from "@src/context/countries";
import { toURI } from "@src/utils";

export default function Main() {
    const { loading, countries } = useFetchCountries();

    return (
        <>
            <main>
                <div className={"md:px-16 lg:24 px-4"}>
                    <Toolbars />
                    <div
                        className={
                            "md:gap-16 md:flex-row md:items-start flex gap-8 items-center flex-col justify-between flex-wrap mt-12"
                        }
                    >
                        {countries &&
                        typeof countries === "object" &&
                        countries.length !== 0
                            ? countries.map((country) => (
                                  <Link
                                      href={`/detail/${toURI(
                                          country.name.common
                                      )}`}
                                      key={country.name.common}
                                  >
                                      <a className={"max-w-[300px] w-full"}>
                                          <CountryCard country={country} />
                                      </a>
                                  </Link>
                              ))
                            : Array.from(new Array(10)).map((i) => (
                                  <SkeletonCard key={i} />
                              ))}
                    </div>
                </div>
            </main>
            <style jsx global>{`
                body {
                    overflow: ${!countries ? "hidden" : ""};
                }
            `}</style>
        </>
    );
}
