import Subject from './subjects'
import {el} from './elements'


export function createSubjects(){

let allSubjects = [];
let subjects_DOM = document.querySelector('.subjects');
let index = 1;

function createSubject(subjectId, subjectTitle, subjectImgSrc, subjectIndex){
    let HTML_text = `<div class="subject-item"> \
                        <span class="subject-item-title">${subjectTitle}</span> \
                            <img class="subject-item-image" src="${subjectImgSrc}" alt="${subjectTitle}"> \
                                <div class="subject-item-detalis"> \
                                    <div class="subject-item-list-act"> \
                                        <button class="subject-item-button" onclick="showHide(${subjectIndex})">&#128214;</button> \
                                            <div id="${subjectIndex}" style="display: none;"> \
                                                    <ul id="list-${subjectIndex}"> \
                                                    </ul> \
                                            </div> \
                                    </div> \
                                </div> \
                    </div>`;

    subjects_DOM.innerHTML += HTML_text;
    allSubjects.push(new Subject(subjectId));
}


for (const key in el.subjectsTitle)
    createSubject(`list-${index}`, el.subjectsTitle[key], el.subjectsImg[key], index++)

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
