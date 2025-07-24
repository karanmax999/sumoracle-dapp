'use client';

import { useEffect } from 'react';

export default function Notification({ message, type = 'info', onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const colors = {
    success: 'bg-green-600',
    error: 'bg-red-600',
    warning: 'bg-yellow-600',
    info: 'bg-blue-600',
  };

  return (
    <div
      className={`fixed bottom-5 right-5 max-w-xs p-4 rounded shadow-lg ${colors[type]} text-white z-50`}
      role="alert"
    >
      {message}
    </div>
  );
}
