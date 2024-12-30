import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const Contact = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-12 lg:px-20">
      {/* --------------- Heading ------------- */}
      <div className="text-2xl text-center mb-12">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* --------------- Left Image ---------------- */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={assets.contact_us_img}
            alt="Contact Us"
            className="w-full h-auto lg:max-w-lg"
          />
        </div>

        {/* -------------- Right Text ---------------- */}
        <div className="lg:w-1/2 text-gray-700 py-14">
        <h2 className="text-lg font-semibold mb-4">Our Store</h2>
          <p className="text-base text-justify leading-relaxed mb-6">
          54709 Willms Station <br /> 
          Suite 350, Washington, USA
          </p>
          <p className="text-base text-justify leading-relaxed mb-6">
          Tel:  +92 330 5012870 <br /> 
          Email: hurairarazzak125@gmail.com
          </p>
          
        <h2 className="text-lg font-semibold mb-4">Careers at Forever</h2>
          <p className="text-base text-justify leading-relaxed">
          Learn more about our teams and job openings.</p>
          <button className="mt-7 border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
                Explore Jobs
              </button>
        </div>
      </div>

      {/* -------------- Newsletter Section ------------ */}
      <div className="mt-24">
        <NewsLetter />
      </div>
    </div>
  );
};

export default Contact;