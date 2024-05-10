import React, { FC, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import InputWrapper from '../InputWrapper/InputWrapper';

interface InputTypeTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  extraClass?: string;
  required?: boolean;
}

const InputTypeText: FC<InputTypeTextProps> = ({
  name,
  label,
  extraClass= '',
  required = false,
  ...inputHTMLAttributes
}) => {
  const { register, formState: { errors } } = useFormContext();
  const inputErrorMessage = errors[name]?.message as string;

  useEffect(() => {
    console.log('inputErrorMessage', inputErrorMessage);
  }, [inputErrorMessage]);

  return (
    <>
      <InputWrapper
        required={required}
        label={label}
        inputErrorMessage={inputErrorMessage}
      >
        <input
          className={extraClass}
          id={name}
          type="text"
          required={required}
          {...register(name)}
          {...inputHTMLAttributes}
        />
      </InputWrapper>
    </>
  );
};

export default InputTypeText;