import React from 'react';

import styled from 'styled-components';

const PointBox = styled.div`
  width: 23%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .image {
    width: 80px;
    margin-bottom: 1rem;
  }
  h3 {
    margin: 0;
  }
`;
const Point = ({ point, image }) => {
  return (
    <PointBox>
      <img className='image' src={image} alt='중요한 점 아이콘' />
      <h3>{point.title}</h3>
      <p>{point.content}</p>
    </PointBox>
  );
};

export default Point;