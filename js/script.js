const mario_elemento= document.querySelector('.mario_css')
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
document.addEventListener('keydown', jump_js)