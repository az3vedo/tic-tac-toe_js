let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#buttons-container button");
let messageContainer = document.querySelectorAll("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando evento de click aos bloco
for (let i = 0; i < boxes.length; i++) {
    
  //quano alguém clica na caixa
  boxes[i].addEventListener("click", function(){
        
  let el = playe rTurn(player1, player2);
  // verifica se já tem algum desenho
  if (this.childNodes.length == 0){
    let cloneEl = el.cloneNode(true);
    this.appendChild(cloneEl);
    if (player1 == player2){
      player1++;
    }else{
      player2++;
    }
  }
  })
  // computar jogada
  
}

function playerTurn(player1, player2){
  if(player1 == player2){
    let el;
    // x
    return x;
  }else{
    // o
    return o;
  }
}