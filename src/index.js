import './main.scss';

let root = document.documentElement;
let flipState = false

window.onload = () => {

  // TODO
  //Set styles from storage
  // Change switch to dark more if dark

  document.getElementById('checkbox').addEventListener('click', e => {
    flipState = flipSwitch(flipState)
  });

  // Importing styles
  document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https:\/\/use.fontawesome.com\/releases\/v5.8.1\/css\/all.css\" >");
  document.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend", "<link rel=\"stylesheet\" href=\"https:\/\/fonts.googleapis.com\/css?family=Nunito+Sans\|Lato\" >");
};

const flipSwitch = (flipState) => {
  console.log(flipState)
  if(flipState) { // If it is already black
    flipState = !flipState; // Make it white
    document.getElementById('checkbox').checked = false; // Undo checkbox
    document.getElementById('dark-realm').innerHTML = 'Flip me to enter the dark realm (▀̿Ĺ̯▀̿ ̿)'; // Add dark text
    root.style.setProperty('--font', 'black'); // Write up would be black
    root.style.setProperty('--bg', 'white'); // Background would be white
  }
  else { // If it is white
    flipState = !flipState; // Make it black
    document.getElementById('checkbox').checked = true; // Do checkbox
    document.getElementById('dark-realm').innerHTML = 'Return to light! ¯\\_(ツ)_/¯'; // Add white text
    root.style.setProperty('--font', 'white'); // Write up to be white
    root.style.setProperty('--bg', 'black'); //  Background to be black
  }
  return flipState
}