import React, { useState, useEffect } from "react";
import { X, Check, ArrowRight, Loader2, ArrowLeft } from "lucide-react"; 
import { User as UserType, ThemeColors } from "../types";
import { API_BASE_URL } from "../apiConfig";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (user: UserType, token?: string) => void;
  themeColors: ThemeColors;
}

export const AuthModal: React.FC<AuthModalProps> = ({ 
  isOpen, 
  onClose, 
  onLogin, 
  themeColors 
}) => {
  // Mode now includes "forgot"
  const [mode, setMode] = useState<"login" | "register" | "forgot">("login");
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null); 

  // Validation States
  const [emailValid, setEmailValid] = useState<boolean | null>(null);
  const [passwordValid, setPasswordValid] = useState<boolean | null>(null);

  useEffect(() => {
    setEmailValid(/^\S+@\S+\.\S+$/.test(email));
    setPasswordValid(password.length >= 8);
  }, [email, password]);

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccessMsg(null);

    let endpoint = "";
    if (mode === "login") endpoint = `${API_BASE_URL}/login.php`;
    else if (mode === "register") endpoint = `${API_BASE_URL}/register.php`;
    else if (mode === "forgot") endpoint = `${API_BASE_URL}/forgot_password.php`;

    try {
      // Construct body based on mode
      const body: any = { email };
      if (mode === "login" || mode === "register") body.password = password;
      if (mode === "login") body.rememberMe = rememberMe;
      if (mode === "register") body.name = name;

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (data.success) {
        if (mode === "forgot") {
          setSuccessMsg(data.message);
          // DEBUG: Log the reset link to console for local testing
          if(data.debug_link) console.log("RESET LINK:", data.debug_link);
        } else {
          onLogin(data.user, data.token);
          onClose();
        }
      } else {
        setError(data.message || "Authentication failed");
      }
    } catch (err) {
      setError("Server connection failed.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex justify-center items-center z-[100] p-4">
      <div className={`${themeColors.card} ${themeColors.text} w-full max-w-md rounded-2xl p-8 shadow-2xl relative border ${themeColors.cardBorder}`}>
        
        <button onClick={onClose} className="absolute right-5 top-5 opacity-40 hover:opacity-100"><X /></button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-black mb-1">DevNexus</h2>
          <p className={`text-sm ${themeColors.textSecondary}`}>
            {mode === "login" && "Welcome back!"}
            {mode === "register" && "Join the community"}
            {mode === "forgot" && "Reset your password"}
          </p>
        </div>

        {/* Success Message UI for Forgot Password */}
        {successMsg ? (
          <div className="text-center space-y-4">
            <div className="p-4 bg-green-500/10 border border-green-500/20 text-green-500 rounded-xl text-sm">
              {successMsg}
            </div>
            <button 
              onClick={() => { setMode("login"); setSuccessMsg(null); }}
              className="text-blue-500 font-bold hover:underline"
            >
              Back to Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === "register" && (
              <input
                className={`w-full p-3 rounded-xl border ${themeColors.inputBg} ${themeColors.inputBorder} outline-none focus:border-blue-500`}
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            <input
              type="email"
              className={`w-full p-3 rounded-xl border ${themeColors.inputBg} ${themeColors.inputBorder} outline-none focus:border-blue-500`}
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {mode !== "forgot" && (
              <input
                type="password"
                className={`w-full p-3 rounded-xl border ${themeColors.inputBg} ${themeColors.inputBorder} outline-none focus:border-blue-500`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            )}

            {/* Remember Me & Forgot Password Link */}
            {mode === "login" && (
              <div className="flex justify-between items-center text-sm">
                <div 
                  className="flex items-center gap-2 cursor-pointer group"
                  onClick={() => setRememberMe(!rememberMe)}
                >
                  <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                    rememberMe ? 'bg-blue-600 border-blue-600' : 'border-neutral-500 group-hover:border-blue-400'
                  }`}>
                    {rememberMe && <Check className="w-3 h-3 text-white" strokeWidth={4} />}
                  </div>
                  <span className="opacity-70 group-hover:opacity-100 select-none">Remember me</span>
                </div>
                
                <button 
                  type="button" 
                  onClick={() => { setMode("forgot"); setError(null); }}
                  className="text-blue-500 hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {error && <p className="text-red-500 text-xs text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold flex justify-center items-center gap-2 shadow-lg shadow-blue-900/20"
            >
              {loading ? <Loader2 className="animate-spin w-5 h-5" /> : (
                <>
                  {mode === "login" && "Sign In"}
                  {mode === "register" && "Create Account"}
                  {mode === "forgot" && "Send Reset Link"}
                  {(mode === "login" || mode === "register") && <ArrowRight className="w-4 h-4" />}
                </>
              )}
            </button>
          </form>
        )}

        {/* Footer Links */}
        {!successMsg && (
          <div className="mt-6 text-center text-sm">
            {mode === "forgot" ? (
              <button 
                onClick={() => { setMode("login"); setError(null); }}
                className="text-neutral-500 hover:text-white flex items-center gap-2 mx-auto transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Login
              </button>
            ) : (
              <button 
                onClick={() => {
                  setMode(mode === "login" ? "register" : "login");
                  setError(null);
                }}
                className="text-blue-500 font-bold hover:underline"
              >
                {mode === "login" ? "Need an account? Register" : "Already have an account? Login"}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

