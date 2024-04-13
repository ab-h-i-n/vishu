import React from "react";
import { easeInOut, motion } from "framer-motion";

const Kanikonna = () => {

  const transitionProp1 = {
    duration: 7,
    delay: 1.5,
    repeat: Infinity,
    smooth : true
  };

  const transitionProp2 = {
    duration: 0.7,
    delay: 1.3,
    easeInOut
  };

  return (
    <motion.div 
      initial={{x : '0%'}}
      animate={{x : ['0%', '5%', '0%'], rotate : [0, 5, 0]}}
      transition={transitionProp1}
    >
      <motion.div
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "-10%", opacity: 1 }}
        transition={transitionProp2}
      >
        <img src="/images/kanikonna.png" />
      </motion.div>
    </motion.div>
  );
};

export default Kanikonna;
