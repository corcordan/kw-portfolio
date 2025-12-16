import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="about" className="min-h-screen bg-blue text-navy flex flex-col justify-center items-center space-y-8 p-8">
        <div className="flex flex-col xl:flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center px-8 space-y-4 lg:space-y-8">
                <h1 className="text-7xl xl:text-8xl 2xl:text-9xl font-alex text-nowrap">About Me</h1>
                <p className="text-xl lg:text-4xl font-cormorant text-center">
                    I&apos;ve always been drawn to understanding how people work, from moments of growth to the experiences of everyday life. That curiosity naturally drew me to psychology,
                    which I pursued in my undergraduate studies alongside minors in marketing and management.
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
                    As my studies progressed, that curiosity became increasingly focused on the workplace. I became especially interested in what makes people feel supported, motivated, and connected at work,
                    particularly given how much of life is spent there. Through studying psychology, I gained a deeper understanding of how people perform, collaborate, and find meaning day-to-day, and I saw how essential clarity, structure, and support truly are.
                </p>
                <p>
                    That people-focused mindset drives my work today. In my current roles, I design and implement people-focused systems such as onboarding experiences, performance processes, and organizational programs that bring clarity and consistency to how teams operate.
                    I focus on building structures that help people feel capable, supported, and connected so they can do their best work, which is what ultimately led me to pursue my master&apos;s in industrial-organizational psychology.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About