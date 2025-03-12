import React from "react";
import { assets } from "../../assets/img/assets"

const Companies = () => {
  return (
  <div className="pt-6">
    <p className="text-gray-500 text-center text-base">Trusted by learners from</p>
    <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 
    md:mt-10 mt-5 px-10">
      <img  src={assets.microsoft_logo} alt="Microsoft" />
      <img  src={assets.walmart_logo} alt="Walmart" />
      <img className="w-[95px]"  src={assets.slack_logo} alt="Slack" />
      <img  src={assets.adobe_logo} alt="Adobe" />
      <img  src={assets.paypal_logo} alt="Paypal" />
    </div>
  </div>
 );
};

export default Companies;
