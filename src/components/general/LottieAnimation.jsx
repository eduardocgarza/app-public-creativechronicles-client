import React from "react";
import Lottie from "react-lottie";

export default function LottieAnimation(props) {
  const { animationData, height } = props;
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };
  return (
    <Lottie options={lottieOptions} style={{ height }} />
  );
}
