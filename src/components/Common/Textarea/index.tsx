import { ReactNode, createContext } from 'react';
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';
import { useAtomValue } from 'jotai';
import { darkAtom } from '@/store/theme';
import TextareaContent from './TextareaContent';
import TextareaTitle from './TextareaTitle';
import TextareaUnderLine from './TextareaUnderLine';
import * as Style from './index.style';

export const TextareaContext = createContext({
  darkMode: false
});

interface TextareaContainerProps {
  children: ReactNode;
}

export interface TextareaProps<T extends FieldValues> {
  value?: undefined | string;
  register?: UseFormRegister<T>;
  placeholder: string;
  maxLength?: number;
  formKey: Path<T>;
}

function Textarea({ children }: TextareaContainerProps) {
  const darkMode = useAtomValue(darkAtom);

  return (
    <TextareaContext.Provider value={{ darkMode }}>
      <Style.TextareaContainer darkMode={darkMode}>
        {children}
      </Style.TextareaContainer>
    </TextareaContext.Provider>
  );
}

Textarea.TextareaTitle = TextareaTitle;
Textarea.TextareaContent = TextareaContent;
Textarea.TextareaUnderLine = TextareaUnderLine;

export default Textarea;
