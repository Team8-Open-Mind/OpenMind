import styled from 'styled-components';

import { useCardProvider } from './context/cardProvider';

const CardProfileImage = () => {
  const { userInfo } = useCardProvider();

  return <StAnswerProfileImage src={userInfo?.imageSource} alt={`${userInfo?.name} 프로필 이미지`} />;
};

export default CardProfileImage;

const StAnswerProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
