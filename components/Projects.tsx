import Image from 'next/image'
import React from 'react'

const Projects = () => {
	return (
		<div id="projects" className="min-h-screen bg-cream text-navy font-cormorant text-xl lg:text-4xl relative flex flex-col justify-center items-center text-center space-y-4 lg:space-y-8 p-8 lg:px-32">
			<div className="absolute top-5 left-5 invisible lg:visible">
				<Image 
				src="/10_left.png"
				alt="Shark"
				width={250}
				height={250}        
				/>
			</div>
			<div className="absolute bottom-5 right-5 invisible lg:visible">
				<Image 
				src="/10_right.png"
				alt="Shark"
				width={200}
				height={200}        
				/>
			</div>
			<p className="font-alex text-7xl lg:text-9xl text-center">Projects</p>
			<div className="flex flex-col justify-center items-center space-y-4 lg:space-y-8 px-4 lg:px-16">
				<p className="text-4xl lg:text-7xl font-bold">Company-Wide Onboarding Program</p>
				<p>
					Designed and launched a comprehensive onboarding experience that integrates culture, role clarity, expectations, and early support.
					This program created a consistent scalable, and engaging first-week journey for all new hires.
				</p>
			</div>
			<div className="flex flex-col justify-center items-center space-y-4 lg:space-y-8 px-4 lg:px-16">
				<p className="text-4xl lg:text-7xl font-bold">Quarterly Performance Review System</p>
				<p>
					Built a complete performance management framework, including self-assessment, manager rewviews, KPI alignment, SMART goals, timelines, training, and automated workflows, ensuring clarity,
					accountability, and growth across all departments.
				</p>
			</div>
			<div className="flex flex-col justify-center items-center space-y-4 lg:space-y-8 px-4 lg:px-16">
				<p className="text-4xl lg:text-7xl font-bold">Culture Club & Employee Engagement Programs</p>
				<p>
					Created remote-friendly culture initiatives like monthly games, peer recognition threads, newsletters, and cross-team connection rituals that strengthen community
					and belonging in a distributed environment.
				</p>
			</div>
			<div className="flex flex-col justify-center items-center space-y-4 lg:space-y-8 px-4 lg:px-16">
				<p className="text-4xl lg:text-7xl font-bold">Compensation & Job Structure Frmework</p>
				<p>
					Developed salary bands, leveling guides, role charters, and promotion pathways using market data and organizational strategy.
					This created transparency, fairness, and a scalable foundation for talent decisions.
				</p>
			</div>
			<div className="flex flex-col justify-center items-center space-y-4 lg:space-y-8 px-4 lg:px-16">
				<p className="text-4xl lg:text-7xl font-bold">HR + Finance Operational Infrastructure</p>
				<p>
					Streamlined People Ops and Finance processes, including vendor onboarding, AP/AR workflows, state registrations, project codes, and compliance programs, establishing clear,
					repeatable systems that support business growth.
				</p>
			</div>
		</div>
	)
}

export default Projects