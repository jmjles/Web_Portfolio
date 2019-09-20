import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import getStatus from '../apps/getStatus'
class Projects extends Component{
    state = {
        projects: [
            { 
                name: 'Location Lookup',
                Description : 'Get The latest news, weather and map of a location with a simple search.', 
                status:'Under Construction', 
                link: '/projects/location',
                code:'https://github.com/jmjles/React_Portfolio/blob/master/react-portfolio/src/components/pages/location.js', 
                id:''
            },
            { 
                name: 'Clicker Game', 
                Description : 'Click on the character to lvl up!', 
                status:'Complete', 
                link: '/projects/clicker', 
                code:'https://github.com/jmjles/React_Portfolio/blob/master/react-portfolio/src/components/pages/clicker.js',
                id:''
            },
            { 
                name: 'MERN Stack', 
                Description : 'You are using it :)', 
                status:'Under Construction', 
                link: '/', 
                code:'https://github.com/jmjles/React_Portfolio',
                id:''
            },
            { 
                name: 'WireFrame To HTML', 
                Description: 'Examples of me converting wireframes to html', 
                status:'Under Construction', 
                link:'/projects/wireframes', 
                code:'',
                id:''
            }
        ]
    }

    componentDidMount(){
        getStatus(this.state.projects,this);
    }
    render(){
        return(
            <article>
                <h1>
                    My Projects
                </h1>
                <div className="projects">
                    {this.state.projects.map((project) => (
                        <div className="project" key ={project.name}>
                            <div id="projTop">
                                <h2 className="text-center"> { project.name }</h2>
                                <p>{ project.Description}</p>
                            </div>
                            <div id="projBot">
                                <p>Project Status<br/> <b id={project.id}>{project.status}</b></p>
                                <a className="btn-secondary btn" href={project.code} target="blank">Code</a>
                                <Link to={ project.link } className="btn-secondary btn">Try Me</Link>
                            </div>
                        </div>
                    ))
                    }
                </div>
            </article>
        );
    }
    
}
export default Projects;