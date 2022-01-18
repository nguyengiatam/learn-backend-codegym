const { readdir, readFile, lstat } = require('fs/promises');
const path = require('path');

const getPromiseList = async (fileList, pathDir) => {
    let result = []
    for (const file of fileList) {
        let pathFile = path.join(pathDir, file);
        let fileInfor = await lstat(pathFile);
        if (fileInfor.isFile()) {
            result.push(readFile(pathFile, 'utf-8'));
        }
    }
    return result;
}

const readFilesInDir = async pathDir => {
    try {
        const dirAndFileList = await readdir(pathDir);
        const promiseList = await getPromiseList(dirAndFileList, pathDir);
        let fileContentList = await Promise.all(promiseList);
        console.log(fileContentList);
    } catch (error) {
        console.error(error);
    }
}

const pathDirectory = `${__dirname}/../bt_online_b8`;
readFilesInDir(pathDirectory);