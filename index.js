import 'dotenv/config'
import express from "express"
import { getviaCep } from "./controllers/cep-controller.js"
import { cats } from "./controllers/cats-controller.js"
import { poke } from "./controllers/pokemon-controller.js"
import { name } from "./controllers/name-controller.js"
import { person } from "./controllers/person-controller.js"
const app = express()
app.use(express.json())

app.get("/cep/:numero", getviaCep);
app.get("/cats/:raca", cats);
app.get("/poke/:pokemon", poke)
app.get("/name/:pessoa", name)
app.get("/person", person)

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Servidor Rodando na url http://localhost:${process.env.SERVER_PORT}`)
});
