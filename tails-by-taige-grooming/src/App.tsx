import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-stone-50 min-h-screen font-sans selection:bg-stone-200 selection:text-stone-900">
      <Navigation />
      <Hero />
      <Services />
      <div id="gallery">
        <Gallery />
      </div>
      <div id="reviews">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
}
