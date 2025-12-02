'use client'

import Link from 'next/link'
import React, { useState } from 'react'

type NavLinkProps = {
	href: string
	text: string
}

const NavLink = ({ href, text }: NavLinkProps) => {
	const [open, setOpen] = useState(false)

	return (
		<div 
			className="relative h-fit w-fit text-yellow cursor-pointer m-2"
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<Link
				href={href}
			>
				{text}
			</Link>
			<span 
				style={{ transform: open ? "scaleX(1)" : "scaleX(0)" }}
        		className="absolute -bottom-2 -left-2 -right-2 h-1 origin-center rounded-full bg-yellow transition-transform duration-300 ease-out"	
			/>
		</div>
	)
}

export default NavLink