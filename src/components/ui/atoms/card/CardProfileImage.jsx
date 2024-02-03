import styled from 'styled-components';

const CardProfileImage = ({ answerProfileImageSrc }) => {
  return <StAnswerProfileImage src={answerProfileImageSrc} alt='질문자 프로필 이미지' />;
};

export default CardProfileImage;

const StAnswerProfileImage = styled.img`
  border-radius: 50%;
`;
