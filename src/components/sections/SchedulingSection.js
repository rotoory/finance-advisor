import { InlineWidget } from "react-calendly";
import Container from "../ui/Container";

const SchedulingSection = () => {
  return (
    <section id="schedule" className="relative bg-gray-100 py-20">
      <Container className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">
          Book Your Free Consultation
        </h2>
        <div className="calendly-widget-container" style={{ height: '700px' }}>
          <InlineWidget url={process.env.NEXT_PUBLIC_CALENDLY_URL} />
        </div>
      </Container>
    </section>
  );
};

export default SchedulingSection;