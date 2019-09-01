import React, { Component } from 'react';
import ani from '../animeGallery'
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
    constructor(props){
        super(props)
    }
    render(){
        let s = this.state;
        let p = this.props;
        let htitle = s.htitle;    
        let clicked = p.clicked;
        let setChar = p.setChar;
        let cChar = p.cChar;
        
        return(
<<<<<<< HEAD
            <article id ="fs">
                <div>
                    <button onClick={(i,reverse)=>{let txt = i.target.innerHTML; if(txt === '?') reverse = false;else reverse=true; ani.gameInfoAni(reverse)}} id ="i" className="infoBtn btn-secondary btn float-right">?</button>
                    <h1 className="text-center">Clicker Game</h1>
                </div>
=======
            <article className="app">
                <div>
                    <button onClick={ani} id="i" className="infoBtn btn-secondary btn float-right">?</button>
                    <button onClick={cChange} id="changeBtn" className="btn btn-primary btn-lg">Change Character</button>
                </div>
                <h1 className="text-center">Clicker Game</h1>
>>>>>>> a476551c75dd7c8f88d2518ee798d8d70837592d
                <div className="gi text-center">
                    <a onClick={(reverse)=>ani.gameInfoAni(reverse)} className="gBack">Back</a>
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
                    <div id ="gameArea">
                        <figure>
                            <img id="gpicmain" src={cChar.url} alt={cChar.alt} onClick={clicked.bind(this, cChar.id)}/>
                            <figcaption>
<<<<<<< HEAD
                                <h2 className="text-center">{cChar.name}</h2>
                                <h3>{cChar.clicks}</h3>
                                <h4>{cChar.level}</h4>
=======
                                <p className="display-2 text-center" id="cCharname">{cChar.name} - {cChar.level}</p>
                                <p className="display-3" id="cCharclicks">{cChar.clicks}</p>
>>>>>>> a476551c75dd7c8f88d2518ee798d8d70837592d
                            </figcaption>
                        </figure>
                        <button onClick={(reverse)=>{ani.charSelect(reverse = false)}} className="btn btn-primary btn-lg">Change Character</button>
                    </div>
                <div id="charselect">
                    <h2>Character Selection</h2>
                    <div className="row" id="Characters">
                    { p.characters.map((p) => (
<<<<<<< HEAD
                        <div id="charDiv" key={p.id}>
                            <p className="text-center" onClick={(reverse)=>{setChar.bind(this, p.id)(); ani.charSelect(reverse = true)}}>{p.name}</p>
                            <img id="gpic" src={p.url} alt={p.alt} onClick={(reverse)=>{setChar.bind(this, p.id)(); ani.charSelect(reverse = true)}}/>
                        </div>
                    ))}
                    <button onClick={(reverse)=>{ani.charSelect(reverse = true)}} className="gBack" id="gbChar">Back</button>
                </div>
=======
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
>>>>>>> a476551c75dd7c8f88d2518ee798d8d70837592d
            </article>
        );
    
    }
}
<<<<<<< HEAD
=======
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
>>>>>>> a476551c75dd7c8f88d2518ee798d8d70837592d
export default Clicker;