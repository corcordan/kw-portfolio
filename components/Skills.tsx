import Image from 'next/image'
import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className="relative bg-cream text-navy">
		<div className="absolute overflow-hidden w-100 h-210 right-129 top-23">
			<Image 
				src="/9.png"
				alt="Line and hook"
				width={500}
				height={1000}
				className=""
				objectFit="cover"
			/>
		</div>
		<div className="absolute overflow-hidden w-100 h-230 right-129.25 top-233" aria-hidden>
			<Image 
				src="/9.png"
				alt="Line and hook"
				fill
				className="object-cover object-bottom w-full h-full"
				quality={100}
				priority
			/>
		</div>
        <div className="h-dvh flex flex-col">
            <div className="text-9xl font-alex text-center mt-8">What I Do</div>
			<div className="flex flex-row font-cormorant items-center mx-16">
				<div className="flex flex-col text-center w-1/2 mr-40">
					<p className="text-6xl font-bold">Systems, Structure & Operational Foundations</p>
					<p className="text-5xl">
						I build people-first programs that make work feel meaningful, connected, and engaging. From onboarding to recognition to culture design,
						I ensure employees feel supported from day one.
					</p>
				</div>
				<div className="flex flex-col text-center w-1/2 pl-8">
					<p className="text-6xl font-bold">People Experience & Culture</p>
					<p className="text-5xl">
						I create the processes, frameworks, and workflows that bring clarity, consistency, and accountabiliity to fast-moving teams. Review cycles, policies, SOPs,
						compensation strucutres, and everything that keeps a company running smoothly.
					</p>
				</div>
			</div>
        </div>
        <div className="h-dvh">
            <div className="flex flex-row font-cormorant items-center mx-16">
				<div className="flex flex-col text-center w-1/2 mr-40">
					<p className="text-6xl font-bold">Performance, Development & Enablement</p>
					<p className="text-5xl">
						I design the tools and systems that help people grow and perform at their best. This includes performance reviews, goal-setting frameworks,
						leveling guides, competency models, and manager enablement.
					</p>
				</div>
				<div className="flex flex-col text-center w-1/2 pl-8">
					<p className="text-6xl font-bold">HR Strategy & Compliance</p>
					<p className="text-5xl">
						I manage the day-to-day and long-term People Ops functions that support both the organization and its employees. Policies, state registrations,
						benefits, onboarding, employee relations, payroll are all handled with clarity and care.
					</p>
				</div>
			</div>
        </div>
    </div>
  )
}

export default Skills