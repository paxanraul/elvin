import Image from "next/image";
import { asset } from "@/lib/asset";

export default function About() {
  return (
    <section id="artist" className="relative bg-paper-900 pt-24 pb-12 md:pt-36 md:pb-16">
      {/* section marker */}
      <div className="px-5 md:px-12">
        <p className="reveal flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone-muted">
          <span className="h-px w-8 bg-signal" />
          Об артисте
        </p>
      </div>

      <div className="mt-12 grid grid-cols-12 gap-y-12 px-5 md:mt-16 md:gap-8 md:px-12">
        {/* Portrait — pinned to the left edge, tall */}
        <figure className="clip-reveal col-span-12 md:col-span-5">
          <div className="relative aspect-[3/4] overflow-hidden">
            <Image
              src={asset("/img/portrait-hat.jpg")}
              alt="DJ ELVIN"
              fill
              sizes="(max-width:768px) 100vw, 40vw"
              className="object-cover"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-bone/10" />
            <figcaption className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.24em] text-bone/80">
              DJ ELVIN
            </figcaption>
          </div>
        </figure>

        {/* Text — offset right, oversized opener */}
        <div className="col-span-12 md:col-span-7 md:pl-10">
          <h2 className="reveal display text-4xl text-bone md:text-7xl">
            О DJ ELVIN
          </h2>

          <div className="mt-9 max-w-xl space-y-6 text-base leading-relaxed text-bone-muted md:text-lg">
            <p className="reveal">
              DJ ELVIN — диджей, для которого каждое мероприятие становится
              отдельной музыкальной историей. Свадьбы, торжества, вечер хны
              и частные праздники: он читает зал и собирает на танцполе
              людей разных поколений.
            </p>
            <p className="reveal">
              Чистый звук, точное попадание в настроение и плавные переходы
              между жанрами — от лиричного первого танца до энергии, которая
              держит зал до самого финала.
            </p>
          </div>

          {/* Event types */}
          <div className="reveal mt-10">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-bone-dim">Форматы</p>
            <div className="flex flex-wrap gap-2">
              {["Свадьба", "Вечер хны", "День рождения", "Корпоратив", "Юбилей", "Приват"].map((tag) => (
                <span key={tag} className="border border-signal/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Cities */}
          <div className="reveal mt-8">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.28em] text-bone-dim">Города</p>
            <div className="flex flex-wrap gap-2">
              {["Москва", "Санкт-Петербург", "Саратов", "Тверь", "Другие города"].map((city) => (
                <span key={city} className="border border-signal/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-signal">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
