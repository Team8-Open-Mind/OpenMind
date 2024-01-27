import axiosInstance from '@api/instance/axiosInstance';

// const USER_API = import.meta.env.VITE_SUBJECTS_API;
// console.log(USER_API); // https://openmind-api.vercel.app/3-8/subjects/

/**
 *
 * @param {number | string} userId
 */
export const getUserData = async (userId) => {
  const response = await axiosInstance.get(`/subjects/${userId}/`);

  if (response.status !== 200) {
    throw new Error(`프로필을 불러오는데 실패했습니다.`);
  }

  // createdAt: '2024-01-23T06:07:13.981236Z';
  // id: 2756;
  // imageSource: 'https://fastly.picsum.photos/id/432/200/200.jpg?hmac=b4-kxXh_oTpvCBH9hueJurvHDdhy0eYNNba-mO9Q8bU';
  // name: '테스터테스터입니다';
  // questionCount: 23;

  return response.data;
};

export default getUserData;
