import styled from 'styled-components';

import FloatingButton from '@components/ui/atoms/button/floating-button/FloatingButton';
import { StMessageIcon } from '@components/ui/atoms/sprite-icon/SpriteIcon';

const CardListInformation = ({ cardListInfo, onClickHandle }) => {
  return (
    <StCardListInfoBox>
      <StCardListLength>
        <StMessageIcon $size={24} $color='brown40' />
        {cardListInfo?.questionCount}개의 질문이 있습니다
      </StCardListLength>
      <FloatingButton
        position='static'
        boxSizeOnResize={{ onMobile: { width: 10.3, height: 2.5 }, onPc: { width: 13, height: 3.5 } }}
        hasBoxShadow={false}
        onClick={onClickHandle}
      >
        내 마음 닫기
      </FloatingButton>
    </StCardListInfoBox>
  );
};

export default CardListInformation;

const StCardListInfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StCardListLength = styled.h5`
  display: flex;
  align-items: center;
  gap: 1px;

  font-size: 2rem;
  font-weight: 400;

  color: ${({ theme }) => theme.color.Brown['40']};
`;
