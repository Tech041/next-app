import React from "react";
import { IconType } from "react-icons";
import { MdSportsKabaddi } from "react-icons/md";

interface MYProps {
  icon: JSX.Element;
  title: string;
  content: string;
}

const Card = ({ icon, title, content }: MYProps) => {
  return (
    <div className="h-full w-full ">
      <div className="h-60 w-full bg-gray-200 rounded-md">
        <div className="wrapper  ml-5 pt-4">
          <div className="bg bg-red-800 w-16 h-16 rounded-md flex justify-center items-center">
            {icon}
          </div>
          <div className=" mt-2 pt-3">
            <h1 className="font-bold text-xl my-3">{title}</h1>
            <h3 className="text-[14px]">{content}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
