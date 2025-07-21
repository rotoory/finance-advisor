import { pageContent } from "@/lib/content";
import Container from "../ui/Container";
import Image from 'next/image';

const AboutSection = () => {
  const { about } = pageContent;

  return (
    <section id="about" className="relative bg-white py-20">
      <Container className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <Image
            src={about.imageUrl}
            alt={about.altText}
            width={500}
            height={500}
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="md:w-1/2 text-gray-700 leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: about.bioHtml }} />
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;