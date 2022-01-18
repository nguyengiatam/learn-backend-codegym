const fs = require('fs');
const axios = require('axios');

const getImage = async () => {
    let url = '';
    let resUrl = await axios.get('https://dog.ceo/api/breeds/image/random');
    if (resUrl.data.status == 'success') {
        url = resUrl.data.message;
        console.log(url);
    }
    if (url != '') {
        let resImg = await axios.get(url, { responseType: 'arraybuffer' });
        fs.writeFile('./image.png', resImg.data, () => {
            console.log('Done');
        })
    }
}
getImage();