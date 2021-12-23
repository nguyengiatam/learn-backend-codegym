const prompt = require('prompt-sync')({sigint:true});
const number = +prompt('Nhập vào số cần kiểm tra: git ');

const checkPrimeNumber = value => {
    if (value < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) {
            return false;
        }
    }

    return true;
}

if (checkPrimeNumber(number)) {
  console.log(number + " là số nguyên tố");
} else {
  console.log(number + " không phải là số nguyên tố");
}
