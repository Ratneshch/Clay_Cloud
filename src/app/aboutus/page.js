
import UseCase from "@/components/UseCase";
import AboutCloud from "@/components/AboutCloud";
import TechnologyMarquee from "@/components/TechnologyMarquee";
import TalkToUs from "@/components/TalkToUs";
import ServeSeectionAbout from "@/components/ServeSeectionAbout";
import AboutUsHero from "@/components/AboutUsHero";
import AboutUsIntro from "@/components/AboutUsIntro";


export default function AboutPage() {
  return (
    <>
      <AboutUsHero />

      <TechnologyMarquee />

      {/* intro section */}
      <AboutUsIntro />
      {/* closed intro section */}


      {/* empowering secction */}
      <ServeSeectionAbout />
      {/* empowering secction */}

      <UseCase />
      <TalkToUs />
      <AboutCloud />
    </>
  )
}