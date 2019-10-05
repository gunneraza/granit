import "style";

import Modal from "./class/Modal";
import Menu from "./class/Menu";
import SmoothScroll from 'smooth-scroll';

let menu = new Menu();

let winWidth = window.innerWidth;

new SmoothScroll('a[href*="#"]', {
  speed: 600,
  offset: winWidth < 768 ? 60 : 20
});

document.addEventListener("scrollStart", event => {
  menu.hide();
});

if(winWidth > 768) {
  ymaps.ready(initYMap);
}


function initYMap() {
  new ymaps.Map(
    "yandex-map",
    {
      center: [55.76, 37.64], // Москва
      zoom: 10
    },
    {
      searchControlProvider: "yandex#search"
    }
  );
}



let FeedbackModal = new Modal({
  openTriggers: [".js-feedback"], // selector
  closeTriggers: ["button"],

  data: {
    title: "Обратная свзяь",
    body: /*html*/ `
        <div class="form">
          <form action="#">
            <div class="form__group">
              <input type="text" placeholder="Ваше имя">
            </div>

            <div class="form__group">
              <input type="tel" placeholder="Номер телефона">
            </div>

            <div class="form__group">
              <textarea placeholder="Введите текст"></textarea>
            </div>

            <div class="form__group">
              <input type="checkbox"> Отправляя форму, я принимаю правила обработки персональных данных
            </div>

            <div class="form__group">
              <button class="button button_warning">Отправить запрос</button>
            </div>
          </form>
        </div>
    `
  }
});


