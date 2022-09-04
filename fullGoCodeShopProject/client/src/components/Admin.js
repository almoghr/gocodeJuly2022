import React, {useState} from 'react'
import './Admin.css';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios'

const Admin = ({setListOpject, categories}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [category, setCategory] = useState('')

    const [error, setError] = useState([])

const handleSubmitProductAdding = async () => {
    setError([])
    let isValid = true
    if((title && title.length < 3) || title.length > 30){
        setError(prev => [...prev, 'the title is too short or too long, check it please'])
        isValid = false
    }
    if((description && description.length < 3) || description.length > 60){
        setError(prev => [...prev, 'the description is too short or too long, check it please'])
        isValid = false
    }
    if(price === 0){
        setError(prev => [...prev, 'no one sells things for free :)'])
        isValid = false
    }
    if(price > 999){
        setError(prev => [...prev, 'too high of a price, i will call mas hanchasa'])
        isValid = false
    }
    if(!category || !imageUrl || !description || !title || !price){
        setError(prev => [...prev, 'one of the mandatory fields is not enlisted'])
        isValid = false
    }
    
    if(!isValid){
        return
    }


    const newProduct = {title, description, price, category, image: imageUrl}
    const productAdded = await axios({method: 'post', url: 'http://localhost:8000/api/products', data: newProduct});
    setListOpject(prev => [productAdded, ...prev])
      
    setTitle('')
    setDescription('')
    setImageUrl('')
    setPrice('')
    setCategory('')
}   


  return (
    <div className="AdminPageContainer">
        <Tooltip title="dont forget: more than 3 letters and less then 30" arrow placement='right' followCursor>
        <div className={"InputWrapper"}>
            <label>title:</label>
            <input value={title} placeholder='enter your new product title' onChange={(e) => {setTitle(e.target.value)}}/>
        </div>
        </Tooltip>
        <div className={"InputWrapper"}>
            <label>description:</label>
            <input value={description} placeholder='enter your new product description' onChange={(e) => {setDescription(e.target.value)}}/>
        </div>
        <div className={"InputWrapper"}>
            <label>price:</label>
            <input type={"number"} value={price} placeholder='enter your new product price' onChange={(e) => {setPrice(e.target.value)}}/>
        </div>
        <div className={"InputWrapper"}>
            <label>url:</label>
            <input value={imageUrl} placeholder='enter your new product url' onChange={(e) => {setImageUrl(e.target.value)}}/>
        </div>
        <div className={"InputWrapper"}>
        <label>categories:</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">---------</option>
            {categories && categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
        </select>
        </div>
            <div>
            <Button variant="contained" color={error.length > 0 ? "error" : "primary"} onClick={handleSubmitProductAdding}>{error.length > 0 ? "Error found please fix" : "SUBMIT"}</Button>
            </div>
        {error.length > 0 && error.map((err, index) => <div key={index}>{err}</div>)}
    </div>
  )
}

export default Admin