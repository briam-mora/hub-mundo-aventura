import React, {useEffect} from 'react';
import Header from './Header';
import Button from './Button';
import Logo from './Logo';

const MainLayout: React.FC = () => {
    function setVh() {
        // Get the viewport height and set the CSS variable
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    useEffect(() => {
      
      // Call the function initially and on resize
      setVh();
      window.addEventListener('resize', setVh);
    }, [])

    return (
        <div className="main-layout">
            <Header />
            <div className="button-container">
                <Button label="Sticker Animado" onClick={ () => window.open("https://festivaldelaluz.8thwall.app/stickers-animados/", "_self") } />
                <Button label="Filtro Abeja" onClick={ () => window.open("https://festivaldelaluz.8thwall.app/filtro-abeja/", "_self") } />
                <Button label="Mundo Sostenible" onClick={ () => window.open("https://festivaldelaluz.8thwall.app/ciudad-sostenible/", "_self") } />
            </div>
            <div className="footer">
                <p>Una experiencia de</p>
                <Logo src='https://res.cloudinary.com/glovooker/image/upload/v1733498838/carroza/Logo-Gradiente.png' alt='Logo Universidad Cenfotec' />
            </div>
        </div>
    );
};

export default MainLayout;
