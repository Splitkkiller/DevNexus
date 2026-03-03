import React, { useState, useEffect, useRef } from 'react';
import { DocItem, DocLibrary, User, ThemeColors, Theme } from '../types';
import { HTML_CATEGORIES, CSS_CATEGORIES, JS_CATEGORIES, TS_CATEGORIES, PYTHON_CATEGORIES, JAVA_CATEGORIES } from '../data';
import { Search, LogIn, LogOut, FileCode, Palette, Terminal, GraduationCap, ChevronUp, ChevronDown, Award, Sun, Moon, Monitor, FileJson, Flame, Calendar, Sparkles, Lock, GalleryVerticalEnd, Tv, Mail, HelpCircle, Twitter, Github, Linkedin, ScrollText, FileType, Coffee, Hash } from 'lucide-react';

interface SidebarProps {
  docs: DocItem[];
  currentDocId: string;
  currentLibrary: DocLibrary;
  onSelectDoc: (id: string) => void;
  onSwitchLibrary: (lib: DocLibrary) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  user: User | null;
  onLoginClick: () => void;
  onLogoutClick: () => void;
  themeColors: ThemeColors;
  currentTheme: Theme;
  onThemeChange: (theme: Theme) => void;
  isPlaygroundActive: boolean;
  onPlaygroundClick: () => void;
  isQuizActive: boolean;
  onQuizClick: () => void;
  isAiActive: boolean;
  onAiClick: () => void;
  isFlashcardsActive: boolean;
  onFlashcardsClick: () => void;
  isWatchActive: boolean;
  onWatchClick: () => void;
  isContactActive: boolean;
  onContactClick: () => void;
  isFaqActive: boolean;
  onFaqClick: () => void;
  isTermsActive: boolean;
  onTermsClick: () => void;
  onHomeClick?: () => void;
}

// Custom Brand Logo Component
export const DevNexusLogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <defs>
      <linearGradient id="nexusGradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
    </defs>
    <path 
      d="M12 8C12 5.79086 13.7909 4 16 4H24C26.2091 4 28 5.79086 28 8V14.5L34.4 19.3C35.8667 20.4 35.8667 22.6 34.4 23.7L28 28.5V32C28 34.2091 26.2091 36 24 36H16C13.7909 36 12 34.2091 12 32V25.5L5.6 20.7C4.13333 19.6 4.13333 17.4 5.6 16.3L12 11.5V8Z" 
      fill="url(#nexusGradient)"
    />
    <path 
      fillRule="evenodd" 
      clipRule="evenodd" 
      d="M20 12C20.5523 12 21 12.4477 21 13V17H25C25.5523 17 26 17.4477 26 18C26 18.5523 25.5523 19 25 19H21V27C21 27.5523 20.5523 28 20 28C19.4477 28 19 27.5523 19 27V19H15C14.4477 19 14 18.5523 14 18C14 17.4477 14.4477 17 15 17H19V13C19 12.4477 19.4477 12 20 12Z" 
      fill="white"
    />
  </svg>
);

