import React from "react";

const HomeSectionCard = ({product}) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-black rounded-lg shadow-lg overflow-hidden w-[15rem] h-[20rem] mx-3 border border-black">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top  w-full h-full "
          src={product.imageUrl}
          alt=""
          border="bold"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-red-600">
          {product.title}
        </h3>
        <p className="mt-2 text-sm text-white">
         {product.description}
        </p>
        
      </div>
    </div>
  );
};

export default HomeSectionCard;
