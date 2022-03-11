import Image from "next/image";
import LoginPageImage from "../assets/images/mars.png";
import {Form, Input, InputGroup, Label} from "../components/Form";
import Link from "next/link";
import {motion} from "framer-motion";
import {useState} from "react";
import {FaSpinner} from "react-icons/fa";

export default function Login() {

    const [state, setState] = useState({
        email: "",
        password: "",
        loading: false,
        error: "",
    });

    const setInputState = (e) => {
        setState({...state, [e.target.name]: e.target.value})
    }

    const InputFields = [
        {
            name: "email",
            type: "email",
            label: "Email",
            value: state.email,
        },
        {
            name: "password",
            type: "password",
            label: "Password",
            value: state.password
        }
    ]

    const formOnClick = (e) => {
        e.preventDefault();

    }


    return (
        <section id={"LOGIN_SECTION"}
                 className={"min-h-screen min-w-full md:bg-gray-200 bg-gradient-to-br from-gray-100 to-gray-400 overflow-hidden"}>
            <motion.div initial="hidden"
                        key={"inner"}
                        variants={{
                            hidden: {opacity: 0, x: -1000, y: 0},
                            enter: {opacity: 1, x: 0, y: 0},
                            exit: {opacity: 0, x: 1000, y: 0},
                        }}
                        animate="enter"
                        exit="exit"
                        transition={{type: 'linear'}}>
                <div className={"max-w-7xl container mx-auto min-h-screen grid place-items-center px-4"}>
                    <div
                        className={"static min-h-[75vh] md:grid m-auto w-full rounded-2xl md:bg-black bg-white md:grid-cols-2 md:overflow-hidden"}>
                        <div
                            className={"md:static relative md:h-auto bg-black h-56 w-full md:rounded-none rounded-t-3xl md:p-12 grid place-items-center z-20"}>
                            <div>
                                <div
                                    className={"md:bg-transparent bg-black md:static absolute top-12 left-1/2 md:translate-x-0 -translate-x-1/2 md:h-auto md:w-full md:border-0 border-8 border-white h-56 w-56 rounded-full  grid place-items-center mx-auto"}>
                                    <div className={"md:w-full  mx-auto w-7/12"}>
                                        <Image alt={"LoginImage"} src={LoginPageImage}/>
                                    </div>
                                </div>
                                <div className={"md:grid hidden place-items-center"}>
                                    <div>
                                        <p className={"text-gray-200 text-center font-medium"}>
                                            Login to Void
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            className={"z-10 md:mt-0 overflow-hidden transition transform border-[1rem] md:rounded-3xl md:border-black rounded-b-3xl bg-gray-200 md:bg-gray-200 lg:py-16 md:py-10 lg:px-10 lg:px-12 md:px-8 md:py-8 sm:px-6 sm:py-16 py-16 "}>
                            <div className={"grid place-items-center w-full h-full"}>
                                <div className={"w-full"}>
                                    <div>
                                        <h2 className={"text-5xl font-bold md:text-left text-center text-black font-medium"}>
                                            Welcome
                                        </h2>
                                        <hr className={"w-32 md:mx-0 mx-auto mt-2 rounded-2xl bg-blue-400"}/>
                                        <p className={"text-gray-600 md:text-left text-center"}>
                                            Signup or sign into Void
                                        </p>
                                    </div>
                                    <Form onSubmit={formOnClick} className={"mt-10"}>
                                        {
                                            InputFields.map(({name, type, label, value}, key) =>
                                                <InputGroup key={key} className={"group mt-6 "}>
                                                    <Label
                                                        className={"text-md group-focus-within:text-emerald-600 transition-all duration-500"}>
                                                        {label}
                                                    </Label>
                                                    <div className={"flex flex-row"}>
                                                        <span
                                                            className={"h-12 w-2 bg-black transition-all duration-500 group-focus-within:bg-emerald-500"}/>
                                                        <Input onChange={setInputState} value={value} name={name}
                                                               type={type}
                                                               className={"text-gray-700 border border-transparent transition-all duration-500 focus-within:border-emerald-500 w-full h-12"}/>
                                                    </div>
                                                </InputGroup>
                                            )
                                        }

                                        <div className={"text-right"}>
                                            <a className={"mt-4 hover:text-yellow-500"}>Forgot Password?</a>
                                        </div>
                                        <div className={"flex flex-row justify-between mt-12"}>
                                            <button disabled={state.loading} type={"submit"}
                                                    className={"bg-black justify-center w-32 flex items-center " +
                                                        "text-white disabled:bg-emerald-500 md:px-10 px-8 hover:border-black hover:text-black hover:bg-transparent border-transparent border-2 transition-all"}>
                                                {state.loading && <i className={"animate-spin mr-2"}><FaSpinner/></i>}
                                                Login
                                            </button>
                                            <Link scroll={false} passHref={true} href={"/signup"}>
                                                <a
                                                    className={"grid p-2 place-items-center text-center text-black  border-black border-2 font-medium  hover:bg-black hover:text-white transition-all"}>
                                                    Create Account
                                                </a>
                                            </Link>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>

    )
}