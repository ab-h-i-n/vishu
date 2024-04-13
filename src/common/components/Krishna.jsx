import { motion } from 'framer-motion'
import React from 'react'


const Krishna = () => {

    const transitionProp = {
        duration : 1,
        delay : 1.4
    }

  return (
    <motion.div initial={{opacity : 0}} animate={{ opacity : 1}} transition={transitionProp} className='fixed bottom-0 right-0 translate-x-24 -translate-y-10'>
        <img src="/images/krishnaa.png"  />
    </motion.div>
  )
}

export default Krishna