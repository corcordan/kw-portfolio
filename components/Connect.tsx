'use client'

import { BriefcaseBusiness, Linkedin, Mail, Phone } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

const Connect = () => {
  const textToCopy = "katelyn20walsh@gmail.com"

  const handleCopy = async () => {
      try {
          await navigator.clipboard.writeText(textToCopy)
      } catch (err) {
          console.error("Failed to copy text:", err)
      }
  }

  return (
    <div id="connect" className="h-dvh relative w-full z-0 bg-navy text-yellow">
        <Image 
          className="bg-cover -z-10"
          src="/1.png"
          alt="Waves"
          quality={100}
          fill
          sizes="100vw"
      />
      <div className="h-full flex flex-col justify-between items-center z-10 relative">
        <div className="h-7/8 flex flex-col lg:flex-row justify-around items-center w-full">
          <div className="text-7xl lg:text-9xl font-bold font-alex flex flex-row lg:flex-col space-x-4 lg:space-x-0">
            <p>Let's</p>
            <p>talk!</p>
          </div>
          <div className="flex flex-col justify-center items-center text-2xl lg:text-4xl space-y-4 lg:space-y-8">
            <div className="flex flex-col justify-center items-center space-x-2 lg:space-y-4">
              <div className="text-yellow bg-transparent p-4 rounded-full hover:bg-yellow hover:text-navy hover:scale-110 transition-all duration-300">
                <Phone />
              </div>
              <p>973.440.0291</p>
            </div>
            <div className="flex flex-col justify-center items-center space-x-2 lg:space-y-4">
              <button
                className="text-yellow bg-transparent p-4 rounded-full hover:bg-yellow hover:text-navy hover:scale-110 transition-all duration-300 cursor-pointer"
                onClick={handleCopy}
                type={"button"}
              >
                <Mail />
              </button>
              <p>katelyn20walsh@gmail.com</p>
            </div>
            <div className="flex flex-col justify-center items-center space-x-2 lg:space-y-4">
              <a 
                className="text-yellow bg-transparent p-4 rounded-full hover:bg-yellow hover:text-navy hover:scale-110 transition-all duration-300 cursor-pointer"
                href="https://www.linkedin.com/in/katelyn20walsh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin />
              </a>
              <p>katelyn20walsh</p>
            </div>
            <div className="flex flex-col justify-center items-center space-x-2 lg:space-y-4">
              <a 
                className="text-yellow bg-transparent p-4 rounded-full hover:bg-yellow hover:text-navy hover:scale-110 transition-all duration-300 cursor-pointer"
                href="/Kate Walsh - Resume.pdf"
                download="Kate Walsh Resume"
              >
                <BriefcaseBusiness />
              </a>
              <p>Resume</p>
            </div>
          </div>
        </div>
        <div className="h-1/8 w-full flex flex-row">
          <div className="relative visible w-full lg:w-2/5">
            <Image
              src="/6.png"
              alt="Footer"
              fill
              quality={100}
            />                    
          </div>
          <div className="relative invisible lg:visible lg:w-1/5">
            <Image
              src="/4_fix.png"
              alt="Footer"
              fill
              quality={100}
            />          
          </div>
          <div className="relative invisible lg:visible lg:w-2/5">
            <Image
              src="/6.png"
              alt="Footer"
              fill
              quality={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Connect