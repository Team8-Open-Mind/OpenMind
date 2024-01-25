import { useEffect, useState } from 'react';

import PortalContainer from '@components/portal/Portal';
import PROFILE_SAMPLE from '@components/ui/atoms/profile-sample';
import Toast from '@components/ui/atoms/toast/Toast';
import FeedCard from '@components/ui/molecules/feed-card/FeedCard';

import getUserData from '@api/getUserData';
import { useModal } from '@hooks/useModal';

const TestPage = ({ selectedId = 2756 }) => {
  const { ModalComponent, isModalOpen, toggleAndSetModal } = useModal();

  const [userName, setUserName] = useState('');
  const [userProfile, setUserProfile] = useState(PROFILE_SAMPLE);
  const [createdAt, setCreatedAt] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userData = await getUserData();
        const selectedUser = userData.find((value) => value.id === selectedId);

        if (selectedUser) {
          setUserName(selectedUser.name);
          setUserProfile(selectedUser.imageSource);
          setCreatedAt(selectedUser.createdAt);
        }
      } catch (error) {
        console.error('데이터를 가져오는 중 오류가 발생했습니다:', error);
      }
    };
    fetchData();
  }, [selectedId]);

  return (
    <div>
      <button
        onClick={() => toggleAndSetModal({ ModalComponent: Toast, toastMessage: 'URL이 복사되었습니다' })}
        type='button'
      >
        버튼
      </button>
      <PortalContainer>{isModalOpen && <ModalComponent />}</PortalContainer>
      <FeedCard userName={userName} userProfile={userProfile} createdAt={createdAt} />
    </div>
  );
};

export default TestPage;
