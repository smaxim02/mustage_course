'use client';

import styles from './Tariffs.module.css';
import { useTranslations } from 'next-intl';
import { tariffsBanks, tariffsItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import Button from '../Button/Button';
import { ApiResponse, fetchData } from '@/api/getTariffs';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Tariffs() {
  const t = useTranslations();
  const CHAT_URL = process.env.NEXT_PUBLIC_CHAT_URL || '';

  const pathname = usePathname();
  const getLocaleFromPath = (pathname: string): string => {
    const pathSegments = pathname.split('/');
    return pathSegments[1] || 'uk';
  };
  const locale = getLocaleFromPath(pathname || '');

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<ApiResponse | null>(null);

  useEffect(() => {
    // Якщо locale порожня, не робимо запит
    if (!locale) return;
    setLoading(true);
    setError(false);

    fetchData(locale)
      .then(response => {
        setData(response);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [locale]);

  if (loading) {
    return (
      <div className={styles.dots_loading}>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
        <span className={styles.dot}></span>
      </div>
    );
  }

  // Переконуємось, що data є масивом; якщо ні – використовуємо тарифний масив з резервних даних.
  const tariffsData =
    !error && data && Array.isArray(data)
      ? [...data].sort((a, b) => Number(a.Price) - Number(b.Price))
      : tariffsItems;

  return (
    <section id="tariffs" className={styles.tariffs}>
      <h2 className={styles.tariffsHeader}>{t('Tariffs.header')}</h2>

      <ul className={styles.tariffsList}>
        {tariffsData.map((item, index) => {
          // Визначаємо, чи є дані з API (мають поле TariffsItems)
          const isApiData = 'TariffsItems' in item;

          return (
            <li key={index} className={styles.tariffsListItem}>
              <div className={styles.tariffsListItemHeaderWrap}>
                <h3 className={styles.tariffsListItemHeader}>
                  {isApiData ? item.Name : t(item.header)}
                </h3>
              </div>
              <span className={styles.tariffsListItemPrice}>
                {isApiData ? item.Price : t(item.price)}
              </span>

              <ul className={styles.tariffsSubList}>
                {isApiData
                  ? // Для даних з API: TariffsItems – це масив об'єктів
                    (
                      item.TariffsItems as Array<{
                        id: number;
                        TariffsItem: string;
                      }>
                    ).map((tariffItem, i) => (
                      <li className={styles.tariffsSubListItem} key={i}>
                        <div className={styles.tariffsSubListItemIconWrap}>
                          <Icon
                            name="icon-check"
                            width={12}
                            height={9}
                            color="#575FF2"
                          />
                        </div>
                        <p className={styles.tariffsSubListItemText}>
                          {tariffItem.TariffsItem}
                        </p>
                      </li>
                    ))
                  : // Для резервних даних: перетворюємо об'єкт в масив записів
                    Object.entries(item.list).map(([key, value]) =>
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
                          <p className={styles.tariffsSubListItemText}>
                            {t(value)}
                          </p>
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
          );
        })}
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
          {tariffsBanks.map((bank, index) => (
            <li key={index} className={styles.tariffsBankListItem}>
              <Icon name={bank} width={48} height={48} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
