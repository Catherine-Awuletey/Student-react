import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#FFFFFF] mt-[10rem] w-100% justify-around px-3">
        <div>
        {/* <!-- first half --> */}
        <div
          className="grid grid-cols-1 lg:grid-cols-5 py-10 lg:gap-[5rem] gap-2 lg:px-[16rem] lg:px-[10rem]"
        >
          {/* <!-- Company info --> */}
          <div>
            <div>
              <p className="text-[15px] font-semibold">Company Info</p>
            </div>
            <div>
              <ul className="text-[#737373] text-[12px] flex flex-col gap-3">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          {/* <!-- Legal --> */}
          <div>
            <div>
              <p className="text-[15px] font-semibold">Legal</p>
            </div>
            <div>
              <ul className="text-[#737373] text-[12px] flex flex-col gap-3">
                <li>About Us</li>
                <li>Carrier</li>
                <li>We are hiring</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          {/* <!-- Features --> */}
          <div>
            <div>
              <p className="text-[15px] font-semibold">Feautures</p>
            </div>
            <div>
              <ul className="text-[#737373] text-[12px] flex flex-col gap-3">
                <li>Business Marketing</li>
                <li>User Analytic</li>
                <li>Live Chat</li>
                <li>Unlimited Support</li>
              </ul>
            </div>
          </div>
          {/* <!-- Resources --> */}
          <div>
            <div>
              <p className="text-[15px] font-semibold">Resources</p>
            </div>
            <div>
              <ul className="text-[#737373] text-[12px] flex flex-col gap-3">
                <li>IOS & Android</li>
                <li>Watch a Demo</li>
                <li>Customers</li>
                <li>API</li>
              </ul>
            </div>
          </div>
          {/* <!-- Get in Touch --> */}
          <div>
            <div>
              <p className="text-[15px] font-semibold">Get In Touch</p>
            </div>
            <div>
              <ul className="text-[#737373] text-[12px] flex flex-col gap-3">
                <li>
                  <div className="flex items-center gap-1">
                    <img src="/Assets/img/phone.svg" alt="Phone" className='w-[10%]'/>
                    <p className="text-[12px]">(480) 555-0103</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-1">
                    <img src="/Assets/img/location.svg" alt="Location" className='w-[10%]'/>
                    <p className="text-[12px]">
                      4517 Washington Ave. Manchester, Kentucky 39495
                    </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-1">
                    <img src="/Assets/img/email.svg" alt="Email" className='w-[10%]'/>
                    <p className="text-[12px]">debra.holt@example.com</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- second half --> */}
        <div className="lg:flex justify-around bg-[#FAFAFA] py-5 w-full">
          <div>
            <p className="text-[#737373] text-[15px]">
              Made With Love By Figmaland All Right Reserved
            </p>
          </div>

          <div className="flex gap-2">
            <img src="/Assets/img/facebook.svg" alt="Facebook"/>
            <img src="/Assets/img/instagram.svg" alt="Instagram"/>
            <img src="/Assets/img/twitter.svg" alt="Twitter"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer