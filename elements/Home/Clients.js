import Nasa from "../../assets/images/nasa.png";
import Google from "../../assets/images/google.png";
import SpaceX from "../../assets/images/spacex.png";
import ESA from "../../assets/images/esa.png";
import CD from "../../assets/images/codedrop.png";
import {motion} from "framer-motion";

const LogoContainer = ({image, delay}) => (
    <motion.div
        initial={{opacity: 0, y: 25}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        transition={{duration: 0.4, delay: delay * .2}}
        className={"relative h-32 lg:mx-16 mx-4 w-32 grid place-items-center overflow-hidden"}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image.src} className={"object-fit-cover"} alt=""/>
    </motion.div>
)

export default function OurClients() {
    return (
        <section className={"py-20 container mx-auto "}>
            <h2 className={"text-5xl text-center text-white"}>
                Our Clients
            </h2>
            <p className={"mt-3 text-gray-300 text-center"}>
                Top Clients we served throughout the year
            </p>
            <div className="flex flex-row items-center justify-center flex-wrap mt-20">
                <LogoContainer delay={0} image={Nasa}/>
                <LogoContainer delay={1} image={Google}/>
                <LogoContainer delay={3} image={SpaceX}/>
                <LogoContainer delay={4} image={ESA}/>
                <LogoContainer delay={5} image={CD}/>

            </div>
        </section>
    )
}