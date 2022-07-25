const myName = "moshe ogalbo hamelech";

console.log(myName.length);

console.log(myName[myName.length-1]);

for(let i = 0; i < myName.length; i++){
    console.log(myName[i])
}

console.log(myName.indexOf('e'))
console.log(myName.lastIndexOf('e'))

const myName2 = 'iLOr'

const loweredCasedMyName2 = myName2.toLowerCase()

console.log(myName2.toLowerCase())

// console.log(loweredCasedMyName2)

const date = '25.07.2022:20:55'

const indefOfNekudotaim = date.indexOf(':')

const onlyHoursAndMinutes = date.slice(indefOfNekudotaim)
const a = date.slice(2, 5)

console.log(onlyHoursAndMinutes)
console.log(a)

const onlyDate = date.slice(0, indefOfNekudotaim)

console.log(onlyDate);

console.log(myName.includes('melech'))
console.log(myName.includes('meleh'))

const myName3 = 'shalom haverim'
const cuttedName3 = myName3.substr(2, 3)
const cuttedNameAgain = myName3.slice(2,3)
console.log(cuttedName3)
console.log(cuttedNameAgain)

const newMyName = myName.replace(/ /g, '')

console.log(newMyName)

const firstName = 'asher '
const lastName = 'chiff'

const fullName = firstName.concat(lastName, " hamelech", " metim alav")

console.log(fullName);

const weirdStr = '    shalom lahem haverim    ';
const trimmedStr = weirdStr.trim();

console.log(trimmedStr);



