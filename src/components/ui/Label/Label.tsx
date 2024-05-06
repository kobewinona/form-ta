import React, { FC } from 'react';

import styles from './Label.module.css';

interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  id: string;
  label: string | undefined;
  required?: boolean;
  extraClass?: string;
}

const Label: FC<LabelProps> = ({
  id,
  label,
  required = false,
  extraClass,
  children,
  ...HTMLAttributes
}) => {
  return <label
    className={`${styles.layout} ${extraClass}`}
    htmlFor={id}
    {...HTMLAttributes}
  >
    {label}
    {required && <span className={styles.requiredLabel}>*</span>}
    {children}
  </label>;
};

export default Label;
