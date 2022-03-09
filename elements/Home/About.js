import Juptiter from "../../assets/images/jupiter.png"
import Image from "next/image";


export default function About() {
    return (
        <section className={"min-h-screen bg-black relative py-10 z-20 preserve-3d"}>
            <div className={"lg:absolute pointer-events-none parallax-object-front lg:inset-0 transform rotate-180"}>
                <div className={"lg:absolute lg:top-0 lg:left-0 lg:w-[45%] w-[90%] mx-auto"}>
                    <Image priority={true} src={Juptiter} alt={""}/>
                </div>
            </div>
            <div
                className={"lg:absolute lg:mx-0 mx-auto flex max-w-7xl flex-col justify-center xl:top-0 -top-10 right-0 top-0 h-full z-30 lg:w-1/2 w-full lg:px-4 md:px-12 sm:px-10 px-4"}>
                <h1 className={"xl:text-7xl sm:text-6xl text-5xl font-medium text-white"}>
                    Get the best traveling experience
                </h1>
                <p className={"mt-10 text-xl text-gray-400"}>
                    Hustle free, low cost, best interstellar site seeing, visit your favourite planet.
                </p>
                <button className={"mt-10 bg-transparent border-2 border-white text-white w-48 px-10 py-4"}>
                    Learn More
                </button>
            </div>
        </section>
    )
}