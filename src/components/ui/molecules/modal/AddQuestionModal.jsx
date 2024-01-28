import { useState } from 'react';
import { useParams } from 'react-router-dom';

import styled from 'styled-components';

import Button from '@components/ui/atoms/button/Button';
import InputTextArea from '@components/ui/atoms/input/input-text-area/InputTextArea';
import PROFILE_SAMPLE from '@components/ui/atoms/profile-sample';
import { StCloseIcon, StMessageIcon } from '@components/ui/atoms/sprite-icon/SpriteIcon';

import { postNewQuestion } from '@api/questions/postNewQuestion';
import { useAsync } from '@hooks/useAsync';

const AddQuestionModal = ({ userProfile = PROFILE_SAMPLE, userName = '닉네임', modalRef, toggleModal }) => {
  const [questionValue, setQuestionValue] = useState('');
  const { setAsyncFunction } = useAsync(postNewQuestion);
  const { id } = useParams();

  const handleQuestionValue = (event) => {
    setQuestionValue(event.target.value);
  };

  const handlePost = async () => {
    if (!questionValue) return;

    await setAsyncFunction(questionValue, id);
    window.location.reload();
  };

  console.log(questionValue);

  return (
    <StModalWrapper>
      <StAddQuestionModal ref={modalRef}>
        <div className='close'>
          <div className='title'>
            <StMessageIcon size={28} color='gray60' />
            <h2>질문을 작성하세요</h2>
          </div>
          <StCloseIcon size={28} color='gray60' onClick={toggleModal} />
        </div>
        <StExceptTitle>
          <StQuestionTo>
            To.
            <img src={userProfile} alt='프로필' />
            <span>{userName}</span>
          </StQuestionTo>
          <InputTextArea onChangeHandler={handleQuestionValue}>질문을 입력해주세요</InputTextArea>
          <Button disabled={questionValue.length === 0} onClickHandler={handlePost}>
            질문 보내기
          </Button>
        </StExceptTitle>
      </StAddQuestionModal>
    </StModalWrapper>
  );
};

export default AddQuestionModal;

const StModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.56);
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 25px;
`;

const StAddQuestionModal = styled.div`
  display: flex;
  flex-direction: column;
  width: 612px;
  flex-shrink: 0;
  border-radius: 24px;
  padding: 40px 40px 70px;
  gap: 40px;

  background: ${({ theme }) => theme.color.Grayscale['10']};

  box-shadow: ${({ theme }) => theme.shadow['3pt']};

  @media (max-width: 660px) {
    width: 100%;
    max-height: 568px;
    margin: 24px auto;
  }

  & h2 {
    color: ${({ theme }) => theme.color.Grayscale['60']};
    font-family: Actor;
    font-size: 2.4rem;
    font-weight: 400;
    line-height: 30px;
    margin: 0;
    @media (max-width: 375px) {
      font-size: 2rem;
    }
  }

  & .title {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  & .close {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const StQuestionTo = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  color: ${({ theme }) => theme.color.Grayscale['60']};
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 22px;

  & img {
    display: flex;
    width: 28px;
    height: 28px;
    justify-content: center;
    align-items: center;
    border-radius: 999px;
    @media (max-width: 375px) {
      width: 22px;
      height: 22px;
    }
  }
`;

const StExceptTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
