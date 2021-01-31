import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import RouterConfig from "./components/navigation/Route/RouteConfig";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <RouterConfig />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
