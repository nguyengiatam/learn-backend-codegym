const axios = require('axios');
const fs = require('fs');

const api = ' https://api.coindesk.com/v1/bpi/currentprice.json';

const getExchangeRate = async () => {
    const response = await axios.get(api);
    const data = response.data.bpi;
    if (response.status == 200) {
        fs.writeFile('exchange-rate.json', JSON.stringify(data), () => {
            console.log('done');
        })
    }
}

getExchangeRate();