import { useNavigate } from 'react-router-dom';

import { device } from '@device/mediaBreakpoints';
import styled from 'styled-components';

import Button from '@components/ui/atoms/button/Button';
import Logo from '@components/ui/atoms/logo/Logo';
import DocumentTitle from '@layout/document-title/DocumentTitle';

import ListContents from './comp/list-contents/ListContents';

const ListPage = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem('userId');

  const navigateToAnswerPage = () => {
    if (!id) return navigate('/');

    navigate(`/post/${id}/answer`);
  };

  return (
    <StWrap>
      <DocumentTitle>오픈마인드 질문대상 선택 페이지</DocumentTitle>
      <StNavWrapper>
        <StNav>
          <Logo onClickHandler={() => navigate('/')} />
          {id ? (
            <Button theme='brown20' arrow onClickHandler={navigateToAnswerPage}>
              답변하러 가기
            </Button>
          ) : null}
        </StNav>
      </StNavWrapper>
      <ListContents />
    </StWrap>
  );
};

export default ListPage;

const StWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  background: ${({ theme }) => theme.color.Grayscale[20]};
`;

const StNavWrapper = styled.div`
  padding: 4rem 5rem;
`;

const StNav = styled.nav`
  max-width: 94rem;
  /* height: 5.7rem; */
  height: auto;
  margin-inline: auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  gap: 2rem;

  @media ${device.tablet} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    gap: 0;
  }
`;
