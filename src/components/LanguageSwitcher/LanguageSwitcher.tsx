import { useState } from 'react';
import styles from './LanguageSwitcher.module.css';
import Icon from '@/helpers/Icon';

interface LanguageSwitcherProps {
  handleLanguageChange: (language: string) => void;
  locale: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  handleLanguageChange,
  locale,
}) => {
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);

  const handleIconClick = () => setIsButtonsVisible(!isButtonsVisible);

  return (
    <div className={styles.language}>
      <div
        onClick={handleIconClick}
        className={`${styles.icon} ${
          isButtonsVisible ? styles.iconActive : ''
        }`}
      >
        <Icon name="icon-network" width={24} height={24} />
        <Icon name="icon-down" width={24} height={24} />
      </div>

      <div
        className={`${styles.buttonsContainer} ${
          isButtonsVisible ? styles.containerActive : ''
        }`}
      >
        <button
          className={`${styles.button} ${
            locale === 'ua' ? styles.buttonActive : ''
          }`}
          onClick={() => handleLanguageChange('ua')}
          type="button"
        >
          UA
        </button>
        <button
          className={`${styles.button} ${
            locale === 'ru' ? styles.buttonActive : ''
          }`}
          onClick={() => handleLanguageChange('ru')}
          type="button"
        >
          RU
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
