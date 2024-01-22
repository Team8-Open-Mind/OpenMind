import { useNavigate } from 'react-router-dom';

import { css } from 'styled-components';

import Button from '@components/ui/atoms/Button/Button';
import Logo from '@components/ui/atoms/logo/Logo';

const ListPage = () => {
  const navigate = useNavigate();

  return (
    <div
      css={css`
        padding: 4rem 5rem;
      `}
    >
      <nav
        css={css`
          max-width: 94rem;
          height: 5.7rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-inline: auto;
        `}
      >
        <Logo onClickHandler={() => navigate('/')} />
        <Button theme='brown20' arrow>
          답변하러 가기
        </Button>
      </nav>
    </div>
  );
};

export default ListPage;
