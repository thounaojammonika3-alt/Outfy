import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AVIKA | Fashion, Powered by AI',
  description:
    'AVIKA is a complete AI fashion ecosystem for styling, wardrobe intelligence, virtual try-on, shopping, and trend prediction.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
