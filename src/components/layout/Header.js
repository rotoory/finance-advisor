import Container from '@/components/ui/Container';
import Link from 'next/link';

export default function Header({ navItems = [] }) {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <Container className="flex justify-between items-center py-4">
        <Link href="/" className="font-bold text-2xl">
          Finance Advisor
        </Link>
        <nav>
          {navItems.map(item => (
            <Link key={item.label} href={item.href} className="ml-6 font-semibold text-gray-600 hover:text-gray-900">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}