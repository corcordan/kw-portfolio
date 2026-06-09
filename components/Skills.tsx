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
		<div className="flex flex-col lg:flex-row font-cormorant items-start mx-4 lg:mx-16 space-y-4 lg:space-y-0">
			<div className="flex flex-col text-center w-full lg:w-1/2 lg:mr-40">
				<p className="text-3xl lg:text-6xl font-bold">Systems, Structure & Operational Foundations</p>
				<p className="text-xl lg:text-5xl">
					I enjoy creating experiences that help
employees feel supported, connected, and
set up for success throughout their entire
journey with an organization. From
onboarding and development to
recognition, engagement, and offboarding,
I strive to create positive and meaningful
employee experiences at every stage.
				</p>
			</div>
			<div className="flex flex-col text-center w-full lg:w-1/2 lg:pl-8">
				<p className="text-3xl lg:text-6xl font-bold">People Experience & Culture</p>
				<p className="text-xl lg:text-5xl">
					Behind every great employee experience is a
strong operational foundation. I build and
improve the processes, policies, and
programs that bring structure, consistency,
and clarity to organizations, helping both
employees and businesses succeed.
				</p>
			</div>
		</div>
		<div className="flex flex-col lg:flex-row font-cormorant items-start mx-4 lg:mx-16 space-y-4 lg:space-y-0">
			<div className="flex flex-col text-center w-full lg:w-1/2 lg:mr-40">
				<p className="text-3xl lg:text-6xl font-bold">Performance, Development & Enablement</p>
				<p className="text-xl lg:text-5xl">
					I design programs and frameworks that help
employees grow and perform at their best.
From performance reviews and goal-setting
to role leveling, compensation structures, and
manager support, I enjoy creating systems
that provide employees with clarity,
development opportunities, and a path for

growth.
				</p>
			</div>
			<div className="flex flex-col text-center w-full lg:w-1/2 lg:pl-8">
				<p className="text-3xl lg:text-6xl font-bold">HR Strategy & Compliance</p>
				<p className="text-xl lg:text-5xl">
					I manage the day-to-day and long-term
People Operations functions that support
both the organization and its employees.
Whether it&apos;s onboarding, offboarding,
payroll, benefits, compliance, or employee
relations, I believe every employee
interaction should be handled with clarity

and care.
				</p>
			</div>
		</div>
    </div>
  )
}

export default Skills