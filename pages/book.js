import Navbar from "../components/Navigation";
import Hero from "../elements/Home/Hero";
import More from "../elements/Home/More";
import Footer from "../components/Footer";

export default function Book() {
    return (
        <div>
            <Navbar/>
            <main className={"bg-black perspective h-screen overflow-y-scroll overflow-x-hidden"}>
                <Hero/>
                <div className={"py-2 z-20 bg-black"}>
                    <More/>
                </div>
                <Footer/>
            </main>

        </div>
    )
}