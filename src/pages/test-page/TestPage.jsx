import PortalContainer from '@components/portal/Portal';
import Toast from '@components/ui/atoms/toast/Toast';
import FeedCard from '@components/ui/molecules/feed-card/FeedCard';

import { useModalComponent } from '@hooks/useModalComponent';

const TestPage = () => {
  const { ModalComponent, isModalOpen, toggleAndSetModal } = useModalComponent();

  return (
    <div>
      <button
        onClick={() => toggleAndSetModal({ ModalComponent: Toast, toastMessage: 'URL이 복사되었습니다' })}
        type='button'
      >
        버튼
      </button>
      <PortalContainer>{isModalOpen && <ModalComponent />}</PortalContainer>
      <FeedCard />
    </div>
  );
};

export default TestPage;
