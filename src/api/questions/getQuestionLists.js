import axiosInstance from '@api/instance/axiosInstance';

// const mockJsonFilePath = 'questionListPage-mockdata.json';

const questionListSort = {
  이름순: 'name',
  최신순: 'time',
};

/**
 *
 * @param {'time' | 'name'} sortOrder
 * @returns
 */
const getQuestionLists = async (sortOrder = 'time') => {
  const res = await axiosInstance.get('/subjects/', {
    params: {
      limit: 8,
      offset: 0,
      sort: sortOrder, // "time" | "name"
    },
  });

  return res.data;
};

export { questionListSort, getQuestionLists };
