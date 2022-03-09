import {Disclosure, Transition} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {Fragment, useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {HERO_ID, NAVIGATION as navigation} from "../assets/data";
import {ToTopButton} from "./Button";
import {FaRocket} from "react-icons/fa";

export const Logo = ({color = "text-gray-900"}) => (
    <div className={"text-center rounded-full text-2xl bg-white grid place-items-center text-blue-900 h-12 w-12"}>
        <FaRocket/>
    </div>

)

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [navBg, setNavBg] = useState(false);
    const [scrollTopBtn, setScrollTopBtn] = useState("invisible");
    useEffect(() => {
        document.onscroll = function () {
            setNavBg(false)
            setScrollTopBtn(document.scrollingElement.scrollTop > 300 ? "visible" : "invisible")
        }
    }, [])
    return (
        <>
            <ToTopButton className={scrollTopBtn} href={"#" + HERO_ID}/>
            <Disclosure as="nav"
                        className={classNames("transition-all bg-bgDark fixed w-screen z-50", navBg ? "bg-transparent" : "bg-transparent")}>
                {({open}) => (
                    <div className={open ? "bg-black" : "bg-transparent"}>
                        <div className="xl:px-24 lg:px-20 md:px-16 md:max-w-full md:w-full container mx-auto">
                            <div className="relative flex items-center justify-between h-16">
                                <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button
                                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true"/>
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true"/>
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="lg:grid md:grid-cols-3 flex flex-row-reverse flex-1">
                                    <div className="flex-shrink-0 flex items-center">
                                        <span
                                            className={classNames("ml-2 font-medium text-clrHeading", !navBg ? 'lg:text-white' : 'lg:text-clrHeading')}><Logo/></span>
                                    </div>
                                    <div className="hidden lg:block ">
                                        <div className="flex justify-center">
                                            <AnimatePresence>
                                                {navigation.map((item, key) => (
                                                    <motion.a
                                                        initial={{opacity: 0, y: 10}}
                                                        whileInView={{opacity: 1, y: 0}}
                                                        transition={{delay: key * 0.2}}
                                                        viewport={{once: true}}
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            navBg ? "lg:text-gray-800 hover:bg-blue-500 hover:text-white" :
                                                                "lg:text-gray-300  hover:border-white hover:text-white",
                                                            ' border-2 border-transparent',
                                                            'px-5 py-2 rounded-md text-lg font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </motion.a>
                                                ))}
                                            </AnimatePresence>
                                        </div>
                                    </div>

                                    <div className={"justify-self-end grid place-items-center"}>
                                        <motion.a
                                            initial={{opacity: 0, y: 10}}
                                            whileInView={{opacity: 1, y: 0}}
                                            transition={{delay: 6 * 0.2}}
                                            viewport={{once: true}}
                                            className={classNames(
                                                navBg ? "text-gray-800 hover:bg-blue-500 hover:text-white" :
                                                    "text-white  hover:border-white hover:text-white",
                                                ' border-2 border-white',
                                                'px-5 py-2 rounded-md text-lg font-medium'
                                            )}
                                            aria-current={'page'}
                                        >
                                            Login
                                        </motion.a>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <Transition enterFrom={"transform -translate-y-20 duration-500"} leaveFrom={"opacity-1"}
                                    leaveTo={"opacity-0"} show={open} as={Fragment}>
                            <Disclosure.Panel className="lg:hidden transition-all">
                                <div className="px-2 pt-2 pb-3 space-y-1">
                                    {navigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className={classNames(
                                                item.current ? 'bg-gray-200 text-white' : 'text-gray-200 hover:bg-gray-200 hover:text-black',
                                                'block px-3 py-2 rounded-md text-md font-medium'
                                            )}
                                            aria-current={item.current ? 'page' : undefined}
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>

                            </Disclosure.Panel>
                        </Transition>
                    </div>
                )}
            </Disclosure>
        </>
    )
}