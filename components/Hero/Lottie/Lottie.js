import React from "react";
import Lottie from "lottie-react-web";
import animationData from "./pimpon.json";

const UncontrolledLottie = () => (
  <Lottie
    options={{
      animationData: animationData,
    }}
  />
);

export default UncontrolledLottie;
