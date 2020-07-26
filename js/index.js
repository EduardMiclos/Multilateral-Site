import  * as createSubjects from './auxiliary/createdSubjects'
import  {gamePlay} from './auxiliary/game'

/* Multilateral.site @2020. Developed by Micloș Eduard.
   Hosting is provided by Hostinger. All rights reserved. */

    let PAGE = document.getElementsByTagName("html")[0].id;

    if(PAGE === "page-1"){
        createSubjects.createSubjects();
    }else{
        document.querySelector(".joaca").addEventListener(`click`, ()=>{
            setTimeout(gamePlay, 200);
        })
    };
