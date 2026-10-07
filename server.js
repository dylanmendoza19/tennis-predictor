const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("🎾 SERVIDOR TENNIS PREDICTOR ACTIVO");
});

app.get("/api/partidos", async (req, res) => {
    try {
        const apiKey = process.env.RAPIDAPI_KEY || "";
        console.log("API KEY CARGADA:", apiKey ? "SÍ" : "NO");

        // URL completa con los parámetros obligatorios que exige 'Tennis API - ATP WTA ITF'
        const url = "https://tennis-api-atp-wta-itf.p.rapidapi.com/tennis/v2/upcoming/matches?page=1&autoPost=true&limit=10&include=all&includeAll=true";

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "x-rapidapi-key": apiKey,
                "x-rapidapi-host": "tennis-api-atp-wta-itf.p.rapidapi.com"
            }
        });

        const datos = await response.json();
        console.log("Respuesta obtenida de RapidAPI:", datos);

        res.json(datos);

    } catch (error) {
        console.error("Error en servidor:", error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`🎾 Servidor funcionando en http://localhost:${PORT}`);
});