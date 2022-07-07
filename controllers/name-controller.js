import axios from "axios";

const name = (async (req, res) => {
    try {
        const { nome } = req.params;
        console.log(`https://api.agify.io/?name=David/${nome}`)
        const { data } = await axios.get(`https://api.agify.io/?name=David/${nome}`);
        const { name, age, count } = data;

        res.json({ name, age, count });
    } catch (err) {
        const { code, message, name } = err;
        res.send({ code, message, name })
    }

})

export {
    name
};