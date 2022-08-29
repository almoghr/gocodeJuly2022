const fs = require('fs')
const products = require('./products')

const newProduct = {
    "id": 22,
    "title": "Laptops",
    "price": 2394.95,
    "description": "Stash padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": { "rate": 5, "count": 747 }
  }
  products.push(newProduct);

  fs.writeFile("./products.json", JSON.stringify(products, (err) => { 
 
	// Checking for errors 
	if (err) throw err; 
 
	console.log("Done writing"); // Success 
})

// fs.writeFile("./check.js", 'console.log(js)', (err) => { 
 
// 	// Checking for errors 
// 	if (err) throw err; 
 
// 	console.log("Done writing"); // Success 
// }); // apperantly possible
