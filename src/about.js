import React from "react";

export default function About({ onTransfer }) {
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
        <h1>Front-end</h1>
        <b>Фронтенд (англ. front-end)</b> — клиентская сторона пользовательского
        интерфейса. При разработке интерфейса популярны следующие библиотеки и
        ферймворки:
        <ul>
          <li>
            <a href="/tool/react.html" onClick={onTransfer}>
              React
            </a>
          </li>
          <li>
            <a href="/tool/vue.html" onClick={onTransfer}>
              Vue
            </a>
          </li>
          <li>
            <a href="/tool/angular.html" onClick={onTransfer}>
              Angular
            </a>
          </li>
        </ul>
      </main>
    </>
  );
}
