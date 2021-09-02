import React from 'react';

import './App.css';
import Header from './Header';
import SearchIcon from '@material-ui/icons/Search';

function App() {
  return (
    <div className="app">
      {/* <h1>Lets build a Linked In Clone</h1> */}

        {/* Header */}
        <Header /> 

        {/* The header (nav bar) of LinkedIn can be categorised into two subsections - the left part (habing Logo annd search bar), and the right part (having Home,Notifications, Network etc) */}

        <div className="header-left">
              <img src="./linkedin.png" alt="" srcset="" />

              <div className="search">
                <SearchIcon />
                <input type="text" />
              </div>
        </div>

        <div className="header-right">

        </div>


        {/* App Body */}
              {/* Left sidebar */}
              {/* Feed */}
              {/* Right Sidebar */}
    </div>
  );
}

export default App;
