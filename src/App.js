import './App.scss';
import Navbar from './components/navbar';
import About from './components/about';
import Blog from './components/blog';

import ScrollToTop from './utils/ScrollToTop';

import React, {lazy, useState, Suspense} from 'react';
import {Helmet} from 'react-helmet';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
  useLocation,
} from 'react-router-dom';
import useDarkMode from 'use-dark-mode';

import ReactGA from 'react-ga';
import ReactDOM from 'react-dom';

const Home = lazy(() =>
  import('./components/home' /* webpackChunkName: "Home" */)
);
const Demographics = lazy(() =>
  import('./components/demographics' /* webpackChunkName: "Demographics" */)
);
const State = lazy(() =>
  import('./components/state' /* webpackChunkName: "State" */)
);
const Essentials = lazy(() =>
  import('./components/essentials' /* webpackChunkName: "Essentials" */)
);

const LanguageSwitcher = lazy(() =>
  import(
    './components/languageswitcher' /* webpackChunkName: "LanguageSwitcher" */
  )
);

const VideoPlayer = lazy(
  () => import('./components/videoplayer') /* webpackChunkName: "VideoPlayer" */
);

const schemaMarkup = {
  '@context': 'http://schema.org/',
  '@type': 'NonProfit',
  name: 'Coronavirus Projections for India',
  alternateName: 'COVID-19 Tracker',
  url: 'https://seva.ml/',
  image: 'https://www.covid19india.org/thumbnail.png',
};

ReactGA.initialize('UA-165213678-1');

function App() {
  const darkMode = useDarkMode(false);
  const [showLanguageSwitcher, setShowLanguageSwitcher] = useState(false);
  let location = useLocation();
  
  React.useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);

  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      showInNavbar: true,
    },
    {
      pageLink: '/demographics',
      view: Demographics,
      displayName: 'Demographics',
      showInNavbar: true,
    },
    {
      pageLink: '/essentials',
      view: Essentials,
      displayName: 'Essentials',
      showInNavbar: true,
    },
    {
      pageLink: '/about',
      view: About,
      displayName: 'About',
      showInNavbar: true,
    },
    {
      pageLink: '/blog',
      view: Blog,
      displayName: 'Blog',
      showInNavbar: true,
    },
    {
      pageLink: '/state/:stateCode',
      view: State,
      displayName: 'State',
      showInNavbar: false,
    },
    {
      pageLink: '/videoplayer',
      view: VideoPlayer,
      displayName: 'Video Player',
      showInNavbar: false
    }
  ];

  return (
      <Suspense fallback={<div />}>
          <ScrollToTop />
          <Navbar
            pages={pages}
            {...{darkMode}}
            {...{showLanguageSwitcher, setShowLanguageSwitcher}}
          />
          <Route
            render={({location}) => (
              <React.Fragment>
                <Switch location={location}>
                  {pages.map((page, index) => {
                    return (
                      <Route
                        exact
                        path={page.pageLink}
                        render={({match}) => <page.view />}
                        key={index}
                      />
                    );
                  })}
                  <Redirect to="/" />
                </Switch>
              </React.Fragment>
            )}
          />
      </Suspense>
  );
}

ReactDOM.render(
  <div className="App">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      {/* <Suspense fallback={<div />}>
        <LanguageSwitcher
          {...{showLanguageSwitcher, setShowLanguageSwitcher}}
        />
      </Suspense> */}

      <Router>
        <App/>
      </Router>
    </div>,
  document.getElementById('root')
);

export default App;
