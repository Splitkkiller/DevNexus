import { DocItem, QuizQuestion, Video } from './types';

const DEFAULT_SUPPORT = { chrome: 'Yes', firefox: 'Yes', safari: 'Yes', edge: 'Yes' };

export const HTML_CATEGORIES = {
  structure: 'Structure',
  text: 'Text Content',
  lists: 'Lists',
  forms: 'Forms',
  tables: 'Tables',
  media: 'Media',
  semantic: 'Semantic',
  interactive: 'Interactive',
  meta: 'Metadata',
  scripting: 'Scripting'
};

export const CSS_CATEGORIES = {
  layout: 'Layout',
  flexbox: 'Flexbox & Grid',
  typography: 'Typography',
  visuals: 'Visuals',
  effects: 'Effects',
  sizing: 'Sizing',
  interactivity: 'Interactivity',
  selectors: 'Selectors',
  misc: 'Misc'
};

export const JS_CATEGORIES = {
    basics: 'Basics',
    dom: 'DOM',
    strings: 'String Methods',
    arrays: 'Array Methods',
    math: 'Math',
    date: 'Date',
    json: 'JSON',
    async: 'Async',
    events: 'Events',
    storage: 'Storage'
};

export const TS_CATEGORIES = {
    basics: 'Basic Types',
    interfaces: 'Interfaces',
    classes: 'Classes',
    generics: 'Generics',
    utility: 'Utility Types',
    config: 'Config'
};

export const PYTHON_CATEGORIES = {
    basics: 'Basics',
    structures: 'Data Structures',
    flow: 'Control Flow',
    functions: 'Functions',
    oop: 'OOP',
    modules: 'Modules'
};

export const JAVA_CATEGORIES = {
    basics: 'Basics',
    oop: 'OOP',
    collections: 'Collections',
    streams: 'Streams',
    concurrency: 'Concurrency'
};

