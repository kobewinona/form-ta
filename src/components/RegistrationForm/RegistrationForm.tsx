import React from 'react';

import registrationSchema from '../../utils/validation/schema/registrationSchema';

import FormWithValidation from '../ui/FormWithValidation/FormWithValidation';
import InputTypeText from '../ui/InputTypeText/InputTypeText';
import InputTypeSelect from '../ui/InputTypeSelect/InputTypeSelect';
import InputTypeDate from '../ui/InputTypeDate/InputTypeDate';
import Textarea from '../ui/Textarea/Textarea';

import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const cleanupSubmitDate = (data: Record<string, any>) => {
    return Object.keys(data).reduce<Record<string, any>>(
      (acc, key) => {
        if (data[key] !== "" && data[key] != null) acc[key] = data[key];
        return acc;
      }, {});
  };

  const handleFormSubmit = (data: Record<string, any>) => {
    console.log('Cleaned form data', cleanupSubmitDate(data));
  };

  return (
    <section className={styles.layout}>
      <div className={styles.formContainer}>
        <FormWithValidation
          name="registration"
          schema={registrationSchema}
          onSubmit={handleFormSubmit}
          isLoading={false}
        >
          <h1 className={styles.title}>Регистрация</h1>
          <ul className={styles.formTabs}>
            <li>
              <h2 className={styles.formTabTitle}>О себе</h2>
              <div className={styles.inputsContainer}>
                <InputTypeText
                  name="fullName"
                  label="ФИО"
                  placeholder="Введите ФИО"
                  extraClass={styles.fullNameBg}
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
                    placeholder="00.00.0000"
                    required
                  />
                </div>
              </div>
            </li>
            <li>
              <h2 className={styles.formTabTitle}>Образование</h2>
              <InputTypeText
                name="academy"
                label="ВУЗ"
                placeholder="Выберите ВУЗ"
                minLength={2}
              />
            </li>
            <li>
              <h2 className={styles.formTabTitle}>Работа</h2>
              <div className={styles.inputsContainer}>
                <InputTypeText
                  name="job"
                  label="Место работы"
                  placeholder="Место работы"
                />
                <Textarea
                  name="jobDutues"
                  placeholder="Должностные обязанности"
                />
              </div>
            </li>
          </ul>
        </FormWithValidation>
      </div>
    </section>
  );
};

export default RegistrationForm;
