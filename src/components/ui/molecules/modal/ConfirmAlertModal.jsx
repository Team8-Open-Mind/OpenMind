import styled from 'styled-components';

import Button from '@components/ui/atoms/button/Button';

// title이나 content에 줄바꿈이 필요하다면 `` 안에 \n을 사용하면 된다.

const ConfirmAlertModal = ({
  title,
  content,
  cancelText = '취소',
  ConfirmText = '삭제',
  handleCancel,
  handleConfirm,
}) => {
  return (
    <>
      <StConfirmAlertModal>
        <div>
          <StTitle>{title}</StTitle>
          <StContent>{content}</StContent>
          <StButtonGroup>
            <Button type='button' width='100%' theme='brown20' onClick={handleCancel}>
              {cancelText}
            </Button>
            <Button type='button' width='100%' theme='brown40' onClick={handleConfirm}>
              {ConfirmText}
            </Button>
          </StButtonGroup>
        </div>
      </StConfirmAlertModal>
    </>
  );
};

export default ConfirmAlertModal;

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
