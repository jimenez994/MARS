import React from 'react';
import Header from './Header';
import Route from './router/Route';
import ToDoList from './toDoList/toDoList';
import Metube from './metuve/Metuve';

export default () => {
  return (
    <div>
      <Header />
      <Route path="/">
        <ToDoList/>
      </Route>
      <Route path="/metube">
        <Metube/>
      </Route>
    </div>
  )
}