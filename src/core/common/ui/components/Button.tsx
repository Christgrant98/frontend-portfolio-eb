import React from 'react';
import '../css/Button.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  noBorder?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  text,
  onClick,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className = '',
  noBorder = false
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`button button-${variant} ${className}`}
      style={noBorder ? { border: 'none' } : undefined}
    >
      {text}
    </button>
  );
};

export default Button;

