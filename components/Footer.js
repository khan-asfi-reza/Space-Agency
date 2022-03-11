import {Logo} from "./Navigation";
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";
import {NAVIGATION} from "../assets/data";

export default function Footer() {
    return (
        <footer className="bg-black ">

            <div className="container mx-auto md:px-10 px-5 pt-10 pb-4">

                <div className="flex flex-row items-center">
                    <Logo/> <span className={"text-white"}>
                    Void
                </span>
                </div>

                <div className="flex md:flex-row flex-col justify-between mt-5">
                    <p className="mt-6 text-gray-200 text-md max-w-3xl">
                        Void is the best space traveling agency, <br/>
                        first in business, the best company in the world
                    </p>
                    <div className="md:mt-0 mt-5">
                        <div className="flex flex-col">
                            {NAVIGATION.map((each, k) => (
                                <a key={each.href}
                                   className="no-underline mt-2 text-gray-200 hover:text-white hover:font-bold"
                                   href={each.href}>{each.name}</a>
                            ))}

                        </div>

                    </div>

                    <div className="md:mt-0 mt-5">
                        <p className="text-gray-200 text-lg font-semibold">Contact</p>
                        <div className="mt-6">
                            <div className="flex flex-row">
                                <i className="fa fa-location-arrow text-gray-200 "/>
                                <p className="text-gray-200 text-xs">20, 14, Mirpur, Dhaka<br/> Bangladesh
                                </p>
                            </div>
                            <div className="flex flex-row mt-4">
                                <i className="fa fa-envelope text-gray-200 "/>
                                <p className="text-gray-200 text-xs">info@void.net</p>
                            </div>
                            <div className="flex flex-row mt-4">
                                <i className="fa fa-phone text-gray-200 "/>
                                <p className="text-gray-200 text-xs">+1 800-715-1009</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row md:mt-0 mt-5">
                        <a className="text-2xl no-underline mr-3 text-gray-200 hover:text-white hover:font-bold"
                           href="https://www.facebook.com/khanasfirezapranto10">
                            <FaFacebook/>
                        </a>
                        <a className="text-2xl no-underline mr-3 text-gray-200 hover:text-white hover:font-bold"
                           href="https://www.instagram.com/khan_asfi_reza/">
                            <FaInstagram/>
                        </a>
                        <a className="text-2xl no-underline text-gray-200 hover:text-white hover:font-bold"
                           href="https://www.linkedin.com/khanasfireza">
                            <FaLinkedin/>
                        </a>
                    </div>

                </div>

                <div className="mt-6">
                    <p className="text-center text-xs text-gray-200">All rights reserved to &copy;Void</p>
                </div>
            </div>
        </footer>

    )
}