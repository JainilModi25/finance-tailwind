import React from 'react'

const Newsletter = () => {
  return (
    <div className="bg-black text-white w-full">
      <div className="mx-auto max-w-[1400px] grid md:grid-cols-2 place-items-center m-[130px]">
        <div className="justify-items-start">
          <p className="md:text-4xl text-2xl font-bold p-2">
            Want tips & tricks to optimize your flow?
          </p>
          <p className="text-lg font-bold max-w-50 p-2">
            Sign up for our newsletter and stay up to date.
          </p>
        </div>
        <div className="justify-items-start">
          <div className="flex">
            <input placeholder="Enter email" className="rounded-md w-[250px] p-2 pl-4 m-4 mr-6"></input>
            <button className="justify-center items-center text-black bg-[#00df9a] rounded-md w-[150px] m-4 p-2">Notify Me</button>
          </div>
          <span className="text-base mt-4 pl-2">
            We care about the protection of your data. Read our
            <span className="text-[#00df9a]"> Privacy Policy.</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Newsletter