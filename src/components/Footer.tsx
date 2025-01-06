import React from "react";
import Logo from "./Logo";
import museoImage from "../assets/images/museo_de_los_ninos.svg";
import cenfotecImage from "../assets/images/cenfotec.svg";


type FooterProps = {
    showCenfo?: boolean;
    showMuseo?: boolean;
}

const Footer: React.FC<FooterProps> = ({showCenfo = true, showMuseo =  true}) =>{
    return(
        <div className="footer">
            <div className="footer-contents">
                {showMuseo && <Logo src={museoImage} alt = 'Logo del Museo de los Niños' />}
                {showCenfo && <Logo src={cenfotecImage} alt='Logo Universidad Cenfotec' />}
            </div>
        </div>
    );
};

export default Footer;