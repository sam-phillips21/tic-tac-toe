let player1 = "true";
let player2 = "true";
// let turn  = 0;
// let turn2 = 0;
    const block_0 = document.getElementById('block_0')
    const block_1 = document.getElementById('block_1')
    const block_2 = document.getElementById("block_2")
    const block_3 = document.getElementById("block_3")
    const block_4 = document.getElementById("block_4")
    const block_5 = document.getElementById("block_5")
    const block_6 = document.getElementById("block_6")
    const block_7 = document.getElementById("block_7")
    const block_8 = document.getElementById("block_8")
    const grid = document.getElementById("grid")
    const gameStatus = document.getElementById('gameStatus')
    play_board = ["", "", "", "", "", "", "", "", ""];
   
    let box= [block_0, block_1, block_2, block_3, block_4, block_5, block_6, block_7, block_8];

    const win= [
             [block_0, block_1, block_2],
             [block_3, block_4, block_5],
             [block_6, block_7, block_8],
             [block_0, block_4, block_8],
             [block_2, block_4, block_6],
             [block_0, block_3, block_6],
             [block_1, block_4, block_7],
             [block_2, block_5, block_8]]
    
    turnX = true;
    box.forEach(element => {
        element.addEventListener('click', () => {
            if (element.innerText == "") {
                element.innerText = turnX ? "x" : "O";
                turnX = !turnX;
            }
    })});

    
    
    // if (turn = true) {
    
    // box.forEach((element) => {
    //     element.addEventListener("click", function() {
    //         element.innerText = "X"
    //     })})
   
    //     else if (turn2 = false) {

    //     box.forEach((element) => {
    //         element.addEventListener("click", function() {
    //             element.innerText = "O"
    //         })}) }
//   


 

    // function turn2() {
    //     if (turn2 == 1)
    //     box.forEach((element) =>
    //     element.addEventListener("click", function() {
    //         innerText = "0"
    //     })
   
    // box.forEach((element) => {
    //     addEventListener('click', test)})

        // box.forEach((element) => {
        //     element.addEventListener("click", function() {
        //         element.innerText = "O"
               
        //     })})

    //button code:

    var button = document.createElement("button");
    button.innerHTML = "New Game"
    var body = document.getElementsByTagName("body")[0];
    body.appendChild(button);
    button.addEventListener ("click", function() {
        onclick = document.location.reload(true);
        element.innerText = ""
    })
