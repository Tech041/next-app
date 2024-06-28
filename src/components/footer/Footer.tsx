import React from "react";
import Icons from "../icons/Icons";
import Image from "next/image";
import Link from "next/link";

const links = [
  { id: 1, name: "location", path: "#" },
  { id: 2, name: "contact us", path: "#" },
  { id: 3, name: "annual dues faq", path: "#" },
  { id: 4, name: "news & events", path: "#" },
  { id: 5, name: "corporate plans", path: "#" },
  { id: 6, name: "membership plans", path: "#" },
];
const style = "text-white text-xs py-1 ";
const Footer = () => {
  return (
    <footer className="bg-black h-full  mt-[80px]">
      <div className="container flex flex-col md:flex-row gap-6">
        <div className="first flex flex-col justify-center items-center md:justify-start md:items-start ">
          <div>
            <Image
              width={150}
              height={150}
              src="/images/nel.png"
              alt="my-logo"
            />
          </div>
          <div className="w-[100%] md:w-auto mr-3 flex flex-col  justify-center items-center">
            <h6 className="text-footertext text-[9px]  ">
              We are a 360-health and wellness company and the
              <br /> leading and fastest-growing fitness chain. With over
              <br /> 200 professionally certified personal trainers, ultra-
              <br />
              modern gym facilities and over 40 free fitness classes
              <br /> weekly, we give our members a holistic experience to
              <br /> suit and support their fitness lifestyle.
            </h6>
            <div className="mt-5  md:m-5">
              <Icons />
            </div>
          </div>
        </div>
        <div className="second md:mt-14  mt-2 w-[100%] md:w-auto">
          <h1 className="text-xl font-semibold text-white underline text-center md:text-start ">
            QUICK LINKS
          </h1>
          <ul className="mt-5 text-center md:text-start">
            {links.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.path}
                  className="text-white uppercase hover:text-main text-xs"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="third md:mt-9 mt-1 w-[100%] md:w-auto text-center md:text-start">
          <h1 className="text-white text-xl font-semibold underline m-5">
            WORKING HOURS
          </h1>
          <div className="flex gap-6 W-[100%]  md:justify-start justify-center  md:items-start items-center">
            <span>
              <p className={style}>MONDAY-FRIDAY</p>
              <p className={style}>SATURDAY</p>
              <p className={style}>PUBLIC HOLIDAYS</p>
              <p className={style}>DEEP CLEANING</p>
              <p className={style}>CLOSED</p>
            </span>
            <span>
              <p className={style}>6AM-9PM</p>
              <p className={style}>7AM-8PM</p>
              <p className={style}>7AM-8PM</p>
              <p className={style}>2PM-3PM(DAILY)</p>
              <p className={style}>JAN1,DEC 25 & 26</p>
            </span>
          </div>
        </div>
        <div className="fourth md:mt-14  mt-3 W-[100%] md:w-auto text-center md:text-start">
          <h1 className=" text-xs text-main">FOR LATEST NEWS & UPDATES</h1>
          <h2 className="text-white font-semibold text-xl my-3">
            SUBSCRIBE TO OUR <br />
            NEWSLETTER
          </h2>
          <div className="flex gap-2 mb-2 w-[100%] md:w-auto flex-col md:flex-row items-center md:items-start">
            <div className="first-input w-[100%] ">
              <input
                type="text"
                placeholder="Your Name"
                className="py-2  w-[100%] md:w-auto mb-3"
              />
            </div>
            <div className="second-input w-[100%] md:w-auto">
              <input
                type="email"
                placeholder="example@email.com"
                className="py-2  w-[100%] md:w-auto"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="text-white bg-red-900 py-3 px-3 my-3 text-xs w-[100%]  "
            >
              SUBSCRIBE
            </button>
          </div>
          <div className="md:flex md:flex-row md:gap-5 mt-[50px] ml-[65%] hidden">
            <p className="text-footertext text-[10px]">FAQS</p>
            <p className="text-footertext text-xs text-end text-[10px]">
              PRIVACY POLICY
            </p>
          </div>
        </div>
      </div>
      <div className="container py-5 flex justify-center md:justify-start items-center md:items-start">
        <p className="text-footertext text-[9px] md:text-[10px] ">
          &copy; 2024 Nel-Gym CENTER LTD. ALL RIGHTS RESERVED.
        </p>
      </div>
      <div className="flex flex-row gap-5 mt-1 pb-3 justify-center items-center w-[100%] md:hidden">
        <p className="text-footertext text-[10px] ">FAQS</p>
        <p className="text-footertext text-xs text-end text-[10px]">
          PRIVACY POLICY
        </p>
      </div>
    </footer>
  );
};

export default Footer;
