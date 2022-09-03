import { createContext, useContext, useEffect, useState } from "react";
import swr, { mutate } from "swr";

const CountriesContext = createContext({
    loading: true,
    countries: [],
    mutateSearching: () => {},
    mutateFilter: () => {},
    setSearching: () => {},
});

export default function CountriesProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [searching, setSearching] = useState(false);
    const [filtering, setFiltering] = useState(false);
    const { data: countries } = swr("/api/countries", null, {
        isPaused: () => searching || filtering,
        fallbackData: [],
    });

    const mutateFilter = async (region) => {
        try {
            await mutate("/api/countries", async () => {
                const resp = await fetch(`/api/region/${region}`);
                setFiltering(true);
                return await resp.json();
            });
        } catch (e) {
            console.log(e);
        }
    };

    const mutateSearching = async (keyword) => {
        try {
            await mutate("/api/countries", async () => {
                const resp = await fetch(
                    `/api/countries/search?keyword=${keyword}`
                );
                setSearching(true);
                const result = await resp.json();
                if (result.message) {
                    return [];
                } else {
                    return result;
                }
            });
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        if (!searching) mutate("/api/countries");
    }, [searching]);

    useEffect(() => {
        if (countries !== null) {
            setLoading(false);
        }
    }, [countries]);

    return (
        <CountriesContext.Provider
            value={{
                loading,
                countries,
                mutateSearching,
                mutateFilter,
                setSearching,
            }}
        >
            {children}
        </CountriesContext.Provider>
    );
}

export const useFetchCountries = () => {
    return useContext(CountriesContext);
};
