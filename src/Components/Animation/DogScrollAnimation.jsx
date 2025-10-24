

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const DogScrollAnimation = () => {
 
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref, 
    offset: ["start end", "end start"],
  });

  
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "90vw"]);

  return (
    <div
      ref={ref}
      className="relative md:h-[180px] h-[100px]  overflow-hidden flex items-end"
    >
      <motion.img
        src="https://softivus.com/wp/petiva/wp-content/themes/petpath/assets/images/dog-vector-white.png"
        alt="dog"
        className="md:w-32 md:h-32 w-20 h-20 left-0 z-50"
        style={{
          x,
          position: "absolute",
        }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
      />
    </div>
  );
};

export default DogScrollAnimation;


