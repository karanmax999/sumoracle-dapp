// components/Card.js
import { useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip'; // install `react-tooltip` or use any other lib
import 'react-tooltip/dist/react-tooltip.css';

export default function Card({
  title,
  value,
  description,
  icon,
  tooltip,
  valueClassName = '',
}) {
  const [id] = useState(() => `tooltip-${Math.random().toString(36).slice(2)}`);

  return (
    <section
      className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col space-y-3 hover:shadow-lg transition relative"
      aria-labelledby={id}
      tabIndex={0}
    >
      <div className="flex items-center space-x-3">
        <div className="text-purple-400">{icon}</div>
        <h2 id={id} className="text-lg font-semibold text-white cursor-help" data-tooltip-id={id} data-tooltip-content={tooltip}>
          {title}
        </h2>
      </div>

      <div className={`text-white ${valueClassName}`}>{value}</div>

      <p className="text-gray-400 text-sm">{description}</p>

      {tooltip && <ReactTooltip id={id} place="top" effect="solid" />}
    </section>
  );
}
