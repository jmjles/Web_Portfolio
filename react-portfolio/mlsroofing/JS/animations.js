//SideBar Animation
let i = 0;
function ani(){
    if(i === 0){
        anime({
            targets:'sidebar',
            width:[0,150],
            duration:1000
        });
        i++;
    }
    else{
        anime({
            targets:'sidebar',
            width:[150,0],
            easing:'linear',
            duration:300
        });
        i--;
    }
}