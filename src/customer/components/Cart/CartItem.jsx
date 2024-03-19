import React from "react";
import IconButton from "@mui/material/Grid";
import {Button} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://www.ohiotropics.com/wp-content/uploads/2020/04/callisia-navicularis-3.jpg"
            alt=""
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">Callisia Navicularis</p>

          <p className="font-semibold">price</p>
          <p className="opacity-50 line-through">actual price</p>
          <p className="text-green-600 font-semibold">discount</p>
          <div className="lg:flex items-center lg:space-x-10 pt-4">
          <div className="flex items-center space-x-2 ">
            <IconButton>
              <RemoveCircleOutlineIcon />
            </IconButton>
            <span className="py-1 px-7 border rounded-sm">3</span>
            <IconButton>
              <AddCircleOutlineIcon />
            </IconButton>
            
          </div>
          <div>
            <Button  sx={{color:"RGB(145 85 253)"}}> remove</Button>
          </div>
        </div>
        </div>
       

      </div>
    </div>
  );
};

export default CartItem;
