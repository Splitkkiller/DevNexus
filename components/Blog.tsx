import React, { useState } from 'react';
import { ThemeColors } from '../types';
import { 
  BookOpen, 
  History, 
  Calendar, 
  Tag, 
  User, 
  Sparkles, 
  CheckCircle2, 
  Bug, 
  Zap, 
  ArrowRight,
  Rocket
} from 'lucide-react';

interface BlogProps {
  themeColors: ThemeColors;
}

type TabType = 'blog' | 'changelog';

interface BlogPost {
  id: string;
  title: string;
  summary: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  tagColor: string;
}

interface ChangelogEntry {
  version: string;
  date: string;
  isBeta?: boolean;
  highlights: string[];
  features?: string[];
  improvements?: string[];
  fixes?: string[];
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Introducing Codectionary Beta: Learn by Building',
    summary: 'Why we built Codectionary and how our live browser playground is bridging the gap between watching tutorials and writing real code.',
    date: 'August 2026',
    author: 'Codectionary Team',
    readTime: '4 min read',
    category: 'Product Updates',
    tagColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20'
  },
  {
    id: '2',
    title: 'Mastering JavaScript Closures and Scope in 2026',
    summary: 'A deep dive into execution contexts, lexical environment, and practical everyday use cases for closures in modern Web Development.',
    date: 'July 2026',
    author: 'Engineering',
    readTime: '7 min read',
    category: 'Tutorials',
    tagColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20'
  },
  {
    id: '3',
    title: 'Why Browser-Based Code Execution is the Future of Tech Docs',
    summary: 'Static code blocks are dead. Here is how WebAssembly and client-side runtimes like Pyodide are transforming developer documentation.',
    date: 'June 2026',
    author: 'Architecture',
    readTime: '5 min read',
    category: 'Deep Dives',
    tagColor: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
  }
];

const CHANGELOG_ENTRIES: ChangelogEntry[] = [
  {
    version: 'v1.0.0-beta',
    date: 'August 2026',
    isBeta: true,
    highlights: [
      'Official public Beta launch of the Codectionary Developer Learning Platform!',
      'Integrated live IDE Playground with HTML, CSS, JavaScript, TypeScript, Python, and Java support.'
    ],
    features: [
      'Interactive IDE Playground with multi-file support and instant Web preview.',
      'Active-Recall Flashcards and interactive Skill Quizzes with streak tracking.',
      'AI Tutor powered by Gemini for instant code debugging and guidance.',
      'Vercel Web Analytics integration for tracking user engagement.'
    ],
    improvements: [
      'Added sleek Beta badges across top navigation bars.',
      'Integrated Pyodide WebAssembly worker for client-side Python execution.',
      'Enhanced Mobile Drawer menu and glassmorphism styling.'
    ],
    fixes: [
      'Resolved iframe preview reloading bugs in interactive documentation cards.',
      'Fixed TypeScript transpile syntax error handling in live editor.'
    ]
  },
  {
    version: 'v0.9.0-alpha',
    date: 'July 2026',
    highlights: [
      'Initial internal test release for Manchester developer students.'
    ],
    features: [
      'Added dark/light theme switching capability.',
      'Built core syntax reference library for HTML5, CSS3, and ES6+ JavaScript.'
    ],
    improvements: [
      'Optimized Monaco/Editor layout responsiveness on smaller screen resolutions.'
    ]
  }
];

