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
    
  //quando alguém clica na caixa
  boxes[i].addEventListener("click", function(){
        
  let el = playerTurn(player1, player2);
  // verifica se já tem algum desenho
  if (this.childNodes.length == 0){
    let cloneEl = el.cloneNode(true);
    this.appendChild(cloneEl);
    if (player1 == player2){
      player1++;
    }else{
      player2++;
    }
    // verificar quem venceu
    setTimeout(
    checkWinCondition(),500);
  
  }



  });
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

function checkWinCondition(){
  let arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  for(let i = 0; i < arr.length; i++){
    let spaceA = boxes[arr[i][0]];
    let spaceB = boxes[arr[i][1]];
    let spaceC = boxes[arr[i][2]];
    
    if (spaceA.hasChildNodes() &&
        spaceB.hasChildNodes() &&
        spaceC.hasChildNodes()){
          if (spaceA.textContent == spaceB.textContent == spaceC.textContent){
            // messageText = `O jogador ${spaceA.getElementByTagName("div").className.toUpperCase()} venceu`;
            console.log("Houve um vencedor")
          }
        }
    
  }
}