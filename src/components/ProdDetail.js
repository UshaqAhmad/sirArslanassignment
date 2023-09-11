import React from "react";
import { useParams } from "react-router-dom";
import { products } from "./data";
import "./NewSection.css"
const ProdDetail = () => {
  const params = useParams();
  const singleProd = products.find((item)=> item.id === Number(params.id))

  return (
    <>
    <h1 className="heading">Product Detail</h1>
    <div className="detailpage">
      
      <h1><img src={singleProd.image} alt="" /></h1>
      <p className="des">{singleProd.description}</p>
    
    </div>
    </>
  );
};

export default ProdDetail;
