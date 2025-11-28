import Image from 'next/image'
import React from 'react'

const Hobbies = () => {
  return (
    <div id="hobbies" className="min-h-screen bg-blue text-navy text-2xl lg:text-4xl font-cormorant w-full flex flex-col lg:flex-row justify-center items-center p-8">
        <div className="w-full lg:w-1/3 h-100 lg:h-full relative order-2 lg:order-1">
          <Image 
            src="/11.png"
            alt="Pics"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-full lg:w-1/3 flex flex-col justify-center items-center text-center order-1 lg:order-2 space-y-4 lg:space-y-0">
          <p className="order-2 lg:order-1">
            Travel is a big part of my life. I love exploring different cultures, learning new perspectives, and seeing how poeple live in places far from my own.
            It keeps me curious, open-minded, and inspired.
          </p>
          <p className="text-7xl lg:text-9xl font-alex pt-4 order-1 lg:order-2">Hobbies</p>
          <p className="order-3">
            I also love anything active and outdoors, from paddleboarding and hiking to snowboarding and wake surfing, and everything in between. I enjoy long walks as well, especially with my dog,
            in peaceful places liek the beach or the mountains. Being outside is where I feel the most grounded and energized.
          </p>
        </div>
        <div className="w-full lg:w-1/3 h-100 lg:h-full relative order-3">
          <Image 
            src="/12.png"
            alt="Pics"
            fill
            className="object-cover order-2 lg:order-1"
          />
        </div>
    </div>
  )
}

export default Hobbies