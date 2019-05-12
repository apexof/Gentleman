# Gentleman

### `Webpack React Starter`
### `Starter включает:`

Раздельные конфиги webpack для dev и prod 

Автообновление dev конфига webpack если в нем произошли изменения

В dev сборке настроены source-map.

Для prod билда настроена минификация, автопрефиксер, xешированные имена файлов и грамотная замена и удаление ненужных файлов.

Мой личный проверенный временем конфиг eslint на основе airbnb.

Бабель конфиг настроенный для работы с async/await и плагином позволяющим использовать свойства в реакт классах.

Настроенный babel-plugin-react-css-modules.

Небольшой сервер написанный на Node JS, для отдачи статических файлов. Необходим чтобы сымитировать работу реального сервера и отказаться от webpack dev server. Это позволяет всегда иметь физические файлы на диске и видеть сборку, а также не использовать 2 разных порта в разработке.

LiveReload, настроен через Node JS сервер, работает в связке с расширением браузера.

Git и Packag.json настроены для оптимального деплоя на Heroku хостинг.

Webpack и Eslint настроены на глобальные переменные React и PropTypes. Экономит время на написание 2х строчек кода в каждом модуле.
