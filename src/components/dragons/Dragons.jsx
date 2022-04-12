import React from 'react';
import { useSelector } from 'react-redux';
import Dragon from './Dragon';

const Dragons = () => {
  const dragons = useSelector((state) => state.dragons);
  const dragonList = dragons.map((dragon) => (
    <Dragon
      key={dragon.id}
      id={dragon.id}
      name={dragon.name}
      type={dragon.type}
      image={dragon.image}
    />
  ));
  return <div>{dragonList}</div>;
};

export default Dragons;
