import React from 'react';

type LogoProps = {
    alt: string;
    src: string;
};

const Logo: React.FC<LogoProps> = ({ alt, src }) => {
    return (
        <div className='logo'>
            <img src={ src } alt={ alt } />
        </div>
    );
};

export default Logo;
