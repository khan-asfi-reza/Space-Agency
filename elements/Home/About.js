import Jupiter from "../../assets/images/jupiter.png"
import Mars from "../../assets/images/BlueNew.png"
import Earth from "../../assets/images/BluePlanet.png"
import Sky from "../../assets/images/sky3.jpg"
import Image from "next/image";
import {FaStar} from "react-icons/fa";
import {motion} from "framer-motion";
import {PLANET_ID} from "../../assets/data";

function range(i) {
    return [...Array(i).keys()];
}


const PlanetCard = ({image, title, text, star, price, delay}) => (
    <motion.div
        initial={{opacity: 0, y: 10}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.4, delay: 0.1 * delay}}
        className={"h-[28rem] relative"}>
        <motion.div
            animate={{
                y: [15, 0, 15]
            }}
            transition={{
                duration: 3,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5,
                delay: 0.5 * delay
            }}
            className="absolute inset-0 overflow-hidden">
            <Image alt={title} src={image} layout={"fill"} objectFit={"contain"}/>
        </motion.div>
        <div className={"lg:w-10/12 w-full mx-auto absolute left-1/2 transform top-1/2 -translate-x-1/2"}>
            <div className={"glass lg:p-10 md:p-8 p-6 w-full"}>
                <h3 className={"text-white font-medium lg:text-2xl text-xl"}>
                    {title}
                </h3>
                <p className={"text-gray-300 lg:text-lg text-md mt-6"}>
                    {text}
                </p>
                <div className="grid grid-cols-5 gap-x-2 mt-6">
                    {range(star).map((i) => (
                        <p key={i} className={"text-xl text-yellow-400"}>
                            <FaStar/>
                        </p>
                    ))}
                </div>
                <p className={"mt-6 lg:text-3xl text-2xl font-medium text-white"}>
                    {price} $
                </p>
            </div>
        </div>
    </motion.div>
)


export default function About() {
    return (
        <section
            id={PLANET_ID}
            style={{backgroundImage: `url(${Sky.src})`}} className={"bg-cover relative min-h-screen z-20"}>
            <div className={"absolute z-10 top-0 w-full h-32 bg-gradient-to-b from-black to-transparent"}>

            </div>
            <section className={"z-20 container mx-auto px-4 py-20"}>
                <motion.h2
                    initial={{opacity: 0, x: -100}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.4, delay: 0.1}}
                    className={"text-6xl font-medium text-white text-center"}>
                    Our Planetary Packages
                </motion.h2>
                <p className={"text-lg text-gray-300 text-center mt-4"}>
                    Get the best Planet Package within your price range
                </p>
                <div className="grid lg:grid-cols-3 lg:gap-20 gap-4 xs:grid-cols-2 mt-32">
                    <PlanetCard image={Jupiter}
                                title={"Jupiter"}
                                text={"The most expensive and luxurious tour ever"}
                                star={5}
                                price={"12,000"}
                                delay={0}
                    />

                    <PlanetCard image={Mars}
                                title={"Vormir"}
                                text={"The most satisfying and luxurious tour ever"}
                                star={5}
                                price={"12,000"}
                                delay={1}
                    />

                    <PlanetCard image={Earth}
                                title={"Neptune"}
                                text={"The most coolest and luxurious tour ever"}
                                star={5}
                                price={"12,000"}
                                delay={2}
                    />
                </div>
            </section>
        </section>
    )
}