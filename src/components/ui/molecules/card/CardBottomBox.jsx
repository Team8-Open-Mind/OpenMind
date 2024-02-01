import styled from 'styled-components';

const CardBottomBox = ({ children }) => {
  return (
    <>
      <StLine />
      <StReactionAndEdit>{children}</StReactionAndEdit>
    </>
  );
};

export default CardBottomBox;

const StLine = styled.div`
  height: 1px;
  width: 100%;
  background: ${({ theme }) => theme.color.Grayscale[30]};
`;

const StReactionAndEdit = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
