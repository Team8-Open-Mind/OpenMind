import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import Button from '@components/ui/atoms/Button/Button';
import InputField from '@components/ui/atoms/input/input-field/InputField';
import Logo from '@components/ui/atoms/logo/Logo';
import { StBackground } from '@pages/question-feed-page/QuestFeedPage';

import { postNewFeedId } from '@api/subjects/postNewFeedId';
import { useAsync } from '@hooks/useAsync';

import { useNavigateToAnswer } from './hooks/useNavigateAnswer';

const MainPage = () => {
  const [userName, setUserName] = useState(null);
  // const USER_API = import.meta.env.VITE_SUBJECTS_API;
  const navigate = useNavigate();

  const navigateToList = () => {
    navigate('/list');
  };

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  // const handlePost = async () => {
  //   const response = await axios.post(`${USER_API}`, { name: userName });
  //   console.log(response.data.id);
  //   // navigate('/list');
  // };

  const { result, setAsyncFunction } = useAsync(postNewFeedId, [userName]);

  const handlePost = async (userName) => {
    if (!userName) return;

    await setAsyncFunction(userName);
  };

  useNavigateToAnswer(result, navigate);

  return (
    <StBackground>
      <StButtonPosition>
        <Button theme='brown10' arrow='true' onClickHandler={navigateToList}>
          질문하러 가기
        </Button>
      </StButtonPosition>
      <StMainWrapper>
        <Logo pcWidth='46.3rem' pcHeight='18rem' width='25.1rem' height='9.8rem' />
        <StInputName>
          <InputField onChangeHandler={handleInputChange} />
          <Button width='100%' onClickHandler={() => handlePost(userName)}>
            질문 받기
          </Button>
        </StInputName>
      </StMainWrapper>
    </StBackground>
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
