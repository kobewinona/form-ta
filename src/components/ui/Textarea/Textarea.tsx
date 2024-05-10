import React, { FC } from 'react';

import InputWrapper from '../InputWrapper/InputWrapper';

import styles from './Textarea.module.css';

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
  return (
    <InputWrapper
      required={required}
      label={label}
      inputErrorMessage={''}
    >
      <textarea
        className={styles.layout}
        name={name}
        {...textareaHTMLAttributes}
      />
    </InputWrapper>
  );
};

export default Textarea;