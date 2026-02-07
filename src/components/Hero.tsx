import { motion } from "framer-motion";
import heroBags from "@/assets/hero-bags.jpg";

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src={heroBags}
            alt="Premium luxury handbags collection"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/40 to-transparent" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-body text-xs tracking-luxe uppercase text-gold-light mb-6"
          >
            New Collection 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] text-primary-foreground mb-6"
          >
            Where Style
            <br />
            Meets{" "}
            <span className="text-gold-gradient italic font-accent font-light">
              Statement
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="font-body text-sm md:text-base text-primary-foreground/70 max-w-md mb-10 leading-relaxed"
          >
            Discover our curated collection of premium handbags from the world's
            most coveted designers. Crafted for the woman who defines elegance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#collections"
              className="bg-gold-gradient text-accent-foreground px-10 py-4 font-body text-xs tracking-luxe uppercase hover:opacity-90 transition-opacity"
            >
              Shop Now
            </a>
            <a
              href="#collections"
              className="border border-primary-foreground/30 text-primary-foreground px-10 py-4 font-body text-xs tracking-luxe uppercase hover:bg-primary-foreground/10 transition-colors"
            >
              Explore Collections
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-body text-[10px] tracking-luxe uppercase text-primary-foreground/50">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary-foreground/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
