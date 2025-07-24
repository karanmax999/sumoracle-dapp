'use client';

export default function LandingPage() {
  return (
    <section className="max-w-3xl mx-auto mt-20 px-6 text-center">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-purple-400 leading-tight">
        Decentralized AI Oracle for Secure DeFi on Core
      </h1>
      <p className="text-base md:text-lg text-gray-300 mb-10 px-2">
        Empowering reliable off-chain data feeds for DeFi, identity, and governance with AI-verified security.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
        <button
          className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          aria-label="Connect Wallet"
        >
          Connect Wallet
        </button>
        <button
          className="border border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold transition hover:bg-purple-700 hover:text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          aria-label="Learn More about AI Oracle"
        >
          Learn More
        </button>
      </div>

      {/* Placeholder for animated oracle network visualization */}
      <div className="h-72 bg-gradient-to-tr from-purple-800 via-blue-900 to-black rounded-lg flex items-center justify-center text-xl font-mono opacity-30 select-none mb-16">
        Animated Oracle Network Visualization Placeholder
      </div>

      {/* Placeholder for key stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-gray-400">
        {[
          { label: 'Active Users', value: '12,345' },
          { label: 'Oracle Nodes', value: '650' },
          { label: 'TVL', value: '$150M' },
          { label: 'Confidence Score', value: '98.7%' },
        ].map(({ label, value }) => (
          <div key={label} className="bg-gray-800 rounded-lg p-4 text-center">
            <p className="text-3xl font-bold text-white">{value}</p>
            <p className="mt-1">{label}</p>
          </div>
        ))}
      </div>

      {/* Trust badges footer */}
      <footer className="mt-20 text-gray-500 text-sm text-center">
        <span>Audited by XYZ | GDPR Compliant | KYC Verified</span>
      </footer>
    </section>
  );
}
