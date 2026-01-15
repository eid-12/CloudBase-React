import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { OrderForm } from './components/OrderForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="relative">
        <Hero />
        <About />
        <Services />
        <OrderForm />
      </main>
      <Footer />
    </div>
  );
}