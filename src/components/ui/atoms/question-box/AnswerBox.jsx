import styled from 'styled-components';

import PROFILE_SAMPLE from '@components/ui/atoms/profile-sample';

import ReplyBox from '../reply-box/ReplyBox';

// read, edit, reply type에 맞게 component 불러온다.

const AnswerBox = ({ type, userProfile = PROFILE_SAMPLE, userName = '당신', elapsedTime = '?' }) => {
  return (
    <StAnswerBox>
      <img src={userProfile} alt='프로필' />
      <StAnswer>
        <StUser>
          <span className='name'>{userName}</span>
          <span className='time'>{elapsedTime}</span>
        </StUser>
        // ! 컴포넌트 새로 만들어서 switch 문으로 타입값 마다 컴포넌트 return해 주기
        {type === 'read' || type === 'edit' ? (
          <p>
            그들을 불러 귀는 이상의 오직 피고, 가슴이 이상, 못할 봄바람이다. 찾아다녀도, 전인 방황하였으며, 대한 바이며,
            이것이야말로 가치를 청춘의 따뜻한 그리하였는가? 몸이 열락의 청춘의 때문이다. 천고에 피어나는 간에 밝은 이상,
            인생의 만물은 피다. 대중을 이성은 방황하여도, 그리하였는가? 크고 평화스러운 품에 방황하였으며, 말이다.
            이상은 들어 예수는 크고 긴지라 역사를 피다. 얼음에 있음으로써 꽃 보배를 곧 가는 교향악이다. 우는 새 예가
            우리의 것은 피다. 피가 그것을 어디 앞이 기쁘며, 이상의 열락의 위하여서 끝까지 것이다. 있는 봄바람을
            방황하여도, 우리의 것은 작고 아니한 영원히 듣기만 운다.
          </p>
        ) : (
          <ReplyBox />
        )}
      </StAnswer>
    </StAnswerBox>
  );
};

export default AnswerBox;

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

  & p {
    color: ${({ theme }) => theme.color.Grayscale[60]};
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
    font-family: Actor;
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
