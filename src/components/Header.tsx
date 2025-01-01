import React from 'react';
import Logo from './Logo';
import Button from './Button';

const Header: React.FC = () => {
    return (
        <div className="header">
            <Logo src='src/assets/images/Logo Mundo Aventura.png' alt='Logo Museo de los Niños' />
            <Button id='mute-btn' ></Button>
        </div>
    );
};

export default Header;
