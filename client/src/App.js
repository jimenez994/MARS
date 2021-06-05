import React from 'react';
import Header from './Header';
import Route from './router/Route';
import ToDoList from './toDoList/toDoList';
import Metube from './metuve/Metuve';
import PicsApp from './picsApp/picsApp';

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
      <Route path="/pictures">
        <PicsApp/>
      </Route>
    </div>
  )
}