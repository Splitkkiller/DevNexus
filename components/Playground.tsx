import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ThemeColors } from '../types';
import { 
  Smartphone, Monitor, Play, Download, FileCode, FileJson, 
  FileType, ChevronRight, ChevronDown, Terminal,
  Settings, X, Plus, Upload, Trash2, FolderOpen,
  AlertTriangle, Wrench, Check, Coffee, Hash, Maximize2, Minimize2,
  Save, Type, LayoutTemplate, MoreVertical
} from 'lucide-react';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import JSZip from 'jszip';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-java';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-typescript';

interface PlaygroundProps {
  themeColors: ThemeColors;
}

interface PlaygroundFile {
  id: string;
  name: string;
  language: 'html' | 'css' | 'javascript' | 'typescript' | 'python' | 'java';
  content: string;
}

interface Problem {
  id: string;
  fileId: string;
  line: number;
  message: string;
  severity: 'error' | 'warning';
  suggestion?: string;
  autoFix?: (content: string) => string;
}

interface LogEntry {
  type: 'info' | 'warn' | 'error';
  message: string;
  timestamp: string;
}

// --- INITIAL DATA ---
const INITIAL_HTML = `<div class="container">
  <div class="card">
    <div class="status-dot"></div>
    <h1>DevStudio</h1>
    <p>A professional environment for web creation.</p>
    
    <button id="actionBtn" class="btn">
      Initialize System
    </button>
    
    <div id="console-output"></div>
  </div>
</div>`;

const INITIAL_CSS = `/* Modern CSS Styling */
:root {
  --bg: #1e1e2e;
  --card: #2b2b3b;
  --accent: #5865F2;
  --text: #cdd6f4;
}

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.card {
  background: var(--card);
  padding: 2.5rem;
  border-radius: 16px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  text-align: center;
  width: 320px;
  position: relative;
  border: 1px solid rgba(255,255,255,0.05);
}

.status-dot {
  width: 12px;
  height: 12px;
  background: #ff5f56;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  box-shadow: 0 0 10px #ff5f56;
  transition: 0.3s ease;
}

.status-dot.active {
  background: #00d68f;
  box-shadow: 0 0 15px #00d68f;
}

h1 { margin: 0 0 0.5rem; color: white; letter-spacing: -0.5px; }
p { color: #a6accd; font-size: 0.9rem; margin-bottom: 2rem; line-height: 1.5; }

.btn {
  background: var(--accent);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  width: 100%;
}

.btn:hover { filter: brightness(1.1); transform: translateY(-1px); }
.btn:active { transform: translateY(1px); }

#console-output {
  margin-top: 1.5rem;
  font-family: monospace;
  font-size: 0.8rem;
  color: #00d68f;
  height: 20px;
}`;

const INITIAL_JS = `// Interactive Logic
const btn = document.getElementById('actionBtn');
const dot = document.querySelector('.status-dot');
const output = document.getElementById('console-output');

console.log("System ready...");

// Intentional Syntax Error for testing (Uncomment to test):
// consle.log("Broken");

if(btn && dot && output) {
    btn.addEventListener('click', () => {
      // Toggle Active State
      const isActive = dot.classList.toggle('active');
      
      if (isActive) {
        btn.innerText = "Deactivate System";
        btn.style.background = "#ff5f56";
        output.innerText = "System Online";
        console.log("State changed: Active");
      } else {
        btn.innerText = "Initialize System";
        btn.style.background = "#5865F2";
        output.innerText = "System Standby";
        console.log("State changed: Standby");
      }
    });
}`;

const DEFAULT_FILES: PlaygroundFile[] = [
  { id: '1', name: 'index.html', language: 'html', content: INITIAL_HTML },
  { id: '2', name: 'style.css', language: 'css', content: INITIAL_CSS },
  { id: '3', name: 'script.js', language: 'javascript', content: INITIAL_JS }
];

const EDITOR_FONT_FAMILY = '"JetBrains Mono", "Fira Code", monospace';

export const Playground: React.FC<PlaygroundProps> = ({ themeColors }) => {
  // --- State ---
  const [projectName, setProjectName] = useState("DevStudio Project");
  const [isEditingProjectName, setIsEditingProjectName] = useState(false);
  const [files, setFiles] = useState<PlaygroundFile[]>(DEFAULT_FILES);
  const [activeFileId, setActiveFileId] = useState<string>('1');
  
  const [deviceMode, setDeviceMode] = useState<'desktop' | 'mobile'>('desktop');
  const [srcDoc, setSrcDoc] = useState('');
  const [refreshKey, setRefreshKey] = useState(0);
  const [isPreviewCollapsed, setIsPreviewCollapsed] = useState(false);
  
  // Bottom Panel State
  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [problems, setProblems] = useState<Problem[]>([]);
  const [isBottomPanelOpen, setIsBottomPanelOpen] = useState(true);
  
  const [showSettings, setShowSettings] = useState(false);
  
  // Context Menu State
  const [contextMenu, setContextMenu] = useState<{ x: number, y: number, visible: boolean, targetFileId?: string }>({ x: 0, y: 0, visible: false });
  
  // Layout State
  const [sidebarWidth, setSidebarWidth] = useState(220);
  const [isResizing, setIsResizing] = useState(false);

  // --- Extended Editor Settings ---
  const [fontSize, setFontSize] = useState(14);
  const [wordWrap, setWordWrap] = useState(false);
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const [tabSize, setTabSize] = useState(2);
  const [fontLigatures, setFontLigatures] = useState(true);
  const [autoSave, setAutoSave] = useState(true);
  
  const [cursorPos, setCursorPos] = useState({ line: 1, col: 1 });
  
  // --- Layout Resizing ---
  const startResizing = useCallback(() => {
    setIsResizing(true);
    document.body.style.cursor = 'col-resize';
    document.body.style.userSelect = 'none';
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
    document.body.style.cursor = '';
    document.body.style.userSelect = '';
  }, []);

  const resize = useCallback((e: MouseEvent) => {
    if (isResizing) {
      const newWidth = e.clientX - 64; // Approx sidebar offset
      if (newWidth > 150 && newWidth < 400) setSidebarWidth(newWidth);
    }
  }, [isResizing]);

  useEffect(() => {
    window.addEventListener('mousemove', resize);
    window.addEventListener('mouseup', stopResizing);
    return () => {
      window.removeEventListener('mousemove', resize);
      window.removeEventListener('mouseup', stopResizing);
    };
  }, [resize, stopResizing]);

  // --- Compile Logic & Error Catching ---
  useEffect(() => {
    const timeout = setTimeout(() => {
      const htmlFile = files.find(f => f.name === 'index.html') || files.find(f => f.language === 'html');
      const cssFiles = files.filter(f => f.language === 'css');
      const jsFiles = files.filter(f => f.language === 'javascript');

      if (!htmlFile) {
         setSrcDoc("<html><body style='color: #666; font-family: sans-serif; text-align: center; padding-top: 2rem;'><h1>No index.html found</h1></body></html>");
         return;
      }

      let fullHtml = htmlFile.content;
      const styleTags = cssFiles.map(f => `<style>${f.content}</style>`).join('\n');
      const scriptContent = jsFiles.map(f => f.content).join('\n');
      
      // Inject CSS
      fullHtml = fullHtml.includes('</head>') 
        ? fullHtml.replace('</head>', `${styleTags}</head>`) 
        : `${styleTags}${fullHtml}`;

      // Inject JS & Robust Error Interceptor
      const consoleScript = `
        <script>
          (function(){
            // --- Error Interceptor ---
            function send(type, message) {
               try { window.parent.postMessage({ type: 'console-log', logType: type, message: message }, '*'); } catch(e) {}
            }

            // Capture Console Logs
            const oldLog = console.log;
            const oldError = console.error;
            const oldWarn = console.warn;
            
            console.log = function(...args) { oldLog.apply(console, args); send('info', args.join(' ')); };
            console.warn = function(...args) { oldWarn.apply(console, args); send('warn', args.join(' ')); };
            console.error = function(...args) { oldError.apply(console, args); send('error', args.join(' ')); };

            // Capture Runtime Errors (Global)
            window.onerror = function(msg, url, line, col, error) {
               send('error', \`Runtime Error: \${msg} (Line \${line})\`);
               return false; 
            };

            // Capture Promise Rejections
            window.addEventListener('unhandledrejection', function(event) {
               send('error', \`Unhandled Promise: \${event.reason}\`);
            });
          })();
        </script>
      `;

      fullHtml = fullHtml.includes('</body>')
        ? fullHtml.replace('</body>', `${consoleScript}<script>${scriptContent}</script></body>`)
        : `${fullHtml}${consoleScript}<script>${scriptContent}</script>`;

      setSrcDoc(fullHtml);
      setLogs([]); 
    }, 1000);

    return () => clearTimeout(timeout);
  }, [files, refreshKey]);

  // --- Console Listener ---
  useEffect(() => {
      const handler = (e: MessageEvent) => {
          if (e.data && e.data.type === 'console-log') {
              setLogs(prev => [...prev, {
                  type: e.data.logType,
                  message: e.data.message,
                  timestamp: new Date().toLocaleTimeString()
              }]);
              // Auto-open console on error
              if (e.data.logType === 'error') {
                  setIsBottomPanelOpen(true);
              }
          }
      };
      window.addEventListener('message', handler);
      return () => window.removeEventListener('message', handler);
  }, []);

  // --- Actions ---
  const activeFile = files.find(f => f.id === activeFileId) || files[0];

  const createNewFile = (lang: any) => {
      const extMap: any = { javascript: 'js', python: 'py', css: 'css', html: 'html', typescript: 'ts', java: 'java' };
      const newFile: PlaygroundFile = {
          id: Date.now().toString(),
          name: `untitled.${extMap[lang] || 'txt'}`,
          language: lang,
          content: ''
      };
      setFiles([...files, newFile]);
      setActiveFileId(newFile.id);
  };

  const deleteFile = (id: string) => {
      if (files.length <= 1) return; 
      const newFiles = files.filter(f => f.id !== id);
      setFiles(newFiles);
      if (activeFileId === id) setActiveFileId(newFiles[0].id);
  }

  const getLanguageIcon = (lang: string) => {
      if (lang === 'html') return <FileCode className="w-4 h-4 mr-2 text-orange-500" />;
      if (lang === 'css') return <FileType className="w-4 h-4 mr-2 text-blue-500" />;
      if (lang === 'javascript') return <FileJson className="w-4 h-4 mr-2 text-yellow-500" />;
      if (lang === 'typescript') return <FileCode className="w-4 h-4 mr-2 text-blue-400" />;
      if (lang === 'python') return <Hash className="w-4 h-4 mr-2 text-blue-300" />;
      if (lang === 'java') return <Coffee className="w-4 h-4 mr-2 text-orange-600" />;
      return <FileCode className="w-4 h-4 mr-2 text-gray-400" />;
  };

  return (
    <div className={`flex flex-col h-[95vh] w-full bg-[#1e1e1e] text-[#d4d4d4] rounded-xl overflow-hidden shadow-2xl border border-[#3e3e42] font-sans transition-all duration-300`}>
       
       {/* --- Top Toolbar --- */}
       <div className="h-12 bg-[#2d2d2d] flex items-center justify-between px-4 border-b border-[#1e1e1e] shrink-0">
         <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
               <div className="p-1.5 bg-blue-600/20 rounded text-blue-400">
                  <FolderOpen className="w-4 h-4" />
               </div>
               {isEditingProjectName ? (
                  <input 
                     value={projectName}
                     onChange={e => setProjectName(e.target.value)}
                     onBlur={() => setIsEditingProjectName(false)}
                     className="bg-[#3e3e42] px-2 py-0.5 rounded text-sm outline-none border border-blue-500 text-white"
                     autoFocus
                  />
               ) : (
                  <span onClick={() => setIsEditingProjectName(true)} className="text-sm font-semibold text-gray-200 hover:text-white cursor-pointer select-none">
                    {projectName}
                  </span>
               )}
            </div>
         </div>

         <div className="flex items-center gap-3">
            <button 
                onClick={() => setRefreshKey(k => k + 1)} 
                className="flex items-center gap-2 px-4 py-1.5 bg-green-700 hover:bg-green-600 rounded text-xs text-white font-bold transition-all shadow-lg shadow-green-900/20 active:scale-95"
            >
               <Play className="w-3 h-3 fill-current" /> RUN
            </button>
            
            <div className="h-4 w-px bg-gray-600 mx-1" />

            <button onClick={() => setShowSettings(true)} className="p-2 hover:bg-[#3e3e42] rounded-lg text-gray-400 hover:text-white transition-colors">
               <Settings className="w-5 h-5" />
            </button>
            <button onClick={() => setIsPreviewCollapsed(!isPreviewCollapsed)} className="p-2 hover:bg-[#3e3e42] rounded-lg text-gray-400 hover:text-white transition-colors" title="Toggle Preview">
               {isPreviewCollapsed ? <Maximize2 className="w-5 h-5" /> : <Minimize2 className="w-5 h-5" />}
            </button>
         </div>
       </div>

       {/* --- Main Workspace --- */}
       <div className="flex-1 flex overflow-hidden relative">
         
         {/* Sidebar */}
         <div 
           className="bg-[#252526] flex flex-col border-r border-[#1e1e1e] shrink-0"
           style={{ width: sidebarWidth }}
           onContextMenu={(e) => {
               e.preventDefault();
               setContextMenu({ x: e.clientX, y: e.clientY, visible: true, targetFileId: undefined });
           }}
         >
           <div className="px-4 py-3 text-[11px] font-bold text-gray-500 uppercase tracking-wider flex justify-between items-center bg-[#252526]">
             Explorer
             <div className="flex gap-2">
                <Plus className="w-4 h-4 cursor-pointer hover:text-white transition-colors" onClick={() => createNewFile('javascript')} />
             </div>
           </div>
           
           <div className="flex-1 overflow-y-auto pt-1">
             {files.map(file => (
               <div 
                 key={file.id}
                 onClick={() => setActiveFileId(file.id)}
                 onContextMenu={(e) => {
                    e.preventDefault();
                    e.stopPropagation(); // Stop propagation to parent (which shows generic menu)
                    setContextMenu({ x: e.clientX, y: e.clientY, visible: true, targetFileId: file.id });
                 }}
                 className={`flex items-center px-4 py-2 cursor-pointer text-sm border-l-2 hover:bg-[#2a2d2e] group transition-colors ${activeFileId === file.id ? 'bg-[#37373d] border-blue-500 text-white font-medium' : 'border-transparent text-gray-400'}`}
               >
                 {getLanguageIcon(file.language)}
                 <span className="truncate flex-1">{file.name}</span>
               </div>
             ))}
             {/* Empty space click handler wrapper */}
             <div className="flex-1" onClick={() => {}} />
           </div>
         </div>

         {/* Resizer */}
         <div className="w-1 bg-[#1e1e1e] hover:bg-blue-600 cursor-col-resize transition-colors z-20 shrink-0" onMouseDown={startResizing} />

         {/* Editor Area */}
         <div className="flex-1 flex flex-col min-w-0 bg-[#1e1e1e] relative z-0">
            {/* Tabs */}
            <div className="flex bg-[#252526] overflow-x-auto border-b border-[#1e1e1e] h-10 no-scrollbar shrink-0">
              {files.map(file => (
                <div 
                  key={file.id} 
                  onClick={() => setActiveFileId(file.id)}
                  className={`flex items-center px-4 min-w-[120px] max-w-[200px] cursor-pointer text-xs border-r border-[#1e1e1e] select-none transition-colors ${activeFileId === file.id ? 'bg-[#1e1e1e] text-white border-t-2 border-t-blue-500' : 'text-gray-500 hover:bg-[#2d2d2d] bg-[#2d2d2d]'}`}
                >
                  <span className="mr-2 opacity-80">{getLanguageIcon(file.language)}</span>
                  <span className="truncate">{file.name}</span>
                  <X 
                    onClick={(e) => { e.stopPropagation(); deleteFile(file.id); }}
                    className="ml-auto w-3 h-3 opacity-0 group-hover:opacity-100 hover:text-red-400 transition-opacity" 
                  />
                </div>
              ))}
            </div>

            {/* Code Surface */}
            <div className="flex-1 relative overflow-auto custom-scrollbar flex">
               {showLineNumbers && (
                  <div className="bg-[#1e1e1e] text-right pr-4 pt-4 text-gray-600 select-none text-xs border-r border-[#2d2d2d] flex flex-col items-end" style={{ fontFamily: EDITOR_FONT_FAMILY, lineHeight: 1.5, minWidth: '40px' }}>
                     {activeFile.content.split('\n').map((_, i) => <div key={i}>{i+1}</div>)}
                  </div>
               )}
               <div className="flex-1 pt-4 pl-2">
                 <Editor
                    value={activeFile.content}
                    onValueChange={c => setFiles(files.map(f => f.id === activeFileId ? { ...f, content: c } : f))}
                    highlight={code => Prism.highlight(code, Prism.languages[activeFile.language === 'html' ? 'markup' : activeFile.language] || Prism.languages.javascript, activeFile.language)}
                    padding={0}
                    style={{
                      fontFamily: EDITOR_FONT_FAMILY,
                      fontSize,
                      fontVariantLigatures: fontLigatures ? 'normal' : 'none',
                      backgroundColor: 'transparent',
                      minHeight: '100%',
                      lineHeight: 1.5,
                      tabSize: tabSize,
                      whiteSpace: wordWrap ? 'pre-wrap' : 'pre'
                    }}
                    textareaClassName="focus:outline-none text-transparent bg-transparent"
                 />
               </div>
            </div>

            {/* Bottom Panel (Console) */}
            <div className={`border-t border-[#3e3e42] bg-[#1e1e1e] flex flex-col transition-all duration-300 ${isBottomPanelOpen ? 'h-48' : 'h-8'} shrink-0 z-10`}>
              <div className="flex items-center justify-between px-3 bg-[#252526] h-8 shrink-0 cursor-pointer border-b border-[#1e1e1e]" onClick={() => setIsBottomPanelOpen(!isBottomPanelOpen)}>
                 <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-xs uppercase font-semibold text-gray-400 hover:text-white transition-colors">
                       <Terminal className="w-3 h-3" /> Console
                    </div>
                    {logs.some(l => l.type === 'error') && (
                      <div className="flex items-center gap-2 text-xs uppercase font-semibold text-red-500 animate-pulse">
                         <AlertTriangle className="w-3 h-3" /> Errors Detected
                      </div>
                    )}
                 </div>
                 <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${!isBottomPanelOpen ? 'rotate-180' : ''}`} />
              </div>
              
              <div className="flex-1 overflow-auto p-3 font-mono text-xs text-gray-300 bg-[#1e1e1e]">
                 {logs.length === 0 ? <span className="text-gray-600 italic">Console output will appear here...</span> : logs.map((l, i) => (
                   <div key={i} className={`border-b border-[#333] py-1 flex gap-2 ${l.type === 'error' ? 'text-red-400 bg-red-900/10' : l.type === 'warn' ? 'text-yellow-400' : 'text-green-400'}`}>
                      <span className="opacity-50 text-[10px] w-14 shrink-0">{l.timestamp}</span>
                      <span className="font-bold uppercase text-[10px] w-10 shrink-0">{l.type}</span>
                      <span>{l.message}</span>
                   </div>
                 ))}
              </div>
            </div>
         </div>

         {/* Preview Pane - FIXED OVERLAP ISSUE with z-index and explicit borders */}
         {!isPreviewCollapsed && (
            <div className="w-[450px] bg-white border-l border-[#3e3e42] flex flex-col hidden lg:flex shrink-0 z-20 shadow-xl relative">
               <div className="h-10 bg-[#f3f3f3] border-b border-[#ddd] flex items-center justify-between px-4 shrink-0">
                  <span className="text-xs font-bold text-gray-500 tracking-wider">LOCALHOST:3000</span>
                  <div className="flex gap-2">
                     <Monitor className={`w-4 h-4 cursor-pointer hover:scale-110 transition-transform ${deviceMode === 'desktop' ? 'text-blue-600' : 'text-gray-400'}`} onClick={() => setDeviceMode('desktop')} />
                     <Smartphone className={`w-4 h-4 cursor-pointer hover:scale-110 transition-transform ${deviceMode === 'mobile' ? 'text-blue-600' : 'text-gray-400'}`} onClick={() => setDeviceMode('mobile')} />
                  </div>
               </div>
               <div className="flex-1 bg-[#e5e5e5] relative overflow-hidden flex items-center justify-center p-4">
                  <div className={`bg-white shadow-xl transition-all duration-500 overflow-hidden ${deviceMode === 'mobile' ? 'w-[320px] h-[600px] rounded-[30px] border-[8px] border-[#333]' : 'w-full h-full rounded border border-[#ccc]'}`}>
                     <iframe title="preview" srcDoc={srcDoc} className="w-full h-full border-none" sandbox="allow-scripts allow-modals" />
                  </div>
               </div>
            </div>
         )}
       </div>

       {/* --- Status Bar --- */}
       <div className="h-6 bg-[#007acc] text-white flex items-center justify-between px-3 text-[11px] select-none shrink-0 z-30">
          <div className="flex gap-4">
             <div className="flex items-center gap-1"><GitBranch className="w-3 h-3" /> main*</div>
             <div>{logs.filter(l => l.type === 'error').length} Errors</div>
          </div>
          <div className="flex gap-4">
             <div>Ln {cursorPos.line}, Col {cursorPos.col}</div>
             <div>Spaces: {tabSize}</div>
             <div>UTF-8</div>
             <div className="uppercase">{activeFile.language}</div>
          </div>
       </div>

       {/* --- Context Menu (Updated with Languages) --- */}
       {contextMenu.visible && (
           <div 
              className="fixed bg-[#252526] border border-[#454545] shadow-2xl rounded-lg py-1 z-[100] min-w-[160px] text-sm"
              style={{ top: contextMenu.y, left: contextMenu.x }}
              onMouseLeave={() => setContextMenu({ ...contextMenu, visible: false })}
           >
              {contextMenu.targetFileId ? (
                // File Options
                <>
                  <div className="px-3 py-1.5 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-[#3e3e42] mb-1">File Actions</div>
                  <button onClick={() => { deleteFile(contextMenu.targetFileId!); setContextMenu({...contextMenu, visible: false}); }} className="w-full text-left px-3 py-1.5 hover:bg-[#094771] text-red-400 hover:text-red-300 flex items-center gap-2 transition-colors"><Trash2 className="w-3 h-3" /> Delete</button>
                </>
              ) : (
                // Empty Space Options (New File)
                <>
                  <div className="px-3 py-1.5 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-[#3e3e42] mb-1">New File</div>
                  <button onClick={() => { createNewFile('html'); setContextMenu({...contextMenu, visible: false}); }} className="w-full text-left px-3 py-1.5 hover:bg-[#094771] text-gray-300 hover:text-white flex items-center gap-2 transition-colors"><FileCode className="w-3 h-3 text-orange-500" /> HTML</button>
                  <button onClick={() => { createNewFile('css'); setContextMenu({...contextMenu, visible: false}); }} className="w-full text-left px-3 py-1.5 hover:bg-[#094771] text-gray-300 hover:text-white flex items-center gap-2 transition-colors"><FileType className="w-3 h-3 text-blue-500" /> CSS</button>
                  <button onClick={() => { createNewFile('javascript'); setContextMenu({...contextMenu, visible: false}); }} className="w-full text-left px-3 py-1.5 hover:bg-[#094771] text-gray-300 hover:text-white flex items-center gap-2 transition-colors"><FileJson className="w-3 h-3 text-yellow-500" /> JavaScript</button>
                  <button onClick={() => { createNewFile('typescript'); setContextMenu({...contextMenu, visible: false}); }} className="w-full text-left px-3 py-1.5 hover:bg-[#094771] text-gray-300 hover:text-white flex items-center gap-2 transition-colors"><FileCode className="w-3 h-3 text-blue-400" /> TypeScript</button>
                  <button onClick={() => { createNewFile('python'); setContextMenu({...contextMenu, visible: false}); }} className="w-full text-left px-3 py-1.5 hover:bg-[#094771] text-gray-300 hover:text-white flex items-center gap-2 transition-colors"><Hash className="w-3 h-3 text-blue-300" /> Python</button>
                  <button onClick={() => { createNewFile('java'); setContextMenu({...contextMenu, visible: false}); }} className="w-full text-left px-3 py-1.5 hover:bg-[#094771] text-gray-300 hover:text-white flex items-center gap-2 transition-colors"><Coffee className="w-3 h-3 text-orange-600" /> Java</button>
                </>
              )}
           </div>
       )}
       
       {/* --- Settings Modal --- */}
       {showSettings && (
         <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-[200] flex items-center justify-center animate-fadeIn" onClick={() => setShowSettings(false)}>
            <div className="bg-[#252526] rounded-xl w-96 border border-[#454545] shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
               <div className="bg-[#2d2d2d] px-6 py-4 border-b border-[#1e1e1e] flex justify-between items-center">
                  <h3 className="text-white font-bold text-lg flex items-center gap-2"><Settings className="w-5 h-5 text-blue-500"/> Settings</h3>
                  <button onClick={() => setShowSettings(false)}><X className="w-5 h-5 text-gray-400 hover:text-white" /></button>
               </div>
               
               <div className="p-6 space-y-6">
                  {/* Font Section */}
                  <div className="space-y-3">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Editor Font</label>
                     <div>
                       <div className="flex justify-between text-sm text-gray-300 mb-1">
                          <span>Size</span>
                          <span>{fontSize}px</span>
                       </div>
                       <input type="range" min="10" max="24" value={fontSize} onChange={e => setFontSize(Number(e.target.value))} className="w-full accent-blue-600 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer" />
                     </div>
                     
                     <div className="flex items-center justify-between">
                         <span className="text-sm text-gray-300 flex items-center gap-2"><Type className="w-4 h-4 text-gray-500" /> Font Ligatures</span>
                         <input type="checkbox" checked={fontLigatures} onChange={e => setFontLigatures(e.target.checked)} className="w-4 h-4 accent-blue-600 rounded bg-gray-700 border-gray-600" />
                     </div>
                  </div>

                  <div className="h-px bg-[#3e3e42]" />

                  {/* Formatting Section */}
                  <div className="space-y-3">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">Formatting</label>
                     <div className="flex items-center justify-between">
                         <span className="text-sm text-gray-300 flex items-center gap-2"><LayoutTemplate className="w-4 h-4 text-gray-500" /> Show Line Numbers</span>
                         <input type="checkbox" checked={showLineNumbers} onChange={e => setShowLineNumbers(e.target.checked)} className="w-4 h-4 accent-blue-600 rounded bg-gray-700 border-gray-600" />
                     </div>
                     <div className="flex items-center justify-between">
                         <span className="text-sm text-gray-300">Word Wrap</span>
                         <input type="checkbox" checked={wordWrap} onChange={e => setWordWrap(e.target.checked)} className="w-4 h-4 accent-blue-600 rounded bg-gray-700 border-gray-600" />
                     </div>
                     <div className="flex items-center justify-between">
                         <span className="text-sm text-gray-300">Tab Size</span>
                         <select value={tabSize} onChange={e => setTabSize(Number(e.target.value))} className="bg-[#3e3e42] text-white text-xs rounded px-2 py-1 outline-none border border-gray-600">
                            <option value={2}>2 Spaces</option>
                            <option value={4}>4 Spaces</option>
                            <option value={8}>8 Spaces</option>
                         </select>
                     </div>
                  </div>

                  <div className="h-px bg-[#3e3e42]" />

                  {/* General Section */}
                  <div className="space-y-3">
                     <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">General</label>
                     <div className="flex items-center justify-between">
                         <span className="text-sm text-gray-300 flex items-center gap-2"><Save className="w-4 h-4 text-gray-500" /> Auto-Save</span>
                         <input type="checkbox" checked={autoSave} onChange={e => setAutoSave(e.target.checked)} className="w-4 h-4 accent-blue-600 rounded bg-gray-700 border-gray-600" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
       )}
    </div>
  );
};

// Simple Icon Component for the Status Bar
function GitBranch(props: any) { return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path></svg>; }