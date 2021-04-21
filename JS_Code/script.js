function GetCard(){
    document.getElementById("card_s").style.display="block";
    document.getElementById("Spbtn").innerHTML=`<button id="btnso" onclick="RmCard();"> <i class=" ico fas fa-caret-square-up"></i> </button>`
}
function RmCard(){
    document.getElementById("card_s").style.display="none";
    document.getElementById("Spbtn").innerHTML=`<button id="btnso" onclick="GetCard();"> <i class="ico fas fa-caret-square-down"></i> </button>`;
}



















