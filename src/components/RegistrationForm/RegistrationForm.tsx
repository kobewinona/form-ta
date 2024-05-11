import React, { useState } from 'react';

import * as api from '../../utils/api/api';
import registrationSchema from '../../utils/validation/schema/registrationSchema';
import { RegistrationFormSubmitData } from '../../types/types';
import { NAME_VALIDATION_MESSAGES } from '../../utils/constants';

import Form from '../ui/Form/Form';
import InputTypeText from '../ui/Inputs/InputTypeText/InputTypeText';
import InputTypeSelect from '../ui/Inputs/InputTypeSelect/InputTypeSelect';
import InputTypeDate from '../ui/Inputs/InputTypeDate/InputTypeDate';
import Textarea from '../ui/Inputs/Textarea/Textarea';

import styles from './RegistrationForm.module.css';

const RegistrationForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const cleanupSubmitDate = (data: Record<string, any>) => {
    return Object.keys(data).reduce<Record<string, any>>((acc, key) => {
      if (data[key] !== '' && data[key] != null) {
        acc[key] = data[key];
      }
      return acc;
    }, {});
  };

  const handleFormSubmit = (data: Record<string, any>) => {
    const formData = cleanupSubmitDate(data) as RegistrationFormSubmitData;
    const formDataFullName = formData.fullName.trim().toLowerCase();

    setIsLoading(true);

    api
      .getRandomName()
      .then(res => {
        const name = res.results[0].name;
        const randomFullName = `${name.first} ${name.last}`
          .trim()
          .toLowerCase();

        if (formDataFullName === randomFullName) {
          alert(NAME_VALIDATION_MESSAGES.nameIsInUse);
        } else {
          alert(NAME_VALIDATION_MESSAGES.success);
        }
      })
      .catch(err => alert(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <section className={styles.layout}>
      <div className={styles.formContainer}>
        <Form
          name='registration'
          schema={registrationSchema}
          onSubmit={handleFormSubmit}
          isLoading={isLoading}
        >
          <h1 className={styles.title}>Регистрация</h1>
          <ul className={styles.formTabs}>
            <li>
              <h2 className={styles.formTabTitle}>О себе</h2>
              <div className={styles.inputsContainer}>
                <InputTypeText
                  name='fullName'
                  label='ФИО'
                  placeholder='Введите ФИО'
                  extraClass={styles.fullNameBg}
                  required
                />
                <div className={styles.twoInputsContainer}>
                  <InputTypeSelect
                    name='gender'
                    label='Пол'
                    placeholder='Выберите пол'
                    options={[
                      { value: 'male', label: 'Мужской' },
                      { value: 'female', label: 'Женский' },
                    ]}
                    required
                  />
                  <InputTypeDate
                    name='birthdate'
                    label='Дата рождения'
                    placeholder='00.00.0000'
                    required
                  />
                </div>
              </div>
            </li>
            <li>
              <h2 className={styles.formTabTitle}>Образование</h2>
              <div className={styles.inputsContainer}>
                <InputTypeText
                  name='academy'
                  label='ВУЗ'
                  placeholder='Выберите ВУЗ'
                />
              </div>
            </li>
            <li>
              <h2 className={styles.formTabTitle}>Работа</h2>
              <div className={styles.inputsContainer}>
                <InputTypeText
                  name='job'
                  label='Место работы'
                  placeholder='Место работы'
                />
                <Textarea
                  name='jobDutues'
                  placeholder='Должностные обязанности'
                />
              </div>
            </li>
          </ul>
        </Form>
      </div>
    </section>
  );
};

export default RegistrationForm;
