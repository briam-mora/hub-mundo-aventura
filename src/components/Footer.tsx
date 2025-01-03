import React from "react";
import Logo from "./Logo";

type FooterProps = {
    showCenfo?: boolean;
    showMuseo?: boolean;
}

const Footer: React.FC<FooterProps> = ({showCenfo = true, showMuseo =  true}) =>{
    return(
        <div className="footer">
            <div className="footer-contents">
                {showMuseo && <Logo src='src/assets/images/museo_de_los_niños.svg' alt = 'Logo del Museo de los Niños' />}
                {showCenfo && <Logo src='src/assets/images/cenfotec.svg' alt='Logo Universidad Cenfotec' />}
            </div>
        </div>
    );
};

export default Footer;