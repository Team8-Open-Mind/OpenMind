import { useCallback, useState } from 'react';

import PROFILE_SAMPLE from '@components/ui/atoms/profile-sample';

export const useSetUser = (getUserData) => {
  const [userName, setUserName] = useState('');
  const [userProfile, setUserProfile] = useState(PROFILE_SAMPLE);
  const [createdAt, setCreatedAt] = useState('');
  const [questionCount, setQuestionCount] = useState(0);

  const fetchUserData = useCallback(
    async ({ selectedId = 2756 }) => {
      try {
        const userData = await getUserData();
        const selectedUser = userData.find((value) => value.id === selectedId);

        if (selectedUser) {
          setUserName(selectedUser.name);
          setUserProfile(selectedUser.imageSource);
          setCreatedAt(selectedUser.createdAt);
          setQuestionCount(selectedUser.questionCount);
        }
      } catch (error) {
        console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
      }
    },
    [getUserData],
  );

  return [userName, userProfile, createdAt, questionCount, fetchUserData];
};
