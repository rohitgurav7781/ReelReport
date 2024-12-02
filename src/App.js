import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './componets/Layout';
import Home from './componets/Home';
import './App.css';
import Library from './componets/Library';
import Feed from './componets/Feed';
import List from './componets/List';
import VideoDetails from './componets/VideoPlayer';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path='library' element={<Library />} />
          <Route path= "feed" element={<Feed />} />
        </Route>
      </Routes>
    </Router>
    {/* <Floats/> */}
    </>
  );
}

export default App;