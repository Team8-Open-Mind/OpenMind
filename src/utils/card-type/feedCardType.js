export const feedCardType = (answer) => {
  let type = '';

  if (answer === null) {
    // answer가 없는 상태
    // reply 상태만 가능해야한다.
    type = 'reply';
  } else {
    // answer값이 있는 상태
    // read 가능 상태
    type = 'read';

    if (answer === 'edit') {
      type = 'edit';
    }

    if (answer.isRejected) {
      type = 'rejected';
    }
  }

  return type;
};
