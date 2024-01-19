import styled from 'styled-components';

const KebabButton = ({ onClickHandler, ...rest }) => {
  const onKebabButtonClickHandler = (e) => {
    e.stopPropagation(); // event 전파를 막고 (근데 이거 하나만으로는 안 됨.)
    e.preventDefault(); // 지금은 button이 a 태그 안에 있기 때문에 a 태그의 기본 동작까지 막아야 함.
    onClickHandler();
  };

  return (
    <StKebabButton onClick={onKebabButtonClickHandler} {...rest}>
      <StKebabImage />
    </StKebabButton>
  );
};

export default KebabButton;

const StKebabButton = styled.button.attrs({ type: 'button' })`
  width: 2.1rem;
  height: 1.7rem;
  padding: 0;

  background-color: transparent;
`;

const StKebabImage = styled.img.attrs({
  alt: '카드 케밥 버튼',
  src: `${process.env.PUBLIC_URL}/images/folder/kebab.svg`,
})`
  object-fit: cover;
  max-width: 100%;
  width: 100%;
  height: 100%;
`;
