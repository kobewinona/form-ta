import React, { FC, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useFormContext } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale, setDefaultLocale } from 'react-datepicker';
import ru from 'date-fns/locale/ru';

import InputWrapper from '../InputWrapper/InputWrapper';

import CalendarCustomHeader from './CalendarCustomHeader';
import './InputTypeDate.module.css';

registerLocale('ru', ru);
setDefaultLocale('ru');

interface InputTypeDateProps {
  name: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
}

const InputTypeDate: FC<InputTypeDateProps> = ({
  name,
  label,
  placeholder = '',
  required = false,
}) => {
  const {
    register,
    setValue,
    watch,
    formState: { errors },
  } = useFormContext();
  const selectedDate = watch(name);
  const inputErrorMessage = errors[name]?.message as string;

  const handleChange = (date: Date | null) => {
    setValue(name, date, { shouldValidate: true });
  };

  const handleBlur = () => {
    setValue(name, selectedDate, { shouldValidate: true });
  };

  useEffect(() => {
    register(name);
  }, [register, name]);

  return (
    <InputWrapper
      required={required}
      label={label}
      inputErrorMessage={inputErrorMessage}
    >
      <DatePicker
        name={name}
        selected={selectedDate}
        dateFormat='dd.MM.yyyy'
        onChange={handleChange}
        onBlur={handleBlur}
        placeholderText={placeholder}
        maxDate={new Date()}
        required={required}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
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
