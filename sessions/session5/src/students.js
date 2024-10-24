let students = [
  {
    name: "ali",
    age: 20,
    stage: 1,
  },
  {
    name: "Ahmed",
    age: 21,
    stage:22,
  },
  {
    name: "Salim",
    age: 23,
    stage: 3,
  },
  {
    name: "Noor",
    age: 24,
    stage: 4,
  },
];


// function getAll() {
//   return students
// }
let getAll = () => {
  return students
}
// function getFirst() {
//   return students[0]
// }

let getFirst = ()=> {
  return students[0]
}
// function getLast() {
//   return students[students.length -1]
// }

let getLast =() => {
  return students[students.length -1]
}

let printAll= ()=>{
  let list = students.map((el,index )=>{
    el.id = index
    //el.id = students.indexof(el)
    return el
  })
  console.log(list)
}
// let name = students.find(el=> el.name=== "Ahmed")
// let name = students.find(el=> el.name[0]=== "A")

module.exports = {getFirst ,getAll, getLast, printAll};
