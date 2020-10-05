import React, { useContext } from "react";
import { Button, Image } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../App";
import { handleGoogleSignIn, handleGoogleSignOut } from "./LoginManager";
import "./Login.css";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const googleLogin = () => {
    let userInfo = { ...loggedInUser };
    handleGoogleSignIn()
      .then((result) => {
        if (result.email) {
          userInfo.isLoggedIn = true;
          userInfo.name = result.displayName;
          userInfo.email = result.email;
          userInfo.error = null;
          setLoggedInUser(userInfo);
          history.replace(from);
        } else {
          userInfo.error = result;
        }
        setLoggedInUser(userInfo);
      })
      .catch(() => {
        userInfo.error = "Something is wrong";
        setLoggedInUser(userInfo);
      });
  };

  const googleLogout = () => {
    const userInfo = { ...loggedInUser };
    handleGoogleSignOut().then((result) => {
      if (result === true) {
        userInfo.isLoggedIn = false;
        userInfo.name = null;
        userInfo.email = null;
        userInfo.error = null;
      } else {
        userInfo.error = result;
      }
      setLoggedInUser(userInfo);
      console.log(userInfo);
    });
  };
  return (
    <div className="mt-5 login">
      {loggedInUser.error && (
        <p className="text-danger">{loggedInUser.error}</p>
      )}
      {loggedInUser.isLoggedIn && (
        <>
          <p className="text-success">User is now logged in</p>
          <Button variant="danger" onClick={googleLogout}>
            Log out
          </Button>
        </>
      )}
      {loggedInUser.isLoggedIn === false && (
        <>
          <h1>Login With</h1>
          <div className="google mt-4">
            <Button variant="light" onClick={googleLogin}>
              <Image src="/resources/Icon/google.png" />
              Continue with google
            </Button>
            <p>
              Don't have an account?{" "}
              <Button
                className="btn btn-light"
                variant="primary"
                onClick={googleLogin}
              >
                Create an account
              </Button>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
