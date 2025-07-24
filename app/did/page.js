'use client';

import DidStepper from '../../components/DidStepper';

export default function DidPage() {
  return (
    <section className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold text-purple-400 mb-4">
        Decentralized Identity (DID) Verification
      </h1>
      <p className="text-gray-300 mb-8">
        Complete identity verification. AI ensures high trust and privacy for DeFi users.
      </p>

      <DidStepper />

      {/* Mocked Credential Viewer */}
      <div className="mt-12 border-t border-gray-700 pt-6">
        <h2 className="text-xl text-purple-300 mb-3">Your Credentials</h2>
        <div className="bg-gray-700 p-5 rounded-md text-sm text-green-300 mb-4 shadow-inner">
          <span>Verified KYC: </span>
          <span className="font-semibold">Yes (AI Confidence: 99.9%)</span>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="bg-purple-600 px-5 py-2 rounded-md hover:bg-purple-700 transition font-semibold">
            Download Credential (ZK)
          </button>
          <button className="bg-gray-700 px-5 py-2 rounded-md hover:bg-gray-800 transition font-semibold">
            Manage Privacy
          </button>
        </div>
      </div>
    </section>
  );
}
