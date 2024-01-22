import { css } from 'styled-components';

import Button from '@components/ui/atoms/Button/Button';
import ArrowDropdown from '@components/ui/atoms/dropdown/arrow-dropdown/ArrowDropdown';
import HamburgerDropdown from '@components/ui/atoms/dropdown/hamburger-dropdown/HamburgerDropdown';
import Logo from '@components/ui/atoms/logo/Logo';

const ListPage = () => {
  return (
    <>
      <div
        css={css`
          padding: 4rem 5rem 0;
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
          <Logo />
          <Button theme='brown20' arrow>
            답변하러 가기
          </Button>
        </nav>
      </div>
      <div
        css={css`
          display: flex;
          width: 100%;
          justify-content: space-between;
        `}
      >
        <ArrowDropdown />
        <HamburgerDropdown />
      </div>
    </>
  );
};

export default ListPage;
