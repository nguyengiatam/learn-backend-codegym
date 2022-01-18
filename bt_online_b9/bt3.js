const printAsync = function (stt) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Đây là promise thứ ${stt}`);
        }, 2000);
    });
};

async function count() {
    let promiseList = [];
    for (let i = 1; i <= 10; i++) {
        promiseList.push(printAsync(i));
    }
    console.log(promiseList);
    const resultList = await Promise.all(promiseList);
    console.log(resultList);
}

count();
