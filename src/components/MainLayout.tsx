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
                <Button id="button-one" label="" onClick={ () => window.open("https://festivaldelaluz.8thwall.app/stickers-animados/", "_self") } />
                <Button id="button-two" label="" onClick={ () => window.open("https://festivaldelaluz.8thwall.app/filtro-abeja/", "_self") } />
                <Button id="button-three" label="" onClick={ () => window.open("https://festivaldelaluz.8thwall.app/ciudad-sostenible/", "_self") } />
            </div>
            <div className="footer">
                <Logo src='src/assets/images/museo_de_los_niños.svg' alt = 'Logo del Museo de los Niños' />
                <Logo src='src/assets/images/cenfotec.svg' alt='Logo Universidad Cenfotec' />
            </div>
        </div>
    );
};

export default MainLayout;
