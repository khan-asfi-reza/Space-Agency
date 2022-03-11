import Sky from "../../assets/images/sky1.jpg";
import OrbitImg from "../../assets/images/orbit.png";
import Rocket from "../../assets/images/rocket.png";
import Image from "next/image"

export default function Orbit() {
    return (
        <section style={{backgroundImage: `url(${Sky.src})`}} className={" py-32 min-h-screen bg-cover"}>
            <div className={"relative h-full min-h-screen"}>
                <div className={"absolute h-full w-3/4 left-1/2 transform top-1/2 -translate-y-1/2 -translate-x-1/2"}>
                    <Image src={OrbitImg} layout={"fill"} objectFit={"contain"} alt={""}/>
                </div>
                <div className={"absolute h-96 w-3/4 left-1/2 transform top-1/2 -translate-y-1/2 -translate-x-1/2"}>
                    <Image src={Rocket} layout={"fill"} objectFit={"contain"} alt={""}/>
                </div>
            </div>
        </section>
    )
}