import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

const HeroSection = ({ headline, subheadline, ctaText, ctaHref }) => {
  return (
    <section id="hero" className="relative bg-gray-100">
      <Container className="flex flex-col items-center text-center py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          {headline}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          {subheadline}
        </p>
        <Button href={ctaHref}>
          {ctaText}
        </Button>
      </Container>
    </section>
  );
};

export default HeroSection;