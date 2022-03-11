import {Disclosure, Transition} from '@headlessui/react'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {Fragment, useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {HERO_ID, NAVIGATION as navigation} from "../assets/data";
import {ToTopButton} from "./Button";
import {FaRocket} from "react-icons/fa";
import Link from "next/link";

export const Logo = ({color = "text-gray-900"}) => (
    <div className={"text-center rounded-full text-2xl bg-black grid place-items-center text-white h-12 w-12"}>
        <FaRocket/>
    </div>

)

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar({scrollingElement, scrollFunction, ...props}) {
    const [navBg, setNavBg] = useState(false);
    const [scrollTopBtn, setScrollTopBtn] = useState("invisible");

    useEffect(() => {
        const scrollingElement = scrollingElement ? scrollingElement : document
        scrollingElement.onscroll = function () {
            setNavBg(document.scrollingElement.scrollTop > 300);
            setScrollTopBtn(document.scrollingElement.scrollTop > 300 ? "visible" : "invisible");
            if (scrollFunction) {
                scrollFunction();
            }
        }
    }, [])

    return (<>
        <ToTopButton className={scrollTopBtn} href={"#" + HERO_ID}/>
        <Disclosure as="nav"
                    className={classNames("transition-all duration-300 fixed w-screen z-[100]", navBg ? "bg-black" : "bg-transparent")}>
            {({open}) => (<div className={open ? "bg-black" : "bg-transparent"}>
                <div className="xl:px-24 lg:px-20 md:px-16 md:max-w-full md:w-full container mx-auto">
                    <div className="relative flex items-center justify-between h-16">
                        <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                            {/* Mobile menu button*/}
                            <Disclosure.Button
                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {open ? (<XIcon className="block h-6 w-6" aria-hidden="true"/>) : (
                                    <MenuIcon className="block h-6 w-6" aria-hidden="true"/>)}
                            </Disclosure.Button>
                                </div>
                                <div className="lg:grid md:grid-cols-3 flex flex-row-reverse flex-1">
                                    <div className="flex-shrink-0 flex items-center">
                                        <span
                                            className={classNames("ml-2 font-medium text-clrHeading", !navBg ? 'lg:text-white' : 'lg:text-white')}><Logo/></span>
                                    </div>
                                    <div className="hidden lg:block ">
                                        <div className="flex justify-center">
                                            <AnimatePresence>
                                                {navigation.map((item, key) => (
                                                    <Link key={key} passHref={true} href={item.href}>
                                                        <motion.a
                                                            initial={{opacity: 0, y: 10}}
                                                            whileInView={{opacity: 1, y: 0}}
                                                            transition={{delay: key * 0.2}}
                                                            viewport={{once: true}}
                                                            key={item.name}
                                                            href={item.href}
                                                            className={classNames("lg:text-gray-300  hover:border-white hover:text-white", ' border-2 border-transparent', 'px-5 py-2 rounded-md text-lg font-medium')}
                                                            aria-current={item.current ? 'page' : undefined}
                                                        >
                                                            {item.name}
                                                        </motion.a>
                                                    </Link>
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
                                            className={classNames("text-white  hover:border-white hover:text-white", ' border-2 border-white', 'px-5 py-2 rounded-md text-lg font-medium')}
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
                                    {navigation.map((item) => (<Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(item.current ? 'bg-gray-200 text-white' : 'text-gray-200 hover:bg-gray-200 hover:text-black', 'block px-3 py-2 rounded-md text-md font-medium')}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>))}
                                </div>

                            </Disclosure.Panel>
                        </Transition>
            </div>)}
        </Disclosure>
    </>)
}