import React from 'react'
import Product from './Products/Product'
import Footer from '../Home/Footer/MyFooter'
import Services from '../Home/Services/Services'
import "./allpr.css"

function AllProducts() {

  

  return (
    <>
        
        <div className='home' >
            <Product />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Services />
        <Footer />
                
    </>
    

  )
}

export default AllProducts