'use client';

import styles from './Answers.module.css';
import { useTranslations } from 'next-intl';
import { answersItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import { useState } from 'react';

export default function Answers() {
  const t = useTranslations();

  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleDropdown = (index: number): void => {
    setOpenIndices(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className={styles.answers}>
      <h1 className={styles.header}>{t('Answers.header')}</h1>

      <ul className={styles.list}>
        {answersItems.map((item, index) => (
          <li key={index}>
            <div className={styles.id_wrap}>
              <span>{item.itemsId}</span>
            </div>
            <div className={styles.button_wrap}>
              <h3>{t(item.itemsHeader)}</h3>
              <button
                type="button"
                className={
                  openIndices.includes(index) ? `${styles.active}` : ''
                }
                onClick={() => toggleDropdown(index)}
              >
                <Icon name="icon-angle-down" width={16} height={16} />
              </button>
            </div>
            <p
              className={`${styles.drop_box} ${
                openIndices.includes(index) ? `${styles.open}` : ''
              }`}
            >
              {t(item.itemsText)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
