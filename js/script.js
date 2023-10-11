const mario_elemento= document.querySelector('.mario_css')
const pipe_elemento= document.querySelector('.pipe_css')

/*
documetno esta escutando unm evendo, o evento do 'abaixar da tecla', quando ela for acionada, chamarar o metodo jump

*/

const jump_js= ()=>{
    // quando esse metodo form acionado, adiciono a classe jump_css a img do mario 
    mario_elemento.classList.add('jump_css');

    setTimeout(()=>{
        mario_elemento.classList.remove('jump_css');
    }, 500);

    // setTimeout vai executar uma função depois de determinado tempo, o tempo ai ja esta em milisegundos, deixei 500 que é o tempo da animação de pulo do mario
}
// um loop para verificar se o jogo acabou, ele acaba quando o tbo bater no mario, ou seja, quando o tubo chegar a 120-x da esquerda e o mario ainda nao houver pulado...
const loop= setInterval(()=>{
const pipe_position=pipe_elemento.offsetLeft; 
// const marioPosition=pipe_elemento.offsetBotton; // essa nao existe... 
// offsetLeft pega o deslocamento da esquerda...

const marioPosition=Number(window.getComputedStyle(mario_elemento).bottom.replace('px',''));
// uma outra forma de pegar as proopriedados css do elemento. na realidade, estou analizando o elemento...
// convertendo ela para number

if(pipe_position <= 120 && pipe_position> 0 && marioPosition< 90){
// 120 é o ultimo distanciamento ates do tubo bater
// 90px é a altura minima para o tubo passar por baixo do mario

    pipe_elemento.style.animation = 'none'
    // se for igual a 120 ele manda parar a animação do pipe_element
    
    pipe_elemento.style.left= `${pipe_position}px`
    // quando o tubo bater, vai ficar junto com ele...

    mario_elemento.style.animation= 'none'
    mario_elemento.style.bottom= `${marioPosition}px`
    // com isso, a animação vai parar e ele vai ficar exatamente no ponto em que tocou no cano

    mario_elemento.src='imagens/game-over.png'
    mario_elemento.style.width= '75px'
    mario_elemento.style.marginLeft= '50px'

clearInterval(loop) // para encerrar o loop que roda o jogo quando der game over
}

}, 10);


document.addEventListener('keydown', jump_js)  