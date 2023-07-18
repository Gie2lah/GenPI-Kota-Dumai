"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type PageWrapperProps = {
  children: string;
} & React.ComponentPropsWithoutRef<"div">;

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 0.25 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
