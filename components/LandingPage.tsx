import React from 'react';
import { 
  Play, Code2, Cpu, Zap, Terminal, Sparkles, 
  ArrowRight, FileCode2, Palette, Braces, FileType2, Coffee, CheckCircle2 
} from 'lucide-react';

interface LandingPageProps {
  onLaunchPlayground: () => void;
}

const LANGUAGES = [
  { name: 'HTML5', ext: '.html', icon: FileCode2, color: '#E8734A', desc: 'Structure web pages with modern HTML tags.' },
  { name: 'CSS3', ext: '.css', icon: Palette, color: '#4B9FE8', desc: 'Style responsive layouts and smooth animations.' },
  { name: 'JavaScript', ext: '.js', icon: Braces, color: '#EFC94C', desc: 'Build interactive logic and DOM manipulation.' },
  { name: 'TypeScript', ext: '.ts', icon: FileType2, color: '#5B8DEF', desc: 'Master type-safe enterprise web development.' },
  { name: 'Python', ext: '.py', icon: Braces, color: '#6FBF73', desc: 'Run real CPython code via browser WebAssembly.' },
  { name: 'Java', ext: '.java', icon: Coffee, color: '#E85A5A', desc: 'Learn core object-oriented programming concepts.' },
];

const FEATURES = [
  {
    icon: Cpu,
    title: 'In-Browser Pyodide WASM',
    desc: 'Run Python natively inside Web Workers without sending data to an external server.'
  },
  {
    icon: Zap,
    title: 'Instant Live Previews',
    desc: 'Watch HTML, CSS, and JavaScript update automatically on your screen as you type.'
  },
  {
    icon: Terminal,
    title: 'Smart Console & Debugger',
    desc: 'Clear error counts, deduplicated logs, and log filtering keep your environment clean.'
  },
  {
    icon: Code2,
    title: 'Resizable Workspace',
    desc: 'Tailor your IDE layout with draggable panels, toggleable preview panes, and line numbers.'
  }
];

