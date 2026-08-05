import React, { useState, useRef, useEffect, useCallback } from 'react';
import { ThemeColors } from '../types';
import {
  Files, Play, Settings, Maximize2, Minimize2, Plus,
  FileCode2, Palette, Braces, FileType2, Coffee,
  Terminal, ChevronDown, ArrowLeft, ArrowRight, RotateCw,
  Trash2, AlertCircle, Pencil, Columns
} from 'lucide-react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-typescript';

interface PlaygroundProps {
  themeColors: ThemeColors;
}

type Language = 'html' | 'css' | 'javascript' | 'typescript' | 'python' | 'java';

interface PlaygroundFile {
  id: string;
  name: string;
  language: Language;
  content: string;
}

interface LogEntry {
  type: 'info' | 'warn' | 'error';
  message: string;
  timestamp: string;
  count: number;
}

const LANGUAGE_META: Record<Language, { icon: React.ElementType; color: string; ext: string; prism: string }> = {
  html: { icon: FileCode2, color: '#E8734A', ext: '.html', prism: 'markup' },
  css: { icon: Palette, color: '#4B9FE8', ext: '.css', prism: 'css' },
  javascript: { icon: Braces, color: '#EFC94C', ext: '.js', prism: 'javascript' },
  typescript: { icon: FileType2, color: '#5B8DEF', ext: '.ts', prism: 'typescript' },
  python: { icon: Braces, color: '#6FBF73', ext: '.py', prism: 'python' },
  java: { icon: Coffee, color: '#E85A5A', ext: '.java', prism: 'java' },
};

const INITIAL_HTML = `<!DOCTYPE html>
<html>
  <head>
    <title>My Project</title>
  </head>
  <body>
    <h1>Hello, Codectionary!</h1>
  </body>
</html>`;

const INITIAL_CSS = `body {
  font-family: sans-serif;
  background: #f4f4f5;
  color: #18181b;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0;
}`;

const INITIAL_JS = `console.log('Hello from script.js');`;

const DEFAULT_FILES: PlaygroundFile[] = [
  { id: '1', name: 'index.html', language: 'html', content: INITIAL_HTML },
  { id: '2', name: 'style.css', language: 'css', content: INITIAL_CSS },
  { id: '3', name: 'script.js', language: 'javascript', content: INITIAL_JS },
];

const LANGUAGE_PICKER: { language: Language; label: string }[] = [
  { language: 'html', label: 'HTML' },
  { language: 'css', label: 'CSS' },
  { language: 'javascript', label: 'JavaScript' },
  { language: 'typescript', label: 'TypeScript' },
  { language: 'python', label: 'Python' },
  { language: 'java', label: 'Java' },
];

// Extension detection helper to auto-switch file formatting & syntax on rename
const detectLanguageFromName = (fileName: string, defaultLang: Language): Language => {
  const dotIndex = fileName.lastIndexOf('.');
  if (dotIndex === -1) return defaultLang;
  const ext = fileName.slice(dotIndex).toLowerCase();
  
  switch (ext) {
    case '.html':
    case '.htm':
      return 'html';
    case '.css':
      return 'css';
    case '.js':
    case '.mjs':
    case '.cjs':
      return 'javascript';
    case '.ts':
    case '.tsx':
      return 'typescript';
    case '.py':
      return 'python';
    case '.java':
      return 'java';
    default:
      return defaultLang;
  }
};

const PYODIDE_WORKER_CODE = `
  let pyodideReady = false;
  let pyodidePromise = null;

  self.onmessage = async (event) => {
    if (event.data.type === 'run') {
      if (!pyodidePromise) {
        self.postMessage({ type: 'info', message: 'Initializing Python Web Worker (first run takes a moment)...' });
        importScripts("https://cdn.jsdelivr.net/pyodide/v0.25.0/full/pyodide.js");
        
        pyodidePromise = loadPyodide({ indexURL: "https://cdn.jsdelivr.net/pyodide/v0.25.0/full/" })
          .then(pyodide => {
            pyodide.setStdout({ batched: (msg) => self.postMessage({ type: 'info', message: msg }) });
            pyodide.setStderr({ batched: (msg) => self.postMessage({ type: 'error', message: msg }) });
            pyodideReady = true;
            return pyodide;
          })
          .catch(err => {
            self.postMessage({ type: 'error', message: 'Failed to load Pyodide: ' + err.message });
            throw err;
          });
      }

      try {
        const pyodide = await pyodidePromise;
        await pyodide.runPythonAsync(event.data.code);
      } catch (e) {
        self.postMessage({ type: 'error', message: 'Python Error: ' + e.message });
      }
    }
  };
`;

