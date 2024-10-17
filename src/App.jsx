import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import NoPage from './NoPage';
import Layout from './Layout';
import Team from './Team.jsx';
import Events from './Events.jsx';
import Genxt from './events-tickets/Genxt.jsx';
import Bbic from './events-tickets/Bbic.jsx';
import Pond from './events-tickets/Pond.jsx';
import Articles from './Articles.jsx';
import Gennxt_exp from './articles/Gennxt_exp.jsx';
import Mental from './articles/Article2.jsx';   
import Contact from './Contact.jsx';
import Scrolltop from './Scrolltop.jsx';
import Thriftsale from './events-tickets/Thriftsale.jsx';
import More from './More.jsx';

const App = () => {
  return (
    <Router>
      <Scrolltop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/Events" element={<Events />} />
          <Route path="*" element={<NoPage />} />
          <Route path="Gennxt" element={<Genxt />} />
          <Route path="Bbic" element={<Bbic />} />
          <Route path="Pond-res" element={<Pond />} />
          <Route path="Articles" element={<Articles />} />
          <Route path="Gennxt-art" element={<Gennxt_exp />} />
          <Route path="Mental-health-art" element={<Mental />} />
          <Route path="Contact-us" element={<Contact />} />
          <Route path="Thriftsale" element={<Thriftsale />} />
          <Route path="More" element={<More />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
