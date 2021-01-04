let x = document.querySelector(".x");
let o = document.querySelector(".o");
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#button-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let secondPlayer;

// contador de jogadas
let player1 = 0;
let player2 = 0;

// adicionando evento de click aos bloco
for (let i = 0; i < boxes.length; i++) {
    
  //quando alguém clica na caixa
  boxes[i].addEventListener("click", function(){
        
    let el = playerTurn(player1, player2);
    // verifica se já tem algum desenho
    if (this.childNodes.length == 0){
      let cloneEl = el.cloneNode(true);
      this.appendChild(cloneEl);

      //computa a jogada
      if (player1 == player2){
        player1++;
        if (secondPlayer == "ai-player") {
          computerPlay();
          player2++;
        }
      }else{
        player2++;
      }
      // verificar quem venceu
      setTimeout(
      checkWinCondition(),500);
      
    }
  });
  
}

// escolha do modo de jogo
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    secondPlayer = this.getAttribute("id");
    
    for (let j = 0;j < buttons.length; j++) {
      buttons[j].style.display = 'none';
    }

    setTimeout(function(){
      let container = document.querySelector("#container");
      container.classList.remove('hide');
    }, 500)
  });
  
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

function checkWinCondition(){

  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  // horizontal 1
  if (b1.hasChildNodes() && b2.hasChildNodes() && b3.hasChildNodes()) {
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;

    if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x') {
      // x
      declareWinner('x');
    }else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o') {
      // o
      declareWinner('o');
    }
  }
  
  // horizontal 2
  if (b4.hasChildNodes() && b5.hasChildNodes() && b6.hasChildNodes()) {
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;

    if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x') {
      // x
      declareWinner('x');
    }else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o') {
      // o
      declareWinner('o');
    }
  }

  // horizontal 3
  if (b7.hasChildNodes() && b8.hasChildNodes() && b9.hasChildNodes()) {
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x') {
      // x
      declareWinner('x');
    }else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o') {
      // o
      declareWinner('o');
    }
  }

  // vertical 1 
  if (b1.hasChildNodes() && b4.hasChildNodes() && b7.hasChildNodes()) {
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x') {
      // x
      declareWinner('x');
    }else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o') {
      // o
      declareWinner('o');
    }
  }

  // vertical 2 
  if (b2.hasChildNodes() && b5.hasChildNodes() && b8.hasChildNodes()) {
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;

    if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x') {
      // x
      declareWinner('x');
    }else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o') {
      // o
      declareWinner('o');
    }
  }

  // vertical 3 
  if (b3.hasChildNodes() && b6.hasChildNodes() && b9.hasChildNodes()) {
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x') {
      // x
      declareWinner('x');
    }else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o') {
      // o
      declareWinner('o');
    }
  }

  // diagonal 1
  if (b1.hasChildNodes() && b5.hasChildNodes() && b9.hasChildNodes()) {
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;

    if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x') {
      // x
      declareWinner('x');
    }else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o') {
      // o
      declareWinner('o');
    }
  }

  // diagonal 2 
  if (b3.hasChildNodes() && b5.hasChildNodes() && b7.hasChildNodes()) {
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;

    if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x') {
      // x
      declareWinner('x');
    }else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o') {
      // o
      declareWinner('o');
    }
  }

  // deu velha

  let counter = 0;

  for (let i = 0; i < boxes.length; i++) {
    if (boxes[i].childNodes[0] != undefined) {
      counter++;
    }
  }

  if (counter == 9) {
    declareWinner();
  }
}

// limpa o jogo declarar o vencedor e atualizar placar
function declareWinner(winner) {
  let xScoreboard = document.querySelector('#scoreboard-1');
  let oScoreboard = document.querySelector('#scoreboard-2');
  let msg = '';

  if (winner == 'x') {
    xScoreboard.textContent = parseInt(xScoreboard.textContent+1);
    msg = 'O jogador 1 venceu';
  } else if (winner == 'o') {
    oScoreboard.textContent = parseInt(oScoreboard.textContent+1);
    msg = 'O jogador 2 venceu';
  }else{
    msg = 'Deu Velha!';
  }
  messageText.innerHTML = msg;
  // mostra a msg
  messageContainer.classList.remove("hide");
  
  // esconde msg
  setTimeout(function() {
    messageContainer.classList.add("hide");
  }, 3000);
  
  // zera as jogadas
  player1 = 0;
  player2 = 0;

  // remove x e o
  let boxesToRemove = document.querySelectorAll(".box div");

  for (let i = 0; i < boxesToRemove.length; i++) {
    let currentBox = boxesToRemove[i]
    currentBox.parentNode.removeChild(currentBox);
  }
}
// executar a lógica da jogada do do CPU
function computerPlay() {
  let cloneO = o.cloneNode(true);
  counter = 0;
  filled = 0;
  
  for (let i = 0; i < boxes.length; i++) {
    let randomNumber = Math.floor(Math.random() * 5);
    // prencher apenas se estiver vazio
    if (boxes[i].childNodes[0] == undefined) {
      boxes[i].appendChild(cloneO);
      counter++;
      break
      // checagem de quantas estão preenchidas
    }else{
      filled++;
    }

  }

  if (counter == 0 && filled < 9 ) {
    computerPlay();
  }

}