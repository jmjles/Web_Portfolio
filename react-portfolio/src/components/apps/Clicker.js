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
    constructor(props){
        super(props)
        //this.setcChar = this.setcChar.bind(this)
    }
    render(){
        let s = this.state;
        let p = this.props;
        let htitle = s.htitle;    
        let clicked = p.clicked;
        let setChar = p.setChar;
        let cChar = p.cChar;
        
        return(
            <article className="app">
                <div>
                    <button onClick={ani} id="i" className="infoBtn btn-secondary btn float-right">?</button>
                    <button onClick={cChange} id="changeBtn" className="btn btn-primary btn-lg">Change Character</button>
                </div>
                <h1 className="text-center">Clicker Game</h1>
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
                    <div>
                        <figure>
                            <img id="gpicmain" src={cChar.url} alt={cChar.alt} onClick={clicked.bind(this, cChar.id)}/>
                            <figcaption>
                                <p className="display-2 text-center" id="cCharname">{cChar.name} - {cChar.level}</p>
                                <p className="display-3" id="cCharclicks">{cChar.clicks}</p>
                            </figcaption>
                        </figure>
                    </div>
                <div id="charselect">
                    <h2>Character Selection</h2>
                    <div className="row" id="Characters">
                    { p.characters.map((p) => (
                        <figure key={p.id} className="Character">
                            <figcaption className="text-center characterName" onClick={setChar.bind(this, p.id)}>
                                {p.name}<br/>
                                Current Level: {p.level}
                            </figcaption>
                            <img id="characterPic" src={p.url} alt={p.alt} onClick={setChar.bind(this, p.id)}/>
                        </figure>
                    ))}
                    </div>
                    <button onClick={cChange} className="btn btn-primary btn-lg">Back</button>
                </div>
                <div id="changeBtn">
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
            duration:500
        });
        i++;
        document.getElementById('i').innerHTML= 'X';
    }
    else{
        anime({
            targets:'.gi',
            width:[100,0],
            duration:300
        });
        i--;
        document.getElementById('i').innerHTML= '?';
    }
}
let x = 0;
function cChange() {
    if(x === 0){
        anime({
            targets:'#charselect',
            width:[0,'100%'],
            duration:500
        });
        x++;
    }
    else{
        anime({
            targets:'#charselect',
            width:['100%',0],
            duration:300
        });
        x--;
    }
}
export default Clicker;