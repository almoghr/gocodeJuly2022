// var age
// if(age === 12){
//   console.log("In")
// }
// console.log(age)

// age = 12

// function sayHi() {
  
//     phrase = "Hello"; // assignment
  
//     if (true) {
//       var phrase; // declaration
//   }
  
//   alert(phrase);
// }

// sayHi()


// const person = {
//   name: 'David'
// };
// person.name = 'Moshe';
// person.namee = 'haim'

// console.log(person); // {name: 'Moshe'}

// const person1 = Object.freeze( {name: 'David'} );
// person1.name = 'Moshe';
// person1.age = 12;

// console.log(person1); // {name: 'David'}

// namedFunc();

// function namedFunc() {
//   console.log([1,2,3])
// }


// if(3+3 === 6){
//   var names = [1,2,3]
// }
// // namedFunc()
// console.log(names)

// console.log(some)

// var some;

// const a = 'moshe'
// const b = 'ogalbo' 
// const c = 'mendy the mentor'

// console.log(a + ' ' + b + ' ' + 'is learning javascript with' + ' ' + c )

// console.log(`${a} ${b} is learning javascript with ${c}`)

// const add = (a, b) => {
//   return a + b;
// };
// console.log(add(2, 3)); // 5



// const add2 = (a, b) => a + b;
// console.log(add2(5, 7))

// if(1+1===2) {
//   return true
// }

// function sum(x, y, z) {
//   return x + y + z;
// }

// const numbers = [1, 2, 3];
// const words = ['hello', 'everyone', 'i', 'am', 'learning', 'javascript']

// console.log(sum(numbers[0], numbers[1], numbers[2]))
// console.log(sum(...numbers));
// console.log(...words)

// const person = {name:'moshe', age:35, gender:"male"};
// const newPerson2 = Object.values(person)
// const newPerson3 = Object.keys(person)
// const newPerson4 = Object.entries(person)
// console.log(...newPerson2)
// console.log(...newPerson3)
// console.log(...newPerson4)

// const newPerson = {...person}

// console.log(newPerson)
// expected output: 6

// let obj1 = { foo: 'bar', x: 42 };
// let obj2 = { foo: 'baz', y: 13 };

// // let clonedObj = { ...obj1 };
// // // Object { foo: "bar", x: 42 }

// let mergedObj = { ...obj2, ...obj1 };
// // Object { foo: "bar", x: 42, y: 13 }

// obj1 = { ...obj1, ...obj2}
// console.log(obj1)

// [a, b, ...rest] = [10, 20, 30, 40, 50,43,324,634,45643,3,312,412,421,312,321,45,64,357,658,6787,5342,12,8];
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // [30, 40, 50]

const dog = {
  species:"vimerhamner",
  age:"20",
  color:"brown",
  name:"venus"
}

const {species, color, hash} = dog
console.log(species)
console.log(color)
console.log(hash)



