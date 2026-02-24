import { FadeIn, Section } from './ui';

const IMAGES = [
  "https://images.unsplash.com/photo-1591852662647-47c464c2d68a?q=80&w=800&auto=format&fit=crop", // Doodle
  "https://images.unsplash.com/photo-1535930749574-1399327ce78f?q=80&w=800&auto=format&fit=crop", // Poodle
  "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=800&auto=format&fit=crop", // Grooming
  "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop", // Cute dog
  "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9205?q=80&w=800&auto=format&fit=crop", // Bath
  "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?q=80&w=800&auto=format&fit=crop", // Happy dog
];

export const Gallery = () => {
  return (
    <Section className="bg-white">
      <FadeIn>
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-4 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Fresh Cuts</h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {IMAGES.map((src, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} className="aspect-square overflow-hidden bg-stone-100 group">
            <img 
              src={src} 
              alt={`Gallery image ${idx + 1}`} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};
