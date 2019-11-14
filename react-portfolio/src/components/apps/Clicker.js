import React, { Component } from 'react';
import {charSelect,gameInfoAni} from '../animeGallery'
class Clicker extends Component{
    state = {
        htitle: [
            {
                t:'Beginner:',
                c:'10'
            },
            {
                t:'Amatuer:',
                c:'30'
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
    render(){
        let s = this.state;
        let p = this.props;
        let htitle = s.htitle;    
        let clicked = p.clicked;
        let setChar = p.setChar;
        let cChar = p.cChar;
        
        return(
            <article id ="fs">
                <div>
                    <button onClick={(i,reverse)=>{let txt = i.target.innerHTML; if(txt === '?') reverse = false;else reverse=true; gameInfoAni(reverse)}} id ="i" className="infoBtn btn-secondary btn float-right">?</button>
                    <h1 className="text-center">Clicker Game</h1>
                </div>
                <div className="gi text-center">
                    <a onClick={(reverse)=>gameInfoAni(reverse)} className="gBack">Back</a>
                    <h1 className="text-center tTitle">
                        Levels
                    </h1>
                    <table>
                    {htitle.map((e) => (
                        <tr key={e.t}>
                            <td id="Ltitle">{e.t}</td>
                            <td>{e.c}</td>
                        </tr>
                    ))
                    }
                    </table>
                </div>
                    <div id ="gameArea">
                        <figure>
                            <img id="gpicmain" src={cChar.url} alt={cChar.alt} onClick={clicked.bind(this, cChar.id)}/>
                            <figcaption>
                                <h2 className="text-center">{cChar.name}</h2>
                                <h3>{cChar.clicks}</h3>
                                <h4>{cChar.level}</h4>
                            </figcaption>
                        </figure>
                        <button onClick={(reverse)=>{charSelect(reverse = false)}} className="btn btn-primary btn-lg">Change Character</button>
                    </div>
                <div id="charselect">
                    <div id="Characters">
                    <h2 className="two">Character Selection</h2>
                    { p.characters.map((p) => (
                        <div id="charDiv" key={p.id}>
                            <h1 className="text-center" onClick={(reverse)=>{setChar.bind(this, p.id)(); charSelect(reverse = true)}}>{p.name}</h1>
                            <img id="gpic" src={p.url} alt={p.alt} onClick={(reverse)=>{setChar.bind(this, p.id)(); charSelect(reverse = true)}}/>
                            <p>{p.level}</p>
                        </div>
                    ))}
                    <button onClick={(reverse)=>{charSelect(reverse = true)}} className="gBack" id="gbChar">Back</button>
                </div>
                </div>
            </article>
        );
    
    }
}
export default Clicker;