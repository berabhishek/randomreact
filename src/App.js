import logo from './logo.svg';
import Icecream from './components/Icecream';
import React, {useState, useEffect} from "react";
import Cart from './components/Cart';
import axios from 'axios';
import { Routes, Route, Link } from "react-router-dom";
import Posts from './components/Posts';
import PaginatedPost from './components/PaginatedPost';
import WritePost from './components/WritePost';
function App() {

  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/paginated" element={<PaginatedPost />} />
        <Route path="/write" element={<WritePost />} />
      </Routes>
    </div>
  );
}

export default App;
