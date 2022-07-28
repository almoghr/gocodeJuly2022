const shoppingList = ['bread', 'milk', 'cheese', 15, {name:"nir"},{name:"almog"} [1,2,3,4,5,6], true, false]

console.log(shoppingList[0])
const bread = shoppingList[0]
console.log(shoppingList[0], shoppingList[1], shoppingList[4].name[1], shoppingList[shoppingList.length-2])

// shoppingList[0] = "bread"

for(let i = 0; i < shoppingList.length; i++){
  if(typeof shoppingList[i] === 'string'){
    for(let j = 0; j < shoppingList[i].length; j++){
      console.log(shoppingList[i][j])
    }
  } else if (typeof shoppingList[i] === 'number'){
    console.log(shoppingList[i])
  } else if(typeof shoppingList[i] === 'object'){
    for (const prop in shoppingList[i]){
      console.log(prop + ':' + shoppingList[i][prop])
    } 
  }else if(Array.isArray(shoppingList[i])){
    for(let j=0; j<shoppingList[i]; j++){
      console.log(shoppingList[i][j])
    } 
  }else{
    console.log(shoppingList[i])
  }
}