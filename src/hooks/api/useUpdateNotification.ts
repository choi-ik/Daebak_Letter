import { toast } from 'react-hot-toast';
import { useMutation } from '@tanstack/react-query';
import { updateNotification } from '@/api/user';

export const useUpdateNotification = () => {
  const updateNotificatioMutation = useMutation({
    mutationFn: updateNotification,
    onSuccess: () => {
      toast.success('알람을 모두 읽음처리에 성공했습니다.');
    },
    onError: (e) => {
      console.log(e);
    }
  });

  return { mutateUpdateNotification: updateNotificatioMutation.mutate };
};