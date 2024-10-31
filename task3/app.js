let students = require("./data.json");

//1
let getAllStudents = () => {
  return students;
};

//2
let getFirstStudent = () => {
  return students[0];
};

//3
let getLastStudent = () => {
  return students[students.length - 1];
};
//4
let getStudentById = (id) => {
  return students.find((el) => el.id === id);
};
// console.log(getStudentById(1));

//5
let getStudentsByStage = (stage) => {
  return students.find((el) => el.stage === stage);
};

// console.log(getStudentsByStage('Grade 11'));

//6
let addStudent = (newStudent) => {
  students.push(newStudent);
};

//7
let removeStudentById = (id) => {
  students = students.filter((el) => el.id !== id);
};

// console.log(students)
// removeStudentById(2)
// console.log(students)

//8
let updateStudentById = (id, updatedData) => {
  students.map((el) => (id === el.id ? { ...el, ...updatedData } : el));
};

// console.log(students);

//9
let getAverageAge = () => {
  return students.reduce((sum, el) => (sum += el.age), 0) / students.length;
};

//console.log(getAverageAge());

//10
let getStudentsAboveAge = (age) => {
  return students.filter((el) => el.age > age);
};

// console.log(getStudentsAboveAge(16));

//11
let getStudentsBelowAge = (age) => {
  return students.filter((el) => el.age < age);
};
// console.log(getStudentsBelowAge(15));

//12
let getStudentByName = (name) => {
  return students.find((el) => el.name === name);
};
// console.log(getStudentByName("Alice Johnson"))

//13
let sortStudentsByName = () => {
  students.sort((el1, el2) => el1.name.localeCompare(el2.name));
};
// sortStudentsByName()
// console.log(students)

//14
let sortStudentsByAge = () => {
  students.sort((el1, el2) => el1.age - el2.age);
};
// sortStudentsByAge()
// console.log(students)

//15
let filterStudentsByAge = (age) => {
  return students.filter((el) => el.age === age);
};

// console.log(filterStudentsByAge(16));
//16

let filterStudentsByStage = (stage) => {
  return students.filter((el) => el.stage === stage);
};

// console.log(filterStudentsByStage(16));

//17
let countStudents = () => {
  return students.length;
};
// console.log(countStudents())

//18
let countStudentsByStage = (stage) => {
  return students.filter((el) => el.stage == stage).length;
};
// console.log(countStudentsByStage("Grade 11"))

//19
let incrementStudentAgeById = (id) => {
  students.map((el, index) => (el.id === id ? students[index].age++ : el));
};

//incrementStudentAgeById(3);

// console.log(students);

//20
let decrementStudentAgeById = (id) => {
  students.map((el, index) => (el.id === id ? students[index].age-- : el));
};

// decrementStudentAgeById(4);
// console.log(students);

//21
let getStudentsWithIdGreaterThan = (id) => {
  return students.filter((el) => el.id > id);
};

// console.log(getStudentsWithIdGreaterThan(18))
//22
let getStudentsWithIdLessThan = (id) => {
  return students.filter((el) => el.id < id);
};
//23
let getStudentsInRangeOfIds = (startId, endId) => {
  return students.filter((el) => el.id > startId && el.id < endId);
};
// console.log(getStudentsInRangeOfIds(1,4))

//24
let getTotalAgeOfStudents = () => {
  return students.reduce((total, el) => (total += el.age), 0);
};

//console.log(getTotalAgeOfStudents());

//25
let getAverageAgeByStage = (stage) => {
  return (
    students
      .filter((el) => el.stage === stage)
      .reduce(
        (accumulator, currentValue) => (accumulator += currentValue.age),
        0
      ) / students.filter((el) => el.stage === stage).length
  );
};

// console.log("average is:"+getAverageAgeByStage("Grade 10"));

//26
let getYoungestStudent = () => {
  return students.reduce((youngest, el) =>
    el.age < youngest.age ? el : youngest
  );
};
//console.log(getYoungestStudent())

//27
let getOldestStudent = () => {
  return students.reduce((oldest, el) => (el.age > oldest.age ? el : oldest));
};
//  console.log(getOldestStudent())

