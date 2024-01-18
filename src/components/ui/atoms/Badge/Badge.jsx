import styled from 'styled-components';

const StBadge = styled.div`
  display: inline-flex;
  padding: 0.4rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border-radius: 0.8rem;
  border: 0.1rem solid ${({ value }) => (value ? '#542F1A' : '#818181')};
  color: ${({ value }) => (value ? '#542F1A' : '#818181')};
`;

const Badge = ({ value }) => {
  return <StBadge value={value}>{value ? '답변 완료' : '미답변'}</StBadge>;
};

export default Badge;
