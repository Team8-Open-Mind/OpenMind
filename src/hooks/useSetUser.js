import { useEffect, useState } from 'react';

import PROFILE_SAMPLE from '@components/ui/atoms/profile-sample';

import getUserData from '@api/subjects/getUserData';

const useSetUser = ({ userId = 2750 }) => {
  // const [userName, setUserName] = useState('');
  // const [userProfile, setUserProfile] = useState(PROFILE_SAMPLE);
  // const [createdAt, setCreatedAt] = useState('');
  // const [questionCount, setQuestionCount] = useState(0);

  const [userInfo, setUserInfo] = useState({
    name: '',
    imageSource: PROFILE_SAMPLE,
    createdAt: '',
    questionCount: 0,
    id: null,
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { name, imageSource, createdAt, questionCount, id } = await getUserData(userId);
        setUserInfo({
          name,
          imageSource,
          createdAt,
          questionCount,
          id,
        });
        // const selectedUser = userData.find((value) => value.id === userId);

        // if (selectedUser) {
        //   setUserName(selectedUser.name);
        //   setUserProfile(selectedUser.imageSource);
        //   setCreatedAt(selectedUser.createdAt);
        //   setQuestionCount(selectedUser.questionCount);
        // }
      } catch (error) {
        console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
      }
    };
    fetchUserData();
  }, [userId]);

  return { userInfo };
};

export default useSetUser;
