let isOn = true;
let tv = document.getElementById("tv");
let vol = document.getElementById('volume');
let currentVol = 50;
let canalAtual = 1

function updateScreen() {
  if (isOn) {
    tv.innerHTML = `<h1>Canal ${canalAtual}</h1><div>Volume: ${currentVol}</div>`;
  } else {
    tv.innerHTML = "<h1>TV Desligada</h1>";
  }
}

function ligar(){
    isOn = !isOn;
    updateScreen();
}

function canal1(){
    if (isOn) {
      canalAtual = 1;
      updateScreen();
    }
}

function canal2() {
  if (isOn) {
    canalAtual = 2;
    updateScreen();
  }
}

function volumeMais(){
    if (isOn) {
      currentVol += 10;
      if (currentVol > 100) {
        currentVol = 0;
      }
      updateScreen();
    }
}

function volumeMenos(){
    if (isOn) {
      currentVol -= 10;
      if (currentVol < 0) {
        currentVol = 0;
      }
      updateScreen();
    }
}

updateScreen();