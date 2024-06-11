import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-around pt-6 p-5">
      <div>
        <h1 className="uppercase font-bold text-xl text-white">LOGO</h1>
      </div>
      <div>
        <ul className="lg:flex gap-8 hidden text-white">
          <li>Home</li>
          <li>Product</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="flex gap-5">
        <button className="text-white">Login</button>
        <button className="bg-[#8D5CF6] flex items-center gap-3 text-white px-4 py-3 uppercase text-xs rounded-md font-semibold">Join Us <span><img src="/Assets/img/arrow-right.svg" alt="arrow-right-icon"/></span> </button>
      </div>
    </nav>
  );
};

export default Navbar;
