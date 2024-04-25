import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
} from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import "./App.css";
import { Login } from "./login";
import { Home } from "./pages/home";
import { useEffect } from "react";
import { ThankYou } from "./thankyou";
import { Response } from "./response";
import { Creation } from "./pages/creation";
import { Poll } from "./pages/poll";
import { Report } from "./pages/report";

function App() {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  useEffect(() => {
    if (!isAuthenticated && window.location.pathname !== "/") {
      window.location.href = "/";
    }
  }, []);

  return (
    <main>
      <Router>
        <Switch>
          <Route path="/polls">
            <HomePage />
          </Route>
          <Route path="/poll">
            <PollPage />
          </Route>
          <Route path={`/create`}>
            <BuilderPage />
          </Route>
          <Route path={`/report`}>
            <Report />
          </Route>
          <Route path="/thankyou">
            <ThankYou />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

const HomePage = () => {
  return <Home />;
};

const PollPage = () => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:pollId/response`}>
        <Response />
      </Route>
      <Route path={`${match.path}/:pollId`}>
        <Poll />
      </Route>
    </Switch>
  );
};

const BuilderPage = () => {
  return <Creation />;
};

export default App;
