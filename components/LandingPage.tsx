import React from 'react';
import { 
  Code2, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Zap, 
  ArrowRight, 
  Play 
} from 'lucide-react';

interface LandingPageProps {
  onLaunchPlayground: () => void;
  onLoginClick: () => void;
  onNavigate: (view: string) => void;
}

export function LandingPage({ onLaunchPlayground, onLoginClick, onNavigate }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      {/* Navigation Bar */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#030712]/80 border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="flex items-center gap-2 font-black text-xl tracking-tight cursor-pointer"
            onClick={() => onNavigate('landing')}
          >
            <div className="p-2 bg-blue-600/20 border border-blue-500/30 rounded-xl">
              <Code2 className="w-6 h-6 text-blue-500" />
            </div>
            <span>Codectionary</span>
            <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded-full ml-1">
              Beta v1.0
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <button onClick={() => onNavigate('docs')} className="hover:text-white transition-colors">
              Documentation
            </button>
            <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">
              Blog & Changelog
            </button>
            <button onClick={onLaunchPlayground} className="hover:text-white transition-colors">
              Playground
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={onLoginClick}
              className="px-4 py-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors"
            >
              Sign In
            </button>
            <button 
              onClick={onLaunchPlayground}
              className="px-4 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2"
            >
              <Play className="w-4 h-4 fill-current" /> Launch IDE
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-6 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-semibold text-blue-400 shadow-inner">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Next-Gen Interactive Web Documentation</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
            Learn Modern Code by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Building Live</span> in Your Browser.
          </h1>

          <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Codectionary combines comprehensive documentation, live code sandbox execution, AI assistance, and active-recall learning into one unified developer platform.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button 
              onClick={onLaunchPlayground}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold rounded-2xl shadow-xl shadow-blue-600/25 transition-all flex items-center justify-center gap-2 group"
            >
              <span>Open Interactive Playground</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => onNavigate('docs')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold rounded-2xl transition-all"
            >
              Explore Documentation
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 md:py-24 px-6 border-t border-white/5 bg-slate-950/50">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-extrabold text-white">Everything You Need to Master Code</h2>
            <p className="text-sm md:text-base text-slate-400">Engineered for developers who prefer hands-on execution over passive reading.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-2xl space-y-4 hover:border-blue-500/40 transition-colors">
              <div className="p-3 bg-blue-500/10 text-blue-400 rounded-xl w-fit border border-blue-500/20">
                <Terminal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Live Code Execution</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Test HTML, CSS, JavaScript, TypeScript, Python, and Java instantly inside an in-browser WebAssembly IDE.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-2xl space-y-4 hover:border-purple-500/40 transition-colors">
              <div className="p-3 bg-purple-500/10 text-purple-400 rounded-xl w-fit border border-purple-500/20">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">AI Assistant</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Stuck on a tricky scope error or CSS layout bug? Ask the built-in AI tutor for step-by-step guidance.
              </p>
            </div>

            <div className="bg-slate-900/60 border border-slate-800/80 p-8 rounded-2xl space-y-4 hover:border-emerald-500/40 transition-colors">
              <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl w-fit border border-emerald-500/20">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Active Recall & Flashcards</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Solidify language concepts, syntax snippets, and algorithms with built-in active recall drills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-purple-900/40 border border-blue-500/30 p-10 md:p-14 rounded-3xl text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-500/5 backdrop-blur-3xl pointer-events-none" />
          <div className="relative z-10 space-y-4">
            <h2 className="text-3xl md:text-4xl font-black text-white">Ready to elevate your development workflow?</h2>
            <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base">
              Start experimenting in the live IDE playground or dive into full documentation right away—no login required.
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
              <button 
                onClick={onLaunchPlayground}
                className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg transition-all"
              >
                Open Playground
              </button>
              <button 
                onClick={() => onNavigate('blog')}
                className="px-8 py-3.5 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold rounded-xl transition-all"
              >
                Read Developer Blog
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto relative z-10 bg-[#020617] border-t border-white/10 pt-16 pb-12 px-6 text-slate-400">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-4">
            <div 
              className="flex items-center gap-2 font-black text-white text-xl cursor-pointer"
              onClick={() => onNavigate('landing')}
            >
              <Code2 className="w-6 h-6 text-blue-500" /> Codectionary
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Interactive developer documentation, live browser playground, and active learning tools.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">Resources</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <button onClick={() => onNavigate('docs')} className="hover:text-white transition-colors">
                  Documentation
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('docs')} className="hover:text-white transition-colors">
                  Getting Started
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('blog')} className="hover:text-white transition-colors">
                  Developer Blog & Changelog
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">Platform</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <button onClick={onLaunchPlayground} className="hover:text-white transition-colors">
                  IDE Playground
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-5">Legal & Support</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Help & Contact
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('terms')} className="hover:text-white transition-colors">
                  Terms of Service
                </button>
              </li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Codectionary — All rights reserved.</p>
          <div className="flex gap-6">
            <button onClick={() => onNavigate('terms')} className="hover:text-white">Privacy</button>
            <button onClick={() => onNavigate('terms')} className="hover:text-white">Terms</button>
            <button onClick={() => onNavigate('contact')} className="hover:text-white">Contact</button>
          </div>
        </div>
      </footer>
    </div>
  );
}