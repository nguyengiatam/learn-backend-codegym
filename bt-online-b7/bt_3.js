const merge = (arr1, arr2) => {
    for (const value of arr2) {
        let elementExist = arr1.some(ele => ele === value);
        if (!elementExist) {
            arr1.push(value);
        }
    }
}

const union = (...arrayList) => {
    return arrayList.reduce((pre, cur) => {
        merge(pre, cur)
        return pre;
    }, []);
}

console.log(union([5,10,15], [15,20], [20,31,33], [4, 13, 20, 31], [35, 21, 33, 42]));