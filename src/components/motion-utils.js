import { motion, useReducedMotion } from "framer-motion";
import { Button, Card, Typography } from "@mui/material";

export const prefersReducedMotion = () => {
  try {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  } catch {
    return false;
  }
};

export const PageWrapper = ({ children }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={reduce ? {} : { opacity: 1, y: 0 }}
      exit={reduce ? {} : { opacity: 0, y: -8 }}
      transition={{ duration: 0.45, ease: "easeInOut" }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export const MotionButton = motion(Button);
export const MotionCard = motion(Card);
export const MotionText = motion(Typography);
