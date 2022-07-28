const lastName = 'chiff'

const person = {
    name: "mendy hatotah ",
    age: 20,
    doggy: " venus",
    get : function(){console.log(this.name + this.age + this.doggy)},
    lastName,
}
person.get()

// console.log(person)


const object = { a: 1, b: 2, c: 3, d:{e:1, f:2} };

for (const property in object) {
  if(property === "d"){
  	for (const prop in object.d){
  console.log(prop + ':' + object.d[prop])
    }
  }else{
  console.log(property + ':' + object[property])}
}