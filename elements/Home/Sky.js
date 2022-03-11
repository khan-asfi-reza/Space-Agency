import Sky from "../../assets/images/sky1.jpg";
import Rocket from "../../assets/images/rocket.png";
import Image from "next/image"
import {motion, useTransform, useViewportScroll} from "framer-motion";
import {FaArrowRight} from "react-icons/fa";
import {OrbitComponent} from "../../components/Orbit";
import HeroImage2 from "../../assets/images/hero_image_2.jpg";
import {BOOK_ID} from "../../assets/data";
import Link from "next/link";

export default function Orbit() {
    const {scrollYProgress} = useViewportScroll();
    const yValue = useTransform(scrollYProgress, [0, 1], [0, -700])


    return (
        <section style={{backgroundImage: `url(${Sky.src})`}}
                 className={"overflow-y-hidden md:py-32 py-16 min-h-screen bg-cover"}>
            <div className={"relative h-full min-h-screen lg:p-0 px-10 py-10"}>
                <h2 className={"lg:hidden block text-5xl text-white font-bold"}>
                    The Void
                </h2>
                <div className={"lg:absolute relative sm:min-h-screen h-[60vh] inset-0"}>
                    <div
                        className={"absolute h-full md:w-full w-full left-1/2 transform top-1/2 -translate-y-1/2 -translate-x-1/2"}>
                        <OrbitComponent className={"absolute"}/>
                    </div>
                    <motion.div
                        initial={{opacity: 0,}}
                        whileInView={{opacity: 1,}}
                        viewport={{once: true}}
                        transition={{duration: 0.4, delay: .5}}
                        style={{y: yValue, rotate: "10deg", x: "-50%"}}
                        className={"absolute md:h-96 h-64 w-1/2 md:w-1/2 left-1/2 transform md:top-[85%] top-[200%] rotate-12 -translate-y-1/2 -translate-x-1/2"}>
                        <Image src={Rocket} layout={"fill"} objectFit={"contain"} alt={""}/>
                    </motion.div>
                </div>
                <motion.div initial={{opacity: 0, x: -100}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6}}
                            className={"relative h-full container mx-auto"}>
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
                    <Link passhref={true} href={BOOK_ID}>
                        <a className={"mt-12 relative inline-block transition-all duration-300 group hover:bg-white hover:text-gray-900 overflow-visible xl:px-16 lg:px-14 lg:py-4 md:px-12 md:py-4 px-10 py-3 xl:py-6 text-xl text-white bg-transparent border border-white"}>
                            Join Us
                            <span
                                className={"bg-white grid transition-all duration-300 group-hover:bg-transparent group-hover:border-gray-900 text-gray-900 place-items-center absolute px-8 py-2 -bottom-4 -right-4 border border-white"}>
                                            <FaArrowRight/>
                                        </span>
                        </a>
                    </Link>
                </motion.div>
                <motion.div
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.4, delay: 1}}
                    className={"lg:absolute lg:mt-0 mt-12  bottom-0 right-12"}>
                    <div className={"grid container mx-auto"}>
                        <p className={"lg:order-1 lg:mt-0 mt-10 order-3 lg:text-lg text-md text-gray-300 font-medium"}>
                            Join us and get awesome adventures <br/>
                            to different planets. Invite people and <br/>
                            earn special discount
                        </p>
                        <Link href={BOOK_ID} passhref={true}>
                            <a className={"lg:order-2 order-2 lg:inline-block block relative lg:w-32 w-32 font-medium  mt-10 transition-all duration-300 group hover:bg-white hover:text-gray-900 overflow-visible px-4 py-2 text-md text-white bg-transparent border-2 border-white"}>
                                Learn More
                            </a>
                        </Link>
                        <div className={"lg:order-3 order-1 mt-12 "}>
                            <div
                                className={"relative group lg:w-full md:w-1/2 w-[90%] lg:h-52 h-64 bg-no-repeat bg-cover border-white "}>
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
                </motion.div>
            </div>
        </section>
    )
}