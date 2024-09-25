import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'
import classes from './Product.module.css'
import Loder from '../Loader/Loder'

function Product() {
    const [Products, setProducts]=useState()
    const [isLoading, setisLoading] =useState(false)
    useEffect(()=>{
      setisLoading(true)
       
        axios
          .get("https://fakestoreapi.com/products")
          .then((res) => {
            // console.log(res);//we 20 datas on console
            setProducts(res.data);
            setisLoading(false);
          })
          .catch((err) => {
            console.log(err);
            setisLoading(false);
          });
        
    }, []);
    console.log(isLoading);
    
    
  return (
    <>
      {isLoading ? (
        <Loder />
      ) : (
        <section className={classes.products_container}>
          {Products?.map((singleProduct) => {
            return (
              <ProductCard renderAdd={true} product={singleProduct} key={singleProduct.id} />
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product