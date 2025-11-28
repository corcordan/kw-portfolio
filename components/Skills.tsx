import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen flex flex-col justify-center items-center space-y-4 lg:space-y-8 bg-cream text-navy p-8">
		<div className="text-7xl lg:text-9xl font-alex text-center mt-8 relative">
			What I Do
			<div className="absolute top-17 -right-1 overflow-hidden w-90 h-310 invisible lg:visible">
				<Image 
					src="/9.png"
					alt="Line and hook"
					width={500}
					height={1000}
					className=""
					objectFit="cover"
				/>
			</div>
		</div>
		<div className="flex flex-col lg:flex-row font-cormorant items-center mx-4 lg:mx-16 space-y-4 lg:space-y-0">
			<div className="flex flex-col text-center w-full lg:w-1/2 lg:mr-40">
				<p className="text-3xl lg:text-6xl font-bold">Systems, Structure & Operational Foundations</p>
				<p className="text-xl lg:text-5xl">
					I build people-first programs that make work feel meaningful, connected, and engaging. From onboarding to recognition to culture design,
					I ensure employees feel supported from day one.
				</p>
			</div>
			<div className="flex flex-col text-center w-full lg:w-1/2 lg:pl-8">
				<p className="text-3xl lg:text-6xl font-bold">People Experience & Culture</p>
				<p className="text-xl lg:text-5xl">
					I create the processes, frameworks, and workflows that bring clarity, consistency, and accountabiliity to fast-moving teams. Review cycles, policies, SOPs,
					compensation strucutres, and everything that keeps a company running smoothly.
				</p>
			</div>
		</div>
		<div className="flex flex-col lg:flex-row font-cormorant items-center mx-4 lg:mx-16 space-y-4 lg:space-y-0">
			<div className="flex flex-col text-center w-full lg:w-1/2 lg:mr-40">
				<p className="text-3xl lg:text-6xl font-bold">Performance, Development & Enablement</p>
				<p className="text-xl lg:text-5xl">
					I design the tools and systems that help people grow and perform at their best. This includes performance reviews, goal-setting frameworks,
					leveling guides, competency models, and manager enablement.
				</p>
			</div>
			<div className="flex flex-col text-center w-full lg:w-1/2 lg:pl-8">
				<p className="text-3xl lg:text-6xl font-bold">HR Strategy & Compliance</p>
				<p className="text-xl lg:text-5xl">
					I manage the day-to-day and long-term People Ops functions that support both the organization and its employees. Policies, state registrations,
					benefits, onboarding, employee relations, payroll are all handled with clarity and care.
				</p>
			</div>
		</div>
    </div>
  )
}

export default Skills