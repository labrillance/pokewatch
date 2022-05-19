import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import StarRatingComponent from "react-star-rating-component";
import { useEffect, useState } from "react";
import { QuantityPicker } from "react-qty-picker";

const Home: NextPage = () => {
  const [watch, setWatch] = useState("pika");
  const [quantity, setQuantity] = useState(1);
  const [width, setWidth] = useState<number>(-1);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, [width]);

  const isMobile = width <= 768;

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <div className={`flex flex-1 ${isMobile ? "flex-col" : "flex-row"} w-full`}>
      <div
        className={`flex ${
          isMobile
            ? "w-[100%] margin-auto items-center justify-center flex-col"
            : "w-[50%]"
        } relative`}
      >
        <>
          {!isMobile && (
            <div className="flex w-[100%] bg-[#E2D028] bg-opacity-[78%] h-full cutted-bg  flex-col items-center">
              <img src="/logo.png" className="w-[70%] object-contain"></img>
            </div>
          )}

          {isMobile && (
            <img src="/logo.png" className="w-[70%] object-contain"></img>
          )}
          <img
            src="/watch-cover.png"
            className={
              isMobile
                ? "h-[80%] margin-auto"
                : "h-[60%] absolute m-auto top-20 bottom-0 left-60 z-50 right-0"
            }
          ></img>
        </>
      </div>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <div className={isMobile ? "p-5" : "p-20"}>
        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={4.5}
          renderStarIcon={(index, value) => {
            if (Math.ceil(value) === index && value % 1 !== 0) {
              return <span className="fa fa-star-half-full text-orange-300" />;
            }

            return (
              <span
                className={index <= value ? "fa fa-star" : "fa fa-star-o"}
              />
            );
          }}
        />
        <h1 className="text-[37px] font-bold">
          Nouvelle montre électronique Pokemon
        </h1>
        <h3 className="text-[16px] font-bold">
          Dernier modèle des montre connectées Pokemon.
          <br />
          Grâce à la technologie Water-Resist®, la montre peut aller jusqu'à 2m
          de profondeur.
          <br />
          Écran LCD LED, verre anti-rayures.
        </h3>
        <h2 className="mt-2 text-opacity-60 text-sm ">Ref. 351GGYx847</h2>
        <div className="flex flex-row">
          <h2
            className={`text-[43px] font-bold text-[${
              watch && watch == "pika" ? "#E2D028" : "#3DA7BA"
            }] mt-5`}
          >
            24.95 €
          </h2>
          <h2 className="text-[43px] font-bold text-red-500 mt-5  line-through  ml-5">
            34.95 €
          </h2>
        </div>
        <div className="flex flex-row mt-5">
          <div className=" border-2 border-gray-400 w-6 h-6 rounded-full mr-2 bg-yellow-500"></div>
          <div className= "border-2 border-gray-400 w-6 h-6 rounded-full mx-2 bg-blue-500"></div>
          <div className="border-2 border-gray-400 w-6 h-6 rounded-full mx-2 bg-orange-500"></div>
        </div>
        <h3 className="text-[26px] mt-5">Quantity</h3>
        <QuantityPicker
          value={quantity}
          min={1}
          onChange={(e) => {
            setQuantity(e);
          }}
          smooth
        />
        <div href="" className="flex my-10 h-10 w-52 rounded-md bg-red-500  opacity-90  items-center justify-center text-white ">
          <button className="text-center">Acheter mainten</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
