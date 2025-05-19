import React from "react";
import SectionTitle from "./SectionTitle";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Quality Products",
      description:
        "We source our products from reputable manufacturers to ensure quality and reliability.",
    },
    {
      id: 2,
      title: "Expert Support",
      description:
        "Our knowledgeable team is ready to assist with product selection and technical queries.",
    },
    {
      id: 3,
      title: "Fast Delivery",
      description:
        "We offer quick shipping options to get your products to you as soon as possible.",
    },
  ];

  return (
    <div className="container max-w-7xl mx-auto py-4 px-6">
      <SectionTitle
        title="Why Choose TechPro?"
        description="We offer the best electronics shopping experience with quality products and excellent service"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-10">
        {features.map((feature, index) => (
          <div className="bg-gray-200 py-5 px-10 rounded-md " key={index}>
            <h1 className="bg-sky-700 size-10 flex items-center justify-center rounded-full text-white font-extralight text-lg ">{feature.id}</h1>
            <h3 className="my-2 text-black font-semibold">{feature.title}</h3>
            <p className="text-gray-600 font-light">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
