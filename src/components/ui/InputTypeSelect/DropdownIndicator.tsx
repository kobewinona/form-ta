import React, { FC } from 'react';
import classNames from 'classnames';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { components, IndicatorProps } from 'react-select';

import styles from './DropdownIndicator.module.css';

const DropdownIndicator: FC<IndicatorProps> = ({...props}) => {
  const { selectProps: { menuIsOpen } } = props;

  const dropdownIndicatorClasses = classNames(styles.layout, {
    [styles.arrowUp]: menuIsOpen,
  });

  return (
    <components.DropdownIndicator {...props}>
      <div className={dropdownIndicatorClasses} />
    </components.DropdownIndicator>
  );
};

export default DropdownIndicator;