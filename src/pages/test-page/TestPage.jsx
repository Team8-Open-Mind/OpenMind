import PortalContainer from '@components/portal/Portal';
import Toast from '@components/ui/atoms/toast/Toast';
import FeedCard from '@components/ui/molecules/feed-card/FeedCard';

import { useCloseModal } from '@hooks/useCloseModal';

const TestPage = () => {
  const { isModalOpen, toggleModal } = useCloseModal();
  // const {  ModalComponent, ModalInfo, isModalOpen, toggleAndSetModal } = useModalComponent();

  return (
    <div>
      <button onClick={toggleModal} type='button'>
        버튼
      </button>
      {/* <button onClick={() => toggleAndSetModal({ ModalComponent: Toast, toastMessage: "URL이 복사되었습니다."})} type='button'>
        버튼
      </button> */}
      <PortalContainer>{isModalOpen && <Toast closeModal={toggleModal}>URL이 복사되었습니다.</Toast>}</PortalContainer>
      <FeedCard />
    </div>
  );
};

export default TestPage;
