import { useState, useEffect } from "react";
import { getUserData } from "../services/auth.service";

export const useLogin = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser(getUserData(token));
    } else {
      window.location.href = "/login";
    }
  }, []);

  return user;
};
