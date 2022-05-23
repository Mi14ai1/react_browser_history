import React from "react";

export default function ReactPage({ onTransfer }) {
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
        <h1>React</h1>
        <b>React </b> — это декларативная и гибкая библиотека JavaScript для
        создания пользовательских интерфейсов (UI). Она позволяет вам создавать
        сложные UI из небольших и изолированных частей кода, называемых
        «компонентами».
      </main>
    </>
  );
}
