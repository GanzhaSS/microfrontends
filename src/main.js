import { registerApplication, start } from "single-spa";
import { createStore } from "./store/index.js";

// чтобы наш стор был виден во всех приложениях -> заносим его в объект виндоу
window.store = createStore();

// Функция позволяет зарегистрировать новое приложение:
registerApplication(
  "vue", // имя
  () => import("./vue/vue.app.js"), // Главный файл для работы с вью
  // третий параметр  - говорит на какой роут надо запускать это приложение (вью), в нашем случае это один роутер на оба приложения
  () => location.pathname.startsWith("/")
);

registerApplication(
  "react",
  () => import("./react/react.app.js"),
  () => location.pathname.startsWith("/")
);

// registerApplication(
//   "app1",
//   () => import("./app1/app1-lifecycle.ts"),
//   () => location.pathname.startsWith("/")
// );

start();
