'use client';

import styles from './Program.module.css';
import { useTranslations } from 'next-intl';
import { programItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import { useState } from 'react';

export default function Program() {
  const t = useTranslations();

  const [openIndices, setOpenIndices] = useState<number[]>([]);

  const toggleDropdown = (index: number): void => {
    setOpenIndices(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="program" className={styles.program}>
      <h1 className={styles.header}>
        {t('Program.header.first')} &nbsp;
        <span> {t('Program.header.second')}</span> &nbsp;
        {t('Program.header.third')}
      </h1>

      <ul className={styles.list}>
        {programItems.map((item, index) => (
          <li key={index}>
            <div className={styles.main_wrap}>
              <h3>{t(item.itemsHeader)}</h3>
              <div className={styles.block_wrap}>
                <div>
                  <Icon name="icon-video" width={16} height={16} />
                  <p>
                    <span> {t(item.time.first)}</span> {t(item.time.second)}
                    <span> {t(item.time.third)}</span>
                    {t(item.time.fourth)}
                  </p>
                </div>
                <div>
                  <Icon name="icon-dock" width={16} height={16} />
                  <p>
                    <span>{t(item.quests.first)}</span>
                    {t(item.quests.second)}
                  </p>
                </div>
                <div>
                  <Icon name="icon-edit" width={16} height={16} />
                  <p>
                    <span>{t(item.tests.first)}</span>
                    {t(item.tests.second)}
                  </p>
                </div>
              </div>
              <div className={styles.button_wrap}>
                <h4>{t(item.itemsText)}</h4>
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
            </div>
            <ul
              className={`${styles.drop_box} ${
                openIndices.includes(index) ? `${styles.open}` : ''
              }`}
            >
              {Object.entries(item.itemsBlock).map(([key, value]) => {
                if (value) {
                  return (
                    <li key={key}>
                      <div>
                        <Icon name="icon-check-cube" width={16} height={16} />
                        <span>{t(value.first)}</span>
                      </div>
                      <p>{t(value.second)}</p>
                    </li>
                  );
                }
                return null;
              })}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
