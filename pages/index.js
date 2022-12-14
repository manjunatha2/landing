import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import HomeNav from "Components/HomeNav.jsx";
import Share from "Components/Share.jsx";

export default function Home() {
  function useGetWindowDimensions() {
    let win = { innerWidth: 1080 };

    useEffect(() => {
      if (typeof window !== undefined) {
        win = window;
      }
    }, []);

    const { innerWidth: width, innerHeight: height } = win;
    return {
      width,
      height,
    };
  }
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      useGetWindowDimensions()
    );

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(useGetWindowDimensions());
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
  }

  const { width } = useWindowDimensions();

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="overscroll-y-auto w-full">
          <div className="w-full pb-2 justify-center p-2">
            <div className="flex m-auto mt-5">
              <HomeNav />
            </div>
            <div className="flex m-auto flex-wrap-reverse md:flex flex-row md:w-10/12 justify-between md:h-auto mt-8">
              {/* <div className={styles.heading1}> */}
              <div className="w-full md:w-2/5 mt-5 text-center md: md:text-left">
                {/* <div className={styles.heading2}> */}
                <div className="w-full flex flex-wrap md:w-9/12 md:min-w-max justify-center md:justify-start">
                  <p className="flex  items-center font-extrabold text-4xl md:min-w-max md:text-5xl f-inter text-blackish_teal">
                    Earn
                  </p>
                  <p className="text-4xl font-extrabold  text-light_green md:text-5xl  f-inter ml-1">
                    2nd income
                  </p>
                </div>
                <div className="w-full md:w-9/12 md:min-w-max">
                  <p className="font-extrabold text-4xl mt-3 md:min-w-max md:text-5xl f-inter text-blackish_teal md:mt-7 ">
                    from your{" "}
                  </p>
                  <p className="font-extrabold text-4xl mt-3 md:min-w-max md:text-5xl f-inter text-blackish_teal md:mt-7 ">
                    stock expertise.
                  </p>
                  <p className="font-extrabold text-4xl mt-3 md:min-w-max md:text-5xl f-inter text-blackish_teal md:mt-7">
                    For Free
                  </p>
                </div>
                <div className="w-full md:flex md:flex-col  md:w-9/12 md:min-w-max">
                  <p className="md:mt-2 text-xl f-inter">
                    India's only platform designed for Stock Experts
                  </p>
                  <p className="md:mt-2 text-xl f-inter">
                    to help them build, manage and generate revenue
                  </p>
                  <p className="md:mt-2 text-xl f-inter">
                    from their follower base
                  </p>
                </div>
                <div className="flex mt-4 gap-1 m-auto justify-center md:justify-start md:gap-2  text-center">
                  <a href="https://expert.investwithtribe.com/register">
                    <button className="w-28 md:w-36 h-12  md:ml-0 bg-blue_btn font-normal text-sm  md:text-lg rounded-2xl f-inter  text-white">
                      Start Earning
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pb-2 justify-center p-2">
            <div>Share This Link</div>
            <div>
              <Share />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
