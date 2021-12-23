const array = [2, 5, 6, 456, 2, 76, 1000, 123, 888];
let max = 0;
array.forEach(element => max = element > max ? element : max);
console.log(max);