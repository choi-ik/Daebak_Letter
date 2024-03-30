import { ReactNode, createContext } from 'react';
import {
  FieldValues,
  Path,
  RegisterOptions,
  UseFormRegister
} from 'react-hook-form';
import { useAtomValue } from 'jotai';
import { darkAtom } from '@/store/theme';
import CompleteButton from './Button/Complete';
import DeleteButton from './Button/Delete';
import EditButton from './Button/Edit';
import TextareaContent from './TextareaContent';
import TextareaTitle from './TextareaTitle';
import TextareaUnderLine from './TextareaUnderLine';
import * as Style from './index.style';

export const TextareaContext = createContext({
  darkMode: false
});

interface TextareaContainerProps {
  children: ReactNode;
  width: string;
  height: string;
  className?: string;
}

export interface TextareaProps<T extends FieldValues> {
  value?: string;
  register?: UseFormRegister<T>;
  registerOptions?: RegisterOptions;
  placeholder?: string;
  maxLength?: number;
  formKey?: Path<T>;
  readonly?: boolean;
  width: string;
  height: string;
  className?: string;
}

function Textarea({
  children,
  width,
  height,
  className = ``
}: TextareaContainerProps) {
  const darkMode = useAtomValue(darkAtom);

  return (
    <TextareaContext.Provider value={{ darkMode }}>
      <Style.TextareaContainer
        darkMode={darkMode}
        width={width}
        height={height}
        className={className}>
        {children}
      </Style.TextareaContainer>
    </TextareaContext.Provider>
  );
}

Textarea.TextareaTitle = TextareaTitle;
Textarea.TextareaContent = TextareaContent;
Textarea.TextareaUnderLine = TextareaUnderLine;
Textarea.CompleteButton = CompleteButton;
Textarea.EditButton = EditButton;
Textarea.DeleteButton = DeleteButton;

export default Textarea;
