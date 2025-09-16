'use client';

import styles from './Success.module.css';
import Link from 'next/link';
import Icon from '@/helpers/Icon';

export default function Success() {
  return (
    <section className={styles.success}>
      <Link className={styles.logo_wrap} href={`/`}>
        <Icon name="icon-logo_red" width={58} height={48} />
        <span className={styles.logo_text}>Mustage</span>
      </Link>
      <h1 className={styles.header}>Дякуємо за оплату курсу! 🎉</h1>
      <p className={styles.text}>
        Ваша оплата успішно пройшла, очікуйте повідомлення від нашого менеджера
      </p>
      <div className={styles.button_wrap}>
        <a
          href="/"
          className={`${styles.button}`}
          type="button"
          style={{ width: '232px' }}
        >
          На головну
        </a>
      </div>

      <div className={styles.background}></div>
    </section>
  );
}
