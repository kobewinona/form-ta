import React, { FC, ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import Spinner from '../Spinner/Spinner';

import styles from './Form.module.css';

interface FormWithValidationProps {
  name: string;
  schema: yup.AnyObjectSchema;
  onSubmit: (data: any) => void;
  isLoading: boolean;
  submitText?: string;
  children: ReactNode;
}

const Form: FC<FormWithValidationProps> = ({
  name,
  submitText = 'Сохранить',
  schema,
  isLoading,
  onSubmit,
  children,
}) => {
  const methods = useForm({
    shouldUnregister: true,
    resolver: yupResolver(schema),
  });

  const handleSubmit = methods.handleSubmit(data => onSubmit(data));

  return (
    <FormProvider {...methods}>
      <form name={name} onSubmit={handleSubmit} noValidate>
        {children}
        {isLoading ? (
          <Spinner />
        ) : (
          <button className={styles.submitBtn} type='submit' name='submit'>
            {submitText}
          </button>
        )}
      </form>
    </FormProvider>
  );
};

export default Form;
