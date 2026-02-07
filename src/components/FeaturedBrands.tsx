import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const brands = [
  "Maison Éclat",
  "Atelier Luxe",
  "Nomad & Co.",
  "The Boardroom",
  "Voyage Luxe",
  "Aria Milano",
  "Belle Époque",
  "Casa Nova",
];

const FeaturedBrands = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="brands" className="py-24 md:py-32 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-luxe uppercase text-accent mb-4">
            Our Partners
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Featured Brands
          </h2>
        </motion.div>
      </div>

      {/* Scrolling Brands */}
      <div className="relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 whitespace-nowrap"
        >
          {[...brands, ...brands].map((brand, i) => (
            <div
              key={`${brand}-${i}`}
              className="flex-shrink-0 group cursor-pointer"
            >
              <span className="font-display text-3xl md:text-4xl text-muted-foreground/40 group-hover:text-accent transition-colors duration-500 tracking-wide">
                {brand}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedBrands;
