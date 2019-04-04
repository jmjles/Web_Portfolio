import React, { Component } from 'react';
import anime from '../../../node_modules/animejs/lib/anime.es'
class Clicker extends Component{
    state = {
        htitle: [
            {
                t:'Beginner:',
                c:'30'
            },
            {
                t:'Amatuer:',
                c:'10'
            },
            {
                t:'Adventurer:',
                c:'60'
            },
            {
                t:'Thumping Rabbit:',
                c:'100'
            },
            {
                t:'Pro:',
                c:'150'
            },
            {
                t:'Tapping Ninja:',
                c:'200'
            },
            {
                t:'GodLike:',
                c:'300'
            },
        ],
    }
    setState()  {
    };

    render(){
        let s = this.state;
        let p = this.props;
        let htitle = s.htitle;    
        let clicked = p.clicked;
        let setChar = p.setChar;
        let cChar = p.cChar;
        
        return(
            <article className="container-fluid">
            <span><button onClick={ani} id ="i" className="infoBtn btn-secondary btn float-right">?</button></span>
                <h1 className="display-1 text-center">Clicker Game</h1>
                <div className="gi text-center">
                    <h1 className="text-center tTitle">
                        Levels
                    </h1>
                    {htitle.map((e) => (
                        <div key={e.t} className="row">
                        <p className="col text-right"> {e.t} </p>
                        <span className="col">{e.c}</span>
                        </div>
                    ))
                }
                </div>
                <div className="row">
                    <div id="gameinf" className="col">
                        <p className="display-2 text-center">{cChar.name}</p>
                        <p className="display-3 text-center">{cChar.level}</p>
                        <p className="display-4 text-center">{cChar.clicks}</p>
                    </div>
        <div className="col" >
            <img id="gpicmain" src={cChar.url} alt={cChar.alt} onClick={clicked.bind(this, p.cChar.id)}/>
        </div>
        <div className="col">
          <h2>Characters:</h2>
          { p.characters.map((p) => (
            <div key={p.id}>
                <p className="text-center" onClick={setChar.bind(this, p.id)}>{p.name}</p>
                <img id="gpic" src={p.url} alt={p.alt} onClick={setChar.bind(this, p.id)}/>
            </div>
          ))}
        </div>
      </div>
        </article>
        );
    
    }
}
let i = 0;
function ani(){
    if(i === 0){
        anime({
            targets:'.gi',
            width:[0,300],
            duration:1000
        });
        i++;
        document.getElementById('i').innerHTML= 'X';
    }
    else{
        anime({
            targets:'.gi',
            width:[300,0],
            easing:'linear',
            duration:300
        });
        i--;
        document.getElementById('i').innerHTML= '?';
    }
    console.log('clicked');
    
}
export default Clicker;