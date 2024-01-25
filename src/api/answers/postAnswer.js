import axiosInstance from '@api/instance/axiosInstance';

export const postAnswer = async (questionId, formData) => {
  console.log(formData);

  try {
    const response = await axiosInstance.post(`/questions/${questionId}/answers/`, formData);

    if (response.status !== 200) {
      throw new Error(`답변을 보내는데 실패하였어요!`);
    }

    return response;
  } catch (error) {
    console.error('에러 발생:', error);
    throw error; // 에러를 다시 throw하여 호출자에게 전파
  }
};
