import React from 'react'

const Courses = () => {
  return (
    <div className=" lg:w-[50rem] m-auto mt-[5rem] lg:mt-[5rem] text-white p-5">
        {/* Texts */}
        <div className="text-center flex flex-col gap-2">
          <p className="font-bold text-[#8D5CF6]">Practice Advice</p>
          <h1 className="text-3xl lg:text-5xl font-bold">Watch Our Courses</h1>
          <p className="font-semibold">
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics: Newtonian mechanic
          </p>
        </div>
        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-5 mt-8">
          {/* Card 1 */}
          <div className="grid grid-cols-[1fr] pr-[1rem] pl-[1rem] md:px-7 py-6 bg-white gap-5">
          <div className="w-14">
              <img src="/Assets/img/heart.svg" alt="heart-badge"/>
            </div>
            <p className="font-semibold text-xl text-black">Free</p>
            <p className="text-[13px] text-[#737373] font-bold">
              Organize accross all apps by hand
            </p>
            <div>
              <p className="text-3xl font-semibold text-[#8D5CF6]">19$</p>
              <p className="text-[12px] font-semibold text-[#8EC2F2]">Per Month</p>
            </div>
            <p className="text-[13px] text-[#737373]">
              Slate helps you see how <br />many more days you need...
            </p>
            {/* Button */}
            <div
              className="border-solid bg-[#8D5CF6] rounded w-[9rem] lg:w-[90%] h-[80%] flex justify-center items-center"
            >
              <button className="px-5 font-bold text-[13px] py-[1rem]">
                Try for free
              </button>
            </div>
            {/* List */}
            <div className="flex flex-col gap-3">
              {/* 1 */}
              <div className="flex items-center gap-2">
                <div className="w-[10%]">
                  <img src="/Assets/img/checked.svg" alt="marked"/>
                </div>
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    Unlimited product updates
                  </p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="flex items-center gap-2">
                <div className="w-[10%]">
                  <img src="/Assets/img/checked.svg" alt="marked"/>
                </div>
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    Unlimited product updates
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="flex items-center gap-2">
                <div className="w-[10%]">
                  <img src="/Assets/img/checked.svg" alt="marked"/>
                </div>
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    Unlimited product updates
                  </p>
                </div>
              </div>
              {/* 4 */}
              <div className="flex items-center gap-2">
                <div className="w-[10%]">
                  <img src="/Assets/img/check.svg" alt="unmarked"/>
                </div>
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    1GB Cloud storage
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-[10%]">
                  <img src="/Assets/img/check.svg" alt="unmarked"/>
                </div>
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    Email and community support
                  </p>
                </div>
              </div>
          </div>
          {/* Card 2 */}
         <div className="grid grid-cols-[1fr] gap-5 pr-[1rem] pl-[1rem] lg:px-7 py-6 bg-white">
          <div className="relative">
              <div className="absolute inset-y-0 -right-7 md:-right-8 lg:-right-11 -top-10 w-14">
                <img src="/Assets/img/New.svg" alt="New"/>
              </div>
              <div className="flex justify-between">
                <div className="w-14">
                  <img src="/Assets/img/heart.svg" alt="heart"/>
                </div>
              </div>
            </div>

            <p className="font-semibold text-xl text-black">Free</p>
            <p className="text-[13px] text-[#737373] font-bold">
              Organize accross all apps by hand
            </p>
            <div>
              <p className="text-3xl font-semibold text-[#8D5CF6]">19$</p>
              <p className="text-[12px] font-semibold text-[#8EC2F2]">Per Month</p>
            </div>
            <p className="text-[13px] text-[#737373]">
              Slate helps you see how <br />many more days you need...
            </p>
            {/* <!-- Button --> */}
            <div
              className="border-solid bg-[#8D5CF6] rounded w-[9rem] lg:w-[90%] h-[80%] flex justify-center items-center"
            >
              <button className="px-5 font-bold text-[13px] py-[1rem]">
                Try for free
              </button>
            </div>
            {/* <!-- List --> */}
            <div className="flex flex-col gap-3">
              {/* <!-- 1 --> */}
              <div className="flex items-center gap-2">
                <div className="w-[10%]">
                  <img src="/Assets/img/checked.svg" alt="Marked"/>
                </div>
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    Unlimited product updates
                  </p>
                </div>
              </div>
              {/* <!-- 2 --> */}
              <div className="flex items-center gap-2">
                <div className="w-[10%]">
                  <img src="/Assets/img/checked.svg" alt="Marked"/>
                </div>
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    Unlimited product updates
                  </p>
                </div>
              </div>
              {/* <!-- 3 --> */}
              <div className="flex items-center gap-2">
                <div className="w-[10%]">
                  <img src="/Assets/img/checked.svg" alt="Marked"/>
                </div>
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    Unlimited product updates
                  </p>
                </div>
              </div>
              {/* <!-- 4 --> */}
              <div className="flex items-center gap-2">
                <div className="w-[10%]">
                  <img src="/Assets/img/check.svg" alt="Unmarked"/>
                </div>
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    1GB Cloud storage
                  </p>
                </div>
              </div>

              {/* <!-- 5 --> */}
              <div className="flex gap-2">
                <div className="w-[10%]">
                  <img src="/Assets/img/check.svg" alt="Unmarked"/>
                </div>
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    Email and community support
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[1fr] pr-[1rem] pl-[1rem] md:px-7 py-6 bg-white gap-5">
          <div className="w-14">
              <img src="/Assets/img/heart.svg" alt="heart-badge"/>
            </div>
            <p className="font-semibold text-xl text-black">Free</p>
            <p className="text-[13px] text-[#737373] font-bold">
              Organize accross all apps by hand
            </p>
            <div>
              <p className="text-3xl font-semibold text-[#8D5CF6]">19$</p>
              <p className="text-[12px] font-semibold text-[#8EC2F2]">Per Month</p>
            </div>
            <p className="text-[13px] text-[#737373]">
              Slate helps you see how <br />many more days you need...
            </p>
            {/* Button */}
            <div
              className="border-solid bg-[#8D5CF6] rounded w-[9rem] lg:w-[90%] h-[80%] flex justify-center items-center"
            >
              <button className="px-5 font-bold text-[13px] py-[1rem]">
                Try for free
              </button>
            </div>
            {/* List */}
            <div className="flex flex-col gap-3">
              {/* 1 */}
              <div className="flex items-center gap-2">
                <div className="w-[10%]">
                  <img src="/Assets/img/checked.svg" alt="marked"/>
                </div>
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    Unlimited product updates
                  </p>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div className="flex items-center gap-2">
                <div className="w-[10%]">
                  <img src="/Assets/img/checked.svg" alt="marked"/>
                </div>
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    Unlimited product updates
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="flex items-center gap-2">
                <div className="w-[10%]">
                  <img src="/Assets/img/checked.svg" alt="marked"/>
                </div>
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    Unlimited product updates
                  </p>
                </div>
              </div>
              {/* 4 */}
              <div className="flex items-center gap-2">
                <div className="w-[10%]">
                  <img src="/Assets/img/check.svg" alt="unmarked"/>
                </div>
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    1GB Cloud storage
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-[10%]">
                  <img src="/Assets/img/check.svg" alt="unmarked"/>
                </div>
                <div>
                  <p className="text-[12px] text-black font-semibold">
                    Email and community support
                  </p>
                </div>
              </div>
          </div>
         </div>
         
     </div>
  )
}

export default Courses