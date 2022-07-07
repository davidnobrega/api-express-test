import axios from "axios";

const poke = (async (req, res) => {
    try {
        const { pokemon } = req.params;
        console.log(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        const { name, height } = data;

        res.json({ name, height });
    } catch (err) {
        const { code, message, name } = err;
        res.send({ code, message, name })
    }

})

export {
    poke
};