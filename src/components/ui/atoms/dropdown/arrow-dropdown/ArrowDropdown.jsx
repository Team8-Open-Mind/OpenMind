import Dropdown from '..';

const ArrowDropdown = ({ callbackFn }) => {
  return (
    <Dropdown>
      <Dropdown.Select />
      <Dropdown.Menu width='7.9rem'>
        <Dropdown.Option callbackFn={callbackFn}>이름순</Dropdown.Option>
        <Dropdown.Option selected callbackFn={callbackFn}>
          최신순
        </Dropdown.Option>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ArrowDropdown;
