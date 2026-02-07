import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Shield, Heart, Truck } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Premium Materials",
    description: "Only the finest leathers and fabrics sourced from artisan tanneries worldwide.",
  },
  {
    icon: Shield,
    title: "Authenticity Guaranteed",
    description: "Every piece is verified and comes with a certificate of authenticity.",
  },
  {
    icon: Heart,
    title: "Curated Selection",
    description: "Hand-picked collections from established and emerging luxury designers.",
  },
  {
    icon: Truck,
    title: "White Glove Delivery",
    description: "Complimentary premium packaging and insured worldwide delivery.",
  },
];

const WhyChooseUs = () => {
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
            The Maison Promise
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Why Choose Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:glow-gold transition-all duration-500">
                <feat.icon size={24} className="text-accent" />
              </div>
              <h3 className="font-display text-lg text-foreground mb-3">{feat.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {feat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
