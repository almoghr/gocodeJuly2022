// const obj = {
//   employees: [
//     {name:'almog', vetek: 3, job: 'instructor'},
//     {name:'shalom', vetek: 5, job: 'manager'},
//     {name:'mendy', vetek: 7, job: 'CEO'},
//   ]
// }

// const jsonObject = JSON.stringify(obj)

// console.log(jsonObject)

//const backToObj = JSON.parse(jsonObject)

//console.log(backToObj)

//const timeoutID = setTimeout(function() { console.log('hi'); }, 10000);

//clearTimeout(timeoutID)

//const intervalID = setInterval(function() { console.log('moshe and mendy') }, 2000);

let isAdmin = false
console.log(1);
  const timeOutID = setTimeout(function() {
    console.log(2);
  }, 5000);  
  console.log(3);

if(isAdmin){
  clearTimeout(timeOutID)
}