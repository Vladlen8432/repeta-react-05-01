import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const Dogs = () => {
  const [dogs] = useState(['dog-1', 'dog-2', 'dog-3', 'dog-4', 'dog-5']);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const dogId = searchParams.get('dogId') ?? '';

  const updateQueryString = e => {
    const dogIdValue = e.target.value;

    if (dogIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ dogId: e.target.value });
  };

  const visibleDogs = dogs.filter(dog => dog.includes(dogId));

  console.log(location);

  return (
    <div>
      <input type="text" value={dogId} onChange={updateQueryString} />
      <br />
      <button onClick={() => setSearchParams({ c: 'hello' })}>Change SP</button>
      <br />
      <ul>
        {visibleDogs.map(dog => {
          return (
            <li key={dog}>
              <Link to={`${dog}`} state={{ from: location }}>
                {dog}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Dogs;
