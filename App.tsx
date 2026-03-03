import React, { useState, useEffect, useCallback } from 'react';
import { Sidebar, DevNexusLogo } from './components/Sidebar';
import { DocContent } from './components/DocContent';
import { Assistant } from './components/Assistant';
import { AuthModal } from "./components/AuthModal";
import { Playground } from './components/Playground';
import { Quiz } from './components/Quiz';
import { Flashcards } from './components/Flashcards';
import { Watch } from './components/Watch';
import { Contact } from './components/Contact';
import { FAQ } from './components/FAQ';
import { Terms } from './components/Terms';
import { DOCS } from './data';
import { Menu, Instagram, Twitter, Loader2 } from 'lucide-react';
import { DocLibrary, User, Theme, ThemeColors } from './types';
import { fetchCurrentUser } from './auth';

const THEMES: Record<Theme, ThemeColors> = {
  dark: {
    bg: 'bg-[#313338]',
    sidebar: 'bg-[#2B2D31]',
    sidebarBorder: 'border-[#1E1F22]',
    text: 'text-[#DBDEE1]',
    textSecondary: 'text-[#949BA4]',
    card: 'bg-[#2B2D31]',
    cardBorder: 'border-[#1E1F22]',
    accent: 'bg-[#3F4147] text-white',
    accentHover: 'hover:bg-[#35373C]',
    codeBg: 'bg-[#1E1F22]',
    inputBg: 'bg-[#383A40]',
    inputBorder: 'border-[#1E1F22]',
  },
  grey: {
    bg: 'bg-zinc-950',
    sidebar: 'bg-zinc-900',
    sidebarBorder: 'border-zinc-800',
    text: 'text-zinc-100',
    textSecondary: 'text-zinc-400',
    card: 'bg-zinc-900',
    cardBorder: 'border-zinc-800',
    accent: 'bg-zinc-800 text-white',
    accentHover: 'hover:bg-zinc-700',
    codeBg: 'bg-zinc-950',
    inputBg: 'bg-zinc-800',
    inputBorder: 'border-zinc-700',
  },
  light: {
    bg: 'bg-slate-50',
    sidebar: 'bg-white',
    sidebarBorder: 'border-slate-200',
    text: 'text-slate-900',
    textSecondary: 'text-slate-500',
    card: 'bg-white',
    cardBorder: 'border-slate-200',
    accent: 'bg-brand-50 text-brand-700',
    accentHover: 'hover:bg-brand-100',
    codeBg: 'bg-slate-900',
    inputBg: 'bg-white',
    inputBorder: 'border-slate-300',
  },
};

function Footer({ themeColors, onTermsClick, onFaqClick, onContactClick }: any) {
  return (
    <footer className={`w-full mt-12 py-8 border-t ${themeColors.sidebarBorder} flex flex-col items-center gap-4 text-xs ${themeColors.textSecondary}`}>
      <div className="flex gap-6">
        <Twitter className="w-5 h-5 hover:text-blue-400 cursor-pointer" />
        <Instagram className="w-5 h-5 hover:text-pink-500 cursor-pointer" />
      </div>
      <div className="flex gap-6 font-medium">
        <button onClick={onFaqClick} className="hover:underline">FAQ</button>
        <button onClick={onContactClick} className="hover:underline">Contact</button>
        <button onClick={onTermsClick} className="hover:underline">Terms</button>
      </div>
      <p className="opacity-50">© {new Date().getFullYear()} DevNexus — All rights reserved.</p>
    </footer>
  );
}

