import { pageContent } from "@/lib/content";
import Container from "../ui/Container";

const WhoWeHelpSection = () => {
  const { whoWeHelp } = pageContent;

  return (
    <section id="who-we-help" className="relative bg-gray-100 py-20">
      <Container className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          {whoWeHelp.title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {whoWeHelp.specializations.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow">
              <div className="text-4xl text-blue-600 mb-4">{item.icon}</div> {/* Placeholder for icon */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhoWeHelpSection;