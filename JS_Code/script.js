function GetCard() {
  document.getElementById("card_s").style.display = "block";
  document.getElementById(
    "Spbtn"
  ).innerHTML = `<button id="btnso" onclick="RmCard();"> <i class=" ico fas fa-caret-square-up"></i> </button>`;
}
function RmCard() {
  document.getElementById("card_s").style.display = "none";
  document.getElementById(
    "Spbtn"
  ).innerHTML = `<button id="btnso" onclick="GetCard();"> <i class="ico fas fa-caret-square-down"></i> </button>`;
}



//===================================================================

const btnD = document.querySelector(".Dark-On");
const el = document.querySelector("html body ");
console.log(el);
const h2_t = document.querySelectorAll(".con .tit");
let dark = false;

function BtnTextchinger(event) {
  if (dark) {
    dark = false;
    btnD.textContent = "Dark";
  } else {
    dark = true;
    btnD.textContent = "Light";
  }
}
const DrFun = function () {
  el.classList.toggle("bg-dark");

  for (let i = 0; i < h2_t.length; i++) {
    h2_t[i].classList.toggle("fnt-h2-color");
    h2_t[i].classList.toggle("tit");
  }
};

btnD.addEventListener("click", DrFun);
btnD.addEventListener("click", BtnTextchinger);

//============================

const AutoDark = function () {
  const d = new Date();
  console.log(d);
  
  if (d.getSeconds() > 15 && d.getSeconds() < 45) {
    if (dark === false) {
      DrFun();
      BtnTextchinger();
    }
  } else {
    if (dark === true) {
      DrFun();
      BtnTextchinger();
    }
  }
};
//AutoDark();

//setInterval(AutoDark, 1000);
//console.log(d.getSeconds());





//setInterval(AutoHt(), 1000);
/*
let manualThme;
const toggelManuale = function () {
  manualThme = !manualThme;
  localStorage.setItem("manualThme", manualThme);
  console.log(manualThme);
};
*/
