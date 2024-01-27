import axiosInstance from '@api/instance/axiosInstance';

const patchAnswer = async (answerId, content, isRejected = false) => {
  try {
    console.log(answerId, content, isRejected);
    const response = await axiosInstance.patch(`/answers/${answerId}/`, {
      content,
      isRejected,
    });

    return response;
  } catch (error) {
    console.error('에러 발생:', error);
    throw error;
  }
};

export { patchAnswer };
