import React, { FC, useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

registerLocale('ru', ru);
setDefaultLocale('ru');

import InputWrapper from '../InputWrapper/InputWrapper';
import CalendarCustomHeader from './CalendarCustomHeader';

import './InputTypeDate.module.css';

interface InputTypeDateProps {
  name: string;
  label?: string;
  startDate?: string;
  required?: boolean;
}

const InputTypeDate: FC<InputTypeDateProps> = ({
  name,
  label,
  startDate= '00.00.0000',
  required = false
}) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const handleChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <InputWrapper
      required={required}
      label={label}
      // inputErrorMessage={inputErrorMessage}
    >
      <DatePicker
        name={name}
        selected={selectedDate}
        dateFormat="dd.MM.yyyy"
        // formatWeekDay={formatWeekDay}
        onChange={handleChange}
        placeholderText={startDate}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled
        }) => (
          <CalendarCustomHeader
            date={date}
            decreaseMonth={decreaseMonth}
            increaseMonth={increaseMonth}
            prevMonthButtonDisabled={prevMonthButtonDisabled}
            nextMonthButtonDisabled={nextMonthButtonDisabled}
          />
        )}
      />
    </InputWrapper>
  );
};

export default InputTypeDate;