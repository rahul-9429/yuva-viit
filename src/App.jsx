import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Home from './Home';
import NoPage from './NoPage';
import Layout from './Layout';
import Team from './Team.jsx';
import Events from './Events.jsx';
import Genxt from './Genxt.jsx';
import Bbic from './Bbic.jsx';
import Pond from './Pond.jsx';
import Articles from './Articles.jsx';
import Gennxt_exp from './Gennxt_exp.jsx';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/team" element={<Team/>}/>
          <Route path="/Events" element={<Events/>}/>
          <Route path="*" element={<NoPage />} />
          <Route path="Gennxt" element ={<Genxt/>}/>
          <Route path="Bbic" element ={<Bbic/>}/>
          <Route path="Pond-res" element ={<Pond/>}/>
          <Route path="Articles" element ={<Articles/>}/>
          <Route path="Gennxt-art" element={<Gennxt_exp/>}/>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
