import  * as createSubjects from './auxiliary/createdSubjects'
import  {gamePlay} from './auxiliary/game'
import {solarSystemView} from './auxiliary/solarSystem'

    /* Check page index and decide whether to create subject or questions for the game. */
    let PAGE = document.getElementsByTagName("html")[0].id;

    if(PAGE === "page-1"){
        createSubjects.createSubjects();
    }else if(PAGE === "page-2"){
        document.querySelector(".joaca").addEventListener(`click`, ()=>{
            setTimeout(gamePlay, 200);
        })
    }else {
        solarSystemView();
    };

