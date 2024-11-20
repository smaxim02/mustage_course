'use client';

import Icon from '@/helpers/Icon';
import styles from './Footer.module.css';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import Button from '../Button/Button';
import { menuItems, socialItems } from '@/data/data';
import LanguageSwitcherFooter from '../LanguageSwitcherFooter/LanguageSwitcherFooter';

export default function Footer({ locale }: { locale: string }) {
  const t = useTranslations();

  const pathname = usePathname();
  const router = useRouter();

  const handleLanguageChange = (lang: string) => {
    const path = pathname.split('/').slice(2).join('/');
    router.push(`/${lang}/${path}`);
  };

  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <Link className={styles.logo_wrap} href={`/${locale}/`}>
          <Icon name="icon-logo-dark" width={40} height={33} />
          <span>{t('Header.home')}</span>
        </Link>
        <p className={styles.menu}>{t('Footer.menu.menu')}</p>
        <nav className={styles.nav}>
          <ul>
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.href}>{t(item.label)}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className={styles.social}>
          {socialItems.map((item, index) => (
            <li key={index}>
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Icon name={item.icon} width={32} height={32} />
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.lang_wrap}>
          <LanguageSwitcherFooter
            locale={locale}
            handleLanguageChange={handleLanguageChange}
          />
        </div>
        <div className={styles.button_wrap}>
          <Button
            width="86%"
            height="56px"
            link={t('Main.buttonLink')}
            text={t('Main.buttonFooter')}
          />
        </div>
        <div className={styles.policy_wrap}>
          <a href="/" target="_blank" rel="noopener noreferrer">
            {t('Footer.policy')}
          </a>
        </div>
      </div>
    </section>
  );
}
