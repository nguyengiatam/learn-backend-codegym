const stringList = ['bRd', 'yJd', 'ur34', 'wq4', 'af', 'zs'];

const makeAllCaplock = arr => {
    return arr.map(value => value.toUpperCase())
}

const sortWord = arr => {
    arr.sort();
}

const createPromise = arr => {
    return new Promise((resolve, reject) => {
        if (arr.length === 0) {
            return reject(new Error('Mảng trống'));
        }
        resolve(arr)
    })
}

createPromise(stringList)
.then(data => {
    return makeAllCaplock(data)
})
.then(data => {
    sortWord(data);
    console.log(data);
})
.catch(err => {
    console.error(err);
})
