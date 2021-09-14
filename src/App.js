import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Movies from "./Pages/Movies/Movies";
import MovieDetailsPage from "./Pages/MovieDetailsPage/MovieDetailsPage";

class App extends Component {
  render() {
    return (
      <div >
			<Navbar />
				<Router>
					<Switch>
						<Route path="/" exact>
							<Movies />
						</Route>
						<Route path="/details/:id">
							<MovieDetailsPage />
						</Route>
					</Switch>
				</Router>
		</div>
    );
  }
}

export default App;
