import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShoppingBag, Search, Heart } from "lucide-react";

const navLinks = ["Collections", "New Arrivals", "Brands", "About", "Contact"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-xl shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="font-display text-2xl font-bold tracking-luxe text-foreground">
              MAISON
            </a>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="line-reveal font-body text-xs tracking-wide-luxe uppercase text-foreground/80 hover:text-foreground transition-colors pb-1"
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-5">
              <button className="text-foreground/70 hover:text-foreground transition-colors">
                <Search size={18} />
              </button>
              <button className="text-foreground/70 hover:text-foreground transition-colors hidden sm:block">
                <Heart size={18} />
              </button>
              <button className="text-foreground/70 hover:text-foreground transition-colors relative">
                <ShoppingBag size={18} />
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-accent text-accent-foreground rounded-full text-[10px] flex items-center justify-center font-body font-semibold">
                  0
                </span>
              </button>
              <button
                className="md:hidden text-foreground"
                onClick={() => setMenuOpen(true)}
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-background"
          >
            <div className="flex items-center justify-between px-6 h-20">
              <span className="font-display text-2xl font-bold tracking-luxe">MAISON</span>
              <button onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col items-center gap-8 mt-20">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-3xl tracking-wide-luxe text-foreground"
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
