const fs= require('fs')

const moreWork = () => {
    console.log('work')
}
// console.log('hello');
// const age = 15
// const age2 = 30
// console.log(age+age2)
// for (let index = 1; index < 31; index++) {
//     console.log(index**2);
// }

//  const data = fs.readFileSync('./test.txt', 'utf8'); // blocks here until file is read
//  console.log(data);

// fs.readFile('./check.txt', 'utf8', (err, data) => {
//     if(err){throw new Error(err.message)}
//     console.log(data)
// })
//moreWork();

const products = JSON.parse(fs.readFileSync('./products.json', 'utf8'))

module.exports = products