import React from 'react';
import Logo from './Logo';

const Header: React.FC = () => {
    return (
        <div className="header">
            <Logo src='https://res.cloudinary.com/glovooker/image/upload/v1733498859/carroza/LOGO_CON_INSTITUCIO%CC%81N_BENEME%CC%81RITA.png' alt='Logo Museo de los Niños' />
            <p>Te invita a explorar las siguientes experiencias de Realidad Aumentada</p>
        </div>
    );
};

export default Header;
