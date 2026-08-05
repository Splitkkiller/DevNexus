import React, { useState } from 'react';
import { Mail, Lock, User as UserIcon, Loader2, ArrowLeft } from 'lucide-react';
import { User, ThemeColors } from '../types';
import { login, register } from '../auth';

interface AuthPageProps {
  onLogin: (user: User, token?: string) => void;
  themeColors: ThemeColors;
  onBack: () => void;
}

export function AuthPage({ onLogin, themeColors, onBack }: AuthPageProps) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isLogin) {
        const { user, token } = await login(email, password);
        onLogin(user, token);
      } else {
        const { user, token } = await register(email, password, name);
        onLogin(user, token);
      }
    } catch (err: any) {
      setError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`min-h-full flex flex-col items-center justify-center p-4 ${themeColors.bg}`}>
      <div className={`w-full max-w-md p-8 rounded-2xl border ${themeColors.cardBorder} ${themeColors.card} shadow-2xl relative`}>
        
        {/* Back button to return to Landing Page */}
        <button 
          onClick={onBack}
          className={`absolute top-6 left-6 flex items-center gap-2 text-sm ${themeColors.textSecondary} hover:${themeColors.text} transition-colors`}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <div className="text-center mb-8 mt-6">
          <h2 className={`text-2xl font-bold ${themeColors.text}`}>
            {isLogin ? 'Welcome Back' : 'Create Account'}
          </h2>
          <p className={`text-sm mt-2 ${themeColors.textSecondary}`}>
            {isLogin 
              ? 'Enter your credentials to access your account' 
              : 'Sign up to start learning with DevNexus'}
          </p>
        </div>

        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className={`block text-xs font-semibold uppercase mb-1.5 ${themeColors.textSecondary}`}>
                Full Name
              </label>
              <div className="relative">
                <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="John Doe"
                  className={`w-full pl-10 pr-4 py-3 rounded-xl border ${themeColors.inputBorder} ${themeColors.inputBg} ${themeColors.text} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
                />
              </div>
            </div>
          )}

          <div>
            <label className={`block text-xs font-semibold uppercase mb-1.5 ${themeColors.textSecondary}`}>
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border ${themeColors.inputBorder} ${themeColors.inputBg} ${themeColors.text} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
              />
            </div>
          </div>

          <div>
            <label className={`block text-xs font-semibold uppercase mb-1.5 ${themeColors.textSecondary}`}>
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className={`w-full pl-10 pr-4 py-3 rounded-xl border ${themeColors.inputBorder} ${themeColors.inputBg} ${themeColors.text} focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm`}
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading && <Loader2 className="w-4 h-4 animate-spin" />}
            {isLogin ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className={`text-sm text-blue-400 hover:underline`}
          >
            {isNeedAccountText(isLogin)}
          </button>
        </div>

      </div>
    </div>
  );
}

function isNeedAccountText(isLogin: boolean) {
  return isLogin ? "Don't have an account? Sign up" : "Already have an account? Log in";
}

