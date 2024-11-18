// главный файл реакт-приложения
import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react"; // спец пакет для реакта, с его помощью инициализируем приложение
import App from "./App";

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App, // корневой компонент
  domElementGetter: () => document.getElementById("react"), // указывает куда необходимо маунтить реакт
  suppressComponentDidCatchWarning: true,
});
// получаем объект reactLifecycles - он знает как запустить, замаунтить и анмаунтить
// импортируем, чтобы single-spa работал :
export const bootstrap = [reactLifecycles.bootstrap];

export const mount = [reactLifecycles.mount];

export const unmount = [reactLifecycles.unmount];
