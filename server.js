const express = require("express");
const WebSocket = require("ws");
const axios = require("axios");
const path = require("path");

const app = express();
const port = 3000;
const wsPort = 8081;

// Servir les fichiers statiques depuis le dossier "public"
app.use(express.static(path.join(__dirname, "public")));

// Création du serveur WebSocket
const wss = new WebSocket.Server({ port: wsPort });

let vmixConnected = true; // État de connexion à vMix
let lastErrorTime = 0; // Pour limiter la fréquence des logs d'erreur

// Fonction pour récupérer l'état de vMix
async function getVmixState() {
    try {
        const response = await axios.get("http://127.0.0.1:8088/api");
        vmixConnected = true;
        return response.data;
    } catch (error) {
        const currentTime = Date.now();
        if (vmixConnected || currentTime - lastErrorTime > 5000) {
            console.error("❌ Error: Unable to connect to vMix. Make sure vMix is running.");
            lastErrorTime = currentTime;
        }
        vmixConnected = false;
        return null;
    }
}

// Diffusion des données en temps réel
setInterval(async () => {
    const data = await getVmixState();
    wss.clients.forEach(client => {
        if (client.readyState === WebSocket.OPEN) {
            if (data) {
                client.send(data);
            } else {
                client.send(JSON.stringify({ error: "vMix not detected", vmixConnected: false }));
            }
        }
    });
}, 250); // Mise à jour toutes les 500ms

// Gestion des connexions WebSocket
wss.on("connection", ws => {
    console.log("🔗 New WebSocket connection established");

    ws.on("close", () => {
        console.log("❌ WebSocket connection closed");
    });

    ws.on("error", err => {
        console.error("⚠️ WebSocket error:", err);
    });
});

// Lancement du serveur HTTP
app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
    console.log(`🔌 WebSocket server listening on port ${wsPort}`);
});
