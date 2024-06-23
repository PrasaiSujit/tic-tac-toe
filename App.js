let boxes = document.querySelectorAll('.box');
let rBtn = document.querySelector('#reset');
let msgContainer = document.querySelector('.msgContainer');
let msg = document.querySelector('#msg');
let head = document.querySelector('#head');
let newG = document.querySelector('#newG');
let turnO = true;

const winPattern = [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];

const reGame = ()=>{
    turnO = true;
    enableBoxs();
    
}
const newGame = () =>{
    msgContainer.classList.add('hide');
    turnO = true;
    enableBoxs();
    head.classList.remove('hide');
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO)
        {
            box.innerHTML = 'O';
            turnO = false;
        }
        else{
            box.innerHTML = 'X';
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const enableBoxs = ()=>{
    for(let box of boxes)
    {
        box.disabled = false;
        box.innerText = '';
    }
}
const disableBoxs = ()=>{
    for(let box of boxes)
    {
        box.disabled = true;
    }
}
const showWinner = (winner) =>{
 msg.innerText =`Congratulation!! Winner is ${winner}`;
 msgContainer.classList.remove('hide');
 head.classList.add('hide');
}

const checkWinner = () =>{
  for(let pattern of winPattern){
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if(pos1 != "" && pos2 !="" && pos3 != "")
    {
        if(pos1 === pos2 && pos2 === pos3)
        {
            showWinner(pos1);
            disableBoxs();
        }
    }
  }
}

rBtn.addEventListener('click',reGame);
newG.addEventListener('click',newGame);


// let boxes = document.querySelectorAll('.box');
// let turnO = true;
// let gameActive = true;

// const winPattern = [
//     [0, 1, 2], [0, 3, 6], [0, 4, 8],
//     [1, 4, 7], [2, 5, 8], [2, 4, 6],
//     [3, 4, 5], [6, 7, 8]
// ];

// boxes.forEach((box) => {
//     box.addEventListener('click', () => {
//         if (gameActive && box.innerText === '') {
//             if (turnO) {
//                 box.innerText = 'O';
//                 turnO = false;
//             } else {
//                 box.innerText = 'X';
//                 turnO = true;
//             }
//             winCheck();
//         }
//     })
// });

// const winCheck = () => {
//     for (pattern of winPattern) {
//      pos1=boxes[pattern[0]].innerText;
//      pos2=boxes[pattern[1]].innerText;
//      pos3=boxes[pattern[2]].innerText;

//       if(pos1 != "" && pos2 !="" && pos3 != "")
//     {
//         if(pos1 === pos2 && pos2 === pos3)
//        {
//           console.log('Winner is ',pos1)   
//         }
//      }
//     }
// }
