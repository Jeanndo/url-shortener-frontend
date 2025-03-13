import Achievements from "@/components/ui/Achievements";
import CallToAction from "@/components/ui/CallToAction";
import FooterSection from "@/components/ui/Footer";
import Hero from "@/components/ui/Hero";
import HowBusinessWork from "@/components/ui/HowBusinessWork";
import Navigation from "@/components/ui/Navigation";
import Testimonials from "@/components/ui/Testimonials";

export default function Home() {
  return (
    <div>
      <Navigation/>
      <Hero/>
      <CallToAction/>
      <Achievements/>
      <Testimonials/>
      <HowBusinessWork/>
      <FooterSection/>
    </div>
  );
}
