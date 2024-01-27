import axiosInstance from '@api/instance/axiosInstance';

const deleteSubject = async (id) => {
  const response = await axiosInstance.delete(`/subjects/${id}/`);

  if (response.status !== 204) {
    throw new Error(`질문 대상자를 삭제하는데 실패하였어요!`);
  }

  return response;
};

export { deleteSubject };
