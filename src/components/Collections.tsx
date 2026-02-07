import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import bagTote from "@/assets/bag-tote.jpg";
import bagSling from "@/assets/bag-sling.jpg";
import bagHandbag from "@/assets/bag-handbag.jpg";
import bagBackpack from "@/assets/bag-backpack.jpg";
import bagOffice from "@/assets/bag-office.jpg";
import bagTravel from "@/assets/bag-travel.jpg";

const collections = [
  { name: "Handbags", image: bagHandbag, price: "From $890", material: "Italian Leather", brand: "Maison Éclat" },
  { name: "Tote Bags", image: bagTote, price: "From $650", material: "Full-Grain Leather", brand: "Atelier Luxe" },
  { name: "Sling Bags", image: bagSling, price: "From $420", material: "Nappa Leather", brand: "Maison Éclat" },
  { name: "Backpacks", image: bagBackpack, price: "From $780", material: "Cognac Leather", brand: "Nomad & Co." },
  { name: "Office Bags", image: bagOffice, price: "From $950", material: "Saffiano Leather", brand: "The Boardroom" },
  { name: "Travel Bags", image: bagTravel, price: "From $1,200", material: "Vegetable-Tanned", brand: "Voyage Luxe" },
];

const CollectionCard = ({ item, index }: { item: typeof collections[0]; index: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden bg-secondary aspect-[4/5]">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/60 transition-all duration-500 flex items-end">
          <div className="p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 w-full">
            <p className="font-body text-[10px] tracking-luxe uppercase text-gold-light mb-1">{item.brand}</p>
            <p className="font-body text-xs text-primary-foreground/70 mb-1">{item.material}</p>
            <p className="font-display text-lg text-primary-foreground">{item.price}</p>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-display text-lg text-foreground">{item.name}</h3>
        <p className="font-body text-xs text-muted-foreground tracking-wide-luxe uppercase mt-1">{item.brand}</p>
      </div>
    </motion.div>
  );
};

const Collections = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collections" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-xs tracking-luxe uppercase text-accent mb-4">Curated For You</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">Our Collections</h2>
          <p className="font-accent text-xl text-muted-foreground italic max-w-lg mx-auto">
            Explore timeless designs crafted with passion and precision
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((item, i) => (
            <CollectionCard key={item.name} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
