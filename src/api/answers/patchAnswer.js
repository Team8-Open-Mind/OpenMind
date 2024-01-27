import axiosInstance from '@api/instance/axiosInstance';

const patchAnswer = async (answerId, content, isRejected = false) => {
  try {
    const response = await axiosInstance.patch(`/answers/${answerId}/`, {
      content,
      isRejected,
    });

    if (response.status !== 200) {
      throw new Error(`답변 수정에 실패하였어요!`);
    }

    return response;
  } catch (error) {
    console.error('에러 발생:', error);
    throw error;
  }
};

export { patchAnswer };
