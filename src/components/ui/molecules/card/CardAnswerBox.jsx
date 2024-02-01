import styled from 'styled-components';

import EditButton from '@components/ui/atoms/button/edit-button/EditButton';
import Reaction from '@components/ui/atoms/reaction/Reaction';
import ReplyTypeSwitch from '@components/ui/atoms/reply-type-switch/ReplyTypeSwitch';

import { useToggle } from '@hooks/useToggle';
import { feedCardType } from '@utils/card-type/feedCardType';
import { timeStamp } from '@utils/time/timeStamp';

const CardAnswerBox = ({ userInfo, answerResult }) => {
  const [isEdit, setIsEdit] = useToggle();

  const handleEditToggle = () => {
    setIsEdit();
  };

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
          <ReplyTypeSwitch
            isRejected={answerResult?.isRejected}
            answerId={answerResult?.answer?.id}
            questionId={answerResult?.id}
            value={answerResult?.answer?.content}
            type={isEdit ? 'edit' : feedCardType(answerResult?.answer)}
          />
        </StAnswer>
      </StAnswerBox>
      <StLine />
      <StReactionAndEdit>
        <Reaction />
        {feedCardType(answerResult?.answer) !== 'reply' ? (
          <EditButton onClickEdit={handleEditToggle} isEdit={isEdit} />
        ) : null}
      </StReactionAndEdit>
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
    line-height: 22px;
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
    line-height: 24px;
  }

  & .time {
    color: ${({ theme }) => theme.color.Grayscale[40]};
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
  }
`;

const StLine = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.color.Grayscale[30]};
`;

const StReactionAndEdit = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
