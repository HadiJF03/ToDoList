class Project{
    #list = [];
    #name;
    #div;
    //constructor
    constructor(name){
        this.#name = name;
        this.#div = (()=>{
            const div = document.createElement('div');
            div.classList.add('project');
            div.textContent = 'name';
            return div;
        })();
    }
    //getters
    get getList(){
        return this.#list;
    }

    get getName(){ 
        return this.#name;
    };

    get getDiv(){
        return this.#div;
    }

    //setters

    set setName(name){
        this.#name=name;
    }    

    set setDiv(div){
        this.#div = div;
    }

    //methods
    taskCount(){
        return this.#list.length;
    }
    clearList(){
        this.#list = [];
    }
    addTask(task){
        const index = this.taskCount()-1;
        this.#list = [this.#list.slice(0,index),task,this.#list[index]];
    }

    buildPage(){
        const content = document.querySelector('.content');
        for(i in this.#list){
            content.appendChild(this.#list[i].getDiv());
        }
    }

}
export default Project;