import React from "react";

const App = () => {
  return (
    <div className="w-full h-screen relative">
      <div className="w-2/5 h-screen bg-[#1AEBB7]"></div>
      <div className="w-3/5 h-screen bg-white"></div>

      <div className="flex items-center shadow-md shadow-[#B0AAAA] absolute left-0 top-0 right-0  bottom-0 z-1 m-15">
        <div className="  w-2/5 flex justify-center h-screen items-center ">
          <img src="/lion.png" className=" min-h-[250px]" />
        </div>
        <div
          className=" bg-white flex flex-col w-3/5 
        items-center md:justify-center "
        >
          <form className="flex flex-col w-1/2 space-y-4 md:items-center justify-center lg:p-10 md:p-0">
            <h2 className="text-center text-3xl font-semibold text-[#000000B2]">
              LOGIN
            </h2>
            <input
              placeholder="Username"
              className="p-2 border-1 border-[#0000004F] md:w-full text-sm"
            />
            <input
              placeholder="Password"
              className="p-2 border-1 border-[#0000004F] md:w-full text-sm"
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