export const Blog: React.FC<BlogProps> = ({ themeColors }) => {
  const [activeTab, setActiveTab] = useState<TabType>('blog');

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className={`p-6 border-b ${themeColors.sidebarBorder} flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4`}>
        <div className="flex items-center gap-4">
          <div className="p-3 bg-brand-600/20 rounded-xl">
            {activeTab === 'blog' ? (
              <BookOpen className="w-8 h-8 text-brand-500" />
            ) : (
              <History className="w-8 h-8 text-indigo-400" />
            )}
          </div>
          <div>
            <h1 className={`text-2xl font-bold ${themeColors.text}`}>
              {activeTab === 'blog' ? 'Developer Blog' : 'Changelog'}
            </h1>
            <p className={themeColors.textSecondary}>
              {activeTab === 'blog' 
                ? 'Insights, tutorials, and technical updates from the Codectionary team'
                : 'See what is new, improved, and fixed in Codectionary'}
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className={`flex ${themeColors.card} p-1 rounded-xl border ${themeColors.cardBorder} self-stretch sm:self-auto`}>
          <button
            onClick={() => setActiveTab('blog')}
            className={`flex-1 sm:flex-initial px-5 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
              activeTab === 'blog' 
                ? 'bg-blue-600 text-white shadow-md' 
                : `${themeColors.textSecondary} hover:${themeColors.text}`
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" /> Blog
          </button>
          <button
            onClick={() => setActiveTab('changelog')}
            className={`flex-1 sm:flex-initial px-5 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 ${
              activeTab === 'changelog' 
                ? 'bg-indigo-600 text-white shadow-md' 
                : `${themeColors.textSecondary} hover:${themeColors.text}`
            }`}
          >
            <History className="w-3.5 h-3.5" /> Changelog
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          
          {/* BLOG TAB CONTENT */}
          {activeTab === 'blog' && (
            <div className="space-y-8">
              {BLOG_POSTS.map(post => (
                <article 
                  key={post.id}
                  className={`${themeColors.card} border ${themeColors.cardBorder} p-6 sm:p-8 rounded-2xl shadow-sm hover:border-blue-500/30 transition-all duration-300 group cursor-pointer`}
                >
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${post.tagColor}`}>
                      {post.category}
                    </span>
                    <span className={`text-xs ${themeColors.textSecondary} flex items-center gap-1.5`}>
                      <Calendar className="w-3.5 h-3.5" /> {post.date}
                    </span>
                    <span className={`text-xs ${themeColors.textSecondary}`}>•</span>
                    <span className={`text-xs ${themeColors.textSecondary}`}>{post.readTime}</span>
                  </div>

                  <h2 className={`text-2xl font-bold ${themeColors.text} mb-3 group-hover:text-blue-400 transition-colors`}>
                    {post.title}
                  </h2>
                  <p className={`${themeColors.textSecondary} leading-relaxed mb-6 text-sm sm:text-base`}>
                    {post.summary}
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
                      <User className="w-3.5 h-3.5" /> {post.author}
                    </div>
                    <div className="flex items-center gap-1 text-xs font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* CHANGELOG TAB CONTENT */}
          {activeTab === 'changelog' && (
            <div className="relative border-l-2 border-indigo-500/20 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
              {CHANGELOG_ENTRIES.map((entry, idx) => (
                <div key={idx} className="relative group">
                  {/* Timeline Dot */}
                  <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-[#0b0f1a] flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  </div>

                  {/* Header Box */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-mono text-xl font-bold text-white bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-lg">
                      {entry.version}
                    </span>
                    {entry.isBeta && (
                      <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-500 text-white px-2.5 py-0.5 rounded-full flex items-center gap-1">
                        <Rocket className="w-3 h-3" /> Current Beta
                      </span>
                    )}
                    <span className={`text-sm ${themeColors.textSecondary} font-medium`}>
                      {entry.date}
                    </span>
                  </div>

                  {/* Highlights Card */}
                  <div className={`${themeColors.card} border ${themeColors.cardBorder} p-6 rounded-2xl shadow-sm mb-6`}>
                    <p className={`text-base font-semibold ${themeColors.text} leading-relaxed mb-4`}>
                      {entry.highlights.join(' ')}
                    </p>

                    <div className="space-y-4">
                      {/* Features */}
                      {entry.features && entry.features.length > 0 && (
                        <div>
                          <h4 className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5" /> New Features
                          </h4>
                          <ul className="space-y-2">
                            {entry.features.map((item, i) => (
                              <li key={i} className={`text-sm ${themeColors.textSecondary} flex items-start gap-2`}>
                                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Improvements */}
                      {entry.improvements && entry.improvements.length > 0 && (
                        <div>
                          <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Zap className="w-3.5 h-3.5" /> Improvements
                          </h4>
                          <ul className="space-y-2">
                            {entry.improvements.map((item, i) => (
                              <li key={i} className={`text-sm ${themeColors.textSecondary} flex items-start gap-2`}>
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0 mt-2 ml-1"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Bug Fixes */}
                      {entry.fixes && entry.fixes.length > 0 && (
                        <div>
                          <h4 className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Bug className="w-3.5 h-3.5" /> Bug Fixes
                          </h4>
                          <ul className="space-y-2">
                            {entry.fixes.map((item, i) => (
                              <li key={i} className={`text-sm ${themeColors.textSecondary} flex items-start gap-2`}>
                                <div className="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 mt-2 ml-1"></div>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>
    </div>
  );
};