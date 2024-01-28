/* eslint-disable no-param-reassign */
import axiosInstance from '@api/instance/axiosInstance';

const getAnswerLists = async ({ userId, limit = 10, offset = 0 }) => {
  if (!limit) return;

  const response = await axiosInstance.get(`/subjects/${userId}/questions/`, {
    // * limit 기본값 8개
    params: {
      limit,
      offset,
    },
  });

  if (response.status !== 200) {
    throw new Error(`질문 리스트를 불러오는데 실패하였어요!`);
  }

  return response.data;
};

export { getAnswerLists };
