import React, { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import InputWrapper from '../InputWrapper/InputWrapper';

interface InputTypeTextProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  extraClass?: string;
  required?: boolean;
}

const InputTypeText: FC<InputTypeTextProps> = ({
  name,
  label,
  extraClass = '',
  required = false,
  ...inputHTMLAttributes
}) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();
  const inputErrorMessage = errors[name]?.message as string;

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setValue(name, event.target.value.trim(), { shouldValidate: true });
  };

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
          type='text'
          required={required}
          {...register(name)}
          {...inputHTMLAttributes}
          onBlur={handleBlur}
        />
      </InputWrapper>
    </>
  );
};

export default InputTypeText;