export const LandingPage: React.FC<LandingPageProps> = ({ onLaunchPlayground }) => {
  return (
    <div className="min-h-full bg-[#131316] text-[#e8e8ea] font-sans overflow-y-auto custom-scrollbar">
      
      {/* ===== Hero Section ===== */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#232328] border border-[#2a2a30] text-[12px] font-medium text-[#7F77DD] mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>DevNexus Playground Phase 2 Active</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight">
          Master Coding Hands-On, <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1D9E75] via-[#7F77DD] to-[#4B9FE8]">
            Right in Your Browser.
          </span>
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#9d9da3] max-w-2xl leading-relaxed">
          Zero installation required. Write web applications, run Python WebAssembly routines, and debug code instantly in a professional multi-language IDE.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
          <button
            onClick={onLaunchPlayground}
            className="flex items-center gap-2 bg-[#1D9E75] hover:bg-[#1B8F69] transition-all text-[#04342C] text-sm font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-[#1D9E75]/20"
          >
            <Play className="w-4 h-4" fill="currentColor" />
            Launch IDE Playground
          </button>
          
          <a
            href="#languages"
            className="flex items-center gap-2 bg-[#1c1c21] hover:bg-[#232328] border border-[#2a2a30] transition-colors text-sm font-medium px-6 py-3.5 rounded-xl text-[#d4d4d8]"
          >
            Explore Languages
            <ArrowRight className="w-4 h-4 text-[#6b6b72]" />
          </a>
        </div>

        {/* Hero IDE Teaser Graphic */}
        <div className="mt-14 w-full max-w-4xl bg-[#1c1c21] border border-[#2a2a30] rounded-2xl shadow-2xl overflow-hidden text-left">
          <div className="flex items-center justify-between px-4 py-3 bg-[#17171c] border-b border-[#2a2a30]">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#E85A5A]/80"></div>
              <div className="w-3 h-3 rounded-full bg-[#EFC94C]/80"></div>
              <div className="w-3 h-3 rounded-full bg-[#6FBF73]/80"></div>
              <span className="ml-2 text-[12px] font-mono text-[#6b6b72]">script.py — DevNexus Environment</span>
            </div>
            <button 
              onClick={onLaunchPlayground}
              className="text-[11px] font-mono bg-[#1D9E75]/20 text-[#6FBF73] px-2.5 py-1 rounded hover:bg-[#1D9E75]/30 transition-colors"
            >
              ▶ Click to Run
            </button>
          </div>
          <div className="p-5 font-mono text-xs sm:text-sm text-[#b8b8bd] bg-[#131316] leading-relaxed">
            <span className="text-[#6b6b72]"># Instant Python WASM execution</span><br />
            <span className="text-[#7F77DD]">def</span> <span className="text-[#4B9FE8]">welcome_developer</span>(name):<br />
            &nbsp;&nbsp;&nbsp;&nbsp;return <span className="text-[#6FBF73]">f"Ready to code, {'{name}'}!"</span><br /><br />
            print(welcome_developer(<span className="text-[#6FBF73]" >"DevNexus Student"</span>))
          </div>
        </div>
      </section>

      {/* ===== Languages Showcase ===== */}
      <section id="languages" className="max-w-6xl mx-auto px-6 py-16 border-t border-[#2a2a30]/60">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Supported Technologies</h2>
          <p className="text-[#6b6b72] text-sm mt-2">Switch extensions dynamically inside the workspace at any time.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LANGUAGES.map((lang, idx) => {
            const Icon = lang.icon;
            return (
              <div 
                key={idx}
                className="bg-[#1c1c21] border border-[#2a2a30] hover:border-[#33333a] p-5 rounded-xl transition-all flex flex-col justify-between group cursor-pointer"
                onClick={onLaunchPlayground}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <Icon className="w-5 h-5" style={{ color: lang.color }} />
                      <span className="font-semibold text-sm">{lang.name}</span>
                    </div>
                    <span className="text-[11px] font-mono bg-[#131316] text-[#6b6b72] px-2 py-0.5 rounded border border-[#2a2a30]">
                      {lang.ext}
                    </span>
                  </div>
                  <p className="text-xs text-[#8e8e96] leading-relaxed">{lang.desc}</p>
                </div>
                
                <div className="mt-5 flex items-center gap-1 text-xs text-[#1D9E75] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Open in Playground</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== Key Features Section ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16 border-t border-[#2a2a30]/60">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold">Engineered for Seamless Learning</h2>
          <p className="text-[#6b6b72] text-sm mt-2">Everything you need to practice and build projects without friction.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div key={idx} className="bg-[#1a1a1f] border border-[#2a2a30] p-6 rounded-xl flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#232328] text-[#7F77DD] shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm mb-1">{feat.title}</h3>
                  <p className="text-xs text-[#8e8e96] leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ===== Call to Action Banner ===== */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-[#1c1c21] via-[#232328] to-[#1c1c21] border border-[#2a2a30] rounded-2xl p-8 sm:p-12 text-center flex flex-col items-center">
          <h2 className="text-2xl sm:text-3xl font-bold">Ready to Start Writing Code?</h2>
          <p className="text-[#9d9da3] text-sm mt-3 max-w-xl">
            Launch the interactive DevNexus IDE right now and start experimenting with HTML, CSS, JavaScript, TypeScript, and Python.
          </p>
          <button
            onClick={onLaunchPlayground}
            className="mt-6 flex items-center gap-2 bg-[#1D9E75] hover:bg-[#1B8F69] transition-all text-[#04342C] text-sm font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-[#1D9E75]/20"
          >
            <Play className="w-4 h-4" fill="currentColor" />
            Open IDE Playground
          </button>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="border-t border-[#2a2a30] py-8 text-center text-xs text-[#5a5a62]">
        <p>© 2026 DevNexus Learning Engine. Built for modern developer education.</p>
      </footer>
    </div>
  );
};