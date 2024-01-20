import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import AnswerPage from '@pages/answer-page/AnswerPage';
import ListPage from '@pages/list-page/ListPage';
import MainPage from '@pages/main-page/MainPage';
import NotFoundPage from '@pages/not-found-page/NotFoundPage';
import QuestFeedPage from '@pages/question-feed-page/QuestFeedPage';

const PrimaryRoute = (
  <Route path='/'>
    <Route index element={<MainPage />} />
    <Route path='list' element={<ListPage />} />
    <Route path='post/:id/answer' element={<AnswerPage />} />
    <Route path='post/:id' element={<QuestFeedPage />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
);

const baseRoute = createRoutesFromElements(PrimaryRoute);

export const router = createBrowserRouter(baseRoute);
