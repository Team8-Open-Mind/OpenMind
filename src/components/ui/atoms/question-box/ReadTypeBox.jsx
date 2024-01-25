import styled from 'styled-components';

const ReadTypeBox = ({ readTypeValue }) => {
  return <StReadText>{readTypeValue}</StReadText>;
};

export default ReadTypeBox;

const StReadText = styled.p`
  width: 100%;

  font-size: 1.6rem;
  line-height: 22px;
`;
