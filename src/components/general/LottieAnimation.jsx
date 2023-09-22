import React from "react";
import Lottie from "lottie-react";

export default function LottieAnimation(props) {
  const { animationData, height } = props;
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      style={{ height }}
    />
  );
}
