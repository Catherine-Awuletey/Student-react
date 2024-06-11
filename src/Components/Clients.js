import React from 'react'

const Clients = () => {
  return (
    <div className="h-screen bg-[#26335D] mt-14 text-white  lg:w-[90rem] m-auto">
        <div className="flex flex-col justify-center gap-3">
          <p className="text-[#8D5CF6] text-center">Practice Advice</p>
          <h1 className="text-3xl lg:text-4xl font-bold text-center">Every Client Matters</h1>
          <p className="text-center mb-14">
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        {/* Cards */}
        <div
          className="m-auto md:w-[50%] md:h-[40%] flex lg:flex-row flex-col justify-between lg:gap-5 items-center content-center px-50 lg:pt-10 md:mb-6"
        >
          
          <div
            className="bg-white lg:w-[45%] w-full h-[100%] my-10 py-5 px-5 flex flex-col items-center gap-3 mt-[5]"
          >
            <div className="w-20">
              <img src="/Assets/img/pack.svg" />
            </div>
            <p className="text-black font-bold text-center">Expert instruction</p>
            <div className="w-20 ml-5">
              <img src="/Assets/img/bar.svg" />
            </div>
            <p className="text-[#737373] text-center text-[#737373]">
              The gradual <br />
              accumulation and <br />small-scale..
            </p>
          </div>
        
          {/* Card 2 */}
          <div className="bg-white lg:w-[45%] w-full h-[100%] my-10 py-5 px-5 flex flex-col items-center gap-3 m-auto">
            {/* img */}
            <div className="w-20">
            <img src="/Assets/img/book.svg" />
            </div>
            <p className="text-black font-bold text-center">Lifetime access</p>
            {/* img */}
            <div className="w-20 ml-5">
            <img src="/Assets/img/bar.svg" />
            </div>
            <p className="text-[#737373] text-center">The gradual<br />
              accumulation and <br />small-scale..</p>
          </div>
        </div>
    </div>
  )
}

export default Clients