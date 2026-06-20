import { CONTACTS } from "@/lib/contacts";

const items = [
  {
    label: "Instagram",
    value: `@${CONTACTS.instagram}`,
    href: `https://instagram.com/${CONTACTS.instagram}`,
  },
  {
    label: "Telegram",
    value: `@${CONTACTS.telegram}`,
    href: `https://t.me/${CONTACTS.telegram}`,
  },
  {
    label: "WhatsApp",
    value: "Написать в чат",
    href: `https://wa.me/${CONTACTS.whatsapp}`,
  },
  {
    label: "Телефон",
    value: CONTACTS.phoneDisplay,
    href: `tel:${CONTACTS.phoneHref}`,
  },
];

export default function Contacts() {
  return (
    <section id="contacts" className="relative bg-paper-900 py-24 md:py-36">
      <div className="px-5 md:px-12">
        <p className="reveal flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone-muted">
          <span className="h-px w-8 bg-signal" />
          Контакты
        </p>

        <h2 className="reveal display mt-10 max-w-5xl text-5xl leading-[0.9] text-bone md:text-[8.5rem]">
          Сыграем
          <br />
          ваш праздник?
        </h2>

        {/* direct lines — list, not a card grid */}
        <div className="mt-16 border-t border-bone/12">
          {items.map((it, i) => (
            <a
              key={it.label}
              href={it.href}
              target="_blank"
              rel="noopener noreferrer"
              className="reveal group flex items-baseline justify-between gap-6 border-b border-bone/12 py-6 transition-colors duration-500 hover:text-signal"
              data-stagger
            >
              <span className="flex items-baseline gap-5">
                <span className="font-mono text-[11px] text-bone-dim">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-bone-muted">
                  {it.label}
                </span>
              </span>
              <span className="display text-2xl text-bone transition-colors duration-500 group-hover:text-signal md:text-4xl">
                {it.value}
                <span className="ml-3 inline-block text-bone-dim transition-transform duration-500 group-hover:translate-x-1 group-hover:text-signal">
                  ↗
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
