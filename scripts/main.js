const navLink = document.querySelectorAll('nav li');
const windows = document.querySelectorAll('.window');
const home = document.querySelector('.home');
const displayWindow = () => {
  windows.forEach((window) => window.classList.remove('active'));
}