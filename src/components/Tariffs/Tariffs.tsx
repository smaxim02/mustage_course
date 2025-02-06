'use client';

import styles from './Tariffs.module.css';
import { useTranslations } from 'next-intl';
import { tariffsBanks, tariffsItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import Button from '../Button/Button';

export default function Tariffs() {
  const t = useTranslations();
  const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL || '';

  return (
    <section id="tariffs" className={styles.tariffs}>
      <h2 className={styles.tariffsHeader}>{t('Tariffs.header')}</h2>

      <ul className={styles.tariffsList}>
        {tariffsItems.map((item, index) => (
          <li key={index} className={styles.tariffsListItem}>
            <div className={styles.tariffsListItemHeaderWrap}>
              <h3 className={styles.tariffsListItemHeader}>{t(item.header)}</h3>
            </div>
            <span className={styles.tariffsListItemPrice}>{t(item.price)}</span>

            <ul className={styles.tariffsSubList}>
              {Object.entries(item.list).map(([key, value]) =>
                value ? (
                  <li className={styles.tariffsSubListItem} key={key}>
                    <div className={styles.tariffsSubListItemIconWrap}>
                      <Icon
                        name="icon-check"
                        width={12}
                        height={9}
                        color="#575FF2"
                      />
                    </div>

                    <p className={styles.tariffsSubListItemText}>{t(value)}</p>
                  </li>
                ) : null
              )}
            </ul>
            <div className={styles.tariffsButtonWrap}>
              <Button
                width="100%"
                link={CHAT_URL}
                text={t('Main.buttonTariffs')}
                showArrow={false}
              />
            </div>
          </li>
        ))}
      </ul>
      <div className={styles.tariffsBankWrap}>
        <div className={styles.tariffsMoneyBox}></div>
        <p className={styles.tariffsBankText}>
          {t('Tariffs.bank.first')}
          <span className={styles.tariffsBankHighlight}>
            {t('Tariffs.bank.second')}
          </span>
        </p>
        <ul className={styles.tariffsBankList}>
          {tariffsBanks.map((item, index) => (
            <li key={index} className={styles.tariffsBankListItem}>
              <Icon name={item} width={48} height={48} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
