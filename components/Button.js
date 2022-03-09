import {FaArrowAltCircleUp} from "react-icons/fa";

export function ToTopButton({className, href}) {
    return (
        <a href={href}
           className={"fixed bottom-16 right-2 text-3xl  bg-sky-500 text-white text-center rounded-full p-2 transition-all " + className}>
            <FaArrowAltCircleUp/>
        </a>
    )
}