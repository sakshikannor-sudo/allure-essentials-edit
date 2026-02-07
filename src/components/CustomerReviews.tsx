import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Sophia Laurent",
    role: "Fashion Editor",
    text: "The quality is absolutely unmatched. My Maison Éclat tote has become my daily essential — luxurious yet practical.",
    rating: 5,
  },
  {
    name: "Amara Chen",
    role: "Creative Director",
    text: "I've never felt more confident walking into a boardroom. The Office collection is perfection in every stitch.",
    rating: 5,
  },
  {
    name: "Isabella Rossi",
    role: "Entrepreneur",
    text: "From packaging to product, every detail whispers luxury. This is what premium shopping should feel like.",
    rating: 5,
  },
];

const CustomerReviews = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-luxe uppercase text-accent mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card p-8 luxury-shadow hover:glow-gold transition-shadow duration-500"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} size={14} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="font-accent text-lg italic text-foreground leading-relaxed mb-8">
                "{review.text}"
              </p>
              <div>
                <p className="font-body text-sm font-semibold text-foreground">{review.name}</p>
                <p className="font-body text-xs text-muted-foreground">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
