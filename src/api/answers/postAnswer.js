import axiosInstance from '@api/instance/axiosInstance';

const postAnswer = async (questionId) => {
  console.log(questionId);
  const response = await axiosInstance.post(`/questions/${questionId}/answers/`);

  if (response.status !== 200) {
    throw new Error(`답변을 보내는데 실패하였어요!`);
  }

  return response;
};

export { postAnswer };
