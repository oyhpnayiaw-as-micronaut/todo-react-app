import React from 'react';

import Header from 'components/Header';
import TodosLogic from 'components/TodoLogic';

const Home = () => {
  return (
    <div className="wrapper">
      <div className="todos">
        <Header />
        <TodosLogic />
      </div>
    </div>
  );
};
export default Home;
