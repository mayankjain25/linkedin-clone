import React from 'react';

import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
// import header_option from './header_option';

function App() {

 
  return (
    
    <div className="app">
      {/* <h1>Lets build a Linked In Clone</h1> */}
          
        {/* Header */}
        <Header /> 

        {/* The header (nav bar) of LinkedIn can be categorised into two subsections - the left part (habing Logo annd search bar), and the right part (having Home,Notifications, Network etc) */}

        


        {/* App Body */}
        <div className="appbody">

              <Sidebar />
              <Feed />
              {/* Right Sidebar */}
        </div>
    </div>
  );
}

export default App;
