import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import Logo from '@components/ui/atoms/logo/Logo';

const NavBar = ({ page }) => {
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
    <StNavBar className={myId !== null ? 'log-in' : null}>
      <Logo onClickHandler={handleToMain} />
      {myId ? (
        <StCategory page={page}>
          <button className='answer' type='button' onClick={handleToAnswer}>
            받은 질문
          </button>
          <button className='question' type='button' onClick={handleToQuest}>
            질문하기
          </button>
        </StCategory>
      ) : null}
    </StNavBar>
  );
};

const StNavBar = styled.div`
  display: flex;
  width: 100%;
  max-width: 716px;
  height: 70px;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 26px;

  &.log-in {
    justify-content: space-between;
  }
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

  & .answer {
    color: ${({ theme, page }) => (page === 'answer' ? theme.color.Brown['30'] : theme.color.Brown['40'])};
  }

  & .question {
    color: ${({ theme, page }) => (page === 'question' ? theme.color.Brown['30'] : theme.color.Brown['40'])};
  }

  & :hover {
    color: ${({ theme }) => theme.color.Brown['30']};
  }
`;

export default NavBar;
