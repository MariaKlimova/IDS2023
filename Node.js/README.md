# Node.js

## Оглавление ([конспект](https://www.notion.so/Node-js-afd62c88c9e24a47b25d446e0f6630c8?pvs=4))
- Задачи Node.js
- Зачем придумали Node.js?
- Устройство Node.js
- Движок V8
  - Window
  - global.process
- Библиотека LibUV
  - Event Loop
  - Работа с асинхронным кодом
  - Коллбеки: Error first
  - Промисы
- Многопоточность
  - Что делать, если нужна математика? (или просто большая сложность)
- Место Node.js в Яндексе
- Потоки
  - Виды потоков
  - Web Streams API
- Модульная система
  - require vs import
  - Три типа модулей
    - А что с ESM?
  - Управление модулями - NPM
    - package.json
    - package-lock.json
- Встроенные библиотеки
- Код сервера
- HTTP
  - Запрос
  - Коды состояния HTTP
-  Главная проблема Node.js
-  Node.js фреймворки
-  Express
  - Middleware
  - Отладка Express
- Инструменты разработчика
- Работа с памятью
- Рекомендованная литература


## Гид по примерам с кодом
- [Простой сервер на node.js](1.simpleServer.js)
- [Простой сервер на node.js с использованием модулей](2.simpleServer-ES.js)
- [Простой поток](3.simpleStream.js)
- [Пример на fetch](4.simpleFetch.js)
- [Простейший TCP-сервер](5.TCP-server.js)
- [Еще один простой HTTP-сервер](6.HTTP-server2.js)
- [HTTP-сервер, который возвращает html](7.HTTP-server3.js)
- [Простой пример сервера на express](8.simpleExpress.js)
- [Иллюстрация к работе middleware в Express](9.middlewareIllustration.js)
- [Пример с обработкой ошибок через middleware](10.errorHandling.js)
