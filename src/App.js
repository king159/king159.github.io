import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main';
import './static/css/main.scss';

const { PUBLIC_URL } = process.env;

const About = lazy(() => import('./pages/About'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Resume = lazy(() => import('./pages/Resume'));
const Publication = lazy(() => import('./pages/Publication'));
const Article = lazy(() => import('./pages/Article'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Resume} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/publication" component={Publication} />
        <Route path="/article" component={Article} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
