<!DOCTYPE html>
<html lang="ro" id="page-1">
    <head>
        <title>Multilateral</title>
    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Bebas+Neue&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Dancing+Script|Girassol|Open+Sans+Condensed:300|Roboto+Condensed&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Dosis&display=swap" rel="stylesheet">
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha256-3dkvEK0WLHRJ7/Csr0BZjAWxERc5WH7bdeUya2aXxdU= sha512-+L4yy6FRcDGbXJ9mPG8MT/3UCDzwR9gPeyFNMCtInsol++5m3bk2bXWKdZjvybmohrAsn3Ua5x8gfLnbE1YkOg==" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <meta charset="UTF-8" />
</head>
    <body>
        <header>
            <img class="title" src="img/logo.png" alt="MULTILATERAL">
            
            <div class="header-container">
                <a href="game.html" class="game-button"><button class="game-button">Testează-ți cultura generală</button></a>
                <a href="solarSystem.html" class="game-button"><button class="game-button">Învață Sistemul Solar</button></a>
            </div>

        </header>
        <div class="container">
            <p class="about">
                <strong>Multilateral</strong> este o platformă online gratis care te pune la curent cu toate materialele didactice necesare preocupărilor tale intelectuale.
            Alege o materie și poți viziona o varietate de videoclipuri sau citi un număr foarte marte de articole referitoare la ceea ce dorești să înveți. Nu 
            trebuie decât să apeși pe cărticica din chenarul verde. Poți încerca și jocul nostru de cultură generală.
        </p>
        </div>
        

        <div class="container">

            <div class="khan">

                <p id="khan-title">ARATĂ-LE PROFESORILOR DE CE EȘTI ÎN STARE. URMEAZĂ UN CURS ONLINE:</p>

                <div class="khan-content">

                    <div class="khan-item">
                <a href="https://www.khanacademy.org/" target="_blank"><img src="img/khanacademy.png" class="khan-image"></img></a><br>
                <div class="khan-item-text"><b>Khan Academy</b> este o organizație educativă non-profit, creată în 2006 de către educatorul 
                Salman Khan cu scopul de a furniza un loc accesibil în care oamenii să beneficieze de cunoaștere.
            </div>
        </div>

            <div class="khan-item">
                <a href="https://www.coursera.org/" target="_blank"><img src="img/coursera.png" class="khan-image"></img></a><br>
                <div class="khan-item-text"><b>Coursera</b> este o platformă de învățare online, la nivel mondial,
                fondată în anul 2012 de către profesorii de informatică Andrew Ng și Daphne Koller, care oferă cursuri,
            specializări și diplome de performanță. </div>
            </div>
                


            <div class="khan-item">
                <a href="https://www.udemy.com/" target="_blank"><img src="img/udemy.png" class="khan-image"></img></a><br>
                  <div class="khan-item-text"><b>Udemy</b> este o platformă de învățare online înființată
                    în anul 2009. Este destinată adulților profesioniști  care doresc să își îmbogățească CV-ul, 
                    dar și studenților ce lucrează la portofoliul propriu în dorința de a-și 
                    explora pasiunile. </div>
             </div>
                

                <div class="khan-item">
                    <a href="https://learndigital.withgoogle.com/atelieruldigital" target="_blank"><img src="img/google.png" class="khan-image"></img></a><br>
                      <div class="khan-item-text"><b>Atelierul Digital Google</b> te ajută să îți dezvolți cariera sau compania în 
                        ritmul propriu, cu ajutorul sesiunilor flexibile și personalizate de instruire, 
                        concepute pentru a-ți spori încrederea în forțele proprii și pentru a progresa. </div>
                 </div>

                 <div class="khan-item">
                    <a href="https://www.edx.org/" target="_blank"><img src="img/edx.png" class="khan-image"></img></a><br>
                      <div class="khan-item-text"><b>edX</b> oferă cursuri online gratis în domeniile: CS (Computer Science),
                        lingvistică, statistică, afaceri, inginerie, și științe umanistice, provenite de la două
                    dintre cele mai prestigioase universități din lume: Harvard și Massachusetts Institute of Technology 
                (MIT).</div>
                 </div>


                    </div>

                </div>
        </div>

            <div class="subjects">

                <div class="subject-item">
                            <span class="subject-item-title">LIMBA ȘI LITERATURA ROMÂNĂ</span>
                        <img class="subject-item-image" src="img/carti.png" alt="LIMBA ȘI LITERATURA ROMÂNĂ">
                        <div class="subject-item-detalis">
                            <div class="subject-item-list-act">
                            <button class="subject-item-button" onclick="showHide(1)">&#128214;</button>
                            <div id="1" style="display: none;">
                            <ul id="list-1">
                            </ul>
                        </div>
                    </div>
                </div>    
                    </div>

                    <div class="subject-item">
                        <span class="subject-item-title">MATEMATICĂ</span>
                        <img class="subject-item-image" src="img/mate.png" alt="MATEMATICĂ">
                    <div class="subject-item-detalis">
                        <div class="subject-item-list-act">
                            <button class="subject-item-button" onclick="showHide(2)">&#128214;</button>
                            <div id="2" style="display: none;">
                            <ul id="list-2">
                            </ul>
                        </div>
                    </div>
                    </div>    
                </div>
                
                <div class="subject-item">
                    <span class="subject-item-title">BIOLOGIE</span>
                <img class="subject-item-image" src="img/biologie.png" alt="BIOLOGIE">
                <div class="subject-item-detalis">
                    <div class="subject-item-list-act">
                        <button class="subject-item-button" onclick="showHide(3)">&#128214;</button>
                    <div id="3" style="display: none;">
                        <ul id="list-3">
                        </ul>
                    </div>
                </div>
                </div>    
            </div>

            <div class="subject-item">
                <span class="subject-item-title">LIMBA ENGLEZĂ</span>
                <img class="subject-item-image" src="img/engleza.png" alt="LIMBA ENGLEZĂ">
            <div class="subject-item-detalis">
                <div class="subject-item-list-act">
                <button class="subject-item-button" onclick="showHide(4)">&#128214;</button>
                <div id="4" style="display: none;">
                    <ul id="list-4">
                    </ul>
                    </div>
            </div>
        </div>    
        </div>
        
        <div class="subject-item">
            <span class="subject-item-title">LIMBA FRANCEZĂ</span>
            <img class="subject-item-image" src="img/franceza.png" alt="LIMBA FRANCEZĂ">
        <div class="subject-item-detalis">
            <div class="subject-item-list-act">
            <button class="subject-item-button" onclick="showHide(5)">&#128214;</button>
            <div id="5" style="display: none;">
                <ul id="list-5">
                </ul>
                </div>
        </div>
    </div>    
