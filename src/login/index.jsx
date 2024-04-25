import React, { useEffect } from "react";
import { GoogleOutlined } from "@ant-design/icons";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useHistory } from "react-router-dom";
import { Button } from "antd";

import "./style.css";
import { auth, googleProvider } from "../firebase/config";

export function Login() {
  const [user] = useAuthState(auth);
  const history = useHistory();
  console.log(user, "user");

  useEffect(() => {
    if (user) {
      window.user = user;
      localStorage.setItem("isAuthenticated", "true");
      history.push("/polls");
    } else {
      localStorage.setItem("isAuthenticated", "false");
    }
  }, [user]);

  const signinWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className="signInWrapper">
      <Button
        shape="round"
        icon={<GoogleOutlined />}
        size={"large"}
        onClick={signinWithGoogle}
      >
        Sign in with google
      </Button>
      {user ? <p>Hello {user.displayName}</p> : "Welcome"}

      {user ? <button onClick={handleSignOut}>Logout</button> : null}
    </div>
  );
}
