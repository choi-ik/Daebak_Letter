import { useContext } from 'react';
import { FieldValues } from 'react-hook-form';
import { TextareaContext, TextareaProps } from './index';
import * as Style from './index.style';

function TextareaTitle<T extends FieldValues>({
  value,
  className = ``,
  register,
  formKey,
  registerOptions,
  placeholder,
  maxLength,
  width,
  height,
  readonly = false
}: TextareaProps<T>) {
  const { darkMode } = useContext(TextareaContext);
  return (
    <Style.TextareaTitle
      darkMode={darkMode}
      readOnly={readonly}
      defaultValue={value}
      placeholder={placeholder}
      maxLength={maxLength}
      width={width}
      height={height}
      {...(register &&
        formKey && {
          ...register(formKey, registerOptions)
        })}
      className={className}
    />
  );
}

// {...(register &&
//   formKey && {
//     ...register(formKey, {
//       required: '작성자명은 반드시 입력해야합니다.'
//     })

export default TextareaTitle;
