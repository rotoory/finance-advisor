import Container from '@/components/ui/Container';
import { InlineWidget } from 'react-calendly';

const SchedulingSection = ({ title }) => {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;

  return (
    <section id="schedule" className="py-20">
      <Container>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          {title}
        </h2>
        {calendlyUrl ? (
          <InlineWidget url={calendlyUrl} style={{ height: '1000px' }} />
        ) : (
          <p className="text-center text-red-600">
            Calendly scheduling is currently unavailable. Please try again later.
          </p>
        )}
      </Container>
    </section>
  );
};

export default SchedulingSection;