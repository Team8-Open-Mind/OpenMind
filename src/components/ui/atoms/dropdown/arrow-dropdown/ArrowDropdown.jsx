import Dropdown from '..';

/**
 *
 * @param {{ callbackFn: VoidFunction }} ArrowDropdownProps
 */
const ArrowDropdown = ({ callbackFn }) => {
  return (
    <Dropdown>
      <Dropdown.Select />
      <Dropdown.Menu width='7.9rem'>
        <Dropdown.Option onSelect={callbackFn}>이름순</Dropdown.Option>
        <Dropdown.Option selected onSelect={callbackFn}>
          최신순
        </Dropdown.Option>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ArrowDropdown;
