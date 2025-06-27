import React from 'react';
import { motion } from 'motion/react';
import { Phone, Instagram, MessageCircle, Send, MapPin, Gift, Star, Truck } from 'lucide-react';
import ContainerTextFlipDemo from './components/container-text-flip-demo';
import { ThreeDCardDemo } from './components/three-d-card-demo';
import { GlassCard, GlassSection } from './components/ui/glass-card';
import { Button } from './components/ui/button';
import './App.css';

// Импорт изображений
import workoutHero from './assets/workout-hero.jpg';

// Hero Section Component
const HeroSection = () => (
  <GlassSection
    className="min-h-screen flex items-center justify-center"
    backgroundImage={workoutHero}
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
          className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg"
        >
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
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-white mb-8">О нас</h2>
        <p className="text-xl text-white/80 max-w-3xl mx-auto">
          Амрита — ваш надежный партнер в достижении спортивных целей.
          Мы предлагаем только качественное спортивное питание от
          проверенных производителей.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        <GlassCard className="text-center p-8">
          <Star className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Качество</h3>
          <p className="text-white/70">
            Только сертифицированные товары
          </p>
        </GlassCard>

        <GlassCard className="text-center p-8">
          <Truck className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Доставка</h3>
          <p className="text-white/70">
            Быстрая доставка по всей России
          </p>
        </GlassCard>

        <GlassCard className="text-center p-8">
          <Gift className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-white mb-4">Бонусы</h3>
          <p className="text-white/70">
            Выгодная программа лояльности
          </p>
        </GlassCard>
      </div>
    </div>
  </GlassSection>
);

// Special Offers Section
const SpecialOffersSection = () => (
  <GlassSection className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-white mb-8">Специальные предложения</h2>
      </motion.div>

      <div className="flex justify-center">
        <ThreeDCardDemo />
      </div>
    </div>
  </GlassSection>
);

// Additional Info Section
const AdditionalInfoSection = () => (
  <GlassSection className="py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <GlassCard className="p-8">
          <h3 className="text-3xl font-bold text-white mb-6">Условия доставки</h3>
          <div className="space-y-4 text-white/80">
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-blue-400" />
              <span>Бесплатная доставка по городу от 3000₽</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Доставка по всей России</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-blue-400" />
              <span>Быстрая обработка заказов</span>
            </div>
            <div className="flex items-center gap-3">
              <Gift className="w-5 h-5 text-blue-400" />
              <span>Гарантия качества товара</span>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-8">
          <h3 className="text-3xl font-bold text-white mb-6">Бонусная программа</h3>
          <div className="space-y-4 text-white/80">
            <div className="flex items-center gap-3">
              <Gift className="w-5 h-5 text-blue-400" />
              <span>10% скидка на первую покупку</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-blue-400" />
              <span>Бесплатная бонусная карта</span>
            </div>
            <div className="flex items-center gap-3">
              <Instagram className="w-5 h-5 text-blue-400" />
              <span>+200 бонусов за отметку в Instagram</span>
            </div>
            <div className="flex items-center gap-3">
              <Truck className="w-5 h-5 text-blue-400" />
              <span>Накопительная система скидок</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  </GlassSection>
);

// Contact Section Component
const ContactSection = () => (
  <GlassSection className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-bold text-white mb-8">Контакты</h2>
        <p className="text-xl text-white/80">
          Свяжитесь с нами удобным способом
        </p>
      </motion.div>

      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <GlassCard className="text-center p-6 border-2 border-green-400/30">
          <Instagram className="w-8 h-8 text-green-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white mb-2">Instagram</h3>
          <a href="https://www.instagram.com/amrita.sportpit" className="text-green-400 hover:text-green-300">
            @amrita.sportpit
          </a>
        </GlassCard>

        <GlassCard className="text-center p-6 border-2 border-blue-400/30">
          <MessageCircle className="w-8 h-8 text-blue-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
          <a href="https://wa.me/79888768237" className="text-blue-400 hover:text-blue-300">
            +7 (988) 876-82-37
          </a>
        </GlassCard>

        <GlassCard className="text-center p-6 border-2 border-orange-400/30">
          <Send className="w-8 h-8 text-orange-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white mb-2">Telegram</h3>
          <a href="https://t.me/amritasportpit" className="text-orange-400 hover:text-orange-300">
            @amritasportpit
          </a>
        </GlassCard>

        <GlassCard className="text-center p-6 border-2 border-purple-400/30">
          <Phone className="w-8 h-8 text-purple-400 mx-auto mb-3" />
          <h3 className="text-lg font-semibold text-white mb-2">VK</h3>
          <a href="https://vk.com/amrita.sportpit" className="text-purple-400 hover:text-purple-300">
            amrita.sportpit
          </a>
        </GlassCard>
      </div>

      <GlassCard className="text-center p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Номера для связи</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="tel:+79888768237" className="text-green-400 hover:text-green-300 text-lg border border-green-400/30 px-4 py-2 rounded-lg">
            +7 (988) 876-82-37
          </a>
          <a href="tel:+78672707837" className="text-red-400 hover:text-red-300 text-lg border border-red-400/30 px-4 py-2 rounded-lg">
            +7 (867) 270-78-37
          </a>
        </div>
      </GlassCard>
    </div>
  </GlassSection>
);

// Footer Component
const Footer = () => (
  <footer className="bg-black/20 backdrop-blur-sm py-8">
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
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <HeroSection />
      <AboutSection />
      <SpecialOffersSection />
      <AdditionalInfoSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;

