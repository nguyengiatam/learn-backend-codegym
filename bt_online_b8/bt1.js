const checkGreater = num => {
    return new Promise((resolve, reject) => {
        if (num < 10) {
            return reject(false);
        }
        resolve(true)
    })
}

checkGreater(12)
.then(result => {
    console.log(result);
})
.catch(err => {
    console.log(err);
})