// is nav open? by default false
let nav = false;

// toggle nav
const toggleNav = document.querySelector('.toggleNav');
const navMain = document.querySelector('.nav-main');
const navMainExit = document.querySelector('.nav-main-exit');
toggleNav.addEventListener('click', () => {
    navMain.classList.toggle('show-nav-main');
    toggleNav.classList.toggle('hide-toggleNav');
    nav = true;
});
navMainExit.addEventListener('click', () => {
    navMain.classList.toggle('show-nav-main');
    toggleNav.classList.toggle('hide-toggleNav');
    nav = false;
});

// resize buttons & display
const toggleSize = document.querySelector('.toggleSize');
const body = document.querySelector('#body');

function fullScreen() {
  document.body.classList.toggle('hide-overflow');
  window.scrollTo(0, 0);
  body.classList.toggle('body2');
  toggleSize.classList.toggle('toggleSize2');
  if (nav == true) {
    navMain.classList.toggle('show-nav-main');
    toggleNav.classList.toggle('hide-toggleNav');
    nav = false;
  }
}

toggleSize.addEventListener('click', fullScreen);

// html, css, js buttons and divs
const html_btn = document.querySelector('.html-btn');
const css_btn = document.querySelector('.css-btn');
const js_btn = document.querySelector('.js-btn');
const d1_1_html = document.querySelector('.d1-1-html');
const d1_1_css = document.querySelector('.d1-1-css');
const d1_1_js = document.querySelector('.d1-1-js');

html_btn.addEventListener('click', () => {
  // change color of button//
  html_btn.style.setProperty("background-color", "#6bcc75");
  css_btn.style.setProperty("background-color", "#ccc");
  js_btn.style.setProperty("background-color", "#ccc");
  // change divs //
  d1_1_html.classList.remove('notVisable');
  d1_1_css.classList.add('notVisable');
  d1_1_js.classList.add('notVisable');
});

css_btn.addEventListener('click', () => {
  // change color of button//
  html_btn.style.setProperty("background-color", "#ccc");
  css_btn.style.setProperty("background-color", "#6bcc75");
  js_btn.style.setProperty("background-color", "#ccc");
  // change divs //
  d1_1_html.classList.add('notVisable');
  d1_1_css.classList.remove('notVisable');
  d1_1_js.classList.add('notVisable');
});

js_btn.addEventListener('click', () => {
  // change color of button//
  html_btn.style.setProperty("background-color", "#ccc");
  css_btn.style.setProperty("background-color", "#ccc");
  js_btn.style.setProperty("background-color", "#6bcc75");
  // change divs //
  d1_1_html.classList.add('notVisable');
  d1_1_css.classList.add('notVisable');
  d1_1_js.classList.remove('notVisable');
});
