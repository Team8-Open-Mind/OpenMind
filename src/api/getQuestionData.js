import axios from 'axios';

const API_TEST_URL = import.meta.env.VITE_TEST_API_URL;

export const getUserData = async () => {
  const response = await axios.get(`${API_TEST_URL}`);

  if (response.status !== 200) {
    throw new Error(`질문을 불러오는데 실패했습니다.`);
  }

  return response.data.results;
};

export default getUserData;
