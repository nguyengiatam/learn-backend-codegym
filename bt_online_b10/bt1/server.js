const express = require('express');
const { readFile } = require('fs/promises');
const app = express();

const getData = async () => {
    const data = await readFile('./city.list.json', 'utf-8');
    return data;
}

