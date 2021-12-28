const students = [
    {
        name: 'obj1',
        gender: 'male',
        score: 7,
    },
    {
        name: 'obj2',
        gender: 'female',
        score: 6,
    },
    {
        name: 'obj3',
        gender: 'female',
        score: 9,
    },
    {
        name: 'obj4',
        gender: 'male',
        score: 9,
    },
    {
        name: 'obj5',
        gender: 'female',
        score: 8,
    }
];

const totalScoreMale = students.reduce((total, student) => {
    total += Object.is(student.gender, 'male') ? student.score : 0;
    return total;
},0);

const totalScoreFemale = students.reduce((total, student) => {
    total += Object.is(student.gender, 'female') ? student.score : 0
    return total;
},0);
const numberOfMale = students.reduce((total, {gender}) => {
    total += Object.is(gender, 'male') ? 1 : 0;
    return total;
}, 0);

const numberOfFemale = students.length - numberOfMale;

const averageScoreMale = totalScoreMale/numberOfMale;

const averageScoreFemale = totalScoreFemale/numberOfFemale;

console.log(averageScoreMale + ' ' + averageScoreFemale);

