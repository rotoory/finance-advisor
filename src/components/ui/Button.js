import Link from 'next/link';

export default function Button({ children, href, variant = 'primary' }) {
  const baseStyle = 'inline-block px-8 py-3 text-lg font-semibold rounded-md text-center transition-colors';
  const styles = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
  };

  return (
    <Link href={href} className={`${baseStyle} ${styles[variant]}`}>
      {children}
    </Link>
  );
}