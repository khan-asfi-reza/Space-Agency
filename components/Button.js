import {FaArrowAltCircleUp} from "react-icons/fa";

export function ToTopButton({className, href}) {
    return (
        <a href={href}
           className={"fixed z-[10000] bottom-16 right-2 text-3xl  bg-white text-black text-center rounded-full p-2 transition-all " + className}>
            <FaArrowAltCircleUp/>
        </a>
    )
}