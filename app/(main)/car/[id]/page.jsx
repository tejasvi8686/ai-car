import React from 'react'

const CarPage = ({ params }) => {
  const { id } = params;
  return <div>CarPage : {id}</div>;
};

export default CarPage;
