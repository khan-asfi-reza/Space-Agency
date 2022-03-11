import Navbar from "../components/Navigation";
import About from "../elements/Home/About";
import {NewHero} from "../elements/Home/NewHero";
import More from "../elements/Home/More";
import Orbit from "../elements/Home/Sky";
import Gallery from "../elements/Home/Gallery";
import Footer from "../components/Footer";
import OurClients from "../components/Clients";

export default function Home() {

    return (
        <main className={""}>
            <Navbar/>
            <main className={"bg-black"}>
                <NewHero/>
                <About/>
                <More/>
                <Orbit/>
                <Gallery/>
                <OurClients/>
            </main>
            <Footer/>
        </main>
    )
}
