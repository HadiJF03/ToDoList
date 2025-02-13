import "./styles.css";
import header from "./Header.js";
import sideBar from "./Sidebar";
import ProjectsPage from "./ProjectsPage";
import inbox from "./Inbox";

const page = () =>{
    header();
    let list = sideBar();
    inbox();    

    
}
page();
