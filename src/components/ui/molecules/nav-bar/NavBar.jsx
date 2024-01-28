import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import Logo from '@components/ui/atoms/logo/Logo';

const NavBar = () => {
  const navigate = useNavigate();

  const myId = localStorage.getItem('userId');

  const handleToAnswer = () => {
    navigate(`/post/${myId}/answer/`);
  };

  const handleToMain = () => {
    navigate('/');
  };

  const handleToQuest = () => {
    navigate('/list');
  };

  return (
    <StNavBar>
      <Logo onClickHandler={handleToMain} />
      <StCategory>
        <button type='button' onClick={handleToAnswer}>
          받은 질문
        </button>
        <button type='button' onClick={handleToQuest}>
          질문하기
        </button>
      </StCategory>
    </StNavBar>
  );
};

const StNavBar = styled.div`
  display: flex;
  width: 100%;
  max-width: 716px;
  height: 70px;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 26px;
`;

const StCategory = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 47px;
  flex-shrink: 0;

  & button {
    color: ${({ theme }) => theme.color.Brown['40']};
    font-family: Pretendard;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 25px;
    letter-spacing: -2px;
  }

  & :hover {
    color: ${({ theme }) => theme.color.Brown['30']};
  }

  & :active {
    color: ${({ theme }) => theme.color.Brown['30']};
  }
`;

export default NavBar;
