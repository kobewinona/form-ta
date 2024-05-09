import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './CalendarCustomHeader.module.css';

interface CalendarCustomHeaderProps {
  date: Date | null;
  decreaseMonth: () => void;
  increaseMonth: () => void;
  prevMonthButtonDisabled: boolean;
  nextMonthButtonDisabled: boolean;
}

const CalendarCustomHeader: FC<CalendarCustomHeaderProps> = ({
  date,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled
}) => {
  const locale = document.documentElement.lang || 'en-US';
  const month = date ? new Intl.DateTimeFormat(locale, { month: 'long' }).format(date) : '';
  const year = date ? new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(date) : '';

  const arrowLeftClasses = classNames(styles.arrowBtn, styles.arrowBtnLeft);
  const arrowRightClasses = classNames(styles.arrowBtn, styles.arrowBtnRight);

  return (
    <div className={styles.layout}>
      <button
        className={arrowLeftClasses}
        onClick={decreaseMonth}
        disabled={prevMonthButtonDisabled}
      />
      <span className={styles.monthYear}>
        {month}<span className={styles.year}>{`, ${year}`}</span>
      </span>
      <button
        className={arrowRightClasses}
        onClick={increaseMonth}
        disabled={nextMonthButtonDisabled} />
    </div>
  );
};

export default CalendarCustomHeader;