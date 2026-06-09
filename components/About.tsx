import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-blue text-navy flex flex-col justify-center items-center space-y-8 p-8">
        <div className="flex flex-col xl:flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center px-8 space-y-4 lg:space-y-8">
                <h1 className="text-7xl xl:text-8xl 2xl:text-9xl font-alex text-nowrap">About Me</h1>
                <p className="text-xl lg:text-4xl font-cormorant text-center">
                    Considering how much of our lives are spent at work, I&apos;ve always believed that the employee 
                    experience matters. I&apos;ve often wondered why some workplaces bring out the best in people 
                    while others seem to have the opposite effect.
                </p>
            </div>
            <Image
                src="/2.png"
                alt="Image"
                width={700}
                height={700}
            />
        </div>
        <div className="flex flex-col xl:flex-row justify-center items-center">
            <Image
                src="/3.png"
                alt="Image"
                width={700}
                height={700}
                className="order-2 xl:order1"
            />
            <div className="flex flex-col text-xl lg:text-4xl font-cormorant text-center space-y-4 lg:space-y-8 px-4 order-1 xl:order-2">
                <p>
                    That curiosity led me to study psychology, marketing, and management as an undergraduate and eventually pursue a master&apos;s degree 
                    in Industrial-Organizational Psychology. I enjoy combining the science behind human behavior with practical solutions that enhance the 
                    employee experience and support organizational success.
                </p>
                <p>
                    Today, I bring that mindset into my work in HR and People Operations. I&apos;m passionate about creating processes and experiences that 
                    help employees feel supported, connected, and empowered to do their best work while helping organizations achieve their goals. 
                    To me, the most meaningful work happens when both people and organizations succeed together.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About