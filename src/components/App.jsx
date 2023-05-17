import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCard } from 'redux/operations';
import { user } from 'redux/selectors';
import { Layout } from './Layout/Layout';

const Main = lazy(() => import('./Main/Main'));
const HomePage = lazy(() => import('./Home/HomePage'));

export const App = () => {
  const users = useSelector(user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCard());
  }, [dispatch]);

  console.log(users);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/cards" element={<Main />} />
        </Route>
      </Routes>
    </div>
  );
};
