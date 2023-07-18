"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import React from "react";

export interface ProvidersProps {
  children?: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      {children}
      <ProgressBar
        height="2px"
        color="#5a489c"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
