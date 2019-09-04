import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Projects extends Component{
    state = {
        projects: [
            { name: 'Location Lookup', Description : 'Get The latest news, weather and map of a location with a simple search.', status:'Under Construction', link: '/projects/location', id:'Bad'},
            { name: 'Clicker Game', Description : 'Click on the character to lvl up!', status:'Complete', link: '/projects/clicker', id:'Good'},
            { name: 'MERN Stack', Description : 'You are using it :)', status:'Under Construction', link: '/', id:'Bad'},
            { name: 'WireFrame To HTML', Description: 'Examples of me converting wireframes to html', status:'Under Construction', link:'#', id:'Bad'}
        ]
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