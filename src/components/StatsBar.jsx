import {
  FaCarSide,
  FaMotorcycle,
  FaFileAlt,
  FaRegClipboard,
} from 'react-icons/fa';

const offerings = [
  { icon: <FaCarSide aria-hidden="true" />, label: 'Car training' },
  { icon: <FaMotorcycle aria-hidden="true" />, label: 'Two-wheeler training' },
  { icon: <FaFileAlt aria-hidden="true" />, label: 'Licence guidance' },
  { icon: <FaRegClipboard aria-hidden="true" />, label: 'Theory mock test' },
];

function StatsBar() {
  return (
    <section className="border-b border-slate-200 bg-white" aria-label="Training options">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 px-4 sm:px-6 md:grid-cols-4 md:divide-y-0 lg:px-8">
        {offerings.map(({ icon, label }) => (
          <div key={label} className="flex min-h-20 items-center justify-center gap-3 px-3 py-4 text-sm font-semibold text-slate-700">
            <span className="shrink-0 text-lg text-blue-800">{icon}</span>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default StatsBar;