export const Sidebar: React.FC<SidebarProps> = ({ 
  docs, 
  currentDocId, 
  currentLibrary,
  onSelectDoc,
  onSwitchLibrary,
  searchQuery,
  onSearchChange,
  user,
  onLoginClick,
  onLogoutClick,
  themeColors,
  currentTheme,
  onThemeChange,
  isPlaygroundActive,
  onPlaygroundClick,
  isQuizActive,
  onQuizClick,
  isAiActive,
  onAiClick,
  isFlashcardsActive,
  onFlashcardsClick,
  isWatchActive,
  onWatchClick,
  isContactActive,
  onContactClick,
  isFaqActive,
  onFaqClick,
  isTermsActive,
  onTermsClick,
  onHomeClick
}) => {
  
  const [isProfileExpanded, setIsProfileExpanded] = useState(false);
  const [selectedSearchIndex, setSelectedSearchIndex] = useState(-1);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultsContainerRef = useRef<HTMLUListElement>(null);

  const filteredDocs = docs.filter(doc => 
    doc.library === currentLibrary &&
    ((doc.title || doc.name || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
    (doc.description || doc.shortDescription || '').toLowerCase().includes(searchQuery.toLowerCase()))
  );

  useEffect(() => {
    setSelectedSearchIndex(-1);
  }, [searchQuery, currentLibrary]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (filteredDocs.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedSearchIndex(prev => prev < filteredDocs.length - 1 ? prev + 1 : 0);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedSearchIndex(prev => prev > 0 ? prev - 1 : filteredDocs.length - 1);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedSearchIndex >= 0 && selectedSearchIndex < filteredDocs.length) {
        onSelectDoc(filteredDocs[selectedSearchIndex].id);
        searchInputRef.current?.blur();
      }
    }
  };

  const HighlightText = ({ text, highlight }: { text: string, highlight: string }) => {
    if (!highlight.trim()) return <span>{text}</span>;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === highlight.toLowerCase() ? 
            <span key={i} className="text-[#00d68f] font-bold drop-shadow-[0_0_3px_rgba(0,214,143,0.5)]">{part}</span> : 
            part
        )}
      </span>
    );
  };

  const libraryBtnClass = (active: boolean, colorClass: string) => 
    `flex items-center justify-center gap-2 px-2 py-2 rounded text-sm font-medium transition-all duration-200 ${
      active 
      ? `${colorClass} text-white shadow-sm` 
      : `${themeColors.card} ${themeColors.textSecondary} hover:${themeColors.text} hover:bg-opacity-80`
    }`;

  const getCategories = () => {
      if (currentLibrary === 'html') return HTML_CATEGORIES;
      if (currentLibrary === 'css') return CSS_CATEGORIES;
      if (currentLibrary === 'js') return JS_CATEGORIES;
      if (currentLibrary === 'ts') return TS_CATEGORIES;
      if (currentLibrary === 'py') return PYTHON_CATEGORIES;
      return JAVA_CATEGORIES;
  };

  const isSpecialMode = isPlaygroundActive || isQuizActive || isAiActive || isFlashcardsActive || isWatchActive || isContactActive || isFaqActive || isTermsActive;

  return (
    <aside className={`w-72 ${themeColors.sidebar} flex flex-col h-full shrink-0 transition-colors duration-300 border-r ${themeColors.sidebarBorder}`}>
      {/* Header */}
      <div className={`p-5 ${themeColors.sidebarBorder} border-b shadow-sm`}>
        <button 
          onClick={onHomeClick}
          className="flex items-center gap-3 mb-1 hover:opacity-80 transition-opacity w-full text-left focus:outline-none group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <DevNexusLogo className="w-9 h-9 relative z-10 drop-shadow-md" />
          </div>
          <div>
             <h1 className={`text-xl font-extrabold tracking-tight ${themeColors.text} leading-none`}>DevNexus</h1>
             <span className="text-[10px] bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 font-bold uppercase tracking-widest">Reference</span>
          </div>
        </button>
      </div>

      {/* Library Switcher & Tools */}
      <div className="p-3 space-y-2">
        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => onSwitchLibrary('html')} className={libraryBtnClass(currentLibrary === 'html' && !isSpecialMode, 'bg-[#E34F26]')}><FileCode className="w-4 h-4" /> HTML</button>
          <button onClick={() => onSwitchLibrary('css')} className={libraryBtnClass(currentLibrary === 'css' && !isSpecialMode, 'bg-[#264DE4]')}><Palette className="w-4 h-4" /> CSS</button>
          <button onClick={() => onSwitchLibrary('js')} className={libraryBtnClass(currentLibrary === 'js' && !isSpecialMode, 'bg-[#F7DF1E] !text-black')}><FileJson className="w-4 h-4" /> JS</button>
          <button onClick={() => onSwitchLibrary('ts')} className={libraryBtnClass(currentLibrary === 'ts' && !isSpecialMode, 'bg-[#3178C6]')}><FileType className="w-4 h-4" /> TS</button>
          <button onClick={() => onSwitchLibrary('py')} className={libraryBtnClass(currentLibrary === 'py' && !isSpecialMode, 'bg-[#3776AB]')}><Hash className="w-4 h-4" /> Python</button>
          <button onClick={() => onSwitchLibrary('java')} className={libraryBtnClass(currentLibrary === 'java' && !isSpecialMode, 'bg-[#E76F00]')}><Coffee className="w-4 h-4" /> Java</button>
        </div>

        <button
          onClick={onPlaygroundClick}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            isPlaygroundActive ? `${themeColors.accent} shadow-sm` : `${themeColors.textSecondary} hover:${themeColors.text} hover:bg-[#35373C]`
          }`}
        >
          <Terminal className="w-4 h-4" /> IDE Playground
        </button>

        <button
          onClick={onQuizClick}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            isQuizActive ? `${themeColors.accent} shadow-sm` : `${themeColors.textSecondary} hover:${themeColors.text} hover:bg-[#35373C]`
          }`}
        >
          <div className="flex-1 flex items-center gap-3">
            <GraduationCap className="w-4 h-4" /> Skill Quiz
          </div>
          {!user && <Lock className="w-3 h-3 opacity-50" />}
        </button>

        <button
          onClick={onFlashcardsClick}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            isFlashcardsActive ? `${themeColors.accent} shadow-sm` : `${themeColors.textSecondary} hover:${themeColors.text} hover:bg-[#35373C]`
          }`}
        >
          <div className="flex-1 flex items-center gap-3">
            <GalleryVerticalEnd className="w-4 h-4" /> Flashcards
          </div>
          {!user && <Lock className="w-3 h-3 opacity-50" />}
        </button>

        <button
          onClick={onAiClick}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            isAiActive ? `bg-brand-600 text-white shadow-sm` : `${themeColors.textSecondary} hover:${themeColors.text} hover:bg-[#35373C]`
          }`}
        >
          <div className="flex-1 flex items-center gap-3">
            <Sparkles className="w-4 h-4" /> AI Assistant
          </div>
          {!user && <Lock className="w-3 h-3 opacity-50" />}
        </button>

        <button
          onClick={onWatchClick}
          className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
            isWatchActive ? `${themeColors.accent} shadow-sm` : `${themeColors.textSecondary} hover:${themeColors.text} hover:bg-[#35373C]`
          }`}
        >
          <div className="flex-1 flex items-center gap-3">
            <Tv className="w-4 h-4" /> Watch
          </div>
        </button>
      </div>

      {/* Search */}
      {!isSpecialMode && (
        <div className="px-3 pb-2">
          <div className="relative group">
            <Search className={`absolute left-3 top-2.5 w-4 h-4 ${themeColors.textSecondary} group-focus-within:text-[#5865F2] transition-colors`} />
            <input 
              ref={searchInputRef}
              type="text" 
              placeholder={`Find ${currentLibrary.toUpperCase()} tags...`}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={handleKeyDown}
              className={`w-full ${themeColors.inputBg} ${themeColors.text} text-sm rounded-[4px] pl-9 pr-3 py-1.5 border-none focus:ring-2 focus:ring-[#5865F2] placeholder-opacity-50 transition-all font-medium`}
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto custom-scrollbar px-2 py-2 space-y-6 min-h-0" ref={resultsContainerRef}>
        {isSpecialMode ? (
          <div className={`p-4 text-center ${themeColors.textSecondary} text-sm italic`}>
            {isPlaygroundActive ? "Code Editor Mode Active" : 
             isQuizActive ? "Quiz Mode Active" : 
             isFlashcardsActive ? "Flashcards Mode Active" : 
             isWatchActive ? "Video Library Active" :
             isContactActive ? "Contact Support Active" :
             isFaqActive ? "F.A.Q. Section Active" :
             isTermsActive ? "Legal Information" :
             "AI Assistant Active"}
          </div>
        ) : (
          <>
            {filteredDocs.length === 0 && (
              <div className={`flex flex-col items-center justify-center text-center ${themeColors.textSecondary} mt-10 text-sm opacity-60`}>
                <Search className="w-8 h-8 mb-2 opacity-50" />
                <p>No results found.</p>
                <p className="text-xs">Try a different keyword.</p>
              </div>
            )}

            {searchQuery ? (
              <ul className="space-y-1">
                {filteredDocs.map((doc, idx) => (
                  <li key={doc.id}>
                    <button
                      onClick={() => onSelectDoc(doc.id)}
                      className={`w-full text-left px-3 py-2 rounded text-[15px] transition-all flex items-center gap-2 group ${
                        currentDocId === doc.id || selectedSearchIndex === idx
                          ? `${themeColors.accent} font-medium ring-1 ring-white/10` 
                          : `${themeColors.textSecondary} hover:${themeColors.text} hover:bg-[#35373C]`
                      }`}
                    >
                      <span className="font-mono text-xs opacity-50">#</span>
                      <span className="flex-1 truncate">
                        <HighlightText text={doc.title || doc.name || ''} highlight={searchQuery} />
                        <span className="ml-2 text-xs opacity-50 font-normal">
                          <HighlightText text={doc.description || doc.shortDescription || ''} highlight={searchQuery} />
                        </span>
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              Object.entries(getCategories()).map(([catKey, catName]) => {
                const items = filteredDocs.filter(d => d.category === catKey);
                if (!items || items.length === 0) return null;

                return (
                  <div key={catKey}>
                    <h3 className={`text-[11px] font-bold ${themeColors.textSecondary} uppercase tracking-wider mb-1 pl-3 flex items-center gap-2 hover:${themeColors.text} cursor-default transition-colors`}>
                      {catName}
                    </h3>
                    <ul className="space-y-[2px]">
                      {items.map(doc => (
                        <li key={doc.id}>
                          <button
                            onClick={() => onSelectDoc(doc.id)}
                            className={`w-full text-left px-3 py-1.5 rounded text-[15px] transition-all flex items-center gap-2 group ${
                              currentDocId === doc.id 
                                ? `${themeColors.accent} font-medium ring-1 ring-white/10` 
                                : `${themeColors.textSecondary} hover:${themeColors.text} hover:bg-[#35373C]`
                            }`}
                          >
                            <span className="font-mono text-xs opacity-50">#</span>
                            <span className="flex-1 truncate">{doc.title || doc.name || ''}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })
            )}
          </>
        )}
      </nav>

      {/* User Profile */}
      <div className={`p-3 border-t ${themeColors.sidebarBorder} space-y-2`}>
        {user ? (
          <>
            <button
              onClick={() => setIsProfileExpanded(prev => !prev)}
              className="flex items-center justify-between w-full px-2 py-1 rounded hover:bg-white/5 transition-all"
            >
              <div className="flex items-center gap-2">
                <span className="font-bold">{user.name}</span>
                <span className="text-xs opacity-60">{user.email}</span>
              </div>
              {isProfileExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>

            {isProfileExpanded && (
              <div className="px-3 pb-3 pt-1 text-xs">
                {/* Streaks Section */}
                <div className="grid grid-cols-2 gap-2 mb-3 mt-1">
                  <div className={`p-1.5 rounded border ${themeColors.sidebarBorder} bg-white/5 flex flex-col items-center text-center`}>
                    <div className="flex items-center gap-1 text-orange-500 font-bold">
                      <Flame className="w-3 h-3" /> {user?.stats?.loginStreak ?? 0}
                    </div>
                    <span className={`text-[10px] ${themeColors.textSecondary}`}>Day Streak</span>
                  </div>
                  <div className={`p-1.5 rounded border ${themeColors.sidebarBorder} bg-white/5 flex flex-col items-center text-center`}>
                    <div className="flex items-center gap-1 text-blue-400 font-bold">
                      <Calendar className="w-3 h-3" /> {user?.stats?.quizStreak ?? 0}
                    </div>
                    <span className={`text-[10px] ${themeColors.textSecondary}`}>Quiz Streak</span>
                  </div>
                </div>

                {/* Joined Date */}
                <div className={`mb-2 ${themeColors.textSecondary} flex justify-between border-t ${themeColors.sidebarBorder} pt-2`}>
                  <span>Joined:</span>
                  <span className={themeColors.text}>{user?.joinedDate ?? '-'}</span>
                </div>

                {/* Skills Learned */}
                <div className="mb-2">
                  <p className={`${themeColors.textSecondary} mb-1`}>Skills Learnt:</p>
                  <div className="flex flex-wrap gap-1">
                    {(user?.stats?.masteredTopics ?? []).map(skill => (
                      <span key={skill} className="px-1.5 py-0.5 bg-brand-500/20 text-brand-500 rounded text-[10px] font-medium border border-brand-500/30">{skill}</span>
                    ))}
                  </div>
                </div>

                {/* XP */}
                <div className="flex items-center gap-2 mt-3 pt-2 border-t border-white/5">
                  <Award className="w-3 h-3 text-yellow-500" />
                  <span className={themeColors.text}>{user?.stats?.xp ?? 0} XP Earned</span>
                </div>

                <button
                  onClick={onLogoutClick}
                  className="mt-3 w-full py-1.5 rounded-md text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
                >
                  Log Out
                </button>
              </div>
            )}
          </>
        ) : (
          <button
            onClick={onLoginClick}
            className="w-full py-2 rounded-md text-sm font-medium text-white bg-green-600 hover:bg-green-700 transition-colors"
          >
            Log In
          </button>
        )}
      </div>
    </aside>
  );
};
