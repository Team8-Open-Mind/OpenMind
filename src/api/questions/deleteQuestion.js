import axiosInstance from '@api/instance/axiosInstance';

const deleteQuestion = async (id) => {
  const response = await axiosInstance.delete(`/questions/${id}/`);

  if (response.status !== 200) {
    throw new Error(`답변을 삭제하는데 실패하였어요!`);
  }

  return response;
};

export { deleteQuestion };
