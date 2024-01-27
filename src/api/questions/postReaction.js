import axiosInstance from '@api/instance/axiosInstance';

const postReaction = async (questionId, type = 'like') => {
  try {
    const response = await axiosInstance.post(`/questions/${questionId}/reaction/`, { type });

    if (response.status !== 200) {
      throw new Error(`리액션 보내는데 실패하였어요!`);
    }

    return response;
  } catch (error) {
    console.error('에러 발생:', error);
    throw error;
  }
};

export { postReaction };
