import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { MovieDetailsProvider } from './context/movieDetailsContext';

import Navbar from './components/Navbar/Navbar';
import Movies from './Pages/Movies/Movies';
import MovieDetailsPage from './Pages/MovieDetailsPage/MovieDetailsPage';
import PersonPage from './Pages/PersonPage/PersonPage';
import ReviewsPage from './Pages/ReviewsPage/ReviewsPage';
import CreditsPage from './Pages/CreditsPage/CreditsPage';
import SearchResultsPage from './Pages/SearchResultsPage/SearchResultsPage';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Router basename={process.env.PUBLIC_URL}>
          <Navbar />
          <Switch>
            <Route path='/' exact>
              <Movies />
            </Route>
            <Route path='/:search' exact>
              <SearchResultsPage />
            </Route>
            <Route path='/movie/:id' exact>
              <MovieDetailsProvider>
                <MovieDetailsPage />
              </MovieDetailsProvider>
            </Route>
            <Route path='/movie/:id/reviews' exact>
              <MovieDetailsProvider>
                <ReviewsPage />
              </MovieDetailsProvider>
            </Route>
            <Route path='/movie/:id/credits' exact>
              <MovieDetailsProvider>
                <CreditsPage />
              </MovieDetailsProvider>
            </Route>
            <Route path='/person/:id'>
              <PersonPage />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
}

export default App;