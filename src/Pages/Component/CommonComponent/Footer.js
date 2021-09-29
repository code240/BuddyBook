import "../../../AllCss/Footer.css";
const Footer = () => {
    return (
        <>
            <footer className="container-fluid foot">
                <hr className="hr-line"></hr>
                <span className="follow-us-here">
                    Follow us here :
                </span>
                <a href={'https://www.instagram.com/sttar_vipin_rao/'} rel="noreferrer" target="_blank"><span className="icon icon-1"><i className="fab fa-instagram-square"></i></span></a>
                <a href={'https://www.linkedin.com/in/vipin-rao-8a443a1b1'} rel="noreferrer" target="_blank"><span className="icon icon-1"><i className="fab fa-linkedin"></i></span></a>
                <a href={'https://twitter.com/rao_sttar'} rel="noreferrer" target="_blank"><span className="icon icon-1"><i className="fab fa-twitter-square"></i></span></a>
            </footer>
        </>
    );
}
export default Footer;