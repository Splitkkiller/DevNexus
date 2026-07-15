import React, { useState } from "react";
import { Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { API_BASE_URL } from "../apiConfig";

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  // Helper to get token from URL query params
  const getToken = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get("token");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = getToken();

    if (!token) {
      setStatus("error");
      setMsg("Missing reset token.");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch(`${API_BASE_URL}/reset_password.php`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, password }),
      });
      
      const data = await res.json();
      
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setMsg(data.message || "Failed to reset password");
      }
    } catch (err) {
      setStatus("error");
      setMsg("Server connection error");
    } finally {
      setLoading(false);
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white">
        <div className="bg-neutral-800 p-8 rounded-2xl shadow-xl max-w-sm w-full text-center border border-neutral-700">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-2">Password Reset!</h2>
          <p className="text-neutral-400 mb-6">Your password has been successfully updated.</p>
          <a href="/" className="block w-full py-3 bg-blue-600 hover:bg-blue-700 rounded-xl font-bold">
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white">
      <div className="bg-neutral-800 p-8 rounded-2xl shadow-xl max-w-sm w-full border border-neutral-700">
        <h2 className="text-2xl font-bold mb-2 text-center">New Password</h2>
        <p className="text-neutral-400 text-sm mb-6 text-center">Enter your new secure password below.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            className="w-full p-3 rounded-xl border bg-neutral-900 border-neutral-700 outline-none focus:border-blue-500 text-white"
            placeholder="New Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={8}
            required
          />

          {status === "error" && (
            <div className="flex items-center gap-2 text-red-500 text-sm justify-center">
              <AlertCircle className="w-4 h-4" /> {msg}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex justify-center items-center"
          >
            {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};