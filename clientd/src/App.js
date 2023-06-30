/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Header from './Header';
import Route from './router/Route';
// import ToDoList from './apps/toDoList/toDoList';
import Metube from './apps/metuve/Metuve';
import PicsApp from './apps/picsApp/picsApp';
import Calculator from './apps/calculator/calculator'

export default () => {
  return (
    <div>
      <Header /> 
      <Route path="/"> 
        {/* <ToDoList/> */}
      </Route>
      <Route path="/metube">
        <Metube/>
      </Route>
      <Route path="/pictures">
        <PicsApp/>
      </Route>
      <Route path="/calculator">
        <Calculator/>
      </Route>
    </div>
  )
}