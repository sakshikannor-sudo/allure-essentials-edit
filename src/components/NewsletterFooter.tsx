import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Instagram, Facebook, Twitter, ArrowRight } from "lucide-react";

const NewsletterFooter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [email, setEmail] = useState("");

  return (
    <>
      {/* Newsletter */}
      <section className="py-24 md:py-32 bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-xs tracking-luxe uppercase text-gold-light mb-4">
              Stay in Style
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-4">
              Join the Inner Circle
            </h2>
            <p className="font-body text-sm text-primary-foreground/60 mb-10 max-w-md mx-auto">
              Be the first to discover new arrivals, exclusive offers, and behind-the-scenes access.
            </p>

            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/30 px-6 py-4 font-body text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button className="bg-gold-gradient text-accent-foreground px-6 py-4 hover:opacity-90 transition-opacity">
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal border-t border-primary-foreground/10 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="font-display text-xl tracking-luxe text-primary-foreground mb-4">SK BAGS</h3>
              <p className="font-body text-xs text-primary-foreground/50 leading-relaxed">
                Curating luxury, one bag at a time. Premium handbags for the modern woman. Founded by Sakshi Kannor.
              </p>
            </div>
            <div>
              <h4 className="font-body text-xs tracking-luxe uppercase text-primary-foreground/70 mb-4">Shop</h4>
              <div className="space-y-3">
                {["Handbags", "Tote Bags", "Sling Bags", "Backpacks", "New Arrivals"].map((l) => (
                  <a key={l} href="#" className="block font-body text-sm text-primary-foreground/50 hover:text-accent transition-colors">
                    {l}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-body text-xs tracking-luxe uppercase text-primary-foreground/70 mb-4">Company</h4>
              <div className="space-y-3">
                {["About Us", "Our Story", "Careers", "Press", "Contact"].map((l) => (
                  <a key={l} href="#" className="block font-body text-sm text-primary-foreground/50 hover:text-accent transition-colors">
                    {l}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-body text-xs tracking-luxe uppercase text-primary-foreground/70 mb-4">Follow Us</h4>
              <div className="flex gap-4">
                {[Instagram, Facebook, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 border border-primary-foreground/20 flex items-center justify-center text-primary-foreground/50 hover:text-accent hover:border-accent transition-colors"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-xs text-primary-foreground/30">
              © 2026 SK Bags. All rights reserved.
            </p>
            <div className="flex gap-6">
              {["Privacy Policy", "Terms of Service", "Shipping"].map((l) => (
                <a key={l} href="#" className="font-body text-xs text-primary-foreground/30 hover:text-primary-foreground/60 transition-colors">
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default NewsletterFooter;
