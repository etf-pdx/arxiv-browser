import * as React from 'react';
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './pages/SignUp';
import Settings from './pages/Settings';
import Categories from './pages/Categories';
import Search from './pages/Search';
import Home from './pages/Home';

const App = () => {
  return (
    <main>
      <h1>Science News!</h1>
      {
        (!useLocation().pathname.includes("sign-up")) ?
          <nav>
            <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/search">Search</Link></li>
              <li><Link to="/categories">Categories</Link></li>
              <li><Link to="/settings">Settings</Link></li>
            </ul>
          </nav>
          :
          <></>
      }
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/sign-up" />} />
      </Routes>
    </main>
  );
}

export default App;