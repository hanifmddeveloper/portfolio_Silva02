"use client";

import { useTypewriter } from "@/hooks/user-type-writer";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const HomeDescription = () => {
  const [hasLoaded, setHasLoaded] = useState(false);
  const description =
    "I am a creative Graphic and UI/UX Designer passionate about creating visually appealing designs, user-friendly interfaces, and meaningful digital experiences. I specialize in branding, logo design, website design, and mobile app UI/UX.";
  const { displayedText, isComplete } = useTypewriter(description, 30);

  useEffect(() => {
    setHasLoaded(true);
  }, []);
  return (
    <motion.p
      className="w-auto font-normal leading-7 mb-6 min-h-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {hasLoaded ? (
        displayedText.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ color: "rgb(156 163 175)" }}
            animate={{
              color: isComplete ? "rgb(255 255 255)" : "rgb(156 163 175)",
            }}
            transition={{ duration: 0.5, delay: index * 0.03 }}
          >
            {char}
          </motion.span>
        ))
      ) : (
        <span className="text-white/60">{description}</span>
      )}
    </motion.p>
  );
};

export default HomeDescription;
