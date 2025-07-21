import { pageContent } from "@/lib/content";
import Container from "../ui/Container";

const HowItWorksSection = () => {
  const { howItWorks } = pageContent;

  return (
    <section id="how-it-works" className="relative bg-white py-20">
      <Container className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          {howItWorks.title}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {howItWorks.steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="text-5xl text-blue-600 mb-4">{step.icon}</div> {/* Placeholder for icon */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;