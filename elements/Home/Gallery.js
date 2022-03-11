import {FaGlobeAsia, FaSpaceShuttle} from "react-icons/fa";
import Image from "next/image";
import Moon from "../../assets/images/mars.png";
import HeroImage2 from "../../assets/images/hero_image_1.jpg";
import {motion} from "framer-motion";
import {BOOK_ID, SUCCESS_ID} from "../../assets/data";
import Link from "next/link";

export default function Gallery() {
    return (
        <section id={SUCCESS_ID} className={"min-h-screen"}>
            <div className={"grid lg:grid-cols-7  min-h-screen"}>
                <div className={"lg:col-span-2 lg:bg-gray-200 grid"}>
                    <div className="grid place-items-center">
                        <div className={"grid lg:grid-cols-3 lg:w-3/4 w-full mx-auto lg:p-0 p-10"}>
                            <motion.h2
                                initial={{opacity: 0, y: 25}}
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{duration: 0.4, delay: .2}}
                                className={"lg:text-black text-white lg:text-center font-medium lg:text-7xl text-6xl writing-mode-vertical"}>
                                Our Success
                            </motion.h2>
                            <div className={"lg:h-96 h-2 lg:mt-0 mt-10 lg:w-2 w-3/4 mx-auto bg-black"}>
                            </div>
                            <div className={"lg:grid hidden place-items-center"}>
                                <div className={"flex flex-col"}>
                                    <div className={"text-3xl"}>
                                        <FaSpaceShuttle/>
                                    </div>
                                    <div className={"mt-5 text-3xl"}>
                                        <FaGlobeAsia/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"bg-black relative lg:col-span-5 "}>
                    <div className={"absolute h-[80vh] w-full left-0 top-1/2 transform -translate-y-1/2"}>
                        <Image src={Moon} alt={""} layout={"fill"} objectFit={"contain"}/>
                    </div>
                    <div className={"inset-0 absolute bg-black bg-opacity-50"}>
                    </div>
                    <div className={"container mx-auto mx-auto relative 2xl:px-32 lg:px-12 lg:py-32 px-10 py-10"}>
                        <div className={"flex flex-col lg:justify-center"}>
                            <div className={"glass px-4 py-8 2xl:w-1/3 xl:w-1/2 lg:w-[40%] md:w-3/4 w-full"}>
                                <p className={"text-5xl text-white font-medium"}>
                                    200 +
                                </p>
                                <hr className={"w-2/3  my-5 border-transparent h-1 bg-yellow-500"}/>
                                <p className={"mt-10 text-gray-300 font-medium"}>
                                    We have served more than 200 plus families and clients, our clients satisfaction is
                                    our top priority.
                                    No families and clients have ever complained about us, we are the best in the
                                    business
                                </p>
                            </div>
                            <div className={"glass px-4 py-8  mt-20 2xl:w-1/3 xl:w-1/2 lg:w-[40%] md:w-3/4 w-full"}>
                                <p className={"text-5xl text-white font-medium"}>
                                    323.5k +
                                </p>
                                <hr className={"w-2/3  my-5 border-transparent h-1 bg-yellow-500"}/>
                                <p className={"mt-10 text-gray-300 font-medium"}>
                                    We have gained more than 323.5k USD by offering tour service to the galaxy, we are
                                    the first in this business
                                </p>
                            </div>
                        </div>
                        <motion.div
                            initial={{opacity: 0, x: -100}}
                            whileInView={{opacity: 1, x: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.4, delay: 1}}
                            className={"lg:absolute lg:mt-0 mt-12  bottom-0 right-12"}>
                            <div className={"grid"}>
                                <p className={"lg:order-1 lg:mt-0 mt-10 order-3 lg:text-lg text-md text-gray-300 font-medium"}>
                                    Join us and get awesome adventures <br/>
                                    to different planets. Invite people and <br/>
                                    earn special discount
                                </p>
                                <Link href={BOOK_ID} passHref>
                                    <a href={BOOK_ID}
                                       className={"lg:order-2 order-2 lg:inline-block block relative lg:w-32 w-32 font-medium  mt-10 transition-all duration-300 group hover:bg-white hover:text-gray-900 overflow-visible px-4 py-2 text-md text-white bg-transparent border-2 border-white"}>
                                        Learn More
                                    </a>
                                </Link>
                                <div className={"lg:order-3 order-1 mt-12 "}>
                                    <div
                                        className={"relative group lg:w-full w-[90%] lg:h-52 h-64 bg-no-repeat bg-cover border-white "}>
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
                </div>
            </div>
        </section>
    )
}