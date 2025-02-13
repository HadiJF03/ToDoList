import Project from "./Projects";


function addProject(){
    

}
const projectsPage = (()=>{
    const projectList = [];
    const content = document.querySelector('.content');
    
    for(let i in projectList){
        console.log(projectList[i].getDiv);
        content.appendChild(projectList[i].getDiv);
    }
    content.classList.add('content');

})();
export default projectsPage;