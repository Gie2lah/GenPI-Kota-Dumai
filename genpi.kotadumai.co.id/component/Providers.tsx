"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

const Providers = ({ children }) => {
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
