import Dropdown from '..';

/**
 * 이거슨 레고 조립 예시일 뿐.
 * prop은 알아서 더 추가하거나 전달하시면 됩니다.
 */
const HamburgerDropdown = ({ callbackFn }) => {
  return (
    <Dropdown callbackFn={callbackFn}>
      <Dropdown.Hamburger />
      <Dropdown.Menu width='9.2rem' positionTop={41} positionRight={-3}>
        <Dropdown.Option>받은 질문</Dropdown.Option>
        <Dropdown.Option>질문하기</Dropdown.Option>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default HamburgerDropdown;
