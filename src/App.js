import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './route';
import RouteWrapper from './route/RouteWrapper';

function App() {
  return (
    <Router>
      <Routes>
        {routes.map(({ path, element, isProtected }, index) => (
          <Route
            key={index}
            path={path}
            element={<RouteWrapper element={element} isProtected={isProtected} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
