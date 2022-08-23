import React, { useContext } from 'react'
import './ProductsWindow.css'
import ProductForDisplay from './ProductForDisplay'
import  MyContext  from '../MyContext'


const ProductsWindow = ({AddProductToCart}) => {

    const { listOpject, filteredProducts } = useContext(MyContext);


    const customList = filteredProducts.length > 0 ? filteredProducts : listOpject
    
    const productListDisplay = customList.map((element, index) => (
        <ProductForDisplay
            key={(index)}
            title={element.title}
            image={element.image}
            category={element.category}
            price={element.price}
            functioButton={() => AddProductToCart(element)}
        />
    ));

    if(!listOpject && !filteredProducts){
        return <section className='loader'>{}</section>
    }


    return (
        <>
            <section className="products">{productListDisplay}</section>
        </>

    )

}

export default ProductsWindow