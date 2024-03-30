import completeIcon from '@/assets/complete.svg';
import * as Style from './index.style';

interface CompleteButtonProps {
  onClick: () => void;
}

function CompleteButton({ onClick }: CompleteButtonProps) {
  return (
    <Style.CompleteButton
      src={completeIcon}
      onClick={onClick}
    />
  );
}

export default CompleteButton;
