"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { CONTACTS } from "@/lib/contacts";

type Fields = {
  name: string;
  phone: string;
  date: string;
  time: string;
  city: string;
  type: string;
  details: string;
};

const empty: Fields = {
  name: "",
  phone: "",
  date: "",
  time: "",
  city: "",
  type: "",
  details: "",
};

const eventTypes = [
  "Свадьба",
  "Вечер хны",
  "День рождения",
  "Корпоратив",
  "Юбилей",
  "Другое",
];

export default function Booking() {
  const [values, setValues] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>(
    {}
  );
  const [sent, setSent] = useState(false);

  const set = (k: keyof Fields, v: string) => {
    setValues((s) => ({ ...s, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const e: Partial<Record<keyof Fields, string>> = {};
    if (values.name.trim().length < 2) e.name = "Укажите имя";
    if (!/^[+\d][\d\s()-]{8,}$/.test(values.phone.trim()))
      e.phone = "Проверьте номер телефона";
    if (!values.date) e.date = "Выберите дату";
    if (!values.city.trim()) e.city = "Укажите город";
    if (!values.type) e.type = "Выберите формат";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;

    const msg = [
      "Заявка на выступление — DJ ELVIN",
      `Имя: ${values.name}`,
      `Телефон: ${values.phone}`,
      `Дата: ${values.date}${values.time ? ` в ${values.time}` : ""}`,
      `Город: ${values.city}`,
      `Формат: ${values.type}`,
      values.details ? `Детали: ${values.details}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setSent(true);
    window.open(
      `https://wa.me/${CONTACTS.whatsapp}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section id="reserve" className="relative overflow-hidden bg-paper-900 py-24 md:py-36">
      {/* edge portrait column */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-[34%] opacity-[0.22] lg:block">
        <Image
          src="/img/crouch.jpg"
          alt=""
          fill
          sizes="34vw"
          className="object-cover object-top grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-paper-900 via-paper-900/40 to-transparent" />
      </div>

      <div className="relative px-5 md:px-12">
        <p className="reveal flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-bone-muted">
          <span className="h-px w-8 bg-signal" />
          Бронирование
        </p>

        <div className="mt-12 grid grid-cols-12 gap-y-12 md:mt-16 md:gap-10">
          <div className="col-span-12 md:col-span-4">
            <h2 className="reveal display text-4xl text-bone md:text-5xl">
              Забро&shy;нировать
            </h2>
            <p className="reveal mt-7 max-w-md text-base leading-relaxed text-bone-muted">
              Оставьте детали мероприятия — отвечу лично, обсудим программу,
              тайминг и атмосферу. Количество дат в сезон ограничено.
            </p>
            <p className="reveal mt-8 font-mono text-[10px] uppercase tracking-[0.22em] text-bone-dim">
              ответ обычно в течение дня
            </p>
          </div>

          <div className="col-span-12 md:col-span-8">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex min-h-[320px] flex-col items-start justify-center border border-signal/40 bg-paper-800/60 p-10"
                >
                  <span className="mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-signal text-2xl text-signal">
                    ✓
                  </span>
                  <h3 className="display text-2xl text-bone md:text-3xl">
                    Заявка сформирована
                  </h3>
                  <p className="mt-3 max-w-sm text-bone-muted">
                    Открылся чат WhatsApp с вашими данными — отправьте сообщение,
                    и я свяжусь с вами в ближайшее время. Не открылось?{" "}
                    <a
                      href={`https://t.me/${CONTACTS.telegram}`}
                      target="_blank"
                      className="text-signal underline-offset-4 hover:underline"
                    >
                      Напишите в Telegram
                    </a>
                    .
                  </p>
                  <button
                    onClick={() => {
                      setSent(false);
                      setValues(empty);
                    }}
                    className="mt-7 font-mono text-[11px] uppercase tracking-[0.22em] text-bone-dim transition-colors hover:text-bone"
                  >
                    ← новая заявка
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={onSubmit}
                  noValidate
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2"
                >
                  <Field label="Имя" index="01" error={errors.name}>
                    <input
                      className="field-input w-full py-3 text-bone"
                      value={values.name}
                      onChange={(e) => set("name", e.target.value)}
                      placeholder="Как к вам обращаться"
                    />
                  </Field>

                  <Field label="Телефон" index="02" error={errors.phone}>
                    <input
                      type="tel"
                      className="field-input w-full py-3 text-bone"
                      value={values.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      placeholder="+7 ___ ___ __ __"
                    />
                  </Field>

                  <Field label="Дата мероприятия" index="03" error={errors.date}>
                    <input
                      type="date"
                      className="field-input w-full py-3 text-bone [color-scheme:dark]"
                      value={values.date}
                      onChange={(e) => set("date", e.target.value)}
                    />
                  </Field>

                  <Field label="Время" index="04" error={errors.time}>
                    <input
                      type="time"
                      className="field-input w-full py-3 text-bone [color-scheme:dark]"
                      value={values.time}
                      onChange={(e) => set("time", e.target.value)}
                    />
                  </Field>

                  <Field label="Город" index="05" error={errors.city}>
                    <input
                      className="field-input w-full py-3 text-bone"
                      value={values.city}
                      onChange={(e) => set("city", e.target.value)}
                      placeholder="Москва"
                    />
                  </Field>

                  <Field label="Формат" index="06" error={errors.type}>
                    <select
                      className="field-input w-full py-3 text-bone"
                      value={values.type}
                      onChange={(e) => set("type", e.target.value)}
                    >
                      <option value="" disabled>
                        Выберите формат
                      </option>
                      {eventTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field
                    label="Описание мероприятия"
                    index="07"
                    error={errors.details}
                    className="sm:col-span-2"
                  >
                    <textarea
                      rows={3}
                      className="field-input w-full resize-none py-3 text-bone"
                      value={values.details}
                      onChange={(e) => set("details", e.target.value)}
                      placeholder="Площадка, количество гостей, пожелания по программе"
                    />
                  </Field>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-3 border border-signal bg-signal py-4 font-mono text-[11px] uppercase tracking-[0.28em] text-paper-900 transition-colors duration-500 hover:bg-transparent hover:text-signal sm:w-auto sm:px-16"
                    >
                      отправить заявку
                      <span className="transition-transform duration-500 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  index,
  error,
  children,
  className = "",
}: {
  label: string;
  index: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-bone-dim">
        <span className="text-signal/80">{index}</span>
        {label}
      </span>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1 block font-mono text-[10px] tracking-wide text-signal"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}
