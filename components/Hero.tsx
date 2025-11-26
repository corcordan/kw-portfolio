import Image from 'next/image'
import NavLink from './NavLink'

const Hero = () => {
  return (
    <div id="hero" className="h-dvh relative w-full bg-navy">
        <Image 
            className="bg-cover z-0"
            src="/1.png"
            alt="Waves"
            quality={100}
            fill
            sizes="100vw"
        />
        <div className="absolute h-full left-1/2 transform -translate-x-1/2 w-full flex flex-col justify-between z-10">
            <div className="flex flex-row justify-between items-center text-2xl font-cormorant mx-8 px-4 pt-4">
                <Image
                    src={"/4_fix.png"}
                    alt="Logo"
                    width={200}
                    height={50}
                    className="object-cover"
                />
                <div className="flex flex-row justify-between w-full mx-20 text-yellow">
                    <NavLink href={"#about"} text={"ABOUT ME"} />
                    <NavLink href={"#skills"} text={"WHAT I DO"} />
                    <NavLink href={"#philosophy"} text={"MY PHILOSOPHY"} />
                    <NavLink href={"#projects"} text={"PROJECTS"} />
                    <NavLink href={"#hobbies"} text={"HOBBIES"} />
                    <NavLink href={"#connect"} text={"LETS TALK!"} />
                </div>
            </div>

            <div className="flex flex-col justify-center items-center space-y-4 text-yello px-4 text-yellow">
                <p className="text-9xl font-alex">Kate Walsh</p>
                <p className="text-5xl font-garamond">PEOPLE OPERATIONS PROFESSIONAL</p>
                <a
                    href="/Kate Walsh - Resume.pdf"
                    download="Kate Walsh Resume"
                    className="text-3xl font-cormorant border-2 border-yellow rounded-2xl px-16 py-4 mt-4 hover:bg-yellow hover:text-navy transition-colors duration-300"
                >
                    RESUME
                </a>
            </div>

            <div className="w-full h-20 relative">
                <Image
                    src="/6.png"
                    alt="Waves"
                    fill
                    className="z-10"
                />
            </div>
        </div>
    </div>
  )
}

export default Hero