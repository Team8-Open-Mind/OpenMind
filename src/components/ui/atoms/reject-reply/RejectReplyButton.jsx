import styled from 'styled-components';

import { patchAnswer } from '@api/answers/patchAnswer';
import { useAsync } from '@hooks/useAsync';

const RejectReplyButton = ({ toggleRerenderTrigger, questionId }) => {
  const { setAsyncFunction } = useAsync(patchAnswer);

  const handleRejectClick = async () => {
    const content = '';
    const isRejected = true;
    const res = await setAsyncFunction(questionId, content, isRejected);
    console.log(res);
    toggleRerenderTrigger();

    return res;
  };

  return (
    <StRejectButton type='button' onClick={handleRejectClick}>
      답변 거절하기
    </StRejectButton>
  );
};

export default RejectReplyButton;

const StRejectButton = styled.button`
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 45px;
  color: ${({ theme }) => theme.color.Grayscale['40']};
  text-decoration: underline;
`;
