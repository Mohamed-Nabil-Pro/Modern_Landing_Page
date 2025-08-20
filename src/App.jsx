
import './App.css'
import CompanyLogo from './components/CompanyLogo';
import FeaturesSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Hero from './components/Hero';
import MonitorSection from './components/MonitorSection';
import Navbar from './components/Navbar';
import NewsletterSection from './components/NewsletterSection';
import PricingSection from './components/PricingSection';
import PurposeSection from './components/PurposeSection';
import ScheduleSection from './components/ScheduleSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';

function App() {
  

  return (
    <main className='overflow-x-hidden relative min-h-screen '>
      
      <div className='overflow-hidden before:content-[""] before:absolute before:-top-28 before:-left-0 before:w-[500px] before:h-[500px] before:bg-gradient-to-tr before:from-indigo-500/20 before:to-pink-500/20 before:rounded-full before:blur-[80px] before:-z-10'>
        <Navbar />
        <Hero />
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
        <ScheduleSection />
        <MonitorSection />
        <PricingSection />
        <ServicesSection />
        <TestimonialsSection />
        <NewsletterSection />
        <Footer />
      </div>
    </main>
  )
}

export default App
