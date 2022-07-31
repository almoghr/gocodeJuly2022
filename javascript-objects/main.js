// const lastName = 'chiff'

// const person = {
//     name: "mendy hatotah ",
//     age: 20,
//     doggy: " venus",
//     get : function(){console.log(this.name + this.age + this.doggy)},
//     lastName,
// }
// person.get()

// // console.log(person)


// const object = { a: 1, b: 2, c: 3, d:{e:1, f:2} };

// for (const property in object) {
//   if(property === "d"){
//   	for (const prop in object.d){
//   console.log(prop + ':' + object.d[prop])
//     }
//   }else{
//   console.log(property + ':' + object[property])}
// }

const getACatAndCheckName = (catObject, someName) => {
  if(catObject.name === someName){
    return true
  } else{
    return false
  }
}

const createCatsAndCheckName = () => {
  const allCats = {}
  for(let i = 1; i < 4; i++){
    const name = prompt(`enter your cat's name`);
    const color = prompt(`enter your cat's color`);
    const race = prompt(`enter your cat's race`)
    allCats["cat"+i] = {name, color, race}
  }
  const anyName = prompt('enter anyCatsName')

  for (const prop in allCats){
  console.log(prop)
    if(getACatAndCheckName(allCats[prop], anyName)){
      console.log(prop, 'is the right cats name')
    } else{
      console.log(prop, 'is not the right cats name')
    }
  }
}

createCatsAndCheckName()