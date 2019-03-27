import React, { Component } from 'react';

class Clicker extends Component{
    state = {
        htitle: [
            'Noob: 5',
            'Beginner: 10',
            'Amatuer: 30',
            'Adventurer: 60',
            'Thumping Rabbit: 100',
            'Pro: 150',
            'Tapping Ninja: 200',
            'GodLike: 300',
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
                            <tr>
                                <th className="text-center">
                                    Levels
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                                {htitle.map((title) => (
                                    <tr key={title}>
                                        <td>
                                            {title}
                                        </td>
                                    </tr>
                                ))
                                }
                            </tbody>
                        </table>
                    </div>
        <div className="col" >
            <img id="gpicmain" src={cChar.url} alt={cChar.alt} onClick={clicked.bind(this, p.cChar.id)}/>
        </div>
        <div className="col-3">
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

export default Clicker;