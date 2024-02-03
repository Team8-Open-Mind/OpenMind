import styled from 'styled-components';

import { StMemoIcon } from '@components/ui/atoms/sprite-icon/SpriteIcon';

import { useCardProvider } from './context/cardProvider';

const CardEditButton = () => {
  const { isEdit, setIsEdit } = useCardProvider();

  const handleEditToggleClick = () => {
    setIsEdit();
  };

  return (
    <StEditButton onClick={handleEditToggleClick} className={isEdit ? `editCancel` : null}>
      {isEdit ? (
        <>
          <StEditCancelText>수정 취소</StEditCancelText>
        </>
      ) : (
        <>
          <StMemoIcon $size={14} $color='gray50' />
          <StEditText>수정하기</StEditText>
        </>
      )}
    </StEditButton>
  );
};

export default CardEditButton;

const StEditButton = styled.button`
  display: flex;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.Grayscale[30]};
  background: ${({ theme }) => theme.color.Grayscale[10]};

  &.editCancel {
    border: 1px solid ${({ theme }) => theme.color.Red[50]};
  }
`;

const StEditCancelText = styled.span`
  color: ${({ theme }) => theme.color.Red[50]};
`;

const StEditText = styled.span`
  color: ${({ theme }) => theme.color.Grayscale[50]};
`;
