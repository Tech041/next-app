import React from "react";
import { CiYoutube } from "react-icons/ci";
import { FaFacebook, FaYoutubeSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrTwitter, GrYoutube } from "react-icons/gr";

const Icons = () => {
  const styles = `w-[30px] h-[30px] rounded-[50%] bg-main flex
       justify-center items-center  hover:bg-white  border border-1 md:border-2 border-gray-600`;
  const textStyle = "text-white hover:text-main";

  return (
    <div className="flex gap-4">
      <div className={styles}>
        <FaFacebook size={15} className={textStyle} />
      </div>
      <div className={styles}>
        <GrTwitter size={15} className={textStyle} />
      </div>
      <div className={styles}>
        <GrYoutube size={15} className={textStyle} />
      </div>
      <div className={styles}>
        <FaSquareInstagram size={15} className={textStyle} />
      </div>
    </div>
  );
};

export default Icons;
