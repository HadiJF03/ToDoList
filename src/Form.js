const form = ()=>{
    const formDiv = document.createElement('div');
    const projectName = document.createElement('input');
    const cancelButton = document.createElement('button');
    const confirmButton = document.createElement('button');
    const buttons = document.createElement('div');


    formDiv.classList.add('project');
    projectName.classList.add('project-input');
    cancelButton.classList.add('cancel-button');
    confirmButton.classList.add('confirm-button');
    

    projectName.setAttribute('type','text');
    buttons.appendChild(cancelButton);
    buttons.appendChild(confirmButton);
    formDiv.appendChild(projectName);
    formDiv.appendChild(buttons);


    return formDiv;
}