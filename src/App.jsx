import React from 'react';
import { motion } from 'motion/react';
import { Phone, Instagram, MessageCircle, Send, MapPin, Gift, Star, Truck } from 'lucide-react';
import ContainerTextFlipDemo from './components/container-text-flip-demo';
import { ThreeDCardDemo } from './components/three-d-card-demo';
import { GlassCard, GlassSection } from './components/ui/glass-card';
import { Button } from './components/ui/button';
import './App.css';

// Hero Section Component
const HeroSection = () => (
  <GlassSection 
    className="min-h-screen flex items-center justify-center"
    backgroundImage="/src/assets/workout-hero.jpg"
  >
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-light text-white/90 mb-4">
          Добро пожаловать в
        </h2>
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
          АМРИТА
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-8">
          Магазин спортивного питания
        </p>
      </motion.div>
      
      <ContainerTextFlipDemo />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-12"
      >
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          onClick={() => window.open('https://wa.me/79888768237', '_blank')}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Заказать сейчас
        </Button>
      </motion.div>
    </div>
  </GlassSection>
);

// About Section Component
const AboutSection = () => (
  <GlassSection className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          О нас
        </h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Амрита — ваш надежный партнер в достижении спортивных целей. 
          Мы предлагаем только качественное спортивное питание от проверенных производителей.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {[
          { icon: Star, title: "Качество", desc: "Только сертифицированные товары" },
          { icon: Truck, title: "Доставка", desc: "Быстрая доставка по всей России" },
          { icon: Gift, title: "Бонусы", desc: "Выгодная программа лояльности" }
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <GlassCard className="p-6 text-center h-full">
              <item.icon className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-white/70">{item.desc}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  </GlassSection>
);

// Offers Section Component
const OffersSection = () => (
  <GlassSection className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Специальные предложения
        </h2>
      </motion.div>

      <div className="flex justify-center">
        <ThreeDCardDemo />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16"
      >
        <GlassCard className="p-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Условия доставки</h3>
              <ul className="space-y-2 text-white/80">
                <li>🚚 Бесплатная доставка по городу от 3000₽</li>
                <li>📦 Доставка по всей России</li>
                <li>⚡ Быстрая обработка заказов</li>
                <li>💯 Гарантия качества товара</li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Бонусная программа</h3>
              <ul className="space-y-2 text-white/80">
                <li>🎁 10% скидка на первую покупку</li>
                <li>💳 Бесплатная бонусная карта</li>
                <li>📱 +200 бонусов за отметку в Instagram</li>
                <li>🔄 Накопительная система скидок</li>
              </ul>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  </GlassSection>
);

// Contact Section Component
const ContactSection = () => (
  <GlassSection className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Контакты
        </h2>
        <p className="text-xl text-white/80">
          Свяжитесь с нами удобным способом
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {[
          {
            icon: Instagram,
            title: "Instagram",
            link: "https://www.instagram.com/amrita.sportpit?igsh=ZHdxeHZ5YjYzN3Zj",
            text: "@amrita.sportpit"
          },
          {
            icon: MessageCircle,
            title: "WhatsApp",
            link: "https://wa.me/79888768237",
            text: "+7 (988) 876-82-37"
          },
          {
            icon: Send,
            title: "Telegram",
            link: "https://t.me/amritasportpit",
            text: "@amritasportpit"
          },
          {
            icon: Phone,
            title: "VK",
            link: "https://vk.com/amrita.sportpit",
            text: "amrita.sportpit"
          }
        ].map((contact, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <GlassCard className="p-6 text-center h-full hover:bg-white/20 transition-all duration-300 cursor-pointer">
              <a 
                href={contact.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block"
              >
                <contact.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">{contact.title}</h3>
                <p className="text-white/70 text-sm">{contact.text}</p>
              </a>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <GlassCard className="p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Номера для связи</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <a 
              href="tel:+79888768237" 
              className="text-xl text-blue-400 hover:text-blue-300 transition-colors"
            >
              +7 (988) 876-82-37
            </a>
            <span className="text-white/50 hidden md:block">|</span>
            <a 
              href="tel:+78672707837" 
              className="text-xl text-blue-400 hover:text-blue-300 transition-colors"
            >
              +7 (867) 270-78-37
            </a>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  </GlassSection>
);

// Footer Component
const Footer = () => (
  <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="text-white/60">
        © 2025 Амрита - Магазин спортивного питания. Все права защищены.
      </p>
    </div>
  </footer>
);

// Main App Component
function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <OffersSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

