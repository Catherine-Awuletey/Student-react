import React from 'react'

const Reviews = () => {
  return (
    <div className="lg:w-[60%] m-auto mt-[5rem] text-white p-5">
        {/* <!-- texts --> */}
        <div>
          <p className="text-[#8D5CF6] text-center font-semibold">
            Practice Advice
          </p>
          <h1 className="text-3xl lg:text-4xl font-bold text-center">Every Client Matters</h1>
          <p className="pt-5 font-semibold text-center">
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        {/* <!-- Cards --> */}
        <div className="grid lg:grid-cols-2 gap-4 mt-[5rem]">
          {/* <!-- Card 1 --> */}
          <div className="bg-white py-5 px-10 flex flex-col justify-center gap-3">
            {/* <!-- image --> */}
            <div className="m-auto">
              <img src="/Assets/img/user-1.svg" class="rounded-full" alt="user" />
            </div>
            <p className="text-[#737373] text-center text-[14px] font-semibold">
              Slate helps you see how many more days<br />
              you need to<br />
              work to reach your financial<br />
              goal for the month<br />
              and year.
            </p>
            {/* <!-- Stars --> */}
            <div className="flex justify-center gap-1">
              <img src="/Assets/img/star.svg" alt="Rated"/>
              <img src="/Assets/img/star.svg" alt="Rated"/>
              <img src="/Assets/img/star.svg" alt="Rated"/>
              <img src="/Assets/img/star.svg" alt="Rated"/>
              <img src="/Assets/img/starr.svg" alt="Unrated"/>
            </div>
            <p className="text-black text-center font-bold">Regina Miles</p>
            <p className="text-[#737373] text-center font-semibold">Designer</p>
          </div>
          {/* <!-- Card 2 --> */}
          <div className="bg-white py-5 px-10 flex flex-col justify-center gap-3">
            {/* <!-- image --> */}
            <div className="m-auto">
              <img src="/Assets/img/user-2.svg" alt="user" />
            </div>
            <p className="text-[#737373] text-center text-[14px] font-semibold">
              Slate helps you see<br />
              how many more days <br />
              you need to work to <br />
              reach your financial <br />
              goal for the month <br />
              and year.
            </p>
            {/* <!-- Stars --> */}
            <div className="flex justify-center gap-1">
              <img src="/Assets/img/star.svg" alt="Rated"/>
              <img src="/Assets/img/star.svg" alt="Rated"/>
              <img src="/Assets/img/star.svg" alt="Rated"/>
              <img src="/Assets/img/star.svg" alt="Rated"/>
              <img src="/Assets/img/starr.svg" alt="Unrated"/>
            </div>
            <p className="text-black text-center font-bold">Regina Miles</p>
            <p className="text-[#737373] text-center font-semibold">Designer</p>
          </div>
        </div>
    </div>
  )
}

export default Reviews