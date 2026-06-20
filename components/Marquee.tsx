const tracks = [
  "Свадьбы",
  "Торжества",
  "Вечер хны",
  "Дни рождения",
  "Корпоративы",
  "Частные события",
];

/** Setlist ticker — the night's rotation, numbered like a tracklist. */
export default function Marquee() {
  const row = [...tracks, ...tracks];
  return (
    <div className="relative overflow-hidden border-y border-bone/10 py-5 md:py-7">
      <div className="ticker-track flex w-max items-center whitespace-nowrap">
        {row.map((t, i) => (
          <span key={i} className="flex items-center">
            <span className="ml-10 font-mono text-[11px] text-signal md:ml-16">
              {String((i % tracks.length) + 1).padStart(2, "0")}
            </span>
            <span className="display ml-4 text-2xl uppercase text-bone/80 md:text-4xl">
              {t}
            </span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-paper-900 to-transparent md:w-40" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-paper-900 to-transparent md:w-40" />
    </div>
  );
}
