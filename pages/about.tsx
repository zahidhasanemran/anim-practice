import React from 'react';
import { motion, useScroll } from "framer-motion";

const About = () => {
  const { scrollYProgress } = useScroll();
 
  
  return (
    <>
      <motion.div
        // className="progressBar "
        style={{ 
          scaleX: scrollYProgress,
          position: 'fixed',
          left: 0,
          right: 0,
          height: '10px',
          background: 'red',
          transformOrigin: '0%',
        }}
      />
      <motion.h1
        // style={{
        //   scaleX: scrollYProgress
        // }}
      >
        <code>useScroll</code> demo
      </motion.h1>
      <>
      <article>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
          rhoncus quam.
        </p>
        <p>
          Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
          imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
          Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut felis
          blandit, at iaculis odio ultrices. Nulla facilisi. Vestibulum cursus
          ipsum tellus, eu tincidunt neque tincidunt a.
        </p>
        <h2>Sub-header</h2>
        <p>
          In eget sodales arcu, consectetur efficitur metus. Duis efficitur
          tincidunt odio, sit amet laoreet massa fringilla eu.
        </p>
        <p>
          Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
          Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
          Proin sit amet lacus mollis, semper massa ut, rutrum mi.
        </p>
        <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
        <p>
          Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
          leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
        </p>
        <h2>Sub-header</h2>
        <p>
          Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
          aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
          sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
          metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
          enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
          pretium.
        </p>
        <p>
          Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
          elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
          ultricies, mollis mi in, euismod dolor.
        </p>
        <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
        <p>
          Pellentesque id lacus pulvinar elit pulvinar pretium ac non urna.
          Mauris id mauris vel arcu commodo venenatis. Aliquam eu risus arcu.
          Proin sit amet lacus mollis, semper massa ut, rutrum mi.
        </p>
        <p>Sed sem nisi, luctus consequat ligula in, congue sodales nisl.</p>
        <p>
          Vestibulum bibendum at erat sit amet pulvinar. Pellentesque pharetra
          leo vitae tristique rutrum. Donec ut volutpat ante, ut suscipit leo.
        </p>
        <h2>Sub-header</h2>
        <p>
          Maecenas quis elementum nulla, in lacinia nisl. Ut rutrum fringilla
          aliquet. Pellentesque auctor vehicula malesuada. Aliquam id feugiat
          sem, sit amet tempor nulla. Quisque fermentum felis faucibus, vehicula
          metus ac, interdum nibh. Curabitur vitae convallis ligula. Integer ac
          enim vel felis pharetra laoreet. Interdum et malesuada fames ac ante
          ipsum primis in faucibus. Pellentesque hendrerit ac augue quis
          pretium.
        </p>
        <p>
          Morbi ut scelerisque nibh. Integer auctor, massa non dictum tristique,
          elit metus efficitur elit, ac pretium sapien nisl nec ante. In et ex
          ultricies, mollis mi in, euismod dolor.
        </p>
        <p>Quisque convallis ligula non magna efficitur tincidunt.</p>
      </article>
    </>
    <style jsx>{`
      article {
        max-width: 500px;
        padding: 20px;
        margin: 0 auto;
      }
      
      .progressBar{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        height: 10px;
        background: red;
        transform-origin: 0%;
      }
      
    `}</style>
    </>
  );
};

export default About;