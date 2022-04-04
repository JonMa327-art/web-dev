import React from 'react';
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs";
import Tuiter from "./Tuiter";
import { BrowserRouter, Route, Routes }
  from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/hello"
            exact={true}
            element={<HelloWorld />} />
          <Route path="/"
            exact={true}
            element={<Labs />} />
          {/* <Route path="/tuiter"
            exact={true}
            element={<Tuiter />} /> */}
          <Route path="tuiter"
            element={<Tuiter />}>
            {/* <Route index
              element={<HomeScreen />} />
            <Route path="explore"
              element={<ExploreScreen />} />
            <Route path="notifications"
              element={<NotificationScreen />} /> */}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;
