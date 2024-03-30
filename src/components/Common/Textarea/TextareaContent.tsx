import { useContext } from 'react';
import { FieldValues } from 'react-hook-form';
import { TextareaContext, TextareaProps } from './index';
import * as Style from './index.style';

function TextareaContent<T extends FieldValues>({
  register,
  registerOptions,
  placeholder,
  formKey,
  width,
  height,
  readonly = false,
  className = ``
}: TextareaProps<T>) {
  const { darkMode } = useContext(TextareaContext);

  return (
    <Style.TextareaContent
      darkMode={darkMode}
      readOnly={readonly}
      placeholder={placeholder}
      {...(register &&
        formKey && {
          ...register(formKey, registerOptions)
        })}
      width={width}
      height={height}
      className={className}
    />
  );
}

export default TextareaContent;
