// console.log("hello world");

// let name = "john";
// let age = 23;
// let students = ["ali", "mohammed", "ahmed"];
// let numbers = [1, 42, 22];
// let arr = ["ali", 100, true, "noor"];
// let person = {
//   name: "mohammed",
//   age: 22,
//   job: "IT Engineer",
// };

// console.log(`name: ${name}`);
// console.log(`age: ${age}`);
// console.log(students);
// console.log(numbers);
// console.log(arr);
// console.log(person);
// console.log(person.job);

// var x = "sadf";
// console.log(x);
// x = 123;
// console.log(x);

let list = [
  { name: "mohammed", age: 22 },
  { name: "ali", age: 224 },
  { name: "Ahmed", age: 101 },
  { name: "salim", age: 30 },
];
// for (let i = 0; i < list.length; i++) { console.log(list[i]); }
// list.forEach((i) => console.log(i));



function getOldest(list) {
  let oldestAge = 0;
  let oldestName;
  for (let i = 0; i < list.length; i++) {
    if (list[i].age >= oldestAge) {
      oldestAge = list[i].age;
      oldestName = list[i].name;
    }
  }
  console.log(oldestName);
}
getOldest(list);

function getMoreThan100(list) {
  let age = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].age > 100) {
      age.push(list[i]);
    }
  }
  console.log(age);
}

// getMoreThan100(list);

function firstLetterA(list) {
  let nameList = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].name[0] == "a" || list[i].name[0] == "A")
      nameList.push(list[i]);
  }
  console.log(nameList);
}
firstLetterA(list);

