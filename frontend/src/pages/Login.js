import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../services/loginInfo";
import Notification from "../components/Notification";
import Navigation from "../components/Navigation";
import LoginForm from "../components/LoginForm";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // set error for Notification component
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    // save to localstorage after a successful login
    if (userInfo(username, password)) {
      window.localStorage.setItem(
        "loggedInUser",
        JSON.stringify({ user: username })
      );
      navigate("/");
    } else {
      // set error for Notification component
      setError("Unauthorized User");
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  };

  return (
    <>
      <Navigation />
      {/* display alert if there is any error */}
      {error && <Notification message={error} />}
      <LoginForm
        username={username}
        password={password}
        handleUsernameChange={({ target }) => setUsername(target.value)}
        handlePasswordChange={({ target }) => setPassword(target.value)}
        handleSubmit={handleLogin}
      />
    </>
  );
};

export default Login;
