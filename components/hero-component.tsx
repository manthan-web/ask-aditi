import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Highlight } from "../components/ui/hero-highlight";

export function HeroHighlightDemo() {
  const texts = ["AskAditi.", "SBazar."];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [texts.length]);

  return (
    <motion.h1
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: [20, -5, 0],
      }}
      transition={{
        duration: 0.5,
        ease: [0.4, 0.0, 0.2, 1],
      }}
      className="text-4xl text-center lg:text-left font-extrabold md:text-4xl lg:text-6xl text-zinc-900 max-w-4xl leading-relaxed lg:leading-snug mx-auto "
    >
      Having trouble with settlement? We got you with{" "}
      <Highlight className="text-black px-4 dark:text-white">
        <motion.span
          key={texts[currentTextIndex]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {texts[currentTextIndex]}
        </motion.span>
      </Highlight>
    </motion.h1>
  );
}
