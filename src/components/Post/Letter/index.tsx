import { UseFormRegister } from 'react-hook-form';
import Textarea from '@components/Common/Textarea';

export interface useFormProps {
  letterTitle: string;
  letterContent: string;
}
interface letterProps {
  register: UseFormRegister<useFormProps>;
  userName: string;
}
function Letter({ register, userName }: letterProps) {
  return (
    <Textarea
      width={'100%'}
      height={'20.3125rem'}>
      <Textarea.TextareaTitle
        value={
          userName ? (userName === '익명' ? undefined : userName) : undefined
        }
        placeholder={
          userName
            ? userName === '익명'
              ? '작성자명을 입력해주세요(최대 15자)'
              : userName
            : '작성자명을 입력해주세요(최대 15자)'
        }
        maxLength={15}
        register={register}
        formKey={'letterTitle'}
        registerOptions={{
          required: '작성자명은 반드시 입력해야합니다.'
        }}
        width={'95%'}
        height={'40px'}
      />
      <Textarea.TextareaUnderLine />
      <Textarea.TextareaContent
        placeholder={'내용을 입력하세요'}
        register={register}
        formKey={'letterContent'}
        registerOptions={{
          required: '내용을 반드시 입력해야합니다.'
        }}
        width={'95%'}
        height={''}
      />
    </Textarea>
  );
}

export default Letter;
