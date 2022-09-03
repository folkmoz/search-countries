// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

const API_BASED = "https://restcountries.com/v3.1/region/";

const getCountriesByRegion = async (req, res) => {
    const {
        query: { region },
    } = req;

    try {
        const { data } = await axios.get(
            API_BASED + region + "?fields=name,flags,population,capital"
        );

        res.json(data);
    } catch (e) {
        console.log(e);
        res.json({
            ...e,
        });
    }
};

export default async function handler(req, res) {
    await getCountriesByRegion(req, res);
}
