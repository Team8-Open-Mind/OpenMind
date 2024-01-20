import FloatingButton from '../FloatingButton';

const FloatingWriteQuestionButton = () => {
  return (
    <FloatingButton
      fontSizeOnResize={{ onMobile: '2rem' }}
      textContentOnResize={{ onPc: '질문 작성하기' }}
      positionOffsetOnResize={{ onMobile: { bottom: '2.4rem', right: '2.4rem' } }}
      boxSizeOnResize={{ onMobile: { width: 12.3, height: 5.4 }, onPc: { width: 20.8, height: 5.4 } }}
    >
      질문 작성
    </FloatingButton>
  );
};

export default FloatingWriteQuestionButton;
