import Header from "./Component/CommonComponent/Header";
import Face from "./Component/Face";
import Footer from "./Component/CommonComponent/Footer";
import CookieDelete from "./Component/CookieDelete";

const Home = () => {
    return (
        <>
            <Header active="i1" />
            <Face />
            <Footer/>
            <CookieDelete />
        </>
    )
}
export default Home;