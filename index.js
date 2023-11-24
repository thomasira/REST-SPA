import express from "express";
import path from "path";
import { fileURLToPath } from 'url';

/* for __dirname because not supported in ES6 module */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'index.html'))
});

app.listen(8080, () => console.log('server running...'));