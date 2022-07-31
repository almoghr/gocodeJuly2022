// const shoppingList = ['bread', 'milk', 'cheese', 15, {name:"nir"},{name:"almog"}, [1,2,3,4,5,6], true, false]

// console.log(shoppingList[0])
// const bread = shoppingList[0]
// console.log(shoppingList[0], shoppingList[1], shoppingList[4]['name'], shoppingList[shoppingList.length-2])

// // shoppingList[0] = "bread"

// for(let i = 0; i < shoppingList.length; i++){
// // console.log(Array.isArray(shoppingList[i]))
//   if(typeof shoppingList[i] === 'string'){
//     for(let j = 0; j < shoppingList[i].length; j++){
//       console.log(shoppingList[i][j])
//     }
//   } else if (typeof shoppingList[i] === 'number'){
//     console.log(shoppingList[i])
//   }else if(Array.isArray(shoppingList[i])){
//     for(let j=0; j<shoppingList[i].length; j++){
//       console.log('hello'+shoppingList[i][j])
//     }
//   } else if(typeof shoppingList[i] === 'object'){
//     console.log(shoppingList[i])
//     for (const prop in shoppingList[i]){
//       console.log(prop + ':' + shoppingList[i][prop])
//     }
//   }else if(typeof shoppingList[i] === 'boolean'){
//     console.log(shoppingList[i])
//   }
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// numbers.forEach((number) => {
//   console.log(number * number + number);
// });
// numbers.push(11)
// numbers.push(12)
// numbers.push(13)
// console.log(numbers)

// const bool = numbers.includes(5);
// const bool2 = numbers.includes(82173317289);

// console.log(bool,bool2)
// const last = numbers[numbers.length-1]

// const lastNumInTheArr = numbers.pop()
// console.log(numbers)
// console.log(lastNumInTheArr)



// // console.log('length', numbers.length)
// // const newLength = numbers.unshift(0)
// // console.log('length', newLength)
// // console.log(numbers)

// // const deletedArray = numbers.splice(4, 3)
// // console.log(deletedArray)
// // console.log(numbers)

// const deletedArray = numbers.slice(4, 7)
// console.log(deletedArray)
// console.log(numbers)

// const letters = ['a','b','c']
// const letters1 = ['d','e','f']
// const letters2 = ['g','h','i']

// const newLettersArr = letters.concat(letters1, letters2)

// console.log(newLettersArr)

// const highNumbers = numbers.filter((number) => {
//   return number*number > 25
// })


// console.log(highNumbers)


var fruits = ['Apple','banana','grapes','mango','orange','grapes'];

// function filterItems(query) {

//   return fruits.filter((el) => {
//       return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
//   })
// }

// console.log(filterItems('ap')); // ['apple', 'grapes']
// console.log(filterItems('an')); // ['banana', 'mango', 'orange']

// const foundGrapes = fruits.filter((fruit) => {return fruit === 'grapes'})
// console.log(foundGrapes)

// const foundEl = fruits.find((fruit) => {return fruit === 'grapes'})
// console.log(foundEl)

// const foundElInd = fruits.findIndex((fruit) => {return fruit === 'grapes'})
// console.log(foundElInd)

const joinedstr = fruits.join(' ')
console.log(joinedstr)
console.log(typeof joinedstr)


const googleSearchString = 'https://www.google.com/search?q=shalom&sxsrf=ALiCzsZzIYB6geGqWtFdc-BENLRDedqZqg%3A1659287728658&source=hp&ei=sLjmYtuWJOTk7_UPqoyAuAM&iflsig=AJiK0e8AAAAAYubGwP7fEc2e19Ii7AfiTnWiT1EO4m1n&ved=0ahUKEwjbrpK90KP5AhVk8rsIHSoGADcQ4dUDCAg&uact=5&oq=shalom&gs_lcp=Cgdnd3Mtd2l6EAMyBAgAEEMyBAguEEMyBAgAEEMyBwguENQCEEMyBAgAEEMyBAguEEMyBQgAEIAEMgUILhCABDIFCC4QgAQyCAguEIAEENQCOgcIIxDqAhAnOgQIIxAnOhEILhCABBCxAxCDARDHARDRAzoLCAAQgAQQsQMQgwE6DgguELEDEIMBEMcBENEDOggIABCxAxCDAToICC4QgAQQsQM6EAguELEDEIMBEMcBENEDEEM6CwguEIAEELEDEIMBOg0ILhCxAxCDARDUAhBDOgoIABCxAxCDARBDUOEBWK4GYJQIaAFwAHgAgAGbAYgB2gaSAQMwLjaYAQCgAQGwAQo&sclient=gws-wiz'

const splittedString = googleSearchString.split('/')

console.log(splittedString)
const lastElInSplittedString = splittedString[splittedString.length-1]

console.log(lastElInSplittedString)

const splittedQueryString = lastElInSplittedString.split('&')
console.log(splittedQueryString)


const newNumbers = numbers.map((number) => {
  return number**4
})

console.log(newNumbers)
console.log(numbers)