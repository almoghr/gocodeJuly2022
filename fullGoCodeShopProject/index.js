const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { productAllowedUpdates } = require('./constants/allowedUpdates')
const serverResponse = require('./utils/serverResponse')
const app = express()

require("dotenv").config()

app.use(express.json())
app.use(express.static("client/build"))
app.use(cors())

//MODEL
const productSchema = new mongoose.Schema({
    category: {type: String, required:true},
    title: {type: String, required:true},
    price:{type: Number, required:true},
    image: {type: String, required:true},
    description: {type: String, required:true},
    // user:{type: Schema.Types.ObjectId, ref: 'User'} 
});
// const userSchema = new mongoose.Schema({
//     firstname: {type: String, required:true},
//     lastname: {type: String, required:true},
//     age:{type: Number, required:true},
//     email: {type: String, required:true},
//     profilePic: {type: String, required:true}
// });

// const User = mongoose.model("User", userSchema)
const Product = mongoose.model("Product", productSchema);



//ROUTES

app.get("/api/products", async (req,res)=> {
    try{
        const allProducts = await Product.find({})
        return serverResponse(res, 200, allProducts)
    } catch(e){
        return serverResponse(res, 500, {message: "internal error occured" + e})
    }
})

app.get("/api/product/:productId", async (req,res)=> {
    try{
        const productId = req.params.productId
        const product = await Product.findOne({_id: productId})
        return serverResponse(res, 200, product)
    } catch(e){
        return serverResponse(res, 500, {message: "internal error occured" + e})
    }
})

// fetch('/api/products/jewellery')

app.get("/api/products/:category", async (req,res)=> {
    try{
        const category = req.params.category
        const product = await Product.find({category})
        return serverResponse(res, 200, product)
    } catch(e){
        return serverResponse(res, 500, {message: "internal error occured" + e})
    }
})

app.post("/api/products", async (req, res) => {
    try{
        const product = new Product({...req.body})
        await product.save()
        return serverResponse(res, 200, product)
    } catch(e){
        return serverResponse(res, 500, {message: "internal error occured" + e})
    }
})

app.delete("/api/product/:productId", async (req,res)=> {
    try{
        const productId = req.params.productId
        const product = await Product.findOneAndDelete({_id: productId})
        return serverResponse(res, 200, product)
    } catch(e){
        return serverResponse(res, 500, {message: "internal error occured" + e})
    }
})

app.put("/api/product/:productId", async (req,res) => {
    const productId = req.params.productId

        const updates = Object.keys(req.body);
        const isValidOperation = updates.every((update) =>
          productAllowedUpdates.includes(update)
        );
      
        if (!isValidOperation) {
          return serverResponse(res, 400, { message: "Invalid updates" });
        }
      
        try {
            const product = await Product.findOne({_id: productId})
          if (!product) {
            return serverResponse(res, 404, { message: "product does not exist" });
          }
          updates.forEach((update) => (product[update] = req.body[update]));
          await product.save();
          return serverResponse(res, 200, product);
        } catch (err) {
          return serverResponse(res, 500, {
            message: "Internal error while trying to update user",
          });
        }
})




app.get("*", (req,res) => {
    res.sendFile(__dirname + "/client/build/index.html")
})



const { DB_USER, DB_PASS, DB_HOST, DB_NAME, PORT} = process.env;

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    app.listen(PORT || 8000, () => {
      console.log("err", err);
      console.log("Ani maazin!");
    });
  }
);