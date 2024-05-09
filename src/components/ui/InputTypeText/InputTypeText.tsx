import React, { FC, useState } from 'react';

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
  const [inputValue, setInputValue] = useState<string>('');
  const [inputErrorMessage, setInputErrorMessage] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    setInputValue(target.value);
    if (target.validationMessage) {
      setInputErrorMessage(target.validationMessage);
    } else {
      setInputErrorMessage('');
    }
  }

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
          name={name}
          type="text"
          onChange={handleChange}
          value={inputValue}
          {...inputHTMLAttributes}
        />
      </InputWrapper>
    </>
  );
};

export default InputTypeText;