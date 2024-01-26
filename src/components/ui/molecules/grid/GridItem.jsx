import { NavLink } from 'react-router-dom';

import { device } from '@device/mediaBreakpoints';
import styled from 'styled-components';

const GridItem = ({ questionList: { name, imageSource, questionCount, id } }) => {
  return (
    <StGridItemWrapper to={`/post/${id}`}>
      <StGridItemProfileBox>
        <StGridItemImgDiv>
          <StGridProfileImg src={imageSource} />
        </StGridItemImgDiv>
        <StGridProfileName>{name}</StGridProfileName>
      </StGridItemProfileBox>
      <StGridItemFooter>
        <StGridItemFooterLeftSideBox>
          <StGridMessageIcon $color='gray40' />
          받은 질문
        </StGridItemFooterLeftSideBox>
        {questionCount}개
      </StGridItemFooter>
    </StGridItemWrapper>
  );
};

export default GridItem;

const StGridItemWrapper = styled(NavLink)`
  width: 100%;
  height: 100%;
  padding: 1.6rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  border-radius: 1.6rem;
  border: 1px solid ${({ theme }) => theme.color.Grayscale[40]};
  background: ${({ theme }) => theme.color.Grayscale[10]};

  @media ${device.tablet} {
    padding: 2rem;
  }
`;

const StGridItemProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  row-gap: 1.2rem;
`;

const StGridItemImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.8rem;
  height: 4.8rem;

  border-radius: 9999px;
  overflow: hidden;

  @media ${device.tablet} {
    width: 6rem;
    height: 6rem;
  }
`;

const StGridProfileImg = styled.img.attrs({
  alt: '프로파일 이미지',
})`
  width: 100%;
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StGridProfileName = styled.p`
  margin: 0;

  color: ${({ theme }) => theme.color.Grayscale[60]};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.4rem; /* 133.333% */

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;

  @media ${device.tablet} {
    font-size: 2rem;
    line-height: 2.5rem; /* 125% */
  }
`;

const StGridItemFooterLeftSideBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.4rem;

  color: ${({ theme }) => theme.color.Grayscale[40]};
  font-feature-settings:
    'clig' off,
    'liga' off;

  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem; /* 128.571% */

  @media ${device.tablet} {
    font-size: 1.6rem;
    line-height: 2.2rem; /* 137.5% */
  }
`;

const StGridMessageIcon = styled.img.attrs({
  alt: '메시지 아이콘',
  src: '/image/icon/Message_icon.svg',
})`
  width: 1.6rem;
  height: 1.6rem;

  @media ${device.tablet} {
    width: 1.8rem;
    height: 1.8rem;
  }
`;

const StGridItemFooter = styled.div`
  width: 100%;
  height: 2.2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${({ theme }) => theme.color.Grayscale[40]};
  font-feature-settings:
    'clig' off,
    'liga' off;
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.8rem; /* 128.571% */

  @media ${device.tablet} {
    font-size: 1.6rem;
    line-height: 2.2rem; /* 137.5% */
  }
`;
