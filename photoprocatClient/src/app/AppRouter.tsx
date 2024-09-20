import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { publicRouts } from './config/publicRouts';

const AppRouter = () => {
  return (
    <Routes>
      {publicRouts.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.module />}
        ></Route>
      ))}
    </Routes>
  );
};

export default AppRouter;
