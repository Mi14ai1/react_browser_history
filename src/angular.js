import React from "react";

export default function Vue({ onTransfer }) {
  return (
    <>
      <header>
        Front-end
        <nav>
          <a href="/" style={{ padding: 20 }} onClick={onTransfer}>
            Главная
          </a>
          <a href="/about.html" style={{ padding: 20 }} onClick={onTransfer}>
            Что такое front-end
          </a>
          <a
            href="/tool/react.html"
            style={{ padding: 20 }}
            onClick={onTransfer}
          >
            React
          </a>
          <a href="/tool/vue.html" style={{ padding: 20 }} onClick={onTransfer}>
            Vue
          </a>
          <a
            href="/tool/angular.html"
            style={{ padding: 20 }}
            onClick={onTransfer}
          >
            Angular
          </a>
        </nav>
      </header>
      <main>
        <h1>Angular</h1>
        <b>Angular </b> — JavaScript-фреймворк с открытым исходным кодом.
        Предназначен для разработки одностраничных приложений. Его цель —
        расширение браузерных приложений на основе MVC-шаблона, а также
        упрощение тестирования и разработки.
      </main>
    </>
  );
}
