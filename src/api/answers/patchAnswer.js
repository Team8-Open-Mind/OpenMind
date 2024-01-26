import axiosInstance from '@api/instance/axiosInstance';

const patchAnswer = async (questionId, content, isRejected = false) => {
  try {
    console.log(questionId, content, isRejected);
    const response = await axiosInstance.patch(`/answers/${questionId}/`, {
      content,
      isRejected,
    });
    console.log(response);

    return response;
  } catch (error) {
    console.error('에러 발생:', error);
    throw error;
  }
};

export { patchAnswer };
