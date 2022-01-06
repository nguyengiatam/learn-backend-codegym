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