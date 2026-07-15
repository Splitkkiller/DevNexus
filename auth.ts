import { API_BASE_URL } from "./apiConfig";

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
      // If the server says the token is invalid, clear it
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
