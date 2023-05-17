import { Outlet } from 'react-router-dom';
const { Suspense } = require('react');

export const Layout = () => {
  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};
