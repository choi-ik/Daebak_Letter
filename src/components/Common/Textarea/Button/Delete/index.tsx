import deleteIcon from '@/assets/delete.svg';
import * as Style from './index.style';

interface DeleteButtonProps {
  onClick: () => void;
}

function DeleteButton({ onClick }: DeleteButtonProps) {
  return (
    <Style.DeleteButton
      src={deleteIcon}
      onClick={onClick}
    />
  );
}

export default DeleteButton;
