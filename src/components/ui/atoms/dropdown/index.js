import DropdownProvider from './context/DropdownProvider';
import DropdownHamburger from './DropdownHamburger';
import DropdownMenu from './DropdownMenu';
import DropdownOption from './DropdownOption';
import DropdownSelect from './DropdownSelect';

const Dropdown = Object.assign(DropdownProvider, {
  Menu: DropdownMenu,
  Select: DropdownSelect,
  Option: DropdownOption,
  Hamburger: DropdownHamburger,
});

export default Dropdown;
