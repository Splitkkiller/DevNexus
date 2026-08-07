import React, { useState } from 'react';
import { 
  Code2, 
  Sparkles, 
  Terminal, 
  Cpu, 
  Zap, 
  ArrowRight, 
  Play,
  Users,
  Globe,
  Layers,
  Tv,
  Clock,
  Plus,
  Minus,
  CheckCircle2,
  Video
} from 'lucide-react';

interface LandingPageProps {
  onLaunchPlayground: () => void;
  onLoginClick: () => void;
  onNavigate: (view: string) => void;
}

export function LandingPage({ onLaunchPlayground, onLoginClick, onNavigate }: LandingPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqData = [
    {
      question: "Do I need to install anything on my computer?",
      answer: "No installation required! Codectionary runs completely inside your modern web browser using WebAssembly and lightweight cloud sandboxes."
    },
    {
      question: "Is Codectionary free to use?",
      answer: "Yes, Codectionary offers free access to all core documentation, interactive exercises, and the browser-based IDE playground."
    },
    {
      question: "Can I track my progress?",
      answer: "Absolutely. When you create a free account, your completed challenges, quiz scores, active recall stats, and custom code snippets are automatically saved."
    }
  ];

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-blue-500 selection:text-white">
      {/* Header / Navigation */}
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

      {/* Hero Section with Interactive Editor Graphic */}
      <section className="relative pt-16 pb-20 md:pt-28 md:pb-28 px-6 overflow-hidden border-b border-white/5">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-semibold text-blue-400 shadow-inner">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>The Developer Learning Platform</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-white">
              Learn to Code by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Actually Building</span>
            </h1>

            <p className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Stop watching tutorials. Start building real projects in a live coding environment with instant feedback, guided challenges, and interactive lessons.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button 
                onClick={onLaunchPlayground}
                className="w-full sm:w-auto px-8 py-4 bg-white text-slate-950 hover:bg-slate-200 font-bold rounded-2xl shadow-xl transition-all flex items-center justify-center gap-2 group"
              >
                <span>Start Coding Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => onNavigate('docs')}
                className="w-full sm:w-auto px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-800 font-bold rounded-2xl transition-all"
              >
                Explore Courses
              </button>
            </div>

            <p className="text-xs text-slate-500 font-medium pt-1">
              No signup required • Free to start
            </p>
          </div>

          {/* Code Editor Hero Graphic */}
          <div className="lg:col-span-5 relative">
            <div className="bg-[#0a0f1d] border border-slate-800 rounded-2xl p-5 shadow-2xl relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-md border border-slate-800">
                  <span>index.js</span>
                  <Zap className="w-3 h-3 text-yellow-400" />
                </div>
              </div>

              <div className="font-mono text-sm leading-relaxed space-y-2">
                <p><span className="text-purple-400">function</span> <span className="text-blue-300">greetDeveloper</span>() &#123;</p>
                <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-emerald-300">'Hello, Future Dev!'</span>;</p>
                <p>&#125;</p>
                <p className="pt-2"><span className="text-purple-400">console</span>.<span className="text-blue-300">log</span>(greetDeveloper()); <span className="animate-pulse">|</span></p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 font-mono text-xs text-slate-400">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest block mb-1">Terminal Output</span>
                <p className="text-emerald-400 flex items-center gap-1.5">
                  <span>&rarr;</span> Hello, Future Dev!
                </p>
              </div>

              <div className="absolute -left-3 bottom-12 p-3 bg-blue-600/20 border border-blue-500/40 backdrop-blur-md rounded-xl text-blue-400 shadow-xl">
                <Code2 className="w-5 h-5" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Built By Developers Section */}
      <section className="py-20 px-6 border-b border-white/5 bg-[#020613]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-2xl flex items-center justify-center mx-auto text-blue-400 shadow-inner">
            <Users className="w-6 h-6" />
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Built by Developers,<br />
            <span className="text-slate-400">For the Next Generation</span>
          </h2>

          <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-3xl mx-auto">
            We started Codectionary because traditional video tutorials felt entirely disconnected from real-world development. You learn to code by typing, breaking things, and fixing them. Our mission is to bridge the gap between learning and doing by providing a unified platform where documentation, code execution, and guided instruction live in a single, seamless environment.
          </p>
        </div>
      </section>

      {/* Feature 1: An IDE Built for Speed */}
      <section className="py-20 md:py-28 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-xs font-bold uppercase tracking-wider text-blue-400">
              <Terminal className="w-3.5 h-3.5" />
              <span>Live Coding</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              An IDE Built for Speed and Experimentation
            </h2>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Whether you are practicing responsive CSS layouts or debugging Python algorithms, our integrated playground gives you a professional-grade environment right inside your browser tab.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-blue-400 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Live Web Preview</h4>
                  <p className="text-xs text-slate-400 mt-1">Render HTML, CSS, and JS instantly as you type.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-purple-400 shrink-0">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Multi-File Layouts</h4>
                  <p className="text-xs text-slate-400 mt-1">Organize your scripts and styles like a professional.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Showcase: Editor Split Screen */}
          <div className="lg:col-span-6">
            <div className="bg-[#0b0f19] border border-slate-800 rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                  <span className="text-xs text-slate-400 ml-2 font-mono">Workspace</span>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded">Active</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 min-h-[200px]">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 font-mono text-xs leading-relaxed">
                  <p className="text-slate-400">&lt;<span className="text-pink-400">div</span> <span className="text-purple-300">class</span>=<span className="text-emerald-300">"card"</span>&gt;</p>
                  <p className="pl-4 text-slate-400">&lt;<span className="text-pink-400">h1</span>&gt;Welcome&lt;/<span className="text-pink-400">h1</span>&gt;</p>
                  <p className="text-slate-400">&lt;/<span className="text-pink-400">div</span>&gt;</p>
                </div>

                <div className="bg-white rounded-xl flex items-center justify-center p-6 text-slate-900 shadow-inner">
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl shadow-md text-center">
                    <h3 className="font-bold text-lg text-slate-900">Welcome</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Feature 2: Watch. Learn. Apply. (Video Section) */}
      <section className="py-20 md:py-28 px-6 border-b border-white/5 bg-[#020613]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Mock Video Player Graphic */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-2xl space-y-4">
              <div className="bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 rounded-xl p-6 border border-slate-800 relative overflow-hidden flex flex-col justify-between min-h-[220px]">
                <div className="flex justify-between items-start">
                  <span className="px-2.5 py-1 bg-pink-500/20 text-pink-400 border border-pink-500/30 text-[10px] font-bold uppercase rounded">
                    Crash Course
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-white">Advanced JavaScript</h3>
                  <p className="text-xs text-slate-400 mt-1">2.4M views • 2:15:00</p>
                </div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center text-white cursor-pointer hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 font-medium text-xs">
                <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl space-y-1">
                  <p className="text-white font-bold">React Fundamentals</p>
                  <p className="text-slate-500">45:00</p>
                </div>
                <div className="bg-slate-950/80 border border-slate-800 p-3 rounded-xl space-y-1">
                  <p className="text-white font-bold">CSS Flexbox & Grid</p>
                  <p className="text-slate-500">12:30</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-pink-500/10 border border-pink-500/20 text-xs font-bold uppercase tracking-wider text-pink-400">
              <Video className="w-3.5 h-3.5" />
              <span>Video Learning</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Watch. Learn. Apply.
            </h2>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              Explore hours of curated video crash courses ranging from absolute beginner HTML basics to advanced backend paradigms. Seamlessly jump from the video player directly into a code editor to practice what you just learned.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-pink-400 shrink-0">
                  <Tv className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Featured Masterclasses</h4>
                  <p className="text-xs text-slate-400 mt-1">Handpicked tutorials by industry experts.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-2.5 bg-slate-900 border border-slate-800 rounded-xl text-yellow-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Paced for You</h4>
                  <p className="text-xs text-slate-400 mt-1">Filter by duration, topic, and difficulty.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-28 px-6 border-b border-white/5">
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

      {/* Interactive FAQ Section */}
      <section className="py-20 px-6 border-b border-white/5 bg-[#020613]">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center text-white">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={index} 
                className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left font-bold text-white text-base md:text-lg flex justify-between items-center gap-4 hover:text-blue-400 transition-colors"
                >
                  <span>{item.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-blue-400 shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-sm md:text-base text-slate-400 border-t border-slate-800/50 pt-4 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-6">
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