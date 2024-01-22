import { useState } from 'react';

import styled from 'styled-components';

import Button from '@components/ui/atoms/Button/Button';

// <Button onClickHandler={() => showConfirm(handleConfirm, handleCancel)}>전체 피드 삭제</Button> 이렇게 알럿을 연다
const useConfirmAlert = () => {
  const [isConfirmVisible, setIsConfirmVisible] = useState(false);
  const [confirmCallback, setConfirmCallback] = useState(() => () => {});
  const [cancelCallback, setCancelCallback] = useState(() => () => {});

  // 함수를 통해 Confirm 알럿을 보여주고 콜백 함수 설정
  const showConfirm = (onConfirm, onCancel) => {
    setIsConfirmVisible(true);
    setConfirmCallback(() => onConfirm);
    setCancelCallback(() => onCancel);
  };

  // Confirm 알럿을 숨김
  const hideConfirm = () => {
    setIsConfirmVisible(false);
  };

  // Confirm 알럿에서 확인 버튼을 누를 때 실행되는 함수
  const handleConfirm = () => {
    confirmCallback();
    hideConfirm();
  };

  // Confirm 알럿에서 취소 버튼을 누를 때 실행되는 함수
  const handleCancel = () => {
    cancelCallback();
    hideConfirm();
  };

  // 알럿이 현재 보여지는지 여부를 반환
  const isConfirmOpen = () => isConfirmVisible;

  // title과 content 줄바꿈하고 싶을 때는 \n을 사용한다.
  const ConfirmAlertComponent = ({ title, content, cancelText = '취소', ConfirmText = '삭제' }) => (
    <StConfirmAlertModal style={{ display: isConfirmVisible ? 'block' : 'none' }}>
      <div>
        <StTitle>{title}</StTitle>
        <StContent>{content}</StContent>
        <StButtonGroup>
          <Button type='button' width='100%' theme='brown40' onClickHandler={handleCancel}>
            {ConfirmText}
          </Button>
          <Button type='button' width='100%' theme='brown20' onClickHandler={handleConfirm}>
            {cancelText}
          </Button>
        </StButtonGroup>
      </div>
    </StConfirmAlertModal>
  );

  return { showConfirm, hideConfirm, isConfirmOpen, ConfirmAlertComponent };
};

export { useConfirmAlert };

const StConfirmAlertModal = styled.div`
  max-width: 400px;
  width: 100%;
  border-radius: 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.color.Grayscale['10']};
  box-shadow: ${({ theme }) => theme.shadow['1pt']};
  padding: 40px;
  text-align: center;
`;

const StTitle = styled.h2`
  font-size: 2rem;
  line-height: 30px;
  color: ${({ theme }) => theme.color.Grayscale['60']};
  margin-bottom: 12px;
  white-space: pre-line; // 줄바꿈을 위한 설정
`;

const StContent = styled.p`
  font-size: 1.4rem;
  line-height: 20px;
  color: ${({ theme }) => theme.color.Grayscale['60']};
  margin-bottom: 32px;
  white-space: pre-line;
`;

const StButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
