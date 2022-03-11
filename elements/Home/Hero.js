import Image from "next/image";
import Mars from "../../assets/images/mars.png"
import SpaceShip from "../../assets/images/spaceship.png"
import Land from "../../assets/images/land.png";
import {Particle} from "../../components/Particles";
import {FaArrowDown, FaArrowRight} from "react-icons/fa";

import HeroImage2 from "../../assets/images/hero_image_2.jpg";
import {useEffect, useState} from "react";
import classNames from "classnames";

export default function Hero() {
    const [bottom, setBottom] = useState(false);

    useEffect(() => {
        window.onscroll = function () {
            setBottom(window.current.scrollTop > 100);
        }
    }, [])

    return (
        <main className={"-z-10 flex-1 h-screen relative preserve-3d main"}>
            <div className={"parallax-object absolute inset-0 bg-black"}>
                <div className={"absolute right-0 top-0 h-2/3 w-full"}>
                    <Particle/>
                </div>
                <div className={"absolute animate-float left-10 top-0 w-[9%] transform rotate-180"}>
                    <Image priority={true} src={SpaceShip} alt={""}/>
                </div>
                <div className={"absolute right-0 top-0 md:w-[40%] w-[70%]"}>
                    <Image priority={true} src={Mars} alt={""}/>
                </div>
            </div>
            <div id={"land"} className={"absolute inset-0 grid place-items-center "}>
                <div className={"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center"}>
                    <span className={"text-[15rem] font-extrabold opacity-20 text-gray-500"}>THE <br/> VOID</span>
                </div>
                <div className={"md:block hidden absolute right-0 bottom-0 w-full md:h-auto  object-cover"}>
                    <Image src={Land} objectFit='cover' className={"object-cover h-full"} alt={""}/>
                </div>
                <div className={"md:hidden block absolute right-0 bottom-0 w-full md:h-auto h-[60vh] object-cover"}>
                    <Image src={Land} objectFit='cover' layout={"fill"} className={"object-cover h-full"} alt={""}/>
                </div>
                <div className={"absolute h-full w-full grid place-items-center"}>
                    <div className="xl:px-24 lg:px-20 md:px-16 md:w-full md:max-w-full container mx-auto">
                        <div className="grid md:grid-cols-2 gap-y-10">
                            <div>
                                <h1 className={"xl:text-9xl lg:text-8xl md:text-7xl sm:text-6xl text-5xl font-bold text-white"}>
                                    TRAVEL TO THE SPACE <br/>
                                </h1>
                                <div className={"mt-10"}>
                                    <a className={"relative inline-block transition-all duration-300 group hover:bg-white hover:text-gray-900 overflow-visible xl:px-16 lg:px-14 lg:py-4 md:px-12 md:py-4 px-10 py-3 xl:py-6 text-xl text-white bg-transparent border border-white"}>
                                        Book Now
                                        <span
                                            className={"bg-white grid transition-all duration-300 group-hover:bg-transparent group-hover:border-gray-900 text-gray-900 place-items-center absolute px-8 py-2 -bottom-4 -right-4 border border-white"}>
                                            <FaArrowRight/>
                                        </span>
                                    </a>
                                </div>
                            </div>
                            <div className={"md:justify-self-end"}>
                                <p className={"lg:text-lg text-md text-white font-medium"}>
                                    Join us and get awesome adventures <br/>
                                    to different planets. Invite people and <br/>
                                    earn special discount
                                </p>
                                <a className={"md:inline-block hidden relative font-medium  mt-10 transition-all duration-300 group hover:bg-white hover:text-gray-900 overflow-visible px-4 py-2 text-md text-white bg-transparent border-2 border-white"}>
                                    Learn More
                                </a>
                                <div className={"mt-10 md:block hidden "}>
                                    <div
                                        className={"relative group w-full lg:h-52 h-40 bg-no-repeat bg-cover border-white "}>
                                        <div className={"absolute overflow-hidden object-cover inset-0 z-10"}>
                                            <Image src={HeroImage2} alt={""}/>
                                        </div>
                                        <div className={"absolute h-full w-full z-20 inset-0 bg-black bg-opacity-20"}>

                                        </div>
                                        <div
                                            className={"absolute group-hover:w-full group-hover:top-0 group-hover:left-0 transition-all duration-300 flex flex-col justify-end h-full w-1/2 -top-5 z-20 -left-5 border-4 border-white"}>
                                            <p className={"text-white lg:text-lg text-md mb-5 ml-3"}>
                                                Our first tour
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={classNames("absolute h-10 duration-300 w-full bottom-0 bg-black transition-all", bottom ? "opacity-100" : "opacity-0")}>

                </div>

                <div
                    className={"absolute bottom-5 left-0 xl:px-24 lg:px-20 md:px-16 md:w-full md:max-w-full container mx-auto"}>
                    <div className={"relative inline-block z-20 group"}>
                        <span
                            className={"-z-10 duration-300 group-hover:bg-white transition-all absolute w-24 h-24  bg-black -top-5 -left-5"}>
                        </span>
                        <a className={"z-20 duration-300 group-hover:bg-black group-hover:text-white transition-all inline-block grid place-items-center text-black text-xl w-24 h-24 bg-white"}>
                            <FaArrowDown/>
                        </a>
                    </div>
                </div>
            </div>
        </main>
    )
}