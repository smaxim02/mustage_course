'use client';

import React, { useState } from 'react';
import styles from './Button.module.css';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';
import { sendMessage, sendToGoogleScript } from '@/api/sendData';

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
  const [isLoading, setIsLoading] = useState(false);
  const t = useTranslations();
  const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL || '';

  const handleClick = async () => {
    setIsLoading(true);
    const message = { message: 'Користувач перейшов в бот', bot: true };

    try {
      window.open(link, '_blank');
      await Promise.all([sendToGoogleScript(message), sendMessage(message)]);
    } catch {
      toast.error(t('Form.errors.sendError'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleRedirect = () => {
    window.open(link, '_blank');
  };

  const isTelegramLink = link === CHAT_URL;

  return (
    <button
      className={`${styles.button} ${!showArrow ? styles.noArrow : ''}`}
      type="button"
      onClick={isTelegramLink ? handleRedirect : handleClick}
      style={{ height, width }}
    >
      {isLoading && !isTelegramLink ? (
        <span className={styles.loader}></span>
      ) : (
        text
      )}
    </button>
  );
};

export default Button;
