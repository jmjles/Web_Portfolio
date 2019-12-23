let getStatus = function(array,state){
    for(let i = 0; i< array.length;i++){
        let project = array[i];
        if(project.status==='Under Construction'){
            let x = array.slice();
            x[i].id='Bad'
            state.setState({projects:x})
        }
        else{
            let x = array.slice();
            x[i].id='Good'
            state.setState({projects:x})
        }
    }
}
export default getStatus;