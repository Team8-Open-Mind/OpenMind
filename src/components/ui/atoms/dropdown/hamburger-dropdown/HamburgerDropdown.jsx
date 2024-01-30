import Dropdown from '..';

/**
 *
 * @param {{ callbackFn: VoidFunction }} ArrowDropdownProps
 */
const HamburgerDropdown = ({ callbackFn }) => {
  return (
    <Dropdown>
      <Dropdown.Hamburger />
      <Dropdown.Menu width='9.2rem' positionTop={41} positionRight={-3}>
        <Dropdown.Option onSelect={callbackFn}>받은 질문</Dropdown.Option>
        <Dropdown.Option onSelect={callbackFn}>질문하기</Dropdown.Option>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HamburgerDropdown;
