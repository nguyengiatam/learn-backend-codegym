const express = require('express');
const { readFile } = require('fs/promises');
const app = express();

app.get('/', async (req, res, next) => {
    try {
        const img = await readFile(`${__dirname}/image.png`);
        res.writeHead(200, {'Content-Type': 'image/png'});
        res.end(img);
    } catch (error) {
        console.log(error);
    }
})

app.listen(3000)