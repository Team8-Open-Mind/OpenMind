import FloatingButton from '../FloatingButton';

const FloatingDeleteButton = () => {
  return (
    <FloatingButton
      fontSizeOnResize={{ onMobile: '1rem', onPc: '1.5rem' }}
      boxSizeOnResize={{ onMobile: { width: 10.3, height: 2.5 }, onPc: { width: 13, height: 3.5 } }}
      position='static'
    >
      피드 전체삭제
    </FloatingButton>
  );
};

export default FloatingDeleteButton;
