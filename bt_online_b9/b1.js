const axios = require('axios');

async function loadJson(url) {
    const response = await axios.get(url);
    if (response.status == 200) {
        return response;
    } else {
        throw new Error(response.status);
    }
}

loadJson('https://tutorialzine.com/misc/files/example.json').then(res => console.log(res.data));