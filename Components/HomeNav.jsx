import LogoWhite from "./LogoWhite.svg";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

function HomeNav({ onUserDemoSubmit }) {
  const [toggle, setToggle] = useState(false);

  const show =
    "flex fixed flex-col w-full bg-light_blue_bg h-content text-sm gap-2 md:font-base md:items-center bg-white  mt-10 rounded-xl mr-5 transform-transition ease-in delay-500 p-2 pb-1";

  return (
    <div className="flex fixed top-0 h-content w-full justify-between font-semibold text-lg  bg-white  px-2 pt-3 z-50 md:shadow-sm">
      <div className="ml-2">
        <Link href="/">
          <img
            className="items-center justify-center w-7 md:w-12"
            src="https://prod-iwt-bucket.s3.ap-south-1.amazonaws.com/tribe.png"
            alt="Tribe Logo"
            style={{ borderRadius: "50%" }}
          />
        </Link>
      </div>

      <div
        className="px-4  cursor-pointer md:hidden"
        id="burger"
        onClick={() => setToggle((previous) => !previous)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>

      <div className={toggle ? show : "hidden"}>
        <p>
          <button className="w-30 pr-2  pl-2 h-5 text-blue_btn font-base text-lg rounded-s bg-light_blue_bg">
            Explore Now
          </button>
        </p>
        <p>
          <a className="text-gray text-lg " href="#benefits">
            Benefits
          </a>
        </p>
        <p>
          <a className="text-gray text-lg " href="#feat">
            Features
          </a>
        </p>
        <p>
          <a className="text-gray text-lg " href="/contact-us">
            About Us
          </a>
        </p>
        <p>
          <a className="text-gray text-lg " href="/contact-us">
            Contact Us
          </a>
        </p>
        <p>
          <a
            className="text-gray text-lg "
            href="https://blog.investwithtribe.com/"
            rel="noreferrer"
            target="_blank"
          >
            Blog
          </a>
        </p>

        <p className="mr-2 ">
          <a href="./login">
            <button className="w-30 pr-2 pl-2 h-7 bg-blue_btn text-lg  text-white font-normal mb-5 rounded-sm">
              Log In
            </button>
          </a>
        </p>
      </div>

      {/* new */}

      <div
        className="hidden  top-0 flex-row md:flex flex-wrap md:text-lg md:font-semibold p-4 md:items-center gap-7"
        id="menu"
      >
        <p>
          <button
            className="w-34 pb-3 pt-2 pr-5 pl-5 h-10 text-blue_btn font-normal text-lg rounded-sm bg-indigo-100"
            onClick={() => onUserDemoSubmit()}
          >
            Explore
          </button>
        </p>
        <p>
          <a className="text-gray" href="#benefits">
            Benefits
          </a>
        </p>
        <p>
          <a className="text-gray" href="#feat">
            Features
          </a>
        </p>
        <p>
          <a className="text-gray" href="/contact-us">
            About Us
          </a>
        </p>
        <p>
          <a className="text-gray" href="/contact-us">
            Contact Us
          </a>
        </p>
        <p>
          <a
            className="text-gray"
            href="https://blog.investwithtribe.com/"
            rel="noreferrer"
            target="_blank"
          >
            Blog
          </a>
        </p>

        {/* <div className="login-link"> */}

        <p className="mr-2">
          <a href="./login">
            <button className="w-34 pb-2 pt-2 pr-5 pl-5 h-10 bg-blue_btn  text-white font-normal text-lg rounded-sm">
              Log In
            </button>
          </a>
        </p>
      </div>
    </div>
  );
}

export default HomeNav;
