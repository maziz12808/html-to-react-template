import Slider from "./slider";
import Feature from "./feature"
import About from "../about";
import HomeServices from "./home-services"
import Services from "../services";
import ClientComment from "./clients-comments";
import ContactUs from "../contact-us"
const HomePage = ()=>{
    return (
        <>
            <Slider />
            <Feature />
            <About />
            <HomeServices />
            <Services />
            <ClientComment />
            <ContactUs />
        </>
    )
}

export default HomePage;