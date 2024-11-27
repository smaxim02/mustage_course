import styles from './LanguageSwitcherFooter.module.css';

interface LanguageSwitcherFooterProps {
  handleLanguageChange: (language: string) => void;
  locale: string;
}

const LanguageSwitcherFooter: React.FC<LanguageSwitcherFooterProps> = ({
  handleLanguageChange,
  locale,
}) => {
  return (
    <div className={styles.language}>
      <button
        className={`${styles.button} ${
          locale === 'ru' ? styles.buttonActive : ''
        }`}
        onClick={() => handleLanguageChange('ru')}
        type="button"
      >
        RU
      </button>
      <button
        className={`${styles.button} ${
          locale === 'uk' ? styles.buttonActive : ''
        }`}
        onClick={() => handleLanguageChange('uk')}
        type="button"
      >
        UA
      </button>
    </div>
  );
};

export default LanguageSwitcherFooter;
