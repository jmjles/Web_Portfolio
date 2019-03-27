import React, { Component } from 'react';
import g from '../../assets/pics/ghoul.png'
import gh from '../../assets/pics/ghost.png'
import p from '../../assets/pics/pumpkin.png'
import Clicker from '../apps/Clicker';
import {Link} from 'react-router-dom';

class clicker extends Component{
    state = {
        Characters: [   
            {
                name:'Ghoul',
                level: '',
                url: g,
                clicks: '0',
                id: '1'
            },
            {
                name:'Ghost',
                level: '',
                url: gh,
                clicks: 0,
                id:'2'
            },
            {
                name:'Pumpkin',
                level: '',
                url: p,
                clicks: '0',
                id:'3'
            },
        ],
        cChar:{
                name:'Ghoul',
                level: '',
                url: g,
                clicks: '0',
                id: '1'
        }
    }
    clicked = (id) =>{
        this.setState({
            Characters: this.state.Characters.map(c => {
                if (c.id === id) {
                    c.clicks ++;
                }
                return c;
            })
        })
        this.setChar(id);
    };
    setChar = (id) => {
        this.state.Characters.map(characters => {
            if (characters.id === id) {
                this.setState({cChar: {
                    name: characters.name,
                    url: characters.url,
                    level: characters.level,
                    clicks: characters.clicks,
                    id: characters.id
                }})
            }
        })
    };
    render(){
        return(
            <Clicker characters = {this.state.Characters} clicked={this.clicked} setChar={this.setChar} cChar={this.state.cChar}/>
        );
    }
    
}

export default clicker;