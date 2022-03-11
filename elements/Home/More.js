import Mars from "../../assets/images/mars.png";
import Image from "next/image";
import {FaArrowRight, FaCheck} from "react-icons/fa";
import {motion, useTransform, useViewportScroll} from 'framer-motion';

const Card = ({title, text}) => (
    <div className={"grid gap-y-5 "}>
        <p className={"w-10 h-10 bg-white md:text-xl text-lg grid place-items-center text-green-400"}>
            <FaCheck/>
        </p>
        <p className={"md:text-xl text-lg text-white font-medium"}>
            {title}
        </p>
        <p className={"md:text-lg text-md text-gray-300"}>
            {text}
        </p>
    </div>
)

export default function More() {

    const {scrollYProgress} = useViewportScroll();
    const yValue = useTransform(scrollYProgress, [0, 1], [0, -250])

    return (
        <section className={"min-h-screen overflow-y-hidden bg-cover preserve-3d perspective relative py-10 md:mt-32"}>
            <div className={"container mx-auto z-20 relative"}>
                <div className={"grid lg:grid-cols-2"}>
                    <div className={""}>
                        <h2 className={"lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-white font-bold"}>
                            Enjoy the best possible interstellar experience
                        </h2>
                        <p className={"mt-12 md:text-xl sm:text-lg text-md text-gray-300"}>
                            We value our customers the most, our only goal is to satisfy our customers through
                            this interstellar traveling
                        </p>
                        <div className={"mt-12 grid gap-10 grid-cols-2 auto-rows-max"}>
                            <Card title={"100% Risk Free"}
                                  text={"Our rides are 100% Risk free, we provide full security from extra terrestrials"}/>
                            <Card title={"Free Interstellar Network"}
                                  text={"Connect with your friends via our free interstellar network and enjoy"}/>
                            <Card title={"Invite and Earn"}
                                  text={"Invite your close friends and earn discount for your next tour"}/>
                            <Card title={"Premium Space Resorts"}
                                  text={"Get the best and premium space resorts for your comfortable stay"}/>
                        </div>
                        <div className={"mt-12"}>
                            <a className={"relative inline-block transition-all duration-300 group hover:bg-white hover:text-gray-900 overflow-visible xl:px-16 lg:px-14 lg:py-4 md:px-12 md:py-4 px-10 py-3 xl:py-6 text-xl text-white bg-transparent border border-white"}>
                                Book Now
                                <span
                                    className={"bg-white grid transition-all duration-300 group-hover:bg-transparent group-hover:border-gray-900 text-gray-900 place-items-center absolute px-8 py-2 -bottom-4 -right-4 border border-white"}>
                                            <FaArrowRight/>
                                        </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div style={{y: yValue}} className={"absolute parallax-object z-10 inset-0"}>
                <div
                    className={"absolute right-0 md:top-[60%] top-[30%] transform md:-translate-y-1/2 lg:w-[35%] w-[50%]"}>
                    <Image src={Mars} alt={""}/>
                </div>
            </motion.div>
        </section>
    )
}