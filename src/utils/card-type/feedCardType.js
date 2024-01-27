export const feedCardType = (answer) => {
  let type = '';

  if (answer === null) {
    // 답장이 없는 상태
    // reply(답변) 상태만 가능해야한다.
    type = 'reply';
  } else {
    // 답장이 있는 상태
    // read(답장 읽기) 가능 상태
    type = 'read';

    if (answer === 'edit') {
      // 수정 가능 상태
      type = 'edit';
    }

    if (answer.isRejected) {
      // 거절된 상태
      type = 'rejected';
    }
  }

  return type;
};
