import React from "react";

export default function Main({ onTransfer }) {
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

      <h1>Популярные фронтенд инструменты:</h1>
      <ul>
        <li>
          <a href="/about.html" onClick={onTransfer}>
            Что такое front-end
          </a>
        </li>
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
            {" "}
            Angular{" "}
          </a>
        </li>
      </ul>
    </>
  );
}
