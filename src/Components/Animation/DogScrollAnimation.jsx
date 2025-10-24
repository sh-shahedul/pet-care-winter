

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const DogScrollAnimation = () => {
  // Ref target for local scroll tracking
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref, // only this section's scroll
    offset: ["start end", "end start"],
  });

  // Scroll niche gele left → right, up korle right → left
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "90vw"]);

  return (
    <div
      ref={ref}
      className="relative h-[180px]  overflow-hidden flex items-end"
    >
      <motion.img
        src="https://softivus.com/wp/petiva/wp-content/themes/petpath/assets/images/dog-vector-white.png"
        alt="dog"
        className="w-32 h-32 left-0 z-50"
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


