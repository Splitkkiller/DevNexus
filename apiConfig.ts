// Central place for the backend API's base URL, instead of it being
// hardcoded separately in auth.ts, AuthModal.tsx, ResetPassword.tsx, and
// geminiService.ts. Change VITE_API_BASE_URL in .env (or .env.local for a
// personal override that git won't track) to point somewhere other than
// the default local XAMPP setup — e.g. your real domain once this is
// deployed.
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost/devnexus-api";
