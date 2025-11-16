"use client";

import { motion } from "motion/react";

type MotionWrapperProps = {
  children: React.ReactNode;
  initial?: {
    opacity: number;
  };
  whileInView?: {
    opacity: number;
  };
  className?: string;
};

export const MotionWrapper = ({
  children,
  initial,
  whileInView,
  className,
}: MotionWrapperProps) => (
  <motion.div className={className} initial={initial} whileInView={whileInView}>
    {children}
  </motion.div>
);

// export const MotionWrapperItem = ({ children }: MotionWrapperItemProps) => {
//   return <motion.div>{children}</motion.div>;
// };
