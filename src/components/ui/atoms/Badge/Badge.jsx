import styled from 'styled-components';

import { foundation } from '/src/style/theme/theme';

// 배지는 answer의 유무에 따라 정해짐.
// answer의 경우 boolean이 아니라 null이 기본임.
// 답변 거절 상태가 추가되었음. isRejected로 boolean 값을 받아와 처리함.

const Badge = ({ isRejected, value }) => {
  return <StBadge>{value ? '답변 완료' : '미답변'}</StBadge>;
};

export default Badge;

const gray = foundation.color.Grayscale[40];
const brown = foundation.color.Brown[40];

const StBadge = styled.div`
  display: inline-flex;
  padding: 0.4rem 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
  color: ${({ value }) => (value ? brown : gray)};

  border-radius: 0.8rem;
  border: 0.1rem solid ${({ value }) => (value ? brown : gray)};
`;
