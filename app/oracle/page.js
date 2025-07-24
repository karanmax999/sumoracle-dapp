'use client';

import OracleFeedCard from '../../components/OracleFeedCard';

const mockFeeds = [
  {
    name: 'ETH/USD Price',
    type: 'Price Feed',
    confidence: 98.7,
    anomaly: false,
    lastUpdate: '2025-07-23 12:59 UTC',
  },
  {
    name: 'BTC/USD Price',
    type: 'Price Feed',
    confidence: 87.2,
    anomaly: true,
    lastUpdate: '2025-07-23 12:58 UTC',
  },
  {
    name: 'DeFi Protocol Score',
    type: 'Risk Score',
    confidence: 93.1,
    anomaly: false,
    lastUpdate: '2025-07-23 11:00 UTC',
  },
  {
    name: 'User KYC Verification',
    type: 'KYC Signal',
    confidence: 99.9,
    anomaly: false,
    lastUpdate: '2025-07-23 08:45 UTC',
  },
];

export default function OraclePage() {
  return (
    <section className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-purple-400 mb-8">Oracle Feed Explorer</h1>

      <p className="text-gray-400 mb-6 max-w-3xl">
        Explore real-time oracle feeds, their confidence scores, and anomaly detection alerts.
        Click a feed for detailed analytics.
      </p>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {mockFeeds.map(feed => (
          <OracleFeedCard key={feed.name} feed={feed} />
        ))}
      </div>
    </section>
  );
}
