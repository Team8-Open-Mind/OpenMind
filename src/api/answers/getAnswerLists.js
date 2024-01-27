import axiosInstance from '@api/instance/axiosInstance';

export const getAnswerLists = async ({ userId }) => {
  const response = await axiosInstance.get(`/subjects/${userId}/questions/`, {
    // * limit 기본값 8개
    params: {
      limit: 10,
      offset: 0,
    },
  });
  // const response = await axiosInstance.get(`/subjects/${userId}/questions/`);

  if (response.status !== 200) {
    throw new Error(`질문 리스트를 불러오는데 실패하였어요!`);
  }

  return response.data;
};
