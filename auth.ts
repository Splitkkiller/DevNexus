import { API_BASE_URL } from "./apiConfig";

export interface User {
  id: string;
  name: string;
  email: string;
}

export async function fetchCurrentUser() {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const res = await fetch(`${API_BASE_URL}/me.php`, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      localStorage.removeItem("token");
      return null;
    }

    const data = await res.json();
    return data.loggedIn ? data.user : null;
  } catch (err) {
    console.error("Auth verification failed:", err);
    return null;
  }
}

export async function login(email: string, password: string) {
  const res = await fetch(`${API_BASE_URL}/login.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok || !data.success) {
    throw new Error(data.message || "Login failed");
  }

  return { user: data.user, token: data.token };
}

export async function register(email: string, password: string, name: string) {
  const res = await fetch(`${API_BASE_URL}/register.php`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, name }),
  });

  const data = await res.json();

  if (!res.ok || !data.success) {
    throw new Error(data.message || "Registration failed");
  }

  return { user: data.user, token: data.token };
}
