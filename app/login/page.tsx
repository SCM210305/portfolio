"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (user === "admin" && pass === "admin123") {
      router.push("/");
    } else {
      setError("Invalid credentials. Try harder.");
    }
  };

  return (
    <div className="login">
      <h1>Login</h1>
      <input placeholder="Username" onChange={e => setUser(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPass(e.target.value)} />
      <button onClick={handleLogin}>Enter</button>
      <p className="error">{error}</p>
    </div>
  );
}
