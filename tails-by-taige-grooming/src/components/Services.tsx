import { FadeIn, Section } from './ui';
import { SERVICES } from '../constants';

const ServiceCard = ({ service }: { service: any }) => (
  <div className="group relative p-8 bg-white border border-stone-100 hover:border-stone-200 transition-colors duration-300">
    <div className="flex justify-between items-start mb-4">
      <h3 className="text-xl font-serif font-medium text-stone-900">{service.name}</h3>
      <span className="text-sm font-mono text-stone-500">{service.duration}</span>
    </div>
    <p className="text-stone-600 font-light leading-relaxed mb-6 text-sm">
      {service.description || "Professional grooming service tailored to your pet's needs."}
    </p>
    <div className="flex justify-between items-center pt-4 border-t border-stone-100">
      <span className="text-stone-900 font-medium">{service.price}</span>
      <span className="text-xs uppercase tracking-wider text-stone-400 group-hover:text-stone-900 transition-colors">Book Now &rarr;</span>
    </div>
  </div>
);

export const Services = () => {
  return (
    <Section id="services" className="bg-stone-50">
      <FadeIn>
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-stone-500 mb-4 block">Our Menu</span>
          <h2 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">Grooming Services</h2>
          <p className="max-w-2xl mx-auto text-stone-600 font-light">
            We offer a comprehensive range of services to keep your furry friend looking and feeling their best.
            Prices may vary based on coat condition and temperament.
          </p>
        </div>
      </FadeIn>

      <div className="space-y-24">
        {/* Full Grooms */}
        <div>
          <FadeIn>
            <h3 className="text-2xl font-serif mb-8 text-stone-900 border-b border-stone-200 pb-4 inline-block">Full Grooms</h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.fullGrooms.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Mini Grooms */}
        <div>
          <FadeIn>
            <h3 className="text-2xl font-serif mb-8 text-stone-900 border-b border-stone-200 pb-4 inline-block">Mini Grooms</h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.miniGrooms.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Bath Services */}
        <div>
          <FadeIn>
            <h3 className="text-2xl font-serif mb-8 text-stone-900 border-b border-stone-200 pb-4 inline-block">Bath & Brush</h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.bathServices.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Add Ons */}
        <div>
          <FadeIn>
            <h3 className="text-2xl font-serif mb-8 text-stone-900 border-b border-stone-200 pb-4 inline-block">A La Carte & Add-ons</h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.addOns.map((service, idx) => (
              <FadeIn key={idx} delay={idx * 0.1}>
                <ServiceCard service={service} />
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
