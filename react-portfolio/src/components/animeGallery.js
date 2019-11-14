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

let gameInfoAni = (reverse) => {
    let width = window.innerWidth;
    if(!reverse){
        anime({
            targets:'.gi',
            width:[0,width],
            duration:500,
        });
    }
    else{
        anime({
            targets:'.gi',
            width:[width,0],
            duration:300,
            easing: 'linear'
        });
    }
}
let charSelect = (reverse) => {
    let width = window.innerWidth;
    if(!reverse){
        anime({
            targets:'#charselect',
            width:[0,width],
            duration:500
        });
        document.getElementById('i').innerHTML= 'X';
    }
    else{
        anime({
            targets:'#charselect',
            width:[width,0],
            duration:300,
            easing: 'linear'
        });
        document.getElementById('i').innerHTML= '?';
    }
}
let socialAni= (reverse) => {
    if (!reverse){
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
