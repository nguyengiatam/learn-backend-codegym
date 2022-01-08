Array.prototype.myForEach = function(callback){
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i);
    }
}

const arr = [0, 4 , 7, 8, 9, 10, 13, 18];

arr.myForEach(value => {
    if (value % 2 === 0) {
        console.log(value);
    }
})

arr.myForEach((value, index) => {
    if (value % 2 !== 0) {
        console.log(`Index các số lẻ: ${index}`);
    }
})
