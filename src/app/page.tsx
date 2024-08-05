import Contact from "@/components/contact";
import FaqSection from "@/components/faq-section";
import FooterSection from "@/components/footer-section";
import Hero from "@/components/hero";
import InfoSection from "@/components/info-section";


export default function Home() {
  return (
    <>
    <div className="flex flex-col gap-12">
    <Hero />
    
    <InfoSection />  
<Contact/>
    <FaqSection />
  </div>
  <FooterSection />
    </>
  );
}
