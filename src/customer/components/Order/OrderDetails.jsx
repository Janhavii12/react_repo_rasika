import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTraker from "./OrderTraker";
import { Grid } from "@mui/material";
import { Box } from "@mui/material";
import { deepPurple } from '@mui/material/colors';
import StarBorderIcon from '@mui/icons-material/StarBorder'; 

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20 ">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTraker activeStep={3} />
      </div>
      <Grid className="space-y-5" container>
        {[1,1,1,1,1].map((item)=> <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className=" flex items-center space-x-2 space-y-2 ml-5">
              <img
                className="w-[5rem] h-[rem] object-cover object-top"
                src="https://www.ohiotropics.com/wp-content/uploads/2020/04/callisia-navicularis-3.jpg"
                alt=""
              />
              <div className="space-y-2 ml-5">
                <p className="font-semibold">Callisia Navicularis</p>
                 <p className=''>size : 20cm+</p>
                <p className='text-green-400 font-semibold'>price:50rs</p>
              </div>
            </div>
          </Grid>
          <Grid item>
<Box sx={{color:deepPurple[500]}}>
<StarBorderIcon sx={{fontSize:"2rem"}} className="px-2"/>
<span>Rate & Review Product</span>
</Box>
          </Grid>
        </Grid>)}
       
      </Grid>
    </div>
  );
};

export default OrderDetails;
