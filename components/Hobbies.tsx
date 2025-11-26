import Image from 'next/image'
import React from 'react'

const Hobbies = () => {
  return (
    <div id="hobbies" className="h-dvh bg-blue text-navy text-4xl font-cormorant w-full flex flex-row justify-center items-center">
        <div className="w-1/3 h-full relative">
          <Image 
            src="/11.png"
            alt="Pics"
            fill
            className="object-cover"
          />
        </div>
        <div className="w-1/3 flex flex-col justify-center items-center text-center">
          <p>
            Travel is a big part of my life. I love exploring different cultures, learning new perspectives, and seeing how poeple live in places far from my own.
            It keeps me curious, open-minded, and inspired.
          </p>
          <p className="text-9xl font-alex pt-4">Hobbies</p>
          <p>
            I also love anything active and outdoors, from paddleboarding and hiking to snowboarding and wake surfing, and everything in between. I enjoy long walks as well, especially with my dog,
            in peaceful places liek the beach or the mountains. Being outside is where I feel the most grounded and energized.
          </p>
        </div>
        <div className="w-1/3 h-full relative">
          <Image 
            src="/12.png"
            alt="Pics"
            fill
            className="object-cover"
          />
        </div>
    </div>
  )
}

export default Hobbies