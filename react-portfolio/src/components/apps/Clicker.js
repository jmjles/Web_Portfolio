import React, { Component } from 'react';
import ghoulpic from '../../assets/pics/ghoul.png'
import {Link} from 'react-router-dom';

class Clicker extends Component{
    state = {
        htitle: [
            'Noob: 5',
            'Beginner: 10',
            'Amatuer: 15',
            'Adventurer: 20',
            'Thumping Rabbit: 25',
            'Pro: 30',
            'Tapping Ninja: 35',
            'GodLike: 40',
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
            <article className="container, Projects">
                <h1 className="display-1">Clicker Game</h1>
                <div className="row">
                    <div id="gameinf" className="col-2 container-fluid">
                        <p className="display-2 text-center">{cChar.name}</p>
                        <p className="display-3 text-center">{cChar.level}</p>
                        <p className="display-4 text-center">{cChar.clicks}</p>
                        <table>
                            <thead>
                                <h2 class="text-center">Levels</h2>
                            </thead>
                            {htitle.map((title) => (
                                <tr key={title}>
                                    <td>
                                        {title}
                                    </td>
                                </tr>
                            ))
                            }
                        </table>
                    </div>
        <div className="col" >
            <img id="gpicmain" src={cChar.url} onClick={clicked.bind(this, p.cChar.id)}/>
        </div>
        <div class="col-3">
          <h2>Characters:</h2>
          { p.characters.map((p) => (
            <div>
                <p class="text-center" onClick={setChar.bind(this, p.id)}>{p.name}{p.id}</p>
                <img id="gpic" src={p.url} onClick={setChar.bind(this, p.id)}/>
            </div>
          ))}
        </div>
      </div>
        </article>
        );
    
    }
}

export default Clicker;