//28
let hasStudentWithName = (name) => {
  return students.find((el) => el.name.includes(name));
};

//console.log(hasStudentWithName("Olivia"))

//29
let getNamesOfAllStudents = () => {
  return students.map((el) => el.name);
};
// console.log(getNamesOfAllStudents())

//30
let getAllStudentIds = () => {
  return students.map((el) => el.id);
};
// console.log(getAllStudentIds())

//31
let getAllStudentStages = () => {
  return students.map((el) => el.stage);
};
// console.log(getAllStudentStages())

//32
let getStudentsWithNamesStartingWith = (letter) => {
  return students.filter((el) => el.name[0] === letter);
};
// console.log(getStudentsWithNamesStartingWith("B"))

//33
let getStudentsWithNamesEndingWith = (letter) => {
  return students.filter((el) => el.name[el.name.length - 1] === letter);
};
// console.log(getStudentsWithNamesEndingWith("n"))

//34
let getStudentsWithNameLengthGreaterThan = (length) => {
  return students.filter((el) => el.name.length > length);
};
// console.log(getStudentsWithNameLengthGreaterThan(13))

//35
let getStudentsWithNameLengthLessThan = (length) => {
  return students.filter((el) => el.name.length < length);
};
// console.log(getStudentsWithNameLengthLessThan(10))

//36
let getAllStudentsSortedById = () => {
  return students.sort((el1, el2) => el1.id - el2.id);
};
// console.log(getAllStudentsSortedById());

//37
let reverseStudentList = () => {
  students.reverse();
};
// reverseStudentList()
// console.log(students)
//38
let getRandomStudent = () => {
  return students[(Math.random() * students.length) | 0];
};

// console.log(getRandomStudent())

//39
let removeStudentsAboveAge = (age) => {
  return students.filter((el) => el.age < age);
};

// console.log(removeStudentsAboveAge(15))

//40
let removeStudentsBelowAge = (age) => {
  return students.filter((el) => el.age > age);
};

//console.log(removeStudentsBelowAge(16))

//41
let getStudentsBetweenAges = (minAge, maxAge) => {
  return students.filter((el) => el.age > minAge && el.age < maxAge);
};

// console.log(getStudentsBetweenAges(14,17))

//42
let countStudentsAboveAge = (age) => {
  return students.filter((el) => el.age >= age).length;
};
// console.log(countStudentsAboveAge(17))

//43
let countStudentsBelowAge = (age) => {
  return students.filter((el) => el.age < age).length;
};
// console.log(countStudentsBelowAge(15))

//44
let addMultipleStudents = (newStudents) => {
  students.push(...newStudents);
};
// addMultipleStudents([{name:"james",age:23,stage:"3rd"},{name:"jack",age:25,stage:"4th"}])
// console.log(students)

//45
let removeMultipleStudentsById = (ids) => {
  students = students.filter((el) => !ids.includes(el.id));
};
// removeMultipleStudentsById([1,2,3])
// console.log(students)

//46
let updateMultipleStudentsById = (ids, updatedData) => {
  students.map((el, index) =>
    ids.includes(el.id) ? (students[index] = { ...el, ...updatedData }) : el ); };

updateMultipleStudentsById([1, 2, 3], { age: 17 });
console.log(students);

//47
let isAllStudentsAboveAge = (age) => {
  return students.length === students.filter((el) => el.age > age).length;
};
// console.log(isAllStudentsAboveAge(14))

//48
let isAllStudentsBelowAge = (age) => {
  return students.length === students.filter((el) => el.age < age).length;
};
//console.log(isAllStudentsBelowAge(17))

//49
let hasStudentsInStage = (stage) => {
  return students.filter((el) => el.stage === stage).length > 0;
};

// console.log(hasStudentsInStage("Grade 1"))

//50
let getStudentNamesWithIds = (ids) => {
  return students.filter((el) => ids.includes(el.id)).map((el) => el.name);
};

// console.log(getStudentNamesWithIds([1, 5, 3]));
