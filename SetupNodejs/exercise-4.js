const listDayOfTheWeek = ['chủ nhật', 'thứ hai', 'thứ ba', 'thứ tư', 'thứ năm', 'thứ sáu', 'thứ bảy'];
const date = new Date();
const today = date.getDay();
console.log(`Hôm nay là ${listDayOfTheWeek[today]}`);