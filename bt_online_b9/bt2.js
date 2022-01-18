const { readFile } = require('fs/promises');

async function readFileContent(path) {
    try {
        const contentFile = await readFile(path, 'utf-8');
        return contentFile;
    } catch (error) {
        console.error(error.message);
    }
}

readFileContent(`${__dirname}/b1.js`)
    .then(content => console.log(content))