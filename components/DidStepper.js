'use client';

const steps = [
  { label: 'Upload Documents', status: 'complete' },
  { label: 'AI Risk Analysis', status: 'complete' },
  { label: 'Provider Review', status: 'pending' },
  { label: 'Credential Issued', status: 'upcoming' }
];

export default function DidStepper() {
  return (
    <div className="flex flex-col space-y-6">
      {steps.map((step, idx) => (
        <div key={step.label} className="flex items-center">
          <div
            className={`rounded-full w-7 h-7 flex items-center justify-center
              ${step.status === 'complete' ? 'bg-green-600 text-white'
                : step.status === 'pending' ? 'bg-yellow-500 text-gray-800'
                : 'bg-gray-600 text-gray-300' }`}
          >
            {step.status === 'complete' ? '✓' : idx + 1}
          </div>
          <span className="ml-4 text-base">
            {step.label}
            {step.status === 'pending' && (
              <span className="ml-2 italic text-xs text-yellow-400">in progress…</span>
            )}
          </span>
        </div>
      ))}
    </div>
  );
}
