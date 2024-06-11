import React from "react";

const Quality = () => {
  return (
    <div className=" mt-14 pt-5 flex flex-col m-auto gap-1 text-white">
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
        <div>
            {/* Image Half */}
            <div class="bg-center bg-cover h-[10rem] md:h-[15rem] ">
                <div className="mt-5 ml-5">
                    <img src="/public/Assets/img/sale.svg" alt="Sale-badge" />
                </div>
                <div className="flex justify-center items-end align-center gap-3 pb-5">
                    <img src="/public/Assets/img/like.svg" alt="Like-button"/>
                    <img src="/public/Assets/img/basket.svg" alt="Cart"/>
                    <img src="/public/Assets/img/spot.svg" alt="View"/>
                </div>
            </div>
            <div className="p-5 py-2 flex flex-col gap-2">
              <p className="text-[#8D5CF6] flex justify-between font-semibold">
                Welcome<span class="flex items-end"
                  ><img src="/img/rating.svg" alt="Rating"
                /></span>
              </p>
              <p className="font-bold text-black">2,769 online courses</p>

              <p className="text-[#737373] text-[15px]">
                We focus on ergornomic and meeting you where you work. It's only
                a keystroke away.
              </p>
              <p classNname="text-[#737373] flex gap-3 items-center font-semibold">
                <span><img src="/public/Assets/img/download.svg" alt="Download-button"/></span>15 Sales
              </p>
              <p className="text-[#BDBDBD] flex gap-2 font-semibold">
                $16.48<span class="text-[#FF7B52] font-semibold">$6.48</span>
              </p>
            </div>
            {/* Button */}
            <div className="h-cover">
              <button
                className="text-[#8D5CF6] px-3 py-3 lg:mb-2 ml-5 flex gap-2 items-center border-2 border-[#8D5CF6] rounded-[25px] font-semibold"
              >
                Learn More<span><img src="/img/Vector.svg" /></span>
              </button>
            </div>
        </div>
        {/* Card 2 */}
        <div></div>
      </div>
    </div>
  );
};

export default Quality;
