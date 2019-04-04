import React, { Component } from 'react';
import g from '../../assets/pics/ghoul.png'
import gh from '../../assets/pics/ghost.png'
import p from '../../assets/pics/pumpkin.png'
import Clicker from '../apps/Clicker';

class clicker extends Component{
    state = {
        Characters: [   
            {
                name:'Ghoul',
                level: 'Noob',
                url: g,
                clicks: '0',
                id: '1',
                alt:'Ghoul Character Pic'
            },
            {
                name:'Ghost',
                level: 'Noob',
                url: gh,
                clicks: 0,
                id:'2',
                alt:'Ghost Character Pic'
            },
            {
                name:'Pumpkin',
                level: 'Noob',
                url: p,
                clicks: '0',
                id:'3',
                alt:'Pumpkin Character Pic'
            },
        ],
        cChar:{
                name:'Ghoul',
                level: 'Noob',
                url: g,
                clicks: '0',
                id: '1',
                alt:'Ghoul Character Pic'
        }
    }
    clicked = (id) =>{
        this.setState({
            Characters: this.state.Characters.map(c => {
                if (c.id === id) {
                    c.clicks ++;
                    if (c.clicks <= 10) {
                        c.level = 'Noob'
                    }
                    else if (c.clicks <= 30) {
                        c.level = 'Beginner'
                    }
                    else if (c.clicks <= 60) {
                        c.level = 'Amatuer'
                    }
                    else if (c.clicks <= 100) {
                        c.level = 'Adventurer'
                    }
                    else if (c.clicks <= 150) {
                        c.level = 'Thumping Rabbit'
                    }
                    else if (c.clicks <= 200) {
                        c.level = 'Pro'
                    }
                    else if (c.clicks <= 300) {
                        c.level = 'Tapping Ninja'
                    }
                    else {
                        c.level = 'Godlike'
                    }
                }
                return c;
            })
        })
        this.setChar(id);
    };
    setChar = (id) => {
        this.state.Characters.map(c => {
            if (c.id === id) {
                this.setState({cChar: {
                    name: c.name,
                    url: c.url,
                    level: c.level,
                    clicks: c.clicks,
                    id: c.id,
                    alt: c.alt
                }})
            } return c;
        })
    };
    render(){
        return(
            <Clicker characters = {this.state.Characters} clicked={this.clicked} setChar={this.setChar} cChar={this.state.cChar}/>
        );
    }
    
}
export default clicker;