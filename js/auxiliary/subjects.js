import {el} from './elements'

export default class Subject{
    constructor(listId){
        this.listId = listId;
        this.numberOfMultipleLists = 0;
        this.indexOfMultipleList = [0];
    }
    increaseMultipleLists(){
        this.numberOfMultipleLists++;
    }
    addIndexOfMultipleList(){
        this.indexOfMultipleList.push(this.numberOfMultipleLists);
    }
    createSubList(node){
        let ul;
        node.classList.add("multiple-list");
        ul = document.createElement("UL");
        node.appendChild(ul);
        this.increaseMultipleLists();
        this.addIndexOfMultipleList();
        ul.setAttribute("id", `${this.listId}-${this.numberOfMultipleLists}`);
    }
    createItem(node, link, type, content){
        if(type === el.types.seemore){
            node.innerHTML = `<div onclick="" class=ios-adapt>${type} ${content}</div>`
            node.classList.add(`seemore`);
        }
        else if(type === el.types.video){
        node.innerHTML = `<a href="#MyFrame" onclick=toggle("${link}")> ${type} ${content}</a>`;
        }
        else{
            node.innerHTML = `<a href="${link}" target="_blank"> ${type} ${content}</a>`; 
        };
    };
    addItem(content, type, link, multiplicity){
            let element, node;
            element = document.getElementById(this.listId);
            node = document.createElement("LI");
        
            this.createItem(node, link, type, content);
            if(multiplicity){
                this.createSubList(node);
            }
            element.appendChild(node);
    }
    addSubitem(index, content, type, link){
        let el, node;
        el = document.getElementById(`${this.listId}-${this.indexOfMultipleList[index]}`);
        node = document.createElement("LI");

        this.createItem(node, link, type, content);

        el.appendChild(node);
    }
}
