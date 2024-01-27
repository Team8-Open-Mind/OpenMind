import axiosInstance from '@api/instance/axiosInstance';

export const postAnswer = async (questionId, content, isRejected) => {
  try {
    const response = await axiosInstance.post(`/questions/${questionId}/answers/`, {
      content,
      isRejected,
    });

    if (response.status !== 201) {
      throw new Error(`답변 남기는데 실패하였어요!`);
    }

    return response;
  } catch (error) {
    console.error('에러 발생:', error);
    throw error;
  }
};
