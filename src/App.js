import React from 'react'
import './App.css'
import Home from "./components/Home"
import Details from "./components/Details"
import { Route, Routes } from 'react-router-dom';

export default class App extends React.Component { 

  render() {
    return (
      <main>
        <Routes>
          <Route path="/" exact element={<Home/>}></Route>
          <Route path="/home"element={<Home/>}></Route>
          <Route path="/details/:id"element={<Details/>}></Route>
        </Routes>
      </main>
    );
  }

}
