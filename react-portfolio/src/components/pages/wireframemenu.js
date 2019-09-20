import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import getStatus from '../apps/getStatus'
import ex1 from '../../assets/pics/example1.jpg'
class WireFrameMenu extends Component{
    state={
        examples:[
            {
                name:'Example 1',
                imgURL:ex1,
                imgALT:'',
                status:'Under Construction',
                code:'',
                id:''
            }
        ]
    }
    componentDidMount(){
        getStatus(this.state.examples,this)
    }
    render(){
    return(
        <article>
            <h1>
                Wire Frame examples
            </h1>
            <div className='projects'>
                {this.state.examples.map(example =>(
                    <div className="project" key={example.name}>
                        <div id="projTop">
                            <h2 className="text-center"> { example.name }</h2>
                            <p>{ example.Description}</p>
                            <img src={example.imgURL} className="exImg"></img>
                        </div>
                        <div id="projBot">
                            <p>Project Status<br/> <b id={example.id}>{example.status}</b></p>
                            <a className="btn-secondary btn" href={example.code} target="blank">Code</a>
                            <Link to={ example.link } className="btn-secondary btn">Try Me</Link>
                        </div>
                    </div>
                ))

                }
            </div>
        </article>
    )
    }
}
export default WireFrameMenu;