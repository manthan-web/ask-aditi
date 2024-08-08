import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="w-full z-10 fixed from-white/0 bg-gradient-to-t to-white bg-white md:bg-transparent flex items-center">
        <div className="w-full px-12 justify-center md:justify-start from-white/0 bg-gradient-to-t to-white py-12 flex">
          <h1 className="text-5xl font-extrabold">Logo</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
