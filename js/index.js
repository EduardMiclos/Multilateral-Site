import  * as sub from './auxiliary/createSubjects'
import  {gamePlay} from './auxiliary/game'
import {solarSystemView} from './auxiliary/solarSystem'
import {ProtectTheEarth} from './auxiliary/Protect the Earth/main'

    /* Check page index and decide whether to create subject or questions for the game. */
    let PAGE = document.getElementsByTagName("html")[0].id;


    if(PAGE === "page-1"){
        sub.createSubjects();
    }
    else if(PAGE === "page-2"){
        document.querySelector(".joaca").addEventListener(`click`, ()=>{
            setTimeout(gamePlay, 200);
        })
    }
    else if(PAGE === "page-3"){
        solarSystemView();
    }
    else{
        ProtectTheEarth();
    }

