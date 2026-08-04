import React from 'react';
import { 
  Code2, 
  TerminalSquare, 
  BrainCircuit, 
  Sparkles, 
  ArrowRight,
  LogIn,
  BookOpen
} from 'lucide-react';

interface LandingPageProps {
  onLaunchPlayground: () => void;
  onLoginClick: () => void;
}

export function LandingPage({ onLaunchPlayground, onLoginClick }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#131316] text-[#e8e8ea] flex flex-col font-sans selection:bg-blue-500/30">
      
      {/* ===== Landing Page Navigation ===== */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-[#2a2a30] bg-[#16161a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2 select-none">
          <div className="bg-blue-500 p-1.5 rounded-lg shadow-lg shadow-blue-500/20">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-extrabold text-lg tracking-wide text-white">
            DevNexus
          </span>
        </div>
        
        <button
          onClick={onLoginClick}
          className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#2a2a35] hover:bg-[#353542] rounded-lg transition-all active:scale-95 border border-[#3f3f4e]"
        >
          <LogIn className="w-4 h-4" />
          Log In / Sign Up
        </button>
      </nav>

      {/* ===== Hero Section ===== */}
      <main className="flex-1 flex flex-col items-center text-center px-4 pt-24 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 border border-blue-500/20">
          <Sparkles className="w-4 h-4" />
          <span>The Ultimate Developer Learning Hub</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white max-w-4xl mb-6 leading-tight">
          Master Coding with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Interactive Learning
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#9d9da3] max-w-2xl mb-10 leading-relaxed">
          Dive into our comprehensive documentation, test your knowledge with interactive quizzes, and write real code in our integrated IDE Playground.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onLaunchPlayground}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20 active:scale-95 group"
          >
            <TerminalSquare className="w-5 h-5" />
            Launch IDE Playground
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={onLoginClick}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#2a2a35] hover:bg-[#353542] text-white font-bold rounded-xl transition-all active:scale-95"
          >
            Create Free Account
          </button>
        </div>
      </main>

      {/* ===== Features Grid ===== */}
      <section className="px-6 py-16 bg-[#16161a] border-t border-[#2a2a30]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Feature 1 */}
          <div className="p-6 rounded-2xl bg-[#131316] border border-[#2a2a30] hover:border-[#3f3f4e] transition-colors">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-4">
              <TerminalSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Integrated IDE</h3>
            <p className="text-[#9d9da3] text-sm leading-relaxed">
              Write, test, and execute code directly in your browser. No setup required. Perfect for testing HTML, CSS, JS, and Python snippets.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-2xl bg-[#131316] border border-[#2a2a30] hover:border-[#3f3f4e] transition-colors">
            <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-4">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Skill Quizzes & Cards</h3>
            <p className="text-[#9d9da3] text-sm leading-relaxed">
              Solidify your knowledge with interactive flashcards and comprehensive quizzes designed to test your understanding of core concepts.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-2xl bg-[#131316] border border-[#2a2a30] hover:border-[#3f3f4e] transition-colors">
            <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-4">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Extensive Docs</h3>
            <p className="text-[#9d9da3] text-sm leading-relaxed">
              Access well-structured, easy-to-read documentation spanning multiple languages. Learn best practices and modern syntax effortlessly.
            </p>
          </div>

        </div>
      </section>

      {/* ===== Simple Footer ===== */}
      <footer className="py-8 text-center text-[#5a5a62] text-sm bg-[#16161a]">
        <p>© {new Date().getFullYear()} DevNexus. All rights reserved.</p>
      </footer>

    </div>
  );
}