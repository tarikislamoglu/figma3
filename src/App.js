import React from "react";

const App = () => {
  return (
    <div className="relative  w-full">
      <div className="flex items-center shadow-md shadow-[#B0AAAA] m-10 ">
        <div className="bg-[#1AEBB7]  w-2/5 flex justify-center h-screen items-center ">
          <img src="/lion.png" className="max-w[400px] max-h-[400px] " />
        </div>
        <div
          className=" bg-white flex flex-col w-3/5 
        justify-center h-screen "
        >
          <form className="flex flex-col space-y-4 p-10">
            <h2 className="text-center text-3xl font-semibold text-[#000000B2]">
              LOGIN
            </h2>
            <input
              placeholder="Username"
              className="p-1 border-1 border-[#0000004F] text-sm"
            />
            <input
              placeholder="Password"
              className="p-1 border-1 border-[#0000004F] text-sm"
            />
            <div className="flex flex-col md:flex-row  md:justify-between w-full  space-y-4 md:space-y-0">
              <button className="bg-[#1AEBB7] text-white p-2 w-full md:w-1/2">
                LOGIN
              </button>
              <div className="flex md:flex-col justify-between w-full md:items-end">
                <a href="" className="text-sm">
                  Forgot Password
                </a>
                <a href="" className="text-sm">
                  Register
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
