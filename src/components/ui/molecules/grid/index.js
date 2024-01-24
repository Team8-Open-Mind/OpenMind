import GridProvider from './context/GridProvider';
import GridContainer from './GridContainer';
import GridItem from './GridItem';

const Grid = Object.assign(GridProvider, {
  Container: GridContainer,
  Item: GridItem,
});

export default Grid;
