import Mars from "../../assets/images/mars.png";
import Image from "next/image";
import {FaArrowRight, FaCheck} from "react-icons/fa";
import {motion, useTransform, useViewportScroll} from 'framer-motion';
import {ABOUT_ID, BOOK_ID} from "../../assets/data";
import Link from "next/link";


const Card = ({title, text, delay}) => (
    <motion.div
        initial={{opacity: 0, y: 100}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.5, delay: delay}}
        className={"grid gap-y-5 "}>
        <p className={"w-10 h-10 bg-white md:text-xl text-lg grid place-items-center text-green-400"}>
            <FaCheck/>
        </p>
        <p className={"md:text-xl text-lg text-white font-medium"}>
            {title}
        </p>
        <p className={"md:text-lg text-md text-gray-300"}>
            {text}
        </p>
    </motion.div>
)

export default function More() {

    const {scrollYProgress} = useViewportScroll();
    const yValue = useTransform(scrollYProgress, [0, 1], [0, -250])

    return (
        <section id={ABOUT_ID}
                 className={"min-h-screen overflow-y-hidden bg-cover preserve-3d perspective relative py-10 md:mt-32"}>
            <div className={"container mx-auto z-20 relative"}>
                <div className={"grid lg:grid-cols-2"}>
                    <div className={""}>
                        <motion.h2
                            initial={{opacity: 0, y: 40}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.4, delay: 0.1}}
                            className={"lg:text-7xl md:text-6xl sm:text-5xl text-4xl text-white font-bold"}>
                            Enjoy the best possible interstellar experience
                        </motion.h2>
                        <motion.p
                            initial={{opacity: 0, y: 40}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.4, delay: 0.2}}
                            className={"mt-12 md:text-xl sm:text-lg text-md text-gray-300"}>
                            We value our customers the most, our only goal is to satisfy our customers through
                            this interstellar traveling
                        </motion.p>
                        <div className={"mt-12 grid gap-10 grid-cols-2 auto-rows-max"}>
                            <Card title={"100% Risk Free"}
                                  delay={0.1}
                                  text={"Our rides are 100% Risk free, we provide full security from extra terrestrials"}/>
                            <Card title={"Free Interstellar Network"}
                                  delay={0.4}
                                  text={"Connect with your friends via our free interstellar network and enjoy"}/>
                            <Card title={"Invite and Earn"}
                                  delay={0.7}
                                  text={"Invite your close friends and earn discount for your next tour"}/>
                            <Card title={"Premium Space Resorts"}
                                  delay={1}
                                  text={"Get the best and premium space resorts for your comfortable stay"}/>
                        </div>
                        <motion.div
                            initial={{opacity: 0, y: 10}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.4, delay: 1}}
                            className={"mt-12"}>
                            <Link passhref={true} href={BOOK_ID}>
                                <a className={"relative inline-block transition-all duration-300 group hover:bg-white hover:text-gray-900 overflow-visible xl:px-16 lg:px-14 lg:py-4 md:px-12 md:py-4 px-10 py-3 xl:py-6 text-xl text-white bg-transparent border border-white"}>
                                    Book Now
                                    <span
                                        className={"bg-white grid transition-all duration-300 group-hover:bg-transparent group-hover:border-gray-900 text-gray-900 place-items-center absolute px-8 py-2 -bottom-4 -right-4 border border-white"}>
                                            <FaArrowRight/>
                                        </span>
                                </a>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
            <motion.div
                initial={{opacity: 0,}}
                whileInView={{opacity: 1,}}
                viewport={{once: true}}
                transition={{duration: 0.4, delay: 1}}
                style={{y: yValue}} className={"absolute parallax-object z-10 inset-0"}>
                <div
                    className={"absolute right-0 md:top-[60%] top-[30%] transform md:-translate-y-1/2 lg:w-[35%] w-[50%]"}>
                    <Image src={Mars} alt={""}/>
                </div>
            </motion.div>
        </section>
    )
}