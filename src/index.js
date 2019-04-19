import './main.scss';

let root = document.documentElement;

window.onload = () => {
  root.style.setProperty('--font', window.localStorage.getItem('--font'));
  root.style.setProperty('--bg', window.localStorage.getItem('--bg'));
  if(window.localStorage.getItem('--bg') != 'white') {
    document.getElementById('checkbox').checked = true;
  }
};

root.addEventListener('click', e => {
  if(!document.getElementById('checkbox').checked) {
    root.style.setProperty('--font', 'black');
    root.style.setProperty('--bg', 'white');
    window.localStorage.setItem('--font', 'black');
    window.localStorage.setItem('--bg', 'white');
  }
  else {
    root.style.setProperty('--font', 'white');
    root.style.setProperty('--bg', '#181a1b');
    window.localStorage.setItem('--font', 'white');
    window.localStorage.setItem('--bg', '#181a1b');
  }
});