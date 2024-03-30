import { UseFormRegister } from 'react-hook-form';
import Textarea from '@/components/Common/Textarea';

interface useFormProps {
  commentTitle: string;
  commentContent: string;
}

interface CommentProps {
  register: UseFormRegister<useFormProps>;
  userName: string;
}

function Comment({ register, userName }: CommentProps) {
  return (
    <Textarea
      width={'100%'}
      height={'8.1875rem'}>
      <Textarea.TextareaTitle
        readonly={true}
        value={userName}
        maxLength={15}
        register={register}
        formKey={'commentTitle'}
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
        formKey={'commentContent'}
        registerOptions={{
          required: '내용을 반드시 입력해야합니다.'
        }}
        width={'95%'}
        height={''}
      />
    </Textarea>
  );
}

export default Comment;
