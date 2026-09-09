import React from 'react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

interface RevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function RevealText({ text, className = '', delay = 0 }: RevealTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  // Split text into words, then map words to maintain word wrapping
  const words = text.split(" ");

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
      style={{ display: "inline-block", flexWrap: "wrap", gap: "0.25em" }}
    >
      {words.map((word, index) => (
        <span key={index} style={{ display: "inline-block", marginRight: "0.25em" }}>
          <motion.span variants={child} style={{ display: "inline-block" }}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
