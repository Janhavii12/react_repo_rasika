import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from 'react-router-dom'
const OrderCard = () => {
  const navigate = useNavigate();
  return (
    <div onClick = {()=>navigate(`/account/order/${5}`)} className=' mt-10 p-5 shadow-md shadow-black hover:shadow-2xl border'>
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className='flex cursor-pointer'>
            <img className='w-[5rem] h-[5rem] object-cover object-top'
              src="https://www.ohiotropics.com/wp-content/uploads/2020/04/callisia-navicularis-3.jpg"
              alt=""
            />
            <div className="ml-5 space-y-2">
              <p className="">Callisia Navicularis</p>
              {/* <p className="opacity-50 text-xs font-semibold">Price:50rs</p>
              <p className="opacity-50 text-xs font-semibold">size:20cm+</p> */}
            </div>
          </div>
        </Grid>
        <Grid item xs={2}>
<p>
Price:50rs
</p>
        </Grid>
        <Grid item xs={4}>
{true && <div><p>
    <AdjustIcon sx={{width:"15px",height:"15px"}} className="text-green-600 mr-2 text-sm"/>
    <span>
        Delivered on March 03
    </span>
    </p>
    <p className="text-xs">
        Your Item Has Been Delivered
    </p>

</div>}
{false && <p>
    <span>
      Expected Delivered on March 03
    </span>
</p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
