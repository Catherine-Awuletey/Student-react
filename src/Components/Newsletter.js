import React from 'react'

const Newsletter = () => {
  return (
    <div className=" lg:w-[35%] m-auto mt-[5rem] text-white p-5">
        {/* texts */}
        <div>
          <p className="text-[#8D5CF6] text-center font-semibold">Newsletter</p>
          <h1 className="text-3xl lg:text-4xl font-bold text-center">Our Experts Teacher</h1>
          <p className="pt-5 text-center text-[13px]">
            Problems trying to resolve the conflict between<br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        {/* Form */}
        <div className="mt-10">
          <form>
            <div className="flex justify-center">
              <input
                type="email"
                placeholder="Your Email"
                className="w-[150%] p-3 rounded-tl-md rounded-bl-md"
              />
              <button
                type="submit"
                className="w-[40%] bg-[#8D5CF6] rounded-tr-md rounded-br-md p-2"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
    </div>
  )
}

export default Newsletter