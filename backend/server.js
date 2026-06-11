const express = require('express');
const cors = require('cors');
const fs = require('fs'); // Módulo para leer archivos
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware para que el servidor pueda entender JSON y servir archivos estáticos
app.use(cors()); // Esto permite que tu frontend se comunique con el backend
app.use(express.static(path.join(__dirname, '../frontend'))); // Esto le dice a Express que exponga los archivos de la carpeta frontend

// Esto hace que, al entrar a la URL principal, se cargue tu index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.get('/bitcoin', (req, res) => {
    // Leemos el archivo
    fs.readFile('files/bitcoin.json', 'utf8', (err, data) => {
        if (err) {
            console.log("Error detectado:", err);
            return res.status(500).json({ error: 'The file could not be read' });
        }
        try {
            const objetoJS = JSON.parse(data);
            res.json(objetoJS);
        } catch (parseError) {
            res.status(500).json({ error: 'Error processing the JSON data' });
        }
    });
});

app.get('/ethereum', (req, res) => {
    // Leemos el archivo
    fs.readFile('files/ethereum.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'The file could not be read' });
        }
        try {
            const objetoJS = JSON.parse(data);
            res.json(objetoJS);
        } catch (parseError) {
            res.status(500).json({ error: 'Error processing the JSON data' });
        }
    });
});

app.get('/usdt', (req, res) => {
    // Leemos el archivo
    fs.readFile('files/usdt.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'The file could not be read'});
        }
        try {
            const objetoJS = JSON.parse(data);
            res.json(objetoJS);
        } catch (parseError) {
            res.status(500).json({ error: 'Error processing the JSON data'});
        }
    });
});

app.get('/litecoin', (req, res) => {
    // Leemos el archivo
    fs.readFile('files/litecoin.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'The file could not be read'});
        }
        try {
            const objetoJS = JSON.parse(data);
            res.json(objetoJS);
        } catch (parseError) {
            res.status(500).json({ error: 'Error processing the JSON data'});
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});