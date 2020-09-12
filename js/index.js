import  * as createSubjects from './auxiliary/createdSubjects'
import  {gamePlay} from './auxiliary/game'

    /* Check page index and decide whether to create subject or questions for the game. */
    let PAGE = document.getElementsByTagName("html")[0].id;

    if(PAGE === "page-1"){
        createSubjects.createSubjects();
    }else{
        document.querySelector(".joaca").addEventListener(`click`, ()=>{
            setTimeout(gamePlay, 200);
        })
    };
