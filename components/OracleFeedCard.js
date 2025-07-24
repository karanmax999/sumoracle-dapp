// components/OracleFeedCard.js
import { useState } from 'react';

export default function OracleFeedCard({ feed }) {
  const { name, type, confidence, anomaly, lastUpdate } = feed;

  // Color code confidence: green (>90), yellow (70-90), red (<70)
  let confidenceColor =
    confidence > 90 ? 'text-green-400' :
    confidence > 70 ? 'text-yellow-400' : 'text-red-500';

  return (
    <article
      tabIndex={0}
      className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-purple-600/50 transition focus:outline-none focus:ring-2 focus:ring-purple-500 cursor-pointer"
      aria-label={`${name} - ${type} with confidence ${confidence}%`}
      role="region"
    >
      <header className="flex items-center justify-between mb-3">
        <h2 className="text-xl font-semibold text-purple-300">{name}</h2>
        {anomaly && (
          <span className="text-red-500 font-bold bg-red-900 bg-opacity-50 rounded px-2 py-0.5 text-xs uppercase tracking-wide">
            Anomaly
          </span>
        )}
      </header>

      <div className="mb-2 text-gray-400 text-sm">Type: {type}</div>

      <div className="flex items-center space-x-2 mb-3">
        <span className={`font-bold text-lg ${confidenceColor}`}>
          Confidence: {confidence.toFixed(1)}%
        </span>
        <div
          className={`w-16 h-2 rounded-full bg-gray-700 overflow-hidden`}
          aria-hidden="true"
          title={`Confidence level: ${confidence.toFixed(1)}%`}
        >
          <div
            className={`${confidenceColor} h-2 rounded-full`}
            style={{ width: `${confidence}%` }}
          />
        </div>
      </div>

      <footer className="text-gray-500 text-xs italic">Last update: {lastUpdate}</footer>
    </article>
  );
}