</div>

            <div class="subject-item">
                <span class="subject-item-title">FIZICĂ</span>
                <img class="subject-item-image" src="img/fizica.png" alt="FIZICĂ">
            <div class="subject-item-detalis">
                <div class="subject-item-list-act">
                    <button class="subject-item-button" onclick="showHide(6)">&#128214;</button>
                <div id="6" style="display: none;">
                    <ul id="list-6">
                    </ul>
                    </div>
                </div>
            </div>    
        </div>
        
        <div class="subject-item">
            <span class="subject-item-title">INFORMATICĂ</span>
        <img class="subject-item-image" src="img/programare.png" alt="INFORMATICĂ">
        <div class="subject-item-detalis">
            <div class="subject-item-list-act">
                <button class="subject-item-button" onclick="showHide(7)">&#128214;</button>
            <div id="7" style="display: none;">
                <ul id="list-7">
                </ul>
                </div>
        </div>
    </div>    
</div>

        <div class="subject-item">
            <span class="subject-item-title">ISTORIE</span>
        <img class="subject-item-image" src="img/istorie.jpg" alt="ISTORIE">
        <div class="subject-item-detalis">
            <div class="subject-item-list-act">
                <button class="subject-item-button" onclick="showHide(8)">&#128214;</button>
            <div id="8" style="display: none;">
                <ul id="list-8">
                </ul>
                </div>
            </div>
        </div>    
        </div>
        
        <div class="subject-item">
            <span class="subject-item-title">ECONOMIE</span>
        <img class="subject-item-image" src="img/economie.jpg" alt="ECONOMIE">
        <div class="subject-item-detalis">
            <div class="subject-item-list-act">
                <button class="subject-item-button" onclick="showHide(9)">&#128214;</button>
                <div id="9" style="display: none;">
                <ul id="list-9">
                </ul>
            </div>
        </div>
        </div>    
    </div>
        
    <div class="subject-item">
            <span class="subject-item-title">GEOGRAFIE</span>
            <img class="subject-item-image" src="img/geografie.jpg" alt="GEOGRAFIE">
        <div class="subject-item-detalis">
            <div class="subject-item-list-act">
            <button class="subject-item-button" onclick="showHide(10)">&#128214;</button>
            <div id="10" style="display: none;">
                <ul id="list-10">
                </ul>
                </div>
            </div>
        </div>    
    </div>

        <div class="subject-item">
            <span class="subject-item-title">CHIMIE</span>
            <img class="subject-item-image" src="img/chimie.png" alt="CHIMIE">
            <div class="subject-item-detalis">
            <div class="subject-item-list-act">
                <button class="subject-item-button" onclick="showHide(11)">&#128214;</button>
            <div id="11" style="display: none;">
                <ul id="list-11">
                </ul>
            </div>
        </div>
    </div>    
        </div>
        
        <div class="subject-item">
            <span class="subject-item-title">RELIGIE ORTODOXĂ</span>      
        <img class="subject-item-image" alt="RELIGIE ORTODOXĂ" src="img/religie.jpg">
        <div class="subject-item-detalis">
            <div class="subject-item-list-act">
                <button class="subject-item-button" onclick="showHide(12)">&#128214;</button>
            <div id="12" style="display: none;">
                <ul id="list-12">
                </ul>
            </div>
        </div>
    </div>    
        </div>

        <div class="subject-item">
            <span class="subject-item-title">FILOSOFIE</span>      
        <img class="subject-item-image" alt="FILOSOFIE" src="img/filosofie.jpg">
        <div class="subject-item-detalis">
            <div class="subject-item-list-act">
                <button class="subject-item-button" onclick="showHide(13)">&#128214;</button>
            <div id="13" style="display: none;">
                <ul id="list-13">
                </ul>
            </div>
        </div>
    </div>    
        </div>

        <div class="subject-item">
            <span class="subject-item-title">PSIHOLOGIE</span>      
        <img class="subject-item-image" alt="PSIHOLOGIE" src="img/psihologie.jpg">
        <div class="subject-item-detalis">
            <div class="subject-item-list-act">
                <button class="subject-item-button" onclick="showHide(14)">&#128214;</button>
            <div id="14" style="display: none;">
                <ul id="list-14">
                </ul>
            </div>
        </div>
    </div>    
        </div>

        
    </div>
    </div>

    
    <div class="video-play">
        <div class="loader"></div>
    <iframe id="MyFrame" src="" 
    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
    picture-in-picture" allowfullscreen></iframe>
    <button class="video-close-button" onclick="untoggle()">X</button>