export const VIDEOS: Video[] = [
  // HTML
  { id: 'h1', youtubeId: 'pQN-pnXPaVg', title: 'HTML Crash Course', channel: 'Traversy Media', thumbnail: 'https://img.youtube.com/vi/pQN-pnXPaVg/maxresdefault.jpg', duration: '1:02:00', views: '5.2M', date: '3 years ago', category: 'html', tags: ['beginner', 'basics'] },
  { id: 'h2', youtubeId: 'k7Sf7Cq4_eE', title: 'HTML5 Semantic Tags', channel: 'Kevin Powell', thumbnail: 'https://img.youtube.com/vi/k7Sf7Cq4_eE/maxresdefault.jpg', duration: '12:45', views: '450K', date: '2 years ago', category: 'html', tags: ['intermediate', 'semantic'] },
  { id: 'h3', youtubeId: 'fGLs_Xedp1M', title: 'Web Accessibility (A11y)', channel: 'Traversy Media', thumbnail: 'https://img.youtube.com/vi/fGLs_Xedp1M/maxresdefault.jpg', duration: '35:00', views: '200K', date: '1 year ago', category: 'html', tags: ['advanced', 'accessibility'] },
  { id: 'h4', youtubeId: 'MDLn5-zSQQI', title: 'HTML Forms & Inputs', channel: 'Web Dev Simplified', thumbnail: 'https://img.youtube.com/vi/MDLn5-zSQQI/maxresdefault.jpg', duration: '25:00', views: '800K', date: '3 years ago', category: 'html', tags: ['forms', 'interactive'] },
  { id: 'h5', youtubeId: 'SalY_Sm6mv4', title: 'HTML Dialog Element', channel: 'Kevin Powell', thumbnail: 'https://img.youtube.com/vi/SalY_Sm6mv4/maxresdefault.jpg', duration: '10:20', views: '200K', date: '1 year ago', category: 'html', tags: ['dialog', 'modern'] },
  { id: 'h6', youtubeId: 'mJgBOIoGihA', title: 'HTML Full Course', channel: 'freeCodeCamp.org', thumbnail: 'https://img.youtube.com/vi/mJgBOIoGihA/maxresdefault.jpg', duration: '2:02:00', views: '1.5M', date: '2 years ago', category: 'html', tags: ['course', 'website'] },
  { id: 'h7', youtubeId: 'H_v_1_Zc8k0', title: 'Emmet for Faster HTML', channel: 'Traversy Media', thumbnail: 'https://img.youtube.com/vi/H_v_1_Zc8k0/maxresdefault.jpg', duration: '23:00', views: '400K', date: '4 years ago', category: 'html', tags: ['tools', 'productivity'] },
  { id: 'h8', youtubeId: '82-0310qZc4', title: 'Common HTML Mistakes', channel: 'Kevin Powell', thumbnail: 'https://img.youtube.com/vi/82-0310qZc4/maxresdefault.jpg', duration: '15:00', views: '300K', date: '2 years ago', category: 'html', tags: ['mistakes', 'tips'] },
  { id: 'h9', youtubeId: 'PlxWf493en4', title: 'HTML SEO Crash Course', channel: 'Traversy Media', thumbnail: 'https://img.youtube.com/vi/PlxWf493en4/maxresdefault.jpg', duration: '25:00', views: '150K', date: '2 years ago', category: 'html', tags: ['seo', 'meta'] },
  { id: 'h10', youtubeId: 'itQNLsJ6kce', title: 'HTML5 Canvas Tutorial', channel: 'Franks Laboratory', thumbnail: 'https://img.youtube.com/vi/Yvz_axxWG4Y/maxresdefault.jpg', duration: '30:00', views: '500K', date: '3 years ago', category: 'html', tags: ['canvas', 'graphics'] },
  
  // CSS
  { id: 'c1', youtubeId: '1Rs2ND1ryYc', title: 'CSS Zero to Hero', channel: 'FreeCodeCamp', thumbnail: 'https://img.youtube.com/vi/1Rs2ND1ryYc/maxresdefault.jpg', duration: '6:18:00', views: '4M', date: '3 years ago', category: 'css', tags: ['beginner', 'full'] },
  { id: 'c2', youtubeId: 'rg7Fvvl3taU', title: 'HTML & CSS Full Course', channel: 'SuperSimpleDev', thumbnail: 'https://img.youtube.com/vi/rg7Fvvl3taU/maxresdefault.jpg', duration: '6:31:24', views: '17M', date: '3 years ago', category: 'css', tags: ['intermediate', 'grid'] },
  { id: 'c3', youtubeId: 'phWxA89Dy9c', title: 'Learn CSS Flexbox', channel: 'Web Dev Simplified', thumbnail: 'https://img.youtube.com/vi/phWxA89Dy9c/maxresdefault.jpg', duration: '20:00', views: '1.2M', date: '4 years ago', category: 'css', tags: ['flexbox', 'layout'] },
  { id: 'c4', youtubeId: '0xMQfnTU6oo', title: 'CSS Grid Tutorial', channel: 'Net Ninja', thumbnail: 'https://img.youtube.com/vi/0xMQfnTU6oo/maxresdefault.jpg', duration: '30:00', views: '600K', date: '2 years ago', category: 'css', tags: ['grid', 'layout'] },
  { id: 'c5', youtubeId: 'vAt205T-W-0', title: 'CSS Position Property', channel: 'Web Dev Simplified', thumbnail: 'https://img.youtube.com/vi/vAt205T-W-0/maxresdefault.jpg', duration: '14:00', views: '500K', date: '3 years ago', category: 'css', tags: ['position', 'basics'] },
  { id: 'c6', youtubeId: 'K74l26pE4YA', title: 'CSS Variables', channel: 'Fireship', thumbnail: 'https://img.youtube.com/vi/K74l26pE4YA/maxresdefault.jpg', duration: '11:00', views: '800K', date: '3 years ago', category: 'css', tags: ['variables', 'modern'] },
  { id: 'c7', youtubeId: 'srvs2F67iBw', title: 'Responsive Design', channel: 'Kevin Powell', thumbnail: 'https://img.youtube.com/vi/srvs2F67iBw/maxresdefault.jpg', duration: '2:15:00', views: '1M', date: '2 years ago', category: 'css', tags: ['responsive', 'mobile'] },
  { id: 'c8', youtubeId: '_nCL22GM9jU', title: 'SASS Tutorial', channel: 'Net Ninja', thumbnail: 'https://img.youtube.com/vi/_nCL22GM9jU/maxresdefault.jpg', duration: '45:00', views: '300K', date: '3 years ago', category: 'css', tags: ['sass', 'preprocessor'] },
  { id: 'c9', youtubeId: 'phDBAhWD9kk', title: 'CSS Animation', channel: 'Kevin Powell', thumbnail: 'https://img.youtube.com/vi/phDBAhWD9kk/maxresdefault.jpg', duration: '30:00', views: '600K', date: '2 years ago', category: 'css', tags: ['animation', 'effects'] },
  { id: 'c10', youtubeId: 'G3e-cpL7ofc', title: 'Tailwind CSS Crash Course', channel: 'Traversy Media', thumbnail: 'https://img.youtube.com/vi/G3e-cpL7ofc/maxresdefault.jpg', duration: '40:00', views: '1.5M', date: '2 years ago', category: 'css', tags: ['tailwind', 'framework'] },
  
  // JavaScript
  { id: 'j1', youtubeId: 'PkZNo7MFNFg', title: 'JavaScript Tutorial', channel: 'Programming with Mosh', thumbnail: 'https://img.youtube.com/vi/PkZNo7MFNFg/maxresdefault.jpg', duration: '1:00:00', views: '7M', date: '5 years ago', category: 'js', tags: ['beginner', 'basics'] },
  { id: 'j2', youtubeId: 'W6NZfCO5SIk', title: 'JavaScript in 100 Seconds', channel: 'Fireship', thumbnail: 'https://img.youtube.com/vi/W6NZfCO5SIk/maxresdefault.jpg', duration: '2:30', views: '3M', date: '3 years ago', category: 'js', tags: ['quick', 'overview'] },
  { id: 'j3', youtubeId: 'hdI2bqOjy3c', title: 'JavaScript Full Course', channel: 'freeCodeCamp', thumbnail: 'https://img.youtube.com/vi/hdI2bqOjy3c/maxresdefault.jpg', duration: '8:11:00', views: '12M', date: '4 years ago', category: 'js', tags: ['full', 'beginner'] },
  { id: 'j4', youtubeId: '1h5oWavel3U', title: 'Async JavaScript', channel: 'Web Dev Simplified', thumbnail: 'https://img.youtube.com/vi/1h5oWavel3U/maxresdefault.jpg', duration: '30:00', views: '800K', date: '3 years ago', category: 'js', tags: ['async', 'promises'] },
  { id: 'j5', youtubeId: 'R9I85RhI7Cg', title: 'JavaScript ES6 Features', channel: 'Traversy Media', thumbnail: 'https://img.youtube.com/vi/R9I85RhI7Cg/maxresdefault.jpg', duration: '45:00', views: '1.2M', date: '4 years ago', category: 'js', tags: ['es6', 'modern'] },
  { id: 'j6', youtubeId: 'EerdGMIT2nA', title: 'JavaScript DOM', channel: 'The Net Ninja', thumbnail: 'https://img.youtube.com/vi/EerdGMIT2nA/maxresdefault.jpg', duration: '35:00', views: '900K', date: '3 years ago', category: 'js', tags: ['dom', 'manipulation'] },
  { id: 'j7', youtubeId: 'exBgWAIeIeg', title: 'Fetch API', channel: 'James Q Quick', thumbnail: 'https://img.youtube.com/vi/exBgWAIeIeg/maxresdefault.jpg', duration: '20:00', views: '400K', date: '2 years ago', category: 'js', tags: ['api', 'fetch'] },
  { id: 'j8', youtubeId: '8aGhZQkoFbQ', title: 'JavaScript Fundamentals', channel: 'freeCodeCamp', thumbnail: 'https://img.youtube.com/vi/8aGhZQkoFbQ/maxresdefault.jpg', duration: '3:26:00', views: '5M', date: '4 years ago', category: 'js', tags: ['fundamentals', 'basics'] },
  { id: 'j9', youtubeId: 'W6NZfCO5SIk', title: 'JavaScript Array Methods', channel: 'Traversy Media', thumbnail: 'https://img.youtube.com/vi/R8rmfD9Y5-c/maxresdefault.jpg', duration: '25:00', views: '1M', date: '3 years ago', category: 'js', tags: ['arrays', 'methods'] },
  { id: 'j10', youtubeId: 'DHvZLI7Db8E', title: 'JavaScript OOP', channel: 'Web Dev Simplified', thumbnail: 'https://img.youtube.com/vi/DHvZLI7Db8E/maxresdefault.jpg', duration: '40:00', views: '600K', date: '3 years ago', category: 'js', tags: ['oop', 'classes'] },
  
  // TypeScript
  { id: 't1', youtubeId: 'BCg4U1FzODs', title: 'TypeScript for Beginners', channel: 'freeCodeCamp', thumbnail: 'https://img.youtube.com/vi/BCg4U1FzODs/maxresdefault.jpg', duration: '1:55:00', views: '2.5M', date: '2 years ago', category: 'ts', tags: ['beginner', 'basics'] },
  { id: 't2', youtubeId: 'zQnBQ4tB3ZA', title: 'TypeScript in 100 Seconds', channel: 'Fireship', thumbnail: 'https://img.youtube.com/vi/zQnBQ4tB3ZA/maxresdefault.jpg', duration: '2:30', views: '1.5M', date: '2 years ago', category: 'ts', tags: ['quick', 'overview'] },
  { id: 't3', youtubeId: 'ahCwqrYpIuM', title: 'TypeScript Course', channel: 'Net Ninja', thumbnail: 'https://img.youtube.com/vi/ahCwqrYpIuM/maxresdefault.jpg', duration: '50:00', views: '800K', date: '3 years ago', category: 'ts', tags: ['course', 'complete'] },
  { id: 't4', youtubeId: '30LWjhZzg50', title: 'TypeScript Generics', channel: 'Web Dev Simplified', thumbnail: 'https://img.youtube.com/vi/30LWjhZzg50/maxresdefault.jpg', duration: '15:00', views: '400K', date: '2 years ago', category: 'ts', tags: ['generics', 'advanced'] },
  { id: 't5', youtubeId: 'VGu1vDAWNTg', title: 'TypeScript Setup', channel: 'Traversy Media', thumbnail: 'https://img.youtube.com/vi/VGu1vDAWNTg/maxresdefault.jpg', duration: '20:00', views: '300K', date: '3 years ago', category: 'ts', tags: ['setup', 'config'] },
  { id: 't6', youtubeId: 'wyO8RWl1ges', title: 'TypeScript Interfaces', channel: 'Academind', thumbnail: 'https://img.youtube.com/vi/wyO8RWl1ges/maxresdefault.jpg', duration: '25:00', views: '250K', date: '3 years ago', category: 'ts', tags: ['interfaces', 'types'] },
  { id: 't7', youtubeId: 'WlxcujsvcIY', title: 'TypeScript Full Course', channel: 'freeCodeCamp', thumbnail: 'https://img.youtube.com/vi/WlxcujsvcIY/maxresdefault.jpg', duration: '4:48:00', views: '1.8M', date: '2 years ago', category: 'ts', tags: ['full', 'complete'] },
  { id: 't8', youtubeId: 'hBk4nV7q6-w', title: 'TypeScript Utility Types', channel: 'Matt Pocock', thumbnail: 'https://img.youtube.com/vi/hBk4nV7q6-w/maxresdefault.jpg', duration: '12:00', views: '200K', date: '1 year ago', category: 'ts', tags: ['utility', 'types'] },
  { id: 't9', youtubeId: '0sYlrn6YtXI', title: 'TypeScript with React', channel: 'Ben Awad', thumbnail: 'https://img.youtube.com/vi/0sYlrn6YtXI/maxresdefault.jpg', duration: '30:00', views: '350K', date: '2 years ago', category: 'ts', tags: ['react', 'framework'] },
  { id: 't10', youtubeId: 'BwuLxPH8IDs', title: 'TypeScript Classes', channel: 'Academind', thumbnail: 'https://img.youtube.com/vi/BwuLxPH8IDs/maxresdefault.jpg', duration: '22:00', views: '280K', date: '3 years ago', category: 'ts', tags: ['classes', 'oop'] },
  
  // Python
  { id: 'p1', youtubeId: '_uQrJ0TkZlc', title: 'Python Tutorial', channel: 'Programming with Mosh', thumbnail: 'https://img.youtube.com/vi/_uQrJ0TkZlc/maxresdefault.jpg', duration: '6:14:00', views: '28M', date: '5 years ago', category: 'py', tags: ['beginner', 'basics'] },
  { id: 'p2', youtubeId: 'x7X9w_GIm1s', title: 'Python in 100 Seconds', channel: 'Fireship', thumbnail: 'https://img.youtube.com/vi/x7X9w_GIm1s/maxresdefault.jpg', duration: '2:30', views: '2M', date: '3 years ago', category: 'py', tags: ['quick', 'overview'] },
  { id: 'p3', youtubeId: 'rfscVS0vtbw', title: 'Python Full Course', channel: 'freeCodeCamp', thumbnail: 'https://img.youtube.com/vi/rfscVS0vtbw/maxresdefault.jpg', duration: '4:26:00', views: '35M', date: '5 years ago', category: 'py', tags: ['full', 'beginner'] },
  { id: 'p4', youtubeId: 'DQgE-I5ylg8', title: 'Python OOP', channel: 'Tech With Tim', thumbnail: 'https://img.youtube.com/vi/DQgE-I5ylg8/maxresdefault.jpg', duration: '45:00', views: '1.5M', date: '3 years ago', category: 'py', tags: ['oop', 'classes'] },
  { id: 'p5', youtubeId: 'HGOBQPFzWKo', title: 'Python Functions', channel: 'Corey Schafer', thumbnail: 'https://img.youtube.com/vi/HGOBQPFzWKo/maxresdefault.jpg', duration: '30:00', views: '1M', date: '6 years ago', category: 'py', tags: ['functions', 'basics'] },
  { id: 'p6', youtubeId: 'daefaLgNkw0', title: 'Python Data Structures', channel: 'NeuralNine', thumbnail: 'https://img.youtube.com/vi/daefaLgNkw0/maxresdefault.jpg', duration: '1:30:00', views: '800K', date: '2 years ago', category: 'py', tags: ['data', 'structures'] },
  { id: 'p7', youtubeId: 'YYXdXT2l-Gg', title: 'Python Decorators', channel: 'Corey Schafer', thumbnail: 'https://img.youtube.com/vi/YYXdXT2l-Gg/maxresdefault.jpg', duration: '15:00', views: '600K', date: '5 years ago', category: 'py', tags: ['decorators', 'advanced'] },
  { id: 'p8', youtubeId: 'BJ-VvGyQxho', title: 'Python Comprehensions', channel: 'Corey Schafer', thumbnail: 'https://img.youtube.com/vi/BJ-VvGyQxho/maxresdefault.jpg', duration: '12:00', views: '450K', date: '5 years ago', category: 'py', tags: ['comprehensions', 'advanced'] },
  { id: 'p9', youtubeId: 'dgHr_K_XzWg', title: 'Python File Handling', channel: 'Tech With Tim', thumbnail: 'https://img.youtube.com/vi/dgHr_K_XzWg/maxresdefault.jpg', duration: '25:00', views: '500K', date: '3 years ago', category: 'py', tags: ['files', 'io'] },
  { id: 'p10', youtubeId: 'Qd8-0lFvXek', title: 'Python Error Handling', channel: 'Tech With Tim', thumbnail: 'https://img.youtube.com/vi/Qd8-0lFvXek/maxresdefault.jpg', duration: '20:00', views: '400K', date: '3 years ago', category: 'py', tags: ['errors', 'exceptions'] },
  
  // Java
  { id: 'jv1', youtubeId: 'grEKMHGYyns', title: 'Java Tutorial', channel: 'Programming with Mosh', thumbnail: 'https://img.youtube.com/vi/grEKMHGYyns/maxresdefault.jpg', duration: '2:18:00', views: '5M', date: '5 years ago', category: 'java', tags: ['beginner', 'basics'] },
  { id: 'jv2', youtubeId: 'l9AzO1FMgM8', title: 'Java in 100 Seconds', channel: 'Fireship', thumbnail: 'https://img.youtube.com/vi/l9AzO1FMgM8/maxresdefault.jpg', duration: '2:30', views: '1.2M', date: '3 years ago', category: 'java', tags: ['quick', 'overview'] },
  { id: 'jv3', youtubeId: 'A74TOX803D0', title: 'Java Full Course', channel: 'Bro Code', thumbnail: 'https://img.youtube.com/vi/A74TOX803D0/maxresdefault.jpg', duration: '12:00:00', views: '8M', date: '3 years ago', category: 'java', tags: ['full', 'complete'] },
  { id: 'jv4', youtubeId: 'flpmSXVTqBI', title: 'Java Collections', channel: 'Telusko', thumbnail: 'https://img.youtube.com/vi/flpmSXVTqBI/maxresdefault.jpg', duration: '40:00', views: '600K', date: '4 years ago', category: 'java', tags: ['collections', 'data'] },
  { id: 'jv5', youtubeId: 'GsTDg0cxClI', title: 'Java Streams', channel: 'Amigoscode', thumbnail: 'https://img.youtube.com/vi/GsTDg0cxClI/maxresdefault.jpg', duration: '30:00', views: '450K', date: '2 years ago', category: 'java', tags: ['streams', 'functional'] },
  { id: 'jv6', youtubeId: 'Qgl81fPcLc8', title: 'Java OOP', channel: 'Programming with Mosh', thumbnail: 'https://img.youtube.com/vi/Qgl81fPcLc8/maxresdefault.jpg', duration: '1:30:00', views: '2M', date: '5 years ago', category: 'java', tags: ['oop', 'classes'] },
  { id: 'jv7', youtubeId: 'eIrMbAQSU34', title: 'Java Multithreading', channel: 'Coding with John', thumbnail: 'https://img.youtube.com/vi/eIrMbAQSU34/maxresdefault.jpg', duration: '45:00', views: '500K', date: '2 years ago', category: 'java', tags: ['threads', 'concurrency'] },
  { id: 'jv8', youtubeId: 'rV_3Lewxx6o', title: 'Java Exception Handling', channel: 'Telusko', thumbnail: 'https://img.youtube.com/vi/rV_3Lewxx6o/maxresdefault.jpg', duration: '25:00', views: '400K', date: '4 years ago', category: 'java', tags: ['exceptions', 'errors'] },
  { id: 'jv9', youtubeId: '70qy6_gw1Hc', title: 'Java Generics', channel: 'Coding with John', thumbnail: 'https://img.youtube.com/vi/70qy6_gw1Hc/maxresdefault.jpg', duration: '20:00', views: '350K', date: '2 years ago', category: 'java', tags: ['generics', 'types'] },
  { id: 'jv10', youtubeId: 'pTAda8fLtFk', title: 'Java Lambda Expressions', channel: 'Amigoscode', thumbnail: 'https://img.youtube.com/vi/pTAda8fLtFk/maxresdefault.jpg', duration: '15:00', views: '300K', date: '2 years ago', category: 'java', tags: ['lambda', 'functional'] }
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  // HTML (20)
  { question: 'Which tag is used to define a hyperlink?', options: ['<a>', '<link>', '<href>', '<url>'], correct: '<a>', category: 'html' },
  { question: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Hyper Transfer Markup Language'], correct: 'Hyper Text Markup Language', category: 'html' },
  { question: 'Which HTML element is used to specify a footer for a document?', options: ['<footer>', '<bottom>', '<section>', '<end>'], correct: '<footer>', category: 'html' },
  { question: 'What is the correct HTML element for the largest heading?', options: ['<h1>', '<heading>', '<head>', '<h6>'], correct: '<h1>', category: 'html' },
  { question: 'Which tag is used to define an input field?', options: ['<input>', '<textfield>', '<field>', '<form>'], correct: '<input>', category: 'html' },
  { question: 'What is the correct HTML for creating a checkbox?', options: ['<input type="checkbox">', '<checkbox>', '<check>', '<input type="check">'], correct: '<input type="checkbox">', category: 'html' },
  { question: 'Which attribute specifies an alternate text for an image?', options: ['alt', 'src', 'title', 'text'], correct: 'alt', category: 'html' },
  { question: 'Which HTML tag is used to define an unordered list?', options: ['<ul>', '<ol>', '<li>', '<list>'], correct: '<ul>', category: 'html' },
  { question: 'What is the correct HTML for making a text area?', options: ['<textarea>', '<input type="textarea">', '<input type="text">', '<textbox>'], correct: '<textarea>', category: 'html' },
  { question: 'Which tag is used for creating a table row?', options: ['<tr>', '<td>', '<table>', '<row>'], correct: '<tr>', category: 'html' },
  { question: 'What is the purpose of the <meta> tag?', options: ['Provides metadata', 'Creates links', 'Defines styles', 'Adds scripts'], correct: 'Provides metadata', category: 'html' },
  { question: 'Which HTML5 element defines navigation links?', options: ['<nav>', '<navigation>', '<menu>', '<links>'], correct: '<nav>', category: 'html' },
  { question: 'What does the <aside> element represent?', options: ['Sidebar content', 'Main content', 'Footer', 'Header'], correct: 'Sidebar content', category: 'html' },
  { question: 'Which attribute makes an input field required?', options: ['required', 'validate', 'mandatory', 'needed'], correct: 'required', category: 'html' },
  { question: 'What is the correct HTML for adding a background color?', options: ['<body style="background-color:yellow">', '<background>yellow</background>', '<body bg="yellow">', '<body color="yellow">'], correct: '<body style="background-color:yellow">', category: 'html' },
  { question: 'Which tag is used to display code?', options: ['<code>', '<pre>', '<script>', '<programming>'], correct: '<code>', category: 'html' },
  { question: 'What is the purpose of the <canvas> element?', options: ['Drawing graphics', 'Creating forms', 'Embedding videos', 'Adding images'], correct: 'Drawing graphics', category: 'html' },
  { question: 'Which attribute specifies where to open a linked document?', options: ['target', 'destination', 'window', 'location'], correct: 'target', category: 'html' },
  { question: 'What is the correct HTML for inserting a line break?', options: ['<br>', '<lb>', '<break>', '<newline>'], correct: '<br>', category: 'html' },
  { question: 'Which element defines the document\'s main content?', options: ['<main>', '<content>', '<body>', '<article>'], correct: '<main>', category: 'html' },

  // CSS (20)
  { question: 'Which property is used to change the background color?', options: ['background-color', 'bgcolor', 'color', 'background'], correct: 'background-color', category: 'css' },
  { question: 'How do you select an element with id "demo"?', options: ['#demo', '.demo', 'demo', '*demo'], correct: '#demo', category: 'css' },
  { question: 'Which CSS property controls text size?', options: ['font-size', 'text-size', 'font-style', 'text-style'], correct: 'font-size', category: 'css' },
  { question: 'How do you make text bold in CSS?', options: ['font-weight: bold', 'text-style: bold', 'font: bold', 'text-weight: bold'], correct: 'font-weight: bold', category: 'css' },
  { question: 'Which property is used to change font?', options: ['font-family', 'font-type', 'font-name', 'typeface'], correct: 'font-family', category: 'css' },
  { question: 'How do you center a block element?', options: ['margin: auto', 'align: center', 'center: true', 'text-align: center'], correct: 'margin: auto', category: 'css' },
  { question: 'Which property adds space inside an element?', options: ['padding', 'margin', 'spacing', 'border'], correct: 'padding', category: 'css' },
  { question: 'What is the default position value?', options: ['static', 'relative', 'absolute', 'fixed'], correct: 'static', category: 'css' },
  { question: 'Which property is used for flexbox?', options: ['display: flex', 'flex: true', 'layout: flex', 'flexbox: on'], correct: 'display: flex', category: 'css' },
  { question: 'How do you select all <p> elements?', options: ['p', '.p', '#p', '*p'], correct: 'p', category: 'css' },
  { question: 'Which property creates rounded corners?', options: ['border-radius', 'corner-radius', 'border-round', 'round-corners'], correct: 'border-radius', category: 'css' },
  { question: 'What does "z-index" control?', options: ['Stack order', 'Font size', 'Color', 'Position'], correct: 'Stack order', category: 'css' },
  { question: 'Which unit is relative to font size?', options: ['em', 'px', 'pt', 'cm'], correct: 'em', category: 'css' },
  { question: 'How do you hide an element?', options: ['display: none', 'visibility: none', 'hidden: true', 'show: false'], correct: 'display: none', category: 'css' },
  { question: 'Which property controls opacity?', options: ['opacity', 'transparency', 'alpha', 'visibility'], correct: 'opacity', category: 'css' },
  { question: 'What does "!important" do?', options: ['Increases specificity', 'Adds comment', 'Validates CSS', 'Nothing'], correct: 'Increases specificity', category: 'css' },
  { question: 'Which property controls text color?', options: ['color', 'text-color', 'font-color', 'foreground'], correct: 'color', category: 'css' },
  { question: 'How do you create a CSS grid?', options: ['display: grid', 'layout: grid', 'grid: true', 'create-grid'], correct: 'display: grid', category: 'css' },
  { question: 'Which pseudo-class selects hover state?', options: [':hover', '::hover', '.hover', '#hover'], correct: ':hover', category: 'css' },
  { question: 'What is the box model order?', options: ['Content, Padding, Border, Margin', 'Margin, Border, Padding, Content', 'Border, Margin, Padding, Content', 'Content, Border, Padding, Margin'], correct: 'Content, Padding, Border, Margin', category: 'css' },

  // JavaScript (20)
  { question: 'Which keyword declares a constant?', options: ['const', 'let', 'var', 'final'], correct: 'const', category: 'js' },
  { question: 'What method converts JSON to object?', options: ['JSON.parse()', 'JSON.stringify()', 'JSON.toObject()', 'JSON.convert()'], correct: 'JSON.parse()', category: 'js' },
  { question: 'Which method adds to the end of an array?', options: ['push()', 'pop()', 'shift()', 'unshift()'], correct: 'push()', category: 'js' },
  { question: 'What does "===" check?', options: ['Value and type', 'Value only', 'Type only', 'Reference'], correct: 'Value and type', category: 'js' },
  { question: 'How do you create a function?', options: ['function myFunc()', 'def myFunc()', 'func myFunc()', 'create myFunc()'], correct: 'function myFunc()', category: 'js' },
  { question: 'Which method returns array length?', options: ['.length', '.size()', '.count()', '.len()'], correct: '.length', category: 'js' },
  { question: 'What is the DOM?', options: ['Document Object Model', 'Data Object Model', 'Document Order Model', 'Digital Object Model'], correct: 'Document Object Model', category: 'js' },
  { question: 'How do you comment in JavaScript?', options: ['//', '/* */', '#', 'Both // and /* */'], correct: 'Both // and /* */', category: 'js' },
  { question: 'Which method selects by ID?', options: ['getElementById()', 'querySelector()', 'getElement()', 'selectById()'], correct: 'getElementById()', category: 'js' },
  { question: 'What does "typeof" return?', options: ['Data type', 'Value', 'Variable name', 'Length'], correct: 'Data type', category: 'js' },
  { question: 'Which is not a primitive type?', options: ['Object', 'String', 'Number', 'Boolean'], correct: 'Object', category: 'js' },
  { question: 'How do you declare an array?', options: ['[]', '{}', '()', '<>'], correct: '[]', category: 'js' },
  { question: 'What method converts string to number?', options: ['parseInt()', 'toString()', 'toNumber()', 'convert()'], correct: 'parseInt()', category: 'js' },
  { question: 'Which loop iterates over object properties?', options: ['for...in', 'for...of', 'forEach', 'while'], correct: 'for...in', category: 'js' },
  { question: 'What is a callback?', options: ['Function passed as argument', 'Return value', 'Loop', 'Variable'], correct: 'Function passed as argument', category: 'js' },
  { question: 'How do you handle errors?', options: ['try...catch', 'if...else', 'error...handle', 'catch...error'], correct: 'try...catch', category: 'js' },
  { question: 'Which method finds array element?', options: ['find()', 'search()', 'locate()', 'seek()'], correct: 'find()', category: 'js' },
  { question: 'What does "async" define?', options: ['Asynchronous function', 'Array', 'Synchronous code', 'Variable'], correct: 'Asynchronous function', category: 'js' },
  { question: 'Which operator spreads array?', options: ['...', '***', '+++', '<<<'], correct: '...', category: 'js' },
  { question: 'What is event bubbling?', options: ['Event propagates up', 'Event repeats', 'Event stops', 'Event delays'], correct: 'Event propagates up', category: 'js' },

  // TypeScript (15)
  { question: 'What is TypeScript?', options: ['Typed superset of JavaScript', 'New language', 'Framework', 'Library'], correct: 'Typed superset of JavaScript', category: 'ts' },
  { question: 'How do you define a type?', options: ['type Name = string', 'var Name: string', 'Name as string', 'string Name'], correct: 'type Name = string', category: 'ts' },
  { question: 'What is an interface?', options: ['Contract for objects', 'Class', 'Function', 'Variable'], correct: 'Contract for objects', category: 'ts' },
  { question: 'Which type accepts any value?', options: ['any', 'all', 'unknown', 'every'], correct: 'any', category: 'ts' },
  { question: 'How do you make property optional?', options: ['prop?:', 'prop*:', 'prop!:', 'prop~:'], correct: 'prop?:', category: 'ts' },
  { question: 'What is a generic?', options: ['Reusable type', 'Specific type', 'Function', 'Class'], correct: 'Reusable type', category: 'ts' },
  { question: 'Which utility makes all properties optional?', options: ['Partial<T>', 'Optional<T>', 'Maybe<T>', 'Nullable<T>'], correct: 'Partial<T>', category: 'ts' },
  { question: 'What does "never" represent?', options: ['No return value', 'Null', 'Undefined', 'Empty'], correct: 'No return value', category: 'ts' },
  { question: 'How do you assert a type?', options: ['as Type', 'is Type', 'to Type', 'cast Type'], correct: 'as Type', category: 'ts' },
  { question: 'What is a tuple?', options: ['Fixed-length array', 'Variable array', 'Object', 'Set'], correct: 'Fixed-length array', category: 'ts' },
  { question: 'Which keyword defines enum?', options: ['enum', 'enumerate', 'const enum', 'type enum'], correct: 'enum', category: 'ts' },
  { question: 'What does "readonly" do?', options: ['Prevents modification', 'Makes private', 'Hides property', 'Nothing'], correct: 'Prevents modification', category: 'ts' },
  { question: 'How do you extend an interface?', options: ['extends', 'implements', 'inherits', 'uses'], correct: 'extends', category: 'ts' },
  { question: 'What is "unknown" type?', options: ['Type-safe any', 'Same as any', 'Null type', 'Void type'], correct: 'Type-safe any', category: 'ts' },
  { question: 'Which utility makes all properties required?', options: ['Required<T>', 'Mandatory<T>', 'Needed<T>', 'Complete<T>'], correct: 'Required<T>', category: 'ts' },

  // Python (15)
  { question: 'How do you create a list?', options: ['[]', '{}', '()', '<>'], correct: '[]', category: 'py' },
  { question: 'Which keyword defines a function?', options: ['def', 'function', 'func', 'define'], correct: 'def', category: 'py' },
  { question: 'What is a dictionary?', options: ['Key-value pairs', 'Array', 'List', 'Tuple'], correct: 'Key-value pairs', category: 'py' },
  { question: 'How do you comment?', options: ['#', '//', '/* */', '--'], correct: '#', category: 'py' },
  { question: 'Which method adds to list?', options: ['.append()', '.add()', '.push()', '.insert()'], correct: '.append()', category: 'py' },
  { question: 'What is "self"?', options: ['Instance reference', 'Class name', 'Variable', 'Method'], correct: 'Instance reference', category: 'py' },
  { question: 'How do you import module?', options: ['import module', 'require module', 'use module', 'include module'], correct: 'import module', category: 'py' },
  { question: 'Which is immutable?', options: ['Tuple', 'List', 'Dictionary', 'Set'], correct: 'Tuple', category: 'py' },
  { question: 'What does "pass" do?', options: ['Placeholder', 'Skip loop', 'Return', 'Break'], correct: 'Placeholder', category: 'py' },
  { question: 'How do you create a class?', options: ['class Name:', 'class Name{}', 'def class Name:', 'new class Name'], correct: 'class Name:', category: 'py' },
  { question: 'Which loop iterates over sequence?', options: ['for', 'while', 'loop', 'each'], correct: 'for', category: 'py' },
  { question: 'What is a lambda?', options: ['Anonymous function', 'Loop', 'Class', 'Variable'], correct: 'Anonymous function', category: 'py' },
  { question: 'How do you handle exceptions?', options: ['try...except', 'try...catch', 'if...error', 'error...handle'], correct: 'try...except', category: 'py' },
  { question: 'What does "range(5)" return?', options: ['0 to 4', '1 to 5', '0 to 5', '1 to 4'], correct: '0 to 4', category: 'py' },
  { question: 'Which is a string method?', options: ['.split()', '.add()', '.push()', '.remove()'], correct: '.split()', category: 'py' },

  // Java (10)
  { question: 'How do you declare a variable?', options: ['int x = 5;', 'var x = 5;', 'x: int = 5;', 'declare x = 5;'], correct: 'int x = 5;', category: 'java' },
  { question: 'What is the entry point?', options: ['public static void main', 'main()', 'start()', 'run()'], correct: 'public static void main', category: 'java' },
  { question: 'Which keyword creates object?', options: ['new', 'create', 'make', 'instance'], correct: 'new', category: 'java' },
  { question: 'What is inheritance keyword?', options: ['extends', 'inherits', 'implements', 'derives'], correct: 'extends', category: 'java' },
  { question: 'Which is not primitive?', options: ['String', 'int', 'boolean', 'double'], correct: 'String', category: 'java' },
  { question: 'How do you print?', options: ['System.out.println()', 'print()', 'console.log()', 'println()'], correct: 'System.out.println()', category: 'java' },
  { question: 'What is an interface?', options: ['Contract', 'Class', 'Method', 'Variable'], correct: 'Contract', category: 'java' },
  { question: 'Which exception is checked?', options: ['IOException', 'NullPointerException', 'ArrayIndexOutOfBounds', 'RuntimeException'], correct: 'IOException', category: 'java' },
  { question: 'What is ArrayList?', options: ['Dynamic array', 'Fixed array', 'Map', 'Set'], correct: 'Dynamic array', category: 'java' },
  { question: 'Which keyword prevents inheritance?', options: ['final', 'private', 'static', 'sealed'], correct: 'final', category: 'java' }
];

export const DOCS: DocItem[] = [
    // ================= HTML =================
    {
        id: 'html',
        title: 'HTML',
        library: 'html',
        category: 'structure',
        description: 'HTML (HyperText Markup Language) is the standard markup language for creating web pages. It structures web content using elements and tags, defining everything from headings and paragraphs to images and links. HTML forms the backbone of every website, working alongside CSS for styling and JavaScript for interactivity.',
        syntax: '<!DOCTYPE html>\n<html>\n  <head>\n    <title>Page Title</title>\n  </head>\n  <body>\n    <!-- Content goes here -->\n  </body>\n</html>',
        examples: [
            {
                title: 'Basic Page Structure',
                description: 'A minimal HTML document with proper structure including DOCTYPE, head, and body sections.',
                code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>My First Page</title>\n</head>\n<body>\n  <h1>Welcome to HTML</h1>\n  <p>This is a paragraph.</p>\n</body>\n</html>'
            },
            {
                title: 'Semantic Structure',
                description: 'Using HTML5 semantic elements like header, nav, main, and footer for better document structure and accessibility.',
                code: '<header>\n  <h1>Website Title</h1>\n  <nav>\n    <a href="#home">Home</a>\n    <a href="#about">About</a>\n  </nav>\n</header>\n<main>\n  <article>\n    <h2>Article Title</h2>\n    <p>Article content...</p>\n  </article>\n</main>\n<footer>\n  <p>&copy; 2024 Company</p>\n</footer>'
            },
            {
                title: 'Complete Website Template',
                description: 'A comprehensive HTML template with meta tags, semantic structure, and common elements.',
                code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <meta name="description" content="Website description">\n  <title>Professional Website</title>\n</head>\n<body>\n  <header>\n    <h1>Site Name</h1>\n    <nav>\n      <ul>\n        <li><a href="#home">Home</a></li>\n        <li><a href="#services">Services</a></li>\n        <li><a href="#contact">Contact</a></li>\n      </ul>\n    </nav>\n  </header>\n  <main>\n    <section id="home">\n      <h2>Welcome</h2>\n      <p>Main content here</p>\n    </section>\n  </main>\n  <footer>\n    <p>Contact: info@example.com</p>\n  </footer>\n</body>\n</html>'
            }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always include a DOCTYPE declaration at the beginning of your HTML documents',
            'Use semantic HTML5 elements (header, nav, main, article, footer) for better structure and accessibility',
            'Include proper meta tags for character encoding and viewport settings',
            'Ensure all images have descriptive alt text for accessibility',
            'Validate your HTML using the W3C Markup Validation Service',
            'Keep your HTML structure clean and properly indented for maintainability'
        ]
    },

    {
    id: 'html-forms',
    title: 'HTML Forms',
    library: 'html',
    category: 'interactive',
    description: 'HTML forms are used to collect user input and send it to a server for processing. They contain interactive controls like text fields, checkboxes, radio buttons, and submit buttons. Forms are a fundamental part of web interactivity, enabling everything from login pages and search bars to complex data entry interfaces.',
    syntax: '<form action="/submit" method="POST">\n  <label for="field">Label:</label>\n  <input type="text" id="field" name="field">\n  <button type="submit">Submit</button>\n</form>',
    examples: [
        {
            title: 'Basic Contact Form',
            description: 'A simple contact form with name, email, and message fields.',
            code: '<form action="/contact" method="POST">\n  <div>\n    <label for="name">Full Name:</label>\n    <input type="text" id="name" name="name" placeholder="John Doe" required>\n  </div>\n  <div>\n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email" placeholder="john@example.com" required>\n  </div>\n  <div>\n    <label for="message">Message:</label>\n    <textarea id="message" name="message" rows="5" placeholder="Your message..."></textarea>\n  </div>\n  <button type="submit">Send Message</button>\n</form>'
        },
        {
            title: 'Login Form',
            description: 'A login form with username, password, and remember me checkbox.',
            code: '<form action="/login" method="POST">\n  <div>\n    <label for="username">Username:</label>\n    <input type="text" id="username" name="username" autocomplete="username" required>\n  </div>\n  <div>\n    <label for="password">Password:</label>\n    <input type="password" id="password" name="password" autocomplete="current-password" required>\n  </div>\n  <div>\n    <input type="checkbox" id="remember" name="remember">\n    <label for="remember">Remember me</label>\n  </div>\n  <button type="submit">Log In</button>\n  <a href="/forgot-password">Forgot password?</a>\n</form>'
        },
        {
            title: 'Multi-Step Registration Form',
            description: 'A comprehensive registration form with fieldsets grouping related inputs.',
            code: '<form action="/register" method="POST">\n  <fieldset>\n    <legend>Personal Info</legend>\n    <label for="fname">First Name:</label>\n    <input type="text" id="fname" name="fname" required>\n    <label for="lname">Last Name:</label>\n    <input type="text" id="lname" name="lname" required>\n    <label for="dob">Date of Birth:</label>\n    <input type="date" id="dob" name="dob" required>\n  </fieldset>\n  <fieldset>\n    <legend>Account Details</legend>\n    <label for="reg-email">Email:</label>\n    <input type="email" id="reg-email" name="email" required>\n    <label for="reg-pass">Password:</label>\n    <input type="password" id="reg-pass" name="password" minlength="8" required>\n    <label for="confirm-pass">Confirm Password:</label>\n    <input type="password" id="confirm-pass" name="confirm_password" required>\n  </fieldset>\n  <button type="submit">Create Account</button>\n</form>'
        }
    ],
    browserSupport: DEFAULT_SUPPORT,
    bestPractices: [
        'Always associate labels with inputs using matching for and id attributes',
        'Use the appropriate input type (email, tel, date) to trigger correct mobile keyboards',
        'Include the required attribute on mandatory fields and validate both client and server side',
        'Group related form controls with fieldset and legend elements',
        'Use autocomplete attributes to help browsers autofill common fields',
        'Provide clear error messages and visual feedback when validation fails'
    ]
},

    {
        id: 'div',
        title: '<div>',
        library: 'html',
        category: 'structure',
        description: 'The <div> element is a generic container used to group and organize content on a web page. It has no semantic meaning on its own but is essential for layout and styling. Think of it as a box that can hold other HTML elements. Divs are block-level elements, meaning they start on a new line and take up the full width available.',
        syntax: '<div>\n  <!-- Content goes here -->\n</div>',
        examples: [
            {
                title: 'Basic Container',
                description: 'Using a div as a simple container to group related content together.',
                code: '<div>\n  <h2>Section Title</h2>\n  <p>This is some content inside a div container.</p>\n  <p>Divs help organize your page structure.</p>\n</div>'
            },
            {
                title: 'Styled Card Component',
                description: 'Creating a card layout using div with inline styles for visual presentation.',
                code: '<div style="border: 1px solid #ddd; border-radius: 8px; padding: 20px; max-width: 400px;">\n  <h3 style="margin-top: 0;">Product Card</h3>\n  <p>This card demonstrates how divs can be styled to create visual components.</p>\n  <button style="background: #007bff; color: white; border: none; padding: 10px 20px; border-radius: 4px; cursor: pointer;">Learn More</button>\n</div>'
            },
            {
                title: 'Grid Layout',
                description: 'Using multiple divs to create a responsive grid layout for content organization.',
                code: '<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px;">\n  <div style="background: #f0f0f0; padding: 20px; border-radius: 8px;">\n    <h4>Column 1</h4>\n    <p>Content here</p>\n  </div>\n  <div style="background: #e0e0e0; padding: 20px; border-radius: 8px;">\n    <h4>Column 2</h4>\n    <p>Content here</p>\n  </div>\n  <div style="background: #d0d0d0; padding: 20px; border-radius: 8px;">\n    <h4>Column 3</h4>\n    <p>Content here</p>\n  </div>\n</div>'
            },
            {
                title: 'Nested Structure',
                description: 'Demonstrating how divs can be nested to create complex layouts and hierarchical structure.',
                code: '<div style="background: #f5f5f5; padding: 20px;">\n  <div style="background: white; padding: 15px; margin-bottom: 10px; border-radius: 4px;">\n    <h3>Parent Container</h3>\n    <div style="background: #e8e8e8; padding: 10px; border-left: 3px solid #007bff;">\n      <p>Nested child div with custom styling</p>\n    </div>\n  </div>\n</div>'
            }
        ],
        attributes: [
            { name: 'id', type: 'string', description: 'Unique identifier for the div element' },
            { name: 'class', type: 'string', description: 'CSS class names for styling' },
            { name: 'style', type: 'string', description: 'Inline CSS styles' },
            { name: 'data-*', type: 'string', description: 'Custom data attributes for storing extra information' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use semantic HTML5 elements (section, article, nav) instead of divs when appropriate',
            'Add meaningful class or id names that describe the content, not the appearance',
            'Avoid excessive div nesting (div soup) - keep your structure as flat as possible',
            'Use divs for layout purposes and semantic elements for content structure',
            'Consider using CSS Grid or Flexbox on divs for modern, responsive layouts',
            'Don\'t use divs where a more specific element would be better (like <button> for buttons)'
        ]
    },

    {
        id: 'span',
        title: '<span>',
        library: 'html',
        category: 'text',
        description: 'The <span> element is an inline container used to group and style specific portions of text or inline elements. Unlike <div>, which is block-level, <span> doesn\'t break the flow of content. It\'s perfect for applying styles or manipulating specific words or phrases within a paragraph without affecting the surrounding content.',
        syntax: '<span>text content</span>',
        examples: [
            {
                title: 'Text Highlighting',
                description: 'Using span to highlight specific words within a paragraph with different colors.',
                code: '<p>\n  This is a normal sentence with <span style="color: red; font-weight: bold;">important text</span> that needs emphasis.\n  You can also have <span style="background-color: yellow;">highlighted sections</span> within the same paragraph.\n</p>'
            },
            {
                title: 'Custom Styling',
                description: 'Applying multiple styles to inline text elements for visual variety.',
                code: '<p>\n  The price is <span style="font-size: 24px; color: #28a745; font-weight: bold;">$49.99</span>\n  <span style="text-decoration: line-through; color: #888;">$79.99</span>\n  <span style="background: #ff0000; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">50% OFF</span>\n</p>'
            },
            {
                title: 'Icon with Text',
                description: 'Combining spans with emoji or symbols to create inline icon-text combinations.',
                code: '<p>\n  <span style="color: #28a745; font-size: 20px;">âœ"</span>\n  <span style="font-weight: bold;">Available in stock</span>\n  <br>\n  <span style="color: #dc3545; font-size: 20px;">âœ—</span>\n  <span style="color: #888;">Out of stock</span>\n</p>'
            },
            {
                title: 'Data Attributes',
                description: 'Using spans with data attributes for dynamic content or JavaScript manipulation.',
                code: '<p>\n  Welcome back, <span id="username" style="font-weight: bold; color: #007bff;">Guest</span>!\n  You have <span data-count="5" style="background: #ff6b6b; color: white; padding: 2px 8px; border-radius: 50%; font-size: 12px; font-weight: bold;">5</span> new messages.\n</p>'
            }
        ],
        attributes: [
            { name: 'id', type: 'string', description: 'Unique identifier for the span element' },
            { name: 'class', type: 'string', description: 'CSS class names for styling' },
            { name: 'style', type: 'string', description: 'Inline CSS styles' },
            { name: 'data-*', type: 'string', description: 'Custom data attributes for storing information' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use <span> only for styling inline content - don\'t use it for layout structure',
            'Prefer semantic elements like <strong>, <em>, <mark> when they fit the meaning',
            'Keep inline styles minimal - use CSS classes for reusable styles',
            'Use spans for wrapping individual words or short phrases, not entire paragraphs',
            'Add meaningful class names that describe the purpose, not the appearance',
            'Avoid nesting multiple spans unnecessarily - keep your markup clean and simple'
        ]
    },

    {
        id: 'a',
        title: '<a>',
        library: 'html',
        category: 'interactive',
        description: 'The <a> (anchor) element creates hyperlinks that allow users to navigate between pages, sections, or external resources. Links are fundamental to the web, enabling the interconnected nature of websites. The href attribute specifies the destination, while the link text tells users what to expect when they click.',
        syntax: '<a href="url">Link Text</a>',
        examples: [
            {
                title: 'Basic Links',
                description: 'Different types of basic hyperlinks including external, internal, and email links.',
                code: '<!-- External website -->\n<a href="https://www.example.com">Visit Example</a>\n\n<!-- Internal page -->\n<a href="/about.html">About Us</a>\n\n<!-- Email link -->\n<a href="mailto:info@example.com">Send Email</a>\n\n<!-- Phone link -->\n<a href="tel:+1234567890">Call Us</a>'
            },
            {
                title: 'Link Targets',
                description: 'Controlling how links open using the target attribute for different behaviors.',
                code: '<!-- Opens in new tab -->\n<a href="https://www.example.com" target="_blank">New Tab</a>\n\n<!-- Opens in same tab (default) -->\n<a href="https://www.example.com" target="_self">Same Tab</a>\n\n<!-- With security attributes -->\n<a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Secure External Link</a>'
            },
            {
                title: 'Anchor Navigation',
                description: 'Creating jump links that navigate to specific sections within the same page.',
                code: '<!-- Navigation menu -->\n<nav>\n  <a href="#section1">Section 1</a>\n  <a href="#section2">Section 2</a>\n  <a href="#section3">Section 3</a>\n</nav>\n\n<!-- Target sections -->\n<section id="section1">\n  <h2>Section 1</h2>\n  <p>Content here...</p>\n  <a href="#top">Back to Top</a>\n</section>'
            },
            {
                title: 'Styled Button Links',
                description: 'Transforming links into button-like elements using CSS styling for better visual hierarchy.',
                code: '<a href="/signup" style="display: inline-block; background: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">Sign Up Now</a>\n\n<a href="/learn-more" style="display: inline-block; background: transparent; color: #007bff; padding: 12px 24px; text-decoration: none; border: 2px solid #007bff; border-radius: 6px; font-weight: bold;">Learn More</a>'
            }
        ],
        attributes: [
            { name: 'href', type: 'URL', description: 'Specifies the destination URL or anchor' },
            { name: 'target', type: 'string', description: 'Where to open the link (_blank, _self, _parent, _top)' },
            { name: 'rel', type: 'string', description: 'Relationship between current and linked document' },
            { name: 'download', type: 'string', description: 'Prompts download instead of navigation' },
            { name: 'title', type: 'string', description: 'Tooltip text shown on hover' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always use descriptive link text - avoid "click here" or "read more" without context',
            'Add rel="noopener noreferrer" when using target="_blank" for security',
            'Use meaningful title attributes to provide additional context for users',
            'Ensure links have sufficient color contrast and are distinguishable from regular text',
            'Test keyboard navigation - links should be accessible via Tab key',
            'Consider adding visual indicators for external links or downloads'
        ]
    },

    {
        id: 'img',
        title: '<img>',
        library: 'html',
        category: 'media',
        description: 'The <img> element embeds images into web pages. Images enhance visual communication and user engagement. The src attribute specifies the image source, while alt provides alternative text for accessibility and SEO. Images are inline-replaced elements, meaning they display in the flow of text but are replaced with the actual image content.',
        syntax: '<img src="path/to/image.jpg" alt="description">',
        examples: [
            {
                title: 'Basic Image',
                description: 'A simple image with source and alternative text for accessibility.',
                code: '<img src="https://via.placeholder.com/400x300" alt="Placeholder image" style="max-width: 100%; height: auto;">'
            },
            {
                title: 'Responsive Image',
                description: 'Creating responsive images that scale properly on different screen sizes.',
                code: '<img src="https://via.placeholder.com/800x600" \n     alt="Responsive landscape" \n     style="width: 100%; max-width: 600px; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">'
            },
            {
                title: 'Image with Caption',
                description: 'Combining image with figure and figcaption elements for proper semantic markup.',
                code: '<figure style="margin: 0; text-align: center;">\n  <img src="https://via.placeholder.com/500x300" \n       alt="Sample image with caption" \n       style="width: 100%; max-width: 500px; border-radius: 8px;">\n  <figcaption style="margin-top: 10px; color: #666; font-style: italic;">This is a descriptive caption for the image above</figcaption>\n</figure>'
            },
            {
                title: 'Image Gallery',
                description: 'Creating a simple image gallery using multiple images with consistent styling.',
                code: '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">\n  <img src="https://via.placeholder.com/200" alt="Gallery image 1" style="width: 100%; border-radius: 8px; transition: transform 0.3s; cursor: pointer;" onmouseover="this.style.transform=\'scale(1.05)\'" onmouseout="this.style.transform=\'scale(1)\'">\n  <img src="https://via.placeholder.com/200/FF6B6B" alt="Gallery image 2" style="width: 100%; border-radius: 8px; transition: transform 0.3s; cursor: pointer;" onmouseover="this.style.transform=\'scale(1.05)\'" onmouseout="this.style.transform=\'scale(1)\'">\n  <img src="https://via.placeholder.com/200/4ECDC4" alt="Gallery image 3" style="width: 100%; border-radius: 8px; transition: transform 0.3s; cursor: pointer;" onmouseover="this.style.transform=\'scale(1.05)\'" onmouseout="this.style.transform=\'scale(1)\'">\n</div>'
            }
        ],
        attributes: [
            { name: 'src', type: 'URL', description: 'Path to the image file (required)' },
            { name: 'alt', type: 'string', description: 'Alternative text description (required for accessibility)' },
            { name: 'width', type: 'number', description: 'Image width in pixels' },
            { name: 'height', type: 'number', description: 'Image height in pixels' },
            { name: 'loading', type: 'lazy | eager', description: 'Controls image loading behavior' },
            { name: 'srcset', type: 'string', description: 'Multiple image sources for responsive images' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always include descriptive alt text that explains the image content and purpose',
            'Use appropriate image formats: JPEG for photos, PNG for graphics with transparency, SVG for icons',
            'Optimize images for web - compress large files without sacrificing quality',
            'Set width and height to prevent layout shift during page load',
            'Use lazy loading (loading="lazy") for images below the fold to improve performance',
            'Consider using srcset for responsive images that adapt to different screen sizes'
        ]
    },

    {
        id: 'html-headings',
        title: '<h1> - <h6>',
        library: 'html',
        category: 'text',
        description: 'The heading elements <h1> through <h6> represent six levels of section headings, with <h1> being the most important and <h6> the least. Headings create a document outline that both sighted users and assistive technologies rely on to understand and navigate page structure. Search engines also use heading hierarchy to interpret content relevance. Each page should typically have exactly one <h1> describing its main topic, with subsequent headings nested logically to reflect the content hierarchy.',
        syntax: '<h1>Main Heading</h1>\n<h2>Subheading</h2>\n<h3>Sub-subheading</h3>',
        examples: [
            {
                title: 'Basic Heading Hierarchy',
                description: 'A properly nested heading structure for an article.',
                code: '<h1>How to Bake Bread</h1>\n<h2>Ingredients</h2>\n<h2>Instructions</h2>\n<h3>Preparing the Dough</h3>\n<h3>Baking</h3>'
            },
            {
                title: 'Page Layout with Headings',
                description: 'Using headings to structure a typical page layout.',
                code: '<h1>DevNexus Blog</h1>\n<article>\n  <h2>Understanding Closures in JavaScript</h2>\n  <h3>What is a Closure?</h3>\n  <p>A closure gives a function access to its outer scope...</p>\n  <h3>Common Use Cases</h3>\n</article>'
            },
            {
                title: 'Styled Headings',
                description: 'Applying custom styles while preserving semantic meaning.',
                code: '<h1 style="font-size: 2.5rem; color: #1a1a1a; border-bottom: 3px solid #3b82f6; padding-bottom: 8px;">Welcome</h1>\n<h2 style="font-size: 1.5rem; color: #4b5563;">Getting Started</h2>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use exactly one <h1> per page that describes the main content',
            'Never skip heading levels (e.g., going from <h2> straight to <h4>) as it breaks the document outline',
            'Choose heading levels based on document structure, not visual size — use CSS for styling instead',
            'Keep heading text concise and descriptive so it makes sense out of context (screen reader users often navigate by headings alone)',
            'Avoid using headings purely for visual emphasis on text that is not actually a section title'
        ]
    },

    {
        id: 'p',
        title: '<p>',
        library: 'html',
        category: 'text',
        description: 'The <p> element represents a paragraph of text — one of the most fundamental building blocks of written content on the web. Browsers automatically add margin above and below paragraphs to visually separate them. The <p> element cannot contain other block-level elements like <div> or headings, only inline content and text. It is a block-level element, meaning it always starts on a new line.',
        syntax: '<p>This is a paragraph of text.</p>',
        examples: [
            {
                title: 'Basic Paragraph',
                description: 'A simple paragraph of body text.',
                code: '<p>HTML provides the structure for every web page. Without it, browsers would have no way to understand how content should be organized.</p>'
            },
            {
                title: 'Multiple Paragraphs',
                description: 'Separating distinct ideas into individual paragraphs.',
                code: '<p>The first paragraph introduces the topic.</p>\n<p>The second paragraph builds on that idea with more detail.</p>\n<p>A closing paragraph wraps up the thought.</p>'
            },
            {
                title: 'Paragraph with Inline Elements',
                description: 'Combining a paragraph with inline formatting like links and emphasis.',
                code: '<p>Learn more about <strong>semantic HTML</strong> by reading the <a href="/docs/html">official documentation</a>. It really <em>does</em> make a difference.</p>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use <p> for actual paragraphs of text, not for spacing or layout purposes',
            'Never nest block-level elements like <div> or <h1> inside a <p> — browsers will auto-close the paragraph',
            'Use CSS margin/padding to control spacing rather than empty paragraphs or multiple <br> tags',
            'Keep paragraphs focused on a single idea for better readability'
        ]
    },

    {
        id: 'ul',
        title: '<ul>',
        library: 'html',
        category: 'lists',
        description: 'The <ul> element represents an unordered list of items, typically displayed with bullet points. The order of items has no semantic meaning — use <ol> instead when sequence matters. Every item inside a <ul> must be wrapped in an <li> (list item) element. Unordered lists are commonly used for navigation menus, feature lists, and any collection of related items.',
        syntax: '<ul>\n  <li>Item one</li>\n  <li>Item two</li>\n</ul>',
        examples: [
            {
                title: 'Basic List',
                description: 'A simple unordered list.',
                code: '<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n</ul>'
            },
            {
                title: 'Navigation Menu',
                description: 'Using a list to build a semantic navigation menu.',
                code: '<nav>\n  <ul style="list-style: none; display: flex; gap: 20px; padding: 0;">\n    <li><a href="#home">Home</a></li>\n    <li><a href="#about">About</a></li>\n    <li><a href="#contact">Contact</a></li>\n  </ul>\n</nav>'
            },
            {
                title: 'Nested List',
                description: 'Lists can be nested inside list items to represent hierarchy.',
                code: '<ul>\n  <li>Frontend\n    <ul>\n      <li>React</li>\n      <li>Vue</li>\n    </ul>\n  </li>\n  <li>Backend\n    <ul>\n      <li>PHP</li>\n      <li>Node.js</li>\n    </ul>\n  </li>\n</ul>'
            }
        ],
        attributes: [
            { name: 'type', type: 'disc | circle | square', description: 'Deprecated — use the CSS list-style-type property instead' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Only place <li> elements as direct children of <ul>',
            'Use <ul> when the order of items does not matter; use <ol> when it does',
            'Style bullet appearance with CSS list-style-type rather than the deprecated type attribute',
            'Wrap navigation lists in a <nav> element for better accessibility'
        ]
    },

    {
        id: 'ol',
        title: '<ol>',
        library: 'html',
        category: 'lists',
        description: 'The <ol> element represents an ordered (numbered) list, where the sequence of items is meaningful. Like <ul>, every item must be wrapped in an <li> element. Browsers automatically number items starting from 1, but this can be customized using the start and reversed attributes, or a different numbering style with the type attribute. Ordered lists are ideal for step-by-step instructions, rankings, and recipes.',
        syntax: '<ol>\n  <li>First step</li>\n  <li>Second step</li>\n</ol>',
        examples: [
            {
                title: 'Basic Numbered List',
                description: 'Step-by-step instructions using an ordered list.',
                code: '<ol>\n  <li>Preheat the oven to 350°F</li>\n  <li>Mix the dry ingredients</li>\n  <li>Add wet ingredients and stir</li>\n  <li>Bake for 25 minutes</li>\n</ol>'
            },
            {
                title: 'Custom Start Number',
                description: 'Starting the list count from a specific number.',
                code: '<ol start="5">\n  <li>Step five</li>\n  <li>Step six</li>\n  <li>Step seven</li>\n</ol>'
            },
            {
                title: 'Reversed and Custom Type',
                description: 'Counting down and using letters instead of numbers.',
                code: '<ol reversed>\n  <li>Third place</li>\n  <li>Second place</li>\n  <li>First place</li>\n</ol>\n\n<ol type="A">\n  <li>Option A</li>\n  <li>Option B</li>\n</ol>'
            }
        ],
        attributes: [
            { name: 'start', type: 'number', description: 'Sets the starting number of the list (default is 1)' },
            { name: 'reversed', type: 'boolean', description: 'Numbers the list in descending order' },
            { name: 'type', type: '1 | A | a | I | i', description: 'Sets the numbering style: numbers, letters, or Roman numerals' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use <ol> whenever the sequence of items carries meaning, such as instructions or rankings',
            'Use the start attribute rather than manually numbering items in the text',
            'Reach for the reversed attribute for countdowns instead of reordering the markup',
            'Keep list item text parallel in structure and grammar for readability'
        ]
    },

    {
        id: 'table',
        title: '<table>',
        library: 'html',
        category: 'tables',
        description: 'The <table> element displays tabular data in rows and columns. A well-structured table uses <thead> for column headers, <tbody> for the main data, <tr> for each row, <th> for header cells, and <td> for regular data cells. Tables should only be used for genuinely tabular data — never for page layout, which is what CSS Grid and Flexbox are for.',
        syntax: '<table>\n  <thead>\n    <tr><th>Header 1</th><th>Header 2</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Data 1</td><td>Data 2</td></tr>\n  </tbody>\n</table>',
        examples: [
            {
                title: 'Basic Table',
                description: 'A simple data table with headers and rows.',
                code: '<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Role</th>\n      <th>Location</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Alice</td>\n      <td>Developer</td>\n      <td>Manchester</td>\n    </tr>\n    <tr>\n      <td>Ben</td>\n      <td>Designer</td>\n      <td>Leeds</td>\n    </tr>\n  </tbody>\n</table>'
            },
            {
                title: 'Table with Caption and Footer',
                description: 'Adding a caption and a summary row using tfoot.',
                code: '<table>\n  <caption>Quarterly Sales</caption>\n  <thead>\n    <tr><th>Quarter</th><th>Revenue</th></tr>\n  </thead>\n  <tbody>\n    <tr><td>Q1</td><td>$12,000</td></tr>\n    <tr><td>Q2</td><td>$15,500</td></tr>\n  </tbody>\n  <tfoot>\n    <tr><td>Total</td><td>$27,500</td></tr>\n  </tfoot>\n</table>'
            },
            {
                title: 'Styled Table',
                description: 'A table with basic CSS styling for readability.',
                code: '<table style="border-collapse: collapse; width: 100%;">\n  <tr style="background: #f3f4f6;">\n    <th style="border: 1px solid #d1d5db; padding: 8px; text-align: left;">Item</th>\n    <th style="border: 1px solid #d1d5db; padding: 8px; text-align: left;">Price</th>\n  </tr>\n  <tr>\n    <td style="border: 1px solid #d1d5db; padding: 8px;">Coffee</td>\n    <td style="border: 1px solid #d1d5db; padding: 8px;">$4.50</td>\n  </tr>\n</table>'
            }
        ],
        attributes: [
            { name: 'colspan', type: 'number', description: 'Used on <td>/<th> to span multiple columns' },
            { name: 'rowspan', type: 'number', description: 'Used on <td>/<th> to span multiple rows' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Only use tables for genuinely tabular data, never for visual page layout',
            'Always use <th> for header cells so screen readers can announce column/row context',
            'Use <thead>, <tbody>, and <tfoot> to give the table clear structure',
            'Add a <caption> to describe what the table contains',
            'Use the scope attribute on <th> elements in complex tables to clarify row vs. column headers'
        ]
    },

    {
        id: 'button',
        title: '<button>',
        library: 'html',
        category: 'forms',
        description: 'The <button> element creates a clickable button that can trigger actions like submitting a form, resetting a form, or running custom JavaScript. Unlike <input type="button">, <button> can contain other HTML content such as icons or styled text, not just plain text. Its type attribute determines its default behavior within a form.',
        syntax: '<button type="button">Click Me</button>',
        examples: [
            {
                title: 'Basic Button',
                description: 'A standalone button with a click handler.',
                code: '<button type="button" onclick="alert(\'Hello!\')">Click Me</button>'
            },
            {
                title: 'Form Submit Button',
                description: 'A button that submits its enclosing form.',
                code: '<form>\n  <input type="text" placeholder="Your name" required>\n  <button type="submit">Submit</button>\n</form>'
            },
            {
                title: 'Button with Icon Content',
                description: 'Buttons can contain more than just text.',
                code: '<button type="button" style="display: flex; align-items: center; gap: 8px; padding: 10px 16px; border-radius: 8px; background: #3b82f6; color: white; border: none;">\n  <span>⬇</span>\n  <span>Download</span>\n</button>'
            }
        ],
        attributes: [
            { name: 'type', type: 'submit | reset | button', description: 'Determines default behavior; submit sends the form, reset clears it, button does nothing by default' },
            { name: 'disabled', type: 'boolean', description: 'Disables the button, preventing interaction' },
            { name: 'form', type: 'string', description: 'Associates the button with a form by its id, even if not nested inside it' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always specify a type attribute — inside a <form>, a button defaults to type="submit", which can cause accidental form submissions',
            'Use <button> instead of a styled <div> or <span> for clickable actions, so it is keyboard-accessible and works with assistive technology out of the box',
            'Disable buttons during async actions (e.g., form submission) to prevent duplicate clicks',
            'Give icon-only buttons an aria-label describing their action for screen reader users'
        ]
    },

    {
        id: 'input',
        title: '<input>',
        library: 'html',
        category: 'forms',
        description: 'The <input> element creates interactive form controls for collecting user data. Its behavior changes dramatically based on the type attribute — a single element can become a text field, checkbox, radio button, date picker, file uploader, and more. It is a void (self-closing) element with no closing tag or child content.',
        syntax: '<input type="text" name="fieldname" placeholder="Enter value">',
        examples: [
            {
                title: 'Common Input Types',
                description: 'A few of the most frequently used input types.',
                code: '<input type="text" placeholder="Name">\n<input type="email" placeholder="Email">\n<input type="password" placeholder="Password">\n<input type="number" placeholder="Age">\n<input type="date">'
            },
            {
                title: 'Checkbox and Radio Buttons',
                description: 'Using inputs for multiple-choice selections.',
                code: '<label><input type="checkbox" name="subscribe" checked> Subscribe to newsletter</label>\n\n<label><input type="radio" name="plan" value="free"> Free</label>\n<label><input type="radio" name="plan" value="pro"> Pro</label>'
            },
            {
                title: 'Input Validation Attributes',
                description: 'Using built-in HTML validation without JavaScript.',
                code: '<input type="email" required placeholder="you@example.com">\n<input type="text" minlength="3" maxlength="20" pattern="[A-Za-z]+" placeholder="Letters only">\n<input type="number" min="1" max="100" step="1">'
            }
        ],
        attributes: [
            { name: 'type', type: 'string', description: 'Determines the input\'s behavior: text, email, password, number, checkbox, radio, date, file, etc.' },
            { name: 'name', type: 'string', description: 'Identifies the field when the form data is submitted' },
            { name: 'value', type: 'string', description: 'The input\'s current or default value' },
            { name: 'placeholder', type: 'string', description: 'Hint text shown when the field is empty' },
            { name: 'required', type: 'boolean', description: 'Marks the field as mandatory for form submission' },
            { name: 'disabled', type: 'boolean', description: 'Disables the input and excludes it from form submission' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always pair an <input> with a <label> using matching for and id attributes',
            'Use the most specific type available (email, tel, date, number) to get built-in validation and the right mobile keyboard',
            'Use the name attribute consistently — it is what actually gets sent to the server, not the id',
            'Rely on built-in validation attributes (required, pattern, min, max) before reaching for JavaScript',
            'Never use placeholder text as a replacement for a proper label — it disappears once the user starts typing'
        ]
    },

    {
        id: 'label',
        title: '<label>',
        library: 'html',
        category: 'forms',
        description: 'The <label> element defines a caption for a form control, improving both usability and accessibility. Clicking a label activates or focuses its associated input — useful for small targets like checkboxes and radio buttons. Labels can be associated with an input either by wrapping it, or by using a for attribute that matches the input\'s id.',
        syntax: '<label for="email">Email:</label>\n<input type="email" id="email">',
        examples: [
            {
                title: 'Label with for Attribute',
                description: 'Explicitly associating a label with an input using matching for/id.',
                code: '<label for="username">Username:</label>\n<input type="text" id="username" name="username">'
            },
            {
                title: 'Wrapped Label',
                description: 'Associating a label implicitly by wrapping the input inside it.',
                code: '<label>\n  Accept terms and conditions\n  <input type="checkbox" name="terms">\n</label>'
            },
            {
                title: 'Styled Label with Input',
                description: 'A label and input styled together as a form field.',
                code: '<div style="display: flex; flex-direction: column; gap: 4px;">\n  <label for="pw" style="font-weight: 600; font-size: 14px;">Password</label>\n  <input type="password" id="pw" style="padding: 8px; border: 1px solid #d1d5db; border-radius: 6px;">\n</div>'
            }
        ],
        attributes: [
            { name: 'for', type: 'string', description: 'The id of the form control this label describes' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Every form input should have an associated label — never rely on placeholder text alone',
            'Prefer the explicit for/id association over wrapping, as it is more robust with custom-styled inputs',
            'Keep label text short and descriptive of exactly what the field expects',
            'Make sure the for value exactly matches the input\'s id, including capitalization'
        ]
    },

    {
        id: 'textarea',
        title: '<textarea>',
        library: 'html',
        category: 'forms',
        description: 'The <textarea> element creates a multi-line plain-text input control, ideal for comments, messages, and any content longer than a single line. Unlike <input>, its default value is placed between the opening and closing tags rather than in a value attribute, and users can typically resize it by dragging its corner.',
        syntax: '<textarea name="message" rows="4" cols="50">Default text</textarea>',
        examples: [
            {
                title: 'Basic Textarea',
                description: 'A simple multi-line text field.',
                code: '<label for="msg">Message:</label>\n<textarea id="msg" name="message" rows="5" placeholder="Type your message here..."></textarea>'
            },
            {
                title: 'Textarea with Character Limit',
                description: 'Restricting input length with maxlength.',
                code: '<textarea name="bio" maxlength="200" rows="4" placeholder="Tell us about yourself (200 characters max)"></textarea>'
            },
            {
                title: 'Non-resizable Styled Textarea',
                description: 'Preventing resizing and applying custom styles.',
                code: '<textarea rows="6" style="width: 100%; resize: none; padding: 10px; border-radius: 8px; border: 1px solid #d1d5db; font-family: inherit;" placeholder="Write a review..."></textarea>'
            }
        ],
        attributes: [
            { name: 'rows', type: 'number', description: 'The visible number of text lines' },
            { name: 'cols', type: 'number', description: 'The visible width in average character widths' },
            { name: 'maxlength', type: 'number', description: 'The maximum number of characters allowed' },
            { name: 'placeholder', type: 'string', description: 'Hint text shown when empty' },
            { name: 'required', type: 'boolean', description: 'Marks the field as mandatory' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Set sensible default rows so the field looks appropriately sized before the user starts typing',
            'Use the CSS resize property to control whether users can resize the textarea, rather than removing the ability entirely',
            'Pair with a <label>, same as any other form field',
            'Consider maxlength with a visible character counter for fields like bios or reviews'
        ]
    },

    {
        id: 'select',
        title: '<select>',
        library: 'html',
        category: 'forms',
        description: 'The <select> element creates a dropdown list of options, letting users pick one or more predefined values. Each choice is defined with an <option> element inside it. Related options can be grouped visually using <optgroup>. It is a compact way to offer a constrained set of choices without the space a list of radio buttons would need.',
        syntax: '<select name="choice">\n  <option value="1">Option One</option>\n  <option value="2">Option Two</option>\n</select>',
        examples: [
            {
                title: 'Basic Dropdown',
                description: 'A simple select with a few options.',
                code: '<label for="country">Country:</label>\n<select id="country" name="country">\n  <option value="uk">United Kingdom</option>\n  <option value="us">United States</option>\n  <option value="ca">Canada</option>\n</select>'
            },
            {
                title: 'Select with Default and Disabled Option',
                description: 'Showing a placeholder option that cannot be selected as a real value.',
                code: '<select name="role" required>\n  <option value="" disabled selected>Choose a role...</option>\n  <option value="student">Student</option>\n  <option value="developer">Developer</option>\n</select>'
            },
            {
                title: 'Grouped Options',
                description: 'Organizing options into labeled groups with optgroup.',
                code: '<select name="language">\n  <optgroup label="Frontend">\n    <option value="js">JavaScript</option>\n    <option value="ts">TypeScript</option>\n  </optgroup>\n  <optgroup label="Backend">\n    <option value="php">PHP</option>\n    <option value="python">Python</option>\n  </optgroup>\n</select>'
            }
        ],
        attributes: [
            { name: 'name', type: 'string', description: 'Identifies the field in submitted form data' },
            { name: 'multiple', type: 'boolean', description: 'Allows selecting more than one option' },
            { name: 'required', type: 'boolean', description: 'Requires a non-empty selection before submission' },
            { name: 'disabled', type: 'boolean', description: 'Disables the entire dropdown' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use a disabled, selected placeholder option instead of leaving the first real option selected by default',
            'Pair with a <label> for accessibility, same as any other form control',
            'Use optgroup to organize long lists of options into logical categories',
            'For a handful of mutually exclusive options, consider whether radio buttons might actually be clearer than a dropdown'
        ]
    },

    {
        id: 'header',
        title: '<header>',
        library: 'html',
        category: 'semantic',
        description: 'The <header> element represents introductory content for its nearest ancestor sectioning element, typically containing a logo, site title, navigation, or search form. A page can have multiple <header> elements — one for the page itself, and others for individual <article> or <section> elements. It has no default visual styling of its own.',
        syntax: '<header>\n  <h1>Site Title</h1>\n  <nav><!-- navigation links --></nav>\n</header>',
        examples: [
            {
                title: 'Page Header',
                description: 'A typical site-wide header with logo and navigation.',
                code: '<header>\n  <h1>DevNexus</h1>\n  <nav>\n    <a href="/docs">Docs</a>\n    <a href="/playground">Playground</a>\n  </nav>\n</header>'
            },
            {
                title: 'Article Header',
                description: 'A header scoped to a single article, containing its title and metadata.',
                code: '<article>\n  <header>\n    <h2>Understanding CSS Grid</h2>\n    <p>Published on March 3, 2026 by Jane Doe</p>\n  </header>\n  <p>CSS Grid is a two-dimensional layout system...</p>\n</article>'
            },
            {
                title: 'Styled Header',
                description: 'A page header with basic styling.',
                code: '<header style="display: flex; justify-content: space-between; align-items: center; padding: 16px 24px; background: #1f2937; color: white;">\n  <strong>DevNexus</strong>\n  <nav style="display: flex; gap: 16px;">\n    <a href="#" style="color: white;">Home</a>\n    <a href="#" style="color: white;">About</a>\n  </nav>\n</header>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use <header> for introductory content, not as a generic styling wrapper — that is what <div> is for',
            'A page can have more than one <header>, scoped to different sections or articles',
            '<header> should not be nested inside <footer>, <address>, or another <header>',
            'Combine with <nav> for the primary site navigation rather than placing links loose inside <header>'
        ]
    },

    {
        id: 'nav',
        title: '<nav>',
        library: 'html',
        category: 'semantic',
        description: 'The <nav> element marks a section of major navigation links, such as a main menu, table of contents, or pagination controls. Not every group of links needs to be a <nav> — reserve it for primary navigation blocks. Screen readers can identify <nav> regions, letting users jump straight to navigation or skip past it.',
        syntax: '<nav>\n  <a href="/">Home</a>\n  <a href="/about">About</a>\n</nav>',
        examples: [
            {
                title: 'Primary Navigation',
                description: 'A site\'s main navigation menu.',
                code: '<nav>\n  <ul>\n    <li><a href="/">Home</a></li>\n    <li><a href="/docs">Docs</a></li>\n    <li><a href="/contact">Contact</a></li>\n  </ul>\n</nav>'
            },
            {
                title: 'Breadcrumb Navigation',
                description: 'Using nav for breadcrumb trails, with an aria-label to distinguish it from the main menu.',
                code: '<nav aria-label="Breadcrumb">\n  <ol style="display: flex; gap: 8px; list-style: none; padding: 0;">\n    <li><a href="/">Home</a></li>\n    <li>/</li>\n    <li><a href="/docs">Docs</a></li>\n    <li>/</li>\n    <li>HTML</li>\n  </ol>\n</nav>'
            },
            {
                title: 'Styled Horizontal Nav',
                description: 'A horizontally laid out navigation bar.',
                code: '<nav style="display: flex; gap: 24px; padding: 12px 0; border-bottom: 1px solid #e5e7eb;">\n  <a href="#" style="text-decoration: none; color: #374151; font-weight: 500;">Home</a>\n  <a href="#" style="text-decoration: none; color: #374151; font-weight: 500;">Docs</a>\n  <a href="#" style="text-decoration: none; color: #374151; font-weight: 500;">Blog</a>\n</nav>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Reserve <nav> for major navigation blocks, not every list of links on a page',
            'Use aria-label to distinguish multiple <nav> elements on the same page, like "Main" vs. "Breadcrumb"',
            'Wrap navigation links in a list (<ul>/<li>) for proper semantic structure',
            'Avoid nesting a <nav> inside another <nav>'
        ]
    },

    {
        id: 'footer',
        title: '<footer>',
        library: 'html',
        category: 'semantic',
        description: 'The <footer> element represents closing content for its nearest ancestor sectioning element, typically containing copyright notices, contact information, related links, or author details. Like <header>, a page can have multiple footers — one for the whole page and others scoped to individual articles or sections.',
        syntax: '<footer>\n  <p>&copy; 2026 Company Name</p>\n</footer>',
        examples: [
            {
                title: 'Page Footer',
                description: 'A typical site-wide footer with copyright and links.',
                code: '<footer>\n  <p>&copy; 2026 DevNexus. All rights reserved.</p>\n  <nav>\n    <a href="/terms">Terms</a>\n    <a href="/privacy">Privacy</a>\n  </nav>\n</footer>'
            },
            {
                title: 'Article Footer',
                description: 'A footer scoped to a single article, containing author info.',
                code: '<article>\n  <h2>10 CSS Tricks You Should Know</h2>\n  <p>Article content goes here...</p>\n  <footer>\n    <p>Written by Alex Chen. Posted in <a href="/category/css">CSS</a>.</p>\n  </footer>\n</article>'
            },
            {
                title: 'Styled Footer',
                description: 'A page footer with basic layout styling.',
                code: '<footer style="display: flex; justify-content: space-between; padding: 24px; background: #111827; color: #9ca3af; font-size: 14px;">\n  <span>&copy; 2026 DevNexus</span>\n  <span>Made with care in Manchester</span>\n</footer>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use <footer> for closing/supplementary content, not as a generic bottom-of-page wrapper for unrelated content',
            'A <footer> can appear inside an <article> or <section>, not just at the very bottom of the page',
            '<footer> should not be nested inside <header> or another <footer>',
            'Include meaningful contact or copyright information rather than leaving it purely decorative'
        ]
    },

    {
        id: 'section',
        title: '<section>',
        library: 'html',
        category: 'semantic',
        description: 'The <section> element groups related content that typically has its own heading, representing a distinct thematic section of a document — like a chapter, tab panel, or a chunk of a landing page. Unlike <div>, which carries no semantic meaning, <section> tells browsers and assistive technology that its content forms a standalone, related group. If content does not have a natural heading or is not thematically distinct, a plain <div> is usually the better choice.',
        syntax: '<section>\n  <h2>Section Title</h2>\n  <p>Section content...</p>\n</section>',
        examples: [
            {
                title: 'Landing Page Sections',
                description: 'Breaking a page into distinct thematic sections.',
                code: '<section>\n  <h2>Features</h2>\n  <p>Everything you need to learn to code.</p>\n</section>\n\n<section>\n  <h2>Pricing</h2>\n  <p>Free forever for individual learners.</p>\n</section>'
            },
            {
                title: 'Section Within an Article',
                description: 'Using sections to divide a long article into parts.',
                code: '<article>\n  <h1>The Complete Guide to Flexbox</h1>\n  <section>\n    <h2>What is Flexbox?</h2>\n    <p>Flexbox is a one-dimensional layout model...</p>\n  </section>\n  <section>\n    <h2>Main Properties</h2>\n    <p>justify-content, align-items, and flex-direction...</p>\n  </section>\n</article>'
            },
            {
                title: 'Styled Section',
                description: 'A visually separated content section.',
                code: '<section style="padding: 40px 20px; background: #f9fafb; border-radius: 12px;">\n  <h2 style="margin-bottom: 12px;">Why Choose Us</h2>\n  <p>We focus on practical, hands-on learning.</p>\n</section>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Only use <section> when the content is thematically related and would make sense with its own heading',
            'If you just need a styling hook with no semantic meaning, use <div> instead',
            'Give each <section> a heading (<h2>-<h6>) so it makes sense in a document outline',
            'Do not use <section> as a wrapper purely for CSS layout purposes — that dilutes its semantic value'
        ]
    },

    {
        id: 'html-text-formatting',
        title: 'Text Formatting: <strong>, <em>, <b>, <i>, <mark>, <small>',
        library: 'html',
        category: 'text',
        description: 'HTML provides several inline elements for formatting text with semantic and visual meaning. <strong> indicates strong importance (typically rendered bold), and <em> indicates stress emphasis (typically rendered italic) — both carry semantic weight that screen readers can announce. <b> and <i> are their purely visual counterparts, used when bold/italic styling is needed without implying importance or emphasis. <mark> highlights text as relevant to the current context, and <small> represents side comments like fine print or disclaimers.',
        syntax: '<strong>Important text</strong>\n<em>Emphasized text</em>\n<mark>Highlighted text</mark>',
        examples: [
            {
                title: 'Semantic Emphasis',
                description: 'Using strong and em for meaningful emphasis within a sentence.',
                code: '<p>This step is <strong>absolutely required</strong> before continuing, and you should <em>really</em> double-check it.</p>'
            },
            {
                title: 'Visual-Only Styling',
                description: 'Using b and i when bold/italic styling is needed without implying importance.',
                code: '<p>The ship <i>Titanic</i> set sail in 1912. Its name was later used for <b>Titanic</b>, the 1997 film.</p>'
            },
            {
                title: 'Highlighting Search Results',
                description: 'Using mark to highlight matched text, and small for a disclaimer.',
                code: '<p>Results for "closures": JavaScript <mark>closures</mark> let inner functions access outer scope.</p>\n<p><small>Prices shown do not include tax.</small></p>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use <strong>/<em> when the emphasis is semantically meaningful; use <b>/<i> for purely visual styling with no added meaning',
            'Do not use these elements just to make text bold or italic for decoration — prefer CSS font-weight/font-style for pure styling',
            'Use <mark> sparingly, for content that is genuinely relevant to what the user is currently looking for',
            '<small> is for fine print and side comments, not for making arbitrary text visually smaller'
        ]
    },

    {
        id: 'html-line-break-rule',
        title: '<br>, <hr>',
        library: 'html',
        category: 'text',
        description: 'These are two simple void (self-closing) elements for controlling text flow. <br> inserts a single line break within text, forcing the next content onto a new line without starting a new paragraph. <hr> represents a thematic break between paragraph-level content — visually rendered as a horizontal line, but semantically indicating a shift in topic, such as a scene change in a story or a new section.',
        syntax: 'Line one<br>Line two\n<hr>',
        examples: [
            {
                title: 'Line Breaks in an Address',
                description: 'Using br to break lines within a single logical block.',
                code: '<p>123 Main Street<br>Manchester<br>M1 1AA</p>'
            },
            {
                title: 'Thematic Break',
                description: 'Using hr to separate distinct sections of content.',
                code: '<p>The first chapter ends here.</p>\n<hr>\n<p>Chapter two begins with a new setting.</p>'
            },
            {
                title: 'Styled Horizontal Rule',
                description: 'Customizing the appearance of an hr with CSS.',
                code: '<hr style="border: none; height: 2px; background: linear-gradient(to right, #3b82f6, transparent); margin: 24px 0;">'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use <br> sparingly — reach for it only when a line break is part of the content itself (like an address or poem), not for adding visual spacing between elements',
            'Never use multiple <br> tags in a row to fake paragraph spacing — use CSS margin instead',
            'Use <hr> to signal an actual topic or scene change, not purely as a decorative divider line',
            'Style <hr> appearance with CSS border/background rather than relying on its default look'
        ]
    },

    {
        id: 'html-quotations',
        title: '<blockquote>, <q>',
        library: 'html',
        category: 'text',
        description: 'HTML provides two elements for quoting content from another source. <blockquote> is used for longer, block-level quotations that are typically set apart from surrounding text with indentation. <q> is used for shorter, inline quotations within a sentence, and browsers automatically render it with quotation marks. Both support a cite attribute pointing to the source URL.',
        syntax: '<blockquote cite="https://source.com">Quoted text</blockquote>\n<p>She said <q>hello</q>.</p>',
        examples: [
            {
                title: 'Block Quotation',
                description: 'A longer quotation set apart from the main text.',
                code: '<blockquote cite="https://example.com/article">\n  <p>The best way to predict the future is to invent it.</p>\n</blockquote>'
            },
            {
                title: 'Inline Quotation',
                description: 'A short quote embedded within a sentence.',
                code: '<p>As the saying goes, <q>a journey of a thousand miles begins with a single step</q>.</p>'
            },
            {
                title: 'Quotation with Attribution',
                description: 'Adding a citation for a blockquote using the footer/cite pattern.',
                code: '<blockquote>\n  <p>Simplicity is the ultimate sophistication.</p>\n  <footer>— <cite>Leonardo da Vinci</cite></footer>\n</blockquote>'
            }
        ],
        attributes: [
            { name: 'cite', type: 'URL', description: 'A URL pointing to the source of the quotation' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use <blockquote> for multi-line or block-level quotes, and <q> for short quotes within a sentence',
            'Do not add manual quotation marks inside <q> — browsers add them automatically via CSS',
            'Use the cite attribute to link back to the original source when available',
            'Pair a <blockquote> with a <footer><cite>...</cite></footer> to properly attribute the author'
        ]
    },

    {
        id: 'html-code-elements',
        title: '<code>, <pre>, <kbd>',
        library: 'html',
        category: 'text',
        description: 'These elements are especially relevant for a developer-focused site like this one. <code> marks up a short inline fragment of computer code, typically rendered in a monospace font. <pre> preserves whitespace and line breaks exactly as written, making it ideal for displaying blocks of code or formatted text. <kbd> represents user keyboard input, commonly used in tutorials to show keyboard shortcuts. <pre> and <code> are frequently combined to display multi-line, syntax-preserved code blocks.',
        syntax: '<code>const x = 5;</code>\n<pre><code>function add(a, b) {\n  return a + b;\n}</code></pre>',
        examples: [
            {
                title: 'Inline Code',
                description: 'Referencing a variable or short code snippet within a sentence.',
                code: '<p>Use the <code>Array.map()</code> method to transform each item in an array.</p>'
            },
            {
                title: 'Code Block',
                description: 'Displaying a multi-line code block with preserved formatting.',
                code: '<pre><code>function greet(name) {\n  console.log(`Hello, ${name}!`);\n}\n\ngreet("DevNexus");</code></pre>'
            },
            {
                title: 'Keyboard Shortcut',
                description: 'Documenting a keyboard shortcut in a tutorial.',
                code: '<p>Press <kbd>Ctrl</kbd> + <kbd>S</kbd> to save your file.</p>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use <code> for inline references to code, variable names, or file names within regular text',
            'Combine <pre> and <code> together for multi-line code blocks so both whitespace and code semantics are preserved',
            'Use <kbd> specifically for keyboard input instructions, not for styling arbitrary text to look like a key',
            'Add a language-specific class (like class="language-javascript") to <code> blocks if using a syntax highlighter'
        ]
    },

    {
        id: 'article',
        title: '<article>',
        library: 'html',
        category: 'semantic',
        description: 'The <article> element represents a self-contained piece of content that could theoretically be distributed or reused independently — like a blog post, news story, forum post, or product card. The key test is whether the content would still make sense if syndicated on its own, separate from the rest of the page. Articles can be nested (e.g., a blog post article containing comment articles).',
        syntax: '<article>\n  <h2>Article Title</h2>\n  <p>Article content...</p>\n</article>',
        examples: [
            {
                title: 'Blog Post',
                description: 'A self-contained blog post as an article.',
                code: '<article>\n  <h2>Getting Started with TypeScript</h2>\n  <p>Published March 3, 2026</p>\n  <p>TypeScript adds static typing to JavaScript...</p>\n</article>'
            },
            {
                title: 'Multiple Articles in a Feed',
                description: 'A list of independent articles, such as in a news feed.',
                code: '<section>\n  <article>\n    <h3>Breaking: New JS Framework Released</h3>\n    <p>Summary of the news...</p>\n  </article>\n  <article>\n    <h3>CSS Grid Level 3 Draft Published</h3>\n    <p>Summary of the news...</p>\n  </article>\n</section>'
            },
            {
                title: 'Nested Articles (Comments)',
                description: 'A blog post article containing individual comment articles.',
                code: '<article>\n  <h2>Why Semantic HTML Matters</h2>\n  <p>Main post content...</p>\n  <section>\n    <h3>Comments</h3>\n    <article>\n      <p>Great explanation, thanks!</p>\n    </article>\n  </section>\n</article>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use <article> only for content that would make sense on its own if extracted from the page',
            'Give each <article> its own heading so it is meaningful out of context',
            'It is fine to nest <article> elements, such as comments within a blog post',
            'If content only makes sense in the context of the surrounding page, use <section> or <div> instead'
        ]
    },

    {
        id: 'main',
        title: '<main>',
        library: 'html',
        category: 'semantic',
        description: 'The <main> element represents the dominant, unique content of the document — the content that is directly related to the page\'s central topic, excluding repeated elements like headers, navigation, sidebars, and footers. There must be no more than one visible <main> element per page, and it should not be nested inside <article>, <header>, <footer>, <nav>, or <aside>.',
        syntax: '<main>\n  <!-- primary page content -->\n</main>',
        examples: [
            {
                title: 'Basic Page Structure',
                description: 'Using main to wrap the primary content of a page.',
                code: '<header>...</header>\n<nav>...</nav>\n<main>\n  <h1>Product Details</h1>\n  <p>This is the main content unique to this page.</p>\n</main>\n<footer>...</footer>'
            },
            {
                title: 'Main with Multiple Sections',
                description: 'A main element containing several content sections.',
                code: '<main>\n  <section>\n    <h2>About Us</h2>\n    <p>...</p>\n  </section>\n  <section>\n    <h2>Our Services</h2>\n    <p>...</p>\n  </section>\n</main>'
            },
            {
                title: 'Skip Link Target',
                description: 'Using main as the target for a "skip to content" accessibility link.',
                code: '<a href="#main-content">Skip to main content</a>\n<nav>...</nav>\n<main id="main-content">\n  <h1>Page Title</h1>\n</main>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use exactly one <main> element per page, and never nest it inside <header>, <footer>, <nav>, <article>, or <aside>',
            'Give <main> an id so it can be used as a target for "skip to content" accessibility links',
            'Only include content in <main> that is unique to the current page — repeated site-wide elements belong outside it',
            'Screen reader users can jump straight to <main>, so make sure it truly contains the page\'s primary content'
        ]
    },

    {
        id: 'aside',
        title: '<aside>',
        library: 'html',
        category: 'semantic',
        description: 'The <aside> element represents content that is tangentially related to the surrounding content, such as a sidebar, pull quote, advertisement, or a group of related links. It can be used both as a page-level sidebar and nested inside an <article> for content that is related to, but separate from, the main article text.',
        syntax: '<aside>\n  <h3>Related Links</h3>\n  <ul>...</ul>\n</aside>',
        examples: [
            {
                title: 'Page Sidebar',
                description: 'Using aside as a sidebar with supplementary content.',
                code: '<main>\n  <article>...</article>\n</main>\n<aside>\n  <h3>Popular Posts</h3>\n  <ul>\n    <li><a href="#">Post One</a></li>\n    <li><a href="#">Post Two</a></li>\n  </ul>\n</aside>'
            },
            {
                title: 'Pull Quote Within an Article',
                description: 'Using aside inside an article for a related but separate callout.',
                code: '<article>\n  <p>Long article text continues here...</p>\n  <aside>\n    <blockquote>Key takeaway: semantic HTML improves accessibility.</blockquote>\n  </aside>\n  <p>The article continues...</p>\n</article>'
            },
            {
                title: 'Author Bio Aside',
                description: 'A tangential author information box.',
                code: '<article>\n  <h2>10 Tips for Clean Code</h2>\n  <p>Article content...</p>\n</article>\n<aside>\n  <h4>About the Author</h4>\n  <p>Jane writes about software craftsmanship.</p>\n</aside>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use <aside> for content that is related but not essential to understanding the main content',
            'Do not use <aside> purely as a styling hook for a sidebar-looking box that is actually essential content',
            'An <aside> nested inside an <article> should relate specifically to that article, not the whole page',
            'Give the aside its own heading when it has one, so it makes sense as an independent block'
        ]
    },

    {
        id: 'html-figure',
        title: '<figure>, <figcaption>',
        library: 'html',
        category: 'media',
        description: 'The <figure> element wraps self-contained content — typically an image, illustration, diagram, code snippet, or chart — along with an optional caption provided by <figcaption>. Content in a figure is meant to be referenceable independently of the main flow; a reader should be able to move it elsewhere on the page (or even to an appendix) without breaking the document\'s meaning.',
        syntax: '<figure>\n  <img src="chart.png" alt="Sales chart">\n  <figcaption>Figure 1: Quarterly sales</figcaption>\n</figure>',
        examples: [
            {
                title: 'Image with Caption',
                description: 'The most common use of figure: an image with a descriptive caption.',
                code: '<figure>\n  <img src="https://via.placeholder.com/500x300" alt="Mountain landscape at sunset">\n  <figcaption>A sunset over the mountains, taken in 2025.</figcaption>\n</figure>'
            },
            {
                title: 'Code Snippet as a Figure',
                description: 'Using figure to present a labeled code example.',
                code: '<figure>\n  <pre><code>const sum = (a, b) => a + b;</code></pre>\n  <figcaption>Example: an arrow function that adds two numbers</figcaption>\n</figure>'
            },
            {
                title: 'Multiple Images in One Figure',
                description: 'Grouping several related images under a single caption.',
                code: '<figure>\n  <img src="before.png" alt="Before redesign">\n  <img src="after.png" alt="After redesign">\n  <figcaption>Before and after the homepage redesign</figcaption>\n</figure>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use figure when content (and its caption) should make sense even if moved elsewhere on the page',
            'figcaption can appear as either the first or last child of figure — both are valid',
            'Not every image needs a figure — use it when a caption or independent referencing genuinely adds value',
            'The alt attribute on img still matters even inside a figure; figcaption is a caption, not alt text'
        ]
    },

    {
        id: 'video',
        title: '<video>',
        library: 'html',
        category: 'media',
        description: 'The <video> element embeds video content directly in a web page without needing a third-party plugin. It supports built-in playback controls, multiple source formats via nested <source> elements for browser compatibility, and various attributes for controlling autoplay, looping, and muting.',
        syntax: '<video src="movie.mp4" controls width="640"></video>',
        examples: [
            {
                title: 'Basic Video Player',
                description: 'A video with standard browser playback controls.',
                code: '<video controls width="640" height="360">\n  <source src="video.mp4" type="video/mp4">\n  Your browser does not support the video tag.\n</video>'
            },
            {
                title: 'Multiple Source Formats',
                description: 'Providing fallback formats for broader browser support.',
                code: '<video controls width="640">\n  <source src="movie.webm" type="video/webm">\n  <source src="movie.mp4" type="video/mp4">\n  Your browser does not support HTML5 video.\n</video>'
            },
            {
                title: 'Autoplay Muted Background Video',
                description: 'A common pattern for looping background videos.',
                code: '<video autoplay muted loop playsinline style="width: 100%; object-fit: cover;">\n  <source src="background.mp4" type="video/mp4">\n</video>'
            }
        ],
        attributes: [
            { name: 'controls', type: 'boolean', description: 'Shows the browser\'s built-in playback controls' },
            { name: 'autoplay', type: 'boolean', description: 'Starts playback automatically (most browsers require muted for this to work)' },
            { name: 'loop', type: 'boolean', description: 'Restarts the video automatically when it ends' },
            { name: 'muted', type: 'boolean', description: 'Mutes audio by default' },
            { name: 'poster', type: 'URL', description: 'An image shown before playback starts' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always include the controls attribute unless you have a very specific reason to hide them — autoplay-only videos are a poor user experience',
            'Autoplay only works reliably in most browsers when combined with muted',
            'Provide multiple <source> formats (MP4, WebM) for cross-browser compatibility',
            'Include fallback text between the tags for very old browsers that do not support <video>',
            'Use the poster attribute to show a meaningful thumbnail before playback'
        ]
    },

    {
        id: 'audio',
        title: '<audio>',
        library: 'html',
        category: 'media',
        description: 'The <audio> element embeds sound content — music, podcasts, or sound effects — directly in a page. Like <video>, it supports multiple <source> elements for format fallback and built-in playback controls, without needing Flash or other plugins.',
        syntax: '<audio src="song.mp3" controls></audio>',
        examples: [
            {
                title: 'Basic Audio Player',
                description: 'An audio player with standard controls.',
                code: '<audio controls>\n  <source src="podcast.mp3" type="audio/mpeg">\n  Your browser does not support the audio element.\n</audio>'
            },
            {
                title: 'Multiple Format Fallback',
                description: 'Providing both MP3 and OGG formats for compatibility.',
                code: '<audio controls>\n  <source src="track.ogg" type="audio/ogg">\n  <source src="track.mp3" type="audio/mpeg">\n</audio>'
            },
            {
                title: 'Looping Sound Effect',
                description: 'A muted-by-default, loopable audio clip.',
                code: '<audio id="notification" src="ding.mp3" preload="auto"></audio>\n<button onclick="document.getElementById(\'notification\').play()">Play Sound</button>'
            }
        ],
        attributes: [
            { name: 'controls', type: 'boolean', description: 'Shows the browser\'s built-in playback controls' },
            { name: 'autoplay', type: 'boolean', description: 'Starts playback automatically (subject to browser autoplay restrictions)' },
            { name: 'loop', type: 'boolean', description: 'Restarts playback automatically when it ends' },
            { name: 'preload', type: 'none | metadata | auto', description: 'Hints how much of the file to preload before playback' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always show controls unless the audio is purely decorative (like a UI sound effect triggered by JavaScript)',
            'Provide MP3 and OGG sources together for the widest browser compatibility',
            'Be mindful of autoplay — most browsers block auto-playing audio with sound unless the user has interacted with the page',
            'Use preload="none" for pages with many audio elements to avoid unnecessary bandwidth usage'
        ]
    },

    {
        id: 'iframe',
        title: '<iframe>',
        library: 'html',
        category: 'media',
        description: 'The <iframe> element embeds another HTML document within the current page, creating a nested browsing context. It is commonly used for embedding maps, videos from external platforms, payment widgets, or ads. Because it loads content from potentially untrusted sources, the sandbox attribute is important for restricting what an embedded page is allowed to do.',
        syntax: '<iframe src="https://example.com" width="600" height="400"></iframe>',
        examples: [
            {
                title: 'Embedding a Map',
                description: 'A basic embedded iframe, such as a map widget.',
                code: '<iframe src="https://maps.example.com/embed?q=Manchester" width="600" height="450" style="border:0;" loading="lazy"></iframe>'
            },
            {
                title: 'Sandboxed Iframe',
                description: 'Restricting what an embedded page is allowed to do for security.',
                code: '<iframe src="https://untrusted-widget.com" sandbox="allow-scripts" width="400" height="300"></iframe>'
            },
            {
                title: 'Responsive Iframe',
                description: 'Making an iframe scale with its container using CSS.',
                code: '<div style="position: relative; padding-bottom: 56.25%; height: 0;">\n  <iframe src="https://example.com/video" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" frameborder="0"></iframe>\n</div>'
            }
        ],
        attributes: [
            { name: 'src', type: 'URL', description: 'The URL of the page to embed' },
            { name: 'sandbox', type: 'string', description: 'Restricts capabilities of the embedded content, such as scripts or form submission' },
            { name: 'loading', type: 'lazy | eager', description: 'Controls when the iframe content loads relative to the viewport' },
            { name: 'allow', type: 'string', description: 'Specifies permissions policy features the iframe can use, like camera or fullscreen' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always use the sandbox attribute when embedding content from a source you do not fully control',
            'Use loading="lazy" for iframes below the fold to improve initial page load performance',
            'Give the iframe a descriptive title attribute for screen reader users',
            'Avoid iframes for content that could just as easily be a normal part of the page — they add overhead and complicate styling'
        ]
    },

    {
        id: 'meta',
        title: '<meta>',
        library: 'html',
        category: 'meta',
        description: 'The <meta> element provides metadata about the HTML document that is not displayed on the page itself — used for things like character encoding, viewport configuration, page descriptions for search engines, and social media preview data. Meta tags live inside the <head> and are void (self-closing) elements.',
        syntax: '<meta name="description" content="Page description">',
        examples: [
            {
                title: 'Essential Meta Tags',
                description: 'The meta tags almost every page should include.',
                code: '<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta name="description" content="Learn web development with DevNexus.">'
            },
            {
                title: 'Social Media Preview (Open Graph)',
                description: 'Meta tags that control how a link looks when shared on social media.',
                code: '<meta property="og:title" content="DevNexus - Learn to Code">\n<meta property="og:description" content="An interactive platform for learning web development.">\n<meta property="og:image" content="https://devnexus.com/preview.png">'
            },
            {
                title: 'SEO and Robots',
                description: 'Controlling how search engines index the page.',
                code: '<meta name="robots" content="index, follow">\n<meta name="keywords" content="html, css, javascript, learn to code">'
            }
        ],
        attributes: [
            { name: 'charset', type: 'string', description: 'Declares the document\'s character encoding, typically UTF-8' },
            { name: 'name', type: 'string', description: 'Identifies the type of metadata, e.g. viewport, description, author' },
            { name: 'content', type: 'string', description: 'The value associated with the name or property attribute' },
            { name: 'property', type: 'string', description: 'Used for Open Graph metadata (og:title, og:image, etc.)' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always include charset and viewport meta tags as early as possible in <head>',
            'Write a unique, concise description for each page (roughly 150-160 characters) to improve search engine snippets',
            'Add Open Graph meta tags so links look good when shared on social platforms',
            'Do not overload the description with keywords — write for humans first'
        ]
    },

    {
        id: 'link',
        title: '<link>',
        library: 'html',
        category: 'meta',
        description: 'The <link> element establishes a relationship between the current document and an external resource, most commonly a stylesheet. It lives in the <head> and is a void element. Beyond stylesheets, <link> is also used for favicons, preloading resources, and specifying alternate versions of a page.',
        syntax: '<link rel="stylesheet" href="styles.css">',
        examples: [
            {
                title: 'Linking a Stylesheet',
                description: 'The most common use — connecting an external CSS file.',
                code: '<link rel="stylesheet" href="/css/main.css">'
            },
            {
                title: 'Favicon',
                description: 'Setting the small icon shown in browser tabs.',
                code: '<link rel="icon" type="image/png" href="/favicon.png">'
            },
            {
                title: 'Preloading a Font',
                description: 'Hinting the browser to fetch a critical resource earlier.',
                code: '<link rel="preload" href="/fonts/main.woff2" as="font" type="font/woff2" crossorigin>'
            }
        ],
        attributes: [
            { name: 'rel', type: 'stylesheet | icon | preload | canonical', description: 'The relationship between the current document and the linked resource' },
            { name: 'href', type: 'URL', description: 'The path to the linked resource' },
            { name: 'type', type: 'string', description: 'The MIME type of the linked resource' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Place stylesheet <link> tags in <head> so styles are ready before content renders, avoiding a flash of unstyled content',
            'Use rel="preload" sparingly, only for genuinely critical above-the-fold resources',
            'Always include a favicon link — browsers will request /favicon.ico by default even without one, so being explicit avoids wasted requests',
            'Use rel="canonical" to tell search engines the preferred URL when the same content is reachable from multiple paths'
        ]
    },

    {
        id: 'script',
        title: '<script>',
        library: 'html',
        category: 'scripting',
        description: 'The <script> element embeds or references executable JavaScript code within an HTML document. It can contain inline code directly between its tags, or load an external file via the src attribute. Where scripts are placed and how they load (defer, async, or neither) significantly affects page load performance and execution order.',
        syntax: '<script src="app.js"></script>',
        examples: [
            {
                title: 'External Script',
                description: 'Loading JavaScript from a separate file.',
                code: '<script src="/js/app.js"></script>'
            },
            {
                title: 'Inline Script',
                description: 'Writing JavaScript directly within the HTML document.',
                code: '<script>\n  console.log("Page loaded");\n  document.addEventListener("DOMContentLoaded", () => {\n    console.log("DOM ready");\n  });\n</script>'
            },
            {
                title: 'Deferred and Module Scripts',
                description: 'Controlling load timing and using ES modules.',
                code: '<script src="/js/analytics.js" defer></script>\n<script type="module" src="/js/main.js"></script>'
            }
        ],
        attributes: [
            { name: 'src', type: 'URL', description: 'Path to an external JavaScript file' },
            { name: 'defer', type: 'boolean', description: 'Delays execution until after the document is parsed, preserving order' },
            { name: 'async', type: 'boolean', description: 'Downloads the script in parallel and executes as soon as it is ready, out of order' },
            { name: 'type', type: 'module | text/javascript', description: 'Specifies the scripting language or module type' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Place scripts before the closing </body> tag, or use defer, so they do not block HTML rendering',
            'Use defer for scripts that need to run in order and depend on the full DOM being parsed',
            'Use async only for independent scripts where execution order does not matter, like analytics',
            'Prefer external scripts with src over large inline scripts for better caching and readability'
        ]
    },

    {
        id: 'html-disclosure',
        title: '<details>, <summary>',
        library: 'html',
        category: 'interactive',
        description: 'The <details> element creates a native, collapsible disclosure widget — content that can be toggled open or closed by the user without any JavaScript. The <summary> element inside it defines the always-visible heading that acts as the toggle control. This is the standard way to build FAQ accordions or collapsible sections without hand-rolling the interaction logic.',
        syntax: '<details>\n  <summary>Click to expand</summary>\n  <p>Hidden content</p>\n</details>',
        examples: [
            {
                title: 'Basic Collapsible Section',
                description: 'A simple expandable/collapsible content block.',
                code: '<details>\n  <summary>What is HTML?</summary>\n  <p>HTML is the standard markup language for creating web pages.</p>\n</details>'
            },
            {
                title: 'FAQ Accordion',
                description: 'Multiple details elements used to build an FAQ section.',
                code: '<details>\n  <summary>Is DevNexus free?</summary>\n  <p>Yes, all core learning content is free.</p>\n</details>\n<details>\n  <summary>Do I need an account?</summary>\n  <p>An account is needed to save progress and take quizzes.</p>\n</details>'
            },
            {
                title: 'Open by Default',
                description: 'Using the open attribute so the content starts expanded.',
                code: '<details open>\n  <summary>Important Notice</summary>\n  <p>This section is expanded by default when the page loads.</p>\n</details>'
            }
        ],
        attributes: [
            { name: 'open', type: 'boolean', description: 'Shows the details content expanded by default' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use <details>/<summary> for simple show/hide UI instead of building the same thing manually with JavaScript and ARIA attributes',
            'Always include a <summary> — without one, browsers show a generic default label',
            'Style the disclosure triangle with the ::marker pseudo-element rather than hiding it and building a custom one, when possible',
            'Great fit for FAQs, changelogs, and "read more" sections'
        ]
    },

    {
        id: 'dialog',
        title: '<dialog>',
        library: 'html',
        category: 'interactive',
        description: 'The <dialog> element represents a native modal or non-modal dialog box, such as a confirmation prompt, settings panel, or alert. It comes with built-in modal behavior (via the showModal() JavaScript method) including a backdrop and focus trapping, removing the need to hand-build accessible modal logic from scratch.',
        syntax: '<dialog id="myDialog">\n  <p>Dialog content</p>\n  <button onclick="this.closest(\'dialog\').close()">Close</button>\n</dialog>',
        examples: [
            {
                title: 'Basic Modal Dialog',
                description: 'A dialog opened and closed via JavaScript.',
                code: '<dialog id="confirmDialog">\n  <p>Are you sure you want to delete this item?</p>\n  <button onclick="document.getElementById(\'confirmDialog\').close()">Cancel</button>\n  <button onclick="document.getElementById(\'confirmDialog\').close()">Delete</button>\n</dialog>\n<button onclick="document.getElementById(\'confirmDialog\').showModal()">Delete Item</button>'
            },
            {
                title: 'Non-modal Dialog',
                description: 'Using show() instead of showModal() for a non-blocking dialog.',
                code: '<dialog id="tipDialog">\n  <p>Tip: You can use keyboard shortcuts to navigate faster.</p>\n</dialog>\n<script>\n  document.getElementById("tipDialog").show();\n</script>'
            },
            {
                title: 'Styled Dialog',
                description: 'A dialog with custom appearance and backdrop styling.',
                code: '<dialog style="border: none; border-radius: 12px; padding: 24px; max-width: 400px;">\n  <h3>Settings</h3>\n  <p>Dialog content goes here.</p>\n</dialog>\n<style>\n  dialog::backdrop { background: rgba(0,0,0,0.5); }\n</style>'
            }
        ],
        attributes: [
            { name: 'open', type: 'boolean', description: 'Reflects whether the dialog is currently visible' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use showModal() rather than the open attribute directly when you need modal behavior with a backdrop and focus trapping',
            'Always provide a clear way to close the dialog, such as a close button or the Escape key (built in by default)',
            'Style the ::backdrop pseudo-element to dim the rest of the page behind a modal dialog',
            'Prefer the native <dialog> over a hand-built modal — it handles focus management and accessibility concerns you would otherwise have to build yourself'
        ]
    },

    {
        id: 'time',
        title: '<time>',
        library: 'html',
        category: 'text',
        description: 'The <time> element represents a specific date, time, or duration in a machine-readable format via its datetime attribute, while displaying a human-friendly version as its content. This lets browsers, search engines, and assistive technology understand dates unambiguously, even when the visible text is casual (like "yesterday" or "3 days ago").',
        syntax: '<time datetime="2026-03-03">March 3rd</time>',
        examples: [
            {
                title: 'Publication Date',
                description: 'Marking up an article\'s publish date.',
                code: '<p>Published on <time datetime="2026-03-03">March 3, 2026</time></p>'
            },
            {
                title: 'Relative Time with Machine-Readable Value',
                description: 'Showing a friendly relative time while keeping an exact machine-readable value.',
                code: '<p>Posted <time datetime="2026-07-16T09:30:00Z">3 hours ago</time></p>'
            },
            {
                title: 'Duration',
                description: 'Representing a duration rather than a specific point in time.',
                code: '<p>Video length: <time datetime="PT15M30S">15:30</time></p>'
            }
        ],
        attributes: [
            { name: 'datetime', type: 'string', description: 'A machine-readable ISO 8601 date, time, or duration' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always include a datetime attribute in ISO 8601 format, even when the visible text is a casual phrase like "yesterday"',
            'Use <time> for any date shown on the page — it helps search engines understand publish dates and freshness',
            'Duration values use the ISO 8601 duration format, e.g. PT15M30S for 15 minutes 30 seconds',
            'Do not use <time> for vague, non-specific references to time that cannot be expressed as a real date'
        ]
    },

    {
        id: 'address',
        title: '<address>',
        library: 'html',
        category: 'text',
        description: 'The <address> element provides contact information for its nearest <article> or <body> ancestor. This might be a person, organization, or the author of the page, and typically includes things like an email, physical address, or social media link. It is not meant for arbitrary postal addresses that are not related to page authorship — use a plain <p> for those.',
        syntax: '<address>\n  Contact: <a href="mailto:hello@example.com">hello@example.com</a>\n</address>',
        examples: [
            {
                title: 'Page Footer Contact Info',
                description: 'Author contact information in a site footer.',
                code: '<footer>\n  <address>\n    Written by Jane Doe. Contact: <a href="mailto:jane@example.com">jane@example.com</a>\n  </address>\n</footer>'
            },
            {
                title: 'Article Author Info',
                description: 'Contact details specific to a single article.',
                code: '<article>\n  <h2>Understanding Async/Await</h2>\n  <p>Article content...</p>\n  <address>\n    By <a href="/authors/alex">Alex Chen</a>\n  </address>\n</article>'
            },
            {
                title: 'Organization Contact Block',
                description: 'Business contact information.',
                code: '<address>\n  DevNexus HQ<br>\n  123 Tech Street<br>\n  Manchester, UK<br>\n  <a href="tel:+441234567890">+44 1234 567890</a>\n</address>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Only use <address> for contact information related to the page or article author, not arbitrary postal addresses',
            'It is fine to include a physical address, email, phone number, or social links inside <address>',
            'Do not nest headings, sectioning elements, or other addresses inside <address>',
            'Browsers render <address> content in italics by default — override with CSS if that does not fit your design'
        ]
    },

    {
        id: 'abbr',
        title: '<abbr>',
        library: 'html',
        category: 'text',
        description: 'The <abbr> element marks up an abbreviation or acronym, with the title attribute providing the full expansion. Browsers typically show the expansion as a tooltip on hover, and screen readers can announce it, helping readers who are unfamiliar with the shortened term.',
        syntax: '<abbr title="HyperText Markup Language">HTML</abbr>',
        examples: [
            {
                title: 'Basic Abbreviation',
                description: 'Marking up a common acronym with its full meaning.',
                code: '<p><abbr title="HyperText Markup Language">HTML</abbr> is the standard markup language for the web.</p>'
            },
            {
                title: 'Multiple Abbreviations in Context',
                description: 'Using abbr for several technical terms in a paragraph.',
                code: '<p>Modern web development relies on <abbr title="Application Programming Interface">API</abbr>s that communicate using <abbr title="JavaScript Object Notation">JSON</abbr>.</p>'
            },
            {
                title: 'Styled Abbreviation',
                description: 'Giving the abbreviation a visual hint that it has a tooltip.',
                code: '<abbr title="Cascading Style Sheets" style="text-decoration: underline dotted; cursor: help;">CSS</abbr>'
            }
        ],
        attributes: [
            { name: 'title', type: 'string', description: 'The full expansion of the abbreviation, shown as a tooltip' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always include the title attribute with the full expansion — without it, abbr provides little value',
            'Expand the abbreviation in the title on its first meaningful use in a document',
            'Do not overuse abbr for terms that are already universally understood, like "HTML" itself in a web dev context',
            'Consider that hover-only tooltips are not accessible on touch devices, so do not rely on abbr as the only place an important term is explained'
        ]
    },

    {
        id: 'html-form-grouping',
        title: '<fieldset>, <legend>',
        library: 'html',
        category: 'forms',
        description: 'The <fieldset> element groups related form controls together, typically rendered with a visible border. The <legend> element provides a caption for the group, describing what the enclosed fields are collectively for. This is especially useful for grouping radio buttons, related checkboxes, or sections of a longer form like "Billing Address" versus "Shipping Address".',
        syntax: '<fieldset>\n  <legend>Group Title</legend>\n  <!-- form controls -->\n</fieldset>',
        examples: [
            {
                title: 'Grouped Radio Buttons',
                description: 'Using fieldset to group a set of related radio options.',
                code: '<fieldset>\n  <legend>Preferred Contact Method</legend>\n  <label><input type="radio" name="contact" value="email"> Email</label>\n  <label><input type="radio" name="contact" value="phone"> Phone</label>\n</fieldset>'
            },
            {
                title: 'Multi-Section Form',
                description: 'Breaking a longer form into clearly labeled groups.',
                code: '<form>\n  <fieldset>\n    <legend>Personal Details</legend>\n    <input type="text" placeholder="Full Name">\n    <input type="email" placeholder="Email">\n  </fieldset>\n  <fieldset>\n    <legend>Address</legend>\n    <input type="text" placeholder="Street">\n    <input type="text" placeholder="City">\n  </fieldset>\n</form>'
            },
            {
                title: 'Disabling a Whole Group',
                description: 'The disabled attribute on fieldset disables every control inside it at once.',
                code: '<fieldset disabled>\n  <legend>Payment Details (complete Step 1 first)</legend>\n  <input type="text" placeholder="Card Number">\n</fieldset>'
            }
        ],
        attributes: [
            { name: 'disabled', type: 'boolean', description: 'Disables every form control nested inside the fieldset' },
            { name: 'name', type: 'string', description: 'Associates the fieldset with the form for scripting purposes' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always include a <legend> as the first child of a <fieldset> — it is what gives the group its accessible name',
            'Use fieldset to group related radio buttons or checkboxes so screen readers announce the group context',
            'Use the disabled attribute on a fieldset to disable a whole section at once instead of each input individually',
            'Avoid using fieldset purely for visual styling — use a <div> if there is no genuine grouping of controls'
        ]
    },

    {
        id: 'html-progress-meter',
        title: '<progress>, <meter>',
        library: 'html',
        category: 'interactive',
        description: 'These two elements display quantities visually without needing custom-built progress bars. <progress> represents the completion progress of a task, like a file upload or multi-step form. <meter> represents a scalar value within a known range, like disk usage or a rating — it is for measuring a static value, not tracking progress toward completion.',
        syntax: '<progress value="70" max="100"></progress>\n<meter value="6" min="0" max="10"></meter>',
        examples: [
            {
                title: 'File Upload Progress',
                description: 'Showing task completion with progress.',
                code: '<label for="upload">Uploading file...</label>\n<progress id="upload" value="45" max="100"></progress>'
            },
            {
                title: 'Indeterminate Progress',
                description: 'A progress bar with no known completion percentage yet.',
                code: '<p>Processing your request...</p>\n<progress></progress>'
            },
            {
                title: 'Disk Usage Meter',
                description: 'Using meter to represent a static measured value within a range.',
                code: '<label for="disk">Disk usage:</label>\n<meter id="disk" value="7.2" min="0" max="10" low="3" high="8" optimum="0">7.2 out of 10 GB</meter>'
            }
        ],
        attributes: [
            { name: 'value', type: 'number', description: 'The current value' },
            { name: 'max', type: 'number', description: 'The maximum value (progress and meter)' },
            { name: 'min', type: 'number', description: 'The minimum value (meter only, defaults to 0)' },
            { name: 'low', type: 'number', description: 'The upper bound of the low range (meter only)' },
            { name: 'high', type: 'number', description: 'The lower bound of the high range (meter only)' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use <progress> for tasks that are actively completing, like uploads or multi-step processes',
            'Use <meter> for static measurements within a known range, like ratings, disk usage, or scores — not for task completion',
            'Omit the value attribute on <progress> to show an indeterminate loading state',
            'Always pair with a <label> so the purpose of the bar or gauge is clear'
        ]
    },

    // ================= PYTHON (Enhanced) =================
    {
        id: 'py-true',
        title: 'True',
        library: 'py',
        category: 'basics',
        description: 'In Python, True is a built-in constant that represents the boolean value of true. Alongside False, True enables logical and conditional operations. It\'s a fundamental keyword used throughout Python programming for decision-making, loops, comparisons, and boolean logic. True plays a key role in if statements, while loops, and logical expressions.',
        syntax: 'True',
        examples: [
            {
                title: 'Direct Assignment',
                description: 'Assigning True directly to a variable for boolean flags and state management.',
                code: 'is_authenticated = True\nfeature_enabled = True\n\nif is_authenticated:\n    print("User is logged in")\n\nif feature_enabled:\n    print("Feature is active")'
            },
            {
                title: 'Conditional Statements',
                description: 'Using True in if statements to control program flow based on conditions.',
                code: 'age = 25\nis_adult = age >= 18  # Evaluates to True\n\nif is_adult:\n    print("Access granted")\nelse:\n    print("Access denied")\n\n# Multiple conditions\nhas_permission = True\nis_verified = True\n\nif has_permission and is_verified:\n    print("You can proceed")'
            },
            {
                title: 'While Loops',
                description: 'Using True to create continuous loops that run until explicitly broken.',
                code: 'count = 0\n\nwhile True:\n    response = input("Type \'quit\' to exit: ")\n    if response.lower() == \'quit\':\n        break\n    count += 1\n    print(f"You have entered {count} commands")\n\nprint("Loop exited")'
            },
            {
                title: 'Logical Operations',
                description: 'Combining True with boolean operators (and, or, not) for complex logic.',
                code: '# AND operator - both must be True\nresult1 = True and True   # True\nresult2 = True and False  # False\n\n# OR operator - at least one must be True\nresult3 = True or False   # True\nresult4 = False or False  # False\n\n# NOT operator - inverts the value\nresult5 = not True        # False\nresult6 = not False       # True\n\n# Complex expression\nis_weekend = True\nhas_money = True\nis_sunny = False\n\ngo_out = is_weekend and has_money and (is_sunny or not is_sunny)\nprint(f"Should go out: {go_out}")'
            },
            {
                title: 'Comparisons',
                description: 'How comparisons return True when the evaluated condition meets the criteria.',
                code: '# Numeric comparisons\nprint(10 > 5)      # True\nprint(100 >= 100)  # True\nprint(5 == 5)      # True\n\n# String comparisons\nprint("hello" == "hello")  # True\nprint("abc" < "xyz")       # True\n\n# Membership testing\nfruits = ["apple", "banana", "orange"]\nprint("apple" in fruits)  # True\n\n# Type checking\nprint(isinstance(42, int))  # True'
            },
            {
                title: 'Input Validation',
                description: 'Using True in validation scenarios to verify user input or data integrity.',
                code: 'def validate_email(email):\n    # Simple validation checks\n    has_at = \'@\' in email\n    has_dot = \'.\' in email\n    is_long_enough = len(email) > 5\n    \n    is_valid = has_at and has_dot and is_long_enough\n    return is_valid\n\n# Test the validation\nuser_email = "user@example.com"\n\nif validate_email(user_email) == True:\n    print("Email is valid")\n    print("Proceeding with registration")\nelse:\n    print("Invalid email format")'
            }
        ],
        browserSupport: undefined,
        bestPractices: [
            'Use True directly in conditions rather than comparing (if is_active: instead of if is_active == True:)',
            'Choose descriptive boolean variable names that read like questions (is_valid, has_permission, can_access)',
            'Remember that True is case-sensitive - it must be capitalized in Python',
            'Avoid redundant comparisons with True/False - the variable itself is already boolean',
            'Use True in while loops with break conditions for continuous processes',
            'Leverage True in complex boolean expressions with and, or, not operators for readable logic'
        ]
    },

    {
        id: 'py-false',
        title: 'False',
        library: 'py',
        category: 'basics',
        description: 'False is Python\'s built-in constant representing the boolean value false. It\'s the logical opposite of True and is essential for conditional logic, loop control, and boolean operations. False is used to indicate negative conditions, failed validations, or when something is not the case. Understanding False is crucial for writing effective control flow in Python programs.',
        syntax: 'False',
        examples: [
            {
                title: 'State Management',
                description: 'Using False to track states and flags in your program.',
                code: 'is_logged_in = False\nhas_notifications = False\n\nif is_logged_in:\n    print("Welcome back!")\nelse:\n    print("Please log in")  # This will print\n\nif not has_notifications:\n    print("No new notifications")  # This will print'
            },
            {
                title: 'Boolean Comparisons',
                description: 'How various comparisons evaluate to False in different scenarios.',
                code: '# Numeric comparisons\nprint(5 > 10)      # False\nprint(3 == 7)      # False\nprint(100 < 50)    # False\n\n# String comparisons\nprint("hello" == "world")  # False\nprint("abc" > "xyz")       # False\n\n# List membership\nnumbers = [1, 2, 3]\nprint(5 in numbers)  # False\n\n# Empty checks\nprint(bool([]))      # False - empty list\nprint(bool(""))      # False - empty string\nprint(bool(0))       # False - zero'
            },
            {
                title: 'Logical Operations',
                description: 'Combining False with boolean operators to create complex conditions.',
                code: '# AND operator\nresult1 = False and True   # False\nresult2 = False and False  # False\n\n# OR operator\nresult3 = False or True    # True\nresult4 = False or False   # False\n\n# NOT operator\nresult5 = not False        # True\n\n# Real-world example\nis_admin = False\nhas_special_access = False\nis_verified = True\n\ncan_view_panel = is_admin or (has_special_access and is_verified)\nprint(f"Can access admin panel: {can_view_panel}")  # False'
            },
            {
                title: 'Validation and Error Checking',
                description: 'Using False to indicate validation failures or error states.',
                code: 'def check_password_strength(password):\n    # Check various requirements\n    has_length = len(password) >= 8\n    has_number = any(char.isdigit() for char in password)\n    has_upper = any(char.isupper() for char in password)\n    \n    is_strong = has_length and has_number and has_upper\n    return is_strong\n\n# Test with weak password\nuser_password = "hello"\nresult = check_password_strength(user_password)  # Returns False\n\nif result == False:\n    print("Password is too weak")\n    print("Requirements: 8+ characters, number, uppercase")'
            },
            {
                title: 'Loop Control',
                description: 'Using False to control loop execution and exit conditions.',
                code: 'searching = True\nattempts = 0\nmax_attempts = 3\n\nwhile searching:\n    attempts += 1\n    user_input = input(f"Attempt {attempts}: Enter the code: ")\n    \n    if user_input == "1234":\n        print("Correct code!")\n        searching = False  # Exit loop\n    elif attempts >= max_attempts:\n        print("Too many attempts")\n        searching = False  # Exit loop\n    else:\n        print("Wrong code, try again")\n\nprint("Process complete")'
            }
        ],
        browserSupport: undefined,
        bestPractices: [
            'Write conditions positively when possible (if is_valid: instead of if not is_invalid:)',
            'Use "not" operator for better readability (if not is_active: instead of if is_active == False:)',
            'Remember that many values are "falsy" in Python (0, empty strings, empty lists, None)',
            'Initialize boolean flags with False when starting in a negative state',
            'Use False explicitly when you need to distinguish from None or 0',
            'Choose meaningful variable names that clearly indicate what False represents'
        ]
    },

    {
        id: 'py-if',
        title: 'if',
        library: 'py',
        category: 'flow',
        description: 'The if statement is Python\'s primary conditional control structure. It allows your program to make decisions by executing different code blocks based on whether a condition is True or False. The if statement is fundamental to creating dynamic, responsive programs that can adapt their behavior based on various conditions, user input, or data states.',
        syntax: 'if condition:\n    # code to execute if condition is True',
        examples: [
            {
                title: 'Basic Conditionals',
                description: 'Simple if statements that execute code when a condition is met.',
                code: 'age = 18\n\nif age >= 18:\n    print("You are an adult")\n\ntemperature = 30\n\nif temperature > 25:\n    print("It\'s hot outside!")\n    print("Remember to stay hydrated")\n\nscore = 85\n\nif score >= 60:\n    print("You passed!")'
            },
            {
                title: 'If-Else Statements',
                description: 'Using else to handle the alternative case when the condition is False.',
                code: 'password = input("Enter password: ")\n\nif len(password) >= 8:\n    print("Password accepted")\nelse:\n    print("Password too short")\n    print("Must be at least 8 characters")\n\nbalance = 50\npurchase_amount = 75\n\nif balance >= purchase_amount:\n    print("Purchase approved")\n    balance -= purchase_amount\nelse:\n    print("Insufficient funds")\n    print(f"You need ${purchase_amount - balance} more")'
            },
            {
                title: 'If-Elif-Else Chain',
                description: 'Handling multiple conditions with elif (else if) statements.',
                code: 'score = 87\n\nif score >= 90:\n    grade = "A"\nelif score >= 80:\n    grade = "B"  # This will execute\nelif score >= 70:\n    grade = "C"\nelif score >= 60:\n    grade = "D"\nelse:\n    grade = "F"\n\nprint(f"Your grade: {grade}")\n\n# Traffic light example\nlight = "yellow"\n\nif light == "green":\n    print("Go")\nelif light == "yellow":\n    print("Slow down")  # This will execute\nelif light == "red":\n    print("Stop")\nelse:\n    print("Invalid light color")'
            },
            {
                title: 'Nested If Statements',
                description: 'Using if statements inside other if statements for complex logic.',
                code: 'age = 25\nhas_license = True\nhas_insurance = True\n\nif age >= 18:\n    print("Age requirement met")\n    if has_license:\n        print("License verified")\n        if has_insurance:\n            print("All requirements met!")\n            print("You can rent the car")\n        else:\n            print("Insurance required")\n    else:\n        print("License required")\nelse:\n    print("Must be 18 or older")'
            },
            {
                title: 'Compound Conditions',
                description: 'Combining multiple conditions using and, or, not operators.',
                code: '# AND operator - all must be True\nusername = "admin"\npassword = "secure123"\n\nif username == "admin" and password == "secure123":\n    print("Login successful")\n\n# OR operator - at least one must be True\nis_member = False\nhas_coupon = True\n\nif is_member or has_coupon:\n    print("Discount applied!")  # This will execute\n\n# NOT operator - inverts the condition\nis_banned = False\n\nif not is_banned:\n    print("User can post comments")  # This will execute\n\n# Complex combination\nage = 16\nhas_parent_consent = True\n\nif (age >= 18) or (age >= 13 and has_parent_consent):\n    print("Can create account")  # This will execute'
            }
        ],
        browserSupport: undefined,
        bestPractices: [
            'Use proper indentation (4 spaces) for code blocks inside if statements',
            'Keep conditions simple and readable - break complex logic into separate variables',
            'Use elif instead of multiple separate if statements for mutually exclusive conditions',
            'Consider the order of conditions in elif chains - put most likely cases first',
            'Avoid deeply nested if statements - consider using functions or restructuring logic',
            'Use comparison chaining in Python: (if 0 < x < 10:) instead of (if x > 0 and x < 10:)'
        ]
    },

    {
        id: 'py-for',
        title: 'for',
        library: 'py',
        category: 'flow',
        description: 'The for loop in Python is used to iterate over sequences like lists, tuples, strings, or any iterable object. Unlike traditional for loops in other languages that use counters, Python\'s for loop is more like a "for each" loop, automatically handling the iteration details. It\'s one of the most commonly used constructs in Python for processing collections and repeating actions.',
        syntax: 'for variable in iterable:\n    # code to execute for each item',
        examples: [
            {
                title: 'List Iteration',
                description: 'Iterating through lists to process each element.',
                code: 'fruits = ["apple", "banana", "orange", "grape"]\n\nfor fruit in fruits:\n    print(f"I like {fruit}")\n\nnumbers = [1, 2, 3, 4, 5]\ntotal = 0\n\nfor num in numbers:\n    total += num\n\nprint(f"Sum: {total}")  # 15'
            },
            {
                title: 'Range Function',
                description: 'Using range() to iterate a specific number of times or generate number sequences.',
                code: '# Count from 0 to 4\nfor i in range(5):\n    print(i)  # 0, 1, 2, 3, 4\n\n# Count from 1 to 5\nfor i in range(1, 6):\n    print(i)  # 1, 2, 3, 4, 5\n\n# Count by steps\nfor i in range(0, 10, 2):\n    print(i)  # 0, 2, 4, 6, 8\n\n# Countdown\nfor i in range(5, 0, -1):\n    print(f"{i}...")  # 5... 4... 3... 2... 1...\nprint("Liftoff!")'
            },
            {
                title: 'String Iteration',
                description: 'Iterating through characters in a string.',
                code: 'message = "Python"\n\nfor char in message:\n    print(char)  # P, y, t, h, o, n\n\n# Count vowels\ntext = "Hello World"\nvowels = "aeiouAEIOU"\nvowel_count = 0\n\nfor char in text:\n    if char in vowels:\n        vowel_count += 1\n\nprint(f"Vowels found: {vowel_count}")'
            },
            {
                title: 'Enumerate Function',
                description: 'Getting both index and value while iterating using enumerate().',
                code: 'fruits = ["apple", "banana", "orange"]\n\nfor index, fruit in enumerate(fruits):\n    print(f"{index + 1}. {fruit}")\n# Output:\n# 1. apple\n# 2. banana\n# 3. orange\n\n# Start counting from different number\nfor index, fruit in enumerate(fruits, start=10):\n    print(f"Item {index}: {fruit}")'
            },
            {
                title: 'Dictionary Iteration',
                description: 'Iterating through dictionary keys, values, or both.',
                code: 'student_scores = {\n    "Alice": 85,\n    "Bob": 92,\n    "Charlie": 78\n}\n\n# Iterate over keys\nfor name in student_scores:\n    print(f"{name}: {student_scores[name]}")\n\n# Iterate over values\nfor score in student_scores.values():\n    print(f"Score: {score}")\n\n# Iterate over key-value pairs\nfor name, score in student_scores.items():\n    print(f"{name} scored {score}")\n    if score >= 90:\n        print("  Excellent!")'
            },
            {
                title: 'Nested Loops',
                description: 'Using loops within loops for multi-dimensional iteration.',
                code: '# Multiplication table\nfor i in range(1, 4):\n    for j in range(1, 4):\n        product = i * j\n        print(f"{i} × {j} = {product}")\n    print()  # Empty line between tables\n\n# Pattern printing\nfor row in range(1, 5):\n    for col in range(row):\n        print("*", end=" ")\n    print()  # New line after each row'
            },
            {
                title: 'Break and Continue',
                description: 'Controlling loop execution with break and continue statements.',
                code: '# Break - exit loop early\nfor num in range(1, 11):\n    if num == 5:\n        print("Found 5! Stopping...")\n        break\n    print(num)\n\nprint()\n\n# Continue - skip to next iteration\nfor num in range(1, 6):\n    if num == 3:\n        continue  # Skip 3\n    print(num)  # Prints 1, 2, 4, 5\n\nprint()\n\n# Practical example\npasswords = ["abc", "password123", "12345", "secure_pass"]\n\nfor pwd in passwords:\n    if len(pwd) < 8:\n        print(f"{pwd} - Too short, skipping...")\n        continue\n    print(f"{pwd} - Valid password")\n    if pwd == "secure_pass":\n        print("Found secure password!")\n        break'
            }
        ],
        browserSupport: undefined,
        bestPractices: [
            'Use descriptive variable names in for loops (for student in students: instead of for s in students:)',
            'Use enumerate() when you need both index and value',
            'Prefer list comprehensions for simple transformations ([x*2 for x in numbers])',
            'Avoid modifying the list you\'re iterating over - create a new list instead',
            'Use range(len(list)) only when absolutely necessary - prefer direct iteration',
            'Break complex nested loops into separate functions for better readability'
        ]
    },

    {
        id: 'py-def',
        title: 'def',
        library: 'py',
        category: 'functions',
        description: 'The def keyword in Python is used to define functions - reusable blocks of code that perform specific tasks. Functions are fundamental to organizing code, avoiding repetition, and making programs more maintainable. A function can accept inputs (parameters), perform operations, and return outputs. Functions are one of the core building blocks of clean, modular Python code.',
        syntax: 'def function_name(parameters):\n    # function body\n    return value',
        examples: [
            {
                title: 'Basic Functions',
                description: 'Simple function definitions with and without parameters.',
                code: '# Function with no parameters\ndef greet():\n    print("Hello, World!")\n\ngreet()  # Call the function\n\n# Function with parameters\ndef greet_person(name):\n    print(f"Hello, {name}!")\n\ngreet_person("Alice")  # Hello, Alice!\ngreet_person("Bob")    # Hello, Bob!'
            },
            {
                title: 'Return Values',
                description: 'Functions that return values for use in other parts of the program.',
                code: 'def add(a, b):\n    result = a + b\n    return result\n\nsum_result = add(5, 3)\nprint(sum_result)  # 8\n\n# Function with multiple return values\ndef calculate(x, y):\n    addition = x + y\n    subtraction = x - y\n    multiplication = x * y\n    return addition, subtraction, multiplication\n\na, s, m = calculate(10, 5)\nprint(f"Add: {a}, Subtract: {s}, Multiply: {m}")'
            },
            {
                title: 'Default Parameters',
                description: 'Setting default values for parameters that can be overridden.',
                code: 'def create_profile(name, age=18, country="USA"):\n    print(f"Name: {name}")\n    print(f"Age: {age}")\n    print(f"Country: {country}")\n    print()\n\n# Using all defaults\ncreate_profile("Alice")\n\n# Overriding some defaults\ncreate_profile("Bob", 25)\n\n# Overriding all\ncreate_profile("Charlie", 30, "UK")\n\n# Using keyword arguments\ncreate_profile("David", country="Canada")'
            },
            {
                title: 'Variable Arguments',
                description: 'Using *args and **kwargs to accept flexible number of arguments.',
                code: '# *args - variable positional arguments\ndef sum_all(*numbers):\n    total = 0\n    for num in numbers:\n        total += num\n    return total\n\nprint(sum_all(1, 2, 3))        # 6\nprint(sum_all(10, 20, 30, 40)) # 100\n\n# **kwargs - variable keyword arguments\ndef print_info(**kwargs):\n    for key, value in kwargs.items():\n        print(f"{key}: {value}")\n\nprint_info(name="Alice", age=25, city="New York")\n\n# Combining both\ndef display_data(title, *args, **kwargs):\n    print(f"=== {title} ===")\n    print("Positions:", args)\n    print("Keywords:", kwargs)\n\ndisplay_data("User Info", "Item1", "Item2", name="Bob", role="Admin")'
            },
            {
                title: 'Docstrings and Type Hints',
                description: 'Documenting functions and specifying expected types.',
                code: 'def calculate_bmi(weight: float, height: float) -> float:\n    """\n    Calculate Body Mass Index.\n    \n    Args:\n        weight (float): Weight in kilograms\n        height (float): Height in meters\n    \n    Returns:\n        float: BMI value rounded to 2 decimal places\n    """\n    bmi = weight / (height ** 2)\n    return round(bmi, 2)\n\nresult = calculate_bmi(70, 1.75)\nprint(f"BMI: {result}")\n\n# Access docstring\nprint(calculate_bmi.__doc__)'
            },
            {
                title: 'Nested Functions',
                description: 'Defining functions inside other functions for encapsulation.',
                code: 'def outer_function(x):\n    print(f"Outer function received: {x}")\n    \n    def inner_function(y):\n        return y * 2\n    \n    result = inner_function(x)\n    print(f"Inner function returned: {result}")\n    return result\n\nfinal = outer_function(5)\nprint(f"Final result: {final}")\n\n# Practical example - validation\ndef process_user(name, age):\n    def validate_name(n):\n        return len(n) > 0 and n.isalpha()\n    \n    def validate_age(a):\n        return 0 < a < 150\n    \n    if not validate_name(name):\n        return "Invalid name"\n    if not validate_age(age):\n        return "Invalid age"\n    \n    return f"User {name} ({age}) registered successfully"\n\nprint(process_user("Alice", 25))'
            }
        ],
        browserSupport: undefined,
        bestPractices: [
            'Use clear, descriptive function names that indicate what the function does (calculate_total, not calc)',
            'Keep functions focused on a single task (Single Responsibility Principle)',
            'Add docstrings to explain what the function does, its parameters, and return value',
            'Use type hints to make your function signatures clearer and enable better IDE support',
            'Limit function length - if it\'s too long, consider breaking it into smaller functions',
            'Use default parameter values wisely - they should represent the most common use case'
        ]
    },

    {
        id: 'py-class',
        title: 'class',
        library: 'py',
        category: 'oop',
        description: 'The class keyword defines a blueprint for creating objects in Python. Classes are the foundation of Object-Oriented Programming (OOP), allowing you to bundle data (attributes) and functionality (methods) together. A class defines what attributes an object will have and what operations can be performed on it. Think of a class as a template or a factory for creating objects with similar characteristics.',
        syntax: 'class ClassName:\n    def __init__(self, parameters):\n        # initialization\n    \n    def method(self):\n        # method body',
        examples: [
            {
                title: 'Basic Class Definition',
                description: 'Creating a simple class with attributes and methods.',
                code: 'class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def bark(self):\n        print(f"{self.name} says Woof!")\n    \n    def info(self):\n        print(f"{self.name} is {self.age} years old")\n\n# Create instances\ndog1 = Dog("Buddy", 3)\ndog2 = Dog("Max", 5)\n\n# Use methods\ndog1.bark()  # Buddy says Woof!\ndog2.info()  # Max is 5 years old'
            },
            {
                title: 'Class with Properties',
                description: 'Using properties and encapsulation to control attribute access.',
                code: 'class BankAccount:\n    def __init__(self, owner, balance=0):\n        self.owner = owner\n        self.__balance = balance  # Private attribute\n    \n    def deposit(self, amount):\n        if amount > 0:\n            self.__balance += amount\n            print(f"Deposited ${amount}. New balance: ${self.__balance}")\n        else:\n            print("Invalid amount")\n    \n    def withdraw(self, amount):\n        if 0 < amount <= self.__balance:\n            self.__balance -= amount\n            print(f"Withdrew ${amount}. New balance: ${self.__balance}")\n        else:\n            print("Insufficient funds or invalid amount")\n    \n    def get_balance(self):\n        return self.__balance\n\naccount = BankAccount("Alice", 1000)\naccount.deposit(500)\naccount.withdraw(200)\nprint(f"Current balance: ${account.get_balance()}")'
            },
            {
                title: 'Inheritance',
                description: 'Creating child classes that inherit from parent classes.',
                code: 'class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        print(f"{self.name} makes a sound")\n\nclass Cat(Animal):\n    def speak(self):\n        print(f"{self.name} says Meow!")\n\nclass Bird(Animal):\n    def __init__(self, name, can_fly=True):\n        super().__init__(name)\n        self.can_fly = can_fly\n    \n    def speak(self):\n        print(f"{self.name} says Tweet!")\n    \n    def fly(self):\n        if self.can_fly:\n            print(f"{self.name} is flying!")\n        else:\n            print(f"{self.name} cannot fly")\n\ncat = Cat("Whiskers")\nbird = Bird("Tweety")\npenguin = Bird("Pingu", can_fly=False)\n\ncat.speak()\nbird.speak()\nbird.fly()\npenguin.fly()'
            },
            {
                title: 'Class Methods and Static Methods',
                description: 'Understanding different types of methods in classes.',
                code: 'class MathOperations:\n    pi = 3.14159  # Class attribute\n    \n    def __init__(self, value):\n        self.value = value  # Instance attribute\n    \n    # Instance method\n    def square(self):\n        return self.value ** 2\n    \n    # Class method\n    @classmethod\n    def circle_area(cls, radius):\n        return cls.pi * radius ** 2\n    \n    # Static method\n    @staticmethod\n    def add(a, b):\n        return a + b\n\n# Instance method usage\nmath = MathOperations(5)\nprint(f"Square: {math.square()}")\n\n# Class method usage (no instance needed)\narea = MathOperations.circle_area(10)\nprint(f"Circle area: {area}")\n\n# Static method usage\nsum_result = MathOperations.add(3, 7)\nprint(f"Sum: {sum_result}")'
            },
            {
                title: 'Special Methods (Magic Methods)',
                description: 'Implementing special methods to customize class behavior.',
                code: 'class Book:\n    def __init__(self, title, author, pages):\n        self.title = title\n        self.author = author\n        self.pages = pages\n    \n    # String representation\n    def __str__(self):\n        return f"{self.title} by {self.author}"\n    \n    # Detailed representation\n    def __repr__(self):\n        return f"Book(\'{self.title}\', \'{self.author}\', {self.pages})"\n    \n    # Length\n    def __len__(self):\n        return self.pages\n    \n    # Comparison\n    def __lt__(self, other):\n        return self.pages < other.pages\n    \n    # Addition\n    def __add__(self, other):\n        return self.pages + other.pages\n\nbook1 = Book("Python Basics", "John Doe", 300)\nbook2 = Book("Advanced Python", "Jane Smith", 450)\n\nprint(str(book1))  # Python Basics by John Doe\nprint(repr(book1)) # Book(\'Python Basics\', \'John Doe\', 300)\nprint(len(book1))  # 300\nprint(book1 < book2)  # True\nprint(book1 + book2)  # 750'
            },
            {
                title: 'Real-World Example',
                description: 'A practical class implementation for managing a shopping cart.',
                code: 'class Product:\n    def __init__(self, name, price):\n        self.name = name\n        self.price = price\n\nclass ShoppingCart:\n    def __init__(self):\n        self.items = []\n    \n    def add_item(self, product, quantity=1):\n        self.items.append({\n            \'product\': product,\n            \'quantity\': quantity\n        })\n        print(f"Added {quantity}x {product.name}")\n    \n    def remove_item(self, product_name):\n        self.items = [item for item in self.items \n                     if item[\'product\'].name != product_name]\n        print(f"Removed {product_name}")\n    \n    def get_total(self):\n        total = sum(item[\'product\'].price * item[\'quantity\'] \n                   for item in self.items)\n        return total\n    \n    def display_cart(self):\n        if not self.items:\n            print("Cart is empty")\n            return\n        \n        print("\\n=== Shopping Cart ===")\n        for item in self.items:\n            p = item[\'product\']\n            q = item[\'quantity\']\n            subtotal = p.price * q\n            print(f"{p.name} x{q} - ${subtotal:.2f}")\n        print(f"Total: ${self.get_total():.2f}\\n")\n\n# Usage\ncart = ShoppingCart()\n\nlaptop = Product("Laptop", 999.99)\nmouse = Product("Mouse", 29.99)\n\ncart.add_item(laptop, 1)\ncart.add_item(mouse, 2)\ncart.display_cart()\n\ncart.remove_item("Mouse")\ncart.display_cart()'
            }
        ],
        browserSupport: undefined,
        bestPractices: [
            'Use PascalCase for class names (MyClass, not my_class or myclass)',
            'Always define __init__ method to initialize instance attributes',
            'Use self as the first parameter name in instance methods (convention)',
            'Implement __str__ and __repr__ methods for better debugging and printing',
            'Use properties (@property) for computed attributes and validation',
            'Keep classes focused on a single responsibility - don\'t make "god objects"',
            'Document your classes with docstrings explaining their purpose and usage',
            'Use private attributes (prefix with __) when you want to prevent direct access'
        ]
    },

    // ================= CSS =================
    {
        id: 'css-flexbox',
        title: 'Flexbox',
        library: 'css',
        category: 'flexbox',
        description: 'Flexbox (Flexible Box Layout) is a powerful one-dimensional layout system in CSS that makes it easy to design flexible and responsive layouts. It provides an efficient way to distribute space and align items in a container, even when their sizes are unknown or dynamic. Flexbox is particularly useful for creating navigation bars, card layouts, and centering content.',
        syntax: 'display: flex;',
        examples: [
            {
                title: 'Basic Flex Container',
                description: 'Converting a container to a flex layout to automatically arrange child elements.',
                code: '.container {\n  display: flex;\n  gap: 20px;\n  padding: 20px;\n  background: #f5f5f5;\n}\n\n.item {\n  background: #007bff;\n  color: white;\n  padding: 20px;\n  border-radius: 8px;\n  flex: 1;\n}'
            },
            {
                title: 'Justify Content',
                description: 'Controlling horizontal alignment of flex items within the container.',
                code: '/* Center items */\n.center {\n  display: flex;\n  justify-content: center;\n}\n\n/* Space between items */\n.space-between {\n  display: flex;\n  justify-content: space-between;\n}\n\n/* Space around items */\n.space-around {\n  display: flex;\n  justify-content: space-around;\n}\n\n/* End alignment */\n.end {\n  display: flex;\n  justify-content: flex-end;\n}'
            },
            {
                title: 'Align Items',
                description: 'Controlling vertical alignment of flex items along the cross axis.',
                code: '.container {\n  display: flex;\n  height: 200px;\n  align-items: center; /* center | flex-start | flex-end | stretch */\n  background: #e9ecef;\n}\n\n/* Stretch items to fill height */\n.stretch-container {\n  display: flex;\n  align-items: stretch;\n  height: 150px;\n}\n\n.stretch-container .item {\n  background: #28a745;\n  color: white;\n}'
            },
            {
                title: 'Flex Direction',
                description: 'Changing the main axis direction of flex items (row or column).',
                code: '/* Default - row */\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n/* Column layout */\n.column {\n  display: flex;\n  flex-direction: column;\n  height: 300px;\n}\n\n/* Reverse directions */\n.row-reverse {\n  display: flex;\n  flex-direction: row-reverse;\n}\n\n.column-reverse {\n  display: flex;\n  flex-direction: column-reverse;\n}'
            }
        ],
        attributes: [
            { name: 'display', type: 'flex | inline-flex', description: 'Defines a flex container' },
            { name: 'flex-direction', type: 'row | column | row-reverse | column-reverse', description: 'Sets the main axis direction' },
            { name: 'justify-content', type: 'flex-start | center | space-between | space-around', description: 'Aligns items along main axis' },
            { name: 'align-items', type: 'flex-start | center | flex-end | stretch', description: 'Aligns items along cross axis' },
            { name: 'gap', type: 'length', description: 'Sets spacing between flex items' },
            { name: 'flex-wrap', type: 'nowrap | wrap | wrap-reverse', description: 'Controls wrapping of flex items' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use flexbox for one-dimensional layouts (either row or column)',
            'Add gap property instead of margins for consistent spacing between items',
            'Use flex: 1 on items to make them grow equally to fill available space',
            'Combine justify-content and align-items for perfect centering',
            'Enable flex-wrap: wrap for responsive layouts that adapt to screen size',
            'Consider using CSS Grid for two-dimensional layouts instead'
        ]
    },

    {
        id: 'css-grid',
        title: 'CSS Grid',
        library: 'css',
        category: 'flexbox',
        description: 'CSS Grid is a powerful two-dimensional layout system that provides precise control over both rows and columns simultaneously. Unlike Flexbox which is one-dimensional, Grid excels at creating complex layouts with explicit row and column structures. It\'s ideal for page layouts, image galleries, and any design requiring both horizontal and vertical alignment.',
        syntax: 'display: grid;',
        examples: [
            {
                title: 'Basic Grid',
                description: 'Creating a simple grid with defined columns and automatic rows.',
                code: '.grid-container {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 20px;\n  padding: 20px;\n}\n\n.grid-item {\n  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n  color: white;\n  padding: 30px;\n  border-radius: 8px;\n  text-align: center;\n}'
            },
            {
                title: 'Responsive Grid',
                description: 'Using auto-fit and minmax for responsive grids that adapt to screen size.',
                code: '.responsive-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n}\n\n/* Grid will automatically adjust number of columns based on available space */\n.responsive-grid .item {\n  background: #4CAF50;\n  color: white;\n  padding: 40px;\n  border-radius: 10px;\n}'
            },
            {
                title: 'Grid Areas',
                description: 'Defining named grid areas for intuitive layout structure.',
                code: '.page-layout {\n  display: grid;\n  grid-template-areas:\n    "header header header"\n    "sidebar main main"\n    "footer footer footer";\n  grid-template-columns: 200px 1fr 1fr;\n  grid-template-rows: 80px 1fr 60px;\n  gap: 15px;\n  height: 100vh;\n}\n\n.header { grid-area: header; background: #333; }\n.sidebar { grid-area: sidebar; background: #555; }\n.main { grid-area: main; background: #777; }\n.footer { grid-area: footer; background: #333; }'
            },
            {
                title: 'Complex Layout',
                description: 'Creating asymmetric layouts with different sized grid items.',
                code: '.gallery {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(3, 200px);\n  gap: 10px;\n}\n\n/* Span multiple columns/rows */\n.featured {\n  grid-column: 1 / 3;  /* Span 2 columns */\n  grid-row: 1 / 3;     /* Span 2 rows */\n  background: #ff6b6b;\n}\n\n.wide {\n  grid-column: span 2;  /* Span 2 columns */\n  background: #4ecdc4;\n}\n\n.tall {\n  grid-row: span 2;     /* Span 2 rows */\n  background: #45b7d1;\n}'
            }
        ],
        attributes: [
            { name: 'display', type: 'grid | inline-grid', description: 'Defines a grid container' },
            { name: 'grid-template-columns', type: 'track-size', description: 'Defines column tracks' },
            { name: 'grid-template-rows', type: 'track-size', description: 'Defines row tracks' },
            { name: 'grid-template-areas', type: 'string', description: 'Defines named grid areas' },
            { name: 'gap', type: 'length', description: 'Sets spacing between grid items' },
            { name: 'grid-column', type: 'start / end', description: 'Item column placement' },
            { name: 'grid-row', type: 'start / end', description: 'Item row placement' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use Grid for two-dimensional layouts requiring both row and column control',
            'Prefer fr units over percentages for flexible, responsive columns',
            'Use repeat() and auto-fit/auto-fill for responsive grids without media queries',
            'Name grid areas with grid-template-areas for readable, maintainable layouts',
            'Combine minmax() with auto-fit for truly responsive designs',
            'Use gap instead of margins for consistent spacing between grid items'
        ]
    },

    // ================= JAVASCRIPT =================
    {
        id: 'js-arrow-functions',
        title: 'Arrow Functions',
        library: 'js',
        category: 'basics',
        description: 'Arrow functions provide a more concise syntax for writing function expressions in JavaScript. Introduced in ES6, they use the => syntax and have some important differences from regular functions, particularly in how they handle the "this" keyword. Arrow functions are especially useful for callbacks, array methods, and short inline functions.',
        syntax: 'const functionName = (parameters) => { /* body */ }',
        examples: [
            {
                title: 'Basic Syntax',
                description: 'Different ways to write arrow functions based on parameters and body length.',
                code: '// No parameters\nconst greet = () => {\n  console.log("Hello!");\n};\n\n// Single parameter (parentheses optional)\nconst square = x => x * x;\nconsole.log(square(5)); // 25\n\n// Multiple parameters\nconst add = (a, b) => a + b;\nconsole.log(add(3, 4)); // 7\n\n// Multiple statements\nconst multiply = (a, b) => {\n  const result = a * b;\n  return result;\n};\n\nconsole.log(multiply(6, 7)); // 42'
            },
            {
                title: 'Array Methods',
                description: 'Using arrow functions with array methods for clean, readable code.',
                code: 'const numbers = [1, 2, 3, 4, 5];\n\n// Map - transform each element\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled); // [2, 4, 6, 8, 10]\n\n// Filter - select elements\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens); // [2, 4]\n\n// Reduce - accumulate values\nconst sum = numbers.reduce((acc, n) => acc + n, 0);\nconsole.log(sum); // 15\n\n// Chaining methods\nconst result = numbers\n  .filter(n => n > 2)\n  .map(n => n * 3)\n  .reduce((acc, n) => acc + n, 0);\n\nconsole.log(result); // 36'
            },
            {
                title: 'Object Methods',
                description: 'Returning objects from arrow functions requires parentheses.',
                code: '// Return object literal\nconst createPerson = (name, age) => ({ name, age });\n\nconst person = createPerson("Alice", 25);\nconsole.log(person); // { name: "Alice", age: 25 }\n\n// Array of objects\nconst users = [\n  { name: "John", age: 30 },\n  { name: "Jane", age: 25 },\n  { name: "Bob", age: 35 }\n];\n\nconst names = users.map(user => user.name);\nconsole.log(names); // ["John", "Jane", "Bob"]\n\nconst adults = users.filter(user => user.age >= 30);\nconsole.log(adults);'
            },
            {
                title: 'Callbacks and Promises',
                description: 'Arrow functions shine in asynchronous code and event handlers.',
                code: '// setTimeout callback\nsetTimeout(() => {\n  console.log("Delayed message");\n}, 1000);\n\n// Event handler\ndocument.querySelector("#myButton")?.addEventListener("click", (event) => {\n  console.log("Button clicked!", event.target);\n});\n\n// Promises\nfetch("https://api.example.com/data")\n  .then(response => response.json())\n  .then(data => console.log(data))\n  .catch(error => console.error("Error:", error));\n\n// Async/await\nconst fetchData = async () => {\n  try {\n    const response = await fetch("https://api.example.com/data");\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error(error);\n  }\n};'
            }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use arrow functions for short, simple operations and callbacks',
            'Omit parentheses for single parameters, but always use them for clarity in complex cases',
            'Remember that arrow functions don\'t have their own "this" - they inherit it from parent scope',
            'Wrap object returns in parentheses: () => ({ key: value })',
            'Don\'t use arrow functions for object methods if you need access to "this"',
            'Prefer arrow functions in array methods (map, filter, reduce) for conciseness'
        ]
    },

    {
        id: 'js-async-await',
        title: 'Async/Await',
        library: 'js',
        category: 'async',
        description: 'Async/await is modern JavaScript syntax for handling asynchronous operations, making asynchronous code look and behave like synchronous code. The async keyword marks a function as asynchronous, and await pauses execution until a Promise resolves. This approach makes asynchronous code more readable and easier to understand than traditional Promise chains or callbacks.',
        syntax: 'async function name() {\n  const result = await promise;\n}',
        examples: [
            {
                title: 'Basic Async/Await',
                description: 'Using async/await to handle promises in a cleaner way.',
                code: '// Async function declaration\nasync function fetchUser() {\n  const response = await fetch("https://api.example.com/user/1");\n  const data = await response.json();\n  return data;\n}\n\n// Using the async function\nfetchUser()\n  .then(user => console.log(user))\n  .catch(err => console.error(err));\n\n// Arrow function version\nconst getUser = async () => {\n  const response = await fetch("https://api.example.com/user/1");\n  return await response.json();\n};'
            },
            {
                title: 'Error Handling',
                description: 'Using try/catch blocks to handle errors in async functions.',
                code: 'async function fetchData() {\n  try {\n    const response = await fetch("https://api.example.com/data");\n    \n    if (!response.ok) {\n      throw new Error(`HTTP error! status: ${response.status}`);\n    }\n    \n    const data = await response.json();\n    console.log("Data received:", data);\n    return data;\n  } catch (error) {\n    console.error("Failed to fetch data:", error.message);\n    return null;\n  } finally {\n    console.log("Fetch attempt completed");\n  }\n}\n\nfetchData();'
            },
            {
                title: 'Sequential vs Parallel',
                description: 'Understanding when to await sequentially vs run operations in parallel.',
                code: '// Sequential - one after another (slower)\nasync function sequential() {\n  const user = await fetch("/api/user");\n  const posts = await fetch("/api/posts");\n  const comments = await fetch("/api/comments");\n  // Total time = sum of all requests\n}\n\n// Parallel - all at once (faster)\nasync function parallel() {\n  const [user, posts, comments] = await Promise.all([\n    fetch("/api/user"),\n    fetch("/api/posts"),\n    fetch("/api/comments")\n  ]);\n  // Total time = slowest request\n}\n\n// Conditional parallel\nasync function conditional() {\n  const user = await fetch("/api/user");\n  \n  // Only after user is fetched, get these in parallel\n  const [posts, friends] = await Promise.all([\n    fetch(`/api/users/${user.id}/posts`),\n    fetch(`/api/users/${user.id}/friends`)\n  ]);\n}'
            },
            {
                title: 'Real-World Example',
                description: 'Practical async/await usage in a complete data fetching scenario.',
                code: 'async function loadUserDashboard(userId) {\n  try {\n    console.log("Loading dashboard...");\n    \n    // Fetch user profile first\n    const userResponse = await fetch(`/api/users/${userId}`);\n    const user = await userResponse.json();\n    console.log("User loaded:", user.name);\n    \n    // Then fetch related data in parallel\n    const [posts, notifications, stats] = await Promise.all([\n      fetch(`/api/users/${userId}/posts`).then(r => r.json()),\n      fetch(`/api/users/${userId}/notifications`).then(r => r.json()),\n      fetch(`/api/users/${userId}/stats`).then(r => r.json())\n    ]);\n    \n    // Assemble dashboard data\n    const dashboard = {\n      user,\n      posts,\n      notifications,\n      stats\n    };\n    \n    console.log("Dashboard ready!");\n    return dashboard;\n  } catch (error) {\n    console.error("Dashboard load failed:", error);\n    throw new Error("Failed to load dashboard");\n  }\n}\n\n// Usage\nloadUserDashboard(123)\n  .then(data => console.log(data))\n  .catch(err => console.error(err));'
            }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always use try/catch blocks to handle errors in async functions',
            'Use Promise.all() for parallel operations to improve performance',
            'Don\'t forget that async functions always return a Promise',
            'Avoid awaiting in loops - use Promise.all() with map instead',
            'Add finally blocks for cleanup operations that should always run',
            'Consider using Promise.allSettled() when you want all results regardless of failures'
        ]
    },

    // ================= TYPESCRIPT =================
    {
        id: 'ts-interfaces',
        title: 'Interfaces',
        library: 'ts',
        category: 'interfaces',
        description: 'Interfaces in TypeScript define the structure of objects by specifying property names and their types. They act as contracts that ensure objects conform to specific shapes, providing type safety and better IDE support. Interfaces can be extended, merged, and used to type-check function parameters, return values, and object literals.',
        syntax: 'interface Name {\n  property: type;\n}',
        examples: [
            {
                title: 'Basic Interface',
                description: 'Defining a simple interface for object structure.',
                code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n  age: number;\n}\n\nconst user: User = {\n  id: 1,\n  name: "Alice",\n  email: "alice@example.com",\n  age: 25\n};\n\nfunction displayUser(user: User) {\n  console.log(`${user.name} (${user.email})`);\n}\n\ndisplayUser(user);'
            },
            {
                title: 'Optional Properties',
                description: 'Using optional properties and readonly modifiers.',
                code: 'interface Product {\n  id: number;\n  name: string;\n  price: number;\n  description?: string;  // Optional\n  readonly category: string;  // Cannot be modified\n}\n\nconst product: Product = {\n  id: 101,\n  name: "Laptop",\n  price: 999.99,\n  category: "Electronics"\n};\n\n// product.category = "Tech"; // Error: readonly property\nconsole.log(product);\n\n// Using optional property\nif (product.description) {\n  console.log(product.description);\n}'
            },
            {
                title: 'Extending Interfaces',
                description: 'Creating new interfaces by extending existing ones.',
                code: 'interface Person {\n  name: string;\n  age: number;\n}\n\ninterface Employee extends Person {\n  employeeId: number;\n  department: string;\n  salary: number;\n}\n\nconst employee: Employee = {\n  name: "Bob",\n  age: 30,\n  employeeId: 12345,\n  department: "Engineering",\n  salary: 75000\n};\n\n// Multiple inheritance\ninterface Manager extends Employee, Person {\n  teamSize: number;\n  managerId: number;\n}\n\nconsole.log(employee);'
            },
            {
                title: 'Function Types',
                description: 'Using interfaces to define function signatures.',
                code: 'interface MathOperation {\n  (a: number, b: number): number;\n}\n\nconst add: MathOperation = (a, b) => a + b;\nconst subtract: MathOperation = (a, b) => a - b;\n\nconsole.log(add(5, 3));      // 8\nconsole.log(subtract(10, 4)); // 6\n\n// Interface for object with methods\ninterface Calculator {\n  add(a: number, b: number): number;\n  subtract(a: number, b: number): number;\n  multiply(a: number, b: number): number;\n}\n\nconst calc: Calculator = {\n  add: (a, b) => a + b,\n  subtract: (a, b) => a - b,\n  multiply: (a, b) => a * b\n};'
            }
        ],
        browserSupport: undefined,
        bestPractices: [
            'Use interfaces for object shapes and type for unions/intersections',
            'Prefix interface names with "I" only if your team convention requires it',
            'Mark properties as readonly when they shouldn\'t be modified after creation',
            'Use optional properties (?) for truly optional fields',
            'Extend interfaces when creating specialized versions of base types',
            'Document interfaces with JSDoc comments for better IDE tooltips'
        ]
    },

    // ================= JAVA =================
    {
        id: 'java-classes',
        title: 'Classes',
        library: 'java',
        category: 'oop',
        description: 'Classes in Java are blueprints for creating objects, defining their properties (fields) and behaviors (methods). Java is a strictly object-oriented language where everything is encapsulated within classes. A class serves as a template that specifies what data an object will store and what operations it can perform.',
        syntax: 'public class ClassName {\n  // fields and methods\n}',
        examples: [
            {
                title: 'Basic Class',
                description: 'Creating a simple class with fields and methods.',
                code: 'public class Person {\n  // Fields\n  private String name;\n  private int age;\n  \n  // Constructor\n  public Person(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n  \n  // Getter methods\n  public String getName() {\n    return name;\n  }\n  \n  public int getAge() {\n    return age;\n  }\n  \n  // Method\n  public void introduce() {\n    System.out.println("Hi, I\'m " + name + " and I\'m " + age + " years old.");\n  }\n}\n\n// Usage\nPerson person = new Person("Alice", 25);\nperson.introduce();'
            },
            {
                title: 'Encapsulation',
                description: 'Using private fields with public getters and setters.',
                code: 'public class BankAccount {\n  private String accountNumber;\n  private double balance;\n  \n  public BankAccount(String accountNumber, double initialBalance) {\n    this.accountNumber = accountNumber;\n    this.balance = initialBalance;\n  }\n  \n  public double getBalance() {\n    return balance;\n  }\n  \n  public void deposit(double amount) {\n    if (amount > 0) {\n      balance += amount;\n      System.out.println("Deposited: $" + amount);\n    }\n  }\n  \n  public void withdraw(double amount) {\n    if (amount > 0 && amount <= balance) {\n      balance -= amount;\n      System.out.println("Withdrawn: $" + amount);\n    } else {\n      System.out.println("Insufficient funds");\n    }\n  }\n}\n\n// Usage\nBankAccount account = new BankAccount("12345", 1000.0);\naccount.deposit(500.0);\naccount.withdraw(200.0);\nSystem.out.println("Balance: $" + account.getBalance());'
            },
            {
                title: 'Inheritance',
                description: 'Creating subclasses that extend parent classes.',
                code: 'public class Animal {\n  protected String name;\n  \n  public Animal(String name) {\n    this.name = name;\n  }\n  \n  public void makeSound() {\n    System.out.println("Some sound");\n  }\n}\n\npublic class Dog extends Animal {\n  private String breed;\n  \n  public Dog(String name, String breed) {\n    super(name);  // Call parent constructor\n    this.breed = breed;\n  }\n  \n  @Override\n  public void makeSound() {\n    System.out.println(name + " says: Woof!");\n  }\n  \n  public void fetch() {\n    System.out.println(name + " is fetching the ball");\n  }\n}\n\n// Usage\nDog dog = new Dog("Buddy", "Golden Retriever");\ndog.makeSound();\ndog.fetch();'
            },
            {
                title: 'Static Members',
                description: 'Using static fields and methods that belong to the class.',
                code: 'public class Counter {\n  private static int count = 0;  // Shared across all instances\n  private int instanceId;\n  \n  public Counter() {\n    count++;\n    this.instanceId = count;\n  }\n  \n  public static int getCount() {\n    return count;\n  }\n  \n  public int getInstanceId() {\n    return instanceId;\n  }\n  \n  public static void resetCount() {\n    count = 0;\n  }\n}\n\n// Usage\nCounter c1 = new Counter();\nCounter c2 = new Counter();\nCounter c3 = new Counter();\n\nSystem.out.println("Total instances: " + Counter.getCount());  // 3\nSystem.out.println("c2 ID: " + c2.getInstanceId());  // 2'
            }
        ],
        browserSupport: undefined,
        bestPractices: [
            'Use meaningful class names that describe what the class represents (PascalCase)',
            'Keep fields private and provide public getters/setters (encapsulation)',
            'Write one class per file, with the filename matching the public class name',
            'Use constructors to initialize object state properly',
            'Override toString() method for better object debugging',
            'Follow the Single Responsibility Principle - each class should have one clear purpose'
        ]
    }
];

export default DOCS;