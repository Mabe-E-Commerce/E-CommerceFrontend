import "./pstyle.css";
import React, { Fragment } from "react";
import { ShoppingCart } from "@material-ui/icons";
import { Card, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";

const Product = ({ pr }) => {
  return (
    <div>
      <Fragment>
        <div
          className="property"
          style={{ float: "right", marginRight: "25px" }}
        >
          <section>
            <div className="row">
              <div className="column">
                <div className="single-property">
                  <Link to={`/ProductInfo/${pr._id}`}>
                    <div className="card">
                      <div className="property-thumb">
                        <div className="property-tag"> </div>
                        {/* {img.map((item)=>{
                              <img src={item[0].image_path} alt="Laptop1" /> 
                            })} */}
                        <img src={pr?.product_images} alt="" />
                      </div>

                      <div className="property-content">
                        <h3 style={{ fontStyle: "oblique", fontSize: "22px" }}>
                          {pr.product_name}
                        </h3>
                        <div className="mark" style={{ background: "white" }}>
                          <i className="fa-solid fa-location-dot"></i>
                          <div>
                            <span style={{fontWeight:'700'}}> Ürün Özellikleri </span>
                          </div>
                          <span > {pr.product_desc} </span>
                        </div>
                      </div>

                      <div className="property-footer">
                        <div
                          className="amount"
                          style={{
                            background: "#fdae5c",
                            borderRadius: "20px",
                            padding: "0px 10px",
                            color: "white",
                            fontWeight: "300",
                            fontSize: "22px",
                            marginTop: "20px",
                          }}
                        >
                          <span className="">{pr.product_price}</span>
                          <IconButton
                            aria-label="Show cart items"
                            color="inherit"
                            style={{ marginBottom: "0px", color: "white" }}
                          >
                            <ShoppingCart />
                          </IconButton>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Fragment>
    </div>
  );
};

export default Product;
