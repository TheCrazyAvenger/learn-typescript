import React from 'react';
import { useHistory } from 'react-router-dom';

export const AboutPage: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <h1>Страница Информации</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, illo
        aliquid. Iusto laborum maxime, aspernatur ab enim ratione facere quos
        magnam, libero minima hic consectetur recusandae esse qui nesciunt
        earum!
      </p>
      <button className='btn' onClick={() => history.push('/')}>
        Обратно к списку дел
      </button>
    </>
  );
};
