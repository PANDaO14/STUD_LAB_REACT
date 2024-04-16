import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './styles/index.scss';
import HomePage from './pages/HomePage/HomePage.tsx';
// import Aforisms from './components/Aforism/Aforisms.tsx';
import LikedAphorisms from './pages/LikesPage/LikesPage.tsx';
import QuotesPage from './pages/QuotesPage/QuotesPage.tsx';
import AuthorQuotes from './pages/QuotesPage/AuthorQuotePage/AuthorQuotePage.tsx';
import TagQuotePage from './pages/QuotesPage/TagQuotePage/TagQuotePage.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: `/quotes`,
    element: (<QuotesPage />)
  },
  {
    path: `/quotes/authors/:author`,
    element: <AuthorQuotes />
  },
  {
    path: `/quotes/tags/:tag`,
    element: <TagQuotePage />
  },
  {
    path: '/likes',
    element: <LikedAphorisms />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
