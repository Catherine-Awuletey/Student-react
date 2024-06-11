import React from 'react'

const packages = () => {
  return (
    <div className="md:flex md:flex-row justify-center gap-[150px] text-white mt-[15rem] lg:mt-[5rem] m-auto">
        {/* Texts */}
        <div>
            <img src="/Assets/img/large-bar.svg" alt="Red-bar"/>
            <h1 className="pt-5 text-3xl font-bold">Affordable Packages</h1>
            <p className="pt-5 font-semibold"> Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics:<br />
            Newtonian mechanics÷</p>
            {/* Button */}
            <div className="flex flex-row">
                <button className="flex gap-2 items-center pt-5 text-[#8D5CF6] font-semibold"> Learn More<span><img src="/Assets/img/arrow2.svg" alt="Next-button"/></span></button>
            </div>
        </div>
        {/* Image */}
        <div className="mt-10 md:mt-0">
            <img src="/Assets/img/girl.svg" alt="Girl"/>
        </div>
    </div>
  )
}

export default packages