import BackButton from "@components/BackButton";
import axios from "axios";
import { toURI } from "@src/utils";
import DetailCountry from "@components/DetailCountry";

export default function DetailPage({ detail, borderCountries }) {
    return (
        <>
            <main className={"pt-[70px] pb-20"}>
                <div className={"md:px-16 lg:24 px-6"}>
                    <BackButton />
                    <DetailCountry
                        detail={detail}
                        borderCountries={borderCountries}
                    />
                </div>
            </main>
        </>
    );
}

export const getStaticPaths = async (context) => {
    const API_URL = "https://restcountries.com/v3.1/all?fields=name";
    const { data } = await axios.get(API_URL);

    const paths = data.map((country) => ({
        params: {
            country: toURI(country.name.common),
            slug: "folkmoz",
            id: "folkmoz",
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps = async ({ params: { country } }) => {
    const replaceName = country.replaceAll("-", " ");
    const encodedReplaceName = encodeURI(replaceName);
    const encodedName = encodeURI(country);
    const API_URL = `https://restcountries.com/v3.1/name/`;
    let detail;
    let borderCountries = [];

    try {
        const resp = await axios.get(API_URL + encodedReplaceName);
        detail = resp.data[0];
    } catch (e) {
        const resp = await axios.get(API_URL + encodedName);
        detail = resp.data[0];
    }

    if (!detail) {
        return {
            redirect: {
                destination: "/",
                permanent: true,
            },
        };
    }

    const { borders } = detail;
    if (!borders || typeof borders === "undefined") {
        return {
            props: {
                detail,
                borderCountries: null,
            },
        };
    }

    const endpoints = borders.length <= 3 ? borders : borders.slice(0, 3);
    const API_BASED = `https://restcountries.com/v3.1/alpha?codes=${endpoints.toLocaleString()}&fields=name`;

    const { data } = await axios.get(API_BASED);
    borderCountries = data.map((r) => r.name.common);

    return {
        props: {
            detail,
            borderCountries,
        },
    };
};