function App() {
  const [library, setLibrary] = useState<DocLibrary>('html');
  const [currentDocId, setCurrentDocId] = useState<string>('html');
  const [activeView, setActiveView] = useState<string>('docs');
  const [user, setUser] = useState<User | null>(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [loadingUser, setLoadingUser] = useState(true); // Persist check starts here
  const [theme, setTheme] = useState<Theme>('dark');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const themeColors = THEMES[theme];

  // ========= PERSISTENT LOGIN CHECK =========
  useEffect(() => {
    const initAuth = async () => {
      const currentUser = await fetchCurrentUser();
      if (currentUser) {
        setUser(currentUser);
      }
      setLoadingUser(false); // Stop loading only after verification
    };
    initAuth();
  }, []);

  const handleLogin = (u: User, token?: string) => {
    if (token) localStorage.setItem("token", token);
    setUser(u);
    setIsAuthModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    if (['quiz', 'ai', 'flashcards'].includes(activeView)) setActiveView('docs');
  };

  const handleDocSelect = (id: string) => {
    setCurrentDocId(id);
    setActiveView('docs');
    setIsMobileMenuOpen(false);
  };

  const handleSwitchLibrary = (lib: DocLibrary) => {
    setLibrary(lib);
    const firstDoc = DOCS.find(d => d.library === lib);
    if (firstDoc) setCurrentDocId(firstDoc.id);
    setActiveView('docs');
  };

  const toggleView = (view: string) => {
    if (['quiz', 'ai', 'flashcards'].includes(view) && !user) {
      setIsAuthModalOpen(true);
      return;
    }
    setActiveView(view);
    setIsMobileMenuOpen(false);
  };

  if (loadingUser) {
    return (
      <div className={`h-screen w-full flex flex-col items-center justify-center ${themeColors.bg} ${themeColors.text}`}>
        <Loader2 className="w-10 h-10 animate-spin text-blue-500 mb-4" />
        <h1 className="text-xl font-black tracking-widest animate-pulse">DEVNEXUS</h1>
      </div>
    );
  }

  const currentDoc = DOCS.find(d => d.id === currentDocId && d.library === library) || DOCS[0];

  return (
    <div className={`flex h-screen w-full ${themeColors.bg} ${themeColors.text} font-sans overflow-hidden transition-colors`}>
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        onLogin={handleLogin}
        themeColors={themeColors}
      />

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      <div className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-300 lg:relative lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <Sidebar
          docs={DOCS}
          currentDocId={activeView === 'docs' ? currentDocId : ''}
          currentLibrary={library}
          onSelectDoc={handleDocSelect}
          onSwitchLibrary={handleSwitchLibrary}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          user={user}
          onLoginClick={() => setIsAuthModalOpen(true)}
          onLogoutClick={handleLogout}
          themeColors={themeColors}
          currentTheme={theme}
          onThemeChange={setTheme}
          isPlaygroundActive={activeView === 'playground'}
          onPlaygroundClick={() => toggleView('playground')}
          isQuizActive={activeView === 'quiz'}
          onQuizClick={() => toggleView('quiz')}
          isAiActive={activeView === 'ai'}
          onAiClick={() => toggleView('ai')}
          isFlashcardsActive={activeView === 'flashcards'}
          onFlashcardsClick={() => toggleView('flashcards')}
          isWatchActive={activeView === 'watch'}
          onWatchClick={() => toggleView('watch')}
          isContactActive={activeView === 'contact'}
          onContactClick={() => toggleView('contact')}
          isFaqActive={activeView === 'faq'}
          onFaqClick={() => toggleView('faq')}
          isTermsActive={activeView === 'terms'}
          onTermsClick={() => toggleView('terms')}
          onHomeClick={() => { setLibrary('html'); setCurrentDocId('html'); setActiveView('docs'); }}
        />
      </div>

      <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        <div className={`flex items-center justify-between p-4 border-b lg:hidden ${themeColors.sidebarBorder} ${themeColors.card}`}>
          <button onClick={() => setIsMobileMenuOpen(true)} className={themeColors.textSecondary}>
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2 font-black tracking-tighter">
            <DevNexusLogo className="w-6 h-6 text-blue-500" />
            DevNexus
          </div>
          <div className="w-6" />
        </div>

        <div className="flex-1 overflow-y-auto">
          <main className="max-w-5xl mx-auto p-4 md:p-10">
            {activeView === 'playground' && <Playground themeColors={themeColors} />}
            {activeView === 'quiz' && <Quiz themeColors={themeColors} onQuizComplete={() => {}} />}
            {activeView === 'ai' && <Assistant themeColors={themeColors} />}
            {activeView === 'flashcards' && <Flashcards themeColors={themeColors} />}
            {activeView === 'watch' && <Watch themeColors={themeColors} user={user} onRequireAuth={() => setIsAuthModalOpen(true)} />}
            {activeView === 'contact' && <Contact themeColors={themeColors} />}
            {activeView === 'faq' && <FAQ themeColors={themeColors} />}
            {activeView === 'terms' && <Terms themeColors={themeColors} />}
            {activeView === 'docs' && <DocContent doc={currentDoc} themeColors={themeColors} />}

            <Footer
              themeColors={themeColors}
              onTermsClick={() => toggleView('terms')}
              onFaqClick={() => toggleView('faq')}
              onContactClick={() => toggleView('contact')}
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
