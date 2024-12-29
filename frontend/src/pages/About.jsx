import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <div className="bg-white min-h-screen py-10 px-4 sm:px-12 lg:px-20">
      {/* Heading */}
      <div className="text-2xl text-center mb-12">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        {/* Left Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={assets.about_us_img}
            alt="About Us"
            className="w-full h-auto lg:max-w-lg"
          />
        </div>

        {/* Right Text */}
        <div className="lg:w-1/2 text-gray-700">
          <p className="text-base text-justify leading-relaxed mb-6">
            HuddleClothing was born out of a passion for innovation and a desire
            to revolutionize the way people shop online. Our journey began with
            a simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes.
          </p>
          <p className="text-base text-justify leading-relaxed mb-6">
            Since our inception, we've worked tirelessly to curate a diverse
            selection of high-quality products that cater to every taste and
            preference. From fashion and beauty to electronics and home
            essentials, we offer an extensive collection sourced from trusted
            brands and suppliers.
          </p>
          <h2 className="text-lg font-semibold mb-4">Our Mission</h2>
          <p className="text-base text-justify leading-relaxed">
            Our mission at HuddleClothing is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="mt-16">
        <h2 className="text-center text-2xl font-semibold mb-10">
          Why Choose Us
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <img
              src={assets.high_quality_icon}
              width={50}
              alt="Feature 1"
              className="mx-auto mt-5 mb-5"
            />
            <h3 className="text-lg font-medium mb-2">High-Quality Products</h3>
            <p className="text-sm text-gray-600">
              We partner with trusted brands to bring you premium products.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <img
              src={assets.seamless_icon}
              alt="Feature 2"
              width={120}
              className="mx-auto mt-3 mb-3"
            />
            <h3 className="text-lg font-medium mb-2">Seamless Experience</h3>
            <p className="text-sm text-gray-600">
              From browsing to delivery, enjoy a smooth shopping journey.
            </p>
          </div>
          <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
            <img
              src={assets.customer_support}
              alt="Feature 3"
              width={50}
              className="mx-auto mt-5 mb-5"
            />
            <h3 className="text-lg font-medium mb-2">Customer Support</h3>
            <p className="text-sm text-gray-600">
              Our team is always ready to assist you with your needs.
            </p>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-24">
        <NewsLetter />
      </div>
    </div>
  );
};

export default About;
