import axios from 'axios';

const USER_API = import.meta.env.VITE_SUBJECTS_API;
console.log(USER_API);

export const getUserData = async () => {
  const response = await axios.get(`${USER_API}`);

  if (response.status !== 200) {
    throw new Error(`프로필을 불러오는데 실패했습니다.`);
  }

  return response.data.results;
};

export default getUserData;
