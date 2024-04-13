import { delay, motion, px } from 'framer-motion'
import React from 'react'
import Wish from './Wish'

const HappyVishuText = ({text}) => {

  const transitionProp = {
    duration: 1,
    delay: 1.8,
  }

  return (
    <motion.div initial={{opacity : 0, scale : 3.2 , filter : 'blur(20px)'}} animate={{opacity : 1 , scale : 1, filter : 'blur(0px)'}} transition={transitionProp} className='fixed -left-5 top-[25%] w-80'>
        <span className='absolute text-2xl text-white font-bold translate-x-[120px] translate-y-[53px] -rotate-[9deg]'>Happy</span>
        <img src="/images/HappyVishu.png"  />
        <Wish text={text} />
    </motion.div>
  )
}

export default HappyVishuText