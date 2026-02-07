import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Collections from "@/components/Collections";
import AboutFounder from "@/components/AboutFounder";
import WhyChooseUs from "@/components/WhyChooseUs";
import FeaturedBrands from "@/components/FeaturedBrands";
import CustomerReviews from "@/components/CustomerReviews";
import NewsletterFooter from "@/components/NewsletterFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Collections />
      <AboutFounder />
      <WhyChooseUs />
      <FeaturedBrands />
      <CustomerReviews />
      <NewsletterFooter />
    </div>
  );
};

export default Index;
