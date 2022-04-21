import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import {Routes, Route} from "react-router-dom"
import Detail from "./components/Detail/Detail";
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/detail/:id" element={<Detail />}></Route>
        
      </Routes>
    </>
  );
}

export default App;
