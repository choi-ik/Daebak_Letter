import { useContext } from 'react';
import { FieldValues } from 'react-hook-form';
import { TextareaContext, TextareaProps } from './index';
import * as Style from './index.style';

function TextareaTitle<T extends FieldValues>({
  value,
  register,
  placeholder,
  maxLength,
  formKey
}: TextareaProps<T>) {
  const { darkMode } = useContext(TextareaContext);
  return (
    <Style.TextareaTitle
      darkMode={darkMode}
      value={value}
      placeholder={placeholder}
      maxLength={maxLength}
      {...(register && {
        ...register(formKey, {
          required: '작성자명은 반드시 입력해야합니다.'
        })
      })}
    />
  );
}

export default TextareaTitle;
