import React from "react";
import SectionTitle from "./SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Tech Enthusiast",
      image: "https://i.ibb.co.com/Qj1CnmRV/download-4.jpg",
      rating: 5,
      message:
        "The quality of products offered by TechPro is outstanding. I've been a customer for years and have never been disappointed. Their customer service is excellent too!",
    },
    {
      id: 2,
      name: "Hasn Mahamud",
      role: "Software Developer",
      image: "https://i.ibb.co.com/PskQDfmj/email.jpg",
      rating: 5,
      message:
        "TechPro offers top-notch products. Their support team is quick to respond and always helpful.",
    },
    {
      id: 3,
      name: "Emily Davis",
      role: "UI/UX Designer",
      image: "https://i.ibb.co.com/0y8p21y0/download-2.jpg",
      rating: 4,
      message:
        "Great experience with TechPro. The delivery was fast and the packaging was perfect.",
    },
    {
      id: 4,
      name: "James Smith",
      role: "Product Manager",
      image: "https://i.ibb.co.com/jv99nbH1/download-1.jpg",
      rating: 5,
      message:
        "I recommend TechPro to everyone. Their electronic accessories are reliable and high-quality.",
    },
    {
      id: 5,
      name: "Olivia Brown",
      role: "Freelancer",
      image: "https://i.ibb.co.com/wFCMGsp8/download.jpg",
      rating: 4,
      message:
        "Good value for money. TechPro never disappoints with their product range and support.",
    },
    {
      id: 6,
      name: "Daniel Wilson",
      role: "Network Engineer",
      image:
        "https://i.ibb.co.com/Mx6wmHpQ/274155839-105996085352071-5586184874179334136-n.jpg",
      rating: 5,
      message:
        "Excellent service and great products. I’ve been ordering from them repeatedly.",
    },
    {
      id: 7,
      name: "Sophia Martinez",
      role: "Photographer",
      image: "https://i.ibb.co.com/JWvgMvRc/download-3.jpg",
      rating: 5,
      message:
        "Their camera accessories are top-tier. TechPro is my go-to store now!",
    },
    {
      id: 8,
      name: "William Anderson",
      role: "E-commerce Seller",
      image: "https://i.ibb.co.com/5XY7wrLb/Profile.jpg",
      rating: 4,
      message:
        "Dependable and affordable. Great experience working with TechPro.",
    },
    {
      id: 9,
      name: "Isabella Thompson",
      role: "Student",
      image: "https://i.ibb.co.com/fGMfLFdw/download.jpg",
      rating: 5,
      message:
        "Got my laptop accessories from TechPro. Everything works flawlessly!",
    },
    {
      id: 10,
      name: "David White",
      role: "IT Consultant",
      image: "https://i.ibb.co.com/bgSTFy4q/images.jpg",
      rating: 5,
      message:
        "Top quality service and amazing tech collection. Would definitely recommend.",
    },
  ];

  return (
    <div className="container max-w-7xl mx-auto px-6 py-4 mb-10">
      <SectionTitle
        title="What Our Customers Say"
        description="Don't just take our word for it - read what our satisfied customers have to say about our  products and service"
      />
      <div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
          className="mySwiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-md max-w-xl mx-auto h-52 flex flex-col justify-between">
                {/* Top: Rating + Message */}
                <div>
                  {/* Rating */}
                  <div className="mb-3 text-yellow-400 text-xl">
                    {"★".repeat(testimonial.rating)}
                    {"☆".repeat(5 - testimonial.rating)}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 text-sm">
                    {testimonial.message.length > 150
                      ? testimonial.message.substring(0, 150) + "..."
                      : testimonial.message}
                  </p>
                </div>

                {/* Bottom: User Info */}
                <div className="flex items-center gap-3 mt-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full border"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
