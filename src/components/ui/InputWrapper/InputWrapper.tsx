import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './InputWrapper.module.css';

interface InputWrapperProps {
  required: boolean;
  label?: string;
  inputErrorMessage?: string;
  children: React.ReactNode;
}

const InputWrapper: FC<InputWrapperProps> = ({
  required,
  label,
  inputErrorMessage= '',
  children
}) => {
  const layoutClasses = classNames(styles.layout, {
    [styles.layoutOnError]: inputErrorMessage,
  });

  return (
    <label className={layoutClasses} >
      {label && label}
      {required && <span className={styles.requiredLabel}>*</span>}
      {children}
      {inputErrorMessage && (
        <span className={styles.errorMessage}>
          {inputErrorMessage}
        </span>
      )}
    </label>
  );
};

export default InputWrapper;