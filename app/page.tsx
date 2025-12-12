import Agenda from "@/components/Agenda";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Participate from "@/components/Participate";
import Speakers from "@/components/Speakers";
import Sponsors from "@/components/Sponsors";
import WhyAttend from "@/components/WhyAttend";

export default function Home() {
  return (
    <>
      <Hero />
      <Overview />
      <WhyAttend />
      <Speakers />
      <Agenda />
      <Participate />
      <FAQ />
      <Sponsors />
    </>
  );
}
