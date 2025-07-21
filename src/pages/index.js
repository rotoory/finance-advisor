import { pageContent } from '@/lib/content';
import HeroSection from '@/components/sections/HeroSection';
import SchedulingSection from '@/components/sections/SchedulingSection';
import WhoWeHelpSection from '@/components/sections/WhoWeHelpSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import AboutSection from '@/components/sections/AboutSection';

export default function Home() {
  const { hero, scheduling, whoWeHelp, howItWorks, testimonials, about } = pageContent;

  return (
    <>
      <HeroSection
        headline={hero.headline}
        subheadline={hero.subheadline}
        text={hero.text}
        button1Text={hero.button1Text}
        button1Link={hero.button1Link}
        button2Text={hero.button2Text}
        button2Link={hero.button2Link}
      />
      <WhoWeHelpSection
        headline={whoWeHelp.headline}
        people={whoWeHelp.people}
      />
      <HowItWorksSection
        headline={howItWorks.headline}
        steps={howItWorks.steps}
      />
      <TestimonialsSection
        headline={testimonials.headline}
        testimonials={testimonials.testimonials}
      />
       <AboutSection
        headline={about.headline}
        text={about.text}
      />
      <SchedulingSection title={scheduling.title} />
    </>
  );
}