</div>
    
        <footer>
            <div class="sugest">
                <h4 style="color: rgb(205, 207, 208);">CONTACT: 
                    <a href="https://www.facebook.com/multilateralsite/" 
                    target="_blank"><img class="contact-logo"src="img/fblogo.png"/>
                    </a>
                    <form action="mailto:multilateral@yahoo.com" method="post" enctype="text/plain">
                        <input type="image" class="contact-logo" src="img/maillogo.png" alt="Submit">               
                     </form>
            </h4>

                <div class="team-container">
                    <h4 class="team"> MULTILATERAL <i class="fa fa-creative-commons"></i>2020 -
                        <span class="team-text" style="color:rgb(241, 234, 136);">ECHIPA</span>
                        <div class="underline"></div>
                        <div class="team-members">
                            <h5 class="team"> MICLOȘ EDUARD - web development </h5>
                            <h5 class="team"> SAVA ANDREEA - marketing și promovare</h5>
                        </div>
                    </h4>


                </div>

        </div>

        </footer>
   <script>
       function showHide(id){
        let el = document.getElementById(id);
        if(el.style.display === "none"){
            el.style.display = "block";
            
        }else{
            el.style.display = "none";
        }
    }
    function showHideTest(){
    let gm = document.querySelector(".enter-game");
    let ex = document.querySelector(".exit-announce");
        gm.style.display = "none";
        ex.style.display = "none";    
        
    }
    function toggle(link){
        let video = document.querySelector(".video-play");
        let frame = document.getElementById("MyFrame");
        let btn = document.querySelector(".video-close-button");
        let loader = document.querySelector(".loader");
        frame.src = link;

        loader.classList.toggle("active");
        setTimeout(function(){
            btn.classList.toggle("active");
            video.classList.toggle("active");
            loader.classList.toggle("active");

        }, 1500);
    }

    function untoggle(){
        let video = document.querySelector(".video-play");
        let frame = document.getElementById("MyFrame");
        let btn = document.querySelector(".video-close-button");
        frame.src = "";
        video.classList.toggle("active");
        btn.classList.toggle("active");
    };


    </script>
    <script type="text/javascript" src="js/bundle07292020.js"></script></body> 
</html>