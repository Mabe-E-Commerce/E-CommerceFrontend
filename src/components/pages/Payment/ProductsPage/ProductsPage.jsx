import React from 'react'
import { useSelector } from 'react-redux';
import Total from '../Total'

const ProductsPage = () => {
    const products = useSelector(state=>state.cart.products)
    
    return (
      <div>
        <Total />
        {products?.map((pr) => {
          return (
            <>
            <div className="product" >
              <img style={{width:'300px'}} src={pr.img} alt="" />
              <div className="details">
                <h1 style={{fontSize:'18px'}} > {pr.name} </h1>
                <p> {pr.desc} </p>
                <div className="price">
                  {pr.quantity} x {pr.price} SİL
                </div>
              </div>
            </div>
          </>
          )
        })}
      </div>
    )
}

export default ProductsPage