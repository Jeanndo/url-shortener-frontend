import Achievements from "@/components/ui/Achievements";
import CallToAction from "@/components/ui/CallToAction";
import Hero from "@/components/ui/Hero";
import Navigation from "@/components/ui/Navigation";

export default function Home() {
  return (
    <div>
      <Navigation/>
      <Hero/>
      <CallToAction/>
      <Achievements/>
    </div>
  );
}
