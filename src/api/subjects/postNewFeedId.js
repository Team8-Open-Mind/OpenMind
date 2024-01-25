import axiosInstance from '@api/instance/axiosInstance';

/**
 *
 * @param {string} userName
 */
const postNewFeedId = async (userName) => {
  const response = await axiosInstance.post('subjects/', { name: userName });

  return response.data;
};

export { postNewFeedId };
