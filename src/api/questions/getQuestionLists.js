import axiosInstance from '@api/instance/axiosInstance';

// const mockJsonFilePath = 'questionListPage-mockdata.json';

const questionListSort = {
  이름순: 'name',
  최신순: 'time',
};

/**
 * @typedef {Object} GetQuestionListParams
 * @property {number} offset
 * @property {number} limit
 * @property {'time' | 'name'} sortOrder
 * @param {GetQuestionListParams} getQuestionListsParams
 * @returns
 */
const getQuestionLists = async ({ offset, sortOrder = 'time', limit = 8 }) => {
  const res = await axiosInstance.get('/subjects/', {
    params: {
      offset,
      limit,
      sort: sortOrder, // "time" | "name"
    },
  });

  return res.data;
};

export { questionListSort, getQuestionLists };
