import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="about" className="bg-blue text-navy">
        <div className="h-dvh flex flex-row justify-center items-center">
            <div className="flex flex-col justify-center items-center px-8 space-y-8">
                <h1 className="text-9xl font-alex">About Me</h1>
                <p className="text-5xl font-cormorant text-center">
                    Growing up, I was often the friend people turned to when they needed someone to listen. I genuinely loved being that person, and those conversations meade me realize how much our thoughts,
                    feelings, and support systems shape our lives. That curiosity led me to study psychology in my undergraduate studies, with supporing minors in marketing and management.
                </p>
            </div>
            <Image
                src="/2.png"
                alt="Image"
                width={800}
                height={800}
            />
        </div>
        <div className="h-dvh flex flex-row justify-center items-center">
            <Image
                src="/3.png"
                alt="Image"
                width={700}
                height={700}
                className=""
            />
            <div className="flex flex-col text-5xl font-cormorant text-center space-y-8">
                <p>
                    I've always been curious about what makes people feel supported, motivated, and connected at work, especially since so much of life is spent there. Studying psychology pulled me into understanding
                    how people perform, collaborate, and find meaning day to day, and I quickly saw how important clarity, structure, and support really are.
                </p>
                <p>
                    That people-focused mindset drives my work now. I focus on building systems and programs that make work feel clear, supportive, and engaging. I care about helping people feel capable and
                    connected so they can do their best work. Taht passion for growth is what led me to pursue my master's in industrial-organizational psychology.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About