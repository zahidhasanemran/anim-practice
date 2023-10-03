import React from 'react';
import { motion, useScroll, useViewportScroll, useTransform } from "framer-motion";
const img1 = "http://demo.highhay.com/studiofix/img/items/img-sample2.jpg";


const Section1 = () => {
  return (
    <section id="section1" >
        
        
        <motion.h2
          initial={{y: 30, opacity: 0}}
          whileInView={{y: 0, opacity: 1}}
          transition={{
            y: {type: "spring", stiffness: 35, duration: 0.75},
            opacity: {
              // type: "spring", 
              // stiffness: 35, 
              duration: 0.2}
          }}
          viewport={{once: false}}
        >Hello Bangladesh</motion.h2>
       

        
        
        
      </section>
  );
};

export default Section1;