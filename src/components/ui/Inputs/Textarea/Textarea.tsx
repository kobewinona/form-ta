import React, { FC } from 'react';

import InputWrapper from '../InputWrapper/InputWrapper';

import styles from './Textarea.module.css';
import { useFormContext } from 'react-hook-form';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  required?: boolean;
}

const Textarea: FC<TextareaProps> = ({
  name,
  label,
  required = false,
  ...textareaHTMLAttributes
}) => {
  const { register } = useFormContext();

  return (
    <InputWrapper
      required={required}
      label={label}
    >
      <textarea
        className={styles.layout}
        {...register(name)}
        {...textareaHTMLAttributes}
      />
    </InputWrapper>
  );
};

export default Textarea;