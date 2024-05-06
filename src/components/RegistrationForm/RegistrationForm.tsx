import React from 'react';

import styles from './RegistrationForm.module.css';
import Label from '../ui/Label/Label';

const RegistrationForm = () => {
  return (
    <section className={styles.layout}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Регистрация</h1>
        <ul className={styles.formTabs}>
          <li>
            <h2 className={styles.formTabTitle}>О себе</h2>
            <div className={styles.aboutContainer}>
              <Label id="fullName" label="ФИО" required>
                <input name="fullName" type="text" required />
              </Label>
              <Label id="gender" label="Пол" required>
                <select id="gender" required>
                  <option value="male">Мужской</option>
                  <option value="female">Женский</option>
                </select>
              </Label>
              <Label id="birthdate" label="Дата рождения" required>
                <input id="birthdate" type="date" required />
              </Label>
            </div>
          </li>
          <li>
            <h2 className={styles.formTabTitle}>Образование</h2>
          </li>
          <li>
            <h2 className={styles.formTabTitle}>Работа</h2>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default RegistrationForm;
