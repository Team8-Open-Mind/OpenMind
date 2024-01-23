import styled from 'styled-components';

import { StMemoIcon } from '../../sprite-icon/SpriteIcon';

const EditButton = () => {
  return (
    <StEditButton>
      <StMemoIcon $size={14} $color='gray50' />
      <span>수정하기</span>
    </StEditButton>
  );
};

export default EditButton;

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
`;
