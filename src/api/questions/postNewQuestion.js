import axiosInstance from '@api/instance/axiosInstance';

/**
 *
 * @param {string} question
 */
const postNewQuestion = async (content, id) => {
  try {
    const response = await axiosInstance.post(`subjects/${id}/questions/`, { content });

    if (response.status !== 201) {
      throw new Error(`답변 남기는데 실패하였어요!`);
    }

    return response.data;
  } catch (error) {
    console.error('에러 발생:', error);
    throw error;
  }
};

export { postNewQuestion };
