import Dropdown from '..';

const ArrowDropdown = ({ callbackFn }) => {
  return (
    <Dropdown callbackFn={callbackFn}>
      <Dropdown.Select />
      <Dropdown.Menu width='7.9rem'>
        <Dropdown.Option>이름순</Dropdown.Option>
        <Dropdown.Option selected>최신순</Dropdown.Option>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ArrowDropdown;
