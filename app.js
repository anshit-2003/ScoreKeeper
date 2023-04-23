const maxscore = document.querySelector('#maxScore');
const reset = document.querySelector('#reset');
const p1 = {
    score : 0,
    button : document.querySelector('#p1'),
    display : document.querySelector('#p1score')
}
const p2 = {
    score :0,
    button : document.querySelector('#p2'),
    display : document.querySelector('#p2score')
}
function update(player,opponent){
    player.score += 1;
    player.display.innerText = player.score;
    if(player.score == maxscore.value){
        player.button.disabled = true;
        opponent.button.disabled = true;
        player.display.classList.add('has-text-success');
        opponent.display.classList.add('has-text-danger');

    }
}
p1.button.addEventListener('click',() =>{
    update(p1,p2);
})
p2.button.addEventListener('click',() =>{
    update(p2,p1);
})
reset.addEventListener('click',()=>{
    for(let i of [p1,p2]){
        i.button.disabled = false;
        i.score = 0;
        i.display.innerText = '0';
        i.display.classList.remove('has-text-success' , 'has-text-danger');
    }
})

