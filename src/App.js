import React from 'react';
import { Helmet } from 'react-helmet'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Rwi from './pages/Rwi';
import Project from './pages/Project';
import Altitude from './pages/Altitude'
import Trippy from './pages/Trippy';

import { projectInfo, altitudeApparel , trippyTravel} from './assets/projectInfo'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      
      <Helmet>
        <title>SMU Designs | Web Development & Design</title>
        <meta name="description" content={`Samantha Urwin web designer and full stack web developer from Toronto, Canada. View her portfolio of UI design, branding, and web development projects. Get in touch for freelance projects and job opportunities.`} />
      </Helmet>

      <ScrollToTop>
        <Header />
          <Switch>
            <Route exact path='/' component={Home} />

            <Route exact path='/portfolio'>
              <Portfolio projects={projectInfo} altitudeApparel={altitudeApparel} trippyTravel={trippyTravel} />
            </Route>

            <Route exact path='/contact'>
              <Contact />
            </Route>

            <Route exact path='/portfolio/rwi-case-study' component={ Rwi } />

            <Route exact path='/portfolio/altitude-apparel' component={ Altitude } />
            <Route exact path='/portfolio/trippy-travel-planner' component={ Trippy }/>

            {projectInfo.map((info) => (
              <Route exact path={info.path} key={info.title}>
                <Project projectInfo={info} />
              </Route>
            ))}

          </Switch>
      </ScrollToTop>
    </Router>
  );
}

export default App;
