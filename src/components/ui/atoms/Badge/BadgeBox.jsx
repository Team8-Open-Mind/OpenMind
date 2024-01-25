import { useEffect, useState } from 'react';

import styled from 'styled-components';

import PortalContainer from '@components/portal/Portal';

import { getAnswerLists } from '@api/answers/getAnswerLists';
import { deleteQuestion } from '@api/questions/deleteQuestion';
import { useAsync } from '@hooks/useAsync';
import { useConfirmAlert } from '@hooks/useConfirmAlert';

import { StCloseIcon } from '../sprite-icon/SpriteIcon';
import Badge from './Badge';

const BadgeBox = ({ value, questionId }) => {
  const { showConfirm, ConfirmAlertComponent } = useConfirmAlert();
  const [, , , deleteQuestionFunc] = useAsync(deleteQuestion, []);

  const setDeleteQuestion = async () => {
    const res = await deleteQuestionFunc(questionId);

    return res;
  };

  const handleDeleteCardClick = () => {
    setDeleteQuestion();
  };

  const handleCancelDeleteCardClick = () => {
    console.log('Cancelled!');
  };

  const handleDeleteClick = () => {
    showConfirm(handleDeleteCardClick, handleCancelDeleteCardClick);
  };

  return (
    <>
      <StBadgeBox>
        <Badge value={value} />
        <button type='button' onClick={handleDeleteClick}>
          <StCloseIcon $size={20} $color='gray60' />
        </button>
      </StBadgeBox>
      <PortalContainer>
        <ConfirmAlertComponent title='선택하신 질문 카드가 삭제됩니다' content='삭제된 피드는 복구할 수 없습니다.' />
      </PortalContainer>
    </>
  );
};

export default BadgeBox;

const StBadgeBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
