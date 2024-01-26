import axiosInstance from '@api/instance/axiosInstance';

export const postAnswer = async (questionId, content, isRejected) => {
  try {
    const response = await axiosInstance.post(`/questions/${questionId}/answers/`, {
      content,
      isRejected,
    });

    return response;
  } catch (error) {
    console.error('에러 발생:', error);
    throw error;
  }
};
