import "@/styles/globals.css";
import { Inter } from '@next/font/google';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  // Placeholder data for Header and Footer
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'How it Works', href: '#how-it-works' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Schedule', href: '#schedule' },
  ];

  const socialLinks = [
    { label: 'Facebook', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ];

  const footerText = '© 2023 Finance Advisor. All rights reserved.';

  return (
    <div className={inter.className}>
      <Header navItems={navItems} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer socialLinks={socialLinks} footerText={footerText} />
    </div>
  );
}
