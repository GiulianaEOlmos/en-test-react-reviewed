import { Switch, Route, useHistory, Redirect } from "react-router";
import { useEffect, useState } from "react";

import TodoPage from "./TodoPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import { login, register, checkToken } from "../utils/auth-api";
import { UserContext } from "../utils/UserContext";

const App = () => {
  const history = useHistory();
  const [userData, setUserData] = useState(null);

  const onLogin = (data) => {
    login(data).then(() => {
      setUserData({ email: data.email });
      history.push("/projects");
    });
  };

  const onRegister = (data) => {
    register(data).then(() => {
      history.push("/projects");
    });
  };

  const onSignout = () => {
    setUserData(null);
    localStorage.removeItem("jwt");
  };

  useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      checkToken(jwt).then((user) => {
        setUserData(user);
        history.push("/projects");
      });
      // Needs correcting: A cat block it could be needed here to handle errors when the token is invalid or expired. Or when it couldn't be verified.
    }
  }, [history]);

  return (
    <UserContext.Provider value={userData}>
      <Switch>
        <Route path="/signin">
          <LoginPage onLogin={onLogin} />
        </Route>
        <Route path="/signup">
          <RegisterPage onRegister={onRegister} />
        </Route>
        <ProtectedRoute path="/projects">
          <TodoPage onSignout={onSignout} />
        </ProtectedRoute>
        {/* Well done: The wildcard route will redirect the user to the projects
        page if they are logged in, and to the sign in page if they are not.
        This will help to prevent unauthorized access to the projects page. */}
        <Route path="*">
          {userData ? <Redirect to="/projects" /> : <Redirect to="/signin" />}
        </Route>
      </Switch>
    </UserContext.Provider>
  );
};

export default App;
