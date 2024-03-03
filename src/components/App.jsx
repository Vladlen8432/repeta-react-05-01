import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Dogs = lazy(() => import('../pages/Dogs'));
const DogDetails = lazy(() => import('../pages/DogDetails'));
const Breeds = lazy(() => import('./Breeds'));
const Gallery = lazy(() => import('./Gallery'));

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/dogs" element={<Dogs />}></Route>
          <Route path="/dogs/:dogId" element={<DogDetails />}>
            <Route path="breeds" element={<Breeds />} />
            <Route path="gallery" element={<Gallery />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
