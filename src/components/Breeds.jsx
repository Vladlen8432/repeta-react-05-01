import React from 'react';
import { useParams } from 'react-router-dom';

const Breeds = () => {
  const { dogId } = useParams();
  return <div>Breeds: {dogId}</div>;
};

export default Breeds;
