import { lazy } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import LoadingSpinner from '@layout/loading-spinner/LoadingSpinner';

const AnswerPage = lazy(() => import('@pages/answer-page/AnswerPage'));
const ListPage = lazy(() => import('@pages/list-page/ListPage'));
const MainPage = lazy(() => import('@pages/main-page/MainPage'));
const NotFoundPage = lazy(() => import('@pages/not-found-page/NotFoundPage'));
const QuestFeedPage = lazy(() => import('@pages/question-feed-page/QuestFeedPage'));
const TestPage = lazy(() => import('@pages/test-page/TestPage'));
const TestPage2 = lazy(() => import('@pages/test2-page/TestPage2'));

const PrimaryRoute = (
  <Route path='/' element={<LoadingSpinner />}>
    <Route index element={<MainPage />} />
    <Route path='list' element={<ListPage />} />
    <Route path='post/:id/answer' element={<AnswerPage />} />
    <Route path='post/:id' element={<QuestFeedPage />} />
    <Route path='test' element={<TestPage />} />
    <Route path='test2' element={<TestPage2 />} />
    <Route path='*' element={<NotFoundPage />} />
  </Route>
);

const baseRoute = createRoutesFromElements(PrimaryRoute);

export const router = createBrowserRouter(baseRoute);
