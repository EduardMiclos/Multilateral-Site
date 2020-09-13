import Question from './question'

export let questions = [];

function createQuestion(question, options, corrAns, imgUrl){
    questions.push(new Question(question, options, corrAns, imgUrl))
}


var ajax = new XMLHttpRequest();
var method = "GET";
var path = "questions.php";
var async = true;

ajax.open(method, path, async);
ajax.send();

ajax.onreadystatechange = function(){
        if(ajax.readyState == 4 && ajax.status == 200){
            var data =  JSON.parse(this.responseText);
            data.forEach(element => {
                    createQuestion(element.question, [element.option_1, element.option_2, element.option_3, element.option_4], element.corrAns, element.imgUrl);
            });
        }
}
