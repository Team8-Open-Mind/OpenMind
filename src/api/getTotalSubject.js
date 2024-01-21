import axios from 'axios';

// 임시로 오픈마인드 api 말고 다른 코드잇 api 불러와서 테스트 하였음...
// 추후에 당연히 수정이 필요합니다...

const API_TEST_URL = import.meta.env.VITE_TEST_API_URL;

export const getTotalSubject = async () => {
  const response = await axios.get(`${API_TEST_URL}/film-reviews`);

  if (response.status !== 200) {
    throw new Error(`질문자 리스트를 불러오는데 실패하였어요!`);
  }

  return response.data;
};
