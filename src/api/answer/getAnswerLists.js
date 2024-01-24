import axios from 'axios';

const API_TEST_URL = import.meta.env.VITE_TEST_API_URL;

export const getAnswerLists = async () => {
  const response = await axios.get(`${API_TEST_URL}/subjects/2756/questions/`);

  if (response.status !== 200) {
    throw new Error(`질문 리스트를 불러오는데 실패하였어요!`);
  }

  return response.data;
};
