import React from "react";
const Footer = () => {
  const realTimeYear = new Date().getFullYear();
  return (
    <div className="mt-auto from-pink-900 to-slate-950/90 bg-gradient-to-t">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#00000"
          fill-opacity="1"
          d="M0,128L48,117.3C96,107,192,85,288,117.3C384,149,480,235,576,234.7C672,235,768,149,864,144C960,139,1056,213,1152,218.7C1248,224,1344,160,1392,128L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-black">
        <div className="w-[65%] mx-auto flex justify-between items-center text-secondary h-32">
          <h3 className="text-4xl font-bold font-curve">PaySar</h3>
          <div className="flex justify-center items-center font-medium">
            <h5>© {realTimeYear} All Rights Reserved by FOD</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
