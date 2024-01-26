import axiosInstance from '@api/instance/axiosInstance';

export const getAnswerLists = async () => {
  const response = await axiosInstance.get(`/subjects/2756/questions/`, {
    params: {
      limit: 8,
      offset: 0,
    },
  });

  if (response.status !== 200) {
    throw new Error(`질문 리스트를 불러오는데 실패하였어요!`);
  }

  return response.data;
};
