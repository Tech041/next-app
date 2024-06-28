import React from "react";
import Card from "../card/Card";
import { FaHeart } from "react-icons/fa";
import { GiCycling } from "react-icons/gi";
import { GrYoga } from "react-icons/gr";

const Classes = () => {
  return (
    <section className="h-[100%] w-full md:mt-20 mt-[300px]">
      <h1 className=" md:text-2xl text-[18px] text-center py-5 my-3 font-bold ">
        Explore Our All Inclusive Classes
      </h1>
      <div className="flex justify-center  gap-2 items-center container  flex-col md:flex-row">
        <div>
          <Card
            icon={<FaHeart size={40} color="white" />}
            title="CORE CARDIO"
            content="Intensive training for the heart to improve 
          perfomance and agility.You cannot afford to miss out. Get yourself prepared."
          />
        </div>
        <div>
          <Card
            icon={<GiCycling size={40} color="white" />}
            title="SPINNING"
            content="Our spinning drill is second to none. It is designed to enhance
             rapid weight reduction and improve maximum fat redistribution."
          />
        </div>
        <div>
          <Card
            icon={<GrYoga size={40} color="white" />}
            title="YOGA"
            content=" Our yoga exercise is second to none.
             The design is flexible to fit in with any sort of spicing and varieties."
          />
        </div>
      </div>
      <div className="container mt-5">
        <p className="md:text-2xl  text-[19px] font-bold text-center md:text-start py-2 my-1">
          Latest News, Events & Updates
        </p>
        <p className="text-center md:text-start md:text-[14px]  text-[14px]">
          Never miss a beat! Get all the latest news and events at Nel-gym.
        </p>
      </div>
      <div className="flex md:justify-end justify-center mt-4 md:mt-0 container">
        <button className="text-white bg-red-800  hover:bg-red-500 py-2 px-3 rounded-md font-semibold">
          STAY UPDATED
        </button>
      </div>
    </section>
  );
};

export default Classes;
