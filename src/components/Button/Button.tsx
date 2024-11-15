import React from 'react';
import styles from './Button.module.css';

interface ButtonProps {
  width?: string;
  height?: string;
  text: string;
  link: string;
  showArrow?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  width,
  text,
  link,
  height,
  showArrow = true,
}) => {
  return (
    <a
      className={`${styles.button} ${!showArrow ? styles.noArrow : ''}`}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      style={{ height, width }}
    >
      {text}
    </a>
  );
};

export default Button;
