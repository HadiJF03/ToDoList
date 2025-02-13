const createList = ()=>{
    const list = document.createElement("div");
    list.classList.add('sort');
    let inbox = listItem(textDiv("Inbox"),createIcon(["fa-solid","fa-inbox"]))
    let today = listItem(textDiv("Today"),createIcon(["fa-solid","fa-calendar-day"]))
    let week = listItem(textDiv("This Week"),createIcon(["fa-solid","fa-calendar-week"]))
    let important = listItem(textDiv("Important"),createIcon(["fa-solid", "fa-triangle-exclamation"]))


    list.appendChild(inbox);
    list.appendChild(today);
    list.appendChild(week);
    list.appendChild(important);

    return list;
};
const textDiv = (text)=>{
    const div = document.createElement('a');
    div.innerText = text;
    return div;
}
const createIcon = (classes)=>{
    const icon = document.createElement('i');
    for(let i =0; i<classes.length; i++){
        icon.classList.add(classes[i]);
    }
    return icon;
}
const listItem = (text, icon)=>{
    const item = document.createElement('div');
    item.classList.add('side-button');
    item.appendChild(icon);
    item.appendChild(text);
    return item;
};

const sideBar = (function (){
    const sideBarDiv = document.querySelector('.sidebar');
    const sortingList = createList();
    const projects = document.createElement('div');
    projects.textContent = 'My projects';
    sideBarDiv.appendChild(sortingList);
    sideBarDiv.appendChild(projects);
    return sortingList;
})();

export default sideBar;