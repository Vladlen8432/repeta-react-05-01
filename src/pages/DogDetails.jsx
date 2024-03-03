import { Suspense, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const DogDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/dogs');
  const { dogId } = useParams();

  console.log(location);
  console.log(backLinkLocationRef);

  return (
    <div>
      <h1>DogDetails: {dogId}</h1>
      <Link to={location.state?.from ?? '/dogs'}>Back to collections</Link>
      <ul>
        <li>
          <Link to="breeds">Breeds</Link>
        </li>
        <li>
          <Link to="gallery">Gallery</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default DogDetails;
