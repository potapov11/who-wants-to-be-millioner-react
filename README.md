# Кто хочет стать миллионером — викторина на React

**Демо:** [who-wants-to-be-millioner-react.vercel.app](https://who-wants-to-be-millioner-react.vercel.app/)

[![Скриншот](https://i.postimg.cc/fR6YkGvv/Screenshot-2.png)](https://postimg.cc/VJWJVHpS)

Викторина в духе «Кто хочет стать миллионером»: два типа вопросов (лёгкие → сложные), подсказки (50:50, зал, звонок другу), звук, адаптивная вёрстка. **Новая партия** после победы или поражения запускается **без перезагрузки страницы** — сброс состояния в `useQuizGame` и перемонтирование игрового блока по `playSessionId`.

---



| Раздел | Содержание |
|--------|------------|
| **Стек** | React 18, TypeScript (strict), Vite 5, SCSS (модули + общие variables/mixins), алиасы (`@`, `@assets`, …) |
| **Архитектура** | Компоненты по фичам, кастомные хуки (`useQuizGame`, `useHints`, `useModalFriendCall`, …), `React.Context` для среза игры (`Card`, `WinRating`, интро) |
| **Качество** | `npm run ci` (= `typecheck` → Vitest → `build`), либо по отдельности |
| **CI** | GitHub Actions: `npm ci` → `npm run ci` (см. `.github/workflows/ci.yml`) |

---

## Возможности

- Интро и флаг в `sessionStorage`
- Типы вопросов на TypeScript, перемешивание копии при загрузке модуля (`shuffleCopy`, исходный массив не мутируется)
- Экраны победы / поражения; хелперы зала подсказки покрыты unit-тестами
- Централизованный `audioModel` для эффектов и музыки

---

## Скрипты

```bash
npm install      # зависимости
npm run dev      # dev-сервер Vite
npm run build    # продакшен-сборка в dist/
npm run preview
npm run typecheck
npm run test       # Vitest в watch-режиме
npm run test:run   # один прогон тестов (как в CI)
npm run ci         # typecheck + test:run + build (удобно перед пушем)
```

---

## Структура (кратко)

```
src/
  App.tsx                 # провайдер контекста и разметка
  hooks/                  # useQuizGame, useMobileViewport
  components/             # UI и рядом лежащие хуки
  context/GlobalContext.tsx
  model/audioModel.ts
  utils/shuffleCopy.ts
  assets/                 # медиа (алиас @assets)
```

Бэклог и идеи развития: [`todo.md`](./todo.md).

---

## Локальный запуск

1. Node.js **18+** (в CI используется 20).
2. `npm install`
3. `npm run dev` — открыть URL из консоли.

После смены зависимостей закоммитьте актуальный **`package-lock.json`**, иначе `npm ci` в CI может упасть.

---

## Лицензии и права

Формат шоу и брендинг могут принадлежать правообладателям. Репозиторий позиционируется как **портфолио-пример**; коммерческое использование — только с учётом прав третьих лиц.
