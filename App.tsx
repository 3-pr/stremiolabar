import React, { useState } from 'react';
import { Menu, X, Download, Send, Tv, BookOpen, Users, Zap, Twitter } from 'lucide-react';
import { ViewState } from './types';
import { APP_NAME } from './constants';
import { Button } from './components/Button';

// --- Sub-components defined here for simplicity and single-file coherence within the provided structure ---

// 1. Navbar Component
const Navbar: React.FC<{ 
  currentView: ViewState; 
  onChangeView: (view: ViewState) => void; 
}> = ({ currentView, onChangeView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { id: ViewState; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'الرئيسية', icon: <Zap size={18} /> },
    { id: 'addons', label: 'الإضافات', icon: <Tv size={18} /> },
    { id: 'tutorials', label: 'الشروحات', icon: <BookOpen size={18} /> },
    { id: 'about', label: 'من نحن', icon: <Users size={18} /> },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div 
            className="flex items-center gap-2 cursor-pointer group" 
            onClick={() => onChangeView('home')}
          >
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-brand-purple shadow-[0_0_15px_rgba(108,43,217,0.5)] group-hover:shadow-[0_0_25px_rgba(108,43,217,0.8)] transition-all">
              <img 
                src="/images/logoS.jpg" 
                alt="StremioLabAR Logo" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              {APP_NAME}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onChangeView(item.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentView === item.id 
                    ? 'text-brand-purple bg-brand-purple/10 font-bold shadow-[0_0_10px_rgba(108,43,217,0.2)]' 
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-dark border-b border-white/10 absolute w-full animate-fadeIn">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onChangeView(item.id);
                  setIsOpen(false);
                }}
                className={`flex items-center gap-3 w-full text-right px-4 py-4 rounded-md text-base font-medium ${
                  currentView === item.id 
                    ? 'text-brand-purple bg-brand-purple/10 border-r-4 border-brand-purple' 
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

// 2. Footer Component
const Footer = () => (
  <footer className="bg-black border-t border-white/10 py-8 mt-auto">
    <div className="max-w-7xl mx-auto px-4 text-center">
      <p className="text-gray-500 mb-2">جميع الحقوق محفوظة © {new Date().getFullYear()} {APP_NAME}</p>
      <p className="text-gray-700 text-sm">صمم بكل ❤️ لمجتمع ستريميو العربي</p>
    </div>
  </footer>
);

// 3. Views

// --- HOME VIEW ---
const HomeView: React.FC<{ onChangeView: (view: ViewState) => void }> = ({ onChangeView }) => {
  const [scrollY, setScrollY] = useState(0);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden animate-fadeIn">
      {/* Background Gradients with Parallax */}
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/30 rounded-full blur-[128px] opacity-40 will-change-transform transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      ></div>
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px] opacity-30 will-change-transform transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      ></div>
       <div 
        className="absolute top-1/3 right-10 w-64 h-64 bg-brand-purple/10 rounded-full blur-[100px] opacity-20 will-change-transform transition-transform duration-75 ease-out"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      ></div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20 md:mt-0">
        <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-brand-purple/50 bg-brand-purple/10 backdrop-blur-sm animate-float">
          <span className="text-brand-purple font-semibold text-sm tracking-wide">الوجهة الأولى للمستخدم العربي</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight drop-shadow-2xl">
          اكتشف عالم <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-purple-400">ستريميو</span> بلا حدود
        </h1>
        
        <p className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          الموقع العربي الأول المتخصص في إضافات وشروحات تطبيق Stremio. 
          كل ما تحتاجه لتجربة مشاهدة سينمائية متكاملة في مكان واحد.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button onClick={() => onChangeView('addons')} size="lg" className="w-full sm:w-auto gap-2">
            <Tv size={20} />
            تصفح الإضافات
          </Button>
          <Button onClick={() => onChangeView('tutorials')} variant="outline" size="lg" className="w-full sm:w-auto gap-2">
            <BookOpen size={20} />
            الشروحات
          </Button>
        </div>
      </div>
    </div>
  );
};

// --- ADDONS VIEW ---
const AddonsView: React.FC = () => {
  const addon = {
    id: 1,
    name: 'Torrentio',
    description: 'إضافة شاملة لمشاهدة الأفلام والمسلسلات بجودة عالية',
    fullDescription: 'إضافة Torrentio هي واحدة من أفضل الإضافات لتطبيق Stremio، تتيح لك الوصول إلى مكتبة ضخمة من الأفلام والمسلسلات بجودات مختلفة. تدعم الترجمة العربية وتوفر روابط سريعة وموثوقة.',
    version: '1.0.0',
    imageUrl: 'https://torrentio.org/wp-content/uploads/2024/12/Torrentio.png',
    installUrl: 'https://torrentio.strem.fun/configure',
    tags: ['أفلام', 'مسلسلات', 'جودة عالية']
  };

  return (
    <div className="pt-28 pb-12 px-4 max-w-5xl mx-auto min-h-screen animate-fadeIn">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">الإضافة المميزة</h2>
        <p className="text-gray-400">أفضل إضافة مختارة بعناية لتحسين تجربتك</p>
      </div>

      <div className="bg-brand-card border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-brand-purple/10">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="h-64 md:h-auto bg-black relative">
            <img 
              src={addon.imageUrl} 
              alt={addon.name} 
              className="w-full h-full object-cover opacity-90" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-card via-transparent to-transparent md:bg-gradient-to-r md:from-brand-card md:via-transparent md:to-transparent"></div>
          </div>

          <div className="p-8 md:p-12 flex flex-col justify-center">
            <div className="flex flex-wrap gap-2 mb-4">
              {addon.tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-brand-purple/10 text-brand-purple border border-brand-purple/20 text-sm font-semibold">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl font-bold text-white mb-2">{addon.name}</h1>
            <p className="text-gray-500 mb-6 font-mono text-sm">الإصدار {addon.version}</p>
            
            <div className="prose prose-invert max-w-none mb-10">
              <p className="text-gray-300 leading-8 text-lg">
                {addon.fullDescription}
              </p>
            </div>

            <Button 
              size="lg" 
              className="w-full md:w-auto gap-2 shadow-xl shadow-brand-purple/20"
              onClick={() => window.open(addon.installUrl, '_blank')}
            >
              <Download size={20} />
              تثبيت الإضافة
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};



// --- TUTORIALS VIEW ---
const TutorialsView: React.FC = () => {
  const tutorial = {
    id: 1,
    title: 'كيفية تثبيت إضافة Torrentio على Stremio',
    description: 'شرح مفصل وبسيط لتثبيت إضافة Torrentio والاستفادة من جميع ميزاتها لمشاهدة أفضل للأفلام والمسلسلات',
    date: '2025-12-14',
    tutorialUrl: 'https://x.com/stremiolabar/status/1986897162308100370?s=46'
  };

  return (
    <div className="pt-28 pb-12 px-4 max-w-5xl mx-auto min-h-screen animate-fadeIn">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">الشرح المميز</h2>
        <p className="text-gray-400">دليل تعليمي مبسط لمساعدتك في تحقيق أقصى استفادة</p>
      </div>

      <div className="bg-[#121212] hover:bg-[#1a1a1a] border border-white/5 hover:border-brand-purple/40 rounded-2xl p-8 transition-all duration-300 group hover:shadow-[0_0_20px_-5px_rgba(108,43,217,0.2)]">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-3 h-3 rounded-full bg-brand-purple shadow-[0_0_8px_#6C2BD9]"></div>
          <h3 className="text-2xl font-bold text-white group-hover:text-brand-purple transition-colors">
            {tutorial.title}
          </h3>
        </div>
        <p className="text-gray-400 leading-relaxed text-lg mb-6">
          {tutorial.description}
        </p>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-600 font-mono">
            {tutorial.date}
          </div>
          <Button 
            variant="secondary" 
            size="sm" 
            className="gap-2"
            onClick={() => window.open(tutorial.tutorialUrl, '_blank')}
          >
            <span>مشاهدة الشرح</span>
            <BookOpen size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
};

// --- ABOUT VIEW ---
const AboutView: React.FC = () => {
  return (
    <div className="pt-28 pb-12 px-4 min-h-screen flex flex-col items-center justify-center animate-fadeIn">
      <div className="max-w-2xl w-full space-y-8">
        
        {/* Card 1: Site Info */}
        <div className="bg-gradient-to-br from-[#151515] to-black border border-brand-purple/30 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden group hover:border-brand-purple/60 transition-all duration-500 shadow-[0_0_40px_-10px_rgba(108,43,217,0.15)] hover:shadow-[0_0_60px_-15px_rgba(108,43,217,0.3)] hover:-translate-y-2">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-purple to-transparent opacity-50"></div>
          
          <div className="w-24 h-24 mx-auto rounded-2xl border-2 border-brand-purple shadow-[0_0_20px_rgba(108,43,217,0.4)] overflow-hidden mb-6 transform group-hover:rotate-6 transition-transform duration-500">
            <img 
              src="/images/logoS.jpg" 
              alt="StremioLabAR Logo" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-3 tracking-wide">StremioLabAR</h2>
          <p className="text-brand-purple mb-8 text-lg font-bold">
            مالك الموقع
          </p>
          
          <div className="flex justify-center gap-4">
            <a href="https://x.com/stremiolabar" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10 border border-white/5 hover:border-[#1DA1F2]/30 transition-all duration-300">
              <Twitter size={24} />
            </a>
            <a href="https://t.me/StremioLabAR" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-white/5 text-gray-400 hover:text-[#0088cc] hover:bg-[#0088cc]/10 border border-white/5 hover:border-[#0088cc]/30 transition-all duration-300">
              <Send size={24} />
            </a>
          </div>
        </div>

        {/* Card 2: Developer Info */}
        <div className="bg-black border border-gray-800 rounded-3xl p-8 text-center relative overflow-hidden group hover:border-gray-600 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
           <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-gray-800 to-black p-1 mb-4 animate-glow">
              <div className="w-full h-full rounded-full overflow-hidden">
                 <img 
                   src="/images/yasser.JPG" 
                   alt="Yasser Alharbi" 
                   className="w-full h-full object-cover"
                 />
              </div>
           </div>
           
           <h3 className="text-2xl font-bold text-white mb-1">YASSER ALHARBI</h3>
           <p className="text-brand-purple font-medium text-sm mb-6">Developer</p>
           
           <a href="https://x.com/i0zzw" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm border border-gray-800 px-4 py-2 rounded-full hover:bg-white/5">
             <Twitter size={16} />
             <span>@i0zzw</span>
           </a>
        </div>

      </div>
    </div>
  );
};

// --- MAIN APP ---
const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView onChangeView={setCurrentView} />;
      case 'addons':
        return <AddonsView />;
      case 'tutorials':
        return <TutorialsView />;
      case 'about':
        return <AboutView />;
      default:
        return <HomeView onChangeView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand-purple selection:text-white flex flex-col">
      <Navbar currentView={currentView} onChangeView={setCurrentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <Footer />
    </div>
  );
};

export default App;