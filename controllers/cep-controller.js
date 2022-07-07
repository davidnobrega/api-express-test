import axios from "axios";

const getviaCep = (async (req, res) => {
    try {
        const { numero } = req.params;
        const { data } = await axios.get(`https://viacep.com.br/ws/${numero}/json/`);
        res.json(data);
    } catch (err) {
        const { code, message, name } = err;
        res.send({ code, message, name })
    }

})

export {
    getviaCep
};
