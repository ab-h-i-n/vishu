import React from "react";
import { motion } from "framer-motion"; 

const FruitBascket = () => {

    const transitionProp = {
        duration : .8,
        delay : 1
    }

    return (
        <motion.div
            className="fixed bottom-0  z-10"
            initial={{ y :'100%', opacity : 0 , x : '-50%' }}
            animate={{ y : '10%' , opacity : 1  }}
            transition={ transitionProp }
        >
            <img src="/images/fruit_bascket.png" />
        </motion.div>
    );
};

export default FruitBascket;
