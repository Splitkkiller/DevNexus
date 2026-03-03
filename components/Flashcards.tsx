
import React, { useState, useEffect, useRef } from 'react';
import { ThemeColors, DocItem } from '../types';
import { DOCS } from '../data';
import { Shuffle, RotateCw, Heart, Play, Pause, ChevronLeft, ChevronRight, FileCode, Palette, FileJson, Zap, Layers, Star, FileType, Hash, Coffee } from 'lucide-react';

interface FlashcardsProps {
  themeColors: ThemeColors;
}

type CardMode = 'all' | 'html' | 'css' | 'js' | 'ts' | 'py' | 'java' | 'favorites';

export const Flashcards: React.FC<FlashcardsProps> = ({ themeColors }) => {
  const [mode, setMode] = useState<CardMode>('all');
  const [cards, setCards] = useState<DocItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  // Initialize cards
  useEffect(() => {
    filterAndShuffleCards(mode);
  }, [mode]);

  // Auto-play effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        if (!isFlipped) {
           setIsFlipped(true);
        } else {
           handleNext(); // handleNext resets flip
        }
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, isFlipped]);


  const filterAndShuffleCards = (selectedMode: CardMode) => {
      let pool = DOCS;
      if (selectedMode === 'favorites') {
          pool = DOCS.filter(d => favorites.has(d.id));
      } else if (selectedMode !== 'all') {
          pool = DOCS.filter(d => d.library === selectedMode);
      }

      // Simple shuffle
      const shuffled = [...pool].sort(() => Math.random() - 0.5);
      setCards(shuffled);
      setCurrentIndex(0);
      setIsFlipped(false);
      setIsAutoPlaying(false);
  };

  const handleNext = () => {
      setIsFlipped(false);
      setTimeout(() => {
          setCurrentIndex(prev => (prev + 1) % cards.length);
      }, 200); // Wait for flip back visual if needed, but usually better to snap or wait
  };

  const handlePrev = () => {
      setIsFlipped(false);
      setTimeout(() => {
          setCurrentIndex(prev => (prev - 1 + cards.length) % cards.length);
      }, 200);
  };

  const toggleFavorite = (id: string) => {
      const newFavs = new Set(favorites);
      if (newFavs.has(id)) newFavs.delete(id);
      else newFavs.add(id);
      setFavorites(newFavs);
  };

  const currentCard = cards[currentIndex];
  
  // Derived Colors
  const getCardColor = (lib: string) => {
      if (lib === 'html') return 'bg-[#E34F26]';
      if (lib === 'css') return 'bg-[#264DE4]';
      if (lib === 'js') return 'bg-[#F7DF1E] text-black';
      if (lib === 'ts') return 'bg-[#3178C6]';
      if (lib === 'py') return 'bg-[#3776AB]';
      if (lib === 'java') return 'bg-[#E76F00]';
      return 'bg-gray-500';
  };

  const getIcon = (lib: string) => {
      if (lib === 'html') return <FileCode className="w-8 h-8" />;
      if (lib === 'css') return <Palette className="w-8 h-8" />;
      if (lib === 'js') return <FileJson className="w-8 h-8" />;
      if (lib === 'ts') return <FileType className="w-8 h-8" />;
      if (lib === 'py') return <Hash className="w-8 h-8" />;
      if (lib === 'java') return <Coffee className="w-8 h-8" />;
      return <Zap className="w-8 h-8" />;
  };

  if (cards.length === 0 && mode === 'favorites') {
      return (
          <div className="flex-1 flex flex-col items-center justify-center p-8">
              <Star className="w-16 h-16 text-gray-600 mb-4" />
              <h2 className={`text-xl font-bold ${themeColors.text}`}>No Favorites Yet</h2>
              <p className={themeColors.textSecondary}>Star items in other modes to practice them here.</p>
              <button onClick={() => setMode('all')} className="mt-4 px-4 py-2 bg-brand-600 text-white rounded-lg">View All Cards</button>
          </div>
      );
  }

  if (!currentCard) return null;

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden relative">
        
        {/* Header */}
        <div className={`p-6 border-b ${themeColors.sidebarBorder} flex items-center justify-between shrink-0`}>
            <div>
                <h1 className={`text-2xl font-bold ${themeColors.text} flex items-center gap-3`}>
                   <Layers className="w-8 h-8 text-brand-500" /> Flashcards
                </h1>
                <p className={themeColors.textSecondary}>Master definitions, syntax, and concepts.</p>
            </div>
            <div className="flex items-center gap-2 overflow-x-auto custom-scrollbar pb-2 max-w-md">
                {(['all', 'html', 'css', 'js', 'ts', 'py', 'java', 'favorites'] as const).map(m => (
                    <button
                       key={m}
                       onClick={() => setMode(m)}
                       className={`px-3 py-1.5 rounded-md text-xs font-bold uppercase transition-all whitespace-nowrap ${mode === m ? 'bg-brand-600 text-white' : `${themeColors.card} border ${themeColors.cardBorder} ${themeColors.textSecondary} hover:border-brand-500`}`}
                    >
                        {m}
                    </button>
                ))}
            </div>
        </div>

        {/* Main Card Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-4 md:p-8 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5 relative">
            
            {/* Card Container */}
            <div 
               className="w-full max-w-xl aspect-[3/2] relative cursor-pointer perspective-1000 group"
               onClick={() => setIsFlipped(!isFlipped)}
            >
                <div className={`relative w-full h-full transition-all duration-500 transform-style-3d shadow-2xl rounded-2xl border ${themeColors.cardBorder} ${isFlipped ? 'rotate-y-180' : ''}`}>
                    
                    {/* FRONT */}
                    <div className={`absolute inset-0 backface-hidden rounded-2xl ${themeColors.card} flex flex-col items-center justify-center p-8 border ${themeColors.cardBorder}`}>
                        <div className={`mb-6 w-20 h-20 rounded-full flex items-center justify-center text-white shadow-lg ${getCardColor(currentCard.library)}`}>
                            {getIcon(currentCard.library)}
                        </div>
                        <h2 className={`text-4xl font-bold ${themeColors.text} mb-4 text-center`}>{currentCard.name}</h2>
                        <span className={`px-3 py-1 rounded-full bg-white/5 ${themeColors.textSecondary} text-sm uppercase tracking-widest font-bold`}>
                            {currentCard.category}
                        </span>
                        
                        <div className="absolute bottom-6 text-xs text-gray-500 animate-pulse uppercase tracking-widest">
                            Tap to Flip
                        </div>
                    </div>

                    {/* BACK */}
                    <div className={`absolute inset-0 backface-hidden rounded-2xl ${themeColors.card} rotate-y-180 flex flex-col p-8 border ${themeColors.cardBorder} overflow-y-auto custom-scrollbar`}>
                        <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                           <span className={`text-sm font-bold uppercase tracking-widest ${themeColors.textSecondary}`}>{currentCard.library.toUpperCase()} Reference</span>
                           <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-xs ${getCardColor(currentCard.library)}`}>
                               {getIcon(currentCard.library)}
                           </div>
                        </div>

                        <div className="flex-1">
                            <h3 className={`text-xl font-bold ${themeColors.text} mb-2`}>Definition</h3>
                            <p className={`${themeColors.textSecondary} leading-relaxed mb-6`}>{currentCard.description}</p>
                            
                            <h3 className={`text-xl font-bold ${themeColors.text} mb-2`}>Syntax</h3>
                            <div className="bg-black/20 p-3 rounded-lg font-mono text-sm text-brand-400 mb-6 border border-white/5">
                                {currentCard.syntax}
                            </div>
                            
                            {currentCard.examples[0] && (
                                <>
                                    <h3 className={`text-xl font-bold ${themeColors.text} mb-2`}>Example</h3>
                                    <div className="bg-black/20 p-3 rounded-lg font-mono text-xs text-gray-300 whitespace-pre-wrap border border-white/5">
                                        {currentCard.examples[0].code}
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Controls */}
            <div className="mt-12 flex items-center gap-6">
                <button 
                    onClick={(e) => { e.stopPropagation(); toggleFavorite(currentCard.id); }}
                    className={`p-4 rounded-full border transition-all ${favorites.has(currentCard.id) ? 'bg-yellow-500/10 border-yellow-500 text-yellow-500' : `${themeColors.card} ${themeColors.cardBorder} ${themeColors.textSecondary} hover:bg-white/5`}`}
                    title="Favorite"
                >
                    <Heart className={`w-6 h-6 ${favorites.has(currentCard.id) ? 'fill-current' : ''}`} />
                </button>
                
                <div className="flex items-center gap-2">
                    <button 
                        onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                        className={`p-4 rounded-full ${themeColors.card} border ${themeColors.cardBorder} ${themeColors.text} hover:bg-white/5 transition-all`}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    
                    <div className={`px-6 py-2 bg-black/20 rounded-full font-mono font-bold ${themeColors.textSecondary}`}>
                        {currentIndex + 1} / {cards.length}
                    </div>

                    <button 
                        onClick={(e) => { e.stopPropagation(); handleNext(); }}
                        className={`p-4 rounded-full ${themeColors.card} border ${themeColors.cardBorder} ${themeColors.text} hover:bg-white/5 transition-all`}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>

                <button 
                    onClick={(e) => { e.stopPropagation(); filterAndShuffleCards(mode); }}
                    className={`p-4 rounded-full ${themeColors.card} border ${themeColors.cardBorder} ${themeColors.textSecondary} hover:text-brand-400 transition-all`}
                    title="Shuffle"
                >
                    <Shuffle className="w-6 h-6" />
                </button>
                
                <button 
                    onClick={(e) => { e.stopPropagation(); setIsAutoPlaying(!isAutoPlaying); }}
                    className={`p-4 rounded-full border transition-all ${isAutoPlaying ? 'bg-brand-600 border-brand-500 text-white' : `${themeColors.card} ${themeColors.cardBorder} ${themeColors.textSecondary}`}`}
                    title="Auto Play"
                >
                    {isAutoPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
            </div>
            
            <style>{`
              .perspective-1000 { perspective: 1000px; }
              .transform-style-3d { transform-style: preserve-3d; }
              .backface-hidden { backface-visibility: hidden; }
              .rotate-y-180 { transform: rotateY(180deg); }
            `}</style>

        </div>
    </div>
  );
};
