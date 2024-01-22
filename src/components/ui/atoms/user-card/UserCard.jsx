import styled from 'styled-components';

import PROFILE_SAMPLE from '@components/ui/atoms/profile-sample';

import { foundation } from '/src/style/theme/theme';

const UserCard = ({ userProfile = PROFILE_SAMPLE, userName = '아초는고양이', count = '0' }) => {
  return (
    <StUserCard>
      <div className='user'>
        <img src={userProfile} alt='유저프로필' />
        <span className='name'>{userName}</span>
      </div>
      <div className='count'>
        <div>
          <span>받은 질문</span>
        </div>
        <span>{count}개</span>
      </div>
    </StUserCard>
  );
};

export default UserCard;

const gray = foundation.color.Grayscale[40];
const white = foundation.color.Grayscale[10];

const StUserCard = styled.div`
  display: flex;
  width: 22rem;
  height: 18.7rem;
  padding: 2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex-shrink: 0;

  border-radius: 1.6rem;
  border: 1px solid ${gray};
  background: ${white};

  @media (max-width: 375px) {
    padding: 1.6rem;
  }

  & div {
    display: flex;
  }
  & img {
    display: flex;
    width: 6rem;
    height: 6rem;
    justify-content: center;
    align-items: center;

    @media (max-width: 375px) {
      width: 4.8rem;
      height: 4.8rem;
    }
  }

  & .user {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    font-size: 2rem;

    @media (max-width: 375px) {
      font-size: 1.8rem;
    }
  }

  & .count {
    height: 2.2rem;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;

    color: ${gray};
    font-size: 1.6rem;

    @media (max-width: 375px) {
      font-size: 1.4rem;
    }

    & div {
      gap: 0.4rem;

      & .message-icon {
        width: 18px;
        height: 18px;

        @media (max-width: 375px) {
          width: 1.6rem;
          height: 1.6rem;
        }
      }
    }
  }
`;
