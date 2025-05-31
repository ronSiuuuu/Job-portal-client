

import React from "react";

import { motion } from "motion/react"
const Banner = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1>The  Easiest Way to Get Your New Job</h1>
        <motion.div></motion.div>
         
            <p>
              Each month, more than 3 million job seekers turn to website in their <br />
              search for work, making over 140,000 applications every single day
            </p>
          
        </div>
        <div className="flex">
            <img className="w-52" src="https://i.ibb.co/jv82JVzg/pexels-hillaryfox-1595387.jpg" alt="" />
            <img className="w-52" src="https://i.ibb.co/d0vX3hcK/groupImg.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
