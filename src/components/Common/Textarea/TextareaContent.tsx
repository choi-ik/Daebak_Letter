import { useContext } from 'react';
import { FieldValues } from 'react-hook-form';
import { TextareaContext, TextareaProps } from './index';
import * as Style from './index.style';

function TextareaContent<T extends FieldValues>({
  register,
  placeholder,
  formKey
}: TextareaProps<T>) {
  const { darkMode } = useContext(TextareaContext);

  return (
    <Style.TextareaContent
      darkMode={darkMode}
      placeholder={placeholder}
      {...(register && {
        ...register(formKey, {
          required: '작성자명은 반드시 입력해야합니다.'
        })
      })}
    />
  );
}

export default TextareaContent;
