import Subject from './subjects'
import {el} from './elements'


export function createSubjects(){

let allSubjects = [];


function createSubject(subjectId){
    allSubjects.push(new Subject(subjectId))
}


for (const key in el.subjectsId)
    createSubject(el.subjectsId[key])

let subjectCount = -1;


/* Creating a new XMLHTTP REQUEST */
var ajax = new XMLHttpRequest();
var method = "GET";
var path = "subjects.php";
var async = true;

/* Sending a request to the server */
ajax.open(method, path, async);
ajax.send();

/* Receiving a resposne from subjects.php */
ajax.onreadystatechange = function(){

    if(ajax.readyState == 4 && ajax.status == 200){
        var data = JSON.parse(this.responseText);
        data.forEach(element => {
            if(element.id == 1){
                subjectCount++;
            }
            if(element.parent_index != null)
                allSubjects[subjectCount].addSubitem(parseInt(element.parent_index), element.title, element.type_code, element.link);
            else
                allSubjects[subjectCount].addItem(element.title, element.type_code, element.link, element.multiplicity)
        });
    }
}


};
