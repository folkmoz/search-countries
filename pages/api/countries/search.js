// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const API_BASED = "https://restcountries.com/v3.1";

const searchCountries = async (req, res) => {
    const {
        query: { keyword },
    } = req;
    try {
        const URL = API_BASED + `/name/${keyword}`;

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
    await searchCountries(req, res);
}
