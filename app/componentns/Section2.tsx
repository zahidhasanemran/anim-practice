import React from 'react';
import { motion, AnimatePresence, useViewportScroll, useTransform } from "framer-motion";

const calculateDynamicDelay = (sm) => {
  return sm * 10; 
};


const Section2 = () => {

  // const { scrollY } = useViewportScroll();
  // Adjust the parallax effect values to suit your needs
  // const backgroundY = useTransform(scrollY, [0, 500], ['0%', '-50%']);
  // console.log(backgroundY, "backgroundY");
  

  return (
    <motion.section
        id="section2"
        className="relative overflow-hidde items-center bg-cover bg-fixed flex gap-x-4 justify-around "
        style={{
          backgroundImage: `url(http://demo.highhay.com/studiofix/img/items/img-sample4.jpg)`,
          
        }}
        
      >
       
        <AnimatePresence>
        {[1, 2, 3].map((sm) => {
          return (
            <motion.div 
              key={sm}
              initial={{ y: sm*30 }}
              whileInView={{ y: 0 }}
              transition={{duration: 0.75, delay: Number(`.` + calculateDynamicDelay(sm))}}
              className="single h-auto"
            >
              <h1>Hello</h1>
              <h2>There</h2>
            </motion.div>
          );
        })}
        </AnimatePresence>
        
      </motion.section>
  );
};

export default Section2;