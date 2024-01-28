import styled from 'styled-components';

import { ReactComponent as NoMessageBox } from '@assets/message-box.svg';
import { StMessageIcon } from '@components/ui/atoms/sprite-icon/SpriteIcon';

const NoLists = ({ children, type }) => {
  return (
    <StNoListWrapper type={type}>
      <StBoxWrapper>
        <StMessageTextBox>
          <StMessageIcon $size={24} $color='brown40' />
          <StNoListText>{children}</StNoListText>
        </StMessageTextBox>
        <NoMessageBox width='15rem' height='15.4rem' />
      </StBoxWrapper>
    </StNoListWrapper>
  );
};

export default NoLists;

const StNoListWrapper = styled.div`
  padding: ${(props) => (props.type ? '0rem' : '7.4rem')} 2.4rem;
  width: 100%;
`;

const StBoxWrapper = styled.div`
  width: 100%;
  max-width: 71.6rem;
  /* height: 33rem; */
  height: 100%;
  min-height: 33rem;
  padding: 1.6rem 2.4rem;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  row-gap: 8.6rem;

  border-radius: 1.6rem;
  border: 1px solid var(--Brown-20, #e4d5c9);
  background: var(--Brown-10, #f5f1ee);
`;

const StMessageTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;
`;

// const StMessageIcon = styled.img.attrs({
//   src: '/image/icon/Message_icon.svg',
//   alt: '메시지 아이콘',
// })`
//   width: 2.4rem;
//   height: 2.4rem;
// `;

const StNoListText = styled.p`
  color: ${({ theme }) => theme.color.Brown[40]};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-family: Actor;
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem; /* 125% */
`;
