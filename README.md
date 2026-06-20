# DJ ELVIN — лендинг

Премиальный одностраничный сайт-пресскит для DJ ELVIN.
Next.js 15 · Tailwind CSS · GSAP + ScrollTrigger · Lenis (smooth scroll) · Framer Motion.

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000 (или 3001, если порт занят)
npm run build    # продакшн-сборка
npm start        # запуск собранной версии
```

## Структура

- `app/` — layout (шрифты, метаданные), страница, глобальные стили и дизайн-токены
- `components/` — секции: `Hero`, `Marquee`, `About`, `Showcase`, `Booking`, `FinalCta`, `Contacts`, `Footer`, плюс `Nav`, `SmoothScroll`, `Parallax`
- `lib/contacts.ts` — контакты артиста
- `public/img/` — отобранные фото и логотип
- `assets/` — исходные материалы

## ⚠️ Что нужно заполнить перед публикацией

Откройте **`lib/contacts.ts`** и замените плейсхолдеры на реальные данные:

| Поле | Сейчас | Заменить на |
|------|--------|-------------|
| `instagram` | `elvin_seidov` | ✅ уже реальный |
| `telegram` | `elvin_seidov` | настоящий @username в Telegram |
| `whatsapp` | `70000000000` | номер в межд. формате без `+` и пробелов |
| `phoneDisplay` | `+7 (000) 000-00-00` | телефон для показа |
| `phoneHref` | `+70000000000` | телефон для ссылки `tel:` |

Форма бронирования собирает заявку и открывает чат **WhatsApp** с заполненным
текстом (плюс ссылка на Telegram как запасной канал). Когда появится бэкенд или
сервис вроде Formspree — логику отправки можно поменять в `components/Booking.tsx`.

## Дизайн

Палитра и визуальный язык построены на основе реальной фотосессии:
глубокий угольно-чёрный фон, тёплый off-white (#ECE7DD) для текста и один
сдержанный золото-шампань акцент (#C9A86A). Типографика — Manrope (дисплей/UI)
+ Cormorant Italic (акцентные фразы). Mobile-first, плавные reveal-анимации,
лёгкий параллакс, уважение к `prefers-reduced-motion`.
# elvin
