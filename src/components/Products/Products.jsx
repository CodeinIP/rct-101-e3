import React,{useContext} from "react";
import { AuthContext } from "../../context/AuthContext";
import {Product} from "../Products/Product"
import { useEffect, useState } from "react";

const Products = () => {
    // const datas =  useContext(AuthContext);
    // console.log(datas);
    const [datas, setProducts] = useState([]);

    useEffect(()=>{
      let datafn = async () => {
        let data = await fetch("http://localhost:8080/products");
        let r = await data.json();
        setProducts(r);
      };
      datafn();
    },[])
  console.log(datas);
  return <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",width:"80%",margin:"auto",marginTop:"50px"}} >
  {
    datas?.map((ele)=>(
      <Product product = {ele}/>
    ))
  }
  </div>;
};

export default Products;
