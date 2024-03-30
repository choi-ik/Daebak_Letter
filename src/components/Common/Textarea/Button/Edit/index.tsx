import editIcon from '@/assets/edit.svg';
import * as Style from './index.style';

interface EditButtonProps {
  onClick: () => void;
}

function EditButton({ onClick }: EditButtonProps) {
  return (
    <Style.EditButton
      src={editIcon}
      onClick={onClick}
    />
  );
}

export default EditButton;
