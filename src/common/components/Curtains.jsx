import React from "react";
import { motion } from "framer-motion";

const Curtains = () => {

  const transitionProp = {
    duration : 1,
    delay : .5
  }

  return (
    <div>
      <motion.img
        src="/images/left_curtain.png"
        className="h-screen fixed left-0"
        initial={{ x: '0%' }}
        animate={{ x: '-100%' }} 
        transition={ transitionProp } 
      />
      <motion.img
        src="/images/right_curtain.png"
        className="h-screen fixed right-0"
        initial={{ x: '0%' }} 
        animate={{ x: '100%' }} 
        transition={ transitionProp } 
      />
    </div>
  );
};

export default Curtains;
