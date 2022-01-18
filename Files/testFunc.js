function test(params) {
    let value = params + 2;
    function result(newParams) {
        return newParams*value;
    }
    return result
}

console.log(test(2)(3));