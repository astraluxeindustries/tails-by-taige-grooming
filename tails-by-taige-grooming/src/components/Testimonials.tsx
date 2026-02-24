import { FadeIn, Section } from './ui';
import { REVIEWS } from '../constants';
import { Star } from 'lucide-react';

export const Testimonials = () => {
  return (
    <Section className="bg-stone-900 text-white">
      <FadeIn>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-6">Client Love</h2>
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-white text-white" />
            ))}
          </div>
          <p className="text-stone-400 font-light">5.0 Average Rating on Google</p>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {REVIEWS.map((review, idx) => (
          <FadeIn key={idx} delay={idx * 0.1} className="bg-stone-800/50 p-8 rounded-2xl border border-stone-700/50">
            <div className="flex gap-1 mb-4">
              {[...Array(review.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-stone-200 text-stone-200" />
              ))}
            </div>
            <p className="text-lg font-light leading-relaxed mb-6 text-stone-200">"{review.text}"</p>
            <p className="text-sm font-medium tracking-wider uppercase text-stone-500">{review.author}</p>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
};
