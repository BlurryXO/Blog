import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Path from './components/Path';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Products from './pages/Products';
import Photos from './pages/Photos';
import Other from './pages/other';
import PhotoCaption from './pages/PhotoCaption';
import Blog from './pages/blog/blog'
import Projects from './pages/Projects'

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
            <Switch>
              <Route path='/' exact component={Home} />
                <Route path='/photos' component={Photos} />
                <Route path='/photo' component={PhotoCaption}/>
                <Route path='/reports' component={Reports} />
                <Route path='/other' component={Other} />
                <Route path='/products' component={Products} />
                <Route path='/blog' component={Blog}/>
                <Route path='/projects' component={Projects}/>
            </Switch>
      </Router>
    </>
  );
}

