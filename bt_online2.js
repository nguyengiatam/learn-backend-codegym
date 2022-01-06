const even = num => num % 2 === 0;
const odd = num => num % 2 !== 0;

const checkMajority = (array, callback) => {
    let totalValue = 0;
    for (const value of array) {
        if(callback(value)){
            totalValue++;
        }
    }
    if (totalValue > Math.floor(array.length/2)) {
        return true;
    }
    return false;
}

console.log(checkMajority([1,2,3,4,5], odd));
console.log(checkMajority([1,2,3,4,5,6,8], even));