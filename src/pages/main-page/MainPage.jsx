import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';
import styled from 'styled-components';

import Button from '@components/ui/atoms/Button/Button';
import InputField from '@components/ui/atoms/input/input-field/InputField';
import Logo from '@components/ui/atoms/logo/Logo';
import { StBackground } from '@pages/question-feed-page/QuestFeedPage';

const MainPage = () => {
  const [userName, setUserName] = useState(null);
  const USER_API = import.meta.env.VITE_SUBJECTS_API;
  const navigate = useNavigate();

  const navigateToList = () => {
    navigate('/list');
  };

  const handleInputChange = (e) => {
    setUserName(e.target.value);
  };

  const handlePost = async () => {
    await axios.post(`${USER_API}`, { name: userName });
    navigate('/list');
  };

  return (
    <StBackground>
      <StButtonPosition>
        <Button theme='brown10' arrow='true' onClickHandler={navigateToList}>
          질문하러 가기
        </Button>
      </StButtonPosition>
      <StMainWrapper>
        <Logo width='462px' height='180px' />
        <StInputName>
          <InputField onChangeHandler={handleInputChange} />
          <Button width='336px' onClickHandler={handlePost}>
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

  background-color: ${({ theme }) => theme.color.Grayscale['10']};
  border-radius: 16px;
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
  top: 100px;
  right: 50px;
`;
