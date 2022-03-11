import Sky from "../../assets/images/sky1.jpg";
import OrbitImg from "../../assets/images/Untitled-1.svg";
import Rocket from "../../assets/images/rocket.png";
import Image from "next/image"
import {motion, useTransform, useViewportScroll} from "framer-motion";
import {FaArrowRight} from "react-icons/fa";

export default function Orbit() {
    const {scrollYProgress} = useViewportScroll();
    const yValue = useTransform(scrollYProgress, [0, 1], [0, -700])


    return (
        <section style={{backgroundImage: `url(${Sky.src})`}}
                 className={"overflow-y-hidden md:py-32 py-16 min-h-screen bg-cover"}>
            <div className={"relative h-full min-h-screen"}>
                <h2 className={"lg:hidden block text-5xl text-white font-bold"}>
                    The Void
                </h2>
                <div className={"lg:absolute relative sm:min-h-screen h-[60vh] inset-0"}>
                    <div
                        className={"absolute h-full md:w-3/4 w-full left-1/2 transform top-1/2 -translate-y-1/2 -translate-x-1/2"}>
                        <Image src={OrbitImg} layout={"fill"} objectFit={"contain"} alt={""}/>
                    </div>
                    <motion.div style={{y: yValue, rotate: "10deg", x: "-50%"}}
                                className={"absolute md:h-96 h-64 w-1/2 md:w-1/2 left-1/2 transform md:top-[85%] top-[200%] rotate-12 -translate-y-1/2 -translate-x-1/2"}>
                        <Image src={Rocket} layout={"fill"} objectFit={"contain"} alt={""}/>
                    </motion.div>
                </div>
                <motion.div className={"relative h-full container mx-auto"}>
                    <h2 className={"inline-block text-white bg-black lg:mt-64 mt-2 mb-10 font-extrabold xl:text-7xl md:text-7xl sm:text-6xl xs:text-6xl text-5xl"}>
                        The exciting <br/> Space Tour
                    </h2>
                    <br/>
                    <p className={"mt-10 inline text-gray-300 bg-black font-medium md:text-xl text-lg"}>
                        Void offers the most adventurous and exciting space tour <br/>
                        We are the best in the business served more than a <br/>
                        thousand clients.
                        <br/>
                        We are
                        <br/>
                    </p>
                    <a className={"mt-12 relative inline-block transition-all duration-300 group hover:bg-white hover:text-gray-900 overflow-visible xl:px-16 lg:px-14 lg:py-4 md:px-12 md:py-4 px-10 py-3 xl:py-6 text-xl text-white bg-transparent border border-white"}>
                        Join Us
                        <span
                            className={"bg-white grid transition-all duration-300 group-hover:bg-transparent group-hover:border-gray-900 text-gray-900 place-items-center absolute px-8 py-2 -bottom-4 -right-4 border border-white"}>
                                            <FaArrowRight/>
                                        </span>
                    </a>
                </motion.div>
            </div>
        </section>
    )
}