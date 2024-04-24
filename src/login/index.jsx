import React, { useEffect } from "react";
import { GoogleOutlined } from "@ant-design/icons";
import { signInWithPopup } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Button } from "antd";

import "./style.css";
import { auth, googleProvider } from "../firebase/config";
import { getPollsByUserId } from "../firebase";

export function Login() {
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      getPollsByUserId(user.uid);
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
