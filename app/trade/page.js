'use client';

import { useState } from 'react';
import Notification from '../../components/Notification';
import { FaExchangeAlt } from 'react-icons/fa';

const tokens = [
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'CORE', name: 'Core' },
  { symbol: 'USDC', name: 'USD Coin' },
  { symbol: 'BTC', name: 'Bitcoin' },
];

export default function TradePage() {
  const [fromToken, setFromToken] = useState('ETH');
  const [toToken, setToToken] = useState('CORE');
  const [amount, setAmount] = useState('');
  const [slippage, setSlippage] = useState(0.5);
  const [notification, setNotification] = useState(null);

  const confidence = 98.6; // Mock AI oracle confidence (%)

  const handleSwap = () => {
    if (!amount || Number(amount) <= 0) {
      setNotification({ message: 'Please enter a valid amount to swap.', type: 'error' });
      return;
    }
    if (fromToken === toToken) {
      setNotification({ message: 'Select different tokens to swap.', type: 'error' });
      return;
    }
    // Here would be your swap logic/integration
    setNotification({
      message: `Swap request submitted! AI oracle confirmed price with ${confidence}% confidence.`,
      type: 'success',
    });
  };

  return (
    <>
      <div className="max-w-xl mx-auto rounded-lg bg-gray-800 p-6 shadow-md space-y-6">
        <h1 className="text-2xl font-semibold text-purple-400 mb-4">Token Swap</h1>

        {/* From Token Selector */}
        <label className="block text-gray-300 mb-1" htmlFor="from-token">
          From:
        </label>
        <select
          id="from-token"
          value={fromToken}
          onChange={(e) => setFromToken(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-purple-400"
        >
          {tokens.map(({ symbol, name }) => (
            <option key={symbol} value={symbol}>
              {symbol} - {name}
            </option>
          ))}
        </select>

        {/* To Token Selector */}
        <label className="block text-gray-300 mb-1 mt-4" htmlFor="to-token">
          To:
        </label>
        <select
          id="to-token"
          value={toToken}
          onChange={(e) => setToToken(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white focus:outline-purple-400"
        >
          {tokens.map(({ symbol, name }) => (
            <option key={symbol} value={symbol}>
              {symbol} - {name}
            </option>
          ))}
        </select>

        {/* Amount Input */}
        <label className="block text-gray-300 mb-1 mt-4" htmlFor="amount">
          Amount:
        </label>
        <input
          id="amount"
          type="number"
          min="0"
          step="any"
          placeholder="0.0"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-purple-400"
          aria-describedby="amount-desc"
        />
        <p id="amount-desc" className="text-gray-500 text-xs italic mt-1">
          Enter the amount of tokens to swap.
        </p>

        {/* Oracle Price and Confidence */}
        <div className="text-gray-300 text-sm mt-2">
          Oracle-verified price with AI confidence:{' '}
          <span
            className={`font-semibold ${
              confidence > 90
                ? 'text-green-400'
                : confidence > 70
                ? 'text-yellow-400'
                : 'text-red-500'
            }`}
          >
            {confidence}%
          </span>
        </div>

        {/* Slippage Tolerance Slider */}
        <label htmlFor="slippage" className="block text-gray-300 mt-6 mb-1">
          Slippage Tolerance: {slippage}%
        </label>
        <input
          id="slippage"
          type="range"
          min="0"
          max="5"
          step="0.1"
          value={slippage}
          onChange={(e) => setSlippage(parseFloat(e.target.value))}
          className="w-full accent-purple-600 cursor-pointer"
          aria-valuemin={0}
          aria-valuemax={5}
          aria-valuenow={slippage}
          aria-label="Slippage Tolerance slider"
        />
        <p className="text-gray-500 text-xs italic">
          Suggested based on price feed confidence.
        </p>

        {/* Swap Button */}
        <button
          className="w-full bg-purple-600 hover:bg-purple-700 p-3 rounded mt-4 flex items-center justify-center space-x-2 text-white font-semibold transition focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-1"
          onClick={handleSwap}
          aria-live="polite"
        >
          <FaExchangeAlt size={20} />
          <span>Swap Now</span>
        </button>
      </div>

      {/* Notification Toast */}
      {notification && (
        <Notification
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </>
  );
}
