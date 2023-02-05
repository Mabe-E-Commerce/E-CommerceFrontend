import "../Propert/propert.css"
import React, { Fragment, useState, useEffect } from 'react'
import axios from "axios"
import { Button } from "@material-ui/core"

const Propert = () => {

  const [products, setProducts] = useState();

  useEffect(() => {
    getProduct();
  }, [])

  const getProduct = () => {
    axios.get("api/products")
    .then((response) => {
      setProducts(response.data.products);
      console.log(response)
      
    })

  }

  const threeProduct = products?.slice(0,3);
  

  return (

    <>
      <Fragment>
        <section className="property" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <div className="center">
            <h3>Popüler Ürünler</h3>
          </div>

          <div className="row">

            {
              threeProduct?.map((product) => {
                return (
                  <>
                    <Button href={`/ProductInfo/${product._id}`}>
                      <div className="column">
                        <div className="single-property">
                          <div className="card">
                            <div className="property-thumb">
                              <div className="property-tag"> FF</div>
                              <img src={product?.product_images} alt="Laptop1" />
                            </div>

                            <div className="property-content">
                              <h3>{product.product_name}</h3>
                              <div className="mark" style={{ background: 'white' }}>
                                <i className="fa-solid fa-location-dot"></i>
                                {/* <span> {detail.span} </span> */}
                              </div>
                              <span className="amount">{product.product_price}</span>
                            </div>

                            <div className="property-footer">
                              <ul>
                                <li>
                                  <span> {product.product_graphic} </span>
                                </li>
                                <li>
                                  <span> {product.product_processor} </span>
                                </li>
                                <li>
                                  <span> {product.product_ram} </span>
                                </li>

                              </ul>
                            </div>

                          </div>
                        </div>
                      </div>
                    </Button>
                  </>


                )
              })
            }



          </div>

          <div className="more-property">
            <label className="property-btn">Daha Fazlası</label>
          </div>

        </section>


      </Fragment>

    </>



  )
}

export default Propert