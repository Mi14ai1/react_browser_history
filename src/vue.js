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
        <h1>Vue</h1>
        <b>Vue </b> — это веб-фреймворк для разработки пользовательских
        интерфейсов на языке программирования JavaScript. Vue создан для
        постепенного внедрения в существующее приложение. Он решает различные
        задачи уровня представления (view), упрощает работу с другими
        библиотеками.
      </main>
    </>
  );
}
