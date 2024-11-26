'use client';

import Icon from '@/helpers/Icon';
import styles from './Form.module.css';
import { useTranslations } from 'next-intl';
import { ChangeEvent, FormEvent, useState } from 'react';
import logoBack from '../../img/form/logo.webp';
import Image from 'next/image';

export default function Form() {
  const t = useTranslations();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    nickname: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  return (
    <section className={styles.form}>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.top_wrap}>
            <Icon name="icon-logoForm" width={48} height={39} />
            <p>{t('Form.headerText')}</p>
          </div>
          <div className={styles.header_wrap}>
            <h1 className={styles.header}>{t('Form.header')}</h1>
            <Image
              src={logoBack}
              width={0}
              height={0}
              sizes="100vw"
              alt="Form icon"
              priority
            />
          </div>
        </div>
        <form className={styles.form_wrap} onSubmit={handleSubmit}>
          <label className={styles.label}>
            {t('Form.form.name')}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t('Form.form.namePlaceHolder')}
              className={styles.input}
              required
            />
          </label>

          <label className={styles.label}>
            {t('Form.form.phone')}
            <div className={styles.phone_wrap}>
              <div className={styles.phone_label}>
                <span>+380</span>
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="0993483455"
                className={styles.input}
                required
              />
            </div>
          </label>

          <label className={styles.label}>
            {t('Form.form.nick')}
            <input
              type="text"
              name="nickname"
              value={formData.nickname}
              onChange={handleChange}
              placeholder="@nickname"
              className={styles.input}
              required
            />
          </label>

          <button className={styles.button} type="submit">
            {t('Form.form.button')}
          </button>
        </form>
      </div>
    </section>
  );
}
