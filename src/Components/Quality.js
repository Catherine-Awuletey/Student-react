import React from "react";

const Quality = () => {
  return (
    <div className=" mt-14 pt-5 flex flex-col m-auto gap-1 text-white p-5">
      {/* Texts */}
      <div className="flex flex-col justify-center lg:h-[20%]">
        <p className="text-[#8D5CF6] text-center font-semibold">
          Practice Advice
        </p>
        <h1 className="text-3xl lg:text-4xl font-bold text-center">
          Get Quality Education
        </h1>
        <p className="pt-5 font-semibold text-center">
          Problems trying to resolve the conflict between
          <br />
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>
      {/* Cards */}
      <div className="flex md:flex-row flex-col gap-3 justify-center space-around m-auto mt-10 pb-5 lg:w-[50%] ">
        {/* Card 1 */}
        <div className="md:w-[50%] lg:h-[100%] bg-white flex flex-col pb-5 gap-3 lg:gap-3">
          {/* Image Half */}
          <div className="bg-center bg-cover h-[10rem] md:h-[15rem] img-sec flex">
            <div className="mt-5 ml-5">
              <img src="/Assets/img/sale.svg" alt="Sale-badge" />
            </div>
            <div className="flex justify-center items-end align-center gap-3 pb-5">
              <img src="/Assets/img/like.svg" alt="Like-button" />
              <img src="Assets/img/basket.svg" alt="Cart" />
              <img src="/Assets/img/spot.svg" alt="View" />
            </div>
          </div>
          <div className="p-5 py-2 flex flex-col gap-2">
            <p className="text-[#8D5CF6] flex justify-between font-semibold">
              Welcome
              <span class="flex items-end">
                <img src="/Assets/img/rating.svg" alt="Rating" />
              </span>
            </p>
            <p className="font-bold text-black">2,769 online courses</p>

            <p className="text-[#737373] text-[15px]">
              We focus on ergornomic and meeting you where you work. It's only a
              keystroke away.
            </p>
            <p classNname="text-[#737373] flex gap-3 items-center font-semibold">
              <span>
                <img src="/Assets/img/download.svg" alt="Download-button" />
              </span>
              15 Sales
            </p>
            <p className="text-[#BDBDBD] flex gap-2 font-semibold">
              $16.48<span class="text-[#FF7B52] font-semibold">$6.48</span>
            </p>
          </div>
          {/* Button */}
          <div className="h-cover">
            <button className="text-[#8D5CF6] px-3 py-3 lg:mb-2 ml-5 flex gap-2 items-center border-2 border-[#8D5CF6] rounded-[25px] font-semibold">
              Learn More
              <span>
                <img src="/Assets/img/Vector.svg" alt="Next-button" />
              </span>
            </button>
          </div>
        </div>
        {/* Card 2 */}
        <div className="md:w-[50%] lg:h-[100%] bg-white md:pb-5 gap-3 md:gap-3">
          {/* img Half */}
          <div className="bg-center bg-cover h-[9rem] md:h-[15rem] background flex">
            {/* Sale */}
            <div className="ml-5 pt-5">
              <img src="/Assets/img/sale.svg" alt="Sale-badge" />
            </div>

            {/* Buttons */}
            <div className="flex justify-center items-end gap-2 pb-5">
              <div>
                <img src="/Assets/img/like.svg" alt="Like-button" />
              </div>

              <div>
                <img src="/Assets/img/basket.svg" alt="Cart" />
              </div>

              <div>
                <img src="/Assets/img/spot.svg" alt="View" />
              </div>
            </div>
          </div>
          <div className="p-5 py-5 flex flex-col gap-3">
            <p className="text-[#8D5CF6] flex justify-between font-semibold">
              Join Us
              <span>
                <img src="/Assets/img/rating.svg" alt="rating" />
              </span>
            </p>
            <p className="text-black font-bold">Books Library</p>
            <p className="text-[#737373] text-[15px]">
              We focus on ergornomic and meeting you where you work. It's only a
              keystroke away.
            </p>
            <p className="text-[#737373] flex gap-3 items-center font-semibold">
              <span>
                <img src="/Assets/img/download.svg" alt="Download-button" />
              </span>
              15 Sales
            </p>

            <p className="text-[#BDBDBD] flex gap-2 font-semibold">
              $16.48<span className="text-[#FF7B52] font-semibold">$6.48</span>
            </p>
          </div>

          {/* <!-- Button --> */}
          <div>
            <button className="text-[#8D5CF6] px-3 py-3 ml-5 mb-2 flex gap-2 items-center border-2 border-[#8D5CF6] rounded-[25px] font-semibold">
              Learn More
              <span>
                <img src="/Assets/img/Vector.svg" alt="Next-button" />
              </span>
            </button>
          </div>
        </div>

        {/* end of card div */}
      </div>
      {/* end of main div */}
    </div>
  );
};

export default Quality;
