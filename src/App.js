import { useEffect } from "react";
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

import { auth } from "./firebase/config";
import { getPollsByUserId } from "./firebase/index.js";

function App() {
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
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}

const HomePage = () => {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      getPollsByUserId(user.uid);
    }
  }, [user]);

  return <Home />;
};

const PollPage = () => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:pollId/response`}>
        <ResponsePage />
      </Route>
      <Route path={`${match.path}/:pollId`}>
        <BuilderPage />
      </Route>
    </Switch>
  );
};

const BuilderPage = () => {
  return <div>Poll builder page</div>;
};

const ResponsePage = () => {
  return <div>Response Page</div>;
};

export default App;
