import axiosInstance from '@api/instance/axiosInstance';

const deleteQuestion = async (id) => {
  const response = await axiosInstance.delete(`/questions/${id}/`);

  if (response.status !== 204) {
    throw new Error(`질문을 삭제하는데 실패하였어요!`);
  }

  return response;
};

export { deleteQuestion };
