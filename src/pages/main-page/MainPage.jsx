import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import PortalContainer from '@components/portal/Portal';
import Button from '@components/ui/atoms/button/Button';
import InputField from '@components/ui/atoms/input/input-field/InputField';
import Logo from '@components/ui/atoms/logo/Logo';
import Toast from '@components/ui/atoms/toast/Toast';
import { StBackground } from '@pages/question-feed-page/QuestFeedPage';

import { postNewFeedId } from '@api/subjects/postNewFeedId';
import { useAsync } from '@hooks/useAsync';
import { useCloseModal } from '@hooks/useCloseModal';

import { useNavigateToAnswer } from './hooks/useNavigateAnswer';

const MainPage = () => {
  const [userName, setUserName] = useState(null);
  const { state } = useLocation();
  const { deleteAllSuccess } = state || {};
  const { isModalOpen, toggleModal } = useCloseModal(deleteAllSuccess);

  const navigate = useNavigate();

  const navigateToList = () => {
    navigate('/list');
  };

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };
  const { result, setAsyncFunction } = useAsync(postNewFeedId, [userName]);

  const handlePost = async (userName) => {
    if (!userName) return;

    await setAsyncFunction(userName);
  };

  useNavigateToAnswer(result, navigate);

  return (
    <>
      <StBackground>
        <StButtonPosition>
          <Button theme='brown10' arrow='true' onClickHandler={navigateToList}>
            질문하러 가기
          </Button>
        </StButtonPosition>
        <StMainWrapper>
          <Logo pcWidth='46.3rem' pcHeight='18rem' width='25.1rem' height='9.8rem' />
          <StInputName>
            <StDescription>질문을 받으려면 이름을 입력해 주세요</StDescription>
            <InputField onChangeHandler={handleInputChange} />
            <Button width='100%' onClickHandler={() => handlePost(userName)}>
              질문 받기
            </Button>
          </StInputName>
        </StMainWrapper>
      </StBackground>
      <PortalContainer>
        {isModalOpen && <Toast closeModal={toggleModal}>내 계정이 삭제 되었습니다.</Toast>}
      </PortalContainer>
    </>
  );
};

export default MainPage;

const StInputName = styled.div`
  position: relative;
  display: inline-flex;
  padding: 32px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 400px;

  background-color: ${({ theme }) => theme.color.Grayscale['10']};
  border-radius: 16px;

  & button {
    height: 4.6rem;
    font-size: 1.6rem;
  }
`;

const StMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;
  height: 100vh;
  margin: -70px auto;
`;

const StButtonPosition = styled.div`
  position: absolute;

  @media screen and (min-width: 1025px) {
    top: 50px;
    right: 10vh;
  }

  @media screen and (min-width: 769px) and (max-width: 1024px) {
    top: 50px;
    right: 10vh;
  }

  @media screen and (max-width: 768px) {
    top: 50px;
    right: 5vh;
  }
`;

const StDescription = styled.p`
  font-size: 1.6rem;
  margin-bottom: 4px;
`;
