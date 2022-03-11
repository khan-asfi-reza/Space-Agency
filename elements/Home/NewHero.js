import {FaArrowRight, FaMoneyBill, FaRocket, FaStar} from "react-icons/fa";
import {motion} from "framer-motion";
import Link from "next/link";
import {BOOK_ID, HERO_ID} from "../../assets/data";

export function NewHero() {

    return (
        <section id={HERO_ID} className={"relative min-h-screen w-full "}>
            <video preload={"true"} muted={true} className={"z-1 absolute object-cover h-full w-full"} autoPlay={true}
                   loop={true}>
                <source src={"/bgvideo.mp4"}/>
            </video>
            <div className="absolute z-10 top-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black">
            </div>
            <motion.div initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 1}}
                        className={"container transform relative mx-auto py-32 z-[50]"}>
                <div className={"max-w-5xl mx-auto text-center "}>
                    <h1 className={"text-white text-center font-medium xl:text-8xl lg:text-7xl md:text-7xl sm:text-6xl text-6xl"}>
                        Travel to the outer space with Void
                    </h1>
                    <p className={"text-center font-light text-gray-200 mt-12 text-xl"}>
                        We provide the best service to go to the outer space, join us for more thrilling adventure
                    </p>
                    <Link passhref={true} href={BOOK_ID}>
                        <a className={"relative mt-12 mx-auto inline-block transition-all duration-300 group hover:bg-white hover:text-gray-900 overflow-visible xl:px-16 lg:px-14 lg:py-4 md:px-12 md:py-4 px-10 py-3 xl:py-6 text-xl text-white bg-transparent border border-white"}>
                            Book Now
                            <span
                                className={"bg-white grid transition-all duration-300 group-hover:bg-black group-hover:border-black group-hover:text-white text-gray-900 place-items-center absolute px-8 py-2 lg:-bottom-4 -bottom-6 -right-6 lg:-right-4 border border-white"}>
                                            <FaArrowRight/>
                        </span>
                        </a>
                    </Link>
                </div>
                <div className={"mt-20"}>
                    <div
                        className="grid sm:grid-cols-3 grid-cols-2 md:gap-x-10 gap-y-10 gap-x-4 py-10 px-4">
                        <div className={"grid"}>
                            <div
                                className={"text-3xl text-gray-900 bg-gray-50 w-14 h-14 rounded-full grid place-items-center"}>
                                <FaRocket/>
                            </div>
                            <p className={"text-lg mt-4 text-gray-200"}>
                                The best rocket ride service ever given by any company till now day
                            </p>
                            <button className={"flex py-4 text-sm items-center  hover:border-white text-gray-300"}>
                                Read More <FaArrowRight/>
                            </button>
                            <hr className={"w-3/4 border border-gray-200 "}/>
                        </div>
                        <div className={"grid"}>
                            <div
                                className={"text-3xl text-gray-900 bg-gray-50 w-14 h-14 rounded-full grid place-items-center"}>
                                <FaMoneyBill/>
                            </div>
                            <p className={"mt-4 text-lg text-gray-200"}>
                                We provide the best value to our customer, 100% money back gurantee
                            </p>
                            <button className={"flex py-4 text-sm items-center  hover:border-white text-gray-300"}>
                                Read More <FaArrowRight/>
                            </button>
                            <hr className={"w-3/4 border border-gray-200 "}/>
                        </div>
                        <div className={"grid"}>
                            <div
                                className={"text-3xl text-gray-900 bg-gray-50 w-14 h-14 rounded-full grid place-items-center"}>
                                <FaStar/>
                            </div>
                            <p className={"mt-4 text-lg text-gray-200"}>
                                Our {"Client's"} Satisfaction is our top priority, we give our customer the best service
                            </p>
                            <button className={"flex py-4 text-sm items-center  hover:border-white text-gray-300"}>
                                Read More <FaArrowRight/>
                            </button>
                            <hr className={"w-3/4 border border-gray-200 "}/>
                        </div>

                    </div>
                </div>
            </motion.div>

        </section>
    )
}