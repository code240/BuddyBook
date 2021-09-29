import Header from "./Component/CommonComponent/Header";
import InputCreate from "./Component/InputCreate";
import CookieDelete from "./Component/CookieDelete";
import Footer from './Component/CommonComponent/Footer';

function CreateForm(){
    return (
        <>
            <Header active="i3"/>
            <InputCreate />
            <Footer />
            <CookieDelete />
        </>
    )
}

export default CreateForm;