import './pstyle.css'
import React, {useState} from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import Prod from './Prod';
import Filter from './Filter'


const Product =() => {
  

    const [products,setProducts] = useState([]);
    const [filtered,setFiltered] = useState([]);
    const [genre,setGenre] = useState(0);
    useEffect(()=>{
      getProduct()
    },[]);
    
    

    const getProduct = () => {
      axios.get("api/products")
      .then((response) => {
        setProducts(response.data.products);
        setFiltered(response.data.products);
        console.log(response)
        // console.log(response)
      })
    }
  return ( 
    <>
      <Filter product={products} setFiltered={setFiltered} genre={genre} setGenre={setGenre} />
      <div className="product-row" style={{float:'right',marginLeft:'2em',justifyContent:'center',alignItems:'center'}}>
        {filtered.map((product, index) => {
          if (index % 3 === 0) {
            return (
              <>
                <Prod key={product._id} pr={product} />
                {filtered[index + 1] && <Prod key={filtered[index + 1]._id} pr={filtered[index + 1]} />}
                {filtered[index + 2] && <Prod key={filtered[index + 2]._id} pr={filtered[index + 2]} />}
              </>
            );
          }
          return null;
        })}
      </div>
    </>
  )
}

export default Product