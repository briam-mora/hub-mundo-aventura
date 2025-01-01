import React from 'react';

type ButtonProps = {
    id: string;
    label?: string;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ id,label, onClick }) => {
    return (
      <button id={id} className="button" onClick={ onClick }>
          { label }
      </button>
  );
};

export default Button;
