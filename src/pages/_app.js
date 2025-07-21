import "@/styles/globals.css";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { pageContent } from '@/lib/content';

export default function App({ Component, pageProps }) {
  const { nav, footer } = pageContent;

  return (
    <>
      <Header navItems={nav.items} />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer socialLinks={footer.socialLinks} footerText={footer.footerText} />
    </>
  );
}