import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";
import useDebounce from "@hooks/useDebounce";
import { useFetchCountries } from "@src/context/countries";

export default function Toolbars() {
    return (
        <>
            <div className="md:mt-[50px] md:flex-row md:items-center mt-[30px] gap-8 flex flex-col justify-between ">
                <SearchBar />
                <Filter />
            </div>
        </>
    );
}

const SearchBar = () => {
    const [typing, setTyping] = useState("");
    const keyword = useDebounce(typing, 400);

    const { mutateSearching, setSearching } = useFetchCountries();

    useEffect(() => {
        if (keyword) mutateSearching(keyword);
        else setSearching(false);
    }, [keyword]);

    return (
        <>
            <div
                className={
                    "md:w-[500px] lg:[470px] dark:bg-dark-blue w-full flex h-[55px] bg-white shadow-tools rounded-lg"
                }
            >
                <div
                    className={
                        "md:w-[60px] w-[50px] flex justify-end items-center"
                    }
                >
                    <div>
                        <FontAwesomeIcon
                            icon={faSearch}
                            size={"lg"}
                            className={"dark:text-white text-dark-gray"}
                        />
                    </div>
                </div>
                <div className={"flex-1 pl-3 pr-6 flex items-center"}>
                    <input
                        type="text"
                        value={typing}
                        onChange={(e) => setTyping(e.target.value)}
                        placeholder={"Search for a country..."}
                        className={
                            "dark:text-white h-[40px] w-full text-dark-gray font-semibold text-lg bg-transparent"
                        }
                    />
                </div>
            </div>
        </>
    );
};

const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

const Filter = () => {
    const [isOpened, setOpen] = useState(false);
    const [selected, setSelected] = useState("Filter by Region");

    const { mutateFilter } = useFetchCountries();

    const filterRegion = useCallback(
        (region) => {
            setSelected(region);
            if (!regions.includes(region)) return;

            mutateFilter(region);
        },
        [selected]
    );

    return (
        <>
            <div
                onClick={() => setOpen(!isOpened)}
                className={
                    "md:w-[240px] md:cursor-pointer dark:bg-dark-blue dark:text-white w-[190px] relative h-[55px] px-4 bg-white rounded-lg shadow-tools flex items-center justify-between"
                }
            >
                <div className={"font-semibold text-md"}>{selected}</div>
                <span>
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        size={"sm"}
                        rotation={isOpened ? 180 : 0}
                    />
                </span>
                <div
                    className={"dark:bg-dark-blue flex flex-col py-2 w-full absolute top-[60px] left-0 bg-white shadow-tools rounded-lg ".concat(
                        isOpened ? "block" : "hidden"
                    )}
                >
                    {regions.map((region) => (
                        <div
                            key={region}
                            className={
                                "text-md py-2 px-4 font-semibold w-full dark:hover:bg-dark-blue-background hover:bg-light-gray"
                            }
                            onClick={() => filterRegion(region)}
                        >
                            {region}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};
