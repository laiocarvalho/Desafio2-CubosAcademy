import React from "react";
import Header from "./Components/Header/Header";
import "./App.css";
import MainContent from "./Components/Main-Content/MainContent";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ShoplistContainer} from './Providers/ShoplistContext'
import {MovieContainer} from './Providers/MovieContext';
import Page2 from "./Pages/Page2/Page2";
import Page3 from "./Pages/Page3/Page3";


function App() {
  return (
        <Router>
          <MovieContainer.Provider>
            <ShoplistContainer.Provider>
              <div className="App">
                <Header />
                <Switch>
                  <Route path ='/' exact component={MainContent}/>
                  <Route path ='/page2'  component={Page2}/>
                  <Route path ='/page3'  component={Page3}/>
                </Switch>
              </div>
            </ShoplistContainer.Provider>
          </MovieContainer.Provider>
        </Router>
  );
}

export default App;
