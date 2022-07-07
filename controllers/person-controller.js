import axios from "axios";

const person = (async (req, res) => {
    try {
        const { data } = await axios.get(`https://randomuser.me/api`);
        const { results } = data;

        let response = results[0]

        response = {
            nome: `${response.name.first} ${response.name.last}`,
            sexo: (response.gender === "male") ? "masculino" : "feminino",
            dataDeNascimento: response.dob.date,
            idade: response.dob.age,
            endereço: `${response.location.street.name}, ${response.location.street.number}`,
            cidade: response.location.city,
            estado: response.location.state,
            pais: response.location.country,
            cep: response.location.postcode,
            email: response.email,
            telefone: response.phone,
            celular: response.cell,
            foto: response.picture.large
        }

        res.json(response);
    } catch (err) {
        const { code, message, name } = err;
        res.send({ code, message, name })
    }

})

export {
    person
};