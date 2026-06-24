# Техдолг и бэклог

Приоритетный список улучшений для «продакшен-уровня» викторины.

## Высокий приоритет

- **API для вопросов**: вынести банки с клиентского бандла; загрузка с REST/GraphQL или headless CMS — контент без релиза фронта, модерация, меньший initial JS.

## Тесты

- **E2E-тесты**: Playwright или Cypress на сценарии: интро → ответ → победа/поражение, подсказки, мобильная ширина.
- **Расширить unit-покрытие**: `useQuizGame` (в т.ч. `restartGame`), `useHints`, `useModalFriendCall`, `WinRating`, `ModalHintHall` (мок `audioModel`, `vi.useFakeTimers()` где нужно).

## Хранение

- **Хранение текущей сессии игры**: Хранение текущей сессии игры в Local Storage

## Операции

- **CI**: GitHub Actions на push/PR — см. `.github/workflows/ci.yml`.

## Сделано недавно

- Повторная игра **без `window.location.reload`**: `restartGame` в `useQuizGame`, проп `onPlayAgain` у `ModalWin` / `ModalLose`, сброс модалок, вопроса, подсказок; `key={playSessionId}` для сброса локального UI подсказок (50:50, классы на кнопках).

## Раздробить useQuizGame на более мелкие хуки
