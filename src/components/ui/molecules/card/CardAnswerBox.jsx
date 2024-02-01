import styled from 'styled-components';

import EditButton from '@components/ui/atoms/button/edit-button/EditButton';
import Reaction from '@components/ui/atoms/reaction/Reaction';

import { timeStamp } from '@utils/time/timeStamp';

const CardAnswerBox = ({ userInfo, answerResult }) => {
  return (
    <>
      <StAnswerBox>
        <StImg src={userInfo?.imageSource} alt='프로필 이미지' />
        <StAnswer>
          <StUser>
            <span className='name'>{userInfo?.name}</span>
            {answerResult?.answer !== null ? (
              <span className='time'>{timeStamp(answerResult?.answer?.createdAt)}</span>
            ) : null}
          </StUser>
        </StAnswer>
        <div>readOnly</div>
        <div>답변하기/수정하기/거절하기</div>
        <div>좋아요/수정하기</div>
      </StAnswerBox>
    </>
  );
};

export default CardAnswerBox;

const StImg = styled.img`
  border-radius: 50px;
`;

const StAnswerBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  align-self: stretch;

  & img {
    display: flex;
    width: 48px;
    height: 48px;
    justify-content: center;
    align-items: center;
  }
`;

const StAnswer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
  color: ${({ theme }) => theme.color.Grayscale[60]};

  & p {
    font-size: 16px;
    font-weight: 400;
    line-height: 22px; /* 137.5% */
    margin: 0;
  }
`;

const StUser = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;

  & .name {
    color: ${({ theme }) => theme.color.Grayscale[60]};
    font-size: 18px;
    font-weight: 400;
    line-height: 24px; /* 133.333% */
  }

  & .time {
    color: ${({ theme }) => theme.color.Grayscale[40]};
    font-size: 14px;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
  }
`;
