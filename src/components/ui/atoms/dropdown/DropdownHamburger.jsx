import { css } from 'styled-components';

import { StHamburger } from '../sprite-icon/SpriteIcon';
import { useDropdownProvider } from './context/DropdownProvider';

const DropdownHamburger = () => {
  const { toggleDropdown } = useDropdownProvider();

  return (
    <button
      type='button'
      css={css`
        padding: 0;
        display: flex;
      `}
      onClick={toggleDropdown}
    >
      <StHamburger $size={24} $color='gray60' />
    </button>
  );
};

export default DropdownHamburger;
