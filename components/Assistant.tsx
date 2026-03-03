
import React, { useState, useRef, useEffect } from 'react';
import { askGeminiAboutHtml } from '../services/geminiService';
import { ChatMessage, ThemeColors } from '../types';
import { Sparkles, Send, Bot, User, Code2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface AssistantProps {
  contextDocName?: string;
  themeColors: ThemeColors;
}

export const Assistant: React.FC<AssistantProps> = ({ contextDocName, themeColors }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'model',
      text: "Hello! I'm your DevNexus AI Tutor. I can explain complex concepts, debug your code, or generate examples for HTML, CSS, and JavaScript. What can I help you with today?"
    }
  ]);
  const [isThinking, setIsThinking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isThinking) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text: input
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsThinking(true);

    try {
      const responseText = await askGeminiAboutHtml(userMsg.text, contextDocName);
      const modelMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: responseText
      };
      setMessages(prev => [...prev, modelMsg]);
    } catch (err) {
       const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'model',
        text: "Sorry, I encountered an error connecting to the AI service."
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full relative overflow-hidden">
      {/* Header */}
      <div className={`p-6 border-b ${themeColors.sidebarBorder} flex items-center gap-4`}>
          <div className="p-3 bg-brand-600/20 rounded-xl">
             <Sparkles className="w-8 h-8 text-brand-500" />
          </div>
          <div>
            <h1 className={`text-2xl font-bold ${themeColors.text}`}>AI Tutor</h1>
            <p className={themeColors.textSecondary}>Powered by Google Gemini • Ask anything about web development</p>
          </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 custom-scrollbar scroll-smooth">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : 'max-w-3xl'}`}
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
              msg.role === 'user' ? 'bg-slate-600 text-white' : 'bg-brand-600 text-white shadow-lg shadow-brand-500/20'
            }`}>
              {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-6 h-6" />}
            </div>
            
            <div className={`flex-1 text-sm md:text-base leading-relaxed rounded-2xl px-6 py-4 shadow-sm ${
              msg.role === 'user' 
                ? 'bg-slate-700 text-white rounded-tr-none max-w-2xl' 
                : `${themeColors.card} ${themeColors.text} border ${themeColors.cardBorder} rounded-tl-none`
            }`}>
              {msg.role === 'model' ? (
                  <div className="prose prose-invert max-w-none prose-pre:bg-[#1e1e1e] prose-pre:border prose-pre:border-white/10 prose-code:text-brand-400">
                      <ReactMarkdown>{msg.text}</ReactMarkdown>
                  </div>
              ) : (
                  msg.text
              )}
            </div>
          </div>
        ))}
        
        {isThinking && (
            <div className="flex gap-4 max-w-3xl">
                <div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center shrink-0 animate-pulse">
                    <Bot className="w-6 h-6 text-white" />
                </div>
                <div className={`${themeColors.card} border ${themeColors.cardBorder} rounded-2xl rounded-tl-none px-6 py-4 flex items-center gap-2`}>
                    <span className={themeColors.textSecondary}>Thinking</span>
                    <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-brand-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className={`p-6 border-t ${themeColors.sidebarBorder} ${themeColors.bg}`}>
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto relative">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="How do I center a div? What is the difference between let and var?"
            className={`w-full ${themeColors.inputBg} ${themeColors.text} rounded-xl pl-5 pr-14 py-4 border ${themeColors.inputBorder} focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-sm text-base`}
            autoFocus
          />
          <button
            type="submit"
            disabled={!input.trim() || isThinking}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-brand-600 text-white rounded-lg hover:bg-brand-500 disabled:opacity-50 disabled:hover:bg-brand-600 transition-all"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
        <div className="text-center mt-3">
            <p className={`text-xs ${themeColors.textSecondary} flex items-center justify-center gap-1`}>
                <Code2 className="w-3 h-3" /> AI answers are generated by Gemini and may vary.
            </p>
        </div>
      </div>
    </div>
  );
};
