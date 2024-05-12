import React, { FC, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import Select from 'react-select';

import { SelectOption } from '../../../../types/types';

import InputWrapper from '../InputWrapper/InputWrapper';

import DropdownIndicator from './DropdownIndicator';
import styles from './InputTypeSelect.module.css';

interface InputTypeSelectProps {
  name: string;
  label?: string;
  options: SelectOption[];
  placeholder?: string;
  required?: boolean;
}

const InputTypeSelect: FC<InputTypeSelectProps> = ({
  name,
  label,
  options,
  placeholder = '',
  required = false,
}) => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext();
  const selectedOption = watch(name);
  const inputErrorMessage = errors[name]?.message as string;

  const handleChange = (option: SelectOption | null) => {
    setValue(name, option?.value || '', { shouldValidate: true });
  };

  const handleBlur = () => {
    setValue(name, selectedOption || '', { shouldValidate: true });
  };

  useEffect(() => {
    register(name);
  }, [register, name]);

  return (
    <InputWrapper
      name={name}
      required={required}
      label={label}
      inputErrorMessage={inputErrorMessage}
    >
      <Select
        inputId={`${name}-input`}
        classNamePrefix='react-select'
        name={name}
        options={options}
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        blurInputOnSelect={false}
        required={required}
        styles={styles}
        components={{
          IndicatorSeparator: () => null,
          DropdownIndicator: DropdownIndicator,
        }}
      />
    </InputWrapper>
  );
};

export default InputTypeSelect;
