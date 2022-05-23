import React, { useState, useEffect } from "react";

import Main from "./main";
import About from "./about";
import Angular from "./angular";
import ReactPage from "./react";
import Vue from "./vue";

export default function App() {
  const [url, setUrl] = useState("/");

  const handleClickLink = (evt) => {
    evt.preventDefault();
    const href = evt.target.getAttribute("href");
    history.pushState({ url: href }, "", href);
    setUrl(href);
  };

  useEffect(() => {
    window.onpopstate = (event) => {
      setUrl(event.state.url);
    };
    return () => (window.onpopstate = null);
  }, []);
  let page = null;

  switch (url) {
    case "/":
      page = <Main onTransfer={handleClickLink} />;
      break;
    case "/about.html":
      page = <About onTransfer={handleClickLink} />;
      break;
    case "/tool/angular.html":
      page = <Angular onTransfer={handleClickLink} />;
      break;
    case "/tool/react.html":
      page = <ReactPage onTransfer={handleClickLink} />;
      break;
    case "/tool/vue.html":
      page = <Vue onTransfer={handleClickLink} />;
      break;
    default:
      page = <Main onTransfer={handleClickLink} />;
      break;
  }

  return page;
}
