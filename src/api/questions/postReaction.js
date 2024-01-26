import axiosInstance from '@api/instance/axiosInstance';

const postReaction = async (questionId, type = 'like') => {
  try {
    const response = await axiosInstance.post(`/questions/${questionId}/reaction/`, { type });

    return response;
  } catch (error) {
    console.error('에러 발생:', error);
    throw error;
  }
};

export { postReaction };
