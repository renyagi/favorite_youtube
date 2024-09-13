"use client";

import React, { useState } from "react";
import { LoginPage } from "../../sections/login/LoginPage/LoginPage";
import axios from "axios";

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleClick = async (email, password) => {
    try {
      await axios.post("http://localhost:8000/api/user/", {
        email: email,
        password: password,
      });
    } catch (error) {
      // エラーの処理
      console.error('Error occurred:', error);
    }
  };

  return (
    <LoginPage
      email={email}
      href="#"
      password={password}
      onClick={handleClick}
    />
  );
}
