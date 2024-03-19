import React from "react";
import "./ProductCard.css"
import { useNavigate } from 'react-router-dom'
const ProductCard = ({product}) => {
  const navigate = useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${5}`)} className="productCard w-[15rem] m-3 transition-all cursor-pointer">
      <div className="h-[20rem] w-[15rem]">
        <img
          className="h-full w-full object-cover object-left-top"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="TextPart bg-white p-3">
        <div>
          <p className="text-black opacity-100">{product.title}</p>
          <p className="text-black opacity-60">{product.description}</p>
        </div>
        <div className="">
          <p className=" font-sans font-semibold text-green-600">{product.prize}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
