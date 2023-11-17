const box_one = document.querySelector('.box1');
const body = document.querySelector('.main');
const bodyOfCircle = document.querySelector('.bodyOfButton');

box_one.addEventListener('mousemove', function(e){
    let x = e.offsetX;
    let y = e.offsetY;
    let boxWideth = box_one.clientWidth;
    let boxHeight = box_one.clientHeight;
    let moveX = (x - boxWideth/2);
    let moveY = (y - boxHeight/2);
    box_one.style.transform =`translateX(${moveX}px) translateY(${moveY}px)`;
    body.style.backgroundColor ='white'
    
})
box_one.addEventListener('mouseout',()=>{
    box_one.style.transform =``;
    body.style.backgroundColor ='black'
})

// bodyOfCircle.addEventListener('mouseover',(e)=>{
//     // let x = e.offsetX
//     // let y = e.offsetY;
//     // if(x < 30 && y <30){

//     // }else if{}
//     // box_one.style.transform =`translateX(${20}px) translateY(${20}px)`;
// })