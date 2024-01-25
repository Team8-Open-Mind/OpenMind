import axiosInstance from '@api/instance/axiosInstance';

const deleteQuestion = async (id) => {
  console.log(id);
  const res = await axiosInstance.delete(`/questions/${id}/`);

  return res;
};

export { deleteQuestion };
