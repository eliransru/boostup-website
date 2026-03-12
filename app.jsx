import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function BoostUpWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const services = [
    { icon: '📱', title: 'Social Media Marketing', description: 'קמפיינים ממומנים בפייסבוק, אינסטגרם וטיקטוק' },
    { icon: '📊', title: 'ניהול קמפיינים', description: 'ניהול תקציבים וניתוח ROI בזמן אמת' },
    { icon: '🎬', title: 'ייצור תוכן', description: 'וידאו, גרפיקה וקופי שמוכר' },
    { icon: '🔍', title: 'SEO & SEM', description: 'קידום אתרים אורגני וממומן בגוגל' }
  ];

  const blogPosts = [
    { title: 'כיצד להפעיל קמפיין מוצלח ברשתות חברתיות', date: 'מרץ 12, 2026', readTime: '5 דק' },
    { title: 'ROI בשיווק דיגיטלי - איך למדוד הכל', date: 'מרץ 5, 2026', readTime: '7 דק' },
    { title: 'עלייה בעלויות פרסום? הנה הפתרון', date: 'פברואר 28, 2026', readTime: '6 דק' }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="fixed w-full top-0 z-50 bg-black/80 backdrop-blur-md border-b border-teal-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">↗</span>
            </div>
            <span className="font-bold text-xl hidden sm:block">BoostUp</span>
          </div>
          <div className="hidden md:flex gap-8">
            {[{ id: 'home', label: 'Home' }, { id: 'services', label: 'Services' }, { id: 'blog', label: 'Blog' }, { id: 'about', label: 'About' }, { id: 'contact', label: 'Contact' }].map(item => (
              <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-sm font-medium transition-colors ${activeSection === item.id ? 'text-teal-400 border-b-2 border-teal-400' : 'text-gray-300 hover:text-teal-400'}`}>
                {item.label}
              </button>
            ))}
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="inline-block px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-400 text-sm font-medium">
            🚀 Digital Marketing Agency
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            הגדל את העסק שלך<span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-orange-400 bg-clip-text text-transparent"> דיגיטלית</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            BoostUp היא סוכנות דיגיטל מרקטינג שמתמחה בהצמיח עסקים בישראל.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button onClick={() => scrollToSection('contact')} className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 rounded-lg font-semibold flex items-center justify-center gap-2">
              התחל קמפיין <ArrowRight size={20} />
            </button>
            <button className="px-8 py-3 border border-teal-500/30 rounded-lg font-semibold">
              צפה בפורטפוליו
            </button>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-12 max-w-2xl">
            {[{ number: '50+', label: 'לקוחות' }, { number: '100M+', label: 'impressions' }, { number: '3.2x', label: 'ROAS' }].map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-lg">
                <div className="text-2xl font-bold text-teal-400">{stat.number}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">מה אנחנו עושים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-teal-500/50 group cursor-pointer">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-teal-400">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">מהבלוג שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl hover:border-orange-500/50 group">
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  📝
                </div>
                <h3 className="text-lg font-bold mb-3 group-hover:text-orange-400">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">אודותינו</h2>
            <p className="text-gray-400 mb-4">
              BoostUp הוקמה על ידי אלירן סרוגו, בעל ניסיון יותר מ-10 שנים בשיווק דיגיטלי בישראל.
            </p>
            <p className="text-gray-400">
              המטרה שלנו היא פשוטה: להפוך נתונים לתוצאות, וקליקים להכנסות.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="text-6xl">📈</div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">בואו נדבר</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[{ icon: Mail, label: 'אימייל', value: 'hello@boostup.co.il' }, { icon: Phone, label: 'וואטסאפ', value: '+972 50-XXX-XXXX' }, { icon: MapPin, label: 'אזור חיפה', value: 'עבודה רחוקה' }].map((contact, i) => {
              const Icon = contact.icon;
              return (
                <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl text-center">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-teal-400" size={24} />
                  </div>
                  <h3 className="font-bold mb-2">{contact.label}</h3>
                  <p className="text-gray-400">{contact.value}</p>
                </div>
              );
            })}
          </div>
          <div className="bg-gradient-to-br from-teal-500/10 to-orange-500/10 border border-teal-500/30 rounded-xl p-8">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="שם" className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500" />
                <input type="email" placeholder="אימייל" className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500" />
              </div>
              <textarea placeholder="ספר לנו על העסק שלך..." rows="4" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-500"></textarea>
              <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg font-semibold">
                שלח הודעה
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/50 py-8 px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-500">© 2026 BoostUp. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
}
