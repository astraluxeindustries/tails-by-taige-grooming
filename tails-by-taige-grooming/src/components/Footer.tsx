import { BUSINESS_INFO } from '../constants';
import { MapPin, Phone, Clock, Instagram } from 'lucide-react';
import { Button } from './ui';

export const Footer = () => {
  return (
    <footer className="bg-stone-950 text-stone-400 py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* Brand */}
        <div className="space-y-6">
          <h2 className="text-2xl font-serif text-white tracking-tight">{BUSINESS_INFO.name}</h2>
          <p className="font-light text-sm leading-relaxed max-w-xs">
            {BUSINESS_INFO.subhead} Providing premium grooming services with love and care in Southern Utah.
          </p>
          <div className="flex gap-4">
            <a href={`https://instagram.com/${BUSINESS_INFO.instagram}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="text-white font-medium tracking-wide uppercase text-xs">Contact</h3>
          <ul className="space-y-4 text-sm font-light">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 shrink-0" />
              <span>{BUSINESS_INFO.address}</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 shrink-0" />
              <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="hover:text-white transition-colors">
                {BUSINESS_INFO.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-4 h-4 shrink-0" />
              <span>{BUSINESS_INFO.hours}</span>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <h3 className="text-white font-medium tracking-wide uppercase text-xs">Menu</h3>
          <ul className="space-y-3 text-sm font-light">
            <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
            <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
            <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
          </ul>
        </div>

        {/* CTA */}
        <div className="space-y-6">
          <h3 className="text-white font-medium tracking-wide uppercase text-xs">Book Now</h3>
          <p className="text-sm font-light mb-4">Ready to pamper your pup? Call or text us today.</p>
          <Button href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} variant="secondary" className="w-full text-center">
            {BUSINESS_INFO.phone}
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-stone-900 text-xs font-light text-center md:text-left flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed with care.</p>
      </div>
    </footer>
  );
};
