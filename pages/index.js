import Navbar from "../components/Navigation";
import Hero from "../elements/Home/Hero";
import About from "../elements/Home/About";

export default function Home() {
    return (
        <div className={""}>
            <Navbar/>
            <main className={"scroll-smooth perspective h-screen overflow-x-hidden overflow-y-auto bg-black"}>
                <Hero/>
                <About/>
            </main>
        </div>
    )
}
