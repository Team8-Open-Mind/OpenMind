import { useNavigate } from 'react-router-dom';

import { device } from '@device/mediaBreakpoints';
import styled from 'styled-components';

import Button from '@components/ui/atoms/button/Button';
import Logo from '@components/ui/atoms/logo/Logo';
import { StBackground } from '@pages/question-feed-page/QuestFeedPage';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleRedirectClick = () => {
    navigate('/');
  };

  return (
    <div>
      <StBackground>
        <StMainWrapper>
          <Logo width='462px' height='180px' />
          <StError>404 Error</StError>
          <StErrorDescribe>
            페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다. <br />
            입력하신 주소를 다시 한 번 확인해 주세요
          </StErrorDescribe>
          <Button theme='brown20' arrow onClickHandler={handleRedirectClick}>
            메인 페이지로 이동하기
          </Button>
        </StMainWrapper>
      </StBackground>
    </div>
  );
};

export default NotFoundPage;

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

const StError = styled.h2`
  font-size: 2.8rem;
  letter-spacing: -0.024em;
  line-height: 30px;
  color: ${({ theme }) => theme.color.Brown[40]};
  text-align: center;

  @media ${device.tablet} {
    font-size: 4rem;
    line-height: 42px;
  }
`;

const StErrorDescribe = styled.p`
  font-size: 1.6rem;
  line-height: 20px;
  color: ${({ theme }) => theme.color.Brown[40]};
  text-align: center;
  margin-bottom: 10px;

  @media ${device.tablet} {
    font-size: 2rem;
    line-height: 30px;
  }
`;
