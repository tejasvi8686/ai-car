"use client";

import * as animationData from "@/public/animation/loader.json";
import { useLottie } from "lottie-react";

const MyLottieComponent = () => {
  const defaultOptions = {
    animationData: animationData,
    loop: true,
  };

  const { View } = useLottie(defaultOptions);

  return <div className="w-full">{View}</div>;
};
export default MyLottieComponent;
