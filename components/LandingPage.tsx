import React from 'react';
import { 
  Code2, 
  TerminalSquare, 
  BrainCircuit, 
  Sparkles, 
  ArrowRight,
  LogIn,
  BookOpen,
  Cpu,
  Layers,
  Globe,
  Twitter,
  Instagram,
  Github,
  Play,
  Tv,
  CheckCircle2,
  Clock,
  Flame
} from 'lucide-react';

interface LandingPageProps {
  onLaunchPlayground: () => void;
  onLoginClick: () => void;
}

export function LandingPage({ onLaunchPlayground, onLoginClick }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-[#131316] text-[#e8e8ea] flex flex-col font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* ===== Navigation Bar ===== */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-[#2a2a30] bg-[#16161a]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2 select-none cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="bg-blue-500 p-1.5 rounded-lg shadow-lg shadow-blue-500/20">
            <Code2 className="w-5 h-5 text-white" />
          </div>
          <span className="font-extrabold text-lg tracking-wide text-white">
            DevNexus
          </span>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={onLaunchPlayground}
            className="hidden sm:flex items-center gap-2 text-sm font-semibold text-[#9d9da3] hover:text-white transition-colors"
          >
            IDE Playground
          </button>
          <button
            onClick={onLoginClick}
            className="flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-md shadow-blue-900/20 active:scale-95"
          >
            <LogIn className="w-4 h-4" />
            Log In / Sign Up
          </button>
        </div>
      </nav>

      {/* ===== Hero Section ===== */}
      <section className="flex-1 flex flex-col items-center text-center px-4 pt-20 pb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-8 border border-blue-500/20">
          <Sparkles className="w-4 h-4" />
          <span>The Ultimate Developer Learning Hub</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white max-w-4xl mb-6 leading-tight">
          Master Coding with <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
            Interactive Learning & Video
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#9d9da3] max-w-2xl mb-10 leading-relaxed">
          Watch comprehensive crash courses, test your knowledge with interactive quizzes, and write code instantly in our browser-based IDE Playground.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onLaunchPlayground}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-blue-900/30 active:scale-95 group"
          >
            <TerminalSquare className="w-5 h-5" />
            Launch IDE Playground
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <button
            onClick={onLoginClick}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#2a2a35] hover:bg-[#353542] text-white font-bold rounded-xl transition-all active:scale-95 border border-[#3f3f4e]"
          >
            Create Free Account
          </button>
        </div>
      </section>

      {/* ===== Core Pillars (Expanded Cards including Watch Area) ===== */}
      <section className="px-6 py-20 bg-[#16161a] border-t border-[#2a2a30]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-white tracking-tight">Everything You Need to Become a Developer</h2>
            <p className="text-[#9d9da3] text-sm mt-2">Built from the ground up for modern, zero-friction developer education.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Feature 1: Integrated IDE */}
            <div className="p-6 rounded-2xl bg-[#131316] border border-[#2a2a30] hover:border-blue-500/50 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <TerminalSquare className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Integrated IDE</h3>
                <p className="text-[#9d9da3] text-xs leading-relaxed mb-4">
                  Write, test, and execute code directly in your browser with real-time preview rendering.
                </p>
              </div>
              <ul className="space-y-1.5 text-[11px] text-[#b8b8bd]">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Live HTML/CSS/JS preview</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Multi-language support</li>
              </ul>
            </div>

            {/* Feature 2: Watch Area */}
            <div className="p-6 rounded-2xl bg-[#131316] border border-[#2a2a30] hover:border-rose-500/50 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-rose-500/10 text-rose-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Tv className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Watch Area</h3>
                <p className="text-[#9d9da3] text-xs leading-relaxed mb-4">
                  Curated video tutorials, full crash courses, and structured tech paths for every skill level.
                </p>
              </div>
              <ul className="space-y-1.5 text-[11px] text-[#b8b8bd]">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-rose-400" /> Full-length crash courses</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-rose-400" /> Filter by difficulty & topic</li>
              </ul>
            </div>

            {/* Feature 3: Skill Quizzes & Cards */}
            <div className="p-6 rounded-2xl bg-[#131316] border border-[#2a2a30] hover:border-purple-500/50 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BrainCircuit className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Quizzes & Cards</h3>
                <p className="text-[#9d9da3] text-xs leading-relaxed mb-4">
                  Solidify your memory with interactive flashcards and progress tracking skill assessments.
                </p>
              </div>
              <ul className="space-y-1.5 text-[11px] text-[#b8b8bd]">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Topic-driven skill tests</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-purple-400" /> Active recall flashcards</li>
              </ul>
            </div>

            {/* Feature 4: Extensive Docs */}
            <div className="p-6 rounded-2xl bg-[#131316] border border-[#2a2a30] hover:border-emerald-500/50 transition-all group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Extensive Docs</h3>
                <p className="text-[#9d9da3] text-xs leading-relaxed mb-4">
                  Access well-structured syntax references spanning multiple languages and libraries.
                </p>
              </div>
              <ul className="space-y-1.5 text-[11px] text-[#b8b8bd]">
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Clean semantic references</li>
                <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Copy-paste examples</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ===== Deep Dive: Watch Area Showcase Section ===== */}
      <section className="px-6 py-24 bg-[#131316] border-t border-[#2a2a30]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          
          <div className="flex-1 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-semibold">
              <Flame className="w-3.5 h-3.5" /> Curated Video Learning
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">
              Learn Visually with the DevNexus Watch Area
            </h2>
            <p className="text-[#9d9da3] text-sm md:text-base leading-relaxed">
              Explore hours of curated video crash courses ranging from absolute beginner HTML basics to advanced web accessibility and backend paradigms. Filter content instantly by tags like JS, Python, or CSS.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#22222a] text-rose-400 mt-1"><Play className="w-4 h-4 fill-current" /></div>
                <div>
                  <h4 className="text-sm font-bold text-white">Featured Tutorials</h4>
                  <p className="text-xs text-[#9d9da3] mt-0.5">Handpicked masterclasses.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="p-1.5 rounded-lg bg-[#22222a] text-amber-400 mt-1"><Clock className="w-4 h-4" /></div>
                <div>
                  <h4 className="text-sm font-bold text-white">Flexible Filters</h4>
                  <p className="text-xs text-[#9d9da3] mt-0.5">Sort by duration & difficulty.</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onLoginClick}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg shadow-blue-900/20"
              >
                Explore Watch Library <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Watch Area Preview Mockup Card */}
          <div className="flex-1 w-full max-w-xl bg-[#16161a] border border-[#2a2a30] rounded-2xl shadow-2xl overflow-hidden p-5">
            <div className="flex items-center justify-between pb-4 border-b border-[#2a2a30] mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                <span className="ml-2 text-xs font-mono text-[#71717a]">Watch Library Preview</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-400">HD Crash Course</span>
            </div>

            {/* Featured Video Banner Mock */}
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-tr from-slate-900 via-zinc-800 to-indigo-950 p-6 border border-[#2a2a30] text-left">
              <div className="absolute top-3 left-3 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                Featured Tutorial
              </div>
              <div className="mt-8 mb-4">
                <h4 className="text-xl font-black text-white">HTML Crash Course</h4>
                <p className="text-xs text-[#a1a1aa] mt-1">Traversy Media • 5.2M views • 1:02:00</p>
              </div>
              <div className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-xs font-bold shadow-lg">
                <Play className="w-3.5 h-3.5 fill-current" /> Watch Now
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-[#131316] border border-[#2a2a30] p-3 rounded-xl">
                <p className="text-xs font-bold text-white truncate">HTML5 Semantic Tags</p>
                <p className="text-[10px] text-[#71717a] mt-0.5">Kevin Powell • 12:45</p>
              </div>
              <div className="bg-[#131316] border border-[#2a2a30] p-3 rounded-xl">
                <p className="text-xs font-bold text-white truncate">Web Accessibility (A11Y)</p>
                <p className="text-[10px] text-[#71717a] mt-0.5">Traversy Media • 35:00</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ===== Footer Section ===== */}
      <footer className="bg-[#16161a] border-t border-[#2a2a30] pt-16 pb-12 px-6 text-[#9d9da3]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="bg-blue-500 p-1.5 rounded-lg shadow-md shadow-blue-500/20">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-base tracking-wide text-white">
                DevNexus
              </span>
            </div>
            <p className="text-xs leading-relaxed text-[#71717a]">
              Empowering the next generation of software creators with browser-first tools, video watch libraries, and interactive practice.
            </p>
            <div className="flex items-center gap-4 text-[#71717a]">
              <Twitter className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
              <Github className="w-4 h-4 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Platform</h4>
            <ul className="space-y-2.5 text-xs">
              <li><button onClick={onLaunchPlayground} className="hover:text-white transition-colors">IDE Playground</button></li>
              <li><button onClick={onLoginClick} className="hover:text-white transition-colors">Watch Tutorials</button></li>
              <li><button onClick={onLoginClick} className="hover:text-white transition-colors">Skill Quizzes</button></li>
              <li><button onClick={onLoginClick} className="hover:text-white transition-colors">Flashcards</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-2.5 text-xs">
              <li><span className="hover:text-white cursor-pointer transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Documentation</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors" onClick={onLoginClick}>Getting Started</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors" onClick={onLoginClick}>Video Guides</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">Legal & Support</h4>
            <ul className="space-y-2.5 text-xs">
              <li><span className="hover:text-white cursor-pointer transition-colors" onClick={onLoginClick}>Help & Contact</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors" onClick={onLoginClick}>Privacy Policy</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors" onClick={onLoginClick}>Terms of Service</span></li>
            </ul>
          </div>

        </div>

        <div className="max-w-6xl mx-auto pt-8 border-t border-[#2a2a30] text-center text-xs text-[#71717a]">
          <p>© {new Date().getFullYear()} DevNexus Learning Engine. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}