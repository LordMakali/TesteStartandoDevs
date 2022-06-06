const players = {
    1: 'x',
    2: 'o',
};
const emptyString = ' ';
const boardData = Array(9).fill(emptyString);
let currentPlayer = players[1];
let theEnd = false

// MONTA O TABULEIRO
function drawBoard(positions) {
    console.log(`
         ${positions[0]} | ${positions[1]} | ${positions[2]}
        -----------
         ${positions[3]} | ${positions[4]} | ${positions[5]}
        -----------
         ${positions[6]} | ${positions[7]} | ${positions[8]}`
    );
}

// TESTE DE SOBREPOSIÇÃO
function isEmpty(position) { 
    return boardData[position] === emptyString; // aqui ele vai me dar o 8 ou 9 para saber se há ou não sobreposição.
}

// ALTERNANCIA DE JOGADORES
function changePlayer() {
    if (currentPlayer === players[1]) {
        currentPlayer = players[2];
    } else {
        currentPlayer = players[1];
    }
}

//GERA UM NÚMERO ALEATÓRIO
function rng(min, max) {
    min = Math.ceil(0);
    max = Math.floor(8);
    return Math.floor(Math.random() * (max - min)) + min;
}


// CHECA SE HÁ UM GANHADOR
function winnerCheck(boardData) {
    if        (boardData[0] === boardData[1] && boardData[1] === boardData[2] && boardData[1] != emptyString) {
        theEnd = true
        console.log(`FIM DE JOGO, o vencedor é o jogador > ${boardData[1]} <`)
    } else if (boardData[3] === boardData[4] && boardData[4] === boardData[5] && boardData[4] != emptyString) {
        theEnd = true
        console.log(`FIM DE JOGO, o vencedor é o jogador > ${boardData[4]} <`)
    } else if (boardData[6] === boardData[7] && boardData[7] === boardData[8] && boardData[7] != emptyString) {
        theEnd = true
        console.log(`FIM DE JOGO, o vencedor é o jogador > ${boardData[7]} <`)
    } else if (boardData[0] === boardData[3] && boardData[3] === boardData[6] && boardData[3] != emptyString) {
        theEnd = true
        console.log(`FIM DE JOGO, o vencedor é o jogador > ${boardData[3]} <`)
    } else if (boardData[1] === boardData[4] && boardData[4] === boardData[7] && boardData[1] != emptyString) {
        theEnd = true
        console.log(`FIM DE JOGO, o vencedor é o jogador > ${boardData[4]} <`)
    } else if (boardData[2] === boardData[5] && boardData[5] === boardData[8] && boardData[5] != emptyString) {
        theEnd = true
        console.log(`FIM DE JOGO, o vencedor é o jogador > ${boardData[5]} <`)
    } else if (boardData[0] === boardData[4] && boardData[4] === boardData[8] && boardData[4] != emptyString) {
        theEnd = true
        console.log(`FIM DE JOGO, o vencedor é o jogador > ${boardData[4]} <`)
    } else if (boardData[6] === boardData[4] && boardData[4] === boardData[2] && boardData[4] != emptyString) {
        theEnd = true
        console.log(`FIM DE JOGO, o vencedor é o jogador > ${boardData[4]} <`)
    }
}


function setPlayerMovement(position) {
    if (theEnd === false) {
        if (isEmpty(position)) {
            boardData[position] = currentPlayer;
            changePlayer();
            console.log('jogada')
            winnerCheck(boardData)
        } else {
        //console.log(`A posição ${position} já foi usada`);
    }} 
}


setPlayerMovement(rng());
setPlayerMovement(rng());
setPlayerMovement(rng());
setPlayerMovement(rng());
setPlayerMovement(rng());
setPlayerMovement(rng());
setPlayerMovement(rng());
setPlayerMovement(rng());
setPlayerMovement(rng());


drawBoard(boardData);