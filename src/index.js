import './main.scss';

const root = document.documentElement;

window.onload = () => {
  if(window.localStorage.getItem('--bg') != 'white') {
    document.getElementById('checkbox').checked = true;
    let modal = document.getElementsByClassName('welcome-modal')[0];
    console.log(modal)
    modal.remove();
  }
  root.addEventListener('click', e => {
    if(!document.getElementById('checkbox').checked) {
      root.style.setProperty('--font', 'black');
      root.style.setProperty('--bg', 'white');
      window.localStorage.setItem('--font', 'black');
      window.localStorage.setItem('--bg', 'white');
      let modal = document.getElementsByClassName('welcome-modal')[0];
      modal.remove();
    }
    else {
      root.style.setProperty('--font', 'white');
      root.style.setProperty('--bg', '#181a1b');
      window.localStorage.setItem('--font', 'white');
      window.localStorage.setItem('--bg', '#181a1b');
      
    }
  });
  document.getElementById('closer').addEventListener('click', e => {
    let modal = document.getElementsByClassName('welcome-modal')[0];
    modal.style.display = 'none';
    modal.remove();
    window.scrollTo(0, 0);
  });
  root.style.setProperty('--font', window.localStorage.getItem('--font'));
  root.style.setProperty('--bg', window.localStorage.getItem('--bg'));
  document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https:\/\/use.fontawesome.com\/releases\/v5.8.1\/css\/all.css\" >");
  document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https:\/\/fonts.googleapis.com\/css?family=Nunito+Sans\|Lato\" >");
  window.scrollTo(0, 0);
};
root.addEventListener('scroll', e => {if(window.localStorage.getItem('--bg') != 'white')document.getElementById('checkbox').checked = true;});