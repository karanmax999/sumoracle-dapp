// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-gray-800 py-6 mt-8 text-sm text-gray-400">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>&copy; {new Date().getFullYear()} SumOracle. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-purple-400">About</a>
          <a href="#" className="hover:text-purple-400">Docs</a>
          <a href="#" className="hover:text-purple-400">Contact</a>
        </div>
        <div className="flex gap-2">
          {/* Social icons (replace with real links and icons) */}
          <a href="#"><span className="sr-only">Twitter</span>🐦</a>
          <a href="#"><span className="sr-only">Discord</span>💬</a>
          <a href="#"><span className="sr-only">GitHub</span>🐙</a>
        </div>
      </div>
    </footer>
  );
}
