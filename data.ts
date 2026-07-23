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
  { question: 'Which tag is used to define a hyperlink?', options: ['<a>', '<link>', '<href>', '<url>'], correct: '<a>', category: 'html', difficulty: 'easy', topic: 'Links', explanation: '<a> (anchor) is the element used to create hyperlinks; its href attribute specifies the destination.' },
  { question: 'What does HTML stand for?', options: ['Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Hyper Transfer Markup Language'], correct: 'Hyper Text Markup Language', category: 'html', difficulty: 'easy', topic: 'Basics', explanation: 'HTML stands for Hyper Text Markup Language, the standard markup language for creating web pages.' },
  { question: 'Which HTML element is used to specify a footer for a document?', options: ['<footer>', '<bottom>', '<section>', '<end>'], correct: '<footer>', category: 'html', difficulty: 'easy', topic: 'Semantic HTML', explanation: '<footer> is the semantic element specifically meant to represent a footer for its nearest sectioning content.' },
  { question: 'What is the correct HTML element for the largest heading?', options: ['<h1>', '<heading>', '<head>', '<h6>'], correct: '<h1>', category: 'html', difficulty: 'easy', topic: 'Headings', explanation: '<h1> represents the highest-level, most important heading; heading levels go down to <h6>.' },
  { question: 'Which tag is used to define an input field?', options: ['<input>', '<textfield>', '<field>', '<form>'], correct: '<input>', category: 'html', difficulty: 'easy', topic: 'Forms', explanation: '<input> is the versatile element used to create most form fields, with its type attribute determining its behavior.' },
  { question: 'What is the correct HTML for creating a checkbox?', options: ['<input type="checkbox">', '<checkbox>', '<check>', '<input type="check">'], correct: '<input type="checkbox">', category: 'html', difficulty: 'easy', topic: 'Forms', explanation: 'Setting type="checkbox" on an <input> element creates a checkbox control.' },
  { question: 'Which attribute specifies an alternate text for an image?', options: ['alt', 'src', 'title', 'text'], correct: 'alt', category: 'html', difficulty: 'easy', topic: 'Attributes', explanation: 'The alt attribute provides alternative text for an image, used by screen readers and shown if the image fails to load.' },
  { question: 'Which HTML tag is used to define an unordered list?', options: ['<ul>', '<ol>', '<li>', '<list>'], correct: '<ul>', category: 'html', difficulty: 'easy', topic: 'Lists', explanation: '<ul> creates an unordered (bulleted) list; <ol> creates an ordered (numbered) list instead.' },
  { question: 'What is the correct HTML for making a text area?', options: ['<textarea>', '<input type="textarea">', '<input type="text">', '<textbox>'], correct: '<textarea>', category: 'html', difficulty: 'easy', topic: 'Forms', explanation: '<textarea> creates a multi-line, plain-text input control.' },
  { question: 'Which tag is used for creating a table row?', options: ['<tr>', '<td>', '<table>', '<row>'], correct: '<tr>', category: 'html', difficulty: 'medium', topic: 'Tables', explanation: '<tr> defines a table row; <td> defines an individual cell within that row.' },
  { question: 'What is the purpose of the <meta> tag?', options: ['Provides metadata', 'Creates links', 'Defines styles', 'Adds scripts'], correct: 'Provides metadata', category: 'html', difficulty: 'medium', topic: 'Document Metadata', explanation: '<meta> tags provide metadata about the document, such as character encoding, description, and viewport settings.' },
  { question: 'Which HTML5 element defines navigation links?', options: ['<nav>', '<navigation>', '<menu>', '<links>'], correct: '<nav>', category: 'html', difficulty: 'easy', topic: 'Semantic HTML', explanation: '<nav> is the semantic element used to mark up a section of navigation links.' },
  { question: 'What does the <aside> element represent?', options: ['Sidebar content', 'Main content', 'Footer', 'Header'], correct: 'Sidebar content', category: 'html', difficulty: 'medium', topic: 'Semantic HTML', explanation: '<aside> represents content only tangentially related to the surrounding content, often shown as a sidebar.' },
  { question: 'Which attribute makes an input field required?', options: ['required', 'validate', 'mandatory', 'needed'], correct: 'required', category: 'html', difficulty: 'easy', topic: 'Forms', explanation: 'The required attribute marks a form field as mandatory before the form can be submitted.' },
  { question: 'What is the correct HTML for adding a background color?', options: ['<body style="background-color:yellow">', '<background>yellow</background>', '<body bg="yellow">', '<body color="yellow">'], correct: '<body style="background-color:yellow">', category: 'html', difficulty: 'medium', topic: 'Styling', explanation: 'Setting style="background-color:yellow" directly on an element applies an inline background color.' },
  { question: 'Which tag is used to display code?', options: ['<code>', '<pre>', '<script>', '<programming>'], correct: '<code>', category: 'html', difficulty: 'easy', topic: 'Text Formatting', explanation: '<code> represents a short fragment of computer code, typically rendered in a monospace font.' },
  { question: 'What is the purpose of the <canvas> element?', options: ['Drawing graphics', 'Creating forms', 'Embedding videos', 'Adding images'], correct: 'Drawing graphics', category: 'html', difficulty: 'medium', topic: 'Graphics', explanation: '<canvas> provides a drawable region controlled via JavaScript, used for rendering graphics, animations, and visualizations.' },
  { question: 'Which attribute specifies where to open a linked document?', options: ['target', 'destination', 'window', 'location'], correct: 'target', category: 'html', difficulty: 'medium', topic: 'Links', explanation: 'The target attribute specifies where to open the linked document, e.g. target="_blank" opens it in a new tab.' },
  { question: 'What is the correct HTML for inserting a line break?', options: ['<br>', '<lb>', '<break>', '<newline>'], correct: '<br>', category: 'html', difficulty: 'easy', topic: 'Text Formatting', explanation: '<br> inserts a single line break within text content.' },
  { question: 'Which element defines the document\'s main content?', options: ['<main>', '<content>', '<body>', '<article>'], correct: '<main>', category: 'html', difficulty: 'medium', topic: 'Semantic HTML', explanation: '<main> represents the dominant, central content of the document, distinct from headers, footers, and sidebars.' },

  // CSS (20)
  { question: 'Which property is used to change the background color?', options: ['background-color', 'bgcolor', 'color', 'background'], correct: 'background-color', category: 'css', difficulty: 'easy', topic: 'Colors', explanation: 'background-color sets the background color of an element.' },
  { question: 'How do you select an element with id "demo"?', options: ['#demo', '.demo', 'demo', '*demo'], correct: '#demo', category: 'css', difficulty: 'easy', topic: 'Selectors', explanation: 'The # symbol selects an element by its id attribute, e.g. #demo.' },
  { question: 'Which CSS property controls text size?', options: ['font-size', 'text-size', 'font-style', 'text-style'], correct: 'font-size', category: 'css', difficulty: 'easy', topic: 'Typography', explanation: 'font-size controls the size of text.' },
  { question: 'How do you make text bold in CSS?', options: ['font-weight: bold', 'text-style: bold', 'font: bold', 'text-weight: bold'], correct: 'font-weight: bold', category: 'css', difficulty: 'easy', topic: 'Typography', explanation: 'font-weight: bold makes text bold; numeric values like 700 also work.' },
  { question: 'Which property is used to change font?', options: ['font-family', 'font-type', 'font-name', 'typeface'], correct: 'font-family', category: 'css', difficulty: 'easy', topic: 'Typography', explanation: 'font-family specifies the typeface(s) used for text, in order of preference.' },
  { question: 'How do you center a block element?', options: ['margin: auto', 'align: center', 'center: true', 'text-align: center'], correct: 'margin: auto', category: 'css', difficulty: 'medium', topic: 'Layout', explanation: 'Setting left and right margin to auto on a block element with a defined width centers it horizontally.' },
  { question: 'Which property adds space inside an element?', options: ['padding', 'margin', 'spacing', 'border'], correct: 'padding', category: 'css', difficulty: 'easy', topic: 'Box Model', explanation: 'padding adds space inside an element, between its content and its border.' },
  { question: 'What is the default position value?', options: ['static', 'relative', 'absolute', 'fixed'], correct: 'static', category: 'css', difficulty: 'medium', topic: 'Positioning', explanation: 'static is the default position value; elements are positioned according to normal document flow.' },
  { question: 'Which property is used for flexbox?', options: ['display: flex', 'flex: true', 'layout: flex', 'flexbox: on'], correct: 'display: flex', category: 'css', difficulty: 'easy', topic: 'Flexbox', explanation: 'display: flex turns an element into a flex container, enabling flexbox layout for its children.' },
  { question: 'How do you select all <p> elements?', options: ['p', '.p', '#p', '*p'], correct: 'p', category: 'css', difficulty: 'easy', topic: 'Selectors', explanation: 'A bare tag name, like p, selects every element of that type.' },
  { question: 'Which property creates rounded corners?', options: ['border-radius', 'corner-radius', 'border-round', 'round-corners'], correct: 'border-radius', category: 'css', difficulty: 'easy', topic: 'Box Model', explanation: 'border-radius rounds the corners of an element\'s border box.' },
  { question: 'What does "z-index" control?', options: ['Stack order', 'Font size', 'Color', 'Position'], correct: 'Stack order', category: 'css', difficulty: 'medium', topic: 'Positioning', explanation: 'z-index controls the stacking order of positioned elements along the z-axis - which one sits on top of which.' },
  { question: 'Which unit is relative to font size?', options: ['em', 'px', 'pt', 'cm'], correct: 'em', category: 'css', difficulty: 'medium', topic: 'Units', explanation: 'em is relative to the font-size of the element (or its parent), making it useful for scalable typography and spacing.' },
  { question: 'How do you hide an element?', options: ['display: none', 'visibility: none', 'hidden: true', 'show: false'], correct: 'display: none', category: 'css', difficulty: 'easy', topic: 'Display', explanation: 'display: none removes an element from the layout entirely, as if it were never there.' },
  { question: 'Which property controls opacity?', options: ['opacity', 'transparency', 'alpha', 'visibility'], correct: 'opacity', category: 'css', difficulty: 'easy', topic: 'Visual Effects', explanation: 'opacity controls the transparency of an element and its children.' },
  { question: 'What does "!important" do?', options: ['Increases specificity', 'Adds comment', 'Validates CSS', 'Nothing'], correct: 'Increases specificity', category: 'css', difficulty: 'hard', topic: 'Specificity', explanation: '!important overrides normal specificity rules, forcing a declaration to take precedence - best used sparingly.' },
  { question: 'Which property controls text color?', options: ['color', 'text-color', 'font-color', 'foreground'], correct: 'color', category: 'css', difficulty: 'easy', topic: 'Colors', explanation: 'color sets the text (foreground) color of an element.' },
  { question: 'How do you create a CSS grid?', options: ['display: grid', 'layout: grid', 'grid: true', 'create-grid'], correct: 'display: grid', category: 'css', difficulty: 'medium', topic: 'Grid', explanation: 'display: grid turns an element into a grid container, enabling CSS Grid layout for its children.' },
  { question: 'Which pseudo-class selects hover state?', options: [':hover', '::hover', '.hover', '#hover'], correct: ':hover', category: 'css', difficulty: 'easy', topic: 'Pseudo-classes', explanation: ':hover applies styles while the user\'s pointer is over an element.' },
  { question: 'What is the box model order?', options: ['Content, Padding, Border, Margin', 'Margin, Border, Padding, Content', 'Border, Margin, Padding, Content', 'Content, Border, Padding, Margin'], correct: 'Content, Padding, Border, Margin', category: 'css', difficulty: 'hard', topic: 'Box Model', explanation: 'The CSS box model, from innermost to outermost, is Content, Padding, Border, then Margin.' },

  // JavaScript (20)
  { question: 'Which keyword declares a constant?', options: ['const', 'let', 'var', 'final'], correct: 'const', category: 'js', difficulty: 'easy', topic: 'Variables', explanation: 'const declares a block-scoped variable whose binding cannot be reassigned after initialization.' },
  { question: 'What method converts JSON to object?', options: ['JSON.parse()', 'JSON.stringify()', 'JSON.toObject()', 'JSON.convert()'], correct: 'JSON.parse()', category: 'js', difficulty: 'easy', topic: 'JSON', explanation: 'JSON.parse() converts a JSON string into a JavaScript value; JSON.stringify() does the reverse.' },
  { question: 'Which method adds to the end of an array?', options: ['push()', 'pop()', 'shift()', 'unshift()'], correct: 'push()', category: 'js', difficulty: 'easy', topic: 'Array Methods', explanation: 'push() adds one or more elements to the end of an array and returns the array\'s new length.' },
  { question: 'What does "===" check?', options: ['Value and type', 'Value only', 'Type only', 'Reference'], correct: 'Value and type', category: 'js', difficulty: 'medium', topic: 'Operators', explanation: '=== (strict equality) compares both value and type without any type coercion, unlike ==.' },
  { question: 'How do you create a function?', options: ['function myFunc()', 'def myFunc()', 'func myFunc()', 'create myFunc()'], correct: 'function myFunc()', category: 'js', difficulty: 'easy', topic: 'Functions', explanation: 'function myFunc() { } is the standard syntax for declaring a named function.' },
  { question: 'Which method returns array length?', options: ['.length', '.size()', '.count()', '.len()'], correct: '.length', category: 'js', difficulty: 'easy', topic: 'Arrays', explanation: 'The .length property returns the number of elements currently in an array.' },
  { question: 'What is the DOM?', options: ['Document Object Model', 'Data Object Model', 'Document Order Model', 'Digital Object Model'], correct: 'Document Object Model', category: 'js', difficulty: 'easy', topic: 'DOM', explanation: 'The DOM (Document Object Model) is the programming interface representing a document\'s structure as a tree of objects.' },
  { question: 'How do you comment in JavaScript?', options: ['//', '/* */', '#', 'Both // and /* */'], correct: 'Both // and /* */', category: 'js', difficulty: 'easy', topic: 'Syntax', explanation: 'JavaScript supports single-line comments (//) and multi-line comments (/* */).' },
  { question: 'Which method selects by ID?', options: ['getElementById()', 'querySelector()', 'getElement()', 'selectById()'], correct: 'getElementById()', category: 'js', difficulty: 'easy', topic: 'DOM', explanation: 'getElementById() selects a single element by its exact id attribute.' },
  { question: 'What does "typeof" return?', options: ['Data type', 'Value', 'Variable name', 'Length'], correct: 'Data type', category: 'js', difficulty: 'easy', topic: 'Operators', explanation: 'The typeof operator returns a string indicating the data type of its operand.' },
  { question: 'Which is not a primitive type?', options: ['Object', 'String', 'Number', 'Boolean'], correct: 'Object', category: 'js', difficulty: 'medium', topic: 'Data Types', explanation: 'Object is a reference type, not one of JavaScript\'s primitive types (string, number, boolean, undefined, null, bigint, symbol).' },
  { question: 'How do you declare an array?', options: ['[]', '{}', '()', '<>'], correct: '[]', category: 'js', difficulty: 'easy', topic: 'Arrays', explanation: 'Square brackets [] create an array literal.' },
  { question: 'What method converts string to number?', options: ['parseInt()', 'toString()', 'toNumber()', 'convert()'], correct: 'parseInt()', category: 'js', difficulty: 'easy', topic: 'Type Conversion', explanation: 'parseInt() parses a string and returns an integer, stopping at the first character it can\'t parse.' },
  { question: 'Which loop iterates over object properties?', options: ['for...in', 'for...of', 'forEach', 'while'], correct: 'for...in', category: 'js', difficulty: 'medium', topic: 'Loops', explanation: 'for...in iterates over the enumerable property keys of an object; for...of iterates over the values of an iterable.' },
  { question: 'What is a callback?', options: ['Function passed as argument', 'Return value', 'Loop', 'Variable'], correct: 'Function passed as argument', category: 'js', difficulty: 'medium', topic: 'Functions', explanation: 'A callback is a function passed into another function as an argument, to be invoked later.' },
  { question: 'How do you handle errors?', options: ['try...catch', 'if...else', 'error...handle', 'catch...error'], correct: 'try...catch', category: 'js', difficulty: 'medium', topic: 'Error Handling', explanation: 'try...catch lets you attempt code that might fail and gracefully handle any resulting error.' },
  { question: 'Which method finds array element?', options: ['find()', 'search()', 'locate()', 'seek()'], correct: 'find()', category: 'js', difficulty: 'medium', topic: 'Array Methods', explanation: 'find() returns the first element in an array that satisfies a provided testing function.' },
  { question: 'What does "async" define?', options: ['Asynchronous function', 'Array', 'Synchronous code', 'Variable'], correct: 'Asynchronous function', category: 'js', difficulty: 'medium', topic: 'Async', explanation: 'The async keyword marks a function as asynchronous, allowing await inside it and making it always return a Promise.' },
  { question: 'Which operator spreads array?', options: ['...', '***', '+++', '<<<'], correct: '...', category: 'js', difficulty: 'medium', topic: 'Operators', explanation: 'The ... (spread) operator expands an iterable, such as an array, into its individual elements.' },
  { question: 'What is event bubbling?', options: ['Event propagates up', 'Event repeats', 'Event stops', 'Event delays'], correct: 'Event propagates up', category: 'js', difficulty: 'hard', topic: 'Events', explanation: 'Event bubbling is when an event fired on an element also triggers on its ancestors, propagating upward through the DOM.' },

  // TypeScript (15)
  { question: 'What is TypeScript?', options: ['Typed superset of JavaScript', 'New language', 'Framework', 'Library'], correct: 'Typed superset of JavaScript', category: 'ts', difficulty: 'easy', topic: 'Basics', explanation: 'TypeScript is a typed superset of JavaScript that compiles down to plain JavaScript.' },
  { question: 'How do you define a type?', options: ['type Name = string', 'var Name: string', 'Name as string', 'string Name'], correct: 'type Name = string', category: 'ts', difficulty: 'easy', topic: 'Types', explanation: 'The type keyword creates a type alias, e.g. type Name = string.' },
  { question: 'What is an interface?', options: ['Contract for objects', 'Class', 'Function', 'Variable'], correct: 'Contract for objects', category: 'ts', difficulty: 'medium', topic: 'Interfaces', explanation: 'An interface defines the shape - a contract - that an object must conform to, without providing any implementation.' },
  { question: 'Which type accepts any value?', options: ['any', 'all', 'unknown', 'every'], correct: 'any', category: 'ts', difficulty: 'medium', topic: 'Types', explanation: 'The any type disables type checking for a value entirely, letting it hold anything - best used sparingly.' },
  { question: 'How do you make property optional?', options: ['prop?:', 'prop*:', 'prop!:', 'prop~:'], correct: 'prop?:', category: 'ts', difficulty: 'easy', topic: 'Interfaces', explanation: 'Adding a ? after a property name (prop?:) marks it as optional.' },
  { question: 'What is a generic?', options: ['Reusable type', 'Specific type', 'Function', 'Class'], correct: 'Reusable type', category: 'ts', difficulty: 'hard', topic: 'Generics', explanation: 'A generic is a reusable type that works across a variety of types rather than one fixed type, written with angle brackets like <T>.' },
  { question: 'Which utility makes all properties optional?', options: ['Partial<T>', 'Optional<T>', 'Maybe<T>', 'Nullable<T>'], correct: 'Partial<T>', category: 'ts', difficulty: 'hard', topic: 'Utility Types', explanation: 'Partial<T> constructs a new type with every property of T marked optional.' },
  { question: 'What does "never" represent?', options: ['No return value', 'Null', 'Undefined', 'Empty'], correct: 'No return value', category: 'ts', difficulty: 'hard', topic: 'Types', explanation: 'The never type represents values that never occur, such as a function that always throws or never returns.' },
  { question: 'How do you assert a type?', options: ['as Type', 'is Type', 'to Type', 'cast Type'], correct: 'as Type', category: 'ts', difficulty: 'medium', topic: 'Type Assertions', explanation: 'The as keyword asserts a value\'s type, telling the compiler to treat it as a specific type.' },
  { question: 'What is a tuple?', options: ['Fixed-length array', 'Variable array', 'Object', 'Set'], correct: 'Fixed-length array', category: 'ts', difficulty: 'medium', topic: 'Types', explanation: 'A tuple is an array type with a fixed number of elements, where each position has its own known, specific type.' },
  { question: 'Which keyword defines enum?', options: ['enum', 'enumerate', 'const enum', 'type enum'], correct: 'enum', category: 'ts', difficulty: 'medium', topic: 'Enums', explanation: 'The enum keyword defines a named set of related constants.' },
  { question: 'What does "readonly" do?', options: ['Prevents modification', 'Makes private', 'Hides property', 'Nothing'], correct: 'Prevents modification', category: 'ts', difficulty: 'medium', topic: 'Modifiers', explanation: 'The readonly modifier prevents a property from being reassigned after it is first set.' },
  { question: 'How do you extend an interface?', options: ['extends', 'implements', 'inherits', 'uses'], correct: 'extends', category: 'ts', difficulty: 'medium', topic: 'Interfaces', explanation: 'An interface can extend another using the extends keyword, inheriting all of its members.' },
  { question: 'What is "unknown" type?', options: ['Type-safe any', 'Same as any', 'Null type', 'Void type'], correct: 'Type-safe any', category: 'ts', difficulty: 'hard', topic: 'Types', explanation: 'unknown is a type-safe counterpart to any - it accepts any value, but requires a type check before you can operate on it.' },
  { question: 'Which utility makes all properties required?', options: ['Required<T>', 'Mandatory<T>', 'Needed<T>', 'Complete<T>'], correct: 'Required<T>', category: 'ts', difficulty: 'hard', topic: 'Utility Types', explanation: 'Required<T> constructs a new type with every property of T marked required - the opposite of Partial<T>.' },

  // Python (15)
  { question: 'How do you create a list?', options: ['[]', '{}', '()', '<>'], correct: '[]', category: 'py', difficulty: 'easy', topic: 'Lists', explanation: 'Square brackets [] create a list in Python.' },
  { question: 'Which keyword defines a function?', options: ['def', 'function', 'func', 'define'], correct: 'def', category: 'py', difficulty: 'easy', topic: 'Functions', explanation: 'The def keyword is used to define a function in Python.' },
  { question: 'What is a dictionary?', options: ['Key-value pairs', 'Array', 'List', 'Tuple'], correct: 'Key-value pairs', category: 'py', difficulty: 'easy', topic: 'Dictionaries', explanation: 'A dictionary stores data as key-value pairs, created with curly braces {}.' },
  { question: 'How do you comment?', options: ['#', '//', '/* */', '--'], correct: '#', category: 'py', difficulty: 'easy', topic: 'Syntax', explanation: 'The # symbol starts a single-line comment in Python.' },
  { question: 'Which method adds to list?', options: ['.append()', '.add()', '.push()', '.insert()'], correct: '.append()', category: 'py', difficulty: 'easy', topic: 'List Methods', explanation: 'The .append() method adds a single item to the end of a list.' },
  { question: 'What is "self"?', options: ['Instance reference', 'Class name', 'Variable', 'Method'], correct: 'Instance reference', category: 'py', difficulty: 'medium', topic: 'OOP', explanation: 'self refers to the current instance of the class and is conventionally the first parameter of instance methods.' },
  { question: 'How do you import module?', options: ['import module', 'require module', 'use module', 'include module'], correct: 'import module', category: 'py', difficulty: 'easy', topic: 'Modules', explanation: 'The import statement brings code from another module into the current file.' },
  { question: 'Which is immutable?', options: ['Tuple', 'List', 'Dictionary', 'Set'], correct: 'Tuple', category: 'py', difficulty: 'medium', topic: 'Data Structures', explanation: 'A tuple\'s contents cannot be changed after creation, unlike a list, which is mutable.' },
  { question: 'What does "pass" do?', options: ['Placeholder', 'Skip loop', 'Return', 'Break'], correct: 'Placeholder', category: 'py', difficulty: 'medium', topic: 'Control Flow', explanation: 'pass is a null operation - a placeholder used where a statement is syntactically required but no code is needed yet.' },
  { question: 'How do you create a class?', options: ['class Name:', 'class Name{}', 'def class Name:', 'new class Name'], correct: 'class Name:', category: 'py', difficulty: 'easy', topic: 'OOP', explanation: 'class Name: begins a class definition, with the class body indented beneath it.' },
  { question: 'Which loop iterates over sequence?', options: ['for', 'while', 'loop', 'each'], correct: 'for', category: 'py', difficulty: 'easy', topic: 'Loops', explanation: 'A for loop iterates directly over the items of a sequence, like a list, tuple, or string.' },
  { question: 'What is a lambda?', options: ['Anonymous function', 'Loop', 'Class', 'Variable'], correct: 'Anonymous function', category: 'py', difficulty: 'medium', topic: 'Functions', explanation: 'A lambda is a small, anonymous, single-expression function.' },
  { question: 'How do you handle exceptions?', options: ['try...except', 'try...catch', 'if...error', 'error...handle'], correct: 'try...except', category: 'py', difficulty: 'medium', topic: 'Error Handling', explanation: 'try...except lets Python attempt an operation and gracefully handle any resulting exception.' },
  { question: 'What does "range(5)" return?', options: ['0 to 4', '1 to 5', '0 to 5', '1 to 4'], correct: '0 to 4', category: 'py', difficulty: 'medium', topic: 'Loops', explanation: 'range(5) generates numbers starting at 0, up to but not including 5.' },
  { question: 'Which is a string method?', options: ['.split()', '.add()', '.push()', '.remove()'], correct: '.split()', category: 'py', difficulty: 'easy', topic: 'String Methods', explanation: '.split() divides a string into a list of substrings based on a separator.' },

  // Java (10)
  { question: 'How do you declare a variable?', options: ['int x = 5;', 'var x = 5;', 'x: int = 5;', 'declare x = 5;'], correct: 'int x = 5;', category: 'java', difficulty: 'easy', topic: 'Variables', explanation: 'Java requires explicit type declarations, e.g. int x = 5; declares an integer variable.' },
  { question: 'What is the entry point?', options: ['public static void main', 'main()', 'start()', 'run()'], correct: 'public static void main', category: 'java', difficulty: 'medium', topic: 'Basics', explanation: 'public static void main(String[] args) is the standard entry point method where a Java program\'s execution begins.' },
  { question: 'Which keyword creates object?', options: ['new', 'create', 'make', 'instance'], correct: 'new', category: 'java', difficulty: 'easy', topic: 'OOP', explanation: 'The new keyword allocates memory and creates a new instance of a class.' },
  { question: 'What is inheritance keyword?', options: ['extends', 'inherits', 'implements', 'derives'], correct: 'extends', category: 'java', difficulty: 'medium', topic: 'Inheritance', explanation: 'The extends keyword lets a class inherit from a parent (super) class.' },
  { question: 'Which is not primitive?', options: ['String', 'int', 'boolean', 'double'], correct: 'String', category: 'java', difficulty: 'medium', topic: 'Data Types', explanation: 'String is a reference type (a class) in Java, not one of its 8 primitive types like int or boolean.' },
  { question: 'How do you print?', options: ['System.out.println()', 'print()', 'console.log()', 'println()'], correct: 'System.out.println()', category: 'java', difficulty: 'easy', topic: 'Basics', explanation: 'System.out.println() prints a line of text to the standard output console.' },
  { question: 'What is an interface?', options: ['Contract', 'Class', 'Method', 'Variable'], correct: 'Contract', category: 'java', difficulty: 'medium', topic: 'Interfaces', explanation: 'An interface defines the shape - a contract - that an object must conform to, without providing any implementation.' },
  { question: 'Which exception is checked?', options: ['IOException', 'NullPointerException', 'ArrayIndexOutOfBounds', 'RuntimeException'], correct: 'IOException', category: 'java', difficulty: 'hard', topic: 'Exceptions', explanation: 'IOException is a checked exception - the compiler requires it to be either caught or declared in the method signature.' },
  { question: 'What is ArrayList?', options: ['Dynamic array', 'Fixed array', 'Map', 'Set'], correct: 'Dynamic array', category: 'java', difficulty: 'medium', topic: 'Collections', explanation: 'ArrayList is a resizable, dynamic array implementation from the Java Collections Framework.' },
  { question: 'Which keyword prevents inheritance?', options: ['final', 'private', 'static', 'sealed'], correct: 'final', category: 'java', difficulty: 'hard', topic: 'Modifiers', explanation: 'Declaring a class final prevents it from being subclassed (inherited from).' }
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

    {
        id: 'base',
        title: '<base>',
        library: 'html',
        category: 'meta',
        description: 'The <base> element specifies a base URL and/or target for all relative URLs in a document. It must appear inside <head>, and a document should have no more than one <base> element. Once set, every relative link, image src, and form action on the page resolves against it unless individually overridden.',
        syntax: '<base href="https://example.com/" target="_blank">',
        examples: [
            {
                title: 'Base URL',
                description: 'Setting a base so relative links resolve consistently.',
                code: '<head>\n  <base href="https://devnexus.com/docs/">\n</head>\n<body>\n  <a href="html">HTML Docs</a>\n  <!-- resolves to https://devnexus.com/docs/html -->\n</body>'
            },
            {
                title: 'Base Target',
                description: 'Making every link on the page open in a new tab by default.',
                code: '<head>\n  <base target="_blank">\n</head>\n<body>\n  <a href="https://example.com">Opens in new tab</a>\n</body>'
            },
            {
                title: 'Combined href and target',
                description: 'Setting both a base URL and default target together.',
                code: '<base href="https://cdn.example.com/assets/" target="_self">'
            }
        ],
        attributes: [
            { name: 'href', type: 'URL', description: 'The base URL for all relative URLs in the document' },
            { name: 'target', type: '_blank | _self | _parent | _top', description: 'The default target for all links and forms' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use at most one <base> element per document, placed early inside <head>',
            'Be careful with base href — it affects every relative URL on the page, including images and scripts, not just links',
            'Prefer explicit absolute or relative paths over relying on base href for most projects, since it can cause confusing bugs when forgotten',
            'Remember individual links can still override a base target with their own target attribute'
        ]
    },

    {
        id: 'html-description-list',
        title: '<dl>, <dt>, <dd>',
        library: 'html',
        category: 'lists',
        description: 'The description list group represents a list of term/description pairs — like a glossary or metadata list. <dl> wraps the whole list, <dt> defines each term, and <dd> defines its associated description. Unlike <ul>/<ol>, description lists are not bulleted or numbered by default.',
        syntax: '<dl>\n  <dt>Term</dt>\n  <dd>Description of the term.</dd>\n</dl>',
        examples: [
            {
                title: 'Glossary',
                description: 'A simple glossary of terms and definitions.',
                code: '<dl>\n  <dt>HTML</dt>\n  <dd>The standard markup language for creating web pages.</dd>\n  <dt>CSS</dt>\n  <dd>The language used to style HTML content.</dd>\n</dl>'
            },
            {
                title: 'Multiple Descriptions',
                description: 'A single term can have more than one description.',
                code: '<dl>\n  <dt>API</dt>\n  <dd>Application Programming Interface</dd>\n  <dd>A set of rules that lets applications communicate.</dd>\n</dl>'
            },
            {
                title: 'Metadata List',
                description: 'Using a description list for key-value metadata.',
                code: '<dl>\n  <dt>Author</dt>\n  <dd>Jane Smith</dd>\n  <dt>Published</dt>\n  <dd>July 16, 2026</dd>\n</dl>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use description lists for genuine term/description pairs, like glossaries, metadata, or FAQs — not as a generic layout tool',
            'A dt can be followed by multiple dd elements if a term has several descriptions',
            'Avoid using dl purely to achieve a two-column visual layout — that is a CSS concern unless the content really is term/description pairs',
            'Style with CSS (e.g., display: grid or flex on dl) for custom layouts rather than default browser styling'
        ]
    },

    {
        id: 'cite',
        title: '<cite>',
        library: 'html',
        category: 'text',
        description: 'The <cite> element references the title of a creative work — a book, article, song, movie, or research paper — not the author\'s name. Browsers typically render it in italics. It is often paired with <blockquote> or <q> to credit the source of a quotation.',
        syntax: '<cite>Title of Work</cite>',
        examples: [
            {
                title: 'Citing a Book',
                description: 'Referencing a book title within a sentence.',
                code: '<p>I just finished reading <cite>Clean Code</cite> by Robert C. Martin.</p>'
            },
            {
                title: 'Citing Alongside a Quote',
                description: 'Using cite to credit the source of a blockquote.',
                code: '<blockquote>\n  <p>Simplicity is the soul of efficiency.</p>\n</blockquote>\n<p>— <cite>Austin Freeman</cite></p>'
            },
            {
                title: 'Citing a Web Article',
                description: 'Referencing an online article by title.',
                code: '<p>According to <cite>Understanding the DOM</cite> on MDN, the DOM represents the page as a tree structure.</p>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use cite for the title of a work, not for the name of a person — there is no dedicated element for author names',
            'Pair with blockquote or q when crediting the source of a quotation',
            'Do not use cite purely for its default italic styling on unrelated text',
            'Combine with the cite attribute on blockquote/q (a URL) for machine-readable sourcing alongside the visible citation'
        ]
    },

    {
        id: 'html-ins-del',
        title: '<ins> and <del>',
        library: 'html',
        category: 'text',
        description: 'The <ins> element marks text that has been inserted into a document, typically rendered underlined. The <del> element marks text that has been deleted, typically rendered with strikethrough. Together they are commonly used to show tracked changes, edit history, or price updates, and both support cite and datetime attributes to document when and why the change was made.',
        syntax: '<del>Old text</del> <ins>New text</ins>',
        examples: [
            {
                title: 'Showing a Price Change',
                description: 'A common e-commerce pattern for discounted pricing.',
                code: '<p>Price: <del>$49.99</del> <ins>$34.99</ins></p>'
            },
            {
                title: 'Document Revision',
                description: 'Marking up an edited sentence to show what changed.',
                code: '<p>The meeting is scheduled for <del>Monday</del> <ins>Wednesday</ins> at 3 PM.</p>'
            },
            {
                title: 'With Attribution',
                description: 'Documenting who made a change and when.',
                code: '<p>\n  <del datetime="2026-07-01" cite="https://example.com/changelog">Removed the beta feature.</del>\n  <ins datetime="2026-07-16">Added the stable release notes.</ins>\n</p>'
            }
        ],
        attributes: [
            { name: 'cite', type: 'URL', description: 'A URL explaining why the change was made' },
            { name: 'datetime', type: 'string', description: 'The date and time the change was made, in ISO 8601 format' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use ins/del for genuine tracked changes or edit history, not as a general-purpose styling shortcut for underline/strikethrough',
            'For text that is simply no longer accurate (but was not literally deleted from a document), consider <s> instead of <del>',
            'Include datetime for a proper audit trail on content like changelogs or legal documents',
            'Remember del/ins can wrap both inline and block-level content'
        ]
    },

    {
        id: 'html-picture',
        title: '<picture> and <source>',
        library: 'html',
        category: 'media',
        description: 'The <picture> element lets the browser choose the most appropriate image from multiple <source> options based on screen size, resolution, or format support, falling back to a required <img> element if none match. This is the standard way to serve responsive, art-directed, or next-gen image formats (like WebP or AVIF) with automatic fallback.',
        syntax: '<picture>\n  <source srcset="image.webp" type="image/webp">\n  <img src="image.jpg" alt="Description">\n</picture>',
        examples: [
            {
                title: 'Format Fallback',
                description: 'Serving a modern format with a JPEG fallback.',
                code: '<picture>\n  <source srcset="photo.avif" type="image/avif">\n  <source srcset="photo.webp" type="image/webp">\n  <img src="photo.jpg" alt="Mountain landscape">\n</picture>'
            },
            {
                title: 'Responsive Art Direction',
                description: 'Showing a different crop of the same image depending on screen width.',
                code: '<picture>\n  <source media="(min-width: 800px)" srcset="banner-wide.jpg">\n  <source media="(min-width: 400px)" srcset="banner-medium.jpg">\n  <img src="banner-small.jpg" alt="Homepage banner">\n</picture>'
            },
            {
                title: 'Resolution Switching',
                description: 'Serving higher-resolution images to high-density screens.',
                code: '<picture>\n  <source srcset="icon.png 1x, icon@2x.png 2x">\n  <img src="icon.png" alt="App icon">\n</picture>'
            }
        ],
        attributes: [
            { name: 'srcset', type: 'string', description: 'Used on source; one or more candidate image URLs' },
            { name: 'media', type: 'string', description: 'A media query controlling when that source is used' },
            { name: 'type', type: 'string', description: 'The MIME type of the image resource, letting the browser skip unsupported formats' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always include a fallback <img> as the last child — it is what renders if no source matches, and is required for accessibility',
            'Put the alt attribute on the fallback <img>, not on picture or source',
            'List source elements from most to least preferred format, since the browser uses the first one it supports',
            'Use picture for format/art-direction switching, and the simpler img srcset attribute for pure resolution switching'
        ]
    },

    {
        id: 'canvas',
        title: '<canvas>',
        library: 'html',
        category: 'scripting',
        description: 'The <canvas> element provides a blank, resizable bitmap surface for drawing graphics, animations, and visualizations via JavaScript — typically using the Canvas 2D API or WebGL. Unlike SVG, canvas content is pixel-based rather than made of individually addressable DOM elements, which makes it well-suited for games, charts, and pixel-level image manipulation.',
        syntax: '<canvas id="myCanvas" width="400" height="300"></canvas>',
        examples: [
            {
                title: 'Basic Canvas Setup',
                description: 'Creating a canvas and drawing a simple rectangle.',
                code: '<canvas id="myCanvas" width="300" height="150" style="border:1px solid #ccc;"></canvas>\n<script>\n  const ctx = document.getElementById("myCanvas").getContext("2d");\n  ctx.fillStyle = "#3b82f6";\n  ctx.fillRect(20, 20, 100, 80);\n</script>'
            },
            {
                title: 'Drawing a Circle',
                description: 'Using canvas arc methods to draw shapes.',
                code: '<canvas id="circleCanvas" width="200" height="200"></canvas>\n<script>\n  const ctx = document.getElementById("circleCanvas").getContext("2d");\n  ctx.beginPath();\n  ctx.arc(100, 100, 60, 0, Math.PI * 2);\n  ctx.fillStyle = "#10b981";\n  ctx.fill();\n</script>'
            },
            {
                title: 'Fallback Content',
                description: 'Providing fallback content for browsers or users without canvas/script support.',
                code: '<canvas id="chart" width="400" height="200">\n  Your browser does not support canvas. Here is a summary: Sales grew 20% in Q2.\n</canvas>'
            }
        ],
        attributes: [
            { name: 'width', type: 'number', description: 'The canvas width in pixels (default 300)' },
            { name: 'height', type: 'number', description: 'The canvas height in pixels (default 150)' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Set width/height as HTML attributes rather than CSS to avoid blurry, stretched rendering',
            'Provide meaningful fallback content between the tags for cases where canvas or JavaScript is unavailable',
            'For charts, diagrams, or icons that need to stay interactive and accessible as individual elements, consider SVG instead of canvas',
            'Canvas content is not part of the accessibility tree by default — add ARIA attributes or fallback text for accessibility when the content is meaningful'
        ]
    },

    {
        id: 'html-embed-object',
        title: '<embed> and <object>',
        library: 'html',
        category: 'media',
        description: 'The <embed> and <object> elements embed external content — like PDFs, other HTML pages, or browser plugins — into a document. <object> is the more capable and standards-based of the two, supporting fallback content between its tags, while <embed> is simpler but has no fallback mechanism. Modern use cases increasingly favor <iframe> for HTML content and dedicated elements like <img>, <video>, or <picture> where applicable.',
        syntax: '<object data="file.pdf" type="application/pdf" width="600" height="400"></object>',
        examples: [
            {
                title: 'Embedding a PDF',
                description: 'Displaying a PDF file directly in the page using object.',
                code: '<object data="/docs/guide.pdf" type="application/pdf" width="100%" height="500">\n  <p>Your browser cannot display PDFs. <a href="/docs/guide.pdf">Download it instead</a>.</p>\n</object>'
            },
            {
                title: 'Embedding with embed',
                description: 'A simpler embed of a PDF with no fallback content.',
                code: '<embed src="/docs/report.pdf" type="application/pdf" width="100%" height="500">'
            },
            {
                title: 'Embedding an SVG File as an Object',
                description: 'Loading an external SVG file as interactive content.',
                code: '<object data="/icons/logo.svg" type="image/svg+xml" width="120" height="120"></object>'
            }
        ],
        attributes: [
            { name: 'data', type: 'URL', description: 'Used on object; the URL of the resource to embed' },
            { name: 'src', type: 'URL', description: 'Used on embed; the URL of the resource to embed' },
            { name: 'type', type: 'string', description: 'The MIME type of the embedded resource' },
            { name: 'width', type: 'number', description: 'Display width in pixels' },
            { name: 'height', type: 'number', description: 'Display height in pixels' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Prefer object over embed when you need fallback content for unsupported browsers',
            'For embedding other web pages specifically, use iframe instead, which is more widely supported and flexible',
            'Always provide a direct download link as a fallback when embedding documents like PDFs',
            'Test embedded content across browsers, since plugin-dependent behavior for embed/object varies more than other media elements'
        ]
    },

    {
        id: 'html-image-map',
        title: '<map> and <area>',
        library: 'html',
        category: 'media',
        description: 'Image maps let different regions of a single image act as separate clickable links. The <map> element defines the map, referenced from an <img> via its usemap attribute, and each <area> inside it defines one clickable region using coordinates and a shape.',
        syntax: '<img src="image.jpg" usemap="#map1">\n<map name="map1">\n  <area shape="rect" coords="0,0,100,100" href="/page1">\n</map>',
        examples: [
            {
                title: 'Rectangular Regions',
                description: 'A simple image map with rectangular clickable areas.',
                code: '<img src="nav-diagram.png" usemap="#navmap" alt="Site navigation diagram">\n<map name="navmap">\n  <area shape="rect" coords="0,0,150,50" href="/home" alt="Home">\n  <area shape="rect" coords="150,0,300,50" href="/about" alt="About">\n</map>'
            },
            {
                title: 'Circular Region',
                description: 'Defining a circular clickable area.',
                code: '<img src="world-map.png" usemap="#continents" alt="World map">\n<map name="continents">\n  <area shape="circle" coords="200,150,40" href="/europe" alt="Europe">\n</map>'
            },
            {
                title: 'Polygon Region',
                description: 'Defining a custom-shaped clickable area.',
                code: '<map name="shapes">\n  <area shape="poly" coords="50,10,90,90,10,90" href="/triangle-info" alt="Triangle">\n</map>'
            }
        ],
        attributes: [
            { name: 'name', type: 'string', description: 'Used on map; must match the img\'s usemap value' },
            { name: 'usemap', type: 'string', description: 'Used on img; references a map by name, prefixed with #' },
            { name: 'shape', type: 'rect | circle | poly | default', description: 'Used on area; the shape of the clickable region' },
            { name: 'coords', type: 'string', description: 'Used on area; coordinates defining the region\'s boundaries' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always include alt text on each area for accessibility, same as a regular link',
            'Consider whether separate, individually styled elements (like a CSS grid of linked images) would be simpler than coordinate-based regions',
            'Image maps do not scale coordinates automatically with responsive images — test carefully on different screen sizes',
            'Keep coordinate math simple by using rect and circle shapes where possible rather than complex polygons'
        ]
    },

    {
        id: 'noscript',
        title: '<noscript>',
        library: 'html',
        category: 'scripting',
        description: 'The <noscript> element defines content to display only when JavaScript is disabled or unsupported in the browser. It commonly contains a message explaining that the page requires JavaScript, or a fallback version of functionality that would otherwise depend on scripting.',
        syntax: '<noscript>\n  <p>This site requires JavaScript to function.</p>\n</noscript>',
        examples: [
            {
                title: 'Basic Warning Message',
                description: 'Informing users that JavaScript is required.',
                code: '<noscript>\n  <p>Please enable JavaScript to use this application.</p>\n</noscript>'
            },
            {
                title: 'Fallback Content',
                description: 'Providing a non-JavaScript fallback for an interactive feature.',
                code: '<div id="live-chart"></div>\n<noscript>\n  <img src="/static-chart.png" alt="Sales chart (static fallback)">\n</noscript>'
            },
            {
                title: 'Styled Notice',
                description: 'A styled banner shown only without JavaScript.',
                code: '<noscript>\n  <div style="background: #fef3c7; padding: 12px; text-align: center;">\n    Some features are unavailable with JavaScript disabled.\n  </div>\n</noscript>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use noscript to gracefully inform users rather than leaving them with a blank or broken page',
            'Where practical, provide genuine fallback content or functionality, not just a warning message',
            'Remember content inside noscript is only rendered when scripting is off — do not rely on it for anything that should also work normally',
            'Test your site with JavaScript disabled occasionally to see what your users without it actually experience'
        ]
    },

    {
        id: 'output',
        title: '<output>',
        library: 'html',
        category: 'forms',
        description: 'The <output> element represents the result of a calculation performed by a script, often used within a form to show a live computed value — like the result of a slider-driven calculation. It can be associated with the form controls that influence its value via the for attribute.',
        syntax: '<output name="result" for="a b">0</output>',
        examples: [
            {
                title: 'Simple Calculation Display',
                description: 'Showing the sum of two number inputs, updated live with JavaScript.',
                code: '<form oninput="result.value = parseInt(a.value || 0) + parseInt(b.value || 0)">\n  <input type="number" id="a" name="a" value="0"> +\n  <input type="number" id="b" name="b" value="0"> =\n  <output name="result" for="a b">0</output>\n</form>'
            },
            {
                title: 'Slider with Live Output',
                description: 'A common pattern pairing a range input with output.',
                code: '<input type="range" id="volume" min="0" max="100" value="50" oninput="vol.value = volume.value">\n<output id="vol" for="volume">50</output>'
            },
            {
                title: 'Styled Output',
                description: 'Styling the output like a result badge.',
                code: '<output style="display: inline-block; background: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 999px; font-weight: 600;">$42.50</output>'
            }
        ],
        attributes: [
            { name: 'for', type: 'string', description: 'A space-separated list of IDs of elements that contributed to the calculation' },
            { name: 'name', type: 'string', description: 'Names the output for form submission' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use output for genuinely calculated or derived values, not as a generic text container',
            'Set the for attribute to link the output back to the inputs it depends on, improving accessibility',
            'Combine with the oninput event on the parent form for live updates without a submit step',
            'Provide an initial value inside the tags so the output is not empty before any calculation runs'
        ]
    },

    {
        id: 'datalist',
        title: '<datalist>',
        library: 'html',
        category: 'forms',
        description: 'The <datalist> element provides a list of predefined autocomplete suggestions for an <input> element, without restricting the user to only those choices — unlike <select>, users can still type a custom value. It is connected to an input via a matching list attribute and id.',
        syntax: '<input list="options" name="choice">\n<datalist id="options">\n  <option value="Option A">\n  <option value="Option B">\n</datalist>',
        examples: [
            {
                title: 'Basic Autocomplete',
                description: 'Suggesting common browser names while allowing free text.',
                code: '<label for="browser">Choose a browser:</label>\n<input list="browsers" id="browser" name="browser">\n<datalist id="browsers">\n  <option value="Chrome">\n  <option value="Firefox">\n  <option value="Safari">\n  <option value="Edge">\n</datalist>'
            },
            {
                title: 'Number Suggestions',
                description: 'Using datalist to suggest common numeric values.',
                code: '<label for="rating">Rating:</label>\n<input type="range" list="ratings" id="rating" min="0" max="10">\n<datalist id="ratings">\n  <option value="0"></option>\n  <option value="5"></option>\n  <option value="10"></option>\n</datalist>'
            },
            {
                title: 'City Search Suggestions',
                description: 'Suggesting cities while allowing any typed value.',
                code: '<input list="cities" name="city" placeholder="Search for a city">\n<datalist id="cities">\n  <option value="Manchester">\n  <option value="London">\n  <option value="Leeds">\n</datalist>'
            }
        ],
        attributes: [
            { name: 'id', type: 'string', description: 'Referenced by the input\'s list attribute' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use datalist when you want to suggest common values without forcing the user to pick only from a fixed list — use select for that instead',
            'Connect it to an input using matching list and id attributes',
            'Keep the suggestion list reasonably short and relevant so it stays genuinely useful',
            'Test the visual behavior across browsers, since datalist styling and interaction is less consistent than other form controls'
        ]
    },

    {
        id: 'html-sub-sup',
        title: '<sub> and <sup>',
        library: 'html',
        category: 'text',
        description: 'The <sub> element renders text as subscript (lowered and smaller), and <sup> renders text as superscript (raised and smaller). They are used for their actual typographic meaning — chemical formulas, mathematical exponents, ordinal indicators, and footnote references — not for general small text styling.',
        syntax: 'H<sub>2</sub>O and E = mc<sup>2</sup>',
        examples: [
            {
                title: 'Chemical Formula',
                description: 'Using subscript for a chemical formula.',
                code: '<p>Water is H<sub>2</sub>O, and carbon dioxide is CO<sub>2</sub>.</p>'
            },
            {
                title: 'Mathematical Exponent',
                description: 'Using superscript for an exponent.',
                code: '<p>Einstein\'s famous equation is E = mc<sup>2</sup>.</p>'
            },
            {
                title: 'Footnote Reference',
                description: 'Using superscript to mark a footnote reference.',
                code: '<p>This claim needs verification<sup><a href="#footnote1">[1]</a></sup>.</p>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use sub/sup only for their real typographic meaning, not simply to make text smaller',
            'For ordinal suffixes like "1st" or "2nd", consider whether superscript styling is actually desired by your target audience — many style guides avoid it',
            'Keep subscript/superscript text short — long passages become hard to read at reduced size',
            'For footnote systems, pair sup with proper anchor links back and forth between reference and note'
        ]
    },

    {
        id: 'html-samp-var',
        title: '<samp> and <var>',
        library: 'html',
        category: 'text',
        description: 'The <samp> element represents sample output from a computer program, typically rendered in monospace. The <var> element represents a variable in a mathematical expression or programming context, typically rendered in italics. Both are semantic complements to <kbd> (keyboard input) and <code> (code itself) for accurately marking up technical writing.',
        syntax: '<samp>Output text</samp> and <var>x</var>',
        examples: [
            {
                title: 'Program Output',
                description: 'Showing sample console output.',
                code: '<p>Running the script prints: <samp>Build succeeded in 4.2s</samp></p>'
            },
            {
                title: 'Mathematical Variable',
                description: 'Marking up a variable in an equation.',
                code: '<p>The formula for area is <var>A</var> = <var>π</var><var>r</var><sup>2</sup>.</p>'
            },
            {
                title: 'Combining kbd, samp, and var',
                description: 'Documenting a command-line interaction with proper semantic markup.',
                code: '<p>Type <kbd>echo $PATH</kbd> and press Enter. The output will look like <samp>/usr/local/bin:/usr/bin</samp>, where <var>PATH</var> is your system\'s environment variable.</p>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use samp specifically for output a program actually produced, distinct from kbd (what the user types) and code (the code itself)',
            'Use var for variable names in math or pseudocode, not for arbitrary emphasized words',
            'Combine kbd, samp, code, and var together in technical documentation for precise, accessible meaning',
            'Do not reach for these elements purely for their default monospace/italic styling on unrelated text'
        ]
    },

    {
        id: 'track',
        title: '<track>',
        library: 'html',
        category: 'media',
        description: 'The <track> element specifies timed text tracks for <video> or <audio> elements — most commonly subtitles or captions in WebVTT format. Multiple tracks can be provided for different languages, and the default attribute marks which one should be enabled automatically.',
        syntax: '<track src="captions.vtt" kind="subtitles" srclang="en" label="English">',
        examples: [
            {
                title: 'Basic Captions',
                description: 'Adding English captions to a video.',
                code: '<video controls>\n  <source src="tutorial.mp4" type="video/mp4">\n  <track src="captions-en.vtt" kind="captions" srclang="en" label="English" default>\n</video>'
            },
            {
                title: 'Multiple Language Subtitles',
                description: 'Offering subtitle tracks in more than one language.',
                code: '<video controls>\n  <source src="movie.mp4" type="video/mp4">\n  <track src="subs-en.vtt" kind="subtitles" srclang="en" label="English" default>\n  <track src="subs-fr.vtt" kind="subtitles" srclang="fr" label="Français">\n</video>'
            },
            {
                title: 'Chapter Markers',
                description: 'Using track for chapter navigation instead of captions.',
                code: '<video controls>\n  <source src="lecture.mp4" type="video/mp4">\n  <track src="chapters.vtt" kind="chapters" srclang="en" label="Chapters">\n</video>'
            }
        ],
        attributes: [
            { name: 'src', type: 'URL', description: 'The URL of the WebVTT track file' },
            { name: 'kind', type: 'subtitles | captions | chapters | descriptions', description: 'The type of timed text' },
            { name: 'srclang', type: 'string', description: 'The language of the track content, as a language code' },
            { name: 'label', type: 'string', description: 'A human-readable label shown in the track selection menu' },
            { name: 'default', type: 'boolean', description: 'Marks this track as enabled by default' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always provide captions for video content with spoken dialogue — it is one of the most impactful accessibility improvements you can make',
            'Use kind="captions" (which includes non-speech sounds) rather than kind="subtitles" when the audience may be deaf or hard of hearing, not just non-native speakers',
            'Mark exactly one track as default per kind to avoid ambiguity',
            'Test that your WebVTT files are valid — malformed timing syntax will silently fail to display'
        ]
    },

    {
        id: 'style',
        title: '<style>',
        library: 'html',
        category: 'meta',
        description: 'The <style> element contains embedded CSS rules that apply directly to the current document, as an alternative to linking an external stylesheet with <link>. It normally lives inside <head>, though the scoped nature of modern CSS means it can technically appear in body content too.',
        syntax: '<style>\n  body { font-family: sans-serif; }\n</style>',
        examples: [
            {
                title: 'Basic Embedded Styles',
                description: 'Adding page-specific CSS directly in the document.',
                code: '<head>\n  <style>\n    body { margin: 0; font-family: system-ui; }\n    h1 { color: #1f2937; }\n  </style>\n</head>'
            },
            {
                title: 'Media-Specific Styles',
                description: 'Using the media attribute to apply styles conditionally.',
                code: '<style media="print">\n  nav, footer { display: none; }\n</style>'
            },
            {
                title: 'Component-Scoped Styles',
                description: 'A style block for a specific reusable component.',
                code: '<style>\n  .card { border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); padding: 16px; }\n</style>\n<div class="card">Card content</div>'
            }
        ],
        attributes: [
            { name: 'media', type: 'string', description: 'A media query specifying when the styles apply' },
            { name: 'type', type: 'string', description: 'Defaults to text/css; rarely needs to be set explicitly' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Prefer external stylesheets via <link> for anything beyond a handful of page-specific rules, for better caching and maintainability',
            'Use style blocks for critical above-the-fold CSS you want inlined for faster first paint',
            'Avoid inline style attributes on individual elements for anything reusable — a style block or external file keeps things DRY',
            'Keep embedded styles scoped and specific to avoid unexpectedly overriding global styles elsewhere on the site'
        ]
    },

    {
        id: 'title',
        title: '<title>',
        library: 'html',
        category: 'meta',
        description: 'The <title> element defines the title of the document, shown in the browser tab, bookmarks, and search engine results. Every HTML document should have exactly one <title>, placed inside <head>. It must contain only text — no nested elements.',
        syntax: '<title>Page Title</title>',
        examples: [
            {
                title: 'Basic Page Title',
                description: 'A simple, descriptive page title.',
                code: '<head>\n  <title>DevNexus - Learn to Code</title>\n</head>'
            },
            {
                title: 'Dynamic Page Title Pattern',
                description: 'A common convention for per-page titles with a site name suffix.',
                code: '<title>HTML Documentation | DevNexus</title>'
            },
            {
                title: 'Updating Title with JavaScript',
                description: 'Changing the title dynamically, such as for unread notifications.',
                code: '<script>\n  document.title = `(3) New Messages - DevNexus`;\n</script>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Every page needs a unique, descriptive title — it is one of the most important elements for both SEO and usability',
            'Keep titles concise, roughly under 60 characters, so they do not get truncated in search results',
            'Put the most important, distinguishing information first, since browser tabs truncate from the right',
            'Never leave title empty or generic like "Untitled Document" — it directly affects how your page appears in search results and browser history'
        ]
    },

    {
        id: 'menu',
        title: '<menu>',
        library: 'html',
        category: 'lists',
        description: 'The <menu> element is a semantic alternative to <ul>, intended specifically for lists of commands or interactive items — like a toolbar or context menu — rather than plain content lists. Browsers currently render it identically to <ul>, but it signals different intent to assistive technology and future tooling.',
        syntax: '<menu>\n  <li><button>Cut</button></li>\n  <li><button>Copy</button></li>\n</menu>',
        examples: [
            {
                title: 'Toolbar of Actions',
                description: 'Using menu for a group of command buttons.',
                code: '<menu>\n  <li><button onclick="save()">Save</button></li>\n  <li><button onclick="undo()">Undo</button></li>\n  <li><button onclick="redo()">Redo</button></li>\n</menu>'
            },
            {
                title: 'Styled Horizontal Menu',
                description: 'Laying out a menu of actions horizontally.',
                code: '<menu style="display: flex; gap: 8px; list-style: none; padding: 0;">\n  <li><button>Edit</button></li>\n  <li><button>Delete</button></li>\n  <li><button>Share</button></li>\n</menu>'
            },
            {
                title: 'Context Menu Items',
                description: 'A list of commands representing right-click style actions.',
                code: '<menu>\n  <li><button>Rename</button></li>\n  <li><button>Duplicate</button></li>\n  <li><button>Move to Trash</button></li>\n</menu>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use menu specifically for lists of commands or actions, not general content — use ul for that',
            'Wrap each command in a proper interactive element like button, not just plain text',
            'Since visual rendering matches ul by default, do not rely on menu for any built-in styling — use CSS as you would for any list',
            'Consider whether a native button toolbar without menu wrapping is simpler for straightforward cases'
        ]
    },

    {
        id: 'search',
        title: '<search>',
        library: 'html',
        category: 'semantic',
        description: 'The <search> element is a relatively new HTML5 semantic element that identifies a section of the page containing search or filtering controls — either for the site itself or for the current page\'s content. It gives assistive technology a reliable landmark to jump straight to search functionality.',
        syntax: '<search>\n  <form role="search">\n    <input type="search" name="q">\n  </form>\n</search>',
        examples: [
            {
                title: 'Site Search',
                description: 'Wrapping a site-wide search form.',
                code: '<search>\n  <form action="/search" method="get">\n    <label for="q">Search DevNexus</label>\n    <input type="search" id="q" name="q" placeholder="Search docs...">\n    <button type="submit">Search</button>\n  </form>\n</search>'
            },
            {
                title: 'Filter Controls',
                description: 'Using search to wrap filtering controls for a list of results.',
                code: '<search>\n  <label for="filter">Filter by language:</label>\n  <select id="filter">\n    <option>All</option>\n    <option>HTML</option>\n    <option>CSS</option>\n  </select>\n</search>'
            },
            {
                title: 'Header Search Bar',
                description: 'A compact search bar placed in the site header.',
                code: '<header>\n  <search>\n    <input type="search" placeholder="Quick search..." style="padding: 6px 12px; border-radius: 6px; border: 1px solid #d1d5db;">\n  </search>\n</header>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use search to wrap the form and controls for search/filter functionality, not the results themselves',
            'It can be used for both site-wide search and in-page filtering — both are valid uses',
            'Being a newer element, verify support in your target browsers; it degrades gracefully to an unstyled generic container in older ones',
            'Continue using a real form inside it for the actual search input — search is a landmark wrapper, not a replacement for form semantics'
        ]
    },

    {
        id: 'svg',
        title: '<svg>',
        library: 'html',
        category: 'media',
        description: 'The <svg> element embeds Scalable Vector Graphics directly in HTML — vector-based images built from shapes, paths, and text rather than pixels, so they stay crisp at any size. Unlike canvas, SVG content is made of real DOM elements that can be styled with CSS and targeted with JavaScript individually, making it ideal for icons, logos, and interactive diagrams.',
        syntax: '<svg width="100" height="100">\n  <circle cx="50" cy="50" r="40" fill="blue" />\n</svg>',
        examples: [
            {
                title: 'Basic Shapes',
                description: 'Drawing a circle and rectangle with SVG.',
                code: '<svg width="200" height="100">\n  <rect x="10" y="10" width="80" height="80" fill="#3b82f6" />\n  <circle cx="150" cy="50" r="40" fill="#10b981" />\n</svg>'
            },
            {
                title: 'Inline Icon',
                description: 'A simple checkmark icon built with an SVG path.',
                code: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\n  <path d="M20 6L9 17l-5-5" />\n</svg>'
            },
            {
                title: 'Styling SVG with CSS',
                description: 'Applying CSS to individual SVG elements, including on hover.',
                code: '<style>\n  .icon-circle { fill: #6b7280; transition: fill 0.2s; }\n  .icon-circle:hover { fill: #3b82f6; }\n</style>\n<svg width="60" height="60">\n  <circle class="icon-circle" cx="30" cy="30" r="25" />\n</svg>'
            }
        ],
        attributes: [
            { name: 'width', type: 'number', description: 'The rendered width of the SVG' },
            { name: 'height', type: 'number', description: 'The rendered height of the SVG' },
            { name: 'viewBox', type: 'string', description: 'Defines the internal coordinate system, enabling responsive scaling' },
            { name: 'fill', type: 'color', description: 'The fill color for shapes within the SVG' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use viewBox so the SVG scales cleanly to any container size rather than being locked to fixed pixel dimensions',
            'Prefer SVG over raster images (PNG/JPG) for icons and logos, since they stay sharp at any resolution and are typically smaller in file size',
            'Add a title element inside the SVG and appropriate ARIA attributes for accessibility, especially for meaningful (non-decorative) graphics',
            'Use CSS fill and stroke properties instead of hardcoding colors when the SVG needs to adapt to themes'
        ]
    },

    {
        id: 'html-strikethrough-underline',
        title: '<s> and <u>',
        library: 'html',
        category: 'text',
        description: 'The <s> element represents text that is no longer accurate or relevant — like an outdated price or a crossed-out item — rendered with strikethrough. The <u> element represents text with a non-textual annotation, such as marking a misspelled word or a proper name, rendered underlined. Neither implies emphasis or importance the way <strong>/<em> do.',
        syntax: '<s>No longer valid</s> and <u>Underlined text</u>',
        examples: [
            {
                title: 'Outdated Information',
                description: 'Marking text that is no longer accurate.',
                code: '<p><s>Store hours: 9am - 5pm</s> New hours: 8am - 6pm</p>'
            },
            {
                title: 'Completed Checklist Items',
                description: 'Using s for completed or crossed-off tasks.',
                code: '<ul>\n  <li><s>Set up project repository</s></li>\n  <li><s>Configure build pipeline</s></li>\n  <li>Write documentation</li>\n</ul>'
            },
            {
                title: 'Marking a Proper Name',
                description: 'Using u for a non-emphasis annotation, like flagging a name in a spellcheck-style context.',
                code: '<p>The book was written by <u>Fyodor Dostoevsky</u> in 1866.</p>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use <s> for content that is genuinely outdated or no longer relevant, and <del> instead if you are specifically tracking a document edit',
            'Avoid <u> purely for underline styling — since links are also underlined by default, it can confuse users into thinking underlined text is clickable',
            'Neither element implies importance — use <strong> or <em> when that is actually the intent',
            'Prefer CSS text-decoration for purely stylistic underline/strikethrough with no semantic meaning'
        ]
    },

    {
        id: 'body',
        title: '<body>',
        library: 'html',
        category: 'structure',
        description: 'The <body> element contains all the visible content of an HTML document — text, images, links, forms, and everything a user actually sees and interacts with in the browser. There can only be one <body> per document, and it must come after the <head> element. Unlike <head>, which holds metadata, everything inside <body> is rendered on the page.',
        syntax: '<body>\n  <h1>Visible content goes here</h1>\n</body>',
        examples: [
            {
                title: 'Basic Body Content',
                description: 'A body containing typical page content.',
                code: '<body>\n  <h1>Welcome</h1>\n  <p>This is the visible content of the page.</p>\n</body>'
            },
            {
                title: 'Body with Event Attributes',
                description: 'Attaching a page-load event directly to body (though addEventListener is generally preferred).',
                code: '<body onload="console.log(\'Page loaded\')">\n  <p>Content...</p>\n</body>'
            },
            {
                title: 'Full Document Structure',
                description: 'Seeing body in context alongside head.',
                code: '<!DOCTYPE html>\n<html lang="en">\n<head>\n  <title>My Page</title>\n</head>\n<body>\n  <h1>My Page</h1>\n  <p>Content visible to the user.</p>\n</body>\n</html>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Only one <body> element is allowed per document',
            'Keep metadata like <title>, <meta>, and <link> in <head>, not <body>',
            'Prefer addEventListener in a script over inline event attributes like onload for cleaner separation of concerns',
            'Everything a user can see or interact with belongs inside <body>'
        ]
    },

    {
        id: 'head',
        title: '<head>',
        library: 'html',
        category: 'structure',
        description: 'The <head> element contains metadata about the document — information that is not displayed directly on the page but is used by browsers, search engines, and other tools. This includes the page <title>, character encoding, linked stylesheets, scripts, and social media preview data. It must come before <body> and contains no visible content itself.',
        syntax: '<head>\n  <title>Page Title</title>\n  <meta charset="UTF-8">\n</head>',
        examples: [
            {
                title: 'Typical Head Contents',
                description: 'A well-formed head with the essentials.',
                code: '<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>DevNexus - Learn to Code</title>\n  <link rel="stylesheet" href="styles.css">\n</head>'
            },
            {
                title: 'Head with a Script',
                description: 'Linking an external script from the head, deferred so it does not block rendering.',
                code: '<head>\n  <title>My App</title>\n  <script src="app.js" defer></script>\n</head>'
            },
            {
                title: 'Head with Favicon and Description',
                description: 'Additional common head metadata.',
                code: '<head>\n  <title>My Blog</title>\n  <link rel="icon" href="/favicon.ico">\n  <meta name="description" content="Thoughts on web development.">\n</head>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always include a <title> and charset meta tag as early as possible in <head>',
            'Use defer or async on <script> tags in the head so they do not block page rendering',
            'Keep the head focused on metadata — no visible content belongs here',
            'Charset and viewport meta tags are typically placed first for performance reasons'
        ]
    },

    {
        id: 'html-bidi',
        title: '<bdi> and <bdo>',
        library: 'html',
        category: 'text',
        description: 'These elements handle bidirectional text — content that mixes left-to-right languages (like English) with right-to-left languages (like Arabic or Hebrew). <bdi> isolates a piece of text so its directionality does not affect surrounding text, useful for user-generated content like usernames where the language is unknown ahead of time. <bdo> explicitly overrides the natural text direction for its content.',
        syntax: '<bdi>Username</bdi>\n<bdo dir="rtl">Reversed direction text</bdo>',
        examples: [
            {
                title: 'Isolating User-Generated Content',
                description: 'Preventing an unknown-direction username from disrupting surrounding layout.',
                code: '<ul>\n  <li><bdi>Ahmad</bdi>: 95 points</li>\n  <li><bdi>Fatima</bdi>: 88 points</li>\n</ul>'
            },
            {
                title: 'Forcing Right-to-Left Direction',
                description: 'Using bdo to override the natural rendering direction.',
                code: '<p>Normal direction text.</p>\n<bdo dir="rtl">This text is forced right-to-left.</bdo>'
            }
        ],
        attributes: [
            { name: 'dir', type: 'ltr | rtl', description: 'Used on <bdo> to specify the forced text direction' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use <bdi> when displaying user-generated text (like names) whose language direction is not known in advance',
            'Use <bdo> sparingly, only when you genuinely need to override natural text direction, not for styling',
            'Prefer the CSS unicode-bidi and direction properties for broader layout-level direction control',
            'Test bidirectional content with real right-to-left text (Arabic, Hebrew) rather than assuming it works'
        ]
    },

    {
        id: 'html-colgroup',
        title: '<col> and <colgroup>',
        library: 'html',
        category: 'tables',
        description: 'The <colgroup> element groups one or more columns in a table for the purpose of applying styles, and <col> represents a single column within that group. This lets you style an entire column — like setting a background color or width — without adding a class to every individual cell in that column.',
        syntax: '<table>\n  <colgroup>\n    <col style="background: #f3f4f6;">\n    <col span="2">\n  </colgroup>\n  <!-- table rows -->\n</table>',
        examples: [
            {
                title: 'Styling a Single Column',
                description: 'Highlighting one column across every row.',
                code: '<table>\n  <colgroup>\n    <col style="background: #fef3c7;">\n    <col>\n    <col>\n  </colgroup>\n  <tr><th>Name</th><th>Role</th><th>Status</th></tr>\n  <tr><td>Alice</td><td>Dev</td><td>Active</td></tr>\n</table>'
            },
            {
                title: 'Spanning Multiple Columns',
                description: 'Using the span attribute to apply a style across several columns at once.',
                code: '<table>\n  <colgroup>\n    <col span="2" style="background: #e0f2fe;">\n    <col>\n  </colgroup>\n  <tr><th>Q1</th><th>Q2</th><th>Q3</th></tr>\n</table>'
            }
        ],
        attributes: [
            { name: 'span', type: 'number', description: 'The number of columns the col/colgroup applies to' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use colgroup/col only for column-level styling like width or background, not for content',
            'Place colgroup immediately after the opening table tag, before thead/tbody',
            'For most styling needs, targeting cells directly with CSS (nth-child) is more flexible than col',
            'col elements are void (self-closing) and take no content'
        ]
    },

    {
        id: 'dfn',
        title: '<dfn>',
        library: 'html',
        category: 'text',
        description: 'The <dfn> element marks the defining instance of a term — the specific place in the text where a term is first introduced and explained. Browsers typically render it in italics. It differs from <abbr> in that dfn is about introducing a concept or vocabulary word, not expanding an abbreviation.',
        syntax: '<p><dfn>Hoisting</dfn> is JavaScript\'s behavior of moving declarations to the top of scope.</p>',
        examples: [
            {
                title: 'Defining a Technical Term',
                description: 'Introducing and defining a term the first time it appears.',
                code: '<p>A <dfn>closure</dfn> is a function bundled together with references to its surrounding state.</p>'
            },
            {
                title: 'Defining Term with a Title Attribute',
                description: 'Adding a short definition as a tooltip.',
                code: '<p><dfn title="A reusable block of code that performs a task">Function</dfn> declarations start with the function keyword.</p>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use <dfn> only at the point where a term is actually being defined, not every time it is mentioned afterward',
            'Combine with a title attribute or nearby explanation so the definition is genuinely available, not just implied by italics',
            'Consider pairing with a glossary section using a definition list for a list of defined terms',
            'Do not use dfn purely for italic styling on unrelated text'
        ]
    },

    {
        id: 'hgroup',
        title: '<hgroup>',
        library: 'html',
        category: 'structure',
        description: 'The <hgroup> element groups a heading with one or more subheadings or taglines, treating them as a single unit in the document outline. It is commonly used to pair a main title with a subtitle, so the subtitle does not get counted as its own separate heading level by accessibility tools.',
        syntax: '<hgroup>\n  <h1>Main Title</h1>\n  <p>Subtitle or tagline</p>\n</hgroup>',
        examples: [
            {
                title: 'Title with Subtitle',
                description: 'Grouping a page title with a descriptive subtitle.',
                code: '<hgroup>\n  <h1>DevNexus</h1>\n  <p>Learn to code, one tag at a time.</p>\n</hgroup>'
            },
            {
                title: 'Article Title with Byline',
                description: 'Using hgroup for an article heading and its byline together.',
                code: '<article>\n  <hgroup>\n    <h2>Understanding the Event Loop</h2>\n    <p>A deep dive into how JavaScript handles async code</p>\n  </hgroup>\n  <p>Article content...</p>\n</article>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use hgroup specifically to pair a heading with a subtitle or tagline, not as a general wrapper for multiple headings',
            'Keep the subtitle content as a paragraph or similar, not another heading level',
            'Do not overuse hgroup — most headings do not need a subtitle wrapper',
            'Test how assistive technology in your target browsers handles hgroup, since support has evolved over time'
        ]
    },

    {
        id: 'li',
        title: '<li>',
        library: 'html',
        category: 'lists',
        description: 'The <li> element represents an individual item within a list — <ul>, <ol>, or <menu>. Its rendering depends on its parent: inside <ol>, browsers add sequential numbering; inside <ul>, they add bullet points. The value attribute lets you override an item\'s number specifically within an ordered list.',
        syntax: '<ul>\n  <li>List item content</li>\n</ul>',
        examples: [
            {
                title: 'Basic List Items',
                description: 'Simple items within an unordered list.',
                code: '<ul>\n  <li>First item</li>\n  <li>Second item</li>\n  <li>Third item</li>\n</ul>'
            },
            {
                title: 'List Item with Rich Content',
                description: 'A list item can contain more than plain text.',
                code: '<ul>\n  <li>\n    <strong>HTML</strong> — the structure of the web\n  </li>\n  <li>\n    <strong>CSS</strong> — the styling of the web\n  </li>\n</ul>'
            },
            {
                title: 'Overriding a Specific Item Number',
                description: 'Using the value attribute inside an ordered list.',
                code: '<ol>\n  <li>Step one</li>\n  <li value="5">Jump to step five</li>\n  <li>Step six</li>\n</ol>'
            }
        ],
        attributes: [
            { name: 'value', type: 'number', description: 'Overrides the item\'s number when inside an <ol> (has no effect inside <ul>)' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Only use <li> as a direct child of <ul>, <ol>, or <menu>',
            'A list item can contain block-level content like paragraphs or nested lists, not just plain text',
            'Use the value attribute sparingly, only when you genuinely need to break the natural numbering sequence',
            'Avoid using li outside of a list container just to get default spacing or bullet styling'
        ]
    },

    {
        id: 'html-optgroup-option',
        title: '<optgroup> and <option>',
        library: 'html',
        category: 'forms',
        description: 'The <option> element defines a single choice within a <select> dropdown or a <datalist>. The <optgroup> element groups related options together under a shared label, making long dropdowns easier to scan. Each option\'s value attribute is what actually gets submitted with the form, while its text content is what the user sees.',
        syntax: '<select>\n  <optgroup label="Group Name">\n    <option value="1">Choice One</option>\n  </optgroup>\n</select>',
        examples: [
            {
                title: 'Options Without Grouping',
                description: 'A simple flat list of options.',
                code: '<select name="size">\n  <option value="s">Small</option>\n  <option value="m">Medium</option>\n  <option value="l">Large</option>\n</select>'
            },
            {
                title: 'Grouped Options',
                description: 'Organizing related options into labeled groups.',
                code: '<select name="framework">\n  <optgroup label="Frontend">\n    <option value="react">React</option>\n    <option value="vue">Vue</option>\n  </optgroup>\n  <optgroup label="Backend">\n    <option value="express">Express</option>\n    <option value="laravel">Laravel</option>\n  </optgroup>\n</select>'
            },
            {
                title: 'Disabled Option',
                description: 'Preventing a specific choice from being selected.',
                code: '<select>\n  <option value="free">Free Plan</option>\n  <option value="pro" disabled>Pro Plan (coming soon)</option>\n</select>'
            }
        ],
        attributes: [
            { name: 'value', type: 'string', description: 'The value submitted with the form when this option is selected' },
            { name: 'selected', type: 'boolean', description: 'Marks this option as selected by default' },
            { name: 'disabled', type: 'boolean', description: 'Prevents this specific option from being selected' },
            { name: 'label', type: 'string', description: 'Used on optgroup to set the group\'s visible heading' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always set a meaningful value attribute — without one, the option\'s text content is submitted instead, which is easy to forget',
            'Use optgroup to organize dropdowns with more than roughly 8-10 options into logical categories',
            'Use the disabled attribute on options that are not currently available rather than removing them entirely',
            'Keep option text short enough to display fully in the dropdown without truncation'
        ]
    },

    {
        id: 'html-ruby',
        title: '<ruby>, <rt>, <rp>',
        library: 'html',
        category: 'text',
        description: 'Ruby annotations display small pronunciation or translation text above (or next to) East Asian characters, commonly used for showing furigana over Japanese kanji or pinyin over Chinese characters. The <ruby> element wraps the base text and its annotation, <rt> holds the annotation text itself, and <rp> provides fallback parentheses for browsers that do not support ruby rendering.',
        syntax: '<ruby>\n  漢字<rt>かんじ</rt>\n</ruby>',
        examples: [
            {
                title: 'Basic Ruby Annotation',
                description: 'Showing pronunciation above a kanji character.',
                code: '<ruby>\n  東京<rt>とうきょう</rt>\n</ruby>'
            },
            {
                title: 'With Fallback Parentheses',
                description: 'Using rp so browsers without ruby support show the reading in parentheses instead.',
                code: '<ruby>\n  漢字<rp>(</rp><rt>かんじ</rt><rp>)</rp>\n</ruby>'
            },
            {
                title: 'Multiple Annotated Characters',
                description: 'Annotating several characters within a sentence.',
                code: '<p>\n  <ruby>今日<rt>きょう</rt></ruby>は\n  <ruby>晴<rt>は</rt></ruby>れです。\n</p>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Always include rp fallback parentheses so the pronunciation remains readable in browsers without ruby support',
            'Use ruby specifically for pronunciation guides or short annotations above text, primarily for East Asian languages',
            'Keep rt content short — it is meant to be a brief annotation, not a full translation',
            'Test rendering across browsers, since ruby support and default styling can vary'
        ]
    },

    {
        id: 'wbr',
        title: '<wbr>',
        library: 'html',
        category: 'text',
        description: 'The <wbr> (word break opportunity) element tells the browser where it is allowed to insert a line break if needed, without forcing one. It is useful for long unbroken strings like URLs or compound words that would otherwise overflow their container without any natural spaces to break on.',
        syntax: 'A<wbr>very<wbr>long<wbr>word',
        examples: [
            {
                title: 'Breaking a Long URL',
                description: 'Allowing a long URL to wrap gracefully instead of overflowing.',
                code: '<p>Visit example.com/<wbr>a/<wbr>very/<wbr>long/<wbr>path/<wbr>that/<wbr>could/<wbr>overflow</p>'
            },
            {
                title: 'Breaking a Compound Word',
                description: 'Suggesting a break point in a long compound term.',
                code: '<p>The word<br>super<wbr>cali<wbr>fragilistic<wbr>expialidocious is famously long.</p>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use wbr only for genuinely long, unbreakable strings that risk overflowing their container',
            'Prefer CSS properties like overflow-wrap or word-break for general text wrapping behavior',
            'wbr suggests a break point — it does not force one the way <br> does',
            'Do not overuse wbr throughout regular prose; it is meant for edge cases like URLs and long identifiers'
        ]
    },

    {
        id: 'data',
        title: '<data>',
        library: 'html',
        category: 'text',
        description: 'The <data> element links a piece of content with a machine-readable value via its value attribute, similar in spirit to <time> but for values other than dates — like product IDs, prices, or measurements. This lets scripts and other tools programmatically access the underlying value while humans see the friendly, formatted text.',
        syntax: '<data value="12345">Product #12345</data>',
        examples: [
            {
                title: 'Product Listing',
                description: 'Attaching a machine-readable product ID to its display name.',
                code: '<ul>\n  <li><data value="SKU-001">Wireless Mouse</data> - $24.99</li>\n  <li><data value="SKU-002">Mechanical Keyboard</data> - $89.99</li>\n</ul>'
            },
            {
                title: 'Formatted Measurement',
                description: 'Showing a human-friendly value with a precise machine value behind it.',
                code: '<p>Distance: <data value="42195">26.2 miles</data></p>'
            }
        ],
        attributes: [
            { name: 'value', type: 'string', description: 'The machine-readable value associated with the content' }
        ],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use <time> instead of <data> specifically for dates and times — data is for everything else',
            'Use data when a script elsewhere on the page needs to read the underlying value (e.g., for sorting or filtering)',
            'Keep the visible content human-readable while the value attribute holds the precise machine value',
            'Do not use data purely as a generic wrapper — only when there is a genuine machine-readable value to attach'
        ]
    },

    {
        id: 'template',
        title: '<template>',
        library: 'html',
        category: 'scripting',
        description: 'The <template> element holds HTML content that the browser parses but does not render or execute when the page loads. Its content is inert — scripts inside it will not run, and images inside it will not load — until it is cloned into the visible DOM via JavaScript. This makes it a clean way to define reusable markup fragments for dynamic UI without building HTML strings in JavaScript.',
        syntax: '<template id="my-template">\n  <p>Reusable content</p>\n</template>',
        examples: [
            {
                title: 'Basic Template Definition',
                description: 'A template holding markup that stays hidden until cloned.',
                code: '<template id="card-template">\n  <div class="card">\n    <h3></h3>\n    <p></p>\n  </div>\n</template>'
            },
            {
                title: 'Cloning a Template with JavaScript',
                description: 'Using the template to generate repeated list items dynamically.',
                code: '<template id="item-template">\n  <li class="item"></li>\n</template>\n<ul id="list"></ul>\n\n<script>\n  const tpl = document.getElementById(\'item-template\');\n  const list = document.getElementById(\'list\');\n  [\'HTML\', \'CSS\', \'JS\'].forEach(text => {\n    const clone = tpl.content.cloneNode(true);\n    clone.querySelector(\'.item\').textContent = text;\n    list.appendChild(clone);\n  });\n</script>'
            }
        ],
        attributes: [],
        browserSupport: DEFAULT_SUPPORT,
        bestPractices: [
            'Use template for markup that will be cloned and reused multiple times via JavaScript, like list items or cards',
            'Remember that content inside a template is inert — access it via the element\'s .content property, not by querying it directly',
            'Prefer template over building HTML strings with string concatenation or innerHTML for repeated UI patterns',
            'Combine with document.importNode or cloneNode(true) to insert a copy without mutating the original template'
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



    {
        id: 'js-variables',
        title: 'Variables: var, let, const',
        library: 'js',
        category: 'basics',
        description: 'JavaScript has three ways to declare variables. var is the original way, function-scoped and hoisted with a default value of undefined. let, introduced in ES6, is block-scoped and can be reassigned. const is also block-scoped but cannot be reassigned after its initial value is set. Modern JavaScript strongly favors let and const over var.',
        syntax: 'let name = value;\nconst name = value;\nvar name = value;',
        examples: [
            {
                title: 'let vs const',
                description: 'Choosing between let and const based on whether reassignment is needed.',
                code: 'let score = 0;\nscore = score + 10; // reassignment is fine\n\nconst maxPlayers = 4;\n// maxPlayers = 5; // TypeError: Assignment to constant variable\n\n// const objects/arrays can still be mutated internally\nconst user = { name: "Alice" };\nuser.name = "Bob"; // allowed - the reference itself did not change'
            },
            {
                title: 'Block Scope vs Function Scope',
                description: 'The key difference between var and let/const.',
                code: 'if (true) {\n  var x = 1;\n  let y = 2;\n}\nconsole.log(x); // 1 - var leaked out of the block\nconsole.log(y); // ReferenceError: y is not defined\n\nfor (let i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 0);\n}\n// Prints 0, 1, 2 - each loop iteration gets its own \'i\' with let'
            }
        ],
        bestPractices: [
            'Default to const, and only use let when you know the variable needs to be reassigned',
            'Avoid var in modern code - its function scoping and hoisting behavior are common sources of bugs',
            'Declare variables as close as possible to where they are first used',
            'Remember that const prevents reassignment, not mutation - objects and arrays declared with const can still have their contents changed'
        ]
    },

    {
        id: 'js-data-types',
        title: 'Data Types',
        library: 'js',
        category: 'basics',
        description: 'JavaScript has seven primitive data types - string, number, boolean, undefined, null, bigint, and symbol - plus the object type, which includes arrays, functions, and plain objects. JavaScript is dynamically typed, meaning a variable can hold any type and that type can change. The typeof operator reports a value\'s type at runtime.',
        syntax: 'let value = "text"; // string, number, boolean, etc.\ntypeof value; // "string"',
        examples: [
            {
                title: 'The Primitive Types',
                description: 'Examples of each primitive type and what typeof reports for it.',
                code: 'typeof "hello";        // "string"\ntypeof 42;              // "number"\ntypeof 3.14;            // "number" - no separate float type\ntypeof true;            // "boolean"\ntypeof undefined;       // "undefined"\ntypeof null;            // "object" - a famous long-standing JS quirk\ntypeof 10n;             // "bigint"\ntypeof Symbol("id");    // "symbol"\ntypeof { a: 1 };        // "object"\ntypeof [1, 2, 3];       // "object" - arrays are objects too\ntypeof function(){};    // "function"'
            },
            {
                title: 'Dynamic Typing',
                description: 'A variable\'s type can change as new values are assigned to it.',
                code: 'let value = "hello"; // string\nvalue = 42;           // now a number\nvalue = true;         // now a boolean\nvalue = { a: 1 };     // now an object\n// No errors - JavaScript allows this by design'
            }
        ],
        bestPractices: [
            'Use typeof to check a value\'s type at runtime, but remember typeof null is "object" due to a long-standing language quirk',
            'Use Array.isArray() rather than typeof to check specifically for arrays, since typeof reports both as "object"',
            'Prefer === over == to avoid unexpected type coercion during comparisons',
            'Consider TypeScript if your project would benefit from catching type mismatches before runtime'
        ]
    },

    {
        id: 'js-operators-arithmetic',
        title: 'Arithmetic Operators',
        library: 'js',
        category: 'basics',
        description: 'Arithmetic operators perform mathematical calculations on numbers: addition (+), subtraction (-), multiplication (*), division (/), remainder/modulo (%), and exponentiation (**). The + operator also performs string concatenation when either operand is a string. Increment (++) and decrement (--) adjust a variable by one.',
        syntax: 'a + b, a - b, a * b, a / b, a % b, a ** b',
        examples: [
            {
                title: 'Basic Arithmetic',
                description: 'The core arithmetic operators in action.',
                code: 'console.log(10 + 5);  // 15\nconsole.log(10 - 5);  // 5\nconsole.log(10 * 5);  // 50\nconsole.log(10 / 5);  // 2\nconsole.log(10 % 3);  // 1 (remainder)\nconsole.log(2 ** 3);  // 8 (2 to the power of 3)'
            },
            {
                title: 'Increment, Decrement, and String Concatenation',
                description: 'Common gotchas with + and the increment/decrement operators.',
                code: 'let count = 5;\ncount++; // count is now 6\ncount--; // count is now 5 again\n\nconsole.log(1 + 1);     // 2 (numeric addition)\nconsole.log("1" + 1);   // "11" (string concatenation)\nconsole.log("5" - 1);   // 4 (- forces numeric conversion)'
            }
        ],
        bestPractices: [
            'Be careful with + when mixing strings and numbers - it concatenates rather than adds if either side is a string',
            'Use Number() or parseInt()/parseFloat() to explicitly convert strings to numbers before arithmetic when the source is uncertain',
            'Prefer x += 1 or x++ consistently within a codebase for readability',
            'Watch for floating-point precision issues (e.g., 0.1 + 0.2 !== 0.3) when comparing decimal results directly'
        ]
    },

    {
        id: 'js-operators-assignment',
        title: 'Assignment Operators',
        library: 'js',
        category: 'basics',
        description: 'Assignment operators assign values to variables. Beyond the basic = operator, compound assignment operators combine an operation with assignment in one step, like += to add and assign. Logical assignment operators (&&=, ||=, ??=), introduced more recently, combine a logical check with assignment.',
        syntax: 'x = y, x += y, x -= y, x *= y, x /= y, x ??= y',
        examples: [
            {
                title: 'Compound Arithmetic Assignment',
                description: 'Combining an operation and assignment in one step.',
                code: 'let total = 10;\ntotal += 5;  // total = total + 5 -> 15\ntotal -= 3;  // total = total - 3 -> 12\ntotal *= 2;  // total = total * 2 -> 24\ntotal /= 4;  // total = total / 4 -> 6'
            },
            {
                title: 'Logical Assignment Operators',
                description: 'Assigning a value only under certain conditions.',
                code: 'let config = { theme: null };\n\n// Only assigns if the current value is null/undefined\nconfig.theme ??= "dark";\nconsole.log(config.theme); // "dark"\n\nconfig.theme ??= "light"; // no-op, theme is already set\nconsole.log(config.theme); // still "dark"\n\nlet isActive = true;\nisActive &&= false; // only assigns if isActive was truthy\nconsole.log(isActive); // false'
            }
        ],
        bestPractices: [
            'Use ??= specifically for "assign a default if null or undefined", since it will not overwrite legitimate falsy values like 0 or ""',
            'Prefer compound operators (+=, -=) over spelling out x = x + y for cleaner, more readable code',
            'Reach for &&= and ||= sparingly - they can make control flow less obvious to readers unfamiliar with them',
            'Avoid chaining too many assignment operators in a single line, as it hurts readability'
        ]
    },

    {
        id: 'js-operators-comparison',
        title: 'Comparison Operators',
        library: 'js',
        category: 'basics',
        description: 'Comparison operators compare two values and return a boolean. == and != perform type coercion before comparing (loose equality), while === and !== compare both value and type without coercion (strict equality). Relational operators (<, >, <=, >=) compare numeric or string ordering.',
        syntax: 'a === b, a !== b, a > b, a <= b',
        examples: [
            {
                title: 'Strict vs Loose Equality',
                description: 'The critical difference between == and ===.',
                code: 'console.log(5 == "5");   // true - "5" is coerced to a number\nconsole.log(5 === "5");  // false - different types\nconsole.log(0 == false); // true - false is coerced to 0\nconsole.log(null == undefined);  // true\nconsole.log(null === undefined); // false'
            },
            {
                title: 'Relational Comparisons',
                description: 'Comparing numbers and strings for ordering.',
                code: 'console.log(10 > 5);   // true\nconsole.log(10 <= 10); // true\nconsole.log("apple" < "banana"); // true - lexicographic (alphabetical) comparison\nconsole.log("10" < "9"); // true - compared as strings, not numbers!'
            }
        ],
        bestPractices: [
            'Always prefer === and !== over == and != to avoid unpredictable type coercion bugs',
            'Be aware that comparing strings uses lexicographic (dictionary) order, which can surprise you with numeric-looking strings',
            'Use Object.is() for the rare edge cases where even === behaves unexpectedly (like NaN and -0)',
            'Explicitly convert types with Number() or String() before comparing rather than relying on implicit coercion'
        ]
    },

    {
        id: 'js-operators-logical',
        title: 'Logical Operators',
        library: 'js',
        category: 'basics',
        description: 'Logical operators combine or invert boolean expressions. && (AND) returns the first falsy value or the last value if all are truthy. || (OR) returns the first truthy value or the last value if all are falsy. ! (NOT) inverts a boolean. The nullish coalescing operator (??) returns the right side only when the left is null or undefined.',
        syntax: 'a && b, a || b, !a, a ?? b',
        examples: [
            {
                title: 'AND, OR, and NOT',
                description: 'Basic logical operator behavior, including short-circuiting.',
                code: 'console.log(true && false);  // false\nconsole.log(true || false);  // true\nconsole.log(!true);          // false\n\n// Short-circuit evaluation for default values\nconst name = "" || "Guest";\nconsole.log(name); // "Guest" - "" is falsy\n\n// && for conditional execution\nconst isLoggedIn = true;\nisLoggedIn && console.log("Welcome back!");'
            },
            {
                title: 'Nullish Coalescing vs OR',
                description: 'Why ?? is often safer than || for default values.',
                code: 'const count = 0;\nconsole.log(count || 10); // 10 - 0 is falsy, so || moves on\nconsole.log(count ?? 10); // 0 - 0 is not null/undefined, so ?? keeps it\n\nconst config = { retries: 0 };\nconst retries = config.retries ?? 3; // correctly keeps 0, not 3'
            }
        ],
        bestPractices: [
            'Use ?? instead of || when 0, "", or false should be treated as valid values rather than replaced with a default',
            'Take advantage of && for concise conditional execution, but avoid it when the intent would be clearer as a full if statement',
            'Remember that && and || return one of their operand values, not necessarily a boolean',
            'Combine logical operators with optional chaining (?.) for safe, readable conditional access'
        ]
    },

    {
        id: 'js-operators-bitwise',
        title: 'Bitwise Operators',
        library: 'js',
        category: 'basics',
        description: 'Bitwise operators treat numbers as 32-bit binary sequences and operate on them bit by bit. They include AND (&), OR (|), XOR (^), NOT (~), left shift (<<), right shift (>>), and unsigned right shift (>>>). These are rarely needed in typical web development but appear in performance-sensitive code, flags/permissions systems, and low-level algorithms.',
        syntax: 'a & b, a | b, a ^ b, ~a, a << b, a >> b',
        examples: [
            {
                title: 'Basic Bitwise Operations',
                description: 'How bitwise operators manipulate binary representations of numbers.',
                code: 'console.log(5 & 1);  // 1  (0101 & 0001 = 0001)\nconsole.log(5 | 1);  // 5  (0101 | 0001 = 0101)\nconsole.log(5 ^ 1);  // 4  (0101 ^ 0001 = 0100)\nconsole.log(~5);     // -6 (bitwise NOT inverts all bits)\nconsole.log(5 << 1); // 10 (shifts bits left, doubling the value)\nconsole.log(5 >> 1); // 2  (shifts bits right, halving and flooring)'
            },
            {
                title: 'Using Bitwise Flags',
                description: 'A common real-world use case: combining permission flags into a single number.',
                code: 'const READ = 1;   // 001\nconst WRITE = 2;  // 010\nconst EXECUTE = 4; // 100\n\nconst userPermissions = READ | WRITE; // 011 (3)\n\nconst canWrite = (userPermissions & WRITE) !== 0;\nconsole.log(canWrite); // true'
            }
        ],
        bestPractices: [
            'Reach for bitwise operators only when you have a genuine binary/flag-based use case - they hurt readability otherwise',
            'Do not confuse & and | with the logical && and || operators - they behave very differently',
            'Use Number.isInteger() checks before bitwise operations, since they implicitly convert operands to 32-bit integers',
            'Document flag-based bitwise code clearly, since it is one of the least intuitive parts of JavaScript for most readers'
        ]
    },

    {
        id: 'js-ternary-operator',
        title: 'Ternary Operator',
        library: 'js',
        category: 'basics',
        description: 'The ternary (conditional) operator is a compact one-line alternative to an if...else statement. It takes the form condition ? valueIfTrue : valueIfFalse, and evaluates to whichever value matches the condition. It is an expression, meaning it produces a value that can be assigned or used directly, unlike an if statement.',
        syntax: 'condition ? valueIfTrue : valueIfFalse',
        examples: [
            {
                title: 'Basic Ternary',
                description: 'Assigning a value based on a condition in a single line.',
                code: 'const age = 20;\nconst status = age >= 18 ? "adult" : "minor";\nconsole.log(status); // "adult"'
            },
            {
                title: 'Ternary in JSX-style Rendering',
                description: 'A common pattern for conditional rendering in template-like code.',
                code: 'const isLoggedIn = true;\nconst message = isLoggedIn\n  ? `Welcome back!`\n  : `Please log in.`;\n\nconsole.log(message);\n\n// Nested ternaries are possible but hurt readability - use sparingly\nconst grade = 85;\nconst letter = grade >= 90 ? "A" : grade >= 80 ? "B" : grade >= 70 ? "C" : "F";'
            }
        ],
        bestPractices: [
            'Use the ternary operator for simple, single-condition value assignments - reach for if...else when logic gets more complex',
            'Avoid deeply nested ternaries, as they quickly become hard to read - a switch or if/else chain is often clearer',
            'Wrap ternaries in parentheses when used inside template literals or JSX for clarity',
            'Remember it is an expression (produces a value), unlike if/else which is a statement'
        ]
    },

    {
        id: 'js-template-literals',
        title: 'Template Literals',
        library: 'js',
        category: 'basics',
        description: 'Template literals, introduced in ES6, use backticks (`) instead of quotes and allow embedded expressions via ${expression} syntax, along with genuine multi-line strings without needing escape characters. They largely replace manual string concatenation with + for building dynamic strings.',
        syntax: '`text ${expression} more text`',
        examples: [
            {
                title: 'String Interpolation',
                description: 'Embedding variables and expressions directly inside a string.',
                code: 'const name = "Alice";\nconst age = 25;\n\n// Old way\nconsole.log("Hello, " + name + "! You are " + age + " years old.");\n\n// Template literal way\nconsole.log(`Hello, ${name}! You are ${age} years old.`);\n\n// Expressions work too, not just variables\nconsole.log(`Next year you will be ${age + 1}.`);'
            },
            {
                title: 'Multi-line Strings',
                description: 'Writing strings that span multiple lines without escape characters.',
                code: 'const message = `This is line one.\nThis is line two.\nThis is line three.`;\n\nconsole.log(message);\n\n// Useful for building small HTML snippets too\nconst html = `<div class="card">\n  <h2>${name}</h2>\n  <p>Age: ${age}</p>\n</div>`;'
            }
        ],
        bestPractices: [
            'Prefer template literals over string concatenation with + for anything involving variables',
            'Use them for multi-line strings instead of manually inserting \\n characters',
            'Keep embedded expressions simple - move complex logic out into a variable before interpolating it',
            'Remember template literals are still just strings - they do not automatically escape HTML, which matters for security when inserting user input into the DOM'
        ]
    },

    {
        id: 'js-functions',
        title: 'Functions: Declarations & Expressions',
        library: 'js',
        category: 'basics',
        description: 'Functions are reusable blocks of code. A function declaration (using the function keyword with a name) is hoisted, meaning it can be called before its definition in the code. A function expression assigns a function to a variable and is not hoisted the same way - it must be defined before it is called.',
        syntax: 'function name(params) { /* body */ }\nconst name = function(params) { /* body */ };',
        examples: [
            {
                title: 'Function Declaration',
                description: 'A named function that can be called before its definition due to hoisting.',
                code: 'greet("Alice"); // works even though called before the definition below\n\nfunction greet(name) {\n  console.log(`Hello, ${name}!`);\n}'
            },
            {
                title: 'Function Expression',
                description: 'Assigning an anonymous function to a variable - not hoisted.',
                code: 'const add = function(a, b) {\n  return a + b;\n};\n\nconsole.log(add(3, 4)); // 7\n\n// Named function expressions are also possible, useful for stack traces\nconst multiply = function multiply(a, b) {\n  return a * b;\n};'
            },
            {
                title: 'Default and Return Values',
                description: 'Giving parameters default values and returning results.',
                code: 'function calculateTotal(price, taxRate = 0.1) {\n  return price + price * taxRate;\n}\n\nconsole.log(calculateTotal(100));       // 110 - uses default tax rate\nconsole.log(calculateTotal(100, 0.2));  // 120 - overrides default'
            }
        ],
        bestPractices: [
            'Use function declarations for top-level, reusable functions you want available throughout a file regardless of definition order',
            'Use function expressions or arrow functions when defining a function inline (like a callback)',
            'Give parameters default values instead of manually checking for undefined inside the function body',
            'Keep functions focused on a single responsibility for easier testing and reuse'
        ]
    },

    {
        id: 'js-function-parameters',
        title: 'Function Parameters: Default & Rest',
        library: 'js',
        category: 'basics',
        description: 'Default parameters let you specify a fallback value used when an argument is omitted or undefined. Rest parameters, written with ...name, collect any remaining arguments into a real array, letting a function accept a variable number of arguments cleanly.',
        syntax: 'function name(param = defaultValue, ...rest) { }',
        examples: [
            {
                title: 'Default Parameters',
                description: 'Providing fallback values for missing arguments.',
                code: 'function greet(name = "Guest", greeting = "Hello") {\n  console.log(`${greeting}, ${name}!`);\n}\n\ngreet();                    // "Hello, Guest!"\ngreet("Alice");             // "Hello, Alice!"\ngreet("Bob", "Hi");         // "Hi, Bob!"'
            },
            {
                title: 'Rest Parameters',
                description: 'Collecting a variable number of arguments into an array.',
                code: 'function sum(...numbers) {\n  return numbers.reduce((total, n) => total + n, 0);\n}\n\nconsole.log(sum(1, 2, 3));       // 6\nconsole.log(sum(1, 2, 3, 4, 5)); // 15\n\nfunction logDetails(name, ...tags) {\n  console.log(name, "->", tags);\n}\nlogDetails("Article", "js", "tutorial", "web"); // "Article -> [js, tutorial, web]"'
            }
        ],
        bestPractices: [
            'Place rest parameters last in the parameter list - they must be, since they collect everything remaining',
            'Prefer default parameters over manually checking `if (param === undefined)` inside the function body',
            'Use rest parameters instead of the old `arguments` object for a real array with all standard array methods available',
            'Keep the number of parameters manageable - beyond 3-4, consider accepting a single options object instead'
        ]
    },

    {
        id: 'js-destructuring',
        title: 'Destructuring',
        library: 'js',
        category: 'basics',
        description: 'Destructuring lets you unpack values from arrays or properties from objects into distinct variables in a single concise statement, instead of accessing each one individually. It works with arrays (by position) and objects (by property name), and can be nested for deeply structured data.',
        syntax: 'const { prop } = object;\nconst [first, second] = array;',
        examples: [
            {
                title: 'Object Destructuring',
                description: 'Extracting object properties into variables, including renaming and defaults.',
                code: 'const user = { name: "Alice", age: 25, city: "London" };\n\nconst { name, age } = user;\nconsole.log(name, age); // "Alice" 25\n\n// Renaming while destructuring\nconst { name: userName } = user;\nconsole.log(userName); // "Alice"\n\n// Default values for missing properties\nconst { country = "Unknown" } = user;\nconsole.log(country); // "Unknown"'
            },
            {
                title: 'Array Destructuring',
                description: 'Extracting array elements by position.',
                code: 'const colors = ["red", "green", "blue"];\nconst [first, second] = colors;\nconsole.log(first, second); // "red" "green"\n\n// Skipping elements\nconst [, , third] = colors;\nconsole.log(third); // "blue"\n\n// Swapping variables in one line\nlet a = 1, b = 2;\n[a, b] = [b, a];\nconsole.log(a, b); // 2 1'
            },
            {
                title: 'Destructuring Function Parameters',
                description: 'A very common pattern - destructuring directly in a function signature.',
                code: 'function displayUser({ name, age }) {\n  console.log(`${name} is ${age} years old`);\n}\n\ndisplayUser({ name: "Bob", age: 30, city: "Leeds" });\n// city is ignored - only name and age are pulled out'
            }
        ],
        bestPractices: [
            'Use destructuring for function parameters that are objects - it documents exactly what properties the function relies on',
            'Provide default values during destructuring instead of separate fallback checks afterward',
            'Use nested destructuring sparingly - beyond two levels it often becomes harder to read than explicit access',
            'Combine with rest syntax (const { a, ...rest } = obj) to pull out specific properties and keep the remainder together'
        ]
    },

    {
        id: 'js-spread-operator',
        title: 'Spread Operator',
        library: 'js',
        category: 'basics',
        description: 'The spread operator (...) expands an iterable (like an array) or an object\'s own enumerable properties into individual elements. It is commonly used to copy arrays/objects, merge them together, or pass array elements as individual function arguments.',
        syntax: '[...array], { ...object }, func(...args)',
        examples: [
            {
                title: 'Spreading Arrays',
                description: 'Copying and merging arrays without mutating the originals.',
                code: 'const nums = [1, 2, 3];\nconst copy = [...nums]; // a new, independent array\n\nconst moreNums = [...nums, 4, 5];\nconsole.log(moreNums); // [1, 2, 3, 4, 5]\n\nconst a = [1, 2];\nconst b = [3, 4];\nconst combined = [...a, ...b];\nconsole.log(combined); // [1, 2, 3, 4]'
            },
            {
                title: 'Spreading Objects',
                description: 'Copying and merging objects, useful for immutable state updates.',
                code: 'const user = { name: "Alice", age: 25 };\nconst updatedUser = { ...user, age: 26 }; // overrides age, keeps the rest\nconsole.log(updatedUser); // { name: "Alice", age: 26 }\n\nconst defaults = { theme: "light", fontSize: 14 };\nconst userPrefs = { fontSize: 18 };\nconst settings = { ...defaults, ...userPrefs }; // later spreads override earlier ones\nconsole.log(settings); // { theme: "light", fontSize: 18 }'
            },
            {
                title: 'Spreading into Function Arguments',
                description: 'Passing array elements as separate arguments.',
                code: 'function sum(a, b, c) {\n  return a + b + c;\n}\n\nconst numbers = [1, 2, 3];\nconsole.log(sum(...numbers)); // 6, equivalent to sum(1, 2, 3)\n\nconsole.log(Math.max(...[4, 8, 2, 9])); // 9'
            }
        ],
        bestPractices: [
            'Use spread for immutable updates in state management (like React) instead of mutating objects/arrays directly',
            'Remember spread only creates a shallow copy - nested objects/arrays are still shared by reference',
            'When merging objects, later spreads override earlier ones for matching keys - order matters',
            'Prefer spread over Object.assign() or Array.prototype.concat() for most modern merging needs, as it is more concise'
        ]
    },

    {
        id: 'js-if-else-switch',
        title: 'if...else and switch',
        library: 'js',
        category: 'basics',
        description: 'if...else executes code blocks based on boolean conditions, with else if for additional conditions and a final else as a catch-all. switch compares a single value against multiple possible cases, useful when checking one variable against many discrete values - each case needs a break to prevent falling through to the next.',
        syntax: 'if (condition) { } else if (condition) { } else { }\nswitch (value) { case x: break; default: }',
        examples: [
            {
                title: 'if...else if...else',
                description: 'Handling multiple conditions in sequence.',
                code: 'function getGrade(score) {\n  if (score >= 90) {\n    return "A";\n  } else if (score >= 80) {\n    return "B";\n  } else if (score >= 70) {\n    return "C";\n  } else {\n    return "F";\n  }\n}\n\nconsole.log(getGrade(85)); // "B"'
            },
            {
                title: 'switch Statement',
                description: 'Checking one value against several discrete cases.',
                code: 'function getDayName(day) {\n  switch (day) {\n    case 0:\n      return "Sunday";\n    case 1:\n      return "Monday";\n    case 2:\n      return "Tuesday";\n    default:\n      return "Unknown";\n  }\n}\n\nconsole.log(getDayName(1)); // "Monday"\n\n// Fall-through: cases without break share the same code\nfunction isWeekend(day) {\n  switch (day) {\n    case 0:\n    case 6:\n      return true;\n    default:\n      return false;\n  }\n}'
            }
        ],
        bestPractices: [
            'Use switch when comparing one value against many discrete options - it is more readable than a long if/else if chain in that case',
            'Never forget the break statement in each switch case, or execution will fall through into the next case unintentionally',
            'Always include a default case in a switch to handle unexpected values',
            'For simple boolean conditions, prefer if/else or a ternary over switch'
        ]
    },

    {
        id: 'js-loops',
        title: 'Loops: for, while, do...while',
        library: 'js',
        category: 'basics',
        description: 'JavaScript offers several loop types. The classic for loop is ideal when you know the number of iterations, using an initializer, condition, and increment. while loops run as long as a condition remains true, checking before each iteration. do...while is similar but always runs at least once, checking the condition after the first iteration.',
        syntax: 'for (init; condition; step) { }\nwhile (condition) { }\ndo { } while (condition);',
        examples: [
            {
                title: 'for Loop',
                description: 'The classic counting loop.',
                code: 'for (let i = 0; i < 5; i++) {\n  console.log(i); // 0, 1, 2, 3, 4\n}\n\n// Looping over an array by index\nconst fruits = ["apple", "banana", "cherry"];\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}'
            },
            {
                title: 'while Loop',
                description: 'Looping based on a condition, checked before each pass.',
                code: 'let count = 0;\nwhile (count < 3) {\n  console.log(count);\n  count++;\n}\n// 0, 1, 2'
            },
            {
                title: 'do...while Loop',
                description: 'A loop that always executes at least once, since the condition is checked after.',
                code: 'let attempts = 0;\ndo {\n  console.log(`Attempt ${attempts + 1}`);\n  attempts++;\n} while (attempts < 3);\n\n// Runs at least once even if the condition starts false\nlet x = 10;\ndo {\n  console.log("This runs once even though x is not < 5");\n} while (x < 5);'
            }
        ],
        bestPractices: [
            'Use for...of instead of a classic for loop when you just need each value, not the index',
            'Use while when the number of iterations is not known ahead of time and depends on a changing condition',
            'Use do...while specifically when the loop body must run at least once regardless of the condition',
            'Always ensure the loop condition will eventually become false, to avoid accidental infinite loops'
        ]
    },

    {
        id: 'js-for-in-for-of',
        title: 'for...in vs for...of',
        library: 'js',
        category: 'basics',
        description: 'for...in iterates over the enumerable property keys of an object (or the indices of an array, though this is discouraged). for...of iterates over the values of an iterable, like arrays, strings, Maps, and Sets - it is generally the better choice when working with arrays.',
        syntax: 'for (const key in object) { }\nfor (const value of iterable) { }',
        examples: [
            {
                title: 'for...in with Objects',
                description: 'Iterating over an object\'s property keys.',
                code: 'const user = { name: "Alice", age: 25, city: "London" };\n\nfor (const key in user) {\n  console.log(`${key}: ${user[key]}`);\n}\n// name: Alice\n// age: 25\n// city: London'
            },
            {
                title: 'for...of with Arrays',
                description: 'Iterating over array values directly - the preferred way to loop over arrays.',
                code: 'const colors = ["red", "green", "blue"];\n\nfor (const color of colors) {\n  console.log(color);\n}\n// red, green, blue\n\n// Also works with strings, Maps, and Sets\nfor (const char of "abc") {\n  console.log(char); // a, b, c\n}'
            }
        ],
        bestPractices: [
            'Use for...of for arrays and other iterables - it gives you values directly without needing an index',
            'Use for...in only for plain objects, and be aware it also picks up inherited enumerable properties unless filtered',
            'Avoid for...in on arrays - it iterates over string keys (including inherited ones) and does not guarantee order the way for...of does',
            'Prefer Object.keys()/values()/entries() combined with for...of or forEach() as an often clearer alternative to for...in'
        ]
    },

    {
        id: 'js-break-continue',
        title: 'break and continue',
        library: 'js',
        category: 'basics',
        description: 'break immediately exits the nearest enclosing loop (or switch statement), skipping any remaining iterations. continue skips the rest of the current iteration and moves on to the next one, without exiting the loop entirely. Labeled statements let break/continue target an outer loop from within a nested one.',
        syntax: 'break;\ncontinue;',
        examples: [
            {
                title: 'break',
                description: 'Exiting a loop early once a condition is met.',
                code: 'for (let i = 0; i < 10; i++) {\n  if (i === 5) {\n    break; // stop the loop entirely\n  }\n  console.log(i);\n}\n// 0, 1, 2, 3, 4'
            },
            {
                title: 'continue',
                description: 'Skipping specific iterations without stopping the whole loop.',
                code: 'for (let i = 0; i < 10; i++) {\n  if (i % 2 === 0) {\n    continue; // skip even numbers\n  }\n  console.log(i);\n}\n// 1, 3, 5, 7, 9'
            },
            {
                title: 'Labeled break in Nested Loops',
                description: 'Breaking out of an outer loop from within a nested one.',
                code: 'outer: for (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 3; j++) {\n    if (j === 1) {\n      break outer; // exits the OUTER loop, not just the inner one\n    }\n    console.log(i, j);\n  }\n}\n// 0 0'
            }
        ],
        bestPractices: [
            'Use break to exit a loop as soon as further iteration is pointless, like finding a match',
            'Use continue to skip irrelevant iterations while keeping the loop running',
            'Reach for labeled break/continue sparingly - they can make nested loop logic harder to follow',
            'Consider whether array methods like find() or some() might express the same intent more clearly than a manual loop with break'
        ]
    },

    {
        id: 'js-objects-basics',
        title: 'Objects: Basics',
        library: 'js',
        category: 'basics',
        description: 'Objects store collections of related data as key-value pairs, where keys are strings (or Symbols) and values can be any type, including functions (called methods). Properties can be accessed with dot notation or bracket notation, and objects can be created with object literals, the Object() constructor, or classes.',
        syntax: 'const obj = { key: value, method() { } };',
        examples: [
            {
                title: 'Creating and Accessing Objects',
                description: 'Basic object creation and property access.',
                code: 'const person = {\n  name: "Alice",\n  age: 25,\n  greet() {\n    console.log(`Hi, I am ${this.name}`);\n  }\n};\n\nconsole.log(person.name);     // dot notation - "Alice"\nconsole.log(person["age"]);   // bracket notation - 25\nperson.greet();               // "Hi, I am Alice"'
            },
            {
                title: 'Modifying and Deleting Properties',
                description: 'Adding, updating, and removing object properties.',
                code: 'const car = { make: "Toyota", model: "Corolla" };\n\ncar.year = 2024;          // adding a new property\ncar.model = "Camry";      // updating an existing property\ndelete car.make;          // removing a property\n\nconsole.log(car); // { model: "Camry", year: 2024 }'
            },
            {
                title: 'Bracket Notation for Dynamic Keys',
                description: 'Using bracket notation when the property name is stored in a variable.',
                code: 'const user = { name: "Bob", email: "bob@example.com" };\nconst field = "email";\n\nconsole.log(user[field]); // "bob@example.com"\n// user.field would look for a literal property named "field" - wrong!'
            }
        ],
        bestPractices: [
            'Use dot notation when the property name is a fixed, known identifier; use bracket notation when it is dynamic or stored in a variable',
            'Prefer object shorthand syntax ({ name, age } instead of { name: name, age: age }) when variable names match property names',
            'Use methods shorthand (greet() { } instead of greet: function() { }) for cleaner object method definitions',
            'Be careful with delete - it is relatively slow and often better replaced by restructuring data or using Map for frequently changing key sets'
        ]
    },

    {
        id: 'js-this-keyword',
        title: 'The this Keyword',
        library: 'js',
        category: 'basics',
        description: 'this refers to the object that is currently executing a function, but its value depends entirely on how the function is called, not where it is defined. In a regular method call, this is the object before the dot. In a standalone function call, this is undefined in strict mode. Arrow functions do not have their own this - they inherit it from the enclosing scope.',
        syntax: 'this.property',
        examples: [
            {
                title: 'this in Object Methods',
                description: 'this refers to the object the method is called on.',
                code: 'const person = {\n  name: "Alice",\n  greet() {\n    console.log(`Hi, I am ${this.name}`);\n  }\n};\n\nperson.greet(); // "Hi, I am Alice" - this === person'
            },
            {
                title: 'The Common this Pitfall',
                description: 'Losing the correct this when a method is detached from its object.',
                code: 'const person = {\n  name: "Alice",\n  greet() {\n    console.log(this.name);\n  }\n};\n\nconst greetFn = person.greet;\n// greetFn(); // undefined - this is no longer bound to person\n\n// Arrow functions solve this in callbacks, since they inherit this\nconst timer = {\n  seconds: 0,\n  start() {\n    setInterval(() => {\n      this.seconds++; // "this" correctly refers to timer\n    }, 1000);\n  }\n};'
            },
            {
                title: 'Explicitly Setting this',
                description: 'Using call, apply, and bind to control what this refers to.',
                code: 'function introduce() {\n  console.log(`I am ${this.name}`);\n}\n\nconst user = { name: "Charlie" };\n\nintroduce.call(user);   // "I am Charlie" - calls immediately with this = user\nintroduce.apply(user);  // same as call, but takes args as an array\n\nconst boundIntroduce = introduce.bind(user);\nboundIntroduce(); // "I am Charlie" - permanently bound, callable later'
            }
        ],
        bestPractices: [
            'Use regular functions for object methods where you need this to refer to the calling object',
            'Use arrow functions for callbacks inside methods where you want this to stay bound to the outer context',
            'Use .bind() when passing a method as a callback and you need to preserve its original this',
            'Avoid relying on this in top-level standalone functions - it is undefined in strict mode and easy to misuse'
        ]
    },

    {
        id: 'js-classes',
        title: 'Classes',
        library: 'js',
        category: 'basics',
        description: 'Classes provide syntax for creating objects with shared structure and behavior, built on top of JavaScript\'s existing prototype-based inheritance. A class has a constructor for initialization, methods shared across instances, and can extend another class to inherit its behavior via the extends and super keywords.',
        syntax: 'class Name {\n  constructor(params) { }\n  method() { }\n}',
        examples: [
            {
                title: 'Basic Class',
                description: 'Defining a class with a constructor and methods.',
                code: 'class Person {\n  constructor(name, age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  greet() {\n    console.log(`Hi, I am ${this.name}, age ${this.age}`);\n  }\n}\n\nconst alice = new Person("Alice", 25);\nalice.greet(); // "Hi, I am Alice, age 25"'
            },
            {
                title: 'Inheritance with extends and super',
                description: 'Creating a subclass that builds on a parent class.',
                code: 'class Animal {\n  constructor(name) {\n    this.name = name;\n  }\n  speak() {\n    console.log(`${this.name} makes a sound`);\n  }\n}\n\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name); // calls the parent constructor\n    this.breed = breed;\n  }\n  speak() {\n    console.log(`${this.name} barks`); // overrides the parent method\n  }\n}\n\nconst dog = new Dog("Rex", "Labrador");\ndog.speak(); // "Rex barks"'
            },
            {
                title: 'Static Methods and Private Fields',
                description: 'Class-level methods and truly private instance fields (using #).',
                code: 'class Counter {\n  #count = 0; // private field, inaccessible from outside the class\n\n  increment() {\n    this.#count++;\n    return this.#count;\n  }\n\n  static describe() {\n    return "A simple counter class";\n  }\n}\n\nconst counter = new Counter();\nconsole.log(counter.increment()); // 1\nconsole.log(counter.increment()); // 2\n// console.log(counter.#count); // SyntaxError - private field\n\nconsole.log(Counter.describe()); // called on the class itself, not an instance'
            }
        ],
        bestPractices: [
            'Always call super() in a subclass constructor before accessing this',
            'Use private fields (#field) for internal state that should not be accessed or modified from outside the class',
            'Prefer composition over deep inheritance chains - favor small, focused classes over sprawling hierarchies',
            'Use static methods for functionality related to the class itself rather than any particular instance'
        ]
    },

    {
        id: 'js-closures',
        title: 'Closures',
        library: 'js',
        category: 'basics',
        description: 'A closure is a function that remembers and can access variables from its outer (enclosing) scope, even after that outer function has finished executing. Closures happen automatically whenever a function is defined inside another function. They are the mechanism behind private state, function factories, and many common JavaScript patterns.',
        syntax: 'function outer() {\n  let value = 0;\n  return function inner() { return value; };\n}',
        examples: [
            {
                title: 'Basic Closure',
                description: 'An inner function retaining access to its outer function\'s variable.',
                code: 'function makeCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\n\nconst counter = makeCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2\nconsole.log(counter()); // 3 - count persists between calls'
            },
            {
                title: 'Private State with Closures',
                description: 'Using a closure to create genuinely private variables before class private fields existed.',
                code: 'function createBankAccount(initialBalance) {\n  let balance = initialBalance; // not accessible from outside\n\n  return {\n    deposit(amount) {\n      balance += amount;\n      return balance;\n    },\n    withdraw(amount) {\n      if (amount > balance) {\n        console.log("Insufficient funds");\n        return balance;\n      }\n      balance -= amount;\n      return balance;\n    },\n    getBalance() {\n      return balance;\n    }\n  };\n}\n\nconst account = createBankAccount(100);\nconsole.log(account.deposit(50));  // 150\nconsole.log(account.withdraw(30)); // 120\n// balance itself cannot be accessed or modified directly from outside'
            },
            {
                title: 'Function Factories',
                description: 'Using closures to generate specialized functions.',
                code: 'function multiplyBy(factor) {\n  return function(number) {\n    return number * factor;\n  };\n}\n\nconst double = multiplyBy(2);\nconst triple = multiplyBy(3);\n\nconsole.log(double(5)); // 10\nconsole.log(triple(5)); // 15'
            }
        ],
        bestPractices: [
            'Use closures to create private state that cannot be accessed or mutated from outside a function',
            'Be aware that closures keep their referenced variables alive in memory - avoid creating unnecessary closures in hot code paths or long-lived loops',
            'Use closures for function factories and configurable, reusable function generators',
            'Remember that each call to an outer function creates a new, independent closure - they do not share state with each other'
        ]
    },

    {
        id: 'js-hoisting',
        title: 'Hoisting',
        library: 'js',
        category: 'basics',
        description: 'Hoisting is JavaScript\'s behavior of moving declarations (not initializations) to the top of their scope before code executes. Function declarations are fully hoisted, including their body, so they can be called before their definition. var declarations are hoisted but initialized as undefined. let and const are hoisted but remain in a "temporal dead zone" - accessing them before their declaration throws an error.',
        syntax: '// Declarations are processed before code runs',
        examples: [
            {
                title: 'Function Declaration Hoisting',
                description: 'Function declarations can be called before they appear in the code.',
                code: 'sayHello(); // works! "Hello!"\n\nfunction sayHello() {\n  console.log("Hello!");\n}'
            },
            {
                title: 'var vs let/const Hoisting',
                description: 'The key difference in how var and let/const behave when accessed early.',
                code: 'console.log(x); // undefined - var is hoisted with a default value\nvar x = 5;\n\ntry {\n  console.log(y); // ReferenceError - in the temporal dead zone\n  let y = 10;\n} catch (e) {\n  console.log(e.message);\n}'
            },
            {
                title: 'Function Expressions Are Not Hoisted the Same Way',
                description: 'A common source of confusion between declarations and expressions.',
                code: 'try {\n  sayHi(); // TypeError - sayHi is undefined at this point, not a function yet\n  var sayHi = function() {\n    console.log("Hi!");\n  };\n} catch (e) {\n  console.log(e.message);\n}'
            }
        ],
        bestPractices: [
            'Do not rely on hoisting to call functions before their definition, even though it works for declarations - write code in logical, top-to-bottom order for readability',
            'Use let and const instead of var to avoid the confusing undefined-hoisting behavior entirely',
            'Understand the temporal dead zone as the reason `ReferenceError` sometimes appears for variables that are technically declared later in the same scope',
            'Declare all variables at the point where they are actually needed rather than depending on hoisting behavior'
        ]
    },

    {
        id: 'js-scope',
        title: 'Scope',
        library: 'js',
        category: 'basics',
        description: 'Scope determines where variables are accessible in your code. JavaScript has global scope (accessible everywhere), function scope (var-declared variables inside a function), and block scope (let/const-declared variables inside any { } block, including if statements and loops). Inner scopes can access outer scope variables, but not vice versa.',
        syntax: '{ /* block scope */ }\nfunction() { /* function scope */ }',
        examples: [
            {
                title: 'Global vs Function Scope',
                description: 'Variables declared at the top level vs inside a function.',
                code: 'const globalVar = "I am global";\n\nfunction myFunction() {\n  const localVar = "I am local";\n  console.log(globalVar); // accessible - inner scope sees outer scope\n  console.log(localVar);\n}\n\nmyFunction();\n// console.log(localVar); // ReferenceError - not accessible outside the function'
            },
            {
                title: 'Block Scope with let/const',
                description: 'let and const respect block boundaries, unlike var.',
                code: 'if (true) {\n  let blockScoped = "only visible in this block";\n  var functionScoped = "visible outside the block";\n}\n\n// console.log(blockScoped);  // ReferenceError\nconsole.log(functionScoped); // works - var ignores block boundaries'
            },
            {
                title: 'Scope Chain',
                description: 'Nested functions can access variables from every enclosing scope.',
                code: 'const outer = "outer value";\n\nfunction level1() {\n  const middle = "middle value";\n  function level2() {\n    const inner = "inner value";\n    console.log(outer, middle, inner); // all accessible via the scope chain\n  }\n  level2();\n}\n\nlevel1();'
            }
        ],
        bestPractices: [
            'Keep variables scoped as narrowly as possible - declare them inside the block or function where they are actually used',
            'Avoid polluting the global scope - wrap code in functions or modules rather than declaring everything globally',
            'Use let/const for predictable block scoping instead of var\'s looser function scoping',
            'Understand the scope chain when debugging "variable is not defined" errors - the variable may simply be out of reach from where you are trying to access it'
        ]
    },

    {
        id: 'js-strict-mode',
        title: 'Strict Mode',
        library: 'js',
        category: 'basics',
        description: '"use strict" opts your code into a restricted variant of JavaScript that catches common mistakes by turning them into errors - like accidentally creating a global variable by forgetting to declare it. ES6 modules and classes are automatically in strict mode, so most modern code benefits from it without explicitly writing the directive.',
        syntax: '"use strict";',
        examples: [
            {
                title: 'Catching Accidental Globals',
                description: 'Strict mode throws an error instead of silently creating a global variable.',
                code: '"use strict";\n\ntry {\n  undeclaredVariable = 5; // ReferenceError in strict mode\n} catch (e) {\n  console.log(e.message);\n}\n\n// Without strict mode, this would silently create a global variable - a common bug source'
            },
            {
                title: 'Strict Mode is Automatic in Modules and Classes',
                description: 'You often get strict mode benefits without writing the directive at all.',
                code: '// In an ES module file, this is automatic:\nexport function myFunction() {\n  // strict mode is already active here\n}\n\nclass MyClass {\n  // class bodies are always strict mode, even outside modules\n}'
            }
        ],
        bestPractices: [
            'If writing plain scripts (not modules), add "use strict" at the top of the file or function to catch silent errors',
            'Remember ES6 modules (using import/export) and class bodies are strict mode by default - no directive needed',
            'Treat strict mode errors as bugs to fix, not obstacles to work around, since they usually reveal a genuine mistake',
            'Avoid mixing strict and non-strict code within the same file where possible, for consistent behavior'
        ]
    },

    {
        id: 'js-error-handling',
        title: 'Error Handling: try/catch/finally',
        library: 'js',
        category: 'basics',
        description: 'try...catch lets you handle errors gracefully instead of letting them crash your program. Code that might fail goes in the try block; if an error occurs, control jumps to the catch block. finally runs regardless of whether an error occurred, useful for cleanup. The throw statement lets you raise your own custom errors.',
        syntax: 'try {\n} catch (error) {\n} finally {\n}',
        examples: [
            {
                title: 'Basic try...catch',
                description: 'Catching an error and handling it instead of crashing.',
                code: 'try {\n  const data = JSON.parse("{ invalid json");\n} catch (error) {\n  console.log("Failed to parse:", error.message);\n}\n\nconsole.log("Program continues running");'
            },
            {
                title: 'finally for Cleanup',
                description: 'finally always runs, whether or not an error occurred.',
                code: 'function processData() {\n  console.log("Starting...");\n  try {\n    throw new Error("Something went wrong");\n  } catch (error) {\n    console.log("Caught:", error.message);\n  } finally {\n    console.log("Cleanup runs regardless"); // always executes\n  }\n}\n\nprocessData();'
            },
            {
                title: 'Throwing Custom Errors',
                description: 'Creating and throwing your own errors with meaningful messages.',
                code: 'function withdraw(balance, amount) {\n  if (amount > balance) {\n    throw new Error("Insufficient funds");\n  }\n  return balance - amount;\n}\n\ntry {\n  withdraw(100, 150);\n} catch (error) {\n  console.log(error.message); // "Insufficient funds"\n  console.log(error.name);    // "Error"\n}'
            }
        ],
        bestPractices: [
            'Only wrap code that can genuinely fail in try/catch - wrapping too much makes it harder to know what actually went wrong',
            'Always throw Error objects (or subclasses) rather than plain strings, so the stack trace and error.message are available',
            'Use finally for cleanup that must happen either way, like closing a connection or hiding a loading spinner',
            'Avoid using try/catch for normal control flow - reserve it for genuinely exceptional, unexpected situations'
        ]
    },

    {
        id: 'js-modules',
        title: 'Modules: import/export',
        library: 'js',
        category: 'basics',
        description: 'ES modules let you split code across multiple files and share functionality between them using export and import. A named export can export multiple values from one file, each imported individually by name. A default export represents the file\'s primary value, imported without curly braces and under any name you choose.',
        syntax: 'export const value = ...;\nimport { value } from "./file.js";',
        examples: [
            {
                title: 'Named Exports and Imports',
                description: 'Exporting and importing multiple named values from a module.',
                code: '// math.js\nexport const PI = 3.14159;\nexport function add(a, b) {\n  return a + b;\n}\nexport function subtract(a, b) {\n  return a - b;\n}\n\n// main.js\nimport { PI, add, subtract } from "./math.js";\nconsole.log(add(2, 3)); // 5'
            },
            {
                title: 'Default Export',
                description: 'A module\'s single primary export, imported without curly braces.',
                code: '// user.js\nexport default class User {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\n// main.js\nimport User from "./user.js"; // any name works for a default import\nconst alice = new User("Alice");'
            },
            {
                title: 'Combining Named and Default, Renaming, and Namespace Imports',
                description: 'More advanced import/export patterns.',
                code: '// utils.js\nexport default function formatDate(date) { /* ... */ }\nexport function formatCurrency(amount) { /* ... */ }\n\n// main.js\nimport formatDate, { formatCurrency as money } from "./utils.js";\n\n// Importing everything as a namespace object\nimport * as Utils from "./utils.js";\nUtils.formatCurrency(100);'
            }
        ],
        bestPractices: [
            'Use named exports for utility modules with several related exports, and default exports for a file with one clear primary export (like a single class or component)',
            'Keep import paths relative and explicit (./file.js) for clarity, following your build tool\'s conventions',
            'Avoid circular imports (module A imports B, which imports A back) - they can cause subtle bugs and are usually a sign the code needs restructuring',
            'Use named imports (import { specific } from) rather than namespace imports (import * as) when you only need a few things, for clearer dependencies and better tree-shaking'
        ]
    },

    {
        id: 'js-optional-chaining-nullish',
        title: 'Optional Chaining & Nullish Coalescing',
        library: 'js',
        category: 'basics',
        description: 'Optional chaining (?.) safely accesses deeply nested properties without throwing an error if an intermediate value is null or undefined - it short-circuits and returns undefined instead of crashing. Nullish coalescing (??) provides a default value only when the left side is specifically null or undefined, not for other falsy values like 0 or "".',
        syntax: 'obj?.prop?.nested\narr?.[index]\nfunc?.()\nvalue ?? defaultValue',
        examples: [
            {
                title: 'Optional Chaining for Nested Properties',
                description: 'Safely accessing deeply nested data that might not exist.',
                code: 'const user = {\n  name: "Alice",\n  address: {\n    city: "London"\n  }\n};\n\nconsole.log(user?.address?.city);    // "London"\nconsole.log(user?.address?.zipCode); // undefined - no error thrown\nconsole.log(user?.contact?.email);   // undefined - "contact" does not exist, but no crash\n\n// Without optional chaining, the line above would throw:\n// TypeError: Cannot read properties of undefined'
            },
            {
                title: 'Optional Chaining with Methods and Arrays',
                description: 'Using ?. to safely call functions and access array indices that might not exist.',
                code: 'const user = { greet: null };\nuser.greet?.(); // does nothing - safely skips the call since greet is null\n\nconst data = { items: null };\nconsole.log(data.items?.[0]); // undefined - safely handles the null array'
            },
            {
                title: 'Combining with Nullish Coalescing',
                description: 'Providing a fallback value for safely-accessed data.',
                code: 'const user = { address: null };\n\nconst city = user?.address?.city ?? "Unknown city";\nconsole.log(city); // "Unknown city"\n\n// Contrast with ||, which would also replace legitimate falsy values\nconst settings = { volume: 0 };\nconsole.log(settings?.volume ?? 50); // 0 - correctly kept, since 0 is not null/undefined'
            }
        ],
        bestPractices: [
            'Use optional chaining when accessing properties that might not exist, instead of manually checking each level with && chains',
            'Combine ?. with ?? to safely access a value and supply a sensible default in one expression',
            'Do not overuse optional chaining to mask bugs - if a property should always exist, a missing value might indicate a real problem worth investigating rather than silencing',
            'Remember ?. short-circuits the entire chain - if any part is null/undefined, the whole expression evaluates to undefined without evaluating further'
        ]
    },

    {
        id: 'js-typeof-instanceof',
        title: 'typeof and instanceof',
        library: 'js',
        category: 'basics',
        description: 'typeof returns a string indicating the general type of a value (like "string", "number", "object"). instanceof checks whether an object is an instance of a specific class or constructor function by walking its prototype chain, useful for distinguishing between different object types like Array, Date, or custom classes.',
        syntax: 'typeof value\nobject instanceof Constructor',
        examples: [
            {
                title: 'typeof for Primitive Types',
                description: 'Checking the type of simple values.',
                code: 'console.log(typeof "hello");  // "string"\nconsole.log(typeof 42);       // "number"\nconsole.log(typeof true);     // "boolean"\nconsole.log(typeof undefined);// "undefined"\nconsole.log(typeof function(){}); // "function"\nconsole.log(typeof {});       // "object"\nconsole.log(typeof []);       // "object" - arrays are objects too, typeof cannot distinguish them'
            },
            {
                title: 'instanceof for Object Types',
                description: 'Distinguishing between different kinds of objects.',
                code: 'const arr = [1, 2, 3];\nconst date = new Date();\n\nconsole.log(arr instanceof Array);  // true\nconsole.log(arr instanceof Object); // true - arrays are also objects\nconsole.log(date instanceof Date);  // true\nconsole.log(date instanceof Array); // false\n\nclass Dog {}\nconst rex = new Dog();\nconsole.log(rex instanceof Dog); // true'
            }
        ],
        bestPractices: [
            'Use typeof for primitives (string, number, boolean, etc.) and Array.isArray() specifically for arrays, since typeof cannot tell arrays apart from plain objects',
            'Use instanceof to check if an object was created by a specific class or constructor, especially useful in error handling (error instanceof TypeError)',
            'Remember instanceof checks the prototype chain, so it can behave unexpectedly across different execution contexts (like iframes) - it is not foolproof for all edge cases',
            'Combine typeof checks with early returns to validate function inputs before processing them'
        ]
    },

    {
        id: 'js-type-conversion',
        title: 'Type Conversion',
        library: 'js',
        category: 'basics',
        description: 'JavaScript converts values between types both explicitly (when you deliberately call a conversion function like Number() or String()) and implicitly (when the language automatically coerces types during operations, like using + with a string and a number). Understanding both is essential for avoiding subtle bugs.',
        syntax: 'String(value), Number(value), Boolean(value)',
        examples: [
            {
                title: 'Explicit Conversion',
                description: 'Deliberately converting between types.',
                code: 'console.log(String(42));      // "42"\nconsole.log(String(true));    // "true"\nconsole.log(Number("42"));    // 42\nconsole.log(Number("abc"));   // NaN\nconsole.log(Number(""));      // 0\nconsole.log(Boolean(0));      // false\nconsole.log(Boolean(""));     // false\nconsole.log(Boolean("hello"));// true'
            },
            {
                title: 'Implicit Coercion Gotchas',
                description: 'Common surprises from automatic type conversion.',
                code: 'console.log("5" + 3);   // "53" - + triggers string concatenation\nconsole.log("5" - 3);   // 2   - - forces numeric conversion\nconsole.log("5" * "2"); // 10  - * forces numeric conversion\nconsole.log(1 + true);  // 2   - true becomes 1\nconsole.log([] + []);   // ""  - both arrays become empty strings\nconsole.log([] + {});   // "[object Object]" - surprising but consistent with the rules'
            },
            {
                title: 'Falsy Values',
                description: 'The specific set of values that convert to false in a boolean context.',
                code: '// The complete list of falsy values in JavaScript:\nBoolean(false);      // false\nBoolean(0);          // false\nBoolean("");         // false\nBoolean(null);       // false\nBoolean(undefined);  // false\nBoolean(NaN);        // false\n// Everything else, including "0", "false", [], and {}, is truthy'
            }
        ],
        bestPractices: [
            'Use explicit conversion (Number(), String(), Boolean()) rather than relying on implicit coercion, for clearer and more predictable code',
            'Memorize the falsy values list - it explains most "why is this if statement not working" bugs',
            'Be especially cautious with + since it behaves completely differently depending on whether either operand is a string',
            'Use === instead of == to sidestep most implicit coercion surprises during comparisons entirely'
        ]
    },

    {
        id: 'js-regexp',
        title: 'Regular Expressions',
        library: 'js',
        category: 'basics',
        description: 'Regular expressions (RegExp) describe patterns for matching text, used for validation, searching, and replacing. They can be created with literal syntax (/pattern/flags) or the RegExp constructor. Common methods include test() to check for a match, and string methods like match(), replace(), and split() that accept a regex pattern.',
        syntax: '/pattern/flags\nnew RegExp("pattern", "flags")',
        examples: [
            {
                title: 'Basic Pattern Matching',
                description: 'Testing whether a string matches a pattern.',
                code: 'const hasNumber = /\\d/;\nconsole.log(hasNumber.test("abc123")); // true\nconsole.log(hasNumber.test("abcdef")); // false\n\nconst emailPattern = /^[\\w.-]+@[\\w.-]+\\.\\w+$/;\nconsole.log(emailPattern.test("user@example.com")); // true\nconsole.log(emailPattern.test("not-an-email"));      // false'
            },
            {
                title: 'Common Flags',
                description: 'Using flags to modify matching behavior.',
                code: 'const text = "Cat cat CAT";\n\nconsole.log(/cat/.test(text));  // true - matches only lowercase "cat"\nconsole.log(/cat/i.test(text)); // true - i flag makes it case-insensitive\n\nconst matches = text.match(/cat/gi); // g = global (all matches), i = case-insensitive\nconsole.log(matches); // ["Cat", "cat", "CAT"]'
            },
            {
                title: 'Using RegExp with String Methods',
                description: 'Searching, replacing, and splitting strings using patterns.',
                code: 'const sentence = "The rain in Spain";\n\nconsole.log(sentence.replace(/ain/g, "XXX"));\n// "The rXXX in SpXXX"\n\nconsole.log("2024-01-15".split(/-/));\n// ["2024", "01", "15"]\n\nconsole.log("Hello World".match(/[A-Z]\\w+/g));\n// ["Hello", "World"] - words starting with a capital letter'
            }
        ],
        bestPractices: [
            'Use the g flag when you need all matches in a string, not just the first',
            'Test regular expressions thoroughly with edge cases - they are powerful but easy to get subtly wrong',
            'For simple string checks (like "does this contain X"), plain string methods like includes() are often clearer than a regex',
            'Keep complex patterns commented or broken down, since dense regex syntax is notoriously hard to read later'
        ]
    },

    {
        id: 'js-iterables-generators',
        title: 'Iterables and Generators',
        library: 'js',
        category: 'basics',
        description: 'An iterable is any object that implements the Symbol.iterator method, allowing it to be used with for...of and the spread operator - arrays, strings, Maps, and Sets are all built-in iterables. Generator functions, defined with function*, provide an easy way to create custom iterables by using yield to produce a sequence of values one at a time, pausing execution between each.',
        syntax: 'function* generatorName() {\n  yield value;\n}',
        examples: [
            {
                title: 'Basic Generator Function',
                description: 'A generator that produces values lazily, one at a time.',
                code: 'function* countUpTo(max) {\n  for (let i = 1; i <= max; i++) {\n    yield i;\n  }\n}\n\nconst counter = countUpTo(3);\nconsole.log(counter.next()); // { value: 1, done: false }\nconsole.log(counter.next()); // { value: 2, done: false }\nconsole.log(counter.next()); // { value: 3, done: false }\nconsole.log(counter.next()); // { value: undefined, done: true }'
            },
            {
                title: 'Using Generators with for...of',
                description: 'Generators are iterable, so they work directly with for...of and spread.',
                code: 'function* fruits() {\n  yield "apple";\n  yield "banana";\n  yield "cherry";\n}\n\nfor (const fruit of fruits()) {\n  console.log(fruit);\n}\n// apple, banana, cherry\n\nconsole.log([...fruits()]); // ["apple", "banana", "cherry"]'
            },
            {
                title: 'Custom Iterable Object',
                description: 'Making any object work with for...of by implementing Symbol.iterator.',
                code: 'const range = {\n  from: 1,\n  to: 5,\n  [Symbol.iterator]() {\n    let current = this.from;\n    const last = this.to;\n    return {\n      next() {\n        if (current <= last) {\n          return { value: current++, done: false };\n        }\n        return { value: undefined, done: true };\n      }\n    };\n  }\n};\n\nfor (const num of range) {\n  console.log(num); // 1, 2, 3, 4, 5\n}'
            }
        ],
        bestPractices: [
            'Use generators for lazily-computed sequences, especially large or potentially infinite ones, since values are only produced as they are requested',
            'Prefer generators over manually managing iterator state objects - the syntax is far more readable',
            'Remember a generator function returns an iterator when called - it does not run its body immediately',
            'Reach for this pattern when building custom data structures (like a tree or linked list) that should support for...of'
        ]
    },

    {
        id: 'js-symbols',
        title: 'Symbols',
        library: 'js',
        category: 'basics',
        description: 'Symbol is a primitive type that creates unique, immutable identifiers. Every Symbol() call produces a completely unique value, even with the same description, which makes them useful as object property keys that are guaranteed not to collide with other keys - including string keys or other symbols. They are also used internally by JavaScript for things like Symbol.iterator.',
        syntax: 'const sym = Symbol("description");',
        examples: [
            {
                title: 'Creating Unique Symbols',
                description: 'Every symbol is unique, even with an identical description.',
                code: 'const sym1 = Symbol("id");\nconst sym2 = Symbol("id");\n\nconsole.log(sym1 === sym2); // false - always unique\nconsole.log(sym1.description); // "id"'
            },
            {
                title: 'Symbols as Object Keys',
                description: 'Using a symbol to create a property that will not collide with string keys or be picked up by normal enumeration.',
                code: 'const id = Symbol("id");\n\nconst user = {\n  name: "Alice",\n  [id]: 12345 // a symbol-keyed property\n};\n\nconsole.log(user[id]); // 12345\nconsole.log(Object.keys(user)); // ["name"] - the symbol key is skipped\nconsole.log(JSON.stringify(user)); // {"name":"Alice"} - symbols are also skipped here'
            }
        ],
        bestPractices: [
            'Use symbols when you need a guaranteed-unique property key that will not accidentally collide with other properties',
            'Remember symbol-keyed properties are hidden from Object.keys(), for...in, and JSON.stringify() - useful for "metadata" style properties',
            'Do not overuse symbols for everyday object keys - plain string keys are simpler and sufficient for the vast majority of cases',
            'Use well-known symbols like Symbol.iterator when you specifically need to customize how an object behaves with built-in language features'
        ]
    },

    {
        id: 'js-sets',
        title: 'Sets',
        library: 'js',
        category: 'basics',
        description: 'A Set is a collection of unique values of any type - unlike an array, it automatically prevents duplicates. Sets maintain insertion order and provide efficient add, delete, and lookup operations. They are ideal for deduplicating data or tracking membership without caring about order or indexed access.',
        syntax: 'const mySet = new Set([values]);\nmySet.add(value);\nmySet.has(value);',
        examples: [
            {
                title: 'Basic Set Operations',
                description: 'Creating a Set and using its core methods.',
                code: 'const mySet = new Set();\n\nmySet.add(1);\nmySet.add(2);\nmySet.add(2); // ignored - 2 is already in the set\nmySet.add(3);\n\nconsole.log(mySet.size);      // 3\nconsole.log(mySet.has(2));    // true\nmySet.delete(2);\nconsole.log(mySet.has(2));    // false'
            },
            {
                title: 'Deduplicating an Array',
                description: 'One of the most common uses of Set - removing duplicates.',
                code: 'const numbers = [1, 2, 2, 3, 4, 4, 5];\nconst unique = [...new Set(numbers)];\nconsole.log(unique); // [1, 2, 3, 4, 5]'
            },
            {
                title: 'Iterating a Set',
                description: 'Sets are iterable and work with for...of.',
                code: 'const tags = new Set(["js", "web", "css"]);\n\nfor (const tag of tags) {\n  console.log(tag);\n}\n// js, web, css - in insertion order\n\ntags.forEach(tag => console.log(tag)); // also works'
            }
        ],
        bestPractices: [
            'Use Set instead of an array when you need to guarantee uniqueness and do not need indexed access',
            'Use the [...new Set(array)] pattern as the concise standard way to deduplicate an array',
            'Remember Set uses the same equality as ===, with the one exception that NaN is treated as equal to itself',
            'Use has() for membership checks instead of array includes() - Set lookups are generally faster for large collections'
        ]
    },

    {
        id: 'js-maps',
        title: 'Maps',
        library: 'js',
        category: 'basics',
        description: 'A Map is a collection of key-value pairs, similar to a plain object, but with important differences: keys can be any type (not just strings), it maintains insertion order, and it provides a direct size property. Maps are generally the better choice over plain objects when keys are dynamic, non-string, or when you need reliable size and iteration.',
        syntax: 'const myMap = new Map();\nmyMap.set(key, value);\nmyMap.get(key);',
        examples: [
            {
                title: 'Basic Map Operations',
                description: 'Creating a Map and using its core methods.',
                code: 'const userRoles = new Map();\n\nuserRoles.set("alice", "admin");\nuserRoles.set("bob", "editor");\n\nconsole.log(userRoles.get("alice")); // "admin"\nconsole.log(userRoles.has("bob"));   // true\nconsole.log(userRoles.size);         // 2\n\nuserRoles.delete("bob");\nconsole.log(userRoles.size); // 1'
            },
            {
                title: 'Object Keys, Not Just Strings',
                description: 'Unlike plain objects, Map keys can be any value, including objects and functions.',
                code: 'const objKey = { id: 1 };\nconst map = new Map();\n\nmap.set(objKey, "some value");\nmap.set("stringKey", "another value");\nmap.set(42, "number key value");\n\nconsole.log(map.get(objKey)); // "some value"\nconsole.log(map.get({ id: 1 })); // undefined - a different object reference!'
            },
            {
                title: 'Iterating a Map',
                description: 'Maps are iterable, yielding [key, value] pairs in insertion order.',
                code: 'const inventory = new Map([\n  ["apples", 50],\n  ["bananas", 30]\n]);\n\nfor (const [item, count] of inventory) {\n  console.log(`${item}: ${count}`);\n}\n// apples: 50\n// bananas: 30\n\nconsole.log([...inventory.keys()]);   // ["apples", "bananas"]\nconsole.log([...inventory.values()]); // [50, 30]'
            }
        ],
        bestPractices: [
            'Use Map when keys are not simple strings, when key order matters, or when you need frequent additions/removals with reliable size tracking',
            'Use plain objects for simple, fixed-shape records (like a single user\'s data) where you know the property names ahead of time',
            'Remember Map keys are compared by reference for objects - two different object literals with identical content are treated as different keys',
            'Use Map.prototype.entries()/keys()/values() to iterate in a specific way when the default [key, value] iteration is not what you need'
        ]
    },

    {
        id: 'js-json',
        title: 'JSON: stringify() and parse()',
        library: 'js',
        category: 'json',
        description: 'JSON (JavaScript Object Notation) is a text format for representing structured data, widely used for APIs and configuration. JSON.stringify() converts a JavaScript value into a JSON string, and JSON.parse() converts a JSON string back into a JavaScript value. Functions, undefined, and symbols are silently dropped or converted during stringification.',
        syntax: 'JSON.stringify(value)\nJSON.parse(jsonString)',
        examples: [
            {
                title: 'Basic Stringify and Parse',
                description: 'Converting between JavaScript objects and JSON strings.',
                code: 'const user = { name: "Alice", age: 25, active: true };\n\nconst jsonString = JSON.stringify(user);\nconsole.log(jsonString); // \'{"name":"Alice","age":25,"active":true}\'\n\nconst parsedBack = JSON.parse(jsonString);\nconsole.log(parsedBack.name); // "Alice"\nconsole.log(typeof parsedBack); // "object"'
            },
            {
                title: 'Pretty-Printing with Indentation',
                description: 'Formatting JSON output for readability using the third argument.',
                code: 'const data = { name: "Bob", roles: ["admin", "editor"] };\n\nconsole.log(JSON.stringify(data, null, 2));\n// {\n//   "name": "Bob",\n//   "roles": [\n//     "admin",\n//     "editor"\n//   ]\n// }'
            },
            {
                title: 'What Gets Dropped or Converted',
                description: 'JSON.stringify() cannot represent every JavaScript value.',
                code: 'const data = {\n  name: "Alice",\n  greet: function() { console.log("hi"); }, // dropped entirely\n  unset: undefined,                          // dropped entirely\n  missing: null,                             // kept as null\n  when: new Date()                           // converted to an ISO string\n};\n\nconsole.log(JSON.stringify(data));\n// functions and undefined values disappear from the output'
            }
        ],
        bestPractices: [
            'Always wrap JSON.parse() in a try/catch, since it throws an error on invalid or malformed JSON',
            'Use the third argument of JSON.stringify() (a number of spaces) for human-readable, indented output during debugging',
            'Remember functions, undefined, and symbols are silently omitted during stringification - do not rely on them surviving a round trip',
            'Be aware that Dates become strings after JSON.stringify(), and will need to be manually converted back with new Date() after parsing'
        ]
    },

    {
        id: 'js-array-basics',
        title: 'Array Basics',
        library: 'js',
        category: 'arrays',
        description: 'Arrays are ordered, zero-indexed collections that can hold values of any type, including a mix of types. They can be created with array literal syntax [] or the Array constructor. The length property reflects the number of elements, and static methods like Array.isArray(), Array.from(), and Array.of() help create or check arrays.',
        syntax: 'const arr = [item1, item2, item3];\narr[index];\narr.length;',
        examples: [
            {
                title: 'Creating and Accessing Arrays',
                description: 'Basic array creation, indexing, and length.',
                code: 'const fruits = ["apple", "banana", "cherry"];\n\nconsole.log(fruits[0]);      // "apple" - first element\nconsole.log(fruits[fruits.length - 1]); // "cherry" - last element\nconsole.log(fruits.length);  // 3\n\nfruits[1] = "blueberry"; // arrays are mutable\nconsole.log(fruits); // ["apple", "blueberry", "cherry"]'
            },
            {
                title: 'Array.isArray() and Array.from()',
                description: 'Checking for arrays and creating them from other iterables.',
                code: 'console.log(Array.isArray([1, 2, 3])); // true\nconsole.log(Array.isArray("hello"));    // false\n\nconst fromString = Array.from("abc");\nconsole.log(fromString); // ["a", "b", "c"]\n\nconst fromMap = Array.from({ length: 5 }, (_, i) => i * 2);\nconsole.log(fromMap); // [0, 2, 4, 6, 8]'
            }
        ],
        bestPractices: [
            'Use array literal syntax [] rather than new Array() for creating arrays - it is more concise and avoids a quirky single-number-argument edge case',
            'Use Array.isArray() rather than typeof to correctly identify arrays, since typeof reports "object" for both',
            'Use Array.from() to convert array-like or iterable values (like NodeLists or strings) into real arrays with full method support',
            'Remember that arrays are objects, so assigning one array variable to another copies the reference, not the contents'
        ]
    },

    {
        id: 'js-array-add-remove',
        title: 'push(), pop(), shift(), unshift()',
        library: 'js',
        category: 'arrays',
        description: 'These four methods add or remove elements from the ends of an array, all mutating the original array in place. push() and pop() work on the end of the array (fast). shift() and unshift() work on the beginning (slower, since remaining elements must be re-indexed).',
        syntax: 'arr.push(item); arr.pop();\narr.unshift(item); arr.shift();',
        examples: [
            {
                title: 'push() and pop() - End of Array',
                description: 'Adding and removing elements from the end.',
                code: 'const stack = [1, 2, 3];\n\nstack.push(4);        // adds to the end\nconsole.log(stack);   // [1, 2, 3, 4]\n\nconst removed = stack.pop(); // removes and returns the last element\nconsole.log(removed);  // 4\nconsole.log(stack);    // [1, 2, 3]'
            },
            {
                title: 'unshift() and shift() - Start of Array',
                description: 'Adding and removing elements from the beginning.',
                code: 'const queue = [2, 3, 4];\n\nqueue.unshift(1);     // adds to the start\nconsole.log(queue);   // [1, 2, 3, 4]\n\nconst first = queue.shift(); // removes and returns the first element\nconsole.log(first);    // 1\nconsole.log(queue);    // [2, 3, 4]'
            },
            {
                title: 'Adding Multiple Elements at Once',
                description: 'Each method accepts multiple arguments.',
                code: 'const arr = [3];\narr.push(4, 5, 6);\nconsole.log(arr); // [3, 4, 5, 6]\n\narr.unshift(1, 2);\nconsole.log(arr); // [1, 2, 3, 4, 5, 6]'
            }
        ],
        bestPractices: [
            'Prefer push()/pop() over unshift()/shift() when performance matters - operating on the end of an array is significantly faster',
            'Remember all four methods mutate the original array - use spread syntax ([...arr, newItem]) instead if you need an immutable update',
            'Use push() to build up an array in a loop rather than repeatedly using concat(), which creates a new array each time',
            'Check array length before calling pop()/shift() on a potentially empty array, since they return undefined rather than throwing'
        ]
    },

    {
        id: 'js-array-slice-splice',
        title: 'slice() and splice()',
        library: 'js',
        category: 'arrays',
        description: 'slice() returns a shallow copy of a portion of an array as a new array, without modifying the original - useful for extracting a section. splice() modifies the original array in place by removing, replacing, or inserting elements at a specific position, and returns the removed elements.',
        syntax: 'arr.slice(start, end)\narr.splice(start, deleteCount, ...items)',
        examples: [
            {
                title: 'slice() - Non-Mutating Extraction',
                description: 'Extracting a portion of an array without changing the original.',
                code: 'const fruits = ["apple", "banana", "cherry", "date", "elderberry"];\n\nconsole.log(fruits.slice(1, 3));  // ["banana", "cherry"] - end index excluded\nconsole.log(fruits.slice(2));      // ["cherry", "date", "elderberry"] - to the end\nconsole.log(fruits.slice(-2));     // ["date", "elderberry"] - last 2 elements\nconsole.log(fruits);               // original array is unchanged'
            },
            {
                title: 'splice() - Mutating Removal',
                description: 'Removing elements from an array, modifying it in place.',
                code: 'const numbers = [1, 2, 3, 4, 5];\nconst removed = numbers.splice(1, 2); // start at index 1, remove 2 elements\n\nconsole.log(removed);  // [2, 3] - the removed elements\nconsole.log(numbers);  // [1, 4, 5] - original array is mutated'
            },
            {
                title: 'splice() - Inserting and Replacing',
                description: 'Using splice() to insert new elements or replace existing ones.',
                code: 'const colors = ["red", "green", "blue"];\n\n// Insert without removing (deleteCount = 0)\ncolors.splice(1, 0, "yellow");\nconsole.log(colors); // ["red", "yellow", "green", "blue"]\n\n// Replace an element\ncolors.splice(2, 1, "purple");\nconsole.log(colors); // ["red", "yellow", "purple", "blue"]'
            }
        ],
        bestPractices: [
            'Use slice() whenever you want a new array without mutating the original - it is the safer, more predictable choice',
            'Use splice() specifically when you need to remove or insert elements at a specific position in place',
            'Remember slice()\'s end argument is exclusive - slice(1, 3) returns indices 1 and 2, not 3',
            'Save splice()\'s return value if you need the removed elements - it returns them as a new array'
        ]
    },

    {
        id: 'js-array-concat-join',
        title: 'concat() and join()',
        library: 'js',
        category: 'arrays',
        description: 'concat() merges two or more arrays into a new array, without modifying the originals. join() converts all array elements into a single string, separated by a specified delimiter (comma by default) - the reverse operation of String.prototype.split().',
        syntax: 'arr.concat(otherArr)\narr.join(separator)',
        examples: [
            {
                title: 'concat() - Merging Arrays',
                description: 'Combining arrays without mutating the originals.',
                code: 'const arr1 = [1, 2, 3];\nconst arr2 = [4, 5, 6];\n\nconst merged = arr1.concat(arr2);\nconsole.log(merged); // [1, 2, 3, 4, 5, 6]\nconsole.log(arr1);   // [1, 2, 3] - unchanged\n\n// concat() can also merge multiple arrays and add individual values\nconst combined = arr1.concat(arr2, [7, 8], 9);\nconsole.log(combined); // [1, 2, 3, 4, 5, 6, 7, 8, 9]'
            },
            {
                title: 'join() - Array to String',
                description: 'Converting array elements into a formatted string.',
                code: 'const words = ["Hello", "World", "!"];\n\nconsole.log(words.join(" ")); // "Hello World !"\nconsole.log(words.join());    // "Hello,World,!" - default separator is a comma\nconsole.log(words.join(""));  // "HelloWorld!" - no separator\n\nconst path = ["usr", "local", "bin"];\nconsole.log(path.join("/")); // "usr/local/bin"'
            }
        ],
        bestPractices: [
            'Prefer the spread operator ([...arr1, ...arr2]) over concat() in modern code - it reads more clearly, though both achieve the same result',
            'Use join() instead of manually looping and building a string when converting an array to display text',
            'Choose a join() separator that matches your output format - commas for CSV-like data, spaces for sentences, "/" for paths',
            'Remember join() converts non-string elements using their default string representation, which may need formatting first for numbers or objects'
        ]
    },

    {
        id: 'js-array-search',
        title: 'indexOf(), includes(), lastIndexOf()',
        library: 'js',
        category: 'arrays',
        description: 'These methods search an array for a specific value. indexOf() returns the first matching index (or -1 if not found), lastIndexOf() searches from the end, and includes() simply returns true or false. All use strict equality (===) for comparison, so they cannot find objects by content, only by exact reference.',
        syntax: 'arr.indexOf(value)\narr.includes(value)\narr.lastIndexOf(value)',
        examples: [
            {
                title: 'indexOf() and includes()',
                description: 'Finding whether and where a value exists in an array.',
                code: 'const fruits = ["apple", "banana", "cherry", "banana"];\n\nconsole.log(fruits.indexOf("banana"));   // 1 - first match\nconsole.log(fruits.indexOf("grape"));    // -1 - not found\nconsole.log(fruits.includes("cherry"));  // true\nconsole.log(fruits.includes("grape"));   // false'
            },
            {
                title: 'lastIndexOf()',
                description: 'Searching for the last occurrence of a value.',
                code: 'const fruits = ["apple", "banana", "cherry", "banana"];\nconsole.log(fruits.lastIndexOf("banana")); // 3 - the last match'
            },
            {
                title: 'Why includes() Cannot Find Objects by Content',
                description: 'A common gotcha - these methods compare by reference, not deep equality.',
                code: 'const users = [{ name: "Alice" }, { name: "Bob" }];\n\nconsole.log(users.includes({ name: "Alice" })); // false - different object reference!\n\n// Use .some() with a custom comparison instead\nconsole.log(users.some(u => u.name === "Alice")); // true'
            }
        ],
        bestPractices: [
            'Use includes() when you only need a true/false answer - it is more readable than checking indexOf() !== -1',
            'Use indexOf() when you actually need the position of the match, such as for use with splice()',
            'Remember these methods use strict equality, so they cannot find objects/arrays by their content - use find() or some() with a custom comparison for that',
            'includes() correctly finds NaN (unlike indexOf(), which cannot) - a subtle but useful difference'
        ]
    },

    {
        id: 'js-array-find',
        title: 'find(), findIndex(), findLast()',
        library: 'js',
        category: 'arrays',
        description: 'These methods search an array using a test function rather than an exact value, making them ideal for finding objects by a property. find() returns the first matching element (or undefined), findIndex() returns its index (or -1), and findLast()/findLastIndex() search from the end instead.',
        syntax: 'arr.find(item => condition)\narr.findIndex(item => condition)',
        examples: [
            {
                title: 'find() - Locating an Object by Property',
                description: 'The most common use case: finding a specific object in an array.',
                code: 'const users = [\n  { id: 1, name: "Alice" },\n  { id: 2, name: "Bob" },\n  { id: 3, name: "Charlie" }\n];\n\nconst user = users.find(u => u.id === 2);\nconsole.log(user); // { id: 2, name: "Bob" }\n\nconst notFound = users.find(u => u.id === 99);\nconsole.log(notFound); // undefined'
            },
            {
                title: 'findIndex() - Locating a Position',
                description: 'Getting the index of a match, useful before splice() or update operations.',
                code: 'const numbers = [4, 9, 16, 25, 36];\nconst index = numbers.findIndex(n => n > 15);\nconsole.log(index); // 2 (the index of 16)\n\nconst notFoundIndex = numbers.findIndex(n => n > 100);\nconsole.log(notFoundIndex); // -1'
            },
            {
                title: 'findLast() and findLastIndex()',
                description: 'Searching from the end of the array instead of the beginning.',
                code: 'const numbers = [1, 5, 8, 5, 2];\n\nconsole.log(numbers.findLast(n => n === 5));      // 5 (the last matching value)\nconsole.log(numbers.findLastIndex(n => n === 5)); // 3 (its index)'
            }
        ],
        bestPractices: [
            'Use find() instead of filter()[0] when you only need the first match - it stops searching as soon as it finds one, which is more efficient',
            'Use findIndex() when you need the position for a subsequent operation like splice() or array update',
            'Prefer find()/findIndex() over indexOf() when searching by object property rather than exact primitive value',
            'Remember find() returns undefined (not -1) when nothing matches - check with a truthy check or === undefined, not === -1'
        ]
    },

    {
        id: 'js-array-filter',
        title: 'filter()',
        library: 'js',
        category: 'arrays',
        description: 'filter() creates a new array containing only the elements that pass a test function, without modifying the original array. It is one of the most commonly used array methods, ideal for narrowing down a collection based on some condition.',
        syntax: 'arr.filter(item => condition)',
        examples: [
            {
                title: 'Basic Filtering',
                description: 'Selecting elements that meet a condition.',
                code: 'const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\n\nconst evens = numbers.filter(n => n % 2 === 0);\nconsole.log(evens); // [2, 4, 6, 8, 10]\n\nconst greaterThan5 = numbers.filter(n => n > 5);\nconsole.log(greaterThan5); // [6, 7, 8, 9, 10]'
            },
            {
                title: 'Filtering Objects by Property',
                description: 'A very common real-world use case.',
                code: 'const products = [\n  { name: "Laptop", price: 999, inStock: true },\n  { name: "Mouse", price: 25, inStock: false },\n  { name: "Keyboard", price: 75, inStock: true }\n];\n\nconst available = products.filter(p => p.inStock);\nconsole.log(available.map(p => p.name)); // ["Laptop", "Keyboard"]\n\nconst affordable = products.filter(p => p.price < 100);\nconsole.log(affordable.map(p => p.name)); // ["Mouse", "Keyboard"]'
            },
            {
                title: 'Chaining with map()',
                description: 'Combining filter() and map() to select and transform in sequence.',
                code: 'const numbers = [1, 2, 3, 4, 5, 6];\n\nconst result = numbers\n  .filter(n => n % 2 === 0)  // [2, 4, 6]\n  .map(n => n * n);          // [4, 16, 36]\n\nconsole.log(result); // [4, 16, 36]'
            }
        ],
        bestPractices: [
            'Use filter() to select a subset of an array based on a condition - it always returns a new array, even if empty',
            'Chain filter() with map() for a clean, readable pipeline of narrowing then transforming data',
            'Remember filter() always returns an array (possibly empty), unlike find() which returns a single element or undefined',
            'Avoid mutating the original array or its elements inside the filter callback - keep the test function pure'
        ]
    },

    {
        id: 'js-array-map',
        title: 'map()',
        library: 'js',
        category: 'arrays',
        description: 'map() creates a new array by applying a transformation function to every element of the original array, without modifying it. The new array always has the same length as the original. It is one of the most fundamental tools for transforming data in JavaScript.',
        syntax: 'arr.map(item => transformedItem)',
        examples: [
            {
                title: 'Basic Transformation',
                description: 'Transforming each element of an array.',
                code: 'const numbers = [1, 2, 3, 4, 5];\n\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled); // [2, 4, 6, 8, 10]\n\nconst squared = numbers.map(n => n ** 2);\nconsole.log(squared); // [1, 4, 9, 16, 25]'
            },
            {
                title: 'Transforming Objects',
                description: 'Extracting or reshaping data from an array of objects.',
                code: 'const users = [\n  { firstName: "Alice", lastName: "Smith" },\n  { firstName: "Bob", lastName: "Jones" }\n];\n\nconst fullNames = users.map(u => `${u.firstName} ${u.lastName}`);\nconsole.log(fullNames); // ["Alice Smith", "Bob Jones"]\n\n// Creating new shaped objects\nconst summaries = users.map(u => ({ name: u.firstName, initial: u.lastName[0] }));\nconsole.log(summaries); // [{ name: "Alice", initial: "S" }, { name: "Bob", initial: "J" }]'
            },
            {
                title: 'map() with Index',
                description: 'Using the optional index parameter passed to the callback.',
                code: 'const items = ["apple", "banana", "cherry"];\n\nconst numbered = items.map((item, index) => `${index + 1}. ${item}`);\nconsole.log(numbered);\n// ["1. apple", "2. banana", "3. cherry"]'
            }
        ],
        bestPractices: [
            'Use map() only when you need the resulting array - if you just need to run side effects for each item, use forEach() instead',
            'Remember map() always returns a new array of the same length, one output for every input - use filter() first if you need to remove elements too',
            'Keep the mapping function pure (no side effects) for predictable, easy-to-reason-about code',
            'Wrap object literal returns in parentheses when using arrow functions: item => ({ key: value })'
        ]
    },

    {
        id: 'js-array-reduce',
        title: 'reduce() and reduceRight()',
        library: 'js',
        category: 'arrays',
        description: 'reduce() executes a reducer function on each element, accumulating a single result value - useful for sums, grouping, flattening, or building up any kind of aggregate. It takes an accumulator and the current value, along with an optional initial value for the accumulator. reduceRight() does the same but processes elements from right to left.',
        syntax: 'arr.reduce((accumulator, current) => newAccumulator, initialValue)',
        examples: [
            {
                title: 'Summing Values',
                description: 'The classic reduce() example - accumulating a total.',
                code: 'const numbers = [1, 2, 3, 4, 5];\n\nconst sum = numbers.reduce((total, n) => total + n, 0);\nconsole.log(sum); // 15\n\n// Without an initial value, the first element becomes the starting accumulator\nconst sumNoInitial = numbers.reduce((total, n) => total + n);\nconsole.log(sumNoInitial); // 15 - same result here, but riskier on empty arrays'
            },
            {
                title: 'Grouping Data',
                description: 'Using reduce() to transform an array into a grouped object.',
                code: 'const people = [\n  { name: "Alice", dept: "Engineering" },\n  { name: "Bob", dept: "Sales" },\n  { name: "Charlie", dept: "Engineering" }\n];\n\nconst byDept = people.reduce((groups, person) => {\n  const key = person.dept;\n  if (!groups[key]) groups[key] = [];\n  groups[key].push(person.name);\n  return groups;\n}, {});\n\nconsole.log(byDept);\n// { Engineering: ["Alice", "Charlie"], Sales: ["Bob"] }'
            },
            {
                title: 'Counting Occurrences',
                description: 'Another common reduce() pattern - tallying values.',
                code: 'const votes = ["yes", "no", "yes", "yes", "no"];\n\nconst tally = votes.reduce((counts, vote) => {\n  counts[vote] = (counts[vote] || 0) + 1;\n  return counts;\n}, {});\n\nconsole.log(tally); // { yes: 3, no: 2 }'
            }
        ],
        bestPractices: [
            'Always provide an initial value as the second argument - it avoids errors on empty arrays and makes the starting state explicit',
            'Remember to return the accumulator from the callback every time - forgetting this is the single most common reduce() bug',
            'Use reduce() for genuinely aggregate operations (sums, grouping, flattening) - for simple transformations, map()/filter() are usually clearer',
            'Consider breaking a very complex reduce() into a named function passed as the callback, for readability'
        ]
    },

    {
        id: 'js-array-foreach',
        title: 'forEach()',
        library: 'js',
        category: 'arrays',
        description: 'forEach() executes a function once for each array element, used purely for side effects like logging or updating external state - it always returns undefined and cannot be chained. Unlike map()/filter(), it does not produce a new array, and unlike a for loop, it cannot be stopped early with break.',
        syntax: 'arr.forEach((item, index, array) => { });',
        examples: [
            {
                title: 'Basic forEach()',
                description: 'Running a function for each element, purely for its side effects.',
                code: 'const fruits = ["apple", "banana", "cherry"];\n\nfruits.forEach(fruit => {\n  console.log(fruit);\n});\n// apple, banana, cherry'
            },
            {
                title: 'Using Index and Array Parameters',
                description: 'The callback also receives the current index and the full array.',
                code: 'const scores = [85, 92, 78];\n\nscores.forEach((score, index, array) => {\n  console.log(`Score ${index + 1} of ${array.length}: ${score}`);\n});\n// Score 1 of 3: 85\n// Score 2 of 3: 92\n// Score 3 of 3: 78'
            },
            {
                title: 'forEach() vs map() - Choosing the Right Tool',
                description: 'A common mistake: using forEach() when you actually need a new array.',
                code: '// Wrong intent - forEach() returns undefined, this does nothing useful\nconst numbers = [1, 2, 3];\nconst result = numbers.forEach(n => n * 2);\nconsole.log(result); // undefined\n\n// Correct - use map() when you need the transformed values back\nconst doubled = numbers.map(n => n * 2);\nconsole.log(doubled); // [2, 4, 6]'
            }
        ],
        bestPractices: [
            'Use forEach() only for side effects (logging, DOM updates, pushing to an external array) - never expect a return value from it',
            'Use map() instead of forEach() whenever you actually need a transformed array back',
            'Remember you cannot break or continue out of a forEach() loop - use a regular for or for...of loop if you need that control',
            'Avoid using forEach() with async/await callbacks expecting sequential execution - it does not wait for promises between iterations'
        ]
    },

    {
        id: 'js-array-some-every',
        title: 'some() and every()',
        library: 'js',
        category: 'arrays',
        description: 'some() tests whether at least one array element passes a condition, returning true as soon as it finds a match (or false if none do). every() tests whether all elements pass a condition, returning false as soon as it finds one that fails (or true if all pass). Both short-circuit for efficiency.',
        syntax: 'arr.some(item => condition)\narr.every(item => condition)',
        examples: [
            {
                title: 'some() - At Least One Match',
                description: 'Checking whether any element satisfies a condition.',
                code: 'const numbers = [1, 3, 5, 8, 9];\n\nconsole.log(numbers.some(n => n % 2 === 0)); // true - 8 is even\nconsole.log(numbers.some(n => n > 100));      // false - none are'
            },
            {
                title: 'every() - All Must Match',
                description: 'Checking whether every element satisfies a condition.',
                code: 'const ages = [22, 25, 30, 18];\n\nconsole.log(ages.every(age => age >= 18)); // true - all are adults\nconsole.log(ages.every(age => age >= 21)); // false - 18 fails the check'
            },
            {
                title: 'Practical Validation Example',
                description: 'A common real-world use: form validation.',
                code: 'const formFields = [\n  { name: "email", value: "user@test.com" },\n  { name: "password", value: "" },\n  { name: "username", value: "bob" }\n];\n\nconst allFilled = formFields.every(field => field.value.length > 0);\nconsole.log(allFilled); // false - password is empty\n\nconst hasEmptyField = formFields.some(field => field.value.length === 0);\nconsole.log(hasEmptyField); // true'
            }
        ],
        bestPractices: [
            'Use some() instead of filter().length > 0 when you only need a true/false answer - it stops early, which is more efficient',
            'Use every() for validation checks where all items must satisfy a rule, like confirming every required field is filled',
            'Remember every() on an empty array always returns true (vacuous truth), and some() on an empty array always returns false',
            'Combine some()/every() with logical operators for readable, declarative validation logic'
        ]
    },

    {
        id: 'js-array-sort-reverse',
        title: 'sort() and reverse()',
        library: 'js',
        category: 'arrays',
        description: 'sort() orders the elements of an array in place. Without a comparator function, it converts elements to strings and sorts lexicographically - which produces surprising results for numbers. A comparator function gives full control over the ordering. reverse() simply flips the current order of the array in place.',
        syntax: 'arr.sort((a, b) => a - b)\narr.reverse()',
        examples: [
            {
                title: 'The Default sort() Gotcha',
                description: 'Sorting numbers without a comparator produces unexpected results.',
                code: 'const numbers = [10, 1, 21, 2];\n\nconsole.log(numbers.sort());\n// [1, 10, 2, 21] - sorted as strings, not numbers!\n\nconsole.log(numbers.sort((a, b) => a - b));\n// [1, 2, 10, 21] - correct numeric ascending order'
            },
            {
                title: 'Sorting with a Comparator',
                description: 'Using a comparator function for correct numeric and custom ordering.',
                code: 'const numbers = [5, 2, 8, 1, 9];\n\nnumbers.sort((a, b) => a - b); // ascending\nconsole.log(numbers); // [1, 2, 5, 8, 9]\n\nnumbers.sort((a, b) => b - a); // descending\nconsole.log(numbers); // [9, 8, 5, 2, 1]'
            },
            {
                title: 'Sorting Objects and Reversing',
                description: 'Sorting an array of objects by a property, and reversing an array.',
                code: 'const people = [\n  { name: "Charlie", age: 30 },\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 35 }\n];\n\npeople.sort((a, b) => a.age - b.age);\nconsole.log(people.map(p => p.name)); // ["Alice", "Charlie", "Bob"]\n\nconst letters = ["a", "b", "c"];\nletters.reverse();\nconsole.log(letters); // ["c", "b", "a"]'
            }
        ],
        bestPractices: [
            'Always provide a comparator function when sorting numbers - the default string-based sort produces incorrect ordering',
            'Remember sort() and reverse() both mutate the original array in place - copy it first with [...arr].sort() if you need to preserve the original',
            'For sorting objects, subtract the numeric property (a.value - b.value) for ascending order, or swap the order for descending',
            'Use localeCompare() as the comparator when sorting strings that may contain accented characters, for correct alphabetical ordering'
        ]
    },

    {
        id: 'js-array-flat-flatmap',
        title: 'flat() and flatMap()',
        library: 'js',
        category: 'arrays',
        description: 'flat() creates a new array with nested sub-arrays flattened up to a specified depth (default 1 level). flatMap() combines mapping and flattening in a single, more efficient step - it maps each element and then flattens the result by exactly one level, useful when a mapping function returns an array for each item.',
        syntax: 'arr.flat(depth)\narr.flatMap(item => [values])',
        examples: [
            {
                title: 'flat() - Flattening Nested Arrays',
                description: 'Flattening arrays to different depths.',
                code: 'const nested = [1, [2, 3], [4, [5, 6]]];\n\nconsole.log(nested.flat());     // [1, 2, 3, 4, [5, 6]] - only 1 level by default\nconsole.log(nested.flat(2));    // [1, 2, 3, 4, 5, 6] - 2 levels deep\nconsole.log(nested.flat(Infinity)); // fully flattens any depth'
            },
            {
                title: 'flatMap() - Map Then Flatten',
                description: 'A common use case: expanding each element into multiple elements.',
                code: 'const sentences = ["Hello world", "How are you"];\n\nconst words = sentences.flatMap(s => s.split(" "));\nconsole.log(words); // ["Hello", "world", "How", "are", "you"]\n\n// Equivalent to, but more efficient than:\n// sentences.map(s => s.split(" ")).flat()'
            }
        ],
        bestPractices: [
            'Use flat() when you already have a nested array structure that needs flattening',
            'Use flatMap() instead of .map().flat() when your mapping function returns arrays - it is more efficient since it avoids creating an intermediate array',
            'Be cautious with flat(Infinity) on deeply nested or very large structures - consider whether the nesting itself should be avoided at the source',
            'Remember flat() and flatMap() both return new arrays and do not modify the original'
        ]
    },

    {
        id: 'js-array-fill-copywithin',
        title: 'fill() and copyWithin()',
        library: 'js',
        category: 'arrays',
        description: 'fill() changes all elements in an array (or a specified range) to a single static value, mutating the array in place - useful for initializing arrays. copyWithin() copies a sequence of elements to another position within the same array, also mutating in place, without changing the array\'s length.',
        syntax: 'arr.fill(value, start, end)\narr.copyWithin(target, start, end)',
        examples: [
            {
                title: 'fill() - Initializing an Array',
                description: 'A common pattern for creating an array of a fixed size with default values.',
                code: 'const zeros = new Array(5).fill(0);\nconsole.log(zeros); // [0, 0, 0, 0, 0]\n\nconst partial = [1, 2, 3, 4, 5];\npartial.fill(0, 1, 3); // fill with 0, starting at index 1, up to (not including) index 3\nconsole.log(partial); // [1, 0, 0, 4, 5]'
            },
            {
                title: 'copyWithin() - Copying Within the Same Array',
                description: 'Shifting a section of elements to overwrite another section.',
                code: 'const arr = [1, 2, 3, 4, 5];\narr.copyWithin(0, 3); // copy from index 3 to the end, paste starting at index 0\nconsole.log(arr); // [4, 5, 3, 4, 5]'
            }
        ],
        bestPractices: [
            'Use fill() combined with new Array(n) to quickly initialize a fixed-size array with default values before populating it',
            'Remember fill() and copyWithin() both mutate the array in place - copy first if the original needs to stay unchanged',
            'copyWithin() is rarely needed in typical application code - it is more common in performance-sensitive or lower-level array manipulation',
            'Double-check start/end index arguments carefully, as off-by-one mistakes are easy to make with these methods'
        ]
    },

    {
        id: 'js-string-basics',
        title: 'String Basics: length, charAt(), at()',
        library: 'js',
        category: 'strings',
        description: 'Strings are immutable sequences of characters - every string method returns a new string rather than modifying the original. The length property gives the character count. charAt() returns the character at a given index, while the newer at() method also supports negative indices to count from the end.',
        syntax: 'str.length\nstr.charAt(index)\nstr.at(index)',
        examples: [
            {
                title: 'Length and Character Access',
                description: 'Getting a string\'s length and accessing individual characters.',
                code: 'const text = "Hello";\n\nconsole.log(text.length);     // 5\nconsole.log(text.charAt(0));  // "H"\nconsole.log(text[1]);         // "e" - bracket access also works\nconsole.log(text.charAt(10)); // "" - out of range returns empty string'
            },
            {
                title: 'at() with Negative Indices',
                description: 'Using at() to easily access characters from the end of the string.',
                code: 'const text = "JavaScript";\n\nconsole.log(text.at(0));  // "J"\nconsole.log(text.at(-1)); // "t" - last character\nconsole.log(text.at(-2)); // "p" - second to last\n\n// Compare with charAt(), which has no negative index support\nconsole.log(text.charAt(text.length - 1)); // "t" - more verbose equivalent'
            }
        ],
        bestPractices: [
            'Use at(-1) instead of str[str.length - 1] for cleaner access to the last character',
            'Remember strings are immutable - "changing" a character actually means creating an entirely new string',
            'Use bracket notation (str[0]) or charAt() interchangeably for simple positive-index access - both work identically for valid indices',
            'Check .length before accessing indices in a loop to avoid undefined results from out-of-range access'
        ]
    },

    {
        id: 'js-string-extract',
        title: 'slice(), substring(), substr()',
        library: 'js',
        category: 'strings',
        description: 'These three methods extract a portion of a string as a new string. slice() and substring() are similar, but slice() accepts negative indices (counting from the end) while substring() treats negative values as 0 and swaps arguments if start is greater than end. substr() (deprecated) uses a start index and a length rather than an end index.',
        syntax: 'str.slice(start, end)\nstr.substring(start, end)',
        examples: [
            {
                title: 'slice() - The Recommended Choice',
                description: 'Extracting substrings, including with negative indices.',
                code: 'const text = "Hello World";\n\nconsole.log(text.slice(0, 5));  // "Hello"\nconsole.log(text.slice(6));     // "World"\nconsole.log(text.slice(-5));    // "World" - last 5 characters'
            },
            {
                title: 'substring() and Its Quirks',
                description: 'Similar to slice(), but with different edge-case handling.',
                code: 'const text = "Hello World";\n\nconsole.log(text.substring(0, 5)); // "Hello" - same as slice() here\nconsole.log(text.substring(-3));   // "Hello World" - negative treated as 0!\nconsole.log(text.substring(5, 0)); // "Hello" - swaps arguments if start > end'
            }
        ],
        bestPractices: [
            'Prefer slice() over substring() and substr() - it has more predictable, useful behavior with negative indices and no deprecated status',
            'Avoid substr() entirely in new code - it is deprecated, even though many browsers still support it',
            'Remember all three treat the end index as exclusive - slice(0, 5) gets characters at indices 0 through 4',
            'Use negative indices with slice() to extract from the end without manually calculating string.length - n'
        ]
    },

    {
        id: 'js-string-search',
        title: 'indexOf(), includes(), startsWith(), endsWith()',
        library: 'js',
        category: 'strings',
        description: 'These methods search within a string for a substring. indexOf() returns the position of the first match (or -1). includes() returns a simple true/false. startsWith() and endsWith() check specifically whether the string begins or ends with a given substring. All are case-sensitive.',
        syntax: 'str.indexOf(substring)\nstr.includes(substring)\nstr.startsWith(substring)\nstr.endsWith(substring)',
        examples: [
            {
                title: 'indexOf() and includes()',
                description: 'Finding whether and where a substring appears.',
                code: 'const text = "The quick brown fox";\n\nconsole.log(text.indexOf("quick"));  // 4\nconsole.log(text.indexOf("lazy"));   // -1 - not found\nconsole.log(text.includes("brown")); // true\nconsole.log(text.includes("Brown")); // false - case-sensitive'
            },
            {
                title: 'startsWith() and endsWith()',
                description: 'Checking the beginning or end of a string specifically.',
                code: 'const filename = "report.pdf";\n\nconsole.log(filename.endsWith(".pdf"));   // true\nconsole.log(filename.endsWith(".docx"));  // false\nconsole.log(filename.startsWith("report")); // true\n\n// Common use: validating file extensions or URL prefixes\nconst url = "https://example.com";\nconsole.log(url.startsWith("https://")); // true'
            }
        ],
        bestPractices: [
            'Use includes() for a simple presence check instead of indexOf() !== -1 - it is more readable',
            'Use startsWith()/endsWith() instead of manually slicing strings to check prefixes or suffixes',
            'Convert both sides with toLowerCase() first if you need a case-insensitive search',
            'Remember all these methods are case-sensitive by default - "Hello".includes("hello") is false'
        ]
    },

    {
        id: 'js-string-replace',
        title: 'replace() and replaceAll()',
        library: 'js',
        category: 'strings',
        description: 'replace() returns a new string with the first match of a pattern replaced by a new value - or all matches, if the pattern is a regex with the global (g) flag. replaceAll(), introduced in ES2021, always replaces every occurrence without needing a regex, making simple find-and-replace-all operations more straightforward.',
        syntax: 'str.replace(pattern, replacement)\nstr.replaceAll(pattern, replacement)',
        examples: [
            {
                title: 'replace() - First Match Only',
                description: 'The default behavior replaces only the first occurrence.',
                code: 'const text = "cat and cat and cat";\n\nconsole.log(text.replace("cat", "dog"));\n// "dog and cat and cat" - only the first match is replaced'
            },
            {
                title: 'replaceAll() - Every Match',
                description: 'Replacing all occurrences without needing a regex.',
                code: 'const text = "cat and cat and cat";\n\nconsole.log(text.replaceAll("cat", "dog"));\n// "dog and dog and dog"'
            },
            {
                title: 'Using a Function as the Replacement',
                description: 'Dynamically computing the replacement value for each match.',
                code: 'const prices = "Item1: $10, Item2: $25";\n\nconst discounted = prices.replace(/\\$(\\d+)/g, (match, amount) => {\n  return `$${Math.round(amount * 0.9)}`;\n});\n\nconsole.log(discounted); // "Item1: $9, Item2: $23" (rounded)'
            }
        ],
        bestPractices: [
            'Use replaceAll() for simple string replacements when you want every occurrence changed - it needs no regex or g flag',
            'Use replace() with a regex and the g flag if you need pattern-based (not literal string) global replacement',
            'Remember these methods return a new string - the original string is never modified, since strings are immutable',
            'Use a function as the replacement argument when the new value needs to be computed based on the match itself'
        ]
    },

    {
        id: 'js-string-split',
        title: 'split()',
        library: 'js',
        category: 'strings',
        description: 'split() divides a string into an array of substrings based on a specified separator, which can be a literal string or a regular expression. It is the inverse operation of Array.prototype.join(). An optional second argument limits the number of resulting elements.',
        syntax: 'str.split(separator, limit)',
        examples: [
            {
                title: 'Basic Splitting',
                description: 'Splitting a string on a delimiter character.',
                code: 'const csv = "apple,banana,cherry";\nconsole.log(csv.split(",")); // ["apple", "banana", "cherry"]\n\nconst sentence = "The quick brown fox";\nconsole.log(sentence.split(" ")); // ["The", "quick", "brown", "fox"]\n\nconsole.log("hello".split("")); // ["h", "e", "l", "l", "o"] - split into characters'
            },
            {
                title: 'Splitting with a Regex and Limit',
                description: 'Using a pattern to split on multiple possible delimiters, and limiting results.',
                code: 'const messy = "one, two,  three,four";\nconsole.log(messy.split(/,\\s*/)); // ["one", "two", "three", "four"]\n\nconst limited = "a-b-c-d".split("-", 2);\nconsole.log(limited); // ["a", "b"] - stops after 2 elements'
            }
        ],
        bestPractices: [
            'Use split("") only for short strings when you specifically need individual characters - it does not correctly handle some Unicode characters',
            'Use a regex separator when the delimiter pattern is inconsistent, like extra whitespace around commas',
            'Combine split() and join() for quick string transformations, like reversing word order in a sentence',
            'Remember the limit argument truncates the result array - it does not stop the splitting logic from continuing internally'
        ]
    },

    {
        id: 'js-string-trim',
        title: 'trim(), trimStart(), trimEnd()',
        library: 'js',
        category: 'strings',
        description: 'trim() removes whitespace from both ends of a string, commonly used to clean up user input before validation or storage. trimStart() and trimEnd() (aliases: trimLeft/trimRight) remove whitespace from only the beginning or end respectively.',
        syntax: 'str.trim()\nstr.trimStart()\nstr.trimEnd()',
        examples: [
            {
                title: 'Basic Trimming',
                description: 'Cleaning whitespace from user input.',
                code: 'const input = "   hello world   ";\n\nconsole.log(trim = input.trim());       // "hello world"\nconsole.log(input.trimStart());          // "hello world   " - only leading removed\nconsole.log(input.trimEnd());            // "   hello world" - only trailing removed'
            },
            {
                title: 'Validating Trimmed Input',
                description: 'A common real-world pattern for form validation.',
                code: 'function validateUsername(input) {\n  const trimmed = input.trim();\n  if (trimmed.length === 0) {\n    return "Username cannot be empty or just whitespace";\n  }\n  return `Valid username: ${trimmed}`;\n}\n\nconsole.log(validateUsername("   ")); // "Username cannot be empty or just whitespace"\nconsole.log(validateUsername("  alice  ")); // "Valid username: alice"'
            }
        ],
        bestPractices: [
            'Always trim() user input before validation checks (like checking for empty strings) to catch whitespace-only submissions',
            'Trim input before storing it, to avoid inconsistent data caused by accidental leading/trailing spaces',
            'Use trimStart()/trimEnd() specifically when only one side needs cleaning, such as preserving intentional trailing formatting',
            'Remember trim() only removes whitespace characters (spaces, tabs, newlines), not other characters like punctuation'
        ]
    },

    {
        id: 'js-string-case',
        title: 'toUpperCase() and toLowerCase()',
        library: 'js',
        category: 'strings',
        description: 'toUpperCase() and toLowerCase() return a new string with all characters converted to the respective case. They are frequently used for case-insensitive comparisons, since converting both sides to the same case avoids inconsistent casing causing a false mismatch.',
        syntax: 'str.toUpperCase()\nstr.toLowerCase()',
        examples: [
            {
                title: 'Basic Case Conversion',
                description: 'Converting a string\'s case.',
                code: 'const text = "Hello World";\n\nconsole.log(text.toUpperCase()); // "HELLO WORLD"\nconsole.log(text.toLowerCase()); // "hello world"'
            },
            {
                title: 'Case-Insensitive Comparison',
                description: 'A very common real-world use: comparing strings regardless of case.',
                code: 'function isSameWord(a, b) {\n  return a.toLowerCase() === b.toLowerCase();\n}\n\nconsole.log(isSameWord("Hello", "hello")); // true\nconsole.log(isSameWord("JavaScript", "javascript")); // true\n\n// Also useful for case-insensitive search\nconst items = ["Apple", "Banana", "Cherry"];\nconst search = "banana";\nconst found = items.find(item => item.toLowerCase() === search.toLowerCase());\nconsole.log(found); // "Banana"'
            }
        ],
        bestPractices: [
            'Convert both sides to the same case before comparing user input against known values, to make comparisons case-insensitive',
            'Use toLocaleUpperCase()/toLocaleLowerCase() instead when working with locale-specific characters, like Turkish "İ"/"i"',
            'Remember these return new strings - the original is never modified',
            'Store data in a consistent case (like all lowercase) if you frequently need case-insensitive lookups, rather than converting on every comparison'
        ]
    },

    {
        id: 'js-string-pad-repeat',
        title: 'padStart(), padEnd(), repeat()',
        library: 'js',
        category: 'strings',
        description: 'padStart() and padEnd() pad a string with a specified character until it reaches a target length, commonly used for formatting numbers with leading zeros or aligning text in columns. repeat() returns a new string with the original repeated a specified number of times.',
        syntax: 'str.padStart(targetLength, padString)\nstr.padEnd(targetLength, padString)\nstr.repeat(count)',
        examples: [
            {
                title: 'Padding Numbers',
                description: 'A common use case: formatting numbers with leading zeros.',
                code: 'console.log("5".padStart(2, "0"));  // "05"\nconsole.log("42".padStart(5, "0")); // "00042"\nconsole.log("7".padEnd(3, "*"));    // "7**"\n\n// Formatting a countdown timer\nfunction formatTime(minutes, seconds) {\n  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;\n}\nconsole.log(formatTime(3, 5)); // "03:05"'
            },
            {
                title: 'repeat()',
                description: 'Repeating a string a specified number of times.',
                code: 'console.log("ab".repeat(3)); // "ababab"\nconsole.log("-".repeat(20)); // "--------------------"\n\n// Simple indentation helper\nfunction indent(text, level) {\n  return "  ".repeat(level) + text;\n}\nconsole.log(indent("nested item", 2)); // "    nested item"'
            }
        ],
        bestPractices: [
            'Use padStart() for right-aligning content like numbers, and padEnd() for left-aligning content like table columns',
            'Convert numbers to strings first with String() before padding, since pad methods only work on strings',
            'Use repeat() for generating separator lines, indentation, or simple ASCII visualizations',
            'Watch out for negative or non-integer arguments to repeat() - they throw a RangeError'
        ]
    },

    {
        id: 'js-number-methods',
        title: 'Number Methods & Parsing',
        library: 'js',
        category: 'math',
        description: 'Number methods handle formatting and validation. toFixed() formats a number to a fixed number of decimal places, returning a string. parseInt() and parseFloat() convert strings to numbers, stopping at the first invalid character. Number.isInteger() and Number.isNaN() provide more reliable type checks than their global counterparts.',
        syntax: 'num.toFixed(digits)\nparseInt(string)\nparseFloat(string)',
        examples: [
            {
                title: 'Formatting with toFixed()',
                description: 'Rounding and formatting numbers to a fixed decimal precision.',
                code: 'const price = 19.9899;\n\nconsole.log(price.toFixed(2)); // "19.99" - returns a STRING\nconsole.log(price.toFixed(0)); // "20"\n\nconst whole = 5;\nconsole.log(whole.toFixed(2)); // "5.00"'
            },
            {
                title: 'parseInt() and parseFloat()',
                description: 'Extracting numeric values from the start of a string.',
                code: 'console.log(parseInt("42px"));     // 42 - stops at the first non-numeric character\nconsole.log(parseInt("3.14"));     // 3 - parseInt ignores decimals\nconsole.log(parseFloat("3.14px")); // 3.14\nconsole.log(parseInt("abc"));      // NaN\n\n// Always specify the radix for parseInt to avoid ambiguity\nconsole.log(parseInt("08", 10)); // 8'
            },
            {
                title: 'Number.isInteger() and Number.isNaN()',
                description: 'More reliable checks than the global isNaN() and manual integer testing.',
                code: 'console.log(Number.isInteger(5));    // true\nconsole.log(Number.isInteger(5.5));  // false\n\nconsole.log(Number.isNaN(NaN));      // true\nconsole.log(Number.isNaN("hello"));  // false - unlike global isNaN(), does not coerce first\nconsole.log(isNaN("hello"));         // true - global isNaN coerces "hello" to NaN first, which is misleading'
            }
        ],
        bestPractices: [
            'Always specify the radix (base) as the second argument to parseInt(), like parseInt(str, 10), to avoid ambiguity with leading zeros',
            'Remember toFixed() returns a string, not a number - convert back with Number() if further math is needed',
            'Prefer Number.isNaN() over the global isNaN(), since the global version coerces its argument first and can give misleading results',
            'Use Number.isInteger() rather than % 1 === 0 checks for clearer, more explicit integer validation'
        ]
    },

    {
        id: 'js-math-object',
        title: 'Math Object: round, floor, ceil, abs, max, min, pow, sqrt',
        library: 'js',
        category: 'math',
        description: 'The Math object provides mathematical constants and functions as static methods - it is not a constructor, so you never create a Math instance. Common methods include rounding (round, floor, ceil, trunc), extremes (max, min), and power operations (pow, sqrt, cbrt).',
        syntax: 'Math.round(num)\nMath.floor(num)\nMath.max(...nums)',
        examples: [
            {
                title: 'Rounding Methods',
                description: 'The different ways to round a number, and how they differ.',
                code: 'console.log(Math.round(4.5));  // 5 - rounds to nearest, ties round up\nconsole.log(Math.round(4.4));  // 4\nconsole.log(Math.floor(4.9));  // 4 - always rounds down\nconsole.log(Math.ceil(4.1));   // 5 - always rounds up\nconsole.log(Math.trunc(4.9));  // 4 - simply removes the decimal part\nconsole.log(Math.trunc(-4.9)); // -4 - different from floor for negatives'
            },
            {
                title: 'abs(), max(), and min()',
                description: 'Absolute value and finding extremes among values.',
                code: 'console.log(Math.abs(-5));       // 5\nconsole.log(Math.max(3, 7, 2));  // 7\nconsole.log(Math.min(3, 7, 2));  // 2\n\n// Finding max/min in an array requires spread\nconst numbers = [4, 8, 2, 9, 1];\nconsole.log(Math.max(...numbers)); // 9'
            },
            {
                title: 'pow() and sqrt()',
                description: 'Power and square root operations.',
                code: 'console.log(Math.pow(2, 3));  // 8 - same as 2 ** 3\nconsole.log(2 ** 3);           // 8 - the ** operator is now preferred\nconsole.log(Math.sqrt(16));    // 4\nconsole.log(Math.cbrt(27));    // 3 - cube root'
            }
        ],
        bestPractices: [
            'Use the ** exponentiation operator instead of Math.pow() in modern code - it is more concise for the common case',
            'Choose the right rounding method deliberately - round() for nearest, floor()/ceil() when you specifically need to always round down/up',
            'Use Math.max(...array) with spread syntax to find the largest value in an array, since Math.max() itself takes individual arguments',
            'Remember Math methods are all static - always call them as Math.round(), never new Math().round()'
        ]
    },

    {
        id: 'js-math-random',
        title: 'Math.random()',
        library: 'js',
        category: 'math',
        description: 'Math.random() returns a pseudo-random floating-point number between 0 (inclusive) and 1 (exclusive). It is commonly combined with multiplication and Math.floor() to generate random integers within a specific range. It is not cryptographically secure - for security-sensitive randomness, use the Web Crypto API instead.',
        syntax: 'Math.random()',
        examples: [
            {
                title: 'Basic Random Number',
                description: 'Generating a raw random decimal between 0 and 1.',
                code: 'console.log(Math.random()); // e.g. 0.7234891...\nconsole.log(Math.random()); // a different value each time'
            },
            {
                title: 'Random Integer in a Range',
                description: 'The standard formula for generating a random whole number within bounds.',
                code: 'function randomInt(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\nconsole.log(randomInt(1, 6));   // simulates a dice roll (1-6)\nconsole.log(randomInt(1, 100)); // random number 1-100'
            },
            {
                title: 'Picking a Random Array Element',
                description: 'A common practical use of Math.random().',
                code: 'const colors = ["red", "green", "blue", "yellow"];\n\nfunction randomChoice(arr) {\n  const index = Math.floor(Math.random() * arr.length);\n  return arr[index];\n}\n\nconsole.log(randomChoice(colors)); // a random color from the array'
            }
        ],
        bestPractices: [
            'Use the Math.floor(Math.random() * (max - min + 1)) + min formula for inclusive random integers in a range',
            'Do not use Math.random() for anything security-related (tokens, passwords, keys) - use crypto.getRandomValues() instead',
            'Remember Math.random() never returns exactly 1, so ranges should account for that when calculating maximums',
            'Seed-based reproducible randomness is not built in - use a dedicated library if you need deterministic "random" sequences for testing'
        ]
    },

    {
        id: 'js-date-create-get',
        title: 'Date: Creating and Getting Values',
        library: 'js',
        category: 'date',
        description: 'The Date object represents a single moment in time. new Date() with no arguments creates the current date/time; it also accepts a specific date, individual components (year, month, day...), or a timestamp. Getter methods like getFullYear(), getMonth(), and getDate() extract individual components - note that getMonth() is zero-indexed (0 = January).',
        syntax: 'new Date()\ndate.getFullYear()\ndate.getMonth()',
        examples: [
            {
                title: 'Creating Dates',
                description: 'Different ways to construct a Date object.',
                code: 'const now = new Date(); // current date and time\nconst specific = new Date(2024, 5, 15); // June 15, 2024 - month is 0-indexed!\nconst fromString = new Date("2024-06-15");\nconst fromTimestamp = new Date(1718409600000); // milliseconds since Jan 1, 1970\n\nconsole.log(specific); // June 15 2024'
            },
            {
                title: 'Getter Methods',
                description: 'Extracting individual components from a Date object.',
                code: 'const date = new Date(2024, 5, 15); // June 15, 2024\n\nconsole.log(date.getFullYear()); // 2024\nconsole.log(date.getMonth());    // 5 - remember, 0-indexed! (0=Jan, 5=Jun)\nconsole.log(date.getDate());     // 15 - day of the month\nconsole.log(date.getDay());      // day of the week (0=Sunday, 6=Saturday)\nconsole.log(date.getHours());    // hour (0-23)'
            },
            {
                title: 'Date.now() and Timestamps',
                description: 'Getting the current timestamp for calculations, like measuring elapsed time.',
                code: 'const start = Date.now(); // current timestamp in milliseconds\n\n// ... some operation happens ...\n\nconst end = Date.now();\nconsole.log(`Took ${end - start}ms`);\n\n// Comparing two dates by their timestamps\nconst date1 = new Date(2024, 0, 1);\nconst date2 = new Date(2024, 5, 1);\nconsole.log(date2.getTime() > date1.getTime()); // true'
            }
        ],
        bestPractices: [
            'Remember getMonth() is zero-indexed (January is 0, December is 11) - a very common source of off-by-one bugs',
            'Use Date.now() rather than new Date().getTime() when you just need the current timestamp for comparisons or performance measurement',
            'Prefer ISO 8601 format ("2024-06-15") when creating dates from strings, since other formats can be parsed inconsistently across browsers',
            'For serious date manipulation (time zones, formatting, arithmetic), consider a dedicated library or the newer Temporal API rather than hand-rolling logic with the legacy Date object'
        ]
    },

    {
        id: 'js-date-set-format',
        title: 'Date: Setting and Formatting',
        library: 'js',
        category: 'date',
        description: 'Setter methods like setFullYear() and setDate() modify a Date object in place. Formatting methods convert a Date into a readable string: toDateString() and toTimeString() give simple readable formats, toISOString() gives the standardized ISO 8601 format (useful for APIs), and toLocaleDateString() formats according to a locale\'s conventions.',
        syntax: 'date.setFullYear(year)\ndate.toISOString()\ndate.toLocaleDateString()',
        examples: [
            {
                title: 'Setter Methods',
                description: 'Modifying parts of an existing Date object.',
                code: 'const date = new Date(2024, 0, 1); // January 1, 2024\n\ndate.setFullYear(2025);\ndate.setMonth(5); // June (0-indexed)\ndate.setDate(15);\n\nconsole.log(date); // June 15, 2025'
            },
            {
                title: 'ISO String - For APIs and Storage',
                description: 'The standardized format, ideal for sending dates to a server.',
                code: 'const date = new Date(2024, 5, 15, 14, 30);\nconsole.log(date.toISOString());\n// "2024-06-15T13:30:00.000Z" (converted to UTC)'
            },
            {
                title: 'Locale-Formatted Display Strings',
                description: 'Formatting dates for human-readable display.',
                code: 'const date = new Date(2024, 5, 15);\n\nconsole.log(date.toDateString());  // "Sat Jun 15 2024"\nconsole.log(date.toLocaleDateString());        // "6/15/2024" (locale-dependent)\nconsole.log(date.toLocaleDateString("en-GB")); // "15/06/2024"\nconsole.log(date.toLocaleDateString("en-US", {\n  weekday: "long", year: "numeric", month: "long", day: "numeric"\n})); // "Saturday, June 15, 2024"'
            }
        ],
        bestPractices: [
            'Use toISOString() when sending dates to a server or storing them - it is unambiguous and timezone-standardized (UTC)',
            'Use toLocaleDateString() with explicit locale and options for user-facing display, rather than the raw toDateString() output',
            'Remember setter methods mutate the Date object in place - copy it first with new Date(originalDate) if you need to preserve the original',
            'Be mindful of time zone differences - toISOString() converts to UTC, which can shift the displayed date/time relative to the user\'s local time'
        ]
    },

    {
        id: 'js-object-methods',
        title: 'Object.keys(), values(), entries(), assign(), freeze()',
        library: 'js',
        category: 'basics',
        description: 'These static Object methods work with any plain object. keys(), values(), and entries() return arrays of an object\'s own enumerable property names, values, or [key, value] pairs respectively - useful for iterating over objects. assign() copies properties from source objects into a target. freeze() prevents any further modification to an object.',
        syntax: 'Object.keys(obj)\nObject.values(obj)\nObject.entries(obj)',
        examples: [
            {
                title: 'keys(), values(), entries()',
                description: 'The three ways to extract data from an object for iteration.',
                code: 'const user = { name: "Alice", age: 25, city: "London" };\n\nconsole.log(Object.keys(user));   // ["name", "age", "city"]\nconsole.log(Object.values(user)); // ["Alice", 25, "London"]\nconsole.log(Object.entries(user)); // [["name","Alice"],["age",25],["city","London"]]\n\n// entries() pairs perfectly with for...of\nfor (const [key, value] of Object.entries(user)) {\n  console.log(`${key}: ${value}`);\n}'
            },
            {
                title: 'Object.assign() - Merging Objects',
                description: 'Copying properties from one or more source objects into a target.',
                code: 'const defaults = { theme: "light", fontSize: 14 };\nconst userPrefs = { fontSize: 18 };\n\nconst merged = Object.assign({}, defaults, userPrefs);\nconsole.log(merged); // { theme: "light", fontSize: 18 }\n\n// Note: the spread operator ({...defaults, ...userPrefs}) does the same thing and is more common today'
            },
            {
                title: 'Object.freeze() - Immutability',
                description: 'Preventing an object from being modified after creation.',
                code: 'const config = Object.freeze({ apiUrl: "https://api.example.com", timeout: 5000 });\n\nconfig.timeout = 10000; // silently fails in non-strict mode, throws in strict mode\nconsole.log(config.timeout); // still 5000 - the object is frozen\n\nconsole.log(Object.isFrozen(config)); // true'
            }
        ],
        bestPractices: [
            'Use Object.entries() combined with for...of or map() when you need both the key and value while iterating',
            'Prefer spread syntax ({...obj}) over Object.assign() for merging objects in modern code - it is more concise and equally capable',
            'Use Object.freeze() for configuration objects or constants that should never be accidentally mutated',
            'Remember Object.freeze() is shallow - nested objects inside a frozen object can still be modified unless they are frozen too'
        ]
    },

    {
        id: 'js-promises',
        title: 'Promises',
        library: 'js',
        category: 'async',
        description: 'A Promise represents a value that may not be available yet - the eventual result of an asynchronous operation. It exists in one of three states: pending, fulfilled, or rejected. then() handles a successful result, catch() handles an error, and finally() runs regardless of outcome. Promises are the foundation that async/await is built on top of.',
        syntax: 'new Promise((resolve, reject) => { })\npromise.then(onSuccess).catch(onError)',
        examples: [
            {
                title: 'Creating and Using a Promise',
                description: 'Wrapping an asynchronous operation in a Promise.',
                code: 'function fetchUserData(userId) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (userId > 0) {\n        resolve({ id: userId, name: "Alice" });\n      } else {\n        reject(new Error("Invalid user ID"));\n      }\n    }, 1000);\n  });\n}\n\nfetchUserData(1)\n  .then(user => console.log(user))\n  .catch(error => console.log(error.message));'
            },
            {
                title: 'Chaining Promises',
                description: 'Each then() returns a new promise, allowing sequential operations.',
                code: 'fetch("/api/user/1")\n  .then(response => response.json())\n  .then(user => {\n    console.log("User:", user.name);\n    return fetch(`/api/posts/${user.id}`);\n  })\n  .then(response => response.json())\n  .then(posts => console.log("Posts:", posts))\n  .catch(error => console.log("Something failed:", error.message))\n  .finally(() => console.log("Request cycle complete"));'
            }
        ],
        bestPractices: [
            'Always add a .catch() to handle rejected promises - an unhandled rejection can silently fail or crash depending on the environment',
            'Return a value or another promise from inside .then() when chaining, so the next .then() receives the right data',
            'Prefer async/await over long .then() chains in most cases - it reads more like familiar synchronous code',
            'Use .finally() for cleanup logic (hiding a spinner, closing a connection) that should run whether the promise succeeds or fails'
        ]
    },

    {
        id: 'js-promise-combinators',
        title: 'Promise.all(), allSettled(), race(), any()',
        library: 'js',
        category: 'async',
        description: 'These static methods handle multiple promises at once. Promise.all() waits for every promise to resolve, but rejects immediately if any one fails. allSettled() waits for all to finish regardless of outcome, giving you both successes and failures. race() resolves or rejects as soon as the first promise settles. any() resolves as soon as the first one succeeds, ignoring rejections unless all fail.',
        syntax: 'Promise.all([p1, p2, p3])\nPromise.allSettled([p1, p2, p3])',
        examples: [
            {
                title: 'Promise.all() - All or Nothing',
                description: 'Running independent requests in parallel and waiting for all of them.',
                code: 'const userPromise = fetch("/api/user").then(r => r.json());\nconst postsPromise = fetch("/api/posts").then(r => r.json());\n\nPromise.all([userPromise, postsPromise])\n  .then(([user, posts]) => {\n    console.log(user, posts);\n  })\n  .catch(error => {\n    console.log("At least one request failed:", error.message);\n  });'
            },
            {
                title: 'Promise.allSettled() - Getting Every Result',
                description: 'Useful when you need results from every promise, even if some fail.',
                code: 'const promises = [\n  Promise.resolve("Success 1"),\n  Promise.reject("Failure 1"),\n  Promise.resolve("Success 2")\n];\n\nPromise.allSettled(promises).then(results => {\n  results.forEach(result => {\n    if (result.status === "fulfilled") {\n      console.log("Success:", result.value);\n    } else {\n      console.log("Failed:", result.reason);\n    }\n  });\n});'
            }
        ],
        bestPractices: [
            'Use Promise.all() when every operation must succeed for the result to be useful - like loading required page data',
            'Use Promise.allSettled() when partial success is acceptable and you want to know exactly what failed without stopping the rest',
            'Use Promise.race() for timeout patterns - race a real request against a promise that rejects after a delay',
            'Avoid awaiting promises sequentially in a loop when they are independent - use Promise.all() with map() to run them in parallel instead'
        ]
    },

    {
        id: 'js-fetch-api',
        title: 'Fetch API',
        library: 'js',
        category: 'async',
        description: 'The Fetch API provides a modern, promise-based way to make HTTP requests, replacing the older XMLHttpRequest. fetch() returns a promise that resolves to a Response object once headers are received - note that a Response is only considered "ok" if the status is 2xx, so checking response.ok is essential, since fetch() does not reject on HTTP error statuses.',
        syntax: 'fetch(url, options).then(response => response.json())',
        examples: [
            {
                title: 'Basic GET Request',
                description: 'Fetching and parsing JSON data.',
                code: 'fetch("https://api.example.com/users/1")\n  .then(response => {\n    if (!response.ok) {\n      throw new Error(`HTTP error: ${response.status}`);\n    }\n    return response.json();\n  })\n  .then(user => console.log(user))\n  .catch(error => console.log("Fetch failed:", error.message));'
            },
            {
                title: 'POST Request with async/await',
                description: 'Sending data with a request, and awaiting the result.',
                code: 'async function createUser(userData) {\n  try {\n    const response = await fetch("https://api.example.com/users", {\n      method: "POST",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify(userData)\n    });\n\n    if (!response.ok) {\n      throw new Error(`Server responded with ${response.status}`);\n    }\n\n    return await response.json();\n  } catch (error) {\n    console.log("Failed to create user:", error.message);\n  }\n}\n\ncreateUser({ name: "Alice", email: "alice@example.com" });'
            }
        ],
        bestPractices: [
            'Always check response.ok before parsing - fetch() only rejects on network failures, not on HTTP error statuses like 404 or 500',
            'Wrap fetch calls in try/catch (with async/await) or add a .catch() to handle network failures gracefully',
            'Set the Content-Type header explicitly when sending JSON, and remember to JSON.stringify() the body',
            'Use AbortController to cancel a fetch request if it is no longer needed, such as when a user navigates away'
        ]
    },

    {
        id: 'js-event-listeners',
        title: 'addEventListener() and the Event Object',
        library: 'js',
        category: 'events',
        description: 'addEventListener() attaches a function to run when a specific event occurs on an element, without overwriting any other listeners already attached (unlike the older onclick= style). The callback receives an Event object with details about what happened, including target (the element that triggered it) and methods like preventDefault().',
        syntax: 'element.addEventListener("event", callback)',
        examples: [
            {
                title: 'Basic Click Listener',
                description: 'Responding to a button click.',
                code: 'const button = document.querySelector("#myButton");\n\nbutton.addEventListener("click", (event) => {\n  console.log("Button clicked!");\n  console.log("Target:", event.target);\n});'
            },
            {
                title: 'preventDefault() and Form Submission',
                description: 'Stopping an event\'s default browser behavior.',
                code: 'const form = document.querySelector("#myForm");\n\nform.addEventListener("submit", (event) => {\n  event.preventDefault(); // stops the page from reloading\n  console.log("Form submitted via JavaScript instead");\n});'
            },
            {
                title: 'Multiple Listeners and removeEventListener()',
                description: 'Attaching several listeners and later removing one by reference.',
                code: 'function handleClick() {\n  console.log("Clicked!");\n}\n\nconst button = document.querySelector("#myButton");\nbutton.addEventListener("click", handleClick);\n\n// Later, stop listening - requires the SAME function reference\nbutton.removeEventListener("click", handleClick);\n\n// Anonymous functions cannot be removed this way, since a new reference is created each time'
            }
        ],
        bestPractices: [
            'Use addEventListener() instead of inline onclick= attributes or element.onclick = - it allows multiple listeners and cleaner separation of HTML and JavaScript',
            'Keep a reference to named functions if you need to remove a listener later - removeEventListener() requires the exact same function reference',
            'Call event.preventDefault() when you want to override default browser behavior, like a form submitting and reloading the page',
            'Remove event listeners on elements that get removed from the DOM to avoid memory leaks in long-running applications'
        ]
    },

    {
        id: 'js-event-bubbling-delegation',
        title: 'Event Bubbling and Delegation',
        library: 'js',
        category: 'events',
        description: 'Most events "bubble" - after firing on the target element, they also fire on each ancestor element up to the document root, unless stopped with stopPropagation(). Event delegation takes advantage of bubbling by attaching a single listener to a parent element instead of many listeners on individual children, using event.target to identify which child was actually interacted with.',
        syntax: 'parent.addEventListener("event", (e) => { if (e.target.matches(selector)) { } })',
        examples: [
            {
                title: 'Understanding Bubbling',
                description: 'An event fired on a child also triggers listeners on its ancestors.',
                code: '// <div id="outer"><button id="inner">Click</button></div>\n\ndocument.querySelector("#outer").addEventListener("click", () => {\n  console.log("Outer div clicked (via bubbling)");\n});\n\ndocument.querySelector("#inner").addEventListener("click", () => {\n  console.log("Button clicked directly");\n});\n\n// Clicking the button logs both messages, in this order:\n// "Button clicked directly"\n// "Outer div clicked (via bubbling)"'
            },
            {
                title: 'Event Delegation',
                description: 'Using one listener on a parent to handle events from many current and future children.',
                code: '// A single listener handles clicks on ANY .item, even ones added later\ndocument.querySelector("#itemList").addEventListener("click", (event) => {\n  if (event.target.matches(".item")) {\n    console.log("Clicked item:", event.target.textContent);\n  }\n});\n\n// Compare to attaching a separate listener to every .item individually,\n// which would need to be redone whenever new items are added'
            },
            {
                title: 'stopPropagation()',
                description: 'Preventing an event from continuing to bubble up to ancestors.',
                code: 'document.querySelector("#inner").addEventListener("click", (event) => {\n  event.stopPropagation(); // the outer div\'s listener will NOT fire\n  console.log("Only this listener runs");\n});'
            }
        ],
        bestPractices: [
            'Use event delegation for lists or grids where items are added/removed dynamically - one listener on the parent handles all current and future children',
            'Use event.target (the actual element clicked) rather than event.currentTarget (the element the listener is attached to) when delegating',
            'Reserve stopPropagation() for genuine cases where bubbling would cause a real problem - overusing it can break other legitimate listeners expecting the event to bubble',
            'Combine delegation with matches() or closest() to reliably identify which specific child element triggered the event'
        ]
    },

    {
        id: 'js-dom-select',
        title: 'DOM Selection: querySelector(), getElementById()',
        library: 'js',
        category: 'dom',
        description: 'These methods find elements in the DOM. getElementById() finds a single element by its unique id, generally the fastest option. querySelector() finds the first element matching any valid CSS selector, and querySelectorAll() returns all matching elements as a static NodeList.',
        syntax: 'document.getElementById(id)\ndocument.querySelector(selector)\ndocument.querySelectorAll(selector)',
        examples: [
            {
                title: 'getElementById() and querySelector()',
                description: 'Finding a single element two different ways.',
                code: 'const byId = document.getElementById("header");\nconst bySelector = document.querySelector("#header"); // equivalent, but more flexible\n\nconst firstButton = document.querySelector("button");\nconst specificClass = document.querySelector(".btn-primary");\nconst nested = document.querySelector("nav .menu-item.active");'
            },
            {
                title: 'querySelectorAll() and Looping',
                description: 'Selecting multiple elements and iterating over them.',
                code: 'const items = document.querySelectorAll(".list-item");\n\nconsole.log(items.length); // number of matches\n\nitems.forEach(item => {\n  console.log(item.textContent);\n});\n\n// NodeList supports forEach directly, but is NOT a real array\n// use Array.from(items) if you need map/filter/etc.'
            }
        ],
        bestPractices: [
            'Use querySelector()/querySelectorAll() for their flexibility with any valid CSS selector, rather than mixing several older, more specific methods',
            'Use getElementById() when selecting by a known unique ID - it is marginally faster and communicates clear intent',
            'Remember querySelectorAll() returns a static NodeList - it does not update automatically if the DOM changes afterward',
            'Convert a NodeList to a real array with Array.from() if you need array methods like map() or filter() on the results'
        ]
    },

    {
        id: 'js-dom-create-modify',
        title: 'Creating and Modifying Elements',
        library: 'js',
        category: 'dom',
        description: 'createElement() builds a new DOM element in memory, which can then be customized and inserted into the page with methods like appendChild() or append(). textContent sets plain text safely, while innerHTML parses and inserts HTML markup - which carries injection risks if the content includes untrusted user input.',
        syntax: 'document.createElement(tag)\nparent.appendChild(child)\nelement.textContent = text',
        examples: [
            {
                title: 'Creating and Appending an Element',
                description: 'Building a new element from scratch and adding it to the page.',
                code: 'const newItem = document.createElement("li");\nnewItem.textContent = "New list item";\nnewItem.classList.add("list-item");\n\nconst list = document.querySelector("#myList");\nlist.appendChild(newItem);\n\n// append() is a newer alternative that also accepts plain strings\nlist.append("Some plain text", newItem);'
            },
            {
                title: 'textContent vs innerHTML',
                description: 'The important security and behavior difference between the two.',
                code: 'const div = document.querySelector("#output");\n\nconst userInput = "<img src=x onerror=\'alert(1)\'>";\n\ndiv.textContent = userInput; // SAFE - displayed as literal text, not executed\ndiv.innerHTML = userInput;   // DANGEROUS if userInput is untrusted - can execute scripts'
            },
            {
                title: 'Removing Elements',
                description: 'Cleanly removing elements from the DOM.',
                code: 'const item = document.querySelector("#tempMessage");\nitem.remove(); // modern, simple way to remove an element\n\n// Older approach, still seen in some codebases:\n// item.parentNode.removeChild(item);'
            }
        ],
        bestPractices: [
            'Use textContent instead of innerHTML whenever you are inserting plain text, especially anything derived from user input, to avoid XSS vulnerabilities',
            'Only use innerHTML with content you fully trust and control, or after properly sanitizing it',
            'Use element.remove() for removing an element - it is simpler than the older parentNode.removeChild() pattern',
            'Batch multiple DOM insertions where possible (e.g., building a DocumentFragment) instead of appending one element at a time, for better performance on large updates'
        ]
    },

    {
        id: 'js-dom-classlist',
        title: 'classList: add, remove, toggle, contains',
        library: 'js',
        category: 'dom',
        description: 'The classList property provides a convenient API for managing an element\'s CSS classes without manually parsing the className string. add() and remove() add or remove one or more classes, toggle() switches a class on or off based on its current presence, and contains() checks whether a class is currently applied.',
        syntax: 'element.classList.add("class")\nelement.classList.toggle("class")',
        examples: [
            {
                title: 'Adding and Removing Classes',
                description: 'Basic class manipulation.',
                code: 'const box = document.querySelector("#box");\n\nbox.classList.add("active");\nbox.classList.add("highlighted", "large"); // multiple at once\n\nbox.classList.remove("large");\n\nconsole.log(box.className); // "active highlighted"'
            },
            {
                title: 'toggle() - The Common UI Pattern',
                description: 'Switching a class on or off, ideal for things like dropdown menus or active states.',
                code: 'const menuButton = document.querySelector("#menuToggle");\nconst menu = document.querySelector("#menu");\n\nmenuButton.addEventListener("click", () => {\n  menu.classList.toggle("open"); // adds if absent, removes if present\n});\n\n// Force a specific state regardless of current state\nmenu.classList.toggle("open", true);  // always add\nmenu.classList.toggle("open", false); // always remove'
            },
            {
                title: 'contains() - Checking Current State',
                description: 'Testing whether an element currently has a specific class.',
                code: 'const panel = document.querySelector("#panel");\n\nif (panel.classList.contains("collapsed")) {\n  console.log("Panel is currently collapsed");\n} else {\n  console.log("Panel is currently expanded");\n}'
            }
        ],
        bestPractices: [
            'Use classList methods instead of manually manipulating element.className as a string - they handle spacing and duplicates correctly',
            'Use toggle() for on/off UI states like open/closed menus or active/inactive buttons rather than manually checking and calling add()/remove()',
            'Pass the optional second argument to toggle() when you need to force a specific state rather than simply flip the current one',
            'Prefer toggling classes (with the actual styling in CSS) over directly manipulating element.style, for cleaner separation of concerns'
        ]
    },

    {
        id: 'js-storage',
        title: 'localStorage and sessionStorage',
        library: 'js',
        category: 'storage',
        description: 'localStorage and sessionStorage let you store key-value data directly in the browser, using the same simple API. localStorage persists indefinitely, even after closing the browser, while sessionStorage clears when the tab is closed. Both only store strings - objects must be converted with JSON.stringify() and JSON.parse().',
        syntax: 'localStorage.setItem(key, value)\nlocalStorage.getItem(key)',
        examples: [
            {
                title: 'Basic Storage Operations',
                description: 'Storing, retrieving, and removing simple string values.',
                code: 'localStorage.setItem("username", "alice");\nconsole.log(localStorage.getItem("username")); // "alice"\n\nlocalStorage.removeItem("username");\nconsole.log(localStorage.getItem("username")); // null\n\nlocalStorage.setItem("theme", "dark");\nlocalStorage.setItem("fontSize", "16");\nlocalStorage.clear(); // removes everything'
            },
            {
                title: 'Storing Objects with JSON',
                description: 'localStorage only stores strings, so objects need to be serialized.',
                code: 'const userPrefs = { theme: "dark", fontSize: 16, notifications: true };\n\nlocalStorage.setItem("preferences", JSON.stringify(userPrefs));\n\nconst stored = JSON.parse(localStorage.getItem("preferences"));\nconsole.log(stored.theme); // "dark"\nconsole.log(typeof stored); // "object" - properly restored, not just a string'
            },
            {
                title: 'localStorage vs sessionStorage',
                description: 'Choosing the right storage based on how long data should persist.',
                code: '// Persists across browser restarts, until explicitly cleared\nlocalStorage.setItem("rememberedEmail", "user@example.com");\n\n// Cleared automatically when the tab/browser is closed\nsessionStorage.setItem("currentStep", "3");\n\n// Both share the identical API - only the lifetime differs'
            }
        ],
        bestPractices: [
            'Always wrap JSON.parse() calls on stored data in a try/catch, in case the stored value is missing or corrupted',
            'Use sessionStorage for temporary, per-tab data (like a multi-step form\'s progress), and localStorage for data that should persist long-term',
            'Never store sensitive information (passwords, tokens, personal data) in localStorage - it is accessible to any JavaScript running on the page, including malicious scripts',
            'Remember storage is per-origin (protocol + domain + port) and has a size limit (typically around 5-10MB) - it is not a substitute for a real database'
        ]
    },



    {
        id: 'js-proxy-reflect',
        title: 'Proxy and Reflect',
        library: 'js',
        category: 'basics',
        description: 'Proxy wraps an object and lets you intercept and customize fundamental operations on it - like getting, setting, or deleting a property - by defining "trap" functions in a handler object. Reflect provides methods that mirror those same fundamental operations, letting you forward the default behavior from inside a Proxy trap rather than reimplementing it manually.',
        syntax: 'new Proxy(target, handler)\nReflect.get(target, key)',
        examples: [
            {
                title: 'Basic Proxy with a get Trap',
                description: 'Intercepting property access to add custom behavior, like logging or defaults.',
                code: 'const user = { name: "Alice", age: 25 };\n\nconst loggedUser = new Proxy(user, {\n  get(target, prop) {\n    console.log(`Reading property: ${prop}`);\n    return Reflect.get(target, prop); // forwards to the default behavior\n  }\n});\n\nconsole.log(loggedUser.name);\n// "Reading property: name"\n// "Alice"'
            },
            {
                title: 'Validation with a set Trap',
                description: 'Using a Proxy to enforce rules whenever a property is assigned.',
                code: 'const validatedUser = new Proxy({}, {\n  set(target, prop, value) {\n    if (prop === "age" && typeof value !== "number") {\n      throw new TypeError("age must be a number");\n    }\n    return Reflect.set(target, prop, value);\n  }\n});\n\nvalidatedUser.age = 30; // works fine\n// validatedUser.age = "old"; // throws TypeError'
            },
            {
                title: 'Default Values with a has and get Trap',
                description: 'Providing a fallback value for any property that does not exist.',
                code: 'function withDefault(obj, defaultValue) {\n  return new Proxy(obj, {\n    get(target, prop) {\n      return prop in target ? target[prop] : defaultValue;\n    }\n  });\n}\n\nconst settings = withDefault({ theme: "dark" }, "not set");\nconsole.log(settings.theme);    // "dark"\nconsole.log(settings.fontSize); // "not set" - property does not exist, but no error'
            }
        ],
        bestPractices: [
            'Use Reflect methods inside Proxy traps to forward default behavior, rather than manually reimplementing property access logic',
            'Reach for Proxy for cross-cutting concerns like validation, logging, or reactivity systems - not as a general-purpose object wrapper for everyday code',
            'Be aware that Proxy adds a small performance overhead on every intercepted operation - avoid it in performance-critical hot paths',
            'Document any Proxy-based behavior clearly, since intercepted objects can behave in ways that are surprising to someone reading the code without that context'
        ]
    },

    {
        id: 'js-typed-arrays',
        title: 'Typed Arrays & ArrayBuffer',
        library: 'js',
        category: 'basics',
        description: 'ArrayBuffer represents a fixed-length raw binary data buffer. Typed arrays (Int8Array, Uint8Array, Float32Array, and others) provide a structured, array-like view onto that buffer, where every element is the same fixed-size numeric type. They are used for binary data processing, working with files, WebGL, audio/video data, and network protocols.',
        syntax: 'const buffer = new ArrayBuffer(bytes);\nconst view = new Uint8Array(buffer);',
        examples: [
            {
                title: 'Creating a Typed Array',
                description: 'The simplest way to work with typed arrays - directly, without manually managing the buffer.',
                code: 'const numbers = new Uint8Array([10, 20, 30, 255]);\nconsole.log(numbers[0]);      // 10\nconsole.log(numbers.length);  // 4\n\nnumbers[0] = 300; // out of range for Uint8Array (0-255)\nconsole.log(numbers[0]); // 44 - silently wraps around (300 - 256)'
            },
            {
                title: 'Working with ArrayBuffer Directly',
                description: 'Creating a raw buffer and viewing it through different typed array lenses.',
                code: 'const buffer = new ArrayBuffer(4); // 4 bytes of raw memory\n\nconst view8 = new Uint8Array(buffer);\nview8[0] = 255;\nview8[1] = 1;\n\nconst view32 = new Uint32Array(buffer); // same buffer, viewed as one 32-bit number\nconsole.log(view32[0]); // interprets those same 4 bytes differently'
            },
            {
                title: 'Float32Array for Numeric Data',
                description: 'A common use case: representing collections of floating-point numbers efficiently.',
                code: 'const positions = new Float32Array([1.5, 2.25, 3.75, 4.0]);\n\nfor (const value of positions) {\n  console.log(value);\n}\n\n// Typed arrays support familiar array methods too\nconsole.log(positions.map(v => v * 2));'
            }
        ],
        bestPractices: [
            'Use typed arrays instead of regular arrays when working with binary data, files, or performance-critical numeric computation - they use less memory and are faster for these cases',
            'Pick the specific typed array (Int8, Uint16, Float64, etc.) that matches your actual data range and precision needs',
            'Remember typed array values silently wrap or truncate when out of range, rather than throwing an error - validate input if that matters',
            'Reach for regular arrays for everyday application code - typed arrays are a specialized tool for binary/numeric-heavy scenarios'
        ]
    },

    {
        id: 'js-weakmap-weakset',
        title: 'WeakMap and WeakSet',
        library: 'js',
        category: 'basics',
        description: 'WeakMap and WeakSet are like Map and Set, but their keys (WeakMap) or values (WeakSet) must be objects, and those references are "weak" - meaning they do not prevent the object from being garbage collected if nothing else references it. This makes them ideal for attaching metadata to objects without causing memory leaks.',
        syntax: 'const wm = new WeakMap();\nwm.set(objectKey, value);',
        examples: [
            {
                title: 'WeakMap for Private Object Metadata',
                description: 'Associating extra data with an object without modifying the object itself or leaking memory.',
                code: 'const privateData = new WeakMap();\n\nclass User {\n  constructor(name) {\n    privateData.set(this, { loginAttempts: 0 });\n    this.name = name;\n  }\n\n  recordLoginAttempt() {\n    const data = privateData.get(this);\n    data.loginAttempts++;\n    return data.loginAttempts;\n  }\n}\n\nconst user = new User("Alice");\nconsole.log(user.recordLoginAttempt()); // 1\n// If "user" is later garbage collected, its entry in privateData is automatically cleaned up too'
            },
            {
                title: 'WeakSet for Tracking Object Membership',
                description: 'Tracking which objects have been "seen" or processed, without preventing cleanup.',
                code: 'const processedItems = new WeakSet();\n\nfunction processItem(item) {\n  if (processedItems.has(item)) {\n    console.log("Already processed, skipping");\n    return;\n  }\n  processedItems.add(item);\n  console.log("Processing item...");\n}\n\nconst obj = { id: 1 };\nprocessItem(obj); // "Processing item..."\nprocessItem(obj); // "Already processed, skipping"'
            }
        ],
        bestPractices: [
            'Use WeakMap when attaching metadata to objects you do not own or control the lifecycle of, so it does not prevent garbage collection',
            'Remember WeakMap/WeakSet are not iterable and have no size property - they intentionally hide their contents since entries can disappear at any time via garbage collection',
            'Only use object references as keys (WeakMap) or values (WeakSet) - primitives like strings or numbers are not allowed',
            'Reach for a regular Map when you need to iterate over entries or know how many there are - WeakMap is specifically for the memory-safe metadata use case'
        ]
    },

    {
        id: 'js-web-workers',
        title: 'Web Workers',
        library: 'js',
        category: 'async',
        description: 'Web Workers run JavaScript on a separate background thread, away from the main UI thread, so expensive computations do not freeze the page. Communication between the main script and a worker happens through message passing with postMessage() and the onmessage event handler, rather than shared memory - workers cannot directly access the DOM.',
        syntax: 'const worker = new Worker("worker.js");\nworker.postMessage(data);',
        examples: [
            {
                title: 'Creating and Communicating with a Worker',
                description: 'Offloading a heavy computation to a background thread.',
                code: '// main.js\nconst worker = new Worker("worker.js");\n\nworker.postMessage({ command: "calculate", number: 40 });\n\nworker.onmessage = (event) => {\n  console.log("Result from worker:", event.data);\n};\n\nworker.onerror = (error) => {\n  console.log("Worker error:", error.message);\n};'
            },
            {
                title: 'The Worker Script Itself',
                description: 'The code running inside the separate worker thread.',
                code: '// worker.js\nself.onmessage = (event) => {\n  const { command, number } = event.data;\n\n  if (command === "calculate") {\n    const result = fibonacci(number); // expensive, would freeze the UI if run on the main thread\n    self.postMessage(result);\n  }\n};\n\nfunction fibonacci(n) {\n  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);\n}'
            },
            {
                title: 'Terminating a Worker',
                description: 'Cleaning up a worker once it is no longer needed.',
                code: 'const worker = new Worker("worker.js");\n\n// ... use the worker ...\n\nworker.terminate(); // immediately stops the worker and frees its resources'
            }
        ],
        bestPractices: [
            'Use Web Workers for genuinely expensive, CPU-bound tasks (heavy computation, large data processing) that would otherwise freeze the UI',
            'Remember workers cannot access the DOM, window, or parent objects directly - all communication happens via postMessage()',
            'Terminate workers with terminate() once they are no longer needed, to free up system resources',
            'Keep messages passed to/from workers simple and serializable - complex objects with functions or circular references cannot be passed directly'
        ]
    },

    {
        id: 'js-temporal-api',
        title: 'Temporal API',
        library: 'js',
        category: 'date',
        description: 'Temporal is the modern, immutable replacement for the long-criticized Date object, reaching TC39 Stage 4 and becoming part of the ECMAScript 2026 specification. It fixes Date\'s biggest pain points: no built-in time zone support, confusing zero-indexed months, and mutable objects that are easy to accidentally modify. Temporal provides distinct types for different use cases - PlainDate, PlainTime, ZonedDateTime, Duration, and more.',
        syntax: 'Temporal.Now.plainDateISO()\nTemporal.ZonedDateTime.from(...)',
        examples: [
            {
                title: 'Getting the Current Date and Time',
                description: 'Temporal separates "what date is it" from "what time is it" into distinct, purpose-built types.',
                code: 'const today = Temporal.Now.plainDateISO();\nconsole.log(today.toString()); // e.g. "2026-07-20"\n\nconst now = Temporal.Now.zonedDateTimeISO("Europe/London");\nconsole.log(now.toString()); // includes an explicit, real IANA time zone'
            },
            {
                title: 'Immutable Date Arithmetic',
                description: 'Every operation returns a new object - the original is never mutated, unlike Date.',
                code: 'const date = Temporal.PlainDate.from("2026-01-15");\nconst nextMonth = date.add({ months: 1 });\n\nconsole.log(date.toString());      // "2026-01-15" - unchanged\nconsole.log(nextMonth.toString());  // "2026-02-15" - a brand new object'
            },
            {
                title: 'Real Time Zone Support',
                description: 'Working correctly across time zones, something the legacy Date object could never do natively.',
                code: 'const meeting = Temporal.ZonedDateTime.from({\n  timeZone: "America/New_York",\n  year: 2026, month: 8, day: 10,\n  hour: 14, minute: 0\n});\n\nconst londonTime = meeting.withTimeZone("Europe/London");\nconsole.log(meeting.toString());\nconsole.log(londonTime.toString()); // same instant, correctly converted'
            }
        ],
        bestPractices: [
            'Use Temporal for new projects going forward - it directly solves the time zone and mutability problems that made Date libraries like moment.js and date-fns necessary',
            'Check current browser/runtime support before relying on it in production without a polyfill - as of mid-2026 it ships natively in Chrome and Firefox, with Edge experimental and Safari still in Technical Preview',
            'Choose the most specific Temporal type for your use case - PlainDate for a calendar date with no time/zone, ZonedDateTime when time zone matters, Duration for elapsed time',
            'Use a polyfill (like @js-temporal/polyfill) for cross-browser compatibility until support is universal'
        ]
    },

    {
        id: 'js-getters-setters',
        title: 'Getters and Setters',
        library: 'js',
        category: 'basics',
        description: 'Getters and setters let you define object or class properties that run custom logic when read or assigned, while still being accessed with normal property syntax (no parentheses). They are useful for computed properties, validation on assignment, or controlling access to internal state.',
        syntax: 'get propName() { return value; }\nset propName(value) { }',
        examples: [
            {
                title: 'Getters and Setters in a Class',
                description: 'Computing a value on read, and validating on write.',
                code: 'class Rectangle {\n  constructor(width, height) {\n    this.width = width;\n    this.height = height;\n  }\n\n  get area() {\n    return this.width * this.height; // computed, not stored\n  }\n\n  set width(value) {\n    if (value <= 0) throw new Error("Width must be positive");\n    this._width = value;\n  }\n\n  get width() {\n    return this._width;\n  }\n}\n\nconst rect = new Rectangle(5, 10);\nconsole.log(rect.area); // 50 - accessed like a property, no parentheses\nrect.width = 8;\nconsole.log(rect.area); // 80 - automatically recalculated'
            },
            {
                title: 'Getters and Setters in a Plain Object',
                description: 'The same pattern applied to a regular object literal.',
                code: 'const user = {\n  firstName: "Alice",\n  lastName: "Smith",\n  get fullName() {\n    return `${this.firstName} ${this.lastName}`;\n  },\n  set fullName(value) {\n    [this.firstName, this.lastName] = value.split(" ");\n  }\n};\n\nconsole.log(user.fullName); // "Alice Smith"\nuser.fullName = "Bob Jones";\nconsole.log(user.firstName); // "Bob"'
            }
        ],
        bestPractices: [
            'Use getters for values that are computed from other properties, rather than storing and manually keeping a duplicate value in sync',
            'Use setters to validate or transform incoming values before they are stored',
            'Avoid heavy computation or side effects inside getters - since they look like simple property access, callers do not expect them to be expensive or to change state',
            'Prefix the underlying storage property with an underscore (like _width) by convention when a getter/setter shares a similar public name'
        ]
    },

    {
        id: 'js-custom-errors',
        title: 'Custom Error Classes',
        library: 'js',
        category: 'basics',
        description: 'You can create your own error types by extending the built-in Error class, giving you custom error names and additional properties while still working correctly with try/catch, instanceof checks, and stack traces. This makes error handling more precise than checking error.message strings.',
        syntax: 'class MyError extends Error {\n  constructor(message) {\n    super(message);\n    this.name = "MyError";\n  }\n}',
        examples: [
            {
                title: 'Defining a Custom Error',
                description: 'Extending Error to create a specific, identifiable error type.',
                code: 'class ValidationError extends Error {\n  constructor(message, field) {\n    super(message); // sets this.message\n    this.name = "ValidationError";\n    this.field = field; // custom extra property\n  }\n}\n\nfunction validateAge(age) {\n  if (age < 0) {\n    throw new ValidationError("Age cannot be negative", "age");\n  }\n  return age;\n}'
            },
            {
                title: 'Catching and Distinguishing Error Types',
                description: 'Using instanceof to handle different error types differently.',
                code: 'try {\n  validateAge(-5);\n} catch (error) {\n  if (error instanceof ValidationError) {\n    console.log(`Validation failed on field "${error.field}": ${error.message}`);\n  } else {\n    console.log("Unexpected error:", error.message);\n  }\n}'
            }
        ],
        bestPractices: [
            'Always call super(message) first in a custom error\'s constructor before setting additional properties',
            'Set this.name to match the class name, so console output and logging clearly identify the specific error type',
            'Use instanceof checks in catch blocks to handle different, known error types differently, rather than parsing error.message strings',
            'Attach relevant context (like a field name or status code) as extra properties on the custom error, rather than cramming everything into the message string'
        ]
    },

    {
        id: 'js-object-define-property',
        title: 'Object.defineProperty() & Property Descriptors',
        library: 'js',
        category: 'basics',
        description: 'Object.defineProperty() gives fine-grained control over a single property\'s behavior via a descriptor object, letting you control whether it is writable, enumerable (shows up in loops/Object.keys), and configurable (can be redefined or deleted) - none of which is possible with normal property assignment.',
        syntax: 'Object.defineProperty(obj, "prop", { value, writable, enumerable, configurable });',
        examples: [
            {
                title: 'Creating a Read-Only Property',
                description: 'Making a property that cannot be reassigned.',
                code: 'const config = {};\n\nObject.defineProperty(config, "version", {\n  value: "1.0.0",\n  writable: false,\n  enumerable: true,\n  configurable: false\n});\n\nconfig.version = "2.0.0"; // silently fails (or throws in strict mode)\nconsole.log(config.version); // still "1.0.0"'
            },
            {
                title: 'Hiding a Property from Enumeration',
                description: 'Creating a property that exists but does not show up in Object.keys() or for...in.',
                code: 'const user = { name: "Alice" };\n\nObject.defineProperty(user, "id", {\n  value: 12345,\n  enumerable: false // hidden from normal enumeration\n});\n\nconsole.log(user.id);          // 12345 - still directly accessible\nconsole.log(Object.keys(user)); // ["name"] - "id" is hidden'
            },
            {
                title: 'Reading Existing Descriptors',
                description: 'Inspecting a property\'s current descriptor.',
                code: 'const obj = { greeting: "hello" };\nconsole.log(Object.getOwnPropertyDescriptor(obj, "greeting"));\n// { value: "hello", writable: true, enumerable: true, configurable: true }\n// Normal property assignment defaults to all three flags being true'
            }
        ],
        bestPractices: [
            'Use Object.defineProperty() when you need precise control over a property\'s behavior - for everyday object properties, normal assignment is simpler and sufficient',
            'Set enumerable: false for internal/implementation-detail properties that should not appear in loops or JSON serialization',
            'Remember get/set can also be defined via descriptors, as an alternative to the get/set literal syntax',
            'Use this sparingly in application code - it is more commonly seen inside libraries, polyfills, and framework internals'
        ]
    },

    {
        id: 'js-intl-api',
        title: 'Intl API: Number & Date Formatting',
        library: 'js',
        category: 'basics',
        description: 'The Intl object provides language-sensitive formatting for numbers, currencies, dates, and more, correctly following the conventions of a specified locale. Intl.NumberFormat handles numbers and currency, and Intl.DateTimeFormat handles dates - both far more robust than manually formatting strings.',
        syntax: 'new Intl.NumberFormat(locale, options).format(value)',
        examples: [
            {
                title: 'Formatting Numbers and Currency',
                description: 'Correctly formatted numbers respecting locale conventions.',
                code: 'const number = 1234567.891;\n\nconsole.log(new Intl.NumberFormat("en-US").format(number));\n// "1,234,567.891"\nconsole.log(new Intl.NumberFormat("de-DE").format(number));\n// "1.234.567,891" - different separators for German locale\n\nconst price = new Intl.NumberFormat("en-GB", {\n  style: "currency", currency: "GBP"\n});\nconsole.log(price.format(49.99)); // "£49.99"'
            },
            {
                title: 'Formatting Dates',
                description: 'Locale-aware date formatting without manual string building.',
                code: 'const date = new Date(2026, 6, 20); // July 20, 2026\n\nconsole.log(new Intl.DateTimeFormat("en-US").format(date));\n// "7/20/2026"\nconsole.log(new Intl.DateTimeFormat("en-GB").format(date));\n// "20/07/2026"\n\nconst formatter = new Intl.DateTimeFormat("en-US", {\n  weekday: "long", year: "numeric", month: "long", day: "numeric"\n});\nconsole.log(formatter.format(date)); // "Monday, July 20, 2026"'
            }
        ],
        bestPractices: [
            'Use Intl.NumberFormat/DateTimeFormat instead of manually building formatted strings - locale conventions (separators, currency symbols, date order) vary in ways that are easy to get wrong by hand',
            'Reuse a single formatter instance for repeated formatting calls rather than creating a new one every time, for better performance',
            'Detect the user\'s locale with navigator.language rather than hardcoding one, for genuinely internationalized applications',
            'Use the currency and style options for money values rather than manually prepending a currency symbol'
        ]
    },

    {
        id: 'js-structured-clone',
        title: 'structuredClone()',
        library: 'js',
        category: 'basics',
        description: 'structuredClone() creates a true deep copy of a value, correctly handling nested objects, arrays, Maps, Sets, dates, and even circular references - something JSON.parse(JSON.stringify(obj)) cannot do reliably. It is a built-in global function, available without any import.',
        syntax: 'const copy = structuredClone(original);',
        examples: [
            {
                title: 'Deep Cloning Nested Data',
                description: 'A genuine deep copy, unlike a shallow spread or Object.assign().',
                code: 'const original = {\n  name: "Alice",\n  address: { city: "London", zip: "SW1A" },\n  tags: ["admin", "verified"]\n};\n\nconst clone = structuredClone(original);\nclone.address.city = "Manchester";\n\nconsole.log(original.address.city); // "London" - unaffected\nconsole.log(clone.address.city);    // "Manchester"'
            },
            {
                title: 'Handling Types JSON Cannot',
                description: 'structuredClone() correctly clones Dates, Maps, and Sets, unlike JSON-based approaches.',
                code: 'const data = {\n  createdAt: new Date(),\n  tags: new Set(["a", "b"]),\n  scores: new Map([["math", 90]])\n};\n\nconst clone = structuredClone(data);\nconsole.log(clone.createdAt instanceof Date); // true - stays a real Date\nconsole.log(clone.tags instanceof Set);        // true - stays a real Set\n\n// JSON.parse(JSON.stringify(data)) would turn createdAt into a string,\n// and silently lose the Set and Map entirely'
            }
        ],
        bestPractices: [
            'Use structuredClone() instead of JSON.parse(JSON.stringify(obj)) for deep copies - it is faster, handles more types, and supports circular references',
            'Remember it cannot clone functions, DOM nodes, or objects with prototype chains beyond plain data (like class instances lose their class)',
            'Use it for genuinely deep copies - for shallow copies, spread syntax ({...obj}) is simpler and sufficient',
            'Check runtime support if targeting very old browsers, though it is now broadly available in all modern environments'
        ]
    },

    {
        id: 'js-url-urlsearchparams',
        title: 'URL and URLSearchParams',
        library: 'js',
        category: 'basics',
        description: 'The URL object parses and constructs URLs, giving structured access to their parts (protocol, host, pathname, etc.) without manual string manipulation. URLSearchParams specifically handles query string parameters - reading, adding, and removing them correctly, including proper encoding.',
        syntax: 'new URL(urlString)\nnew URLSearchParams(queryString)',
        examples: [
            {
                title: 'Parsing a URL',
                description: 'Breaking a URL into its structured parts.',
                code: 'const url = new URL("https://example.com:8080/products?category=shoes&sort=price#reviews");\n\nconsole.log(url.protocol); // "https:"\nconsole.log(url.hostname); // "example.com"\nconsole.log(url.port);     // "8080"\nconsole.log(url.pathname); // "/products"\nconsole.log(url.search);   // "?category=shoes&sort=price"\nconsole.log(url.hash);     // "#reviews"'
            },
            {
                title: 'Reading and Modifying Query Parameters',
                description: 'Working with query strings without manual parsing or string concatenation.',
                code: 'const url = new URL("https://example.com/search?q=javascript&page=1");\n\nconsole.log(url.searchParams.get("q"));    // "javascript"\nconsole.log(url.searchParams.get("page")); // "1"\n\nurl.searchParams.set("page", "2");\nurl.searchParams.append("sort", "recent");\n\nconsole.log(url.toString());\n// "https://example.com/search?q=javascript&page=2&sort=recent"'
            },
            {
                title: 'Building Query Strings from Scratch',
                description: 'Using URLSearchParams standalone, without a full URL.',
                code: 'const params = new URLSearchParams();\nparams.set("name", "Alice Smith"); // spaces are correctly encoded\nparams.set("role", "admin");\n\nconsole.log(params.toString()); // "name=Alice+Smith&role=admin"\n\nfetch(`/api/users?${params.toString()}`);'
            }
        ],
        bestPractices: [
            'Use the URL and URLSearchParams objects instead of manually splitting and concatenating query strings - they correctly handle encoding edge cases',
            'Use searchParams.set() to overwrite a parameter and searchParams.append() to add an additional value for the same key',
            'Always construct URLs this way when building requests with dynamic query parameters, to avoid manual encoding bugs',
            'Remember getAll() (not get()) is needed to retrieve multiple values for the same parameter key'
        ]
    },

    {
        id: 'js-formdata',
        title: 'FormData',
        library: 'js',
        category: 'basics',
        description: 'FormData represents a set of key-value pairs, mirroring an HTML form\'s data, and is commonly used to send form submissions (including file uploads) via fetch() without manually constructing multipart request bodies. It can be created from an existing <form> element or built up manually.',
        syntax: 'const formData = new FormData(formElement);\nformData.append(key, value);',
        examples: [
            {
                title: 'Creating FormData from a Form Element',
                description: 'Automatically capturing all fields from an existing HTML form.',
                code: '// <form id="signupForm">\n//   <input name="email" value="user@example.com">\n//   <input name="password" value="secret123">\n// </form>\n\nconst form = document.querySelector("#signupForm");\nconst formData = new FormData(form);\n\nconsole.log(formData.get("email")); // "user@example.com"'
            },
            {
                title: 'Building FormData Manually',
                description: 'Constructing form data from scratch, including a file upload.',
                code: 'const formData = new FormData();\nformData.append("username", "alice");\nformData.append("avatar", fileInput.files[0]); // a File object from an <input type="file">\n\nfetch("/api/upload", {\n  method: "POST",\n  body: formData // no need to set Content-Type manually - the browser sets it correctly\n});'
            }
        ],
        bestPractices: [
            'Use FormData instead of JSON when a request includes file uploads - it correctly handles multipart/form-data encoding',
            'Do not manually set the Content-Type header when sending FormData with fetch() - the browser sets the correct boundary automatically',
            'Use formData.getAll() rather than get() when a form has multiple inputs sharing the same name (like checkboxes)',
            'Construct FormData directly from a form element with new FormData(formElement) rather than manually appending every field, when the form already exists in the DOM'
        ]
    },

    {
        id: 'js-intersection-observer',
        title: 'IntersectionObserver',
        library: 'js',
        category: 'dom',
        description: 'IntersectionObserver efficiently detects when an element enters or exits the viewport (or another container), without the performance cost of manually listening to scroll events and calculating positions. It is the standard tool for lazy-loading images, infinite scroll, and scroll-triggered animations.',
        syntax: 'new IntersectionObserver(callback, options).observe(element)',
        examples: [
            {
                title: 'Lazy-Loading Images',
                description: 'Loading an image only once it scrolls into view.',
                code: 'const observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      const img = entry.target;\n      img.src = img.dataset.src; // load the real image\n      observer.unobserve(img);    // stop watching once loaded\n    }\n  });\n});\n\ndocument.querySelectorAll("img[data-src]").forEach(img => {\n  observer.observe(img);\n});'
            },
            {
                title: 'Triggering Animations on Scroll',
                description: 'Adding a class when an element becomes visible, with a threshold option.',
                code: 'const observer = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (entry.isIntersecting) {\n      entry.target.classList.add("fade-in");\n    }\n  });\n}, { threshold: 0.5 }); // fires when 50% of the element is visible\n\ndocument.querySelectorAll(".animate-on-scroll").forEach(el => {\n  observer.observe(el);\n});'
            }
        ],
        bestPractices: [
            'Use IntersectionObserver instead of scroll event listeners for visibility detection - it is far more performant since the browser handles the calculation efficiently',
            'Call unobserve() once an element no longer needs watching (like after a lazy-loaded image has loaded), to free up resources',
            'Use the threshold option to control exactly what percentage of visibility should trigger the callback',
            'Use rootMargin to trigger the callback slightly before an element actually enters the viewport, for smoother lazy-loading'
        ]
    },

    {
        id: 'js-mutation-observer',
        title: 'MutationObserver',
        library: 'js',
        category: 'dom',
        description: 'MutationObserver watches for changes to the DOM tree - added/removed elements, attribute changes, or text content changes - and runs a callback in response. It is useful for reacting to DOM changes made by other scripts or third-party widgets that you do not directly control.',
        syntax: 'new MutationObserver(callback).observe(target, options)',
        examples: [
            {
                title: 'Watching for Added Child Elements',
                description: 'Reacting whenever new elements are added to a container.',
                code: 'const container = document.querySelector("#chatMessages");\n\nconst observer = new MutationObserver((mutations) => {\n  mutations.forEach(mutation => {\n    if (mutation.addedNodes.length > 0) {\n      console.log("New message added, scrolling to bottom");\n      container.scrollTop = container.scrollHeight;\n    }\n  });\n});\n\nobserver.observe(container, { childList: true });'
            },
            {
                title: 'Watching for Attribute Changes',
                description: 'Reacting when a specific attribute changes on an element.',
                code: 'const target = document.querySelector("#statusBadge");\n\nconst observer = new MutationObserver((mutations) => {\n  mutations.forEach(mutation => {\n    if (mutation.attributeName === "class") {\n      console.log("Class changed to:", target.className);\n    }\n  });\n});\n\nobserver.observe(target, { attributes: true });\n\n// Stop watching when no longer needed\n// observer.disconnect();'
            }
        ],
        bestPractices: [
            'Use MutationObserver only when you genuinely need to react to DOM changes you do not control directly - if you control the code making the change, call your reaction logic directly instead',
            'Always call disconnect() when done observing, to avoid unnecessary background processing',
            'Be specific with the options object (childList, attributes, subtree) rather than observing everything, for better performance',
            'Avoid triggering more DOM mutations synchronously inside the callback in a way that could create an infinite mutation loop'
        ]
    },

    {
        id: 'js-console-methods',
        title: 'Console Methods Beyond log()',
        library: 'js',
        category: 'basics',
        description: 'The console object offers several methods beyond the familiar console.log() for more effective debugging: console.table() for tabular data, console.group() for nested/collapsible logs, console.time()/timeEnd() for measuring performance, console.warn()/error() for severity-styled messages, and console.assert() for conditional logging.',
        syntax: 'console.table(data)\nconsole.group(label)\nconsole.time(label)',
        examples: [
            {
                title: 'console.table() for Structured Data',
                description: 'Displaying arrays of objects in a readable table format.',
                code: 'const users = [\n  { name: "Alice", age: 25 },\n  { name: "Bob", age: 30 }\n];\n\nconsole.table(users);\n// Renders a formatted table with columns for name and age'
            },
            {
                title: 'console.group() for Organized Logs',
                description: 'Grouping related log messages together, collapsible in the DevTools console.',
                code: 'console.group("User Validation");\nconsole.log("Checking email...");\nconsole.log("Checking password...");\nconsole.log("All checks passed");\nconsole.groupEnd();'
            },
            {
                title: 'console.time() for Performance Measurement',
                description: 'Measuring how long a block of code takes to run.',
                code: 'console.time("dataProcessing");\n\n// some expensive operation\nfor (let i = 0; i < 1000000; i++) { /* ... */ }\n\nconsole.timeEnd("dataProcessing");\n// "dataProcessing: 12.34ms"'
            }
        ],
        bestPractices: [
            'Use console.table() instead of console.log() when inspecting arrays of objects - it is dramatically easier to read',
            'Use console.group()/groupEnd() to organize related log output during debugging of complex flows',
            'Use console.warn() and console.error() instead of console.log() for messages that genuinely need visual distinction and severity',
            'Remove or guard debug console statements before shipping to production, or use a proper logging library with configurable levels'
        ]
    },

    {
        id: 'js-tagged-templates',
        title: 'Tagged Template Literals & String.raw',
        library: 'js',
        category: 'strings',
        description: 'A tagged template literal calls a function ("tag") with the template\'s string parts and interpolated values passed separately, letting you fully customize how the final string is built - useful for sanitization, internationalization, or styling libraries. String.raw is a built-in tag that returns the literal string with escape sequences left un-processed.',
        syntax: 'function tag(strings, ...values) { }\ntag`text ${value} more text`',
        examples: [
            {
                title: 'A Basic Custom Tag Function',
                description: 'Intercepting a template literal to control the output.',
                code: 'function upperTag(strings, ...values) {\n  return strings.reduce((result, str, i) => {\n    return result + str + (values[i] !== undefined ? String(values[i]).toUpperCase() : "");\n  }, "");\n}\n\nconst name = "alice";\nconsole.log(upperTag`Hello, ${name}!`); // "Hello, ALICE!"'
            },
            {
                title: 'String.raw - Ignoring Escape Sequences',
                description: 'Getting the literal, unprocessed string instead of the interpreted version.',
                code: 'console.log(`Line1\\nLine2`);      // actual newline between "Line1" and "Line2"\nconsole.log(String.raw`Line1\\nLine2`); // "Line1\\nLine2" - the backslash-n is kept literal\n\n// Useful for things like regex patterns or Windows file paths\nconsole.log(String.raw`C:\\Users\\name`); // "C:\\Users\\name" - not interpreted as escapes'
            }
        ],
        bestPractices: [
            'Use tagged templates when building a small domain-specific transformation, like escaping HTML or CSS-in-JS libraries',
            'Use String.raw when a literal string with backslashes (like file paths or regex source) should not have its escape sequences processed',
            'Remember the tag function receives the literal string segments and interpolated values as two separate arguments - not a pre-combined string',
            'Prefer plain template literals for everyday string building - tagged templates are a specialized tool, not a default choice'
        ]
    },

    {
        id: 'js-async-generators',
        title: 'Async Generators & for await...of',
        library: 'js',
        category: 'async',
        description: 'Async generators combine generators and async functions, defined with async function*, yielding values that may themselves be promises. for await...of consumes an async iterable, automatically awaiting each yielded value - useful for processing streamed data or paginated API results one chunk at a time.',
        syntax: 'async function* name() {\n  yield await value;\n}\nfor await (const val of asyncIterable) { }',
        examples: [
            {
                title: 'Basic Async Generator',
                description: 'Yielding values that resolve asynchronously, one at a time.',
                code: 'async function* fetchPages(baseUrl, totalPages) {\n  for (let page = 1; page <= totalPages; page++) {\n    const response = await fetch(`${baseUrl}?page=${page}`);\n    const data = await response.json();\n    yield data;\n  }\n}\n\nasync function processAllPages() {\n  for await (const pageData of fetchPages("/api/items", 3)) {\n    console.log("Received page:", pageData);\n  }\n}'
            },
            {
                title: 'Simulating a Delayed Stream',
                description: 'A simplified example showing values arriving over time.',
                code: 'async function* countWithDelay(max) {\n  for (let i = 1; i <= max; i++) {\n    await new Promise(resolve => setTimeout(resolve, 500));\n    yield i;\n  }\n}\n\nasync function run() {\n  for await (const num of countWithDelay(3)) {\n    console.log(num); // 1, 2, 3 - each one arriving 500ms apart\n  }\n}\nrun();'
            }
        ],
        bestPractices: [
            'Use async generators for processing data that naturally arrives in chunks over time, like paginated APIs or streaming responses',
            'Use for await...of instead of manually calling .next() and awaiting each result - it handles the iteration protocol for you',
            'Remember an async generator function always returns an async iterable, regardless of what individual yields resolve to',
            'Combine with try/catch inside the for await...of loop to handle errors from individual chunks without stopping the entire stream'
        ]
    },

    {
        id: 'js-getcomputedstyle',
        title: 'getComputedStyle() and element.style',
        library: 'js',
        category: 'dom',
        description: 'element.style gives direct read/write access to an element\'s inline styles only - not styles applied via CSS classes or stylesheets. getComputedStyle() returns the actual final, computed value of any CSS property after all stylesheets, inheritance, and browser defaults are applied, regardless of where that style came from.',
        syntax: 'element.style.propertyName = value;\ngetComputedStyle(element).propertyName',
        examples: [
            {
                title: 'Setting Inline Styles Directly',
                description: 'Reading and writing an element\'s own inline style properties.',
                code: 'const box = document.querySelector("#box");\n\nbox.style.backgroundColor = "blue";\nbox.style.width = "200px";\nbox.style.fontSize = "1.5rem"; // camelCase for hyphenated CSS properties\n\nconsole.log(box.style.backgroundColor); // "blue" - only reflects inline styles set this way'
            },
            {
                title: 'getComputedStyle() - The Real Rendered Value',
                description: 'Getting the actual applied style, regardless of where it came from (CSS file, class, or inline).',
                code: '// Even if color is set via an external CSS class, not inline:\nconst box = document.querySelector("#box");\nconst styles = getComputedStyle(box);\n\nconsole.log(styles.color);      // the actual rendered color, from any source\nconsole.log(styles.fontSize);   // always returns a computed pixel value, like "16px"\nconsole.log(box.style.color);   // "" - empty, since color was not set inline'
            }
        ],
        bestPractices: [
            'Use element.style for styles your own script sets directly - use CSS classes with classList for styles that come from a stylesheet',
            'Use getComputedStyle() when you need to read the actual current visual value of a property, no matter its source',
            'Remember getComputedStyle() returns resolved values (like pixels), not the original units used in the stylesheet (like rem or %)',
            'Prefer toggling CSS classes over directly setting element.style in application code, for cleaner separation between structure/behavior and presentation'
        ]
    },

    {
        id: 'js-history-api',
        title: 'History API: pushState() and popState',
        library: 'js',
        category: 'basics',
        description: 'The History API lets JavaScript manipulate the browser\'s session history and URL without triggering a full page reload - the foundation of client-side routing in single-page applications. pushState() adds a new entry to the history stack, and the popstate event fires when the user navigates back/forward.',
        syntax: 'history.pushState(state, title, url)\nwindow.addEventListener("popstate", callback)',
        examples: [
            {
                title: 'Changing the URL Without a Page Reload',
                description: 'Updating the address bar and history stack for client-side navigation.',
                code: 'function navigateTo(path) {\n  history.pushState({ path }, "", path);\n  renderPage(path); // your own function to update the visible content\n}\n\nnavigateTo("/about"); // URL changes to /about, no reload happens'
            },
            {
                title: 'Handling Back/Forward Navigation',
                description: 'Responding when the user clicks the browser\'s back or forward button.',
                code: 'window.addEventListener("popstate", (event) => {\n  const path = event.state ? event.state.path : "/";\n  renderPage(path); // re-render based on the restored state\n});\n\n// Note: pushState() itself does NOT trigger popstate -\n// only actual browser back/forward navigation does'
            }
        ],
        bestPractices: [
            'Use pushState() for genuine navigation events that should be added to history - use replaceState() instead when updating the URL without adding a new back-button entry',
            'Always store enough state in pushState()\'s first argument to correctly restore the view on popstate, rather than only relying on parsing the URL',
            'Remember popstate only fires on actual browser navigation (back/forward buttons) - calling pushState() yourself does not trigger it',
            'Consider a routing library for anything beyond simple navigation - hand-rolled routers can miss edge cases like nested routes or query parameters'
        ]
    },

    {
        id: 'js-clipboard-api',
        title: 'Clipboard API',
        library: 'js',
        category: 'basics',
        description: 'The Clipboard API provides a modern, promise-based way to read from and write to the system clipboard, replacing the older, more limited document.execCommand("copy"). Both reading and writing typically require a secure context (HTTPS) and, for reading, explicit user permission.',
        syntax: 'navigator.clipboard.writeText(text)\nnavigator.clipboard.readText()',
        examples: [
            {
                title: 'Copying Text to the Clipboard',
                description: 'A common "copy to clipboard" button implementation.',
                code: 'async function copyToClipboard(text) {\n  try {\n    await navigator.clipboard.writeText(text);\n    console.log("Copied to clipboard!");\n  } catch (error) {\n    console.log("Failed to copy:", error.message);\n  }\n}\n\ndocument.querySelector("#copyButton").addEventListener("click", () => {\n  copyToClipboard("https://example.com/share-link");\n});'
            },
            {
                title: 'Reading from the Clipboard',
                description: 'Pasting programmatically, which requires explicit user permission.',
                code: 'async function pasteFromClipboard() {\n  try {\n    const text = await navigator.clipboard.readText();\n    console.log("Clipboard contains:", text);\n  } catch (error) {\n    console.log("Clipboard access denied or unavailable");\n  }\n}'
            }
        ],
        bestPractices: [
            'Always wrap Clipboard API calls in try/catch - both permissions and browser support can cause them to fail',
            'Trigger clipboard writes directly from a user gesture (like a click handler) - browsers block clipboard access outside of direct user interaction',
            'Remember the API requires a secure context (HTTPS or localhost) - it will not work on plain HTTP',
            'Provide clear visual feedback (like a "Copied!" tooltip) after a successful copy, since there is no built-in browser indication'
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