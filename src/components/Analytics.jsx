import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className="bg-white text-black w-full py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 m-[20px] place-items-center">
        <img src={Laptop} alt="asd" className="max-auto w-[500px]"></img>
        <div className="justify-items-start">
          <p className="uppercase text-[#00df9a] font-bold py-2">
            data analytics dashboard
          </p>
          <p className="md:text-4xl sm:text-3xl text-2xl text-black font-bold py-2">
            Manage Data Analytics Centrally
          </p>
          <p className="text-black py-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. amet nisi
            aspernatur ipsum. Itaque iusto nihil voluptate iste repudiandae
            culpa officiis nam eius praesentium ipsam doloremque nulla vero
            deleniti sequi corrupti dolore quam, fugiat obcaecati?
          </p>
          <button className="py-2 mt-4 justify-center items-center bg-black text-[#00df9a] rounded-md w-[200px] font-bold">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics