import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import ProjectShowcase from "./components/ProjectShowCase/ProjectShowCase";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <ProjectShowcase />
                <About />
                <Contact />
            </main>

            <Footer />
        </>
    );
}

export default App;
