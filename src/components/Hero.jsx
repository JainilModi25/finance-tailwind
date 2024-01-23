import React from 'react'
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="uppercase text-[#00df9a] font-bold p-2">
          Growing with Data Analytics
        </p>
        <h1 className="font-bold md:text-7xl sm:text-6xl text-4xl md:py-4">
          Grow with data.
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["B2B", "B2C", "SASS"]}
            typeSpeed={100}
            backSpeed={125}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC and SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md text-black font-bold mx-auto mt-6 p-2 justify-center items-center">Get started</button>
      </div>
    </div>
  );
}

export default Hero