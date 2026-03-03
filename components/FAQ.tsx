
import React, { useState } from 'react';
import { ThemeColors } from '../types';
import { HelpCircle, ChevronDown, ChevronUp, Search, Monitor, Code, User, Star } from 'lucide-react';

interface FAQProps {
  themeColors: ThemeColors;
}

type Category = 'general' | 'website' | 'tech';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: Category;
}

const FAQ_DATA: FAQItem[] = [
  // General
  { id: 'g1', category: 'general', question: "Is DevNexus free to use?", answer: "Yes, DevNexus offers a comprehensive free tier that includes access to documentation, basic quizzes, and the playground. Some advanced features like personalized stats and the AI assistant require a free account." },
  { id: 'g2', category: 'general', question: "Do I need to create an account?", answer: "You can browse the documentation and use the basic playground as a guest. However, to save your progress, track quiz streaks, save videos, and use the AI Tutor, you'll need to sign up." },
  { id: 'g3', category: 'general', question: "How do I reset my password?", answer: "Currently, since this is a demo environment, account management features like password reset are mocked. In a production version, you would find this in your Profile settings." },
  
  // Website Features
  { id: 'w1', category: 'website', question: "How does the IDE Playground work?", answer: "The Playground runs your HTML, CSS, and JavaScript code locally in your browser within a sandboxed iframe. No data is sent to a server, ensuring fast performance and privacy." },
  { id: 'w2', category: 'website', question: "Why is the AI Assistant locked?", answer: "The AI Assistant consumes API resources (Google Gemini), so we require users to be logged in to prevent abuse and manage usage quotas." },
  { id: 'w3', category: 'website', question: "Can I save my code snippets?", answer: "Yes! In the IDE Playground, you can download your project as a .zip file. We are also working on a cloud save feature for logged-in users." },
  { id: 'w4', category: 'website', question: "How is the 'Skill Quiz' score calculated?", answer: "Your score is based on accuracy and speed. You earn XP for every correct answer, and bonus XP for maintaining a streak of correct answers." },
  
  // Technical
  { id: 't1', category: 'tech', question: "What is the difference between Java and JavaScript?", answer: "They are completely different languages. Java is a compiled, object-oriented language used for backend and Android development. JavaScript is an interpreted language primarily used for making web pages interactive." },
  { id: 't2', category: 'tech', question: "Why isn't my CSS showing in the preview?", answer: "Make sure you are linking your CSS file correctly if using external files, or check for syntax errors. In our Playground, 'style.css' is automatically linked to 'index.html'." },
  { id: 't3', category: 'tech', question: "Does DevNexus support libraries like React or Vue?", answer: "Currently, the Playground natively supports vanilla HTML/CSS/JS. You can use CDN links to import libraries like React, Vue, or Tailwind CSS within your HTML file." },
];

export const FAQ: React.FC<FAQProps> = ({ themeColors }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(['g1']));
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');

  const toggleItem = (id: string) => {
    const newSet = new Set(openItems);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setOpenItems(newSet);
  };

  const filteredItems = FAQ_DATA.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) || item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryIcon = (cat: Category) => {
    if (cat === 'general') return <User className="w-5 h-5" />;
    if (cat === 'website') return <Monitor className="w-5 h-5" />;
    return <Code className="w-5 h-5" />;
  };

  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">
      {/* Header */}
      <div className={`p-6 border-b ${themeColors.sidebarBorder} flex items-center gap-4`}>
        <div className="p-3 bg-brand-600/20 rounded-xl">
          <HelpCircle className="w-8 h-8 text-brand-500" />
        </div>
        <div>
          <h1 className={`text-2xl font-bold ${themeColors.text}`}>Frequently Asked Questions</h1>
          <p className={themeColors.textSecondary}>Find answers to common questions about DevNexus</p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          
          {/* Search & Filters */}
          <div className="mb-8 space-y-6">
             <div className="relative">
                <Search className={`absolute left-4 top-3.5 w-5 h-5 ${themeColors.textSecondary}`} />
                <input 
                   type="text" 
                   placeholder="Search questions..." 
                   value={searchQuery}
                   onChange={(e) => setSearchQuery(e.target.value)}
                   className={`w-full pl-12 pr-4 py-3 rounded-xl ${themeColors.inputBg} ${themeColors.inputBorder} border ${themeColors.text} focus:ring-2 focus:ring-brand-500 focus:outline-none transition-all shadow-sm`}
                />
             </div>

             <div className="flex flex-wrap gap-2">
                {(['all', 'general', 'website', 'tech'] as const).map(cat => (
                   <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-lg text-sm font-bold capitalize transition-all flex items-center gap-2 ${activeCategory === cat ? 'bg-brand-600 text-white shadow-md' : `${themeColors.card} border ${themeColors.cardBorder} ${themeColors.textSecondary} hover:bg-white/5`}`}
                   >
                      {cat === 'all' && <Star className="w-4 h-4" />}
                      {cat === 'general' && <User className="w-4 h-4" />}
                      {cat === 'website' && <Monitor className="w-4 h-4" />}
                      {cat === 'tech' && <Code className="w-4 h-4" />}
                      {cat === 'all' ? 'All Questions' : cat}
                   </button>
                ))}
             </div>
          </div>

          {/* Accordion */}
          <div className="space-y-4">
             {filteredItems.length === 0 ? (
                 <div className="text-center py-12 text-gray-500">
                    <HelpCircle className="w-12 h-12 mx-auto mb-4 opacity-30" />
                    <p className="text-lg font-medium">No questions found matching your search.</p>
                    <button onClick={() => setSearchQuery('')} className="mt-2 text-brand-400 hover:underline">Clear Search</button>
                 </div>
             ) : (
                 filteredItems.map(item => (
                    <div key={item.id} className={`${themeColors.card} border ${themeColors.cardBorder} rounded-xl overflow-hidden transition-all hover:border-brand-500/30`}>
                       <button 
                          onClick={() => toggleItem(item.id)}
                          className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                       >
                          <div className="flex items-center gap-4">
                             <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${openItems.has(item.id) ? 'bg-brand-500 text-white' : 'bg-white/5 text-gray-400'}`}>
                                {getCategoryIcon(item.category)}
                             </div>
                             <span className={`font-bold text-lg ${openItems.has(item.id) ? themeColors.text : themeColors.textSecondary} transition-colors`}>
                                {item.question}
                             </span>
                          </div>
                          {openItems.has(item.id) ? <ChevronUp className="w-5 h-5 text-brand-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
                       </button>
                       
                       {openItems.has(item.id) && (
                          <div className={`px-5 pb-6 pl-[4.5rem] ${themeColors.textSecondary} leading-relaxed animate-in slide-in-from-top-2 duration-200`}>
                             {item.answer}
                          </div>
                       )}
                    </div>
                 ))
             )}
          </div>

          {/* Contact CTA */}
          <div className={`mt-12 p-8 rounded-2xl bg-gradient-to-r from-brand-900/50 to-purple-900/50 border ${themeColors.cardBorder} text-center`}>
              <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
              <p className="text-gray-300 mb-6">Can't find the answer you're looking for? Our support team is here to help.</p>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform">
                 Contact Support
              </button>
          </div>

        </div>
      </div>
    </div>
  );
};
