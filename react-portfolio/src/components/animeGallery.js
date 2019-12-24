import anime from 'animejs/lib/anime'

let pdfAni = (reverse) => {
    let height;
    if (reverse){
        console.log('true!')
        height = [0, 1200]
        document.getElementById('btnSH').innerHTML='Hide';
    }
    else{
        console.log('False!')
        height = [1200,0]
        document.getElementById('btnSH').innerHTML='Show';
    }
    anime({
        targets:'#pdf',
        height,
        duration: 1000,
        easing: 'linear'
        });
        console.log(height)
}

let gameInfoAni = () => {
    let width = window.innerWidth;
    const reverse = document.getElementById('gameInfo').clientWidth > 0 ? true : false
    if(!reverse){
        anime({
            targets:'#gameInfo',
            width:[0,width],
            duration:500,
        });
    }
    else{
        anime({
            targets:'#gameInfo',
            width:[width,0],
            duration:300,
            easing: 'linear'
        });
    }
}
let charSelect = (reverse) => {
    let width = window.innerWidth;
    if(reverse === false){
        anime({
            targets:'#characterSelect',
            width:[0,width],
            duration:500
        });
    }
    else{
        anime({
            targets:'#characterSelect',
            width:[width,0],
            duration:300,
            easing: 'linear'
        });
    }
}
let socialAni= (reverse) => {
    if (reverse === false){
        anime({
            targets:'.Socials',
            height:[0,50],
            easing: 'linear',
            duration: 300
        });
    } else{
        anime({
            targets:'.Socials',
            height: [50, 0],
            duration: 200,
            easing: 'linear'
        });
    }
}
export {pdfAni,gameInfoAni,charSelect,socialAni}
