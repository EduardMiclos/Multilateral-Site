import {el} from './elements'
import {questions} from './createdQuestions'


let score = 0;

function clearScreen(){
   let st = document.querySelector(el.game.container);
   st.innerHTML = "";
   displayScore();
};

function clearScore(){
    let sc;
    sc = document.getElementById(el.game.score);
    sc.innerHTML = "";
}

function insertImg(img){
    let inner, cnt;
    inner = `<img class="img-question" src="${img}">`
    cnt = document.querySelector(el.game.container);
        cnt.innerHTML= inner;
    };

function insertQuestion(question){
    let inner, cnt;
    inner = `<p class="img-question question">${question}</p>`
    cnt = document.querySelector(el.game.container);
    cnt.innerHTML+=inner;
}    

function insertOptions(options){
    let inner, cnt, div;
    div = document.createElement('div');
    div.classList.add("options");
    options.forEach(e => {
        inner = `<div class="option">${e}</div>`;
        div.innerHTML+=inner;
    })
    cnt = document.querySelector(el.game.container);
    cnt.appendChild(div);
};

function displayScore(){
    let scoreView;
    scoreView = document.getElementById(el.game.score);
    scoreView.style.display = "block";
    scoreView.innerHTML = `PUNCTAJ: <span style="color:teal;">${score}</span>`
}

function updateScore(){
        score+=10;
    displayScore();
};

function randomise(){
    return Math.floor(Math.random()*questions.length)
}

function generateQuestion(random){
    insertImg(questions[random].imageUrl);
    insertQuestion(questions[random].question);
    insertOptions(questions[random].options);
}

function getAnswer(index){
    let opts;
    opts = document.querySelector(el.game.options);
    opts.addEventListener(`click`, e=>{
      if(e.target.classList.contains(el.game.option)){  
            if(e.target.textContent.toString() === questions[index].correctAnswer){
            e.target.style.backgroundColor = "rgb(57, 161, 50)";
            updateScore();
          } else if(e.target.textContent.toString()){
            e.target.style.backgroundColor = "rgb(160, 55, 55)";
          };
        questions.splice(index, 1);
        setTimeout(gamePlay, 1000);
      };
      
    })
}


function getEndText(score){
    let txt = `Ai obținut <span style="color:lightgreen;">${score}</span> puncte. `    
    if(score <= 40){
        txt+= ` Nu fi trist. Mai ai de învățat. Întoarce-te pe site și îmbogățește-ți cunoștințele.`
    }else if(score <=70){
        txt+= ` Bravo, nu e rău. Dar, ține minte, mereu e loc de mai bine.`
    }else{
        txt+= ` Felicitări! Ești multilateral dezvoltat! Aproape că sunt invidios.`
    }
    return txt;
}

function getEndImage(score){
    let img;
    if(score<=40){
        img = el.game.SC_INF;
    }else if(score <=70){
        img = el.game.SC_MED;
    }else{
        img = el.game.SC_GENIUS;
    }
    return img;
}

function displayEndScreen(score){
    let cnt, inner;
    inner = `<img class="davinci" src="game_img/introdavinci.png"> 
    <h1>${getEndText(score)}</h1>   
    <img class="final-image" src="${getEndImage(score)}">`;
    cnt = document.querySelector(el.game.container);
    cnt.innerHTML+=inner;
};

function gameEnd(){
    clearScreen();
    clearScore();
    displayEndScreen(score);
}

export function gamePlay(){
    if(questions.length != 0){
    let random = randomise();
    clearScreen();
    generateQuestion(random);
    displayScore();
    getAnswer(random);
    }else{
        gameEnd();
    };
}