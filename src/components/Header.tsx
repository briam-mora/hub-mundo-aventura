import React from 'react';
import Logo from './Logo';
import Button from './Button';

type HeaderProps = {
    showMuteButton?: boolean;
    showBackButton?: boolean;
    url?: string;
};

const Header: React.FC<HeaderProps> = ({ showMuteButton = false, showBackButton = false, url = 'URL(CAMBIAR)' }) => {
    return (
        <div className="header">
            <Logo src='src/assets/images/Logo Mundo Aventura.png' alt='Logo de Experiencia Mundo Aventura' />
            <div className='io-btn-container'>
                {showBackButton && <Button id='back-btn' onClick={() => window.open(url, "_self")} />}
                {showMuteButton && <Button id='mute-btn' />}
            </div>
        </div>
    );
};

export default Header;
