'use client';

import ProposalCard from '../../components/ProposalCard';

const proposals = [
  {
    title: 'Add New Oracle Feed: EUR/USD',
    description: 'Enable support for the EUR/USD forex pair in price oracle feeds.',
    status: 'Active',
    quorum: '45%',
    ends: '2d 7h',
    yes: 61,
    no: 28,
    abstain: 11,
  },
  {
    title: 'Upgrade AI Model (v2)',
    description: 'Deploy new AI model for improved anomaly detection in oracle validation.',
    status: 'Passed',
    quorum: '50%',
    ends: 'Ended',
    yes: 71,
    no: 17,
    abstain: 12,
  },
];

export default function GovernancePage() {
  return (
    <section
      aria-labelledby="governance-heading"
      className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
    >
      <h1 id="governance-heading" className="text-3xl font-bold text-purple-400 mb-6">
        Governance Proposals
      </h1>
      <p className="text-gray-300 mb-8 max-w-2xl">
        Community governs oracles, upgrades, risk parameters, and more. Voting is demo-only.
      </p>

      <div className="flex flex-col gap-8">
        {proposals.map((prop, idx) => (
          <ProposalCard key={prop.title + idx} proposal={prop} />
        ))}
      </div>
    </section>
  );
}
