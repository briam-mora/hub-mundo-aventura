import React, {useEffect} from 'react';
import Header from './Header';
import Button from './Button';
import Footer from './Footer';

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
            <Header showBackButton={false} showMuteButton={false}/>
            <div className='info-container'>
                <p>Diviértete completando las 3 actividades</p>
            </div>
            <div className="button-container">
                <Button id="button-one" label="" onClick={ () => window.open("https://festivaldelaluz.8thwall.app/busqueda-mundo-aventura/", "_self") } />
                <Button id="button-two" label="" onClick={ () => window.open("https://festivaldelaluz.8thwall.app/mascara-mundo-aventura/", "_self") } />
                <Button id="button-three" label="" onClick={ () => window.open("https://festivaldelaluz.8thwall.app/espacio-mundo-aventura/", "_self") } />
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;
