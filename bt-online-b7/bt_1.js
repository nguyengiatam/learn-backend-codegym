function count(array, callback) {
    let totalEven = 0;
    let totalObb = 0;
    for (let value of array) {
        if(callback(value) === 'even'){
            totalEven++;
        } else {
            totalObb++;
        }
    }
    return {even: totalEven, obb: totalObb};
}

console.log(count([1, 2, 3, 4, 5, 6, 7], function(num){
    if(num % 2 === 0){
        return 'even'
    }
    return 'obb';
}));