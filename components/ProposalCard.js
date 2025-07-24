'use client';

export default function ProposalCard({ proposal }) {
  const statusColor =
    proposal.status === 'Active'
      ? 'bg-blue-600'
      : proposal.status === 'Passed'
      ? 'bg-green-600'
      : 'bg-gray-600';

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-md flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-lg text-purple-400 font-semibold">{proposal.title}</h3>
        <span className={`text-xs px-2 py-1 rounded ${statusColor}`}>
          {proposal.status}
        </span>
      </div>
      <p className="text-gray-300 text-sm mb-4">{proposal.description}</p>
      <div className="flex items-center mb-3 text-sm text-gray-400">
        <span>Quorum: {proposal.quorum} — Ends: {proposal.ends}</span>
      </div>
      <div className="flex w-full mb-4">
        <div className="w-1/3 text-green-400 text-center">
          <div className="font-bold">{proposal.yes}%</div>
          <div className="text-xs">Yes</div>
        </div>
        <div className="w-1/3 text-red-400 text-center">
          <div className="font-bold">{proposal.no}%</div>
          <div className="text-xs">No</div>
        </div>
        <div className="w-1/3 text-gray-400 text-center">
          <div className="font-bold">{proposal.abstain}%</div>
          <div className="text-xs">Abstain</div>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="bg-green-600 px-4 py-2 rounded hover:bg-green-700 text-white">Vote Yes</button>
        <button className="bg-red-500 px-4 py-2 rounded hover:bg-red-700 text-white">Vote No</button>
        <button className="bg-gray-700 px-4 py-2 rounded hover:bg-gray-600 text-white">Abstain</button>
      </div>
    </div>
  );
}
