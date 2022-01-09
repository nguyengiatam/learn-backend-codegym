const {readdir, readFile} = require('fs/promises');
const {statSync} = require('fs');
const path = require('path');

const pathDir = `${__dirname}/file-list`

readdir(pathDir)
.then(fileList => {
    let promiseList = [];
    for (const file of fileList) {
        let pathFile = path.join(pathDir, file)
        if (statSync(pathFile).isFile()) {
            promiseList.push(readFile(pathFile, 'utf-8'));
        }
    }
    return promiseList;
})
.then(promiseList => {
    console.log(promiseList);
    return Promise.all(promiseList)
})
.then(contentList => {
    console.log(contentList);
})
.catch(err => {
    console.error(err);
})