let players = ['X','O'];
let currentPlayerIndex  = 0;
let currentPlayer  = players[currentPlayerIndex]
let board = [
    ["","",""],
    ["","",""],
    ["","",""]
]
let freeze = false
let turnText = document.getElementById('turn-text');
turnText.innerText = `${currentPlayer}'s turn`;
let resultText = document.getElementById('result-text');
function changePlayer(winner){
    if(currentPlayerIndex===0){
        currentPlayerIndex = 1;
    }else{
        currentPlayerIndex = 0
    }
    currentPlayer  = players[currentPlayerIndex]
    turnText.innerText = winner ? `Game over` : `${currentPlayer}'s turn`;
    if(winner){
        freeze = true;
        resultText.innerText = `${winner} is the winner`;
    }
}

function update(child){
    let i = child.getAttribute('data-row');
    let j = child.getAttribute('data-col');
    if(!board[i][j] && !freeze){
        board[i][j] = currentPlayer;
        child.children[0].innerText = currentPlayer;
        let winner = checkWinner();
        console.log(winner)
        changePlayer(winner);
    }
}

let rows = document.querySelectorAll('.row')
rows.forEach((row)=>{
    for(let child of row.children){
        child.addEventListener("click",() => {
            update(child)
        })
    }
})

function allSame(arr){
    let temp = arr[0];
    let arr1 = arr.filter((a)=>( a && a===temp))
    return arr1.length === arr.length;
}
function checkForTie(){
    let result = 'tie';
    board.forEach((row)=>{
        let temp = row.filter((item)=>item==="")
        if(temp.length){
            result =null;
        }
    })
    return result;
}

function checkWinner(){
    // if still places are left 
    let winner = null;
    for(let i =0;i<3;i++){
        if(allSame(board[i])){
            winner = board[i][0]
        }
    }
    for(let i =0;i<3;i++){
        if(allSame([board[0][i],board[1][i],board[2][i]])){
            winner = board[0][i]
        }
    }
    if(allSame([board[0][0],board[1][1],board[2][2]])){
        winner = board[0][0]
    }
    if(allSame([board[0][2],board[1][1],board[2][0]])){
        winner = board[0][2]
    }
    let tie = checkForTie();
    return winner || tie;
}
