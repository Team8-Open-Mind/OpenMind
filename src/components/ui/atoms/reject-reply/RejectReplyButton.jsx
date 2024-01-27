import styled from 'styled-components';

import { postAnswer } from '@api/answers/postAnswer';
import { useAsync } from '@hooks/useAsync';

const RejectReplyButton = ({ toggleRerenderTrigger, questionId }) => {
  const { setAsyncFunction } = useAsync(postAnswer);

  const handleRejectClick = async () => {
    const content = '거절된 질문입니다.';
    const isRejected = true;
    const res = await setAsyncFunction(questionId, content, isRejected);
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
