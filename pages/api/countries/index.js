// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const API_BASED = "https://restcountries.com/v3.1";

const getAllCountries = async (req, res) => {
    try {
        const URL =
            API_BASED + "/all?fields=name,flags,capital,region,population";

        const resp = await fetch(URL);
        const data = await resp.json();

        res.json(data);
    } catch (e) {
        console.log(e);
        res.json({
            ...e,
        });
    }
};

export default async function handler(req, res) {
    await getAllCountries(req, res);
}
