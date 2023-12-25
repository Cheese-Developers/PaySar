import Lottie from "lottie-react";
import React from "react";
import loader from "../../assets/loaderAnimate.json";

const Loader = ({ width = "w-48", className }) => {
  return (
    <div className={`${width} ${className}`}>
      <Lottie animationData={loader} loop={true} autoplay={true} />
    </div>
  );
};

export default Loader;
