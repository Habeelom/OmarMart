import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import Breadcrumb from '../Components/Breadcrumbs/Breadcrumb';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';

const Product = () => {
    const {all_product}= useContext(ShopContext)
    const {productID}= useParams();
    const product = all_product.find((e)=> e.id === Number(productID))
  return (
    <div>
      <Breadcrumb product={product}/>
      <ProductDisplay product={product}/>
    </div>
  )
}

export default Product
