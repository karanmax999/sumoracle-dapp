// app/layout.js

import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Providers from './providers'; // client-side RainbowKit/Wagmi setup

export const metadata = {
  title: 'SumOracle – AI Oracle DeFi Platform',
  description: 'Secure DeFi powered by decentralized AI Oracles on Core',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100 min-h-screen flex flex-col">
        <Providers>
          <Navbar />
          <main className="flex-grow container mx-auto px-4 py-6">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
