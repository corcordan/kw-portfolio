import Image from 'next/image'
import React from 'react'

const Philosophy = () => {
  return (
    <div id="philosophy" className="h-dvh bg-blue relative z-10 p-8">
        <p className="text-navy font-alex text-7xl lg:text-9xl text-center mt-4 z-0">My Philosophy</p>
        <div className="absolute w-100 lg:w-250 h-200 -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Image
            src="/5.png"
            alt="Paper"
            fill
            className="object-contain"
          />
          <div
            className="absolute inset-0
            flex flex-col justify-center items-center
            text-center
            px-10
            text-navy text-lg lg:text-6xl font-cormorant font-bold z-10"
          >
            <p>When people like their work, performance follows.</p>
            <Image 
              src="/8.png"
              alt="Birds"
              width={400}
              height={100}
              className="my-0 lg:my-6"
            />
            <p>Structure & support ensure excellence is repeatable and scalable.</p>
          </div>
        </div>
    </div>
  )
}

export default Philosophy