import Navbar from "../components/Navigation";
import About from "../elements/Home/About";
import {NewHero} from "../elements/Home/NewHero";
import More from "../elements/Home/More";
import Orbit from "../elements/Home/Gallery";

export default function Home() {

    return (
        <main className={""}>
            <Navbar/>
            <main className={"bg-black"}>
                <NewHero/>
                <About/>
                <More/>
                <Orbit/>
            </main>
        </main>
    )
}
