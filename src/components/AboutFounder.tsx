import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import founderImg from "@/assets/founder-sakshi.jpg";

const AboutFounder = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src={founderImg}
                alt="Sakshi Kannor — Founder of SK Bags"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-accent hidden md:block" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="font-body text-xs tracking-luxe uppercase text-accent mb-4">
              The Visionary
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">
              Sakshi Kannor
            </h2>
            <p className="font-accent text-xl italic text-muted-foreground mb-6">
              Founder & Manager, SK Bags
            </p>
            <div className="space-y-4 font-body text-sm text-muted-foreground leading-relaxed">
              <p>
                With an unwavering passion for craftsmanship and an eye for timeless design,
                Sakshi transformed a dream into one of the most sought-after luxury bag
                destinations. Every piece in the SK Bags collection is personally curated to
                reflect sophistication, empowerment, and modern femininity.
              </p>
              <p>
                From sourcing the finest Italian leathers to collaborating with
                emerging designers, her journey is rooted in the belief that a bag
                is more than an accessory — it's a statement of who you are.
              </p>
              <p className="italic text-foreground/80">
                "I wanted to create a space where every woman could find a piece
                that speaks to her soul. Fashion should feel personal, powerful,
                and effortless."
              </p>
            </div>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-px bg-accent" />
              <span className="font-accent text-lg italic text-foreground">
                Founder & Creative Director
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
