import React, { useEffect, useState } from 'react';
import { 
  Code2, 
  ArrowRight,
  LogIn,
  Zap,
  Brain,
  PlayCircle,
  BarChart,
  Rocket,
  Terminal,
  Cpu,
  Layers,
  Globe,
  Tv,
  CheckCircle2,
  Clock,
  Play,
  Flame,
  Twitter,
  Instagram,
  Github,
  Plus,
  Users
} from 'lucide-react';

interface LandingPageProps {
  onLaunchPlayground: () => void;
  onLoginClick: () => void;
}

export function LandingPage({ onLaunchPlayground, onLoginClick }: LandingPageProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0b0f1a] text-[#e8e8ea] flex flex-col font-sans selection:bg-blue-500/30 overflow-x-hidden relative">
      
      {/* Inline Styles for Premium Animations & Native Accordion */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(-3deg); }
          50% { transform: translateY(-15px) rotate(-2deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-float-delayed { animation: float-reverse 7s ease-in-out infinite; }
        .animate-gradient-x { background-size: 200% auto; animation: gradient-x 4s linear infinite; }
        .animate-blink { animation: blink 1s step-end infinite; }
        
        .bg-noise {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
        }

        /* Hide default details marker */
        details > summary { list-style: none; }
        details > summary::-webkit-details-marker { display: none; }
      `}} />

      {/* Global Background Glows & Noise */}
      <div className="fixed inset-0 bg-noise z-0 mix-blend-overlay pointer-events-none"></div>
      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute top-[20%] right-[-10%] w-[30vw] h-[30vw] rounded-full bg-purple-600/10 blur-[120px] pointer-events-none z-0"></div>

      {/* ===== Glassmorphism Navigation ===== */}
      <nav className={`flex items-center justify-between px-6 py-4 sticky top-0 z-50 transition-all duration-700 border-b border-white/5 bg-[#0b0f1a]/70 backdrop-blur-xl ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="flex items-center gap-3 select-none cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-1.5 rounded-lg shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-shadow">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-lg tracking-wide text-white">
              Codectionary
            </span>
          </div>
          {/* Small Beta Badge added here */}
          <span className="text-[10px] bg-blue-500/10 text-blue-400 font-bold px-2 py-0.5 rounded-full border border-blue-500/20 uppercase tracking-widest">
            Beta
          </span>
        </div>
        
        <div className="flex items-center gap-6">
          <button onClick={onLaunchPlayground} className="hidden sm:flex items-center text-sm font-medium text-[#94a3b8] hover:text-white transition-colors">
            Playground
          </button>
          <button onClick={onLoginClick} className="hidden sm:flex items-center text-sm font-medium text-[#94a3b8] hover:text-white transition-colors">
            Courses
          </button>
          <button onClick={onLoginClick} className="flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all active:scale-95 backdrop-blur-sm">
            <LogIn className="w-4 h-4" />
            Sign In
          </button>
        </div>
      </nav>

      {/* ===== Premium 2-Column Hero Section ===== */}
      <section className="relative z-10 flex-1 flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 pt-12 pb-24 gap-16 lg:gap-8 min-h-[85vh]">
        <div className={`flex-1 flex flex-col items-start text-left transition-all duration-1000 delay-100 ${mounted ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 text-indigo-300 text-xs font-semibold mb-6 border border-indigo-500/20 shadow-[0_0_20px_rgba(99,102,241,0.1)] backdrop-blur-sm">
            <Rocket className="w-3.5 h-3.5" />
            <span>The Developer Learning Platform</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tighter text-white mb-6 leading-[1.1]">
            Learn to Code by <br />
            <span className="animate-gradient-x bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Actually Building
            </span>
          </h1>
          
          <p className="text-lg text-[#94a3b8] max-w-xl mb-10 leading-relaxed font-medium">
            Stop watching tutorials. Start building real projects in a live coding environment with instant feedback, guided challenges, and interactive lessons.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <button onClick={onLaunchPlayground} className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-black hover:bg-gray-100 font-bold rounded-full transition-all hover:scale-[1.03] shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] active:scale-95 group">
                Start Coding Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <span className="text-[11px] text-[#64748b] text-center font-medium">No signup required • Free to start</span>
            </div>
            
            <div className="flex flex-col gap-2 w-full sm:w-auto">
              <button onClick={onLoginClick} className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-[#1e293b]/50 hover:bg-[#1e293b] text-white font-bold rounded-full transition-all border border-white/10 active:scale-95 backdrop-blur-md">
                Explore Courses
              </button>
              <span className="text-[11px] text-transparent text-center select-none">Spacer</span>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 w-full max-w-md">
            <p className="text-[11px] font-bold text-[#475569] uppercase tracking-wider mb-4">
              Trusted by developers learning at
            </p>
            <div className="flex items-center gap-6 text-[#64748b] font-medium text-sm">
              <span className="flex items-center gap-1.5"><Terminal className="w-4 h-4" /> Bootcamps</span>
              <span className="flex items-center gap-1.5"><Brain className="w-4 h-4" /> Self-Taught</span>
              <span className="flex items-center gap-1.5"><Code2 className="w-4 h-4" /> Manchester Students</span>
            </div>
          </div>
        </div>

        <div className={`flex-1 w-full max-w-lg relative transition-all duration-1000 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-3xl transform rotate-[-3deg] rounded-3xl"></div>
          
          <div className="animate-float relative w-full bg-[#0f172a] border border-[#1e293b] rounded-2xl shadow-2xl shadow-black/50 overflow-hidden flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 bg-[#0b0f1a] border-b border-[#1e293b]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ef4444] shadow-[0_0_10px_rgba(239,68,68,0.4)]"></div>
                <div className="w-3 h-3 rounded-full bg-[#f59e0b] shadow-[0_0_10px_rgba(245,158,11,0.4)]"></div>
                <div className="w-3 h-3 rounded-full bg-[#10b981] shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
              </div>
              <div className="flex gap-2 text-xs font-mono font-medium text-[#64748b]">
                <span className="px-3 py-1 bg-[#1e293b] rounded-md text-[#e2e8f0]">index.js</span>
              </div>
            </div>
            <div className="p-6 font-mono text-sm leading-relaxed text-[#94a3b8] bg-[#0f172a] flex-1">
              <p><span className="text-[#c678dd]">function</span> <span className="text-[#61afef]">greetDeveloper</span>() {'{'}</p>
              <p className="pl-4"><span className="text-[#c678dd]">return</span> <span className="text-[#98c379]">'Hello, Future Dev!'</span>;</p>
              <p>{'}'}</p>
              <p className="mt-4"><span className="text-[#e5c07b]">console</span>.<span className="text-[#61afef]">log</span>(<span className="text-[#61afef]">greetDeveloper</span>());<span className="animate-blink font-bold text-white ml-0.5">|</span></p>
            </div>
            <div className="p-4 bg-[#020617] border-t border-[#1e293b] font-mono text-xs">
              <div className="text-[#64748b] mb-1 uppercase tracking-wider text-[10px] font-bold">Terminal Output</div>
              <div className="text-[#10b981] flex items-center gap-2">
                <ArrowRight className="w-3 h-3" /> Hello, Future Dev!
              </div>
            </div>
          </div>

          <div className="absolute -right-8 -top-8 p-3 bg-[#1e293b] border border-white/10 rounded-xl shadow-xl animate-float-delayed backdrop-blur-md">
            <Zap className="w-6 h-6 text-yellow-400" />
          </div>
          <div className="absolute -left-6 bottom-12 p-3 bg-[#1e293b] border border-white/10 rounded-xl shadow-xl animate-float backdrop-blur-md" style={{ animationDelay: '2s' }}>
            <span className="font-mono text-sm font-bold text-blue-400">{'</>'}</span>
          </div>
        </div>
      </section>

      {/* ===== About Us Section ===== */}
      <section className="relative z-10 py-24 border-t border-white/5 bg-[#0b0f1a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-white/5 rounded-2xl mb-6 border border-white/10">
            <Users className="w-6 h-6 text-indigo-400" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
            Built by Developers, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-100">For the Next Generation</span>
          </h2>
          <p className="text-lg md:text-xl text-[#94a3b8] leading-relaxed">
            We started Codectionary because traditional video tutorials felt entirely disconnected from real-world development. You learn to code by typing, breaking things, and fixing them. Our mission is to bridge the gap between learning and doing by providing a unified platform where documentation, code execution, and guided instruction live in a single, seamless environment.
          </p>
        </div>
      </section>

      {/* ===== IDE Feature Showcase ===== */}
      <section className="relative z-10 py-24 border-t border-white/5 bg-[#0f172a]/50">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20">
              <Cpu className="w-3.5 h-3.5" /> Live Coding
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              An IDE Built for Speed and Experimentation
            </h2>
            <p className="text-[#94a3b8] text-lg leading-relaxed">
              Whether you are practicing responsive CSS layouts or debugging Python algorithms, our integrated playground gives you a professional-grade environment right inside your browser tab.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20"><Globe className="w-5 h-5" /></div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Live Web Preview</h4>
                  <p className="text-xs text-[#64748b]">Render HTML, CSS, and JS instantly as you type.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20"><Layers className="w-5 h-5" /></div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Multi-File Layouts</h4>
                  <p className="text-xs text-[#64748b]">Organize your scripts and styles like a professional.</p>
                </div>
              </div>
            </div>
          </div>

          {/* IDE Mockup Box */}
          <div className="flex-1 w-full max-w-2xl bg-[#0b0f1a] border border-[#1e293b] rounded-2xl shadow-2xl overflow-hidden shadow-blue-900/20">
            <div className="flex items-center justify-between px-4 py-3 bg-[#020617] border-b border-[#1e293b]">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ef4444]"></div>
                <div className="w-3 h-3 rounded-full bg-[#f59e0b]"></div>
                <div className="w-3 h-3 rounded-full bg-[#10b981]"></div>
                <span className="ml-3 text-xs font-mono text-[#64748b]">Workspace</span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded bg-blue-500/10 text-blue-400">Active</span>
            </div>
            <div className="grid grid-cols-2">
              <div className="p-5 font-mono text-xs text-[#94a3b8] bg-[#0f172a] border-r border-[#1e293b] leading-loose">
                <p><span className="text-blue-400">&lt;</span><span className="text-pink-400">div</span> <span className="text-yellow-300">class</span>=<span className="text-emerald-300">"card"</span><span className="text-blue-400">&gt;</span></p>
                <p className="pl-4"><span className="text-blue-400">&lt;</span><span className="text-pink-400">h1</span><span className="text-blue-400">&gt;</span>Welcome<span className="text-blue-400">&lt;/</span><span className="text-pink-400">h1</span><span className="text-blue-400">&gt;</span></p>
                <p><span className="text-blue-400">&lt;/</span><span className="text-pink-400">div</span><span className="text-blue-400">&gt;</span></p>
              </div>
              <div className="p-5 bg-white flex items-center justify-center">
                <div className="p-4 rounded-xl shadow-lg border border-gray-100 bg-gray-50 text-center w-full">
                  <h1 className="text-xl font-black text-gray-900">Welcome</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Watch Feature Showcase ===== */}
      <section className="relative z-10 py-24 border-t border-white/5 bg-[#0b0f1a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1 space-y-8 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-bold uppercase tracking-wider border border-rose-500/20">
              <Flame className="w-3.5 h-3.5" /> Video Learning
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Watch. Learn. Apply.
            </h2>
            <p className="text-[#94a3b8] text-lg leading-relaxed">
              Explore hours of curated video crash courses ranging from absolute beginner HTML basics to advanced backend paradigms. Seamlessly jump from the video player directly into a code editor to practice what you just learned.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20"><Tv className="w-5 h-5" /></div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Featured Masterclasses</h4>
                  <p className="text-xs text-[#64748b]">Handpicked tutorials by industry experts.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20"><Clock className="w-5 h-5" /></div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Paced for You</h4>
                  <p className="text-xs text-[#64748b]">Filter by duration, topic, and difficulty.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Watch Area Preview Mockup */}
          <div className="flex-1 w-full max-w-2xl bg-[#0f172a] border border-[#1e293b] rounded-2xl shadow-2xl overflow-hidden p-6 shadow-rose-900/10">
            <div className="relative rounded-xl overflow-hidden bg-gradient-to-tr from-[#020617] via-slate-900 to-indigo-950 p-8 border border-white/10 text-left mb-6 group cursor-pointer">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-10"></div>
              <div className="absolute top-4 left-4 bg-rose-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider z-20">
                Crash Course
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 text-white fill-white ml-1" />
                </div>
              </div>
              <div className="mt-16 mb-2 relative z-20">
                <h4 className="text-2xl font-black text-white">Advanced JavaScript</h4>
                <p className="text-xs text-gray-300 mt-1">2.4M views • 2:15:00</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#0b0f1a] border border-[#1e293b] p-4 rounded-xl">
                <p className="text-sm font-bold text-white truncate">React Fundamentals</p>
                <p className="text-[11px] text-[#64748b] mt-1">45:00</p>
              </div>
              <div className="bg-[#0b0f1a] border border-[#1e293b] p-4 rounded-xl">
                <p className="text-sm font-bold text-white truncate">CSS Flexbox & Grid</p>
                <p className="text-[11px] text-[#64748b] mt-1">12:30</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Interactive Features Grid ===== */}
      <section className="relative z-10 px-6 py-24 bg-[#0f172a]/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">More than just tutorials</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-6 rounded-2xl bg-[#0b0f1a] border border-[#1e293b] hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/10 text-blue-400 rounded-xl flex items-center justify-center mb-6"><Zap className="w-6 h-6" /></div>
              <h3 className="text-lg font-bold text-white mb-2">Instant Environment</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">Zero configuration. Jump straight into a live, browser-based IDE.</p>
            </div>
            <div className="group p-6 rounded-2xl bg-[#0b0f1a] border border-[#1e293b] hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-purple-500/10 text-purple-400 rounded-xl flex items-center justify-center mb-6"><Brain className="w-6 h-6" /></div>
              <h3 className="text-lg font-bold text-white mb-2">Quizzes & Cards</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">Solidify your memory with active-recall flashcards and skill assessments.</p>
            </div>
            <div className="group p-6 rounded-2xl bg-[#0b0f1a] border border-[#1e293b] hover:border-rose-500/50 hover:shadow-[0_0_30px_rgba(244,63,94,0.15)] hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-rose-500/10 text-rose-400 rounded-xl flex items-center justify-center mb-6"><PlayCircle className="w-6 h-6" /></div>
              <h3 className="text-lg font-bold text-white mb-2">Extensive Docs</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">Access well-structured syntax references spanning multiple languages.</p>
            </div>
            <div className="group p-6 rounded-2xl bg-[#0b0f1a] border border-[#1e293b] hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:-translate-y-2 transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-400 rounded-xl flex items-center justify-center mb-6"><BarChart className="w-6 h-6" /></div>
              <h3 className="text-lg font-bold text-white mb-2">Progress Tracking</h3>
              <p className="text-[#64748b] text-sm leading-relaxed">Visualize your learning journey with detailed stats and skill mapping.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== F.A.Q Section ===== */}
      <section className="relative z-10 py-24 border-t border-white/5 bg-[#0b0f1a]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-12 text-center tracking-tight">Frequently Asked Questions</h2>
          <div className="space-y-4">
            
            <details className="group bg-[#0f172a] border border-[#1e293b] rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white outline-none">
                Do I need to install anything on my computer?
                <Plus className="w-5 h-5 text-[#64748b] group-open:rotate-45 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-[#94a3b8] text-sm leading-relaxed border-t border-[#1e293b] pt-4 mt-2">
                Not at all. Codectionary runs entirely in your web browser. Our built-in IDE playground handles the compiling and rendering for HTML, CSS, JavaScript, and more natively without any downloads or configuration.
              </div>
            </details>

            <details className="group bg-[#0f172a] border border-[#1e293b] rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white outline-none">
                Is Codectionary free to use?
                <Plus className="w-5 h-5 text-[#64748b] group-open:rotate-45 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-[#94a3b8] text-sm leading-relaxed border-t border-[#1e293b] pt-4 mt-2">
                Yes, our core documentation, basic IDE playground, and introductory courses are completely free. We believe in accessible education for all developers.
              </div>
            </details>

            <details className="group bg-[#0f172a] border border-[#1e293b] rounded-2xl overflow-hidden [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between cursor-pointer p-6 font-bold text-white outline-none">
                Can I track my progress?
                <Plus className="w-5 h-5 text-[#64748b] group-open:rotate-45 transition-transform" />
              </summary>
              <div className="px-6 pb-6 text-[#94a3b8] text-sm leading-relaxed border-t border-[#1e293b] pt-4 mt-2">
                Absolutely. By creating a free account, you unlock progress tracking, allowing you to save your quiz scores, bookmark favorite tutorials, and monitor your learning journey over time.
              </div>
            </details>

          </div>
        </div>
      </section>

      {/* ===== Comprehensive Footer ===== */}
      <footer className="relative z-10 bg-[#020617] border-t border-white/5 pt-20 pb-12 px-6 text-[#94a3b8]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6 md:col-span-1">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-1.5 rounded-lg">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-extrabold text-base tracking-wide text-white">
                Codectionary
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[#64748b]">
              The elite developer learning engine. Bridging the gap between reading documentation and actually writing code.
            </p>
            <div className="flex items-center gap-5 text-[#64748b]">
              <Twitter className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
              <Github className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-6">Platform</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><button onClick={onLaunchPlayground} className="hover:text-white transition-colors">IDE Playground</button></li>
              <li><button onClick={onLoginClick} className="hover:text-white transition-colors">Watch Tutorials</button></li>
              <li><button onClick={onLoginClick} className="hover:text-white transition-colors">Skill Quizzes</button></li>
              <li><button onClick={onLoginClick} className="hover:text-white transition-colors">Active Flashcards</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-6">Resources</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><span className="hover:text-white cursor-pointer transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Documentation</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors" onClick={onLoginClick}>Getting Started</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors" onClick={onLoginClick}>Developer Blog</span></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-6">Legal & Support</h4>
            <ul className="space-y-3 text-sm font-medium">
              <li><span className="hover:text-white cursor-pointer transition-colors" onClick={onLoginClick}>Help & Contact</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors" onClick={onLoginClick}>Privacy Policy</span></li>
              <li><span className="hover:text-white cursor-pointer transition-colors" onClick={onLoginClick}>Terms of Service</span></li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-[#1e293b] text-left sm:text-center text-sm font-medium text-[#64748b] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Codectionary Inc. All rights reserved. <span className="ml-2 text-xs opacity-60 font-mono">v1.0.0-beta</span></p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            All systems operational
          </div>
        </div>
      </footer>

    </div>
  );
}