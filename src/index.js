import './main.scss';

let root = document.documentElement;

window.onload = () => {
  root.style.setProperty('--font', window.localStorage.getItem('--font'));
  root.style.setProperty('--bg', window.localStorage.getItem('--bg'));
  if(window.localStorage.getItem('--bg') != 'white') {
    document.getElementById('checkbox').checked = true;
    document.getElementById('dark-realm').innerHTML = 'Return to light! ¯\\_(ツ)_/¯';
  }
  document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https:\/\/use.fontawesome.com\/releases\/v5.8.1\/css\/all.css\" >");
  document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https:\/\/fonts.googleapis.com\/css?family=Nunito+Sans\|Lato\" >");
};

root.addEventListener('click', e => {
  if(!document.getElementById('checkbox').checked) {
    root.style.setProperty('--font', 'black');
    root.style.setProperty('--bg', 'white');
    window.localStorage.setItem('--font', 'black');
    window.localStorage.setItem('--bg', 'white');
    document.getElementById('dark-realm').innerHTML = 'Flip me to enter the dark realm (▀̿Ĺ̯▀̿ ̿)';
  }
  else {
    root.style.setProperty('--font', 'white');
    root.style.setProperty('--bg', '#181a1b');
    window.localStorage.setItem('--font', 'white');
    window.localStorage.setItem('--bg', '#181a1b');
    document.getElementById('dark-realm').innerHTML = 'Return to light! ¯\\_(ツ)_/¯';
  }
});