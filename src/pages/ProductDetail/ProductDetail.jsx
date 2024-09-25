import React, { useState, useEffect } from "react";
// import classes from './ProductDetail.module.css'
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import { producturl } from "../../Api/endPoints";
import axios from "axios";
import ProductCard from "../../Components/Product/ProductCard";

import Loader from "../../Components/Loader/Loder";

function ProductDetail() {
  const [product, setProduct] = useState({});
  const [{ isLoading }, setisLoading] = useState(false);
  const { productId } = useParams();

  console.log(productId);
  useEffect(() => {
    setisLoading(true);
    axios
      .get(`${producturl}/products/${productId}`)
      .then((res) => {
        // console.log(res.data)

        setProduct(res.data);
        setisLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setisLoading(false);
      });
  }, []);
  // Adding productId to the dependency array will ensure it gets updated if productId changes
  // ,[]);

  return (
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
