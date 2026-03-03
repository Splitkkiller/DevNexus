
import React, { useState, useEffect, useRef } from 'react';
import { ThemeColors, Video, User } from '../types';
import { VIDEOS } from '../data';
import { Search, PlayCircle, Bookmark, ExternalLink, X, Play, Zap, Filter, ChevronRight, ChevronLeft, Clock, BarChart, List, ChevronDown } from 'lucide-react';

interface WatchProps {
  themeColors: ThemeColors;
  user: User | null;
  onRequireAuth: () => void;
}

type FilterDifficulty = 'all' | 'beginner' | 'intermediate' | 'advanced';
type FilterDuration = 'all' | 'short' | 'medium' | 'long';
type SortOption = 'popular' | 'newest' | 'relevance';
type ViewMode = 'browse' | 'saved';

export const Watch: React.FC<WatchProps> = ({ themeColors, user, onRequireAuth }) => {
  // State
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Video[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  
  const [viewMode, setViewMode] = useState<ViewMode>('browse');
  const [activeCategory, setActiveCategory] = useState<'all' | 'html' | 'css' | 'js' | 'ts' | 'py' | 'java'>('all');
  
  // Advanced Filters
  const [filterDifficulty, setFilterDifficulty] = useState<FilterDifficulty>('all');
  const [filterDuration, setFilterDuration] = useState<FilterDuration>('all');
  const [sortBy, setSortBy] = useState<SortOption>('popular');
  
  const [playingVideo, setPlayingVideo] = useState<Video | null>(null);
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set(user?.savedVideoIds || []));
  const [autoPlay, setAutoPlay] = useState(false);

  // Dropdown UI State
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const searchRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sync saved videos if user logs in
  useEffect(() => {
    if (user) {
      setSavedIds(new Set(user.savedVideoIds));
    }
  }, [user]);

  // Click outside to close suggestions and dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
      // Close dropdowns if clicked outside the filters area
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // --- Helper Functions ---

  const parseDurationMinutes = (durationStr: string): number => {
    // Format H:MM:SS or MM:SS
    const parts = durationStr.split(':').map(Number);
    if (parts.length === 3) return parts[0] * 60 + parts[1]; // Hours + Minutes
    if (parts.length === 2) return parts[0]; // Minutes
    return 0;
  };

  const getDifficulty = (tags: string[]): FilterDifficulty => {
    if (tags.some(t => ['beginner', 'basics', 'crash course', 'intro'].includes(t.toLowerCase()))) return 'beginner';
    if (tags.some(t => ['advanced', 'mastery', 'deep dive', 'expert'].includes(t.toLowerCase()))) return 'advanced';
    return 'intermediate';
  };

  const getViewsCount = (viewsStr: string): number => {
      const num = parseFloat(viewsStr);
      if (viewsStr.includes('M')) return num * 1000000;
      if (viewsStr.includes('K')) return num * 1000;
      return num;
  };

  // --- Filtering Logic ---

  const handleSearchChange = (val: string) => {
      setSearchQuery(val);
      if (val.trim().length > 1) {
          const matched = VIDEOS.filter(v => v.title.toLowerCase().includes(val.toLowerCase())).slice(0, 5);
          setSuggestions(matched);
          setShowSuggestions(true);
      } else {
          setShowSuggestions(false);
      }
  };

  const selectSuggestion = (video: Video) => {
      setPlayingVideo(video);
      setSearchQuery('');
      setShowSuggestions(false);
  };

  const handleSaveToggle = (e: React.MouseEvent, id: string) => {
    e.stopPropagation();
    if (!user) {
      onRequireAuth();
      return;
    }
    const newSet = new Set(savedIds);
    if (newSet.has(id)) newSet.delete(id);
    else newSet.add(id);
    setSavedIds(newSet);
    // In a real app, sync with backend
  };

  // Master Filter
  const getFilteredVideos = () => {
      let result = VIDEOS;

      // 1. View Mode
      if (viewMode === 'saved') {
          result = result.filter(v => savedIds.has(v.id));
      }

      // 2. Category
      if (activeCategory !== 'all') {
          result = result.filter(v => v.category === activeCategory);
      }

      // 3. Search
      if (searchQuery) {
          result = result.filter(v => 
             v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
             v.channel.toLowerCase().includes(searchQuery.toLowerCase())
          );
      }

      // 4. Difficulty
      if (filterDifficulty !== 'all') {
          result = result.filter(v => getDifficulty(v.tags) === filterDifficulty);
      }

      // 5. Duration
      if (filterDuration !== 'all') {
          result = result.filter(v => {
              const mins = parseDurationMinutes(v.duration);
              if (filterDuration === 'short') return mins < 15;
              if (filterDuration === 'medium') return mins >= 15 && mins <= 60;
              return mins > 60;
          });
      }

      // 6. Sorting
      result = [...result].sort((a, b) => {
          if (sortBy === 'popular') return getViewsCount(b.views) - getViewsCount(a.views);
          // Newest is tricky with string date "2 years ago", sticking to default order (roughly curated) or simple shuffle for relevance
          return 0;
      });

      return result;
  };

  const filteredVideos = getFilteredVideos();
  const featuredVideo = VIDEOS[0]; // Static for now
  
  // Determine Layout Mode: 'Grid' (if filtering/searching) or 'Shelves' (default browse)
  const isFiltering = searchQuery || filterDifficulty !== 'all' || filterDuration !== 'all' || sortBy !== 'popular' || activeCategory !== 'all' || viewMode === 'saved';

  // --- Components ---

  const VideoCard = ({ video, large = false }: { video: Video, large?: boolean }) => (
    <div 
        className={`group relative rounded-xl overflow-hidden border ${themeColors.cardBorder} ${themeColors.card} hover:border-brand-500/50 transition-all cursor-pointer flex flex-col h-full`}
        onClick={() => setPlayingVideo(video)}
    >
        <div className={`relative overflow-hidden ${large ? 'aspect-video' : 'aspect-video'}`}>
            <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-2 right-2 bg-black/80 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                {video.duration}
            </div>
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/60 rounded-full p-3 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                <Play className="w-6 h-6 text-white fill-current" />
            </button>
        </div>
        
        <div className="p-3 flex gap-3 flex-1">
            {!large && (
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-[10px] ${video.category === 'html' ? 'bg-[#E34F26]' : video.category === 'css' ? 'bg-[#264DE4]' : video.category === 'js' ? 'bg-[#F7DF1E] text-black' : video.category === 'ts' ? 'bg-[#3178C6]' : video.category === 'py' ? 'bg-[#3776AB]' : 'bg-[#E76F00]'}`}>
                    {video.channel.charAt(0)}
                </div>
            )}
            <div className="flex-1 min-w-0">
                <h3 className={`font-bold ${themeColors.text} ${large ? 'text-lg' : 'text-sm'} line-clamp-2 mb-1 group-hover:text-brand-400 transition-colors`}>
                    {video.title}
                </h3>
                <p className={`text-xs ${themeColors.textSecondary} mb-1`}>{video.channel}</p>
                <div className="flex items-center gap-2">
                   <p className={`text-[10px] ${themeColors.textSecondary} opacity-70`}>
                    {video.views} views • {video.date}
                   </p>
                   {getDifficulty(video.tags) === 'beginner' && <span className="text-[9px] bg-green-500/10 text-green-500 px-1.5 rounded uppercase">Beginner</span>}
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <button 
                    onClick={(e) => handleSaveToggle(e, video.id)}
                    className={`p-1.5 rounded hover:bg-white/10 transition-colors ${savedIds.has(video.id) ? 'text-brand-400' : themeColors.textSecondary}`}
                    title={savedIds.has(video.id) ? "Remove" : "Save"}
                >
                    <Bookmark className={`w-4 h-4 ${savedIds.has(video.id) ? 'fill-current' : ''}`} />
                </button>
            </div>
        </div>
    </div>
  );

  const VideoShelf = ({ title, videos }: { title: string, videos: Video[] }) => {
     const scrollRef = useRef<HTMLDivElement>(null);

     const scroll = (dir: 'left' | 'right') => {
         if (scrollRef.current) {
             const amount = dir === 'left' ? -300 : 300;
             scrollRef.current.scrollBy({ left: amount, behavior: 'smooth' });
         }
     };

     if (videos.length === 0) return null;

     return (
         <div className="mb-8">
             <div className="flex items-center justify-between mb-4 px-1">
                 <h2 className={`text-lg font-bold ${themeColors.text}`}>{title}</h2>
                 <div className="flex gap-2">
                     <button onClick={() => scroll('left')} className={`p-1.5 rounded-full ${themeColors.card} border ${themeColors.cardBorder} hover:bg-white/5`}><ChevronLeft className="w-4 h-4" /></button>
                     <button onClick={() => scroll('right')} className={`p-1.5 rounded-full ${themeColors.card} border ${themeColors.cardBorder} hover:bg-white/5`}><ChevronRight className="w-4 h-4" /></button>
                 </div>
             </div>
             <div ref={scrollRef} className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar scroll-smooth snap-x">
                 {videos.map(v => (
                     <div key={v.id} className="min-w-[280px] w-[280px] snap-start">
                         <VideoCard video={v} />
                     </div>
                 ))}
             </div>
         </div>
     );
  };

  const toggleDropdown = (name: string) => {
      if (activeDropdown === name) setActiveDropdown(null);
      else setActiveDropdown(name);
  };


  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden relative">
      
      {/* Header */}
      <div className={`p-6 border-b ${themeColors.sidebarBorder} flex flex-col gap-4 shrink-0 bg-opacity-90 backdrop-blur z-20`}>
         
         {/* Top Row: Title & Search */}
         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4 w-full md:w-auto">
                <h1 className={`text-2xl font-bold ${themeColors.text} flex items-center gap-3`}>
                    <PlayCircle className="w-8 h-8 text-red-500" /> Watch
                </h1>
                <div className="h-6 w-px bg-white/10 hidden md:block"></div>
                
                {/* View Mode Toggle */}
                <div className="flex bg-black/20 rounded-lg p-1">
                   <button 
                      onClick={() => setViewMode('browse')}
                      className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${viewMode === 'browse' ? 'bg-brand-600 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                   >
                      Browse
                   </button>
                   <button 
                      onClick={() => {
                          if (!user) onRequireAuth();
                          else setViewMode('saved');
                      }}
                      className={`px-3 py-1 text-xs font-bold rounded-md transition-all flex items-center gap-1 ${viewMode === 'saved' ? 'bg-brand-600 text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                   >
                      <Bookmark className="w-3 h-3" /> Saved
                   </button>
                </div>
            </div>

            <div className="relative flex-1 w-full md:max-w-md" ref={searchRef}>
                <Search className={`absolute left-3 top-2.5 w-4 h-4 ${themeColors.textSecondary}`} />
                <input 
                  type="text"
                  placeholder="Search libraries, tutorials, topics..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  onFocus={() => searchQuery && setShowSuggestions(true)}
                  className={`w-full ${themeColors.inputBg} ${themeColors.inputBorder} border ${themeColors.text} pl-9 pr-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all`}
                />
                {/* Auto-complete */}
                {showSuggestions && suggestions.length > 0 && (
                    <div className={`absolute top-full left-0 right-0 mt-2 ${themeColors.card} border ${themeColors.cardBorder} rounded-xl shadow-2xl overflow-hidden z-50`}>
                        {suggestions.map(s => (
                            <button 
                               key={s.id}
                               onClick={() => selectSuggestion(s)}
                               className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-white/5 transition-colors border-b ${themeColors.cardBorder} last:border-0`}
                            >
                                <Play className="w-3 h-3 text-gray-500" />
                                <span className={`text-sm ${themeColors.text} truncate`}>{s.title}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
         </div>

         {/* Bottom Row: Filters */}
         <div className="flex flex-wrap items-center gap-3" ref={dropdownRef}>
            
            {/* Category Pills */}
            <div className="flex items-center gap-2 pr-4 border-r border-white/10 overflow-x-auto custom-scrollbar pb-1">
                {(['all', 'html', 'css', 'js', 'ts', 'py', 'java'] as const).map(cat => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1 rounded-full text-xs font-bold capitalize transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-white text-black' : `${themeColors.card} border ${themeColors.cardBorder} ${themeColors.textSecondary} hover:bg-white/10`}`}
                >
                    {cat}
                </button>
                ))}
            </div>

            {/* Dropdowns - Click to toggle */}
            <div className="flex items-center gap-2">
                <div className="relative">
                    <button 
                        onClick={() => toggleDropdown('difficulty')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold border ${themeColors.cardBorder} flex items-center gap-2 ${filterDifficulty !== 'all' ? 'text-brand-400 border-brand-500/50' : themeColors.textSecondary}`}
                    >
                        <BarChart className="w-3 h-3" /> {filterDifficulty === 'all' ? 'Difficulty' : filterDifficulty} <ChevronDown className="w-3 h-3" />
                    </button>
                    {activeDropdown === 'difficulty' && (
                        <div className={`absolute top-full left-0 mt-2 w-32 ${themeColors.card} border ${themeColors.cardBorder} rounded-lg shadow-xl z-30 p-1 animate-in fade-in zoom-in-95 duration-100`}>
                            {(['all', 'beginner', 'intermediate', 'advanced'] as const).map(d => (
                                <button key={d} onClick={() => { setFilterDifficulty(d); setActiveDropdown(null); }} className={`w-full text-left px-3 py-1.5 text-xs rounded hover:bg-white/5 capitalize ${filterDifficulty === d ? 'text-brand-400' : themeColors.textSecondary}`}>{d}</button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button 
                        onClick={() => toggleDropdown('duration')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold border ${themeColors.cardBorder} flex items-center gap-2 ${filterDuration !== 'all' ? 'text-brand-400 border-brand-500/50' : themeColors.textSecondary}`}
                    >
                        <Clock className="w-3 h-3" /> {filterDuration === 'all' ? 'Duration' : filterDuration} <ChevronDown className="w-3 h-3" />
                    </button>
                    {activeDropdown === 'duration' && (
                        <div className={`absolute top-full left-0 mt-2 w-32 ${themeColors.card} border ${themeColors.cardBorder} rounded-lg shadow-xl z-30 p-1 animate-in fade-in zoom-in-95 duration-100`}>
                            {(['all', 'short', 'medium', 'long'] as const).map(d => (
                                <button key={d} onClick={() => { setFilterDuration(d); setActiveDropdown(null); }} className={`w-full text-left px-3 py-1.5 text-xs rounded hover:bg-white/5 capitalize ${filterDuration === d ? 'text-brand-400' : themeColors.textSecondary}`}>{d}</button>
                            ))}
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button 
                        onClick={() => toggleDropdown('sort')}
                        className={`px-3 py-1 rounded-lg text-xs font-bold border ${themeColors.cardBorder} flex items-center gap-2 ${sortBy !== 'popular' ? 'text-brand-400 border-brand-500/50' : themeColors.textSecondary}`}
                    >
                        <List className="w-3 h-3" /> {sortBy === 'popular' ? 'Popular' : sortBy} <ChevronDown className="w-3 h-3" />
                    </button>
                    {activeDropdown === 'sort' && (
                         <div className={`absolute top-full left-0 mt-2 w-32 ${themeColors.card} border ${themeColors.cardBorder} rounded-lg shadow-xl z-30 p-1 animate-in fade-in zoom-in-95 duration-100`}>
                            {(['popular', 'newest'] as const).map(s => (
                                <button key={s} onClick={() => { setSortBy(s); setActiveDropdown(null); }} className={`w-full text-left px-3 py-1.5 text-xs rounded hover:bg-white/5 capitalize ${sortBy === s ? 'text-brand-400' : themeColors.textSecondary}`}>{s}</button>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <button 
               onClick={() => setAutoPlay(!autoPlay)}
               className={`ml-auto flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold border transition-all ${autoPlay ? 'bg-green-500/10 text-green-500 border-green-500/50' : `${themeColors.card} ${themeColors.cardBorder} ${themeColors.textSecondary}`}`}
            >
               <Zap className="w-3 h-3" /> Auto-Play
            </button>
         </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 md:p-8 scroll-smooth">
         
         {/* VIEW 1: Shelves Layout (Default Browse) */}
         {!isFiltering && (
            <>
                {/* Hero Video */}
                <div 
                    className="mb-12 rounded-2xl overflow-hidden relative aspect-video md:aspect-[3.5/1] group cursor-pointer shadow-2xl ring-1 ring-white/10"
                    onClick={() => setPlayingVideo(featuredVideo)}
                >
                    <img src={featuredVideo.thumbnail} alt={featuredVideo.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 md:p-12 flex flex-col justify-center items-start">
                        <span className="bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded mb-4 tracking-widest uppercase">Featured Tutorial</span>
                        <h2 className="text-2xl md:text-5xl font-bold text-white mb-4 max-w-3xl leading-tight drop-shadow-lg">{featuredVideo.title}</h2>
                        <div className="flex items-center gap-4 text-gray-200 text-sm mb-8 font-medium">
                            <span className="flex items-center gap-2"><img src={`https://ui-avatars.com/api/?name=${featuredVideo.channel}&background=random`} className="w-6 h-6 rounded-full" alt="" /> {featuredVideo.channel}</span>
                            <span>•</span>
                            <span>{featuredVideo.views} views</span>
                            <span>•</span>
                            <span className="bg-white/20 px-2 py-0.5 rounded text-xs">{featuredVideo.duration}</span>
                        </div>
                        <button className="bg-white text-black px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform shadow-xl">
                            <Play className="w-5 h-5 fill-current" /> Watch Now
                        </button>
                    </div>
                </div>

                {/* Saved Shelf (If logged in) */}
                {user && savedIds.size > 0 && (
                    <VideoShelf title="Your Watch List" videos={VIDEOS.filter(v => savedIds.has(v.id))} />
                )}

                {/* Category Shelves */}
                <VideoShelf title="Recommended for You" videos={VIDEOS.slice(0, 8)} />
                <VideoShelf title="HTML Essentials" videos={VIDEOS.filter(v => v.category === 'html')} />
                <VideoShelf title="Mastering CSS" videos={VIDEOS.filter(v => v.category === 'css')} />
                <VideoShelf title="JavaScript Logic" videos={VIDEOS.filter(v => v.category === 'js')} />
                <VideoShelf title="TypeScript" videos={VIDEOS.filter(v => v.category === 'ts')} />
                <VideoShelf title="Python Programming" videos={VIDEOS.filter(v => v.category === 'py')} />
                <VideoShelf title="Java Development" videos={VIDEOS.filter(v => v.category === 'java')} />
            </>
         )}

         {/* VIEW 2: Grid Layout (Filtering/Saved) */}
         {isFiltering && (
             <div>
                 <h2 className={`text-xl font-bold ${themeColors.text} mb-6`}>
                     {viewMode === 'saved' ? 'Saved Videos' : 'Search Results'} 
                     <span className={`ml-2 text-sm font-normal ${themeColors.textSecondary}`}>({filteredVideos.length} videos)</span>
                 </h2>
                 
                 {filteredVideos.length === 0 ? (
                     <div className="flex flex-col items-center justify-center py-20 text-center opacity-50">
                         <Filter className="w-16 h-16 mb-4" />
                         <p className="text-xl">No videos found matching your filters.</p>
                         <button onClick={() => { setSearchQuery(''); setFilterDifficulty('all'); setFilterDuration('all'); }} className="mt-4 text-brand-400 hover:underline">Clear Filters</button>
                     </div>
                 ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filteredVideos.map(video => (
                            <VideoCard key={video.id} video={video} />
                        ))}
                    </div>
                 )}
             </div>
         )}

         {/* Footer Area */}
         <div className="mt-20 pt-10 border-t border-white/5 text-center">
             <p className={`text-sm ${themeColors.textSecondary}`}>
                 Content curated from top educational channels. <br/>All rights belong to original creators.
             </p>
         </div>

      </div>

      {/* Video Player Modal */}
      {playingVideo && (
         <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur flex items-center justify-center p-4">
            <div className="w-full max-w-6xl bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col max-h-[90vh]">
               <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <h3 className="text-white font-bold truncate pr-4 flex-1">{playingVideo.title}</h3>
                  <button onClick={() => setPlayingVideo(null)} className="text-gray-400 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors">
                     <X className="w-6 h-6" />
                  </button>
               </div>
               
               <div className="aspect-video w-full bg-black relative group">
                  <iframe 
                     width="100%" 
                     height="100%" 
                     src={`https://www.youtube.com/embed/${playingVideo.youtubeId}?autoplay=1`} 
                     title="YouTube video player" 
                     frameBorder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowFullScreen
                  ></iframe>
               </div>

               <div className="p-6 bg-[#2B2D31] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                   <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${playingVideo.category === 'html' ? 'bg-[#E34F26]' : playingVideo.category === 'css' ? 'bg-[#264DE4]' : playingVideo.category === 'js' ? 'bg-[#F7DF1E] text-black' : playingVideo.category === 'ts' ? 'bg-[#3178C6]' : playingVideo.category === 'py' ? 'bg-[#3776AB]' : 'bg-[#E76F00]'}`}>
                             {playingVideo.channel.charAt(0)}
                          </div>
                          <div>
                             <p className="text-white font-bold text-lg leading-none">{playingVideo.channel}</p>
                             <p className="text-gray-400 text-xs mt-1">Subscribed via DevNexus</p>
                          </div>
                      </div>
                      <div className="flex gap-2 text-sm text-gray-400 mt-3">
                         <span className={`uppercase text-[10px] font-bold px-2 py-0.5 rounded ${getDifficulty(playingVideo.tags) === 'beginner' ? 'bg-green-500/20 text-green-400' : 'bg-white/10'}`}>
                             {getDifficulty(playingVideo.tags)}
                         </span>
                         <span>{playingVideo.views} views</span>
                         <span>•</span>
                         <span>{playingVideo.date}</span>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-3 w-full md:w-auto">
                      <button 
                        onClick={(e) => handleSaveToggle(e, playingVideo.id)}
                        className={`flex-1 md:flex-none px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${savedIds.has(playingVideo.id) ? 'bg-brand-600 text-white' : 'bg-white/5 text-gray-300 hover:bg-white/10'}`}
                      >
                         <Bookmark className={`w-4 h-4 ${savedIds.has(playingVideo.id) ? 'fill-current' : ''}`} /> 
                         {savedIds.has(playingVideo.id) ? 'Saved' : 'Save'}
                      </button>
                      
                      <a 
                         href={`https://www.youtube.com/watch?v=${playingVideo.youtubeId}`} 
                         target="_blank" 
                         rel="noreferrer"
                         className="flex-1 md:flex-none px-6 py-3 rounded-lg bg-[#FF0000] hover:bg-opacity-90 text-white font-bold flex items-center justify-center gap-2"
                      >
                         <ExternalLink className="w-4 h-4" /> YouTube
                      </a>
                   </div>
               </div>
            </div>
         </div>
      )}

    </div>
  );
};
