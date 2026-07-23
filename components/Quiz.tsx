import React, { useState, useEffect, useRef } from 'react';
import { ThemeColors, QuizQuestion, Difficulty } from '../types';
import { QUIZ_QUESTIONS } from '../data';
import { CheckCircle, XCircle, Award, RefreshCw, ArrowRight, HelpCircle, Settings, AlertTriangle, Code, Play, RotateCcw, Palette, Zap, Clock, Flame, Share2, FileJson, FileType, Coffee, Hash } from 'lucide-react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';

interface QuizProps {
  themeColors: ThemeColors;
  onQuizComplete?: (correctCount: number) => void;
}

type QuizMode = 'setup' | 'active' | 'result';
type QuizCategory = 'html' | 'css' | 'js' | 'ts' | 'py' | 'java' | 'all';
type TimerDuration = 0 | 10 | 20 | 30;

export const Quiz: React.FC<QuizProps> = ({ themeColors, onQuizComplete }) => {
  // State
  const [mode, setMode] = useState<QuizMode>('setup');
  
  // Setup State
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<Difficulty>('medium');
  const [questionCount, setQuestionCount] = useState(5);
  const [timerDuration, setTimerDuration] = useState<TimerDuration>(0);

  // Active Quiz State
  const [activeQuestions, setActiveQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [currentStreak, setCurrentStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  
  // Multiple Choice State
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  
  // Coding Question State
  const [codeAnswer, setCodeAnswer] = useState('');
  
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [history, setHistory] = useState<{question: QuizQuestion, correct: boolean}[]>([]);

  // Helper to shuffle array
  const shuffleArray = <T,>(array: T[]): T[] => {
      return [...array].sort(() => Math.random() - 0.5);
  };

  // Resolves which option index is correct for a question.
  // The QUIZ_QUESTIONS data in data.ts stores the correct answer as the literal
  // answer text (`correct: string`), not as an index (`correctAnswer: number`).
  // This checks for an explicit index first (in case that shape is used in the
  // future), then falls back to matching `correct` against the options text -
  // which is what every question in the current data actually relies on.
  const getCorrectOptionIndex = (q: QuizQuestion): number => {
    if (typeof q.correctAnswer === 'number') return q.correctAnswer;
    if (q.correct && q.options) {
      return q.options.findIndex(opt => opt === q.correct);
    }
    return -1;
  };

  // Timer Effect
  useEffect(() => {
    if (mode === 'active' && timerDuration > 0 && !isAnswerChecked) {
      if (timeLeft > 0) {
        const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        return () => clearTimeout(timerId);
      } else {
        // Time's up!
        handleCheckAnswer(true);
      }
    }
  }, [timeLeft, mode, isAnswerChecked, timerDuration]);

  // Reset timer when question changes
  useEffect(() => {
    if (mode === 'active' && timerDuration > 0) {
      setTimeLeft(timerDuration);
    }
  }, [currentQuestionIndex, mode, timerDuration]);

  // Keyboard Navigation Effect
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const currentQ = activeQuestions[currentQuestionIndex];
      const isCoding = currentQ?.type === 'code';
      
      if (mode !== 'active' || isCoding) return;

      // Number keys 1-4 for option selection
      if (['1', '2', '3', '4'].includes(e.key)) {
        const index = parseInt(e.key) - 1;
        if (currentQ.options && index < currentQ.options.length && !isAnswerChecked) {
          setSelectedOption(index);
        }
      }

      // Enter key to check answer or move to next
      if (e.key === 'Enter') {
        if (!isAnswerChecked && selectedOption !== null) {
          handleCheckAnswer(false);
        } else if (isAnswerChecked) {
          handleNextQuestion();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mode, activeQuestions, currentQuestionIndex, isAnswerChecked, selectedOption]);


  // --- Handlers ---

  const startQuiz = () => {
      const filtered = QUIZ_QUESTIONS.filter(q => {
          const catMatch = selectedCategory === 'all' || q.category === selectedCategory;
          const diffMatch = !q.difficulty || q.difficulty === selectedDifficulty;
          return catMatch && diffMatch;
      });

      // Fallback if not enough questions
      let questionsToUse = filtered;
      if (filtered.length < questionCount) {
          const extras = QUIZ_QUESTIONS.filter(q => (selectedCategory === 'all' || q.category === selectedCategory) && q.difficulty !== selectedDifficulty);
          questionsToUse = [...filtered, ...extras];
      }

      const shuffled = shuffleArray(questionsToUse).slice(0, questionCount);
      
      if (shuffled.length === 0) {
        alert("No questions found for this criteria. Try a different difficulty.");
        return;
      }

      setActiveQuestions(shuffled);
      setCurrentQuestionIndex(0);
      setHistory([]);
      setMode('active');
      setStartTime(Date.now());
      setCurrentStreak(0);
      setBestStreak(0);
      resetQuestionState(shuffled[0]);
  };

  const resetQuestionState = (question: QuizQuestion) => {
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setIsCorrect(false);
    if (question.type === 'code') {
      setCodeAnswer(question.startingCode || '');
    }
  };

  const handleCheckAnswer = (timeOut = false) => {
    const currentQ = activeQuestions[currentQuestionIndex];
    let correct = false;

    if (timeOut) {
      correct = false;
    } else if (currentQ.type === 'code') {
      // Code Validation
      const code = codeAnswer;
      const hasAllPatterns = currentQ.validationPatterns?.every(pattern => pattern.test(code));
      const hasNoForbidden = !currentQ.forbiddenPatterns?.some(pattern => pattern.test(code));
      correct = !!(hasAllPatterns && hasNoForbidden);
    } else {
      // Multiple Choice
      correct = selectedOption !== null && selectedOption === getCorrectOptionIndex(currentQ);
    }

    setIsCorrect(correct);
    setHistory(prev => [...prev, { question: currentQ, correct }]);
    setIsAnswerChecked(true);

    if (correct) {
      const newStreak = currentStreak + 1;
      setCurrentStreak(newStreak);
      if (newStreak > bestStreak) setBestStreak(newStreak);
    } else {
      setCurrentStreak(0);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < activeQuestions.length) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      resetQuestionState(activeQuestions[nextIndex]);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
      setEndTime(Date.now());
      setMode('result');
  };
  
  // Trigger callback when entering result mode
  useEffect(() => {
      if (mode === 'result') {
          const correctCount = history.filter(h => h.correct).length;
          if (onQuizComplete) onQuizComplete(correctCount);
      }
  }, [mode, history, onQuizComplete]);


  const handleRestart = () => {
    setMode('setup');
  };

  const handleShareScore = (percentage: number, grade: string) => {
    const text = `🏆 DevNexus Quiz Result\n\nSubject: ${selectedCategory.toUpperCase()}\nDifficulty: ${selectedDifficulty.toUpperCase()}\nScore: ${percentage}% (${grade})\nStreak: ${bestStreak} 🔥\n\nCan you beat my score?`;
    navigator.clipboard.writeText(text);
    alert("Score copied to clipboard!");
  };

  // Highlight code helper
  const highlightCode = (code: string) => {
    if (typeof Prism === 'undefined') return code;
    // Default to javascript highlighting for ease in this demo, or switch based on category
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  };

  const getCategoryIcon = (cat: string) => {
      switch(cat) {
          case 'html': return <Code className="w-5 h-5" />;
          case 'css': return <Palette className="w-5 h-5" />;
          case 'js': return <FileJson className="w-5 h-5" />;
          case 'ts': return <FileType className="w-5 h-5" />;
          case 'py': return <Hash className="w-5 h-5" />;
          case 'java': return <Coffee className="w-5 h-5" />;
          default: return <Zap className="w-5 h-5" />;
      }
  };

  // --- Rendering Phases ---

  // 1. Setup Phase
  if (mode === 'setup') {
      return (
        <div className="flex-1 flex items-center justify-center p-4 overflow-y-auto">
           <div className={`${themeColors.card} border ${themeColors.cardBorder} rounded-2xl shadow-xl p-8 max-w-lg w-full`}>
               <div className="text-center mb-8">
                   <div className="bg-brand-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-500">
                       <Settings className="w-8 h-8" />
                   </div>
                   <h1 className={`text-3xl font-bold ${themeColors.text} mb-2`}>Configure Quiz</h1>
                   <p className={themeColors.textSecondary}>Customize your learning session</p>
               </div>

               <div className="space-y-6">
                   {/* Topic Selection */}
                   <div>
                       <label className={`block text-xs font-bold ${themeColors.textSecondary} mb-2 uppercase tracking-wide`}>Topic</label>
                       <div className="grid grid-cols-4 gap-2">
                           {(['all', 'html', 'css', 'js', 'ts', 'py', 'java'] as const).map(cat => (
                               <button 
                                  key={cat}
                                  onClick={() => setSelectedCategory(cat)}
                                  className={`p-2.5 rounded-lg border text-sm font-bold transition-all flex flex-col items-center gap-2 ${selectedCategory === cat ? 'bg-brand-600 border-brand-500 text-white shadow-md' : `${themeColors.inputBg} ${themeColors.inputBorder} ${themeColors.textSecondary} hover:bg-white/5`}`}
                               >
                                   {getCategoryIcon(cat)}
                                   <span className="uppercase text-[10px]">{cat === 'all' ? 'Mixed' : cat}</span>
                               </button>
                           ))}
                       </div>
                   </div>

                   {/* Difficulty Selection */}
                   <div>
                       <label className={`block text-xs font-bold ${themeColors.textSecondary} mb-2 uppercase tracking-wide`}>Difficulty</label>
                       <div className="grid grid-cols-3 gap-2">
                           {(['easy', 'medium', 'hard'] as const).map(diff => (
                               <button 
                                  key={diff}
                                  onClick={() => setSelectedDifficulty(diff)}
                                  className={`p-2.5 rounded-lg border text-sm font-bold transition-all capitalize ${selectedDifficulty === diff ? 'bg-brand-600 border-brand-500 text-white shadow-md' : `${themeColors.inputBg} ${themeColors.inputBorder} ${themeColors.textSecondary} hover:bg-white/5`}`}
                               >
                                   {diff}
                               </button>
                           ))}
                       </div>
                   </div>

                   {/* Timer & Count */}
                   <div className="grid grid-cols-2 gap-4 divide-x divide-white/10">
                       <div className="pr-2">
                           <label className={`block text-xs font-bold ${themeColors.textSecondary} mb-2 uppercase tracking-wide`}>Timer</label>
                           <div className="grid grid-cols-3 gap-2">
                               {[0, 20, 30].map(sec => (
                                   <button 
                                      key={sec}
                                      onClick={() => setTimerDuration(sec as TimerDuration)}
                                      className={`p-2 rounded border text-xs font-bold ${timerDuration === sec ? 'bg-brand-600 text-white' : `${themeColors.inputBg} ${themeColors.textSecondary}`}`}
                                   >
                                       {sec === 0 ? 'Off' : `${sec}s`}
                                   </button>
                               ))}
                           </div>
                       </div>
                        <div className="pl-4">
                           <label className={`block text-xs font-bold ${themeColors.textSecondary} mb-2 uppercase tracking-wide`}>Count</label>
                           <div className="grid grid-cols-3 gap-2">
                               {[5, 10, 20].map(num => (
                                   <button 
                                      key={num}
                                      onClick={() => setQuestionCount(num)}
                                      className={`p-2 rounded border text-xs font-bold ${questionCount === num ? 'bg-brand-600 text-white' : `${themeColors.inputBg} ${themeColors.textSecondary}`}`}
                                   >
                                       {num}
                                   </button>
                               ))}
                           </div>
                       </div>
                   </div>

                   <button 
                      onClick={startQuiz}
                      className="w-full bg-[#23A559] hover:bg-[#1b8747] text-white font-bold py-4 rounded-xl mt-4 shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
                   >
                       Start Quiz <ArrowRight className="w-5 h-5" />
                   </button>
               </div>
           </div>
        </div>
      );
  }

  // 2. Result Phase 
  if (mode === 'result') {
    const correctCount = history.filter(h => h.correct).length;
    const percentage = Math.round((correctCount / activeQuestions.length) * 100);
    const totalTimeSeconds = Math.floor((endTime - startTime) / 1000);
    const incorrectAnswers = history.filter(h => !h.correct);
    const weakTopics = [...new Set(incorrectAnswers.map(h => h.question.topic || h.question.category))].filter(Boolean);
    
    let grade = '';
    let color = '';
    if (percentage >= 90) { grade = 'Expert Developer'; color = 'text-yellow-500'; }
    else if (percentage >= 70) { grade = 'Proficient Coder'; color = 'text-green-500'; }
    else if (percentage >= 50) { grade = 'Junior Dev'; color = 'text-blue-500'; }
    else { grade = 'Novice Learner'; color = 'text-gray-500'; }

    return (
      <div className="flex-1 flex items-center justify-center p-4 overflow-y-auto">
        <div className={`${themeColors.card} border ${themeColors.cardBorder} p-8 rounded-2xl shadow-2xl max-w-2xl w-full text-center`}>
          <div className="mb-6 inline-flex p-4 rounded-full bg-gradient-to-br from-brand-500/20 to-purple-500/20">
            <Award className={`w-16 h-16 ${color}`} />
          </div>
          <h2 className={`text-3xl font-bold ${themeColors.text} mb-2`}>Quiz Completed!</h2>
          <p className={`${themeColors.textSecondary} mb-6`}>You scored {correctCount} out of {activeQuestions.length}</p>
          
          <div className="text-5xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-400 to-purple-400">
            {percentage}%
          </div>
          <div className={`text-lg font-medium ${color} mb-8`}>{grade}</div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-4 mb-8">
             <div className={`p-3 rounded-lg border ${themeColors.cardBorder} bg-white/5`}>
                <p className={`text-xs ${themeColors.textSecondary} uppercase tracking-wider mb-1`}>Fastest Time</p>
                <p className={`text-xl font-bold ${themeColors.text} flex items-center justify-center gap-1`}>
                   <Clock className="w-4 h-4 text-blue-400" /> {totalTimeSeconds}s
                </p>
             </div>
             <div className={`p-3 rounded-lg border ${themeColors.cardBorder} bg-white/5`}>
                <p className={`text-xs ${themeColors.textSecondary} uppercase tracking-wider mb-1`}>Best Streak</p>
                <p className={`text-xl font-bold ${themeColors.text} flex items-center justify-center gap-1`}>
                   <Flame className="w-4 h-4 text-orange-500" /> {bestStreak}
                </p>
             </div>
             <div className={`p-3 rounded-lg border ${themeColors.cardBorder} bg-white/5`}>
                <p className={`text-xs ${themeColors.textSecondary} uppercase tracking-wider mb-1`}>XP Earned</p>
                <p className={`text-xl font-bold ${themeColors.text} flex items-center justify-center gap-1`}>
                   <Zap className="w-4 h-4 text-yellow-400" /> {correctCount * 20}
                </p>
             </div>
          </div>

          {/* Feedback Section */}
          {weakTopics.length > 0 && (
              <div className={`mb-8 text-left bg-red-500/5 border border-red-500/20 rounded-xl p-5`}>
                  <h3 className="text-red-400 font-bold flex items-center gap-2 mb-3">
                      <AlertTriangle className="w-5 h-5" /> Areas to Improve
                  </h3>
                  <div className="flex flex-wrap gap-2">
                      {weakTopics.map(topic => (
                          <span key={topic} className="px-3 py-1 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full text-sm font-medium">
                              {topic}
                          </span>
                      ))}
                  </div>
              </div>
          )}

          <div className="flex gap-4">
             <button 
               onClick={() => handleShareScore(percentage, grade)}
               className="flex-1 bg-[#5865F2] hover:bg-opacity-90 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
             >
               <Share2 className="w-4 h-4" /> Share Score
             </button>
             <button 
               onClick={handleRestart}
               className="flex-1 bg-brand-600 hover:bg-brand-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all"
             >
               <RefreshCw className="w-4 h-4" /> New Quiz
             </button>
          </div>
        </div>
      </div>
    );
  }

  // 3. Active Phase
  const currentQ = activeQuestions[currentQuestionIndex];
  const isCoding = currentQ.type === 'code';
  const correctOptionIndex = getCorrectOptionIndex(currentQ);
  
  return (
    <div className="flex-1 overflow-hidden flex flex-col h-full">
      {/* Header */}
      <div className={`flex items-center justify-between p-4 border-b ${themeColors.sidebarBorder} shrink-0`}>
        <div>
          <h1 className={`text-lg font-bold ${themeColors.text} flex items-center gap-2`}>
            {getCategoryIcon(currentQ.category)}
            Question {currentQuestionIndex + 1}
            {currentStreak > 1 && (
               <span className="ml-2 text-xs bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Flame className="w-3 h-3" /> {currentStreak} Streak
               </span>
            )}
          </h1>
          <p className={`text-xs ${themeColors.textSecondary}`}>
            {currentQ.difficulty && (
              <span className="uppercase tracking-wider font-bold opacity-70">{currentQ.difficulty}</span>
            )}
            {currentQ.difficulty && (currentQ.topic || currentQ.category) && ' • '}
            {currentQ.topic || currentQ.category}
          </p>
        </div>
        
        <div className="flex items-center gap-4">
           {timerDuration > 0 && (
              <div className={`flex items-center gap-1 font-mono font-bold text-lg ${timeLeft < 5 ? 'text-red-500 animate-pulse' : themeColors.text}`}>
                 <Clock className="w-4 h-4" /> {timeLeft}s
              </div>
           )}
           <div className={`text-sm font-mono font-bold ${themeColors.textSecondary} bg-black/10 px-3 py-1 rounded-full`}>
             {currentQuestionIndex + 1} / {activeQuestions.length}
           </div>
        </div>
      </div>

      {/* Progress & Timer Bar */}
      <div className="w-full h-1 bg-black/20 shrink-0 relative">
        <div 
          className="h-full bg-brand-500 transition-all duration-500"
          style={{ width: `${((currentQuestionIndex + 1) / activeQuestions.length) * 100}%` }}
        />
        {timerDuration > 0 && !isAnswerChecked && (
           <div 
             className="absolute top-0 left-0 h-full bg-red-500/50 transition-all duration-1000 ease-linear"
             style={{ width: `${(timeLeft / timerDuration) * 100}%` }}
           />
        )}
      </div>

      {/* Content Area */}
      <div className={`flex-1 overflow-y-auto p-4 sm:p-8 w-full mx-auto ${isCoding ? 'max-w-5xl' : 'max-w-3xl'}`}>
        
        <h2 className={`text-xl font-medium ${themeColors.text} mb-6 leading-relaxed`}>
          {currentQ.question}
        </h2>

        {isCoding ? (
          // --- Interactive Coding Interface ---
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[400px] mb-6">
            <div className="flex flex-col rounded-xl border border-gray-700 overflow-hidden bg-[#1e1e1e]">
              <div className="flex items-center justify-between bg-[#2d2d2d] px-3 py-2 text-xs text-gray-400 border-b border-gray-700">
                 <span>Editor</span>
                 <button onClick={() => setCodeAnswer(currentQ.startingCode || '')} className="hover:text-white flex items-center gap-1">
                   <RotateCcw className="w-3 h-3" /> Reset
                 </button>
              </div>
              <div className="flex-1 overflow-auto custom-scrollbar relative">
                 <Editor
                    value={codeAnswer}
                    onValueChange={c => !isAnswerChecked && setCodeAnswer(c)}
                    highlight={highlightCode}
                    padding={16}
                    className="font-mono min-h-full"
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: 14,
                      backgroundColor: 'transparent',
                      color: '#e4e4e4',
                    }}
                    textareaClassName="focus:outline-none"
                    disabled={isAnswerChecked}
                 />
              </div>
            </div>
            <div className="flex flex-col rounded-xl border border-gray-700 overflow-hidden bg-white">
               <div className="bg-[#f0f0f0] px-3 py-2 text-xs text-gray-500 border-b border-gray-300 flex items-center gap-1">
                 <Play className="w-3 h-3" /> Output Check
               </div>
               <div className="flex-1 bg-white p-4 overflow-auto">
                  <iframe 
                    title="quiz-preview"
                    srcDoc={`<html><head><style>body{font-family:sans-serif;}</style></head><body><pre>${codeAnswer}</pre></body></html>`}
                    className="w-full h-full border-none"
                    sandbox="allow-scripts"
                  />
               </div>
            </div>
          </div>
        ) : (
          // --- Multiple Choice Interface ---
          <div className="space-y-3 mb-8 w-full">
            {currentQ.options?.map((option, index) => {
              let optionClass = `${themeColors.inputBg} border ${themeColors.cardBorder} hover:border-brand-500/50`;
              
              if (isAnswerChecked) {
                if (index === correctOptionIndex) {
                  optionClass = "bg-green-500/10 border-green-500 text-green-500";
                } else if (index === selectedOption) {
                  optionClass = "bg-red-500/10 border-red-500 text-red-500";
                } else {
                   optionClass = "opacity-50 border-transparent";
                }
              } else if (selectedOption === index) {
                 optionClass = "bg-brand-500/10 border-brand-500 text-brand-400 shadow-sm ring-1 ring-brand-500/50";
              }

              return (
                <button
                  key={index}
                  onClick={() => setSelectedOption(index)}
                  disabled={isAnswerChecked}
                  className={`w-full text-left p-4 rounded-xl transition-all flex items-center justify-between group ${optionClass}`}
                >
                  <div className="flex items-center gap-3">
                    {/* Mock Radio Button */}
                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${selectedOption === index ? 'border-brand-500 bg-brand-500/20' : 'border-gray-500'}`}>
                      {selectedOption === index && <div className="w-2 h-2 rounded-full bg-brand-500" />}
                    </div>
                    <span className={isAnswerChecked && index === correctOptionIndex ? 'font-bold' : ''}>
                      {option}
                    </span>
                  </div>
                  
                  <div className="flex gap-2">
                    {/* Keyboard Shortcut Hint */}
                    {!isAnswerChecked && <span className={`text-xs font-mono px-2 py-1 rounded bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity ${themeColors.textSecondary}`}>
                      {index + 1}
                    </span>}
                    
                    {isAnswerChecked && index === correctOptionIndex && <CheckCircle className="w-5 h-5 text-green-500" />}
                    {isAnswerChecked && index === selectedOption && index !== correctOptionIndex && <XCircle className="w-5 h-5 text-red-500" />}
                  </div>
                </button>
              );
            })}
          </div>
        )}

        {/* Action Bar */}
        <div className="flex items-center justify-between pt-4 border-t border-white/5">
           {isAnswerChecked ? (
             <div className={`flex-1 mr-4 text-sm ${themeColors.textSecondary} animate-in fade-in slide-in-from-bottom-2`}>
               <div className={`flex items-center gap-2 font-bold mb-1 ${isCorrect ? 'text-green-500' : 'text-red-400'}`}>
                  {isCorrect ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                  {isCorrect ? 'Correct!' : 'Incorrect/Time Up'}
               </div>
               {currentQ.explanation ? (
                 <p>{currentQ.explanation}</p>
               ) : (
                 !isCorrect && correctOptionIndex !== -1 && currentQ.options && (
                   <p>The correct answer was: <strong>{currentQ.options[correctOptionIndex]}</strong></p>
                 )
               )}
             </div>
           ) : <div />}
           
           {!isAnswerChecked ? (
             <button
               onClick={() => handleCheckAnswer(false)}
               disabled={isCoding ? codeAnswer.trim() === '' : selectedOption === null}
               className="px-6 py-2.5 bg-brand-600 hover:bg-brand-500 disabled:opacity-50 disabled:hover:bg-brand-600 text-white font-bold rounded-lg transition-all shadow-lg shadow-brand-500/20 flex items-center gap-2"
             >
               Check Answer
               <span className="hidden sm:inline-block text-xs bg-black/20 px-1.5 py-0.5 rounded opacity-70">Enter ↵</span>
             </button>
           ) : (
             <button
               onClick={handleNextQuestion}
               className="px-6 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-bold rounded-lg transition-all flex items-center gap-2 shadow-lg shadow-brand-500/20"
             >
               {currentQuestionIndex + 1 === activeQuestions.length ? 'Finish Quiz' : 'Next'} 
               <ArrowRight className="w-4 h-4" />
               <span className="hidden sm:inline-block text-xs bg-black/20 px-1.5 py-0.5 rounded opacity-70">Enter ↵</span>
             </button>
           )}
        </div>

      </div>
    </div>
  );
};