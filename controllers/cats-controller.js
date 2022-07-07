import axios from "axios";

const cats = (async (req, res) => {
    try {
        const { raca } = req.params;
        const { data } = await axios.get(`https://api.thecatapi.com/v1/breeds/NOME/${raca}/json/`);
        const { name, description } = data;
        res.json(data);
    } catch (err) {
        const { code, message, name } = err;
        res.send({ code, message, name })
    }

})

export {
    cats
};