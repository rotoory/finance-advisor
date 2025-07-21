import { pageContent } from "@/lib/content";
import Container from "../ui/Container";
import Button from "../ui/Button";

const HeroSection = () => {
  const { hero } = pageContent;

  return (
    <section id="hero" className="relative bg-gray-100">
      <Container className="flex flex-col items-center text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {hero.headline}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {hero.subheadline}
        </p>
        <Button href={hero.ctaHref}>
          {hero.ctaText}
        </Button>
      </Container>
    </section>
  );
};

export default HeroSection;