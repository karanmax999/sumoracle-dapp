'use client';

import Card from '../../components/Card';
import { FaWallet, FaNetworkWired, FaGavel, FaRobot } from 'react-icons/fa';
import { Tooltip } from 'react-tooltip'; // example tooltip library, install if needed

export default function Dashboard() {
  return (
    <section className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-purple-400 mb-8 text-center md:text-left">
        Dashboard
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Card
          title="Wallet Balance"
          value="$3,250.20"
          description="Available assets (read-only demo)"
          icon={<FaWallet size={24} className="text-purple-400" />}
          tooltip="Sum of your tokens’ USD values in the connected wallet."
          valueClassName="text-white text-2xl font-extrabold"
        />

        <Card
          title="Oracle Network Health"
          value={<span className="inline-flex items-center space-x-1">
            <span className="text-green-400">●</span>
            <span>Healthy</span>
          </span>}
          description="99.25% node uptime this week"
          icon={<FaNetworkWired size={24} className="text-purple-400" />}
          tooltip="Percentage of oracle nodes up and running reliably."
        />

        <Card
          title="Active Governance Proposals"
          value="2 Proposals"
          description="Click 'Governance' in nav for details"
          icon={<FaGavel size={24} className="text-purple-400" />}
          tooltip="Number of ongoing proposals open for community voting."
        />

        <Card
          title="AI Confidence Score"
          value={
            <span className="text-green-400 font-semibold">
              98.7%
            </span>
          }
          description="Average across 24h oracle feed streams"
          icon={<FaRobot size={24} className="text-purple-400" />}
          tooltip="AI-assessed confidence rating for oracle data accuracy."
        />
      </div>
    </section>
  );
}
