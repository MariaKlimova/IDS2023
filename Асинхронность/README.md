# Асинхронность

## Оглавление ([конспект](https://www.notion.so/db67548d803a415e8d314722c2a03186?pvs=4))


- Event loop
  - Стек вызовов
  - Обновление интерфейса (этапы)
  - Задачи, тики и Web API
    - Определения
    - Синхронные методы
    - Асинхронные методы
  - Время на выполнение задачи
  - Очередь микрозадач
  - requestAnimationFrame
  - requestIdleCallback
  - Сравнение очередей
  - Взаимодействие с очередями
  - Цикл событий в Node.js
- Callback
- Promises
  - Хитрости Promise
    - Цепочки из Promise
    - Обработка ошибок
    - Thenable объекты
    - Как Promise.resolve обработает Promise?
    - Как Promise.reject обработает Promise?
  - Статические методы Promise
  - Как быть, когда Promise завис?
  - Промисификация
- Корутины
- Async/await
  - Top level await
    - Как работает?
  - Не все await одинаково полезны
  - Обработка ошибок
  - Async функции и массивы
    - forEach + async/await
    - map + async/await
    - filter + async/await
    - reduce + async/await
  - Callback vs Promises vs async/await
  - Race Condition
  - Рекомендованная литература
