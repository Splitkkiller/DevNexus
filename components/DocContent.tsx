
import React, { useState, useEffect } from 'react';
import { DocItem, ThemeColors } from '../types';
import { Copy, Check, Play, Hash, Type, RefreshCw, BookOpen, Code, Layers, AlertCircle, Terminal, Globe, Chrome, Compass } from 'lucide-react';

interface DocContentProps {
  doc?: DocItem; // Made optional to handle undefined safely
  themeColors: ThemeColors;
}

export const DocContent: React.FC<DocContentProps> = ({ doc, themeColors }) => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'code' | 'preview'>('code');
  const [selectedExampleIndex, setSelectedExampleIndex] = useState(0);
  const [previewKey, setPreviewKey] = useState(0);

  // Reset state when doc changes
  useEffect(() => {
    if (doc) {
      setPreviewKey(prev => prev + 1);
      setActiveTab('code');
      setSelectedExampleIndex(0);
    }
  }, [doc?.id]);

  // Force refresh preview when example changes
  useEffect(() => {
     setPreviewKey(prev => prev + 1);
  }, [selectedExampleIndex]);

  // CRITICAL FIX: Early return if doc is undefined
  if (!doc) {
    return (
      <main className={`flex-1 flex flex-col items-center justify-center p-12 text-center ${themeColors.textSecondary}`}>
        <div className="bg-red-500/10 p-4 rounded-full mb-4">
            <AlertCircle className="w-10 h-10 text-red-500" />
        </div>
        <h2 className={`text-2xl font-bold ${themeColors.text} mb-2`}>Document Not Found</h2>
        <p>Select an item from the sidebar to get started.</p>
      </main>
    );
  }

  // Safety check: Ensure examples exist array is populated
  const currentExample = doc.examples && doc.examples[selectedExampleIndex] 
    ? doc.examples[selectedExampleIndex] 
    : { title: 'N/A', description: 'No example available', code: '' };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentExample.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isHtml = doc.library === 'html';
  const isCss = doc.library === 'css';
  const isJs = doc.library === 'js';
  const isTs = doc.library === 'ts';
  const isPy = doc.library === 'py';
  const isJava = doc.library === 'java';
  
  let accentColor = 'text-brand-400';
  let accentBg = 'bg-brand-600';
  let accentBorder = 'border-brand-500';

  if (isCss) {
    accentColor = 'text-pink-400';
    accentBg = 'bg-pink-600';
    accentBorder = 'border-pink-500';
  } else if (isJs) {
    accentColor = 'text-yellow-400';
    accentBg = 'bg-yellow-500';
    accentBorder = 'border-yellow-500';
  } else if (isTs) {
    accentColor = 'text-blue-400';
    accentBg = 'bg-blue-600';
    accentBorder = 'border-blue-600';
  } else if (isPy) {
    accentColor = 'text-teal-400';
    accentBg = 'bg-teal-600';
    accentBorder = 'border-teal-600';
  } else if (isJava) {
    accentColor = 'text-orange-500';
    accentBg = 'bg-orange-600';
    accentBorder = 'border-orange-600';
  }

  const getPreviewContent = () => {
    const isDark = themeColors.text !== 'text-slate-900';
    const textColor = isDark ? '#e2e8f0' : '#0f172a';
    const bgColor = isDark ? '#1e1e1e' : '#ffffff';
    const code = currentExample.code;

    // Common styles
    const baseStyle = `
      body { font-family: 'Inter', system-ui, sans-serif; padding: 1.5rem; color: ${textColor}; background: ${bgColor}; margin: 0; line-height: 1.6; transition: all 0.3s; }
      * { box-sizing: border-box; }
      ::-webkit-scrollbar { width: 8px; height: 8px; }
      ::-webkit-scrollbar-track { background: transparent; }
      ::-webkit-scrollbar-thumb { background: rgba(150,150,150,0.3); border-radius: 4px; }
    `;

    if (isHtml) {
      return `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              ${baseStyle}
              button { cursor: pointer; padding: 0.5rem 1rem; background: #3b82f6; color: white; border: none; border-radius: 0.375rem; font-weight: 500; transition: background 0.2s; }
              button:hover { background: #2563eb; }
              input, textarea, select { padding: 0.5rem; border: 1px solid ${isDark ? '#4b5563' : '#d1d5db'}; border-radius: 0.375rem; background: ${isDark ? '#374151' : '#f9fafb'}; color: ${textColor}; font-size: 0.9rem; outline: none; }
              table { border-collapse: collapse; width: 100%; margin: 1rem 0; font-size: 0.9rem; }
              th, td { border: 1px solid ${isDark ? '#4b5563' : '#e5e7eb'}; padding: 0.75rem; text-align: left; }
              th { background: ${isDark ? '#374151' : '#f3f4f6'}; font-weight: 600; }
              img { max-width: 100%; border-radius: 0.375rem; }
              blockquote { border-left: 4px solid #3b82f6; padding-left: 1rem; margin: 1rem 0; color: ${isDark ? '#9ca3af' : '#4b5563'}; font-style: italic; }
              code { background: ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)'}; padding: 0.2rem 0.4rem; border-radius: 0.25rem; font-family: monospace; font-size: 0.85em; }
            </style>
          </head>
          <body>
            <div class="container">${code}</div>
          </body>
        </html>
      `;
    }
    
    if (isCss) {
      return `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              ${baseStyle}
              .demo-section { margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 1px dashed ${isDark ? '#333' : '#ddd'}; }
              h3 { margin-top: 0; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 1px; opacity: 0.6; margin-bottom: 1rem; }
              .card { background: ${isDark ? '#262626' : '#f8fafc'}; border: 1px solid ${isDark ? '#404040' : '#e2e8f0'}; border-radius: 0.5rem; padding: 1.5rem; max-width: 300px; }
              .btn { display: inline-block; padding: 0.5rem 1rem; background: #3b82f6; color: white; border-radius: 0.375rem; border: none; cursor: pointer; text-decoration: none; font-size: 0.9rem; }
              .box { width: 80px; height: 80px; background: linear-gradient(135deg, #6366f1, #ec4899); border-radius: 0.5rem; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.2rem; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1); }
              .container { display: flex; gap: 1rem; padding: 1rem; background: ${isDark ? 'rgba(255,255,255,0.02)' : 'rgba(0,0,0,0.02)'}; border-radius: 0.5rem; border: 1px solid ${isDark ? '#333' : '#eee'}; }
              ${code}
            </style>
          </head>
          <body>
            <div id="root">
              <div class="demo-section">
                <h3>Common UI Elements</h3>
                <div class="card">
                  <h4 style="margin-top:0">Card Title</h4>
                  <p>Sample content inside a card element.</p>
                  <button class="btn">Button</button>
                </div>
              </div>
              <div class="demo-section">
                <h3>Layout Container</h3>
                <div class="container">
                  <div class="box">1</div>
                  <div class="box">2</div>
                  <div class="box">3</div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `;
    }

    // JS / TS (simulated)
    if (isJs || isTs) {
       return `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            ${baseStyle}
            body { font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 13px; }
            .console-line { padding: 4px 0; border-bottom: 1px solid ${isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'}; display: flex; gap: 8px; }
            .log-prefix { color: #6b7280; user-select: none; font-size: 10px; margin-top: 3px; }
            .log-error { color: #f87171; background: rgba(248, 113, 113, 0.1); }
            .log-warn { color: #facc15; background: rgba(250, 204, 21, 0.1); }
            .log-info { color: ${isDark ? '#e5e7eb' : '#374151'}; }
            .log-object { color: #a78bfa; }
            .log-number { color: #60a5fa; }
            .log-string { color: #34d399; }
          </style>
        </head>
        <body>
          <div style="font-weight: bold; opacity: 0.5; text-transform: uppercase; font-size: 11px; margin-bottom: 10px;">Console Output</div>
          <div id="console-output"></div>
          <script>
            const consoleDiv = document.getElementById('console-output');
            function formatValue(val) {
               if (val === null) return 'null';
               if (val === undefined) return 'undefined';
               if (typeof val === 'number') return \`<span class="log-number">\${val}</span>\`;
               if (typeof val === 'string') return \`<span class="log-string">"\${val}"</span>\`;
               if (typeof val === 'object') return \`<span class="log-object">\${JSON.stringify(val, null, 2)}</span>\`;
               return String(val);
            }
            function log(type, args) {
               const line = document.createElement('div');
               line.className = \`console-line log-\${type}\`;
               const prefix = document.createElement('div');
               prefix.className = 'log-prefix';
               prefix.innerText = new Date().toLocaleTimeString().split(' ')[0];
               const content = document.createElement('div');
               content.style.whiteSpace = 'pre-wrap';
               content.innerHTML = args.map(formatValue).join(' ');
               line.appendChild(prefix);
               line.appendChild(content);
               consoleDiv.appendChild(line);
            }
            console.log = (...args) => log('info', args);
            console.error = (...args) => log('error', args);
            console.warn = (...args) => log('warn', args);
            window.onerror = (msg) => log('error', [msg]);
            try { ${isTs ? '// TypeScript is treated as JS here for demo\n' : ''}${code} } catch (e) { console.error(e); }
          </script>
        </body>
      </html>
    `;
    }

    // Python / Java (Backend languages - Read Only)
    return `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              ${baseStyle}
              .terminal { font-family: 'JetBrains Mono', monospace; color: #a6accd; }
              .prompt { color: #5865F2; font-weight: bold; margin-right: 8px; }
            </style>
          </head>
          <body>
             <div class="terminal">
                <div><span class="prompt">$</span> ${isPy ? 'python3 script.py' : 'javac Main.java && java Main'}</div>
                <div style="margin-top: 1rem; color: #6b7280; font-style: italic;">
                   (Output simulation not available in browser for backend languages)
                </div>
                <div style="margin-top: 1rem;">
                   Code is valid syntax for ${isPy ? 'Python 3.x' : 'Java SE'}.
                </div>
             </div>
          </body>
        </html>
    `;
  };

  return (
    <main className={`flex-1 overflow-y-auto custom-scrollbar p-8 lg:p-12 max-w-6xl mx-auto w-full transition-colors duration-300 pb-24`}>
      
      {/* Header Section */}
      <div className={`mb-10 pb-8 border-b ${themeColors.sidebarBorder}`}>
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${themeColors.card} ${themeColors.cardBorder} border ${themeColors.textSecondary} uppercase tracking-wider`}>
            {doc.library.toUpperCase()}
          </span>
          <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${themeColors.card} ${themeColors.cardBorder} border ${themeColors.textSecondary} uppercase tracking-wider`}>
            {doc.category}
          </span>
        </div>
        <h1 className={`text-5xl font-bold ${themeColors.text} font-mono tracking-tight mb-6`}>{doc.name}</h1>
        <p className={`text-xl ${themeColors.textSecondary} leading-relaxed font-light`}>{doc.description}</p>
      </div>
      
      {/* Browser Support Section */}
      {doc.browserSupport && (
        <section className="mb-12">
            <h2 className={`text-lg font-semibold ${themeColors.text} mb-4 flex items-center gap-2`}>
                <Globe className="w-4 h-4 opacity-50" /> Browser Compatibility
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className={`${themeColors.card} border ${themeColors.cardBorder} p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2`}>
                    <Chrome className={`w-6 h-6 ${doc.browserSupport.chrome === 'Yes' ? 'text-green-500' : 'text-red-400'}`} />
                    <div>
                        <div className={`text-xs font-bold ${themeColors.textSecondary} uppercase`}>Chrome</div>
                        <div className={`font-mono font-bold ${doc.browserSupport.chrome === 'Yes' ? themeColors.text : 'text-red-400'}`}>{doc.browserSupport.chrome}</div>
                    </div>
                </div>
                <div className={`${themeColors.card} border ${themeColors.cardBorder} p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2`}>
                    {/* Firefox Icon Mock (using Layers/Circle to simulate) */}
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${doc.browserSupport.firefox === 'Yes' ? 'border-orange-500 text-orange-500' : 'border-red-400 text-red-400'}`}>F</div>
                    <div>
                        <div className={`text-xs font-bold ${themeColors.textSecondary} uppercase`}>Firefox</div>
                        <div className={`font-mono font-bold ${doc.browserSupport.firefox === 'Yes' ? themeColors.text : 'text-red-400'}`}>{doc.browserSupport.firefox}</div>
                    </div>
                </div>
                <div className={`${themeColors.card} border ${themeColors.cardBorder} p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2`}>
                    <Compass className={`w-6 h-6 ${doc.browserSupport.safari === 'Yes' ? 'text-blue-500' : 'text-red-400'}`} />
                    <div>
                        <div className={`text-xs font-bold ${themeColors.textSecondary} uppercase`}>Safari</div>
                        <div className={`font-mono font-bold ${doc.browserSupport.safari === 'Yes' ? themeColors.text : 'text-red-400'}`}>{doc.browserSupport.safari}</div>
                    </div>
                </div>
                <div className={`${themeColors.card} border ${themeColors.cardBorder} p-4 rounded-xl flex flex-col items-center justify-center text-center gap-2`}>
                    {/* Edge Icon Mock */}
                    <div className={`w-6 h-6 font-bold flex items-center justify-center ${doc.browserSupport.edge === 'Yes' ? 'text-teal-500' : 'text-red-400'}`}>E</div>
                    <div>
                        <div className={`text-xs font-bold ${themeColors.textSecondary} uppercase`}>Edge</div>
                        <div className={`font-mono font-bold ${doc.browserSupport.edge === 'Yes' ? themeColors.text : 'text-red-400'}`}>{doc.browserSupport.edge}</div>
                    </div>
                </div>
            </div>
        </section>
      )}

      {/* Syntax Section */}
      <section className="mb-12">
        <h2 className={`text-lg font-semibold ${themeColors.text} mb-4 flex items-center gap-2`}>
          <Hash className="w-4 h-4 opacity-50" /> Syntax
        </h2>
        <div className={`${themeColors.codeBg} rounded-xl border ${themeColors.cardBorder} p-5 overflow-x-auto shadow-sm`}>
          <code className="font-mono text-sm whitespace-pre text-slate-300">{doc.syntax}</code>
        </div>
      </section>

      {/* Interactive Example Section */}
      <section className="mb-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <div>
             <h2 className={`text-lg font-semibold ${themeColors.text} flex items-center gap-2`}>
                <Layers className="w-4 h-4 opacity-50" /> Interactive Examples
             </h2>
             <p className={`text-sm ${themeColors.textSecondary} mt-1`}>
               Select a variation below to see how it works.
             </p>
          </div>
          
          <div className={`flex ${themeColors.card} rounded-lg p-1 gap-1 border ${themeColors.cardBorder} self-start md:self-auto`}>
            <button 
              onClick={() => setActiveTab('code')}
              className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-2 ${activeTab === 'code' ? `${accentBg} text-white shadow-sm` : `${themeColors.textSecondary} hover:${themeColors.text}`}`}
            >
              <Code className="w-3 h-3" /> Code
            </button>
            <button 
               onClick={() => { setActiveTab('preview'); setPreviewKey(prev => prev + 1); }}
               className={`px-4 py-1.5 text-xs font-bold rounded-md transition-all flex items-center gap-2 ${activeTab === 'preview' ? `${accentBg} text-white shadow-sm` : `${themeColors.textSecondary} hover:${themeColors.text}`}`}
            >
              <Play className="w-3 h-3" /> {isPy || isJava ? 'Console' : 'Live Preview'}
            </button>
          </div>
        </div>

        {/* Example Tabs */}
        {doc.examples && doc.examples.length > 0 && (
          <div className="flex gap-2 mb-4 overflow-x-auto pb-2 custom-scrollbar">
            {doc.examples.map((ex, idx) => (
              <button
                key={idx}
                onClick={() => { setSelectedExampleIndex(idx); }}
                className={`px-4 py-2 rounded-full text-sm font-medium border transition-all whitespace-nowrap ${
                  selectedExampleIndex === idx 
                    ? `${themeColors.card} ${themeColors.text} ${accentBorder} ring-1`
                    : `${themeColors.bg} ${themeColors.textSecondary} border-transparent hover:${themeColors.card}`
                }`}
              >
                {ex.title}
              </button>
            ))}
          </div>
        )}
        
        {/* Example Description Box */}
        <div className={`mb-4 p-4 rounded-lg border-l-4 ${themeColors.card} ${themeColors.cardBorder} ${accentBorder.replace('border', 'border-l')}`}>
            <p className={`text-sm ${themeColors.textSecondary}`}>
              <span className={`font-bold ${themeColors.text} mr-2`}>Context:</span>
              {currentExample.description}
            </p>
        </div>

        {/* Editor/Preview Window */}
        <div className={`rounded-xl border ${themeColors.cardBorder} overflow-hidden shadow-lg min-h-[400px] flex flex-col`}>
          {activeTab === 'code' ? (
            <div className="relative group bg-[#0d1117] flex-1">
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <button 
                  onClick={handleCopy}
                  className="bg-white/10 backdrop-blur hover:bg-white/20 text-slate-300 hover:text-white p-2 rounded-md transition-all"
                  title="Copy code"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <pre className="p-6 overflow-x-auto text-sm font-mono text-slate-300 leading-relaxed h-full custom-scrollbar">
                <code>{currentExample.code}</code>
              </pre>
            </div>
          ) : (
             <div className="relative w-full flex-1 bg-white min-h-[400px]">
                <iframe
                  key={previewKey}
                  title="Interactive Preview"
                  srcDoc={getPreviewContent()}
                  className="w-full h-full border-none absolute inset-0"
                  sandbox="allow-scripts allow-modals allow-forms"
                />
                <button 
                  onClick={() => setPreviewKey(prev => prev + 1)} 
                  className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white text-gray-600 rounded-full shadow-sm border border-gray-200 z-10"
                  title="Reload Preview"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
             </div>
          )}
        </div>
      </section>

      {/* Attributes Table (if valid) */}
      {doc.attributes && doc.attributes.length > 0 && (
        <section className="mb-12">
          <h2 className={`text-lg font-semibold ${themeColors.text} mb-4 flex items-center gap-2`}>
             <Type className="w-4 h-4 opacity-50" /> {isHtml ? 'Attributes' : isCss ? 'Values' : 'Parameters'}
          </h2>
          <div className={`${themeColors.card} rounded-xl border ${themeColors.cardBorder} overflow-hidden shadow-sm`}>
            <table className="w-full text-left text-sm">
              <thead className={`${themeColors.sidebar} ${themeColors.text}`}>
                <tr>
                  <th className="px-6 py-4 font-semibold">{isHtml ? 'Name' : 'Value'}</th>
                  <th className="px-6 py-4 font-semibold">Type</th>
                  <th className="px-6 py-4 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody className={`divide-y ${themeColors.cardBorder}`}>
                {doc.attributes.map((attr, idx) => (
                  <tr key={idx} className={`hover:${themeColors.sidebar} transition-colors`}>
                    <td className={`px-6 py-4 font-mono ${accentColor} font-medium`}>{attr.name}</td>
                    <td className={`px-6 py-4 ${themeColors.textSecondary} font-mono text-xs`}>{attr.type || 'String'}</td>
                    <td className={`px-6 py-4 ${themeColors.textSecondary}`}>{attr.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Best Practices */}
      {doc.bestPractices && doc.bestPractices.length > 0 && (
        <section>
            <h2 className={`text-lg font-semibold ${themeColors.text} mb-4 flex items-center gap-2`}>
                <BookOpen className="w-4 h-4 opacity-50" /> Best Practices
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
                {doc.bestPractices.map((practice, idx) => (
                    <li key={idx} className={`${themeColors.card} border ${themeColors.cardBorder} p-5 rounded-xl ${themeColors.textSecondary} text-sm flex gap-3 items-start hover:border-brand-500/30 transition-colors shadow-sm`}>
                        <div className={`w-1.5 h-1.5 rounded-full ${accentBg} mt-2 shrink-0`} />
                        <span className="leading-relaxed">{practice}</span>
                    </li>
                ))}
            </ul>
        </section>
      )}
    </main>
  );
};
