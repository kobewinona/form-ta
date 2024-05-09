import React from 'react';

import InputTypeText from '../ui/InputTypeText/InputTypeText';
import InputTypeSelect from '../ui/InputTypeSelect/InputTypeSelect';

import styles from './RegistrationForm.module.css';
import InputTypeDate from '../ui/InputTypeDate/InputTypeDate';

const RegistrationForm = () => {
  return (
    <section className={styles.layout}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Регистрация</h1>
        <ul className={styles.formTabs}>
          <li>
            <h2 className={styles.formTabTitle}>О себе</h2>
            <div className={styles.aboutContainer}>
              <InputTypeText
                name="fullName"
                label="ФИО"
                placeholder="Введите ФИО"
                extraClass={styles.fullNameBg}
                minLength={3}
                required
              />
              <div className={styles.twoInputsContainer}>
                <InputTypeSelect
                  name="gender"
                  label="Пол"
                  options={[
                    { value: 'male', label: 'Мужской' },
                    { value: 'female', label: 'Женский' }
                  ]}
                  placeholder="Выберите пол"
                  required
                />
                <InputTypeDate
                  name="birthdate"
                  label="Дата рождения"
                  required
                />
              </div>
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
