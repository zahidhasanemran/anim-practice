import React from 'react';
import {
  useViewportScroll,
  motion,
  useTransform
} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Sectioin3 = () => {

  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });

  // console.log(entry);

 

  return (
    <div className='section3' >
        <div className="ustad"  >
          <motion.div
            className="w-[550px] h-[500px] border border-[#fff] rounded mx-auto mt-[400px] "
            style={{ y: y1, x: -50 }}
          ></motion.div>
          <motion.div 
            className="w-[550px] h-[500px] border border-[#fff] rounded mx-auto mt-[200px] "
            style={{ y: y2, x: 50 }}
          ></motion.div>
        </div>
        <div style={{ height: 500 }} ref={ref}/>


      <style jsx>{`
      .ustad{
       
      }
      .section3{
        height: 100vh;
        background: #000;
      }
      `}</style>
    </div>
  );
};

export default Sectioin3;