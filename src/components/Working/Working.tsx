'use client';

import styles from './Working.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { workingItems } from '@/data/data';
import logo from '../../img/working/logo.webp';
import Button from '../Button/Button';

export default function Working() {
  const t = useTranslations();
  const BOT_URL = process.env.NEXT_PUBLIC_BOT_URL || '';

  return (
    <section className={styles.working}>
      <div className={styles.container}>
        <h2 className={styles.header}>{t('Working.header')}</h2>
        <ul className={styles.list}>
          {workingItems.map((item, index) => (
            <li key={index}>
              <div className={styles.numb_wrap}>
                <span>{item.numb}</span>
              </div>
              <p>{t(item.text)}</p>
            </li>
          ))}
        </ul>
        <div className={styles.wrap}>
          <div className={styles.img_wrap}>
            <Image
              src={logo}
              width={0}
              height={0}
              sizes="100vw"
              alt="Worker logo"
              priority
            />
          </div>
          <p className={styles.text}>{t('Working.text')}</p>
          <div className={styles.button_par_wrap}>
            <div className={styles.button_wrap}>
              <p>{t('Working.buttonText.first')}</p>
              <Button width="76.5%" link={BOT_URL} text={t('Main.button')} />
            </div>
            <p className={styles.button_text}>
              {t('Working.buttonText.second')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
