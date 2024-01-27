import { useState } from 'react';

import styled from 'styled-components';

import PROFILE_SAMPLE from '@components/ui/atoms/profile-sample';

import { useToggle } from '@hooks/useToggle';
import { feedCardType } from '@utils/card-type/feedCardType';
import { timeStamp } from '@utils/time/timeStamp';

import EditButton from '../Button/edit-button/EditButton';
import Reaction from '../Reaction/Reaction';
import ReadTypeSwitch from '../read-type-switch/ReadTypeSwitch';
import ReplyTypeSwitch from '../ReplyTypeSwitch.jsx/ReplyTypeSwitch';

// read, edit, reply type에 맞게 component 불러온다.

const AnswerBox = ({
  path,
  toggleRerenderTrigger,
  answerId,
  questionId,
  answerResult,
  userProfile = PROFILE_SAMPLE,
  userName,
}) => {
  const [editTypeState, setEditTypeState] = useState({
    isEdit: false,
  });
  const [isEdit, setIsEdit] = useToggle();

  const handleEditToggle = () => {
    setIsEdit();
  };

  return (
    <>
      {path === 'question' ? (
        <StAnswerBox>
          <ReadTypeSwitch value={answerResult?.answer?.content} />
        </StAnswerBox>
      ) : (
        <>
          <StAnswerBox>
            <StImg src={userProfile} alt='프로필 이미지' />
            <StAnswer>
              <StUser>
                <span className='name'>{userName}</span>
                {answerResult?.answer !== null ? (
                  <span className='time'>{timeStamp(answerResult?.answer?.createdAt)}</span>
                ) : null}
              </StUser>
              <ReplyTypeSwitch
                setIsEdit={setIsEdit}
                toggleRerenderTrigger={toggleRerenderTrigger}
                answerId={answerId}
                questionId={questionId}
                type={isEdit ? 'edit' : feedCardType(answerResult?.answer)}
                value={answerResult?.answer?.content}
                setEditTypeState={setEditTypeState}
                isRejected={answerResult?.isRejected}
              />
            </StAnswer>
          </StAnswerBox>
        </>
      )}
      <StBottom>
        <StLine />
        {/* answer가 null이 아니면 === 답변이 있으면 */}
        <StReactionAndEdit>
          <Reaction
            toggleRerenderTrigger={toggleRerenderTrigger}
            questionId={questionId}
            likeCount={answerResult?.like}
          />
          {path === 'answer' && feedCardType(answerResult?.answer) !== 'reply' ? (
            <EditButton onClickEdit={handleEditToggle} isEdit={isEdit} />
          ) : null}
        </StReactionAndEdit>
      </StBottom>
    </>
  );
};

export default AnswerBox;

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

const StBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

const StReactionAndEdit = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const StLine = styled.div`
  height: 1px;
  align-self: stretch;
  background: ${({ theme }) => theme.color.Grayscale[30]};
`;
