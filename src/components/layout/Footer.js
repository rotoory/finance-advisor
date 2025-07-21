import Container from '@/components/ui/Container';
import Link from 'next/link';

export default function Footer({ socialLinks = [], footerText = '' }) {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <Container className="text-center">
        <div className="mb-4">
          {socialLinks.map(link => (
            <Link key={link.name} href={link.href} className="mx-2 hover:text-blue-400">
              {link.name}
            </Link>
          ))}
        </div>
        <p>{footerText}</p>
      </Container>
    </footer>
  );
}