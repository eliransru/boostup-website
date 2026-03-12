'use client';

import React, { useState } from 'react';
import { Menu, X, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

export default function BoostUpWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const services = [
    { icon: '📱', title: 'Social Media Marketing', description: 'קמפיינים ממומנים בפייסבוק, אינסטגרם וטיקטוק שמביאים תוצאות' },
    { icon: '📊', title: 'ניהול קמפיינים', description: 'ניהול תקציבים ממומנים וניתוח ROI בזמן אמת' },
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
              <button key={item.id} onClick={() => scrollToSection(item.id)} className={`text-sm font-medium ${activeSection === item.id ? 'text-teal-400' : 'text-gray-300 hover:text-teal-400'}`}>
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
        <div className="max-w-6xl mx-auto">
          <div className="px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full text-teal-400 text-sm font-medium w-fit mb-6">
            🚀 Digital Marketing Agency
          </div>
          <h1 className="text-6xl font-bold mb-6">הגדל את העסק שלך <span className="bg-gradient-to-r from-teal-400 to-orange-400 bg-clip-text text-transparent">דיגיטלית</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mb-8">
            BoostUp היא סוכנות דיגיטל מרקטינג שמתמחה בהצמיח עסקים בישראל.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg font-semibold flex items-center gap-2">
            התחל קמפיין <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">מה אנחנו עושים</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-400">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">מהבלוג שלנו</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-lg font-bold mb-3">{post.title}</h3>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">אודותינו</h2>
          <p className="text-gray-400 mb-4">BoostUp הוקמה על ידי אלירן סרוגו, בעל ניסיון יותר מ-10 שנים בשיווק דיגיטלי בישראל.</p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">בואו נדבר</h2>
          <div className="bg-gradient-to-br from-teal-500/10 to-orange-500/10 border border-teal-500/30 rounded-xl p-8">
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="שם" className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" />
                <input type="email" placeholder="אימייל" className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white" />
              </div>
              <textarea placeholder="ספר לנו על העסק שלך..." rows="4" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white"></textarea>
              <button type="submit" className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 rounded-lg font-semibold">שלח הודעה</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/50 py-8 text-center">
        <p className="text-gray-500">© 2026 BoostUp. כל הזכויות שמורות.</p>
      </footer>
    </div>
  );
}
