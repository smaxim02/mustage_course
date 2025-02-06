'use client';

import styles from './MustHave.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { mustHaveItems } from '@/data/data';
import logo from '../../img/mustHave/logo.webp';
import laptop from '../../img/mustHave/laptop.webp';
import Icon from '@/helpers/Icon';

export default function MustHave() {
  const t = useTranslations();

  return (
    <section className={styles.mustHave}>
      <h2 className={styles.header}>
        {t('MustHave.header.first')} <span>{t('MustHave.header.second')}</span>
        {t('MustHave.header.third')}
      </h2>
      <div className={styles.wrap}>
        <div className={styles.list_wrap}>
          <div className={styles.header_wrap}>
            <div className={styles.logo_wrap}>
              <Image
                src={laptop}
                width={0}
                height={0}
                sizes="100vw"
                alt="Laptop icon"
                priority
              />
            </div>
            <h3 className={styles.list_header}>{t('MustHave.blockHeader')}</h3>
          </div>
          <ul className={styles.list}>
            {mustHaveItems.map((item, index) => (
              <li key={index}>
                <div className={styles.icon_wrap}>
                  <Icon
                    name="icon-check"
                    width={12}
                    height={9}
                    color="#3fa8a8"
                  />
                </div>
                <p>{t(item)}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.text_wrap}>
          <div>
            <p className={styles.text}>
              <span>{t('MustHave.text.first')}</span>
              {t('MustHave.text.second')}
              <span> {t('MustHave.text.third')}</span>
              {t('MustHave.text.fourth')}
              <span>{t('MustHave.text.fifth')}</span>
              {t('MustHave.text.sixth')}
            </p>
            <p className={styles.text}>
              <span>{t('MustHave.secondText.first')}</span>
              {t('MustHave.secondText.second')}
            </p>
          </div>
          <Image
            className={styles.img_logo}
            src={logo}
            width={0}
            height={0}
            sizes="100vw"
            alt="Worker logo"
            priority
          />
        </div>
      </div>
    </section>
  );
}
