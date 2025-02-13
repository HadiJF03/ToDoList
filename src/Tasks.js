import { IgnorePlugin } from "webpack";

class Task{

    important = false;
    constructor(text,status,date,important){
        this.text = text;
        this.status = status;
        this.date = date;
        this.important = important;
        this.div = this.#createDiv();
    }
    get getText(){
        return this.text;
    }
    get getStatus(){
        return this.status;
    }
    get getDate(){
        return this.date;
    }
    get isImportant(){
        return this.important;
    }
    
    set setText(text){
        this.text = text;
        this.div = this.#createDiv();
    }
    set setStatus(status){
        this.status = status;
        this.div = this.#createDiv();
    }
    set setDate(date){
        this.date = date;
        this.div = this.#createDiv();
    }
    set isImportant(important){
        this.important = important;
        this.div = this.#createDiv();
    }

    #createDiv(){
        const div = document.createElement('div');
        const checkBox = document.createElement('input');
        checkBox.type('checkbox');
        const info= document.createElement('div');
        const task = document.createElement('p');
        const dateDiv  = document.createElement('small');

        task.textContent = this.text;
        dateDiv.textContent = this.date;
        
        info.classList.add('info');
        div.classList.add('task');

        info.appendChild(task);
        info.appendChild(dateDiv);
        div.appendChild(checkBox);
        div.appendChild(info);

        return div;
    }
}
export default Task;