const licensePlateList = ['25b 1234','28b 1234','29b 1234','35b 1234','36b 1234','53b 1234','31b 1234','20b 1234','21b 1234','34b 1234','40b 1234','32b 1234',];

const checkLicensePlate = licensePlate => {
    const regex = /^(29|30|31|32|33|40)/;
    return regex.test(licensePlate);
}

const resultList = licensePlateList.filter(element => checkLicensePlate(element));
console.log(resultList);