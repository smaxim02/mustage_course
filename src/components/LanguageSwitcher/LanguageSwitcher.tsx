'use client';

import { useEffect } from 'react';
import styles from './LanguageSwitcher.module.css';
import { usePathname, useRouter } from 'next/navigation';
import useStore from '@/store/useStore';

const LanguageSwitcher = ({ isFooter = false }) => {
  const pathname = usePathname();
  const router = useRouter();

  const { query, setLocale } = useStore();

  // Функція для визначення локалі з URL
  const getLocaleFromPath = (pathname: string): string => {
    const pathSegments = pathname.split('/');
    return pathSegments[1] || 'uk';
  };

  const locale = getLocaleFromPath(pathname || '');

  // Оновлюємо локаль у глобальному стані
  useEffect(() => {
    setLocale(locale);
  }, [setLocale, locale]);

  const handleLanguageChange = (lang: string) => {
    const path = pathname?.split('/').slice(2).join('/');
    router.push(`/${lang}/${path}?${query}`);
  };

  return (
    <div className={`${styles.language} ${isFooter ? styles.footer : ''}`}>
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

export default LanguageSwitcher;
