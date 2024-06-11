import React from 'react'

const Video = () => {
  return (
    <div className="bg-[#26335D] mt-[5rem] text-white md:mt-[30rem] lg:mt-[10rem] p-5">
        <p className="text-[#8D5CF6] text-center">Practice Advice</p>
        <h1 className="text-3xl lg:text-4xl font-bold text-center">Video in Live Action</h1>
        <p  className="text-center">Problems trying to resolve the conflict between <br />the two major realms of Classical physics: Newtonian mechanics</p>
        <div className="lg:w-[50%] w-[100%] pt-5 m-auto mb-14 md:px-5">
            <video controls poster="/Assets/img/video.svg">
              <source src="/Assets/img/student.mp4" type="video/mp4" />
              Your browser does not support the video tag
            </video>
          </div>
    </div>
  )
}

export default Video