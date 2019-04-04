import React from 'react';
function Contact(){
    return(
        <section className="Contact container">
            <h1 className="display-1">Contact Me</h1>
            <hr/>
            <br/>
            <form>
                <span>Full-Name: </span><input type="text"></input><button value="submit">Submit</button>
            </form>
        </section>
    );
}
export default Contact;