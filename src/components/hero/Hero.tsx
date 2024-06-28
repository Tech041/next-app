"use client";
import Image from "next/image";
import React from "react";
import { BsBasket } from "react-icons/bs";
import { IoPeopleSharp } from "react-icons/io5";
import { SiOpenaigym } from "react-icons/si";

const Hero = () => {
  return (
    <section className="w-full h-screen mt-[51px]  md:mt-[70px] pt-[50px]">
      <div className="container flex gap-3 w-full flex-col md:flex-row justify-center md:justify-start md:items-start items-center">
        <div className="first flex-1 w-screen md:w-auto">
          <Image
            width={550}
            height={100}
            src="/images/my-hero.jpg"
            alt="hero-image"
          />
        </div>
        <div className="second flex-1 mt-[70px]">
          <h1 className="font-bold my-2 text-center md:text-start">
            WHY NEL-GYM!!!
          </h1>
          <h2 className="text-xl md:text-3xl font-bold text-center md:text-start">
            Unique Experiences Tailored To <br />
            Your Lifestyle
          </h2>
          <div className="wrapper-1 flex flex-col md:flex-row items-center gap-2 my-4">
            <span>
              <SiOpenaigym size={40} />
            </span>
            <span>
              <p className="font-bold text-center md:text-start py-1">
                Wide Range of Fitness Programs
              </p>
              <p className="text-[12px] text-center md:text-start">
                Our timetable offers a wide range of low to high-intensity
                fitness programmes to suit your fitness lifestyle.There is
                something for everyone!{" "}
              </p>
            </span>
          </div>
          <div className="wrapper-2 flex flex-col md:flex-row items-center gap-2">
            <span>
              <IoPeopleSharp size={40} />
            </span>
            <span>
              <p className="font-bold text-center md:text-start py-1">
                Supportive Community
              </p>
              <p className="text-[12px] text-center md:text-start">
                Enjoy a sense of belonging in a community that supports your
                fitness goals and reminds you that you are not alone!
              </p>
            </span>
          </div>
          <div className="wrapper-3 flex  flex-col md:flex-row items-center gap-2 my-3">
            <span>
              <BsBasket size={40} />
            </span>
            <span>
              <p className="font-bold text-center md:text-start py-1">
                Ultra-Modern Facilities
              </p>
              <p className="text-[12px] text-center md:text-start">
                We have over 200 professionally certified personal trainers and
                ultra-modern facilities across all our branches in Lagos, Port
                Harcourt, Abuja and Ibadan.
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
