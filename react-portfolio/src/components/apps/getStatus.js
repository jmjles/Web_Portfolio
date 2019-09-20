let getStatus = function(ar,t){
    console.log(ar)
    for(let i = 0; i< ar.length;i++){
        let projects = ar;
        let project= projects[i];
        if(project.status==='Under Construction'){
            let x = projects.slice();
            x[i].id='Bad'
            t.setState({projects:x})
        }
        else{
            let x = projects.slice();
            x[i].id='Good'
            t.setState({projects:x})
        }
    }
}
export default getStatus;