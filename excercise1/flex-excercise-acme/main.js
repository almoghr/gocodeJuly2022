// console.log('moshe, asher')

// const myvariable = 'hello'
// myvariable = 'shalom'

// let age = 8
// console.log(age)
// age = 5

// console.log(age)

// = משמע - השמה
// ==  משמע - בדיקה לא קפדנית ולא רצויה בין שני משתנים.
// === בדיקה קפדנית ומדויקת בשוואה בין שני משתנים.

// const name1 = 'moshe'
// const firstName = 'Moshe'

// // console.log(name1 == firstName)
// console.log(name1 === firstName)
// console.log(name1 !== firstName)

// const boolVar = true
// const myname = 'almog' // true
// const emptyString = '' // false
// console.log(!boolVar)
// console.log(myname)
// console.log(!!myname)
// console.log(!!emptyString)

// const iceCream = 'chocolate';
// if(iceCream === 'chocolate') {
//   alert('Yay, I love chocolate ice cream!');    
// } else if (iceCream === 'vanilla') {
//   alert('Yay, I love vanilla ice cream!');    
// } else {
//   alert('Awwww, but chocolate or vanilla is my favorite...');    
// }


// const mendiesAge = 22;
// const almogsAge = 31;

// if(mendiesAge < 30){
//     console.log('mendy is young');
// } 

// if(mendiesAge+90 > 110){
//     console.log('hi');
// }

// if(mendiesAge === 22 && almogsAge < mendiesAge){
//     console.log('i won')
// }
// if(mendiesAge === 23 || almogsAge > mendiesAge){
//     console.log('i won2')
// }


// const maayan = 'maayan';
// if(maayan){

// }
// const val = typeof maayan === 'string' ? maayan : '';

// console.log(typeof maayan);
// let val2;

// if(typeof maayan === 'string'){
//     val2 = maayan;
// } else{
//     val2 = '';
// }


// const myAge = prompt('enter your age');

// const MedniesAge = 14;
// console.log(typeof NaN === 'number')

// function myFunc(age){
//     // console.log(isNaN(age))
//     // console.log(typeof age)
//     if(typeof parseInt(age) === 'number'){
//         const myName = prompt('what is your name')
//         if(age > 18){
//             alert('hi there ' + myName + ' you are ' + age + 'years old')
//         } else{
//             console.log('you are too young')
//         }
//     }
// }

// myFunc(myAge)
// myFunc(MedniesAge)
// const myFunc2 = () => {
//     const myName = prompt('what is your name')
//     alert('hi there ' + myName)
// }


// myFunc2()

// const multiple = (num1, num2) => {
//     return num1 * num2
// }

// // const answer = multiple(5,10)
// // console.log(answer)

// const addition = () => {
//     const num3 = 8
//     const num4 = 9
//     return num1+num2
// }
// const num1 = 5;
// const num2 = 7;

// // console.log(num3+num4) //הגלובאלי לא יכול לגשת לפנימי
// const answer = addition()
// console.log('num1 ' + num1)

// const oneFuncToRuleThemAll = (func1, func2) => {
//     console.log(func1());
//     console.log(func2())
// } 

// oneFuncToRuleThemAll(addition, multiple)


// const num1 = parseInt(prompt('תן לי מספר'))
// const num2 = parseInt(prompt('תן לי מספר שני'))
// const num3 = parseInt(prompt('תן לי מספר שלישי'))

// const numbers = (number1, number2, number3) => {
//     let high = number1;
//     // high = (num2 > high ? num2 : high);
//     // high = (num3 > high ? num3 : high);
    
//     if(high < number2) {
//         high = number2;
//     } 
//     if(high < number3) {
//         high = number3;
//     }
//     console.log(high);
// }
// numbers(num1, num2, num3)