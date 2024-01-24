import axiosInstance from '@api/instance/axiosInstance';

// const mockJsonFilePath = 'questionListPage-mockdata.json';

const getQuestionLists = async () => {
  const res = await axiosInstance.get('/subjects/', {
    params: {
      limit: 6,
      offset: 0,
      sort: 'time', // "time" | "name"
    },
  });

  return res.data;
};

export { getQuestionLists };