export const Playground: React.FC<PlaygroundProps> = ({ themeColors }) => {
  const [projectName, setProjectName] = useState('Codectionary Project');
  const [files, setFiles] = useState<PlaygroundFile[]>(DEFAULT_FILES);
  const [activeFileId, setActiveFileId] = useState('1');
  
  // UI & Layout State
  const [isBottomPanelOpen, setIsBottomPanelOpen] = useState(true);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
  const [logFilter, setLogFilter] = useState<'all' | 'error'>('all');
  
  // Resizable Panels State
  const [showPreview, setShowPreview] = useState(true);
  const [splitPos, setSplitPos] = useState(50);
  const [consoleHeight, setConsoleHeight] = useState(176);
  const [isDraggingH, setIsDraggingH] = useState(false);
  const [isDraggingV, setIsDraggingV] = useState(false);

  // File Renaming State
  const [editingFileId, setEditingFileId] = useState<string | null>(null);
  const [editFileName, setEditFileName] = useState("");

  const containerRef = useRef<HTMLDivElement>(null);
  const workerRef = useRef<Worker | null>(null);

  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [srcDoc, setSrcDoc] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);
  const [tsModule, setTsModule] = useState<any>(null);

  const activeFile = files.find(f => f.id === activeFileId) ?? files[0];
  const errorCount = logs.filter(l => l.type === 'error').reduce((sum, log) => sum + log.count, 0);

  // --- Layout Dragging Handlers ---
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingH && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const sidebarWidth = 220;
        const availableWidth = rect.width - sidebarWidth;
        const mouseX = e.clientX - rect.left - sidebarWidth;
        let newPct = (mouseX / availableWidth) * 100;
        newPct = Math.max(15, Math.min(85, newPct));
        setSplitPos(newPct);
      }
      if (isDraggingV && containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const mouseY = e.clientY - rect.top;
        let newHeight = rect.height - mouseY;
        newHeight = Math.max(36, Math.min(rect.height - 100, newHeight));
        setConsoleHeight(newHeight);
        if (newHeight > 50) setIsBottomPanelOpen(true);
      }
    };
    const handleMouseUp = () => {
      setIsDraggingH(false);
      setIsDraggingV(false);
    };

    if (isDraggingH || isDraggingV) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDraggingH, isDraggingV]);

  // Close context menu on click
  useEffect(() => {
    const handleGlobalClick = () => setContextMenu(null);
    window.addEventListener('click', handleGlobalClick);
    return () => window.removeEventListener('click', handleGlobalClick);
  }, []);

  // --- Unified Log Appender (with Deduplication) ---
  const addLog = useCallback((logType: 'info' | 'warn' | 'error', message: string) => {
    setLogs(prev => {
      const lastLog = prev[prev.length - 1];
      if (lastLog && lastLog.message === message && lastLog.type === logType) {
        return [
          ...prev.slice(0, -1),
          { ...lastLog, count: lastLog.count + 1, timestamp: new Date().toLocaleTimeString() }
        ];
      }
      return [...prev, { type: logType, message, timestamp: new Date().toLocaleTimeString(), count: 1 }];
    });
    if (logType === 'error') setIsBottomPanelOpen(true);
  }, []);

  // --- Initialize Python Web Worker ---
  useEffect(() => {
    const blob = new Blob([PYODIDE_WORKER_CODE], { type: 'application/javascript' });
    const workerUrl = URL.createObjectURL(blob);
    const worker = new Worker(workerUrl);

    worker.onmessage = (e) => {
      addLog(e.data.type, String(e.data.message));
    };

    workerRef.current = worker;

    return () => {
      worker.terminate();
      URL.revokeObjectURL(workerUrl);
    };
  }, [addLog]);

  // --- Lazy Load TypeScript ---
  useEffect(() => {
    const hasTs = files.some(f => f.language === 'typescript');
    if (hasTs && !tsModule) {
      import('typescript').then(setTsModule).catch(() => {});
    }
  }, [files, tsModule]);

  // --- Pipeline 1: Live Preview Compilation ---
  useEffect(() => {
    const timeout = setTimeout(() => {
      const htmlFile = files.find(f => f.language === 'html') || files.find(f => f.name.endsWith('.html'));
      const cssFiles = files.filter(f => f.language === 'css');
      const jsFiles = files.filter(f => f.language === 'javascript');
      const tsFiles = files.filter(f => f.language === 'typescript');

      if (!htmlFile) {
        setSrcDoc(`<html><body style="font-family:sans-serif;color:#888;text-align:center;padding-top:3rem;">No HTML file found</body></html>`);
        return;
      }

      let fullHtml = htmlFile.content;
      const styleTags = cssFiles.map(f => `<style>${f.content}</style>`).join('\n');
      let scriptContent = jsFiles.map(f => f.content).join('\n');

      if (tsFiles.length > 0 && tsModule) {
        const transpiled = tsFiles.map(f => {
          const result = tsModule.transpileModule(f.content, {
            compilerOptions: { module: tsModule.ModuleKind.None, target: tsModule.ScriptTarget.ES2020 },
          });
          return result.outputText;
        }).join('\n');
        scriptContent += '\n' + transpiled;
      }

      fullHtml = fullHtml.includes('</head>')
        ? fullHtml.replace('</head>', `${styleTags}</head>`)
        : `${styleTags}${fullHtml}`;

      const consoleScript = `
        <script>
          (function () {
            function send(type, message) {
              try { window.parent.postMessage({ type: 'console-log', logType: type, message: message }, '*'); } catch (e) {}
            }
            const oldLog = console.log, oldWarn = console.warn, oldError = console.error;
            console.log = function (...args) { oldLog.apply(console, args); send('info', args.join(' ')); };
            console.warn = function (...args) { oldWarn.apply(console, args); send('warn', args.join(' ')); };
            console.error = function (...args) { oldError.apply(console, args); send('error', args.join(' ')); };
            window.onerror = function (msg, url, line) { send('error', 'Runtime Error: ' + msg + ' (Line ' + line + ')'); return false; };
            window.addEventListener('unhandledrejection', function (event) { send('error', 'Unhandled Promise: ' + event.reason); });
          })();
        </script>
      `;

      fullHtml = fullHtml.includes('</body>')
        ? fullHtml.replace('</body>', `${consoleScript}<script>${scriptContent}</script></body>`)
        : `${fullHtml}${consoleScript}<script>${scriptContent}</script>`;

      setSrcDoc(fullHtml);
    }, 600);

    return () => clearTimeout(timeout);
  }, [files, tsModule]);

  // --- Receive Console Logs ---
  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.data && e.data.type === 'console-log') {
        addLog(e.data.logType, String(e.data.message));
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [addLog]);

  // --- Pipeline 2: Manual Execution ---
  const handleRunClick = useCallback(() => {
    setLogs([]);
    setRefreshKey(k => k + 1);

    const pyFiles = files.filter(f => f.language === 'python');
    const javaFiles = files.filter(f => f.language === 'java');

    if (pyFiles.length > 0 && workerRef.current) {
      const pyContent = pyFiles.map(f => f.content).join('\n\n');
      workerRef.current.postMessage({ type: 'run', code: pyContent });
    }

    if (javaFiles.length > 0) {
      addLog('warn', `Java execution isn't supported in the live preview yet (${javaFiles.map(f => f.name).join(', ')} will not run).`);
    }
  }, [files, addLog]);

  // --- UI Handlers ---
  const updateActiveFileContent = (content: string) => {
    setFiles(prev => prev.map(f => (f.id === activeFileId ? { ...f, content } : f)));
  };

  const createNewFile = (language: Language) => {
    const meta = LANGUAGE_META[language];
    const newFile: PlaygroundFile = {
      id: Date.now().toString(),
      name: `untitled${meta.ext}`,
      language,
      content: '',
    };
    setFiles(prev => [...prev, newFile]);
    setActiveFileId(newFile.id);
    setIsPickerOpen(false);
    setContextMenu(null);
  };

  const deleteFile = (id: string) => {
    if (files.length <= 1) return;
    const remaining = files.filter(f => f.id !== id);
    setFiles(remaining);
    if (activeFileId === id) setActiveFileId(remaining[0].id);
  };

  // --- Dynamic File Rename & Auto-Format Detection ---
  const startRenaming = (e: React.MouseEvent, file: PlaygroundFile) => {
    e.stopPropagation();
    setEditingFileId(file.id);
    setEditFileName(file.name);
  };

  const handleRenameKeyDown = (e: React.KeyboardEvent, id: string) => {
    if (e.key === 'Enter') commitRename(id);
    if (e.key === 'Escape') setEditingFileId(null);
  };

  const commitRename = (id: string) => {
    const trimmedName = editFileName.trim();
    if (!trimmedName) {
      setEditingFileId(null);
      return;
    }

    setFiles(prev => prev.map(f => {
      if (f.id === id) {
        const newLanguage = detectLanguageFromName(trimmedName, f.language);
        return {
          ...f,
          name: trimmedName,
          language: newLanguage,
        };
      }
      return f;
    }));
    setEditingFileId(null);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!isFullscreen) {
      containerRef.current.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  const filteredLogs = logs.filter(log => logFilter === 'all' || log.type === 'error');

  return (
    <div ref={containerRef} className="flex flex-col h-full bg-[#131316] text-[#e8e8ea] font-sans overflow-hidden relative">
      
      {(isDraggingH || isDraggingV) && (
        <div 
          className="absolute inset-0 z-50" 
          style={{ cursor: isDraggingH ? 'col-resize' : 'row-resize' }} 
        />
      )}

      {/* ===== Top Bar ===== */}
      <div className="flex items-center justify-between px-5 py-3 bg-[#1c1c21] border-b border-[#2a2a30] shrink-0">
        <div className="flex items-center gap-2.5">
          <Files className="w-[18px] h-[18px] text-[#7F77DD]" />
          <input
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
            className="bg-transparent text-sm font-medium text-[#e8e8ea] outline-none focus:bg-[#232328] rounded px-1.5 py-0.5 -mx-1.5"
          />
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-1.5 text-[#6b6b72] hover:text-[#9d9da3] transition-colors bg-[#232328] hover:bg-[#2a2a32] px-2.5 py-1.5 rounded-lg text-[12px] font-medium"
          >
            <Columns className="w-3.5 h-3.5" />
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </button>
          
          <div className="w-px h-4 bg-[#2a2a30] mx-1"></div>

          <button
            onClick={handleRunClick}
            className="flex items-center gap-1.5 bg-[#1D9E75] hover:bg-[#1B8F69] transition-colors text-[#04342C] text-[13px] font-medium px-4 py-1.5 rounded-lg"
          >
            <Play className="w-3.5 h-3.5" fill="currentColor" />
            Run
          </button>
          <Settings className="w-[17px] h-[17px] text-[#6b6b72] hover:text-[#9d9da3] cursor-pointer transition-colors" />
          <button onClick={toggleFullscreen} className="text-[#6b6b72] hover:text-[#9d9da3] transition-colors">
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* ===== Main Body ===== */}
      <div className="flex flex-1 min-h-0 flex-row">

        {/* --- Icon Rail --- */}
        <div className="w-11 bg-[#0f0f12] border-r border-[#2a2a30] flex flex-col items-center pt-4 gap-4 shrink-0">
          <div className="p-1.5 rounded-lg bg-[#232328]">
            <Files className="w-[17px] h-[17px] text-[#b8b8bd]" />
          </div>
        </div>

        {/* --- File Explorer --- */}
        <div
          className="w-44 bg-[#1a1a1f] border-r border-[#2a2a30] flex flex-col shrink-0 relative select-none"
          onContextMenu={(e) => {
            e.preventDefault();
            const rect = e.currentTarget.getBoundingClientRect();
            setContextMenu({ x: e.clientX - rect.left, y: e.clientY - rect.top });
          }}
        >
          <div className="flex items-center justify-between px-4 pt-4 pb-3">
            <span className="text-[11px] font-medium tracking-wide text-[#6b6b72] uppercase">Explorer</span>
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setIsPickerOpen(!isPickerOpen); }}
                className="text-[#6b6b72] hover:text-[#e8e8ea] transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
              {isPickerOpen && (
                <div className="absolute right-0 top-6 z-20 bg-[#232328] border border-[#33333a] rounded-lg shadow-xl py-1.5 w-36">
                  {LANGUAGE_PICKER.map(({ language, label }) => {
                    const Icon = LANGUAGE_META[language].icon;
                    return (
                      <button
                        key={language}
                        onClick={() => createNewFile(language)}
                        className="w-full flex items-center gap-2.5 px-3 py-1.5 text-[13px] text-[#d4d4d8] hover:bg-[#2a2a32] transition-colors"
                      >
                        <Icon className="w-3.5 h-3.5" style={{ color: LANGUAGE_META[language].color }} />
                        {label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col gap-0.5 px-2 overflow-y-auto custom-scrollbar flex-1">
            {files.map(file => {
              const Icon = LANGUAGE_META[file.language].icon;
              const isActive = file.id === activeFileId;
              const isEditing = editingFileId === file.id;

              return (
                <button
                  key={file.id}
                  onClick={() => !isEditing && setActiveFileId(file.id)}
                  className={`group flex items-center gap-2 px-2.5 py-[7px] rounded-md text-left transition-colors ${
                    isActive ? 'bg-[#2a2a35]' : 'hover:bg-[#212127]'
                  }`}
                >
                  <Icon className="w-[15px] h-[15px] shrink-0" style={{ color: LANGUAGE_META[file.language].color }} />
                  
                  {isEditing ? (
                    <input
                      autoFocus
                      value={editFileName}
                      onChange={e => setEditFileName(e.target.value)}
                      onKeyDown={e => handleRenameKeyDown(e, file.id)}
                      onBlur={() => commitRename(file.id)}
                      onClick={e => e.stopPropagation()}
                      className="flex-1 bg-[#131316] text-[#e8e8ea] text-[13px] outline-none border border-[#7F77DD] rounded px-1 min-w-0"
                    />
                  ) : (
                    <span className={`text-[13px] truncate flex-1 ${isActive ? 'text-[#e8e8ea]' : 'text-[#9d9da3]'}`}>
                      {file.name}
                    </span>
                  )}

                  {!isEditing && (
                    <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      <Pencil
                        className="w-3 h-3 text-[#5a5a62] hover:text-[#e8e8ea] transition-colors"
                        onClick={(e) => startRenaming(e, file)}
                      />
                      {files.length > 1 && (
                        <Trash2
                          className="w-3 h-3 text-[#5a5a62] hover:text-[#E85A5A] transition-colors"
                          onClick={e => { e.stopPropagation(); deleteFile(file.id); }}
                        />
                      )}
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {contextMenu && (
            <div
              className="absolute z-30 bg-[#232328] border border-[#33333a] rounded-lg shadow-2xl py-1.5 w-40"
              style={{ top: contextMenu.y, left: contextMenu.x }}
              onClick={e => e.stopPropagation()}
            >
              <div className="px-3 py-1 text-[10px] font-semibold text-[#6b6b72] uppercase tracking-wider">New File</div>
              {LANGUAGE_PICKER.map(({ language, label }) => {
                const Icon = LANGUAGE_META[language].icon;
                return (
                  <button
                    key={language}
                    onClick={() => createNewFile(language)}
                    className="w-full flex items-center gap-2.5 px-3 py-1.5 text-[13px] text-[#d4d4d8] hover:bg-[#2a2a32] transition-colors"
                  >
                    <Icon className="w-3.5 h-3.5" style={{ color: LANGUAGE_META[language].color }} />
                    {label}
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* --- Editor + Preview Area --- */}
        <div className="flex flex-1 min-w-0 flex-row">
          
          {/* Editor */}
          <div 
            className="flex flex-col min-w-0 bg-[#16161a]" 
            style={{ width: showPreview ? `${splitPos}%` : '100%' }}
          >
            <div className="flex items-center gap-2 px-4 h-9 bg-[#1c1c21] border-b border-[#2a2a30] shrink-0">
              {activeFile && (
                <>
                  {(() => {
                    const Icon = LANGUAGE_META[activeFile.language].icon;
                    return <Icon className="w-3.5 h-3.5" style={{ color: LANGUAGE_META[activeFile.language].color }} />;
                  })()}
                  <span className="text-[13px] text-[#d4d4d8]">{activeFile.name}</span>
                </>
              )}
            </div>
            
            <div className="flex-1 overflow-auto custom-scrollbar flex relative">
              {activeFile && (
                <>
                  <div
                    className="sticky left-0 flex flex-col items-end py-4 pl-3 pr-3 select-none shrink-0 border-r border-[#2a2a30] bg-[#1a1a1f] z-10"
                    style={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: 13,
                      lineHeight: 1.6,
                      color: '#5a5a62',
                      minHeight: '100%'
                    }}
                  >
                    {activeFile.content.split('\n').map((_, i) => (
                      <div key={i} className="min-w-[1.5rem] text-right">{i + 1}</div>
                    ))}
                  </div>
                  
                  <div className="flex-1 p-4 min-w-max">
                    <Editor
                      value={activeFile.content}
                      onValueChange={updateActiveFileContent}
                      highlight={code =>
                        Prism.highlight(
                          code,
                          Prism.languages[LANGUAGE_META[activeFile.language].prism] || Prism.languages.javascript,
                          LANGUAGE_META[activeFile.language].prism
                        )
                      }
                      padding={0}
                      textareaClassName="focus:outline-none"
                      style={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: 13,
                        lineHeight: 1.6,
                        color: '#d4d4d8',
                        whiteSpace: 'pre',
                      }}
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Vertical Resizer */}
          {showPreview && (
            <div
              className="w-1 bg-[#2a2a30] hover:bg-[#7F77DD] cursor-col-resize shrink-0 z-20 transition-colors"
              onMouseDown={(e) => { e.preventDefault(); setIsDraggingH(true); }}
            />
          )}

          {/* Preview */}
          {showPreview && (
            <div 
              className="flex flex-col min-w-0" 
              style={{ width: `${100 - splitPos}%` }}
            >
              <div className="flex items-center gap-2 px-3 h-9 bg-[#1c1c21] border-b border-[#2a2a30] shrink-0">
                <ArrowLeft className="w-3.5 h-3.5 text-[#4a4a52]" />
                <ArrowRight className="w-3.5 h-3.5 text-[#4a4a52]" />
                <RotateCw
                  onClick={handleRunClick}
                  className="w-3.5 h-3.5 text-[#6b6b72] cursor-pointer hover:text-[#9d9da3] transition-colors"
                />
                <div className="flex-1 bg-[#131316] rounded-md px-2.5 py-1 text-[11px] font-mono text-[#6b6b72]">
                  preview
                </div>
              </div>
              <div className="flex-1 bg-white">
                <iframe
                  key={refreshKey}
                  title="preview"
                  srcDoc={srcDoc}
                  sandbox="allow-scripts allow-modals"
                  className="w-full h-full border-none"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ===== Resizable Console Panel ===== */}
      <div 
        className={`bg-[#16161a] flex flex-col shrink-0 ${!isDraggingV ? 'transition-all duration-300' : ''}`} 
        style={{ height: isBottomPanelOpen ? `${consoleHeight}px` : '36px' }}
      >
        {isBottomPanelOpen && (
          <div
            className="h-1 w-full bg-[#2a2a30] hover:bg-[#7F77DD] cursor-row-resize shrink-0 z-20 transition-colors"
            onMouseDown={(e) => { e.preventDefault(); setIsDraggingV(true); }}
          />
        )}
        
        {!isBottomPanelOpen && <div className="h-[1px] w-full bg-[#2a2a30] shrink-0" />}

        <div
          onClick={() => setIsBottomPanelOpen(!isBottomPanelOpen)}
          className="flex items-center justify-between px-4 h-[35px] shrink-0 cursor-pointer border-b border-[#222228]"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Terminal className="w-3.5 h-3.5 text-[#6b6b72]" />
              <span className="text-[12px] font-medium text-[#9d9da3]">Console</span>
            </div>
            {errorCount > 0 && (
              <span className="flex items-center gap-1 bg-[#3D1515] text-[#F2A0A0] text-[10px] font-medium px-2 py-0.5 rounded-full">
                <AlertCircle className="w-3 h-3" />
                {errorCount} {errorCount === 1 ? 'error' : 'errors'}
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-2">
            {isBottomPanelOpen && (
              <div className="flex items-center gap-1 bg-[#232328] p-0.5 rounded-md text-[11px]" onClick={e => e.stopPropagation()}>
                <button
                  onClick={() => setLogFilter('all')}
                  className={`px-2 py-0.5 rounded ${logFilter === 'all' ? 'bg-[#33333b] text-[#e8e8ea]' : 'text-[#7a7a85]'}`}
                >
                  All Logs
                </button>
                <button
                  onClick={() => setLogFilter('error')}
                  className={`px-2 py-0.5 rounded flex items-center gap-1 ${logFilter === 'error' ? 'bg-[#3D1515] text-[#F2A0A0]' : 'text-[#7a7a85]'}`}
                >
                  Errors Only
                </button>
              </div>
            )}
            {isBottomPanelOpen && logs.length > 0 && (
              <button
                onClick={(e) => { e.stopPropagation(); setLogs([]); }}
                className="text-[11px] text-[#7a7a85] hover:text-[#d4d4d8] px-2 py-0.5 transition-colors"
                title="Clear Console"
              >
                Clear
              </button>
            )}
            <ChevronDown className={`w-4 h-4 text-[#6b6b72] transition-transform ${!isBottomPanelOpen ? '-rotate-90' : ''}`} />
          </div>
        </div>

        {isBottomPanelOpen && (
          <div className="px-4 py-2 overflow-y-auto custom-scrollbar flex-1">
            {filteredLogs.length === 0 ? (
              <div className="flex items-center justify-center h-full text-[12px] text-[#5a5a62] italic">
                {logs.length === 0 ? 'No logs yet. Click Run to execute code.' : 'No logs match the current filter.'}
              </div>
            ) : (
              filteredLogs.map((log, i) => (
                <div key={i} className="flex items-center gap-2.5 py-1 border-b border-[#1f1f24]/50 hover:bg-[#1a1a1f] transition-colors rounded px-1 -mx-1">
                  <span className="text-[10px] text-[#5a5a62] font-mono w-16 shrink-0">{log.timestamp}</span>
                  <span
                    className={`text-[10px] font-medium px-1.5 py-0.5 rounded shrink-0 ${
                      log.type === 'error'
                        ? 'bg-[#3D1515] text-[#F2A0A0]'
                        : log.type === 'warn'
                        ? 'bg-[#3D2F0F] text-[#F2CB7A]'
                        : 'bg-[#0F3D30] text-[#9FE1CB]'
                    }`}
                  >
                    {log.type.toUpperCase()}
                  </span>
                  
                  <span className="text-[12px] text-[#b8b8bd] font-mono select-text flex-1 flex items-center gap-2">
                    {log.message}
                    {log.count > 1 && (
                      <span className="bg-[#2a2a30] text-[#e8e8ea] text-[9px] px-1.5 py-0.5 rounded-full font-sans">
                        {log.count}
                      </span>
                    )}
                  </span>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
};