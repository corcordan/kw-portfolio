import About from "@/components/About";
import Connect from "@/components/Connect";
import Hero from "@/components/Hero";
import Hobbies from "@/components/Hobbies";
import Philosophy from "@/components/Philosophy";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
	return (
		<div className="flex flex-col">
			<Hero />
			<About />
			<Skills />
			<Philosophy />
			<Projects />
			<Hobbies />
			<Connect />
		</div>
	);
}
