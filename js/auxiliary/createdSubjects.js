import Subject from './subjects'
import {el} from './elements'


export function createSubjects(){

let romana = new Subject(el.subjectsId.romana);
let mate = new Subject(el.subjectsId.matematica);
let bio = new Subject(el.subjectsId.biologie);
let engl = new Subject(el.subjectsId.engleza);
let frnc = new Subject(el.subjectsId.franceza);
let fizica = new Subject(el.subjectsId.fizica);
let istorie = new Subject(el.subjectsId.istorie);
let eco = new Subject(el.subjectsId.economie);
let geo = new Subject(el.subjectsId.geografie);
let rel = new Subject(el.subjectsId.religie);
let chimie = new Subject(el.subjectsId.chimie);
let prgm = new Subject(el.subjectsId.programare);
let filosofie = new Subject(el.subjectsId.filosofie);
let psihologie = new Subject(el.subjectsId.psihologie);

/* LIMBA ȘI LITERATURA ROMÂNĂ */
romana.addItem("Bacalaureat 2020", el.types.seemore, "#", 1);
romana.addSubitem(1, "TeleȘcoala - Curente literare", el.types.video, "https://www.youtube.com/embed/ZEHi5sIIHeo");
romana.addSubitem(1, "ZaiaBAC - Comentarii literare pe înțelesul tău", el.types.playlist, "https://www.youtube.com/playlist?list=PLYRWJtBlBYLOyhmpFeNIvLUbw9WtQFMDA");
romana.addSubitem(1, "Opere lirice moderniste", el.types.read, "https://www.4bac.ro/category/romana/opere-lirice/");
romana.addSubitem(1, "Comentarii literare", el.types.read, "https://www.4bac.ro/category/romana/comentarii/");
romana.addSubitem(1, "Cum să redactez eseul?", el.types.video, "https://www.youtube.com/embed/Rr2mXQeLZvA");
romana.addSubitem(1, "12 sfaturi utile pentru a da cel mai bun randament la Bacalaureat", el.types.video, "https://www.youtube.com/embed/2RpNf_pieQU");
romana.addSubitem(1, "Curente și caracteristici, viziunea despre lume în operele canonice", el.types.playlist, "https://www.youtube.com/channel/UCBTTy8_1S-uGZysa9SIyvYQ");
romana.addSubitem(1, "Comentarii literare audio", el.types.playlist, "https://www.youtube.com/channel/UCZUKVwL3NfRCjRSiWCodHoQ/videos");
romana.addItem("Gramatică", el.types.seemore, "#", 1);
romana.addSubitem(2, "Materiale educaționale, limba română", el.types.playlist, "https://www.youtube.com/channel/UCDoEozlvlJDUflJpcsgF3Jw/videos");
romana.addSubitem(2, "Gramatică - morfologie, grile online", el.types.exercise, "https://www.grileonline.ro/teste/gramatica/morfologie.html");
romana.addItem("Literatură", el.types.seemore, "#", 1);
romana.addSubitem(3, "Goodreads - recenzii literare", el.types.read, "https://www.goodreads.com/");
romana.addSubitem(3, "Whichbook - recenzii literare", el.types.read, "https://www.whichbook.net/");
romana.addItem("Jocuri educaționale", el.types.seemore, "#", 1);
romana.addSubitem(4, "Spânzurătoarea", el.types.game, "https://dexonline.ro/spanzuratoarea");
romana.addSubitem(4, "Omleta Cuvintelor", el.types.game, "https://dexonline.ro/omleta");
romana.addSubitem(4, "Moara cuvintelor", el.types.game, "https://dexonline.ro/moara");


/* MATEMATICĂ  */
mate.addItem("Bacalaureat 2020", el.types.seemore, "#", 1);
mate.addSubitem(1, "Math PDR - Poenaru Dan și Poenaru Radu", el.types.playlist, "https://www.youtube.com/user/Poe669/about")
mate.addSubitem(1, "Meditații pentru BAC - Adevărul", el.types.video, "https://www.youtube.com/embed/MjGRCXE6tOE");
mate.addSubitem(1, "9 reguli pentru a reuși la BAC - Prepa.ro", el.types.video, "https://www.youtube.com/embed/kKl7ck3Zpvo");
mate.addSubitem(1, "Matematică pentru Bacalaureat", el.types.video, "https://www.youtube.com/embed/6aXhJ-8a06k", 0);
mate.addItem("Evaluare națională 2020", el.types.seemore, "#", 1);
mate.addItem("Învățământ primar și gimnazial", el.types.seemore, "#", 1);
mate.addSubitem(2, "Rezolvare subiecte Evaluare Națională 2019", el.types.video, "https://www.youtube.com/embed/iJ9WeC2N6lU", 0);
mate.addSubitem(3, "Mquest.ro - înțelegi matematica de gimnaziu cu ajutorul filmelor", el.types.video, "https://mquest.ro/");
mate.addItem("Desmos - aplicație pentru vizualizarea graficelor", el.types.see, "https://www.desmos.com/calculator", 0);
mate.addItem("3Blue1Brown - vizualizare și înțelegerea conceptelor matematice (lb.engleză)", el.types.playlist, "https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw", 0);


/* BIOLOGIE */
bio.addItem("Bacalaureat 2020", el.types.seemore, "#", 1);
bio.addSubitem(1, "Însușiri generale ale organismelor", el.types.video, "https://www.youtube.com/embed/TwIxoUHe2rY");
bio.addSubitem(1, "Organizarea celulară a organismelor", el.types.video, "https://www.youtube.com/embed/7whRl1xtRls");
bio.addSubitem(1, "Regnul Plante", el.types.video, "https://www.youtube.com/embed/18PYrAwqoho");
bio.addSubitem(1, "Angiosperme", el.types.video, "https://www.youtube.com/embed/CxQVk4URSh4");
bio.addSubitem(1, "Regnul Animale", el.types.video, "https://www.youtube.com/embed/424unYik6_M")
bio.addSubitem(1, "Anatomia și fiziologia omului", el.types.video, "https://www.youtube.com/embed/A7_hYBlBxGU");
bio.addItem("Clasa a V-a", el.types.playlist, "https://www.youtube.com/playlist?list=PL4MMPTMzcvm3MFc59SH1iA5ta9enK3DD7", 0);
bio.addItem("Clasa a VI-a", el.types.playlist, "https://www.youtube.com/playlist?list=PL4MMPTMzcvm3RrfAgxrMy8TOQNAQ5whj5", 0);
bio.addItem("Clasa a VII-a", el.types.playlist, "https://www.youtube.com/playlist?list=PL4MMPTMzcvm3-AzAwKLmfaqb0tZ5S51Wm", 0);
bio.addItem("Clasa a VIII-a", el.types.playlist, "https://www.youtube.com/playlist?list=PL4MMPTMzcvm23rdcqTjdWo-nFXEi1lo2O", 0);
bio.addItem("Mușchiul", el.types.video, "https://www.youtube.com/embed/dZJ7Tg0SYTw", 0);
bio.addItem("Feriga", el.types.video, "https://www.youtube.com/embed/DW9subtpqJw", 0);
bio.addItem("Ciuperca", el.types.video, "https://youtube.com/embed/TXDbgTccJEA", 0);
bio.addItem("Teste grilă", el.types.exercise, "https://teste.ha-ha.ro/biologie.php", 0);


/* LIMBA ENGLEZĂ */
engl.addItem("Timpuri verbale", el.types.read, "http://www.rapiduldeengleza.ro/blog/cum-folosim-timpurile-verbale-din-limba-engleza/", 0);
engl.addItem("Cursuri engleză online - Rita Engleză", el.types.playlist, "https://www.youtube.com/channel/UC1c6wnh4YnQoXYCn3hIY4Pw/about", 0);
engl.addItem("Lecție video - proba orală", el.types.video, "https://www.youtube.com/embed/Az4JTfO2sp4&t=381s", 0);
engl.addItem("Cursuri engleză online - Engleză ABC", el.types.playlist, "https://www.youtube.com/channel/UCVb9L9dHJ0Gny8wIkI4396A/videos", 0);
engl.addItem("Duolingo - aplicație pentru însușirea limbilor străine", el.types.exercise, "https://ro.duolingo.com/course/en/ro/%C3%8Enva%C8%9B%C4%83-englez%C4%83", 0);


/* LIMBA FRANCEZĂ */
frnc.addItem("Cursuri limba franceză, audio", el.types.playlist, "https://www.youtube.com/channel/UCKMCrRH_xsjjvSIURaJytoQ", 0);
frnc.addItem("Reguli de citire în limba franceză", el.types.video, "https://www.youtube.com/embed/6HkHO-E6XF8", 0);
frnc.addItem("Duolingo - aplicație pentru însușirea limbilor străine", el.types.exercise, "https://ro.duolingo.com/course/en/ro/%C3%8Enva%C8%9B%C4%83-englez%C4%83", 0);

/* FIZICĂ */
fizica.addItem("Bacalaureat", el.types.seemore, "#", 1);
fizica.addSubitem(1, "Bacalaureat 2014 - rezolvare subiecte mecanică", el.types.video, "https://www.youtube.com/embed/1scRpfRs_HY"); 
fizica.addSubitem(1, "Bacalaureat 2014 - rezolvare subiecte electricitate", el.types.video, "https://www.youtube.com/embed/I9yMs-DoyKM");
fizica.addItem("Clasa a VI-a", el.types.playlist, "https://www.youtube.com/playlist?list=PL4MMPTMzcvm0u8XoIc8Mfk-l_ZYh-wXc4", 0);
fizica.addItem("Clasa a VII-a", el.types.playlist, "https://www.youtube.com/playlist?list=PL4MMPTMzcvm0_DbK9q-FX3z_MuFNOdc-T", 0);
fizica.addItem("Clasa a VIII-a", el.types.playlist, "https://www.youtube.com/playlist?list=PL4MMPTMzcvm0_DbK9q-FX3z_MuFNOdc-T", 0);
fizica.addItem("Parth G - explicații simple ale conceptelor complicate (lb.engleză)", el.types.playlist, "https://www.youtube.com/user/InfamousPillarKid/videos", 0);
fizica.addItem("Fizică cu Cristian Presură", el.types.playlist, "https://www.youtube.com/user/presura1", 0);


/* PROGRAMARE */
prgm.addItem("Bacalaureat", el.types.seemore, "#", 1);
prgm.addSubitem(1, "Rezolvare subiecte Bacalaureat 2020", el.types.video, "https://www.youtube.com/embed/kjU-wsskY4o");
prgm.addSubitem(1, "Rezolvare subiecte Bacalaureat 2019", el.types.video, "https://www.youtube.com/embed/XMU1BtVAe78");
prgm.addItem("Cursuri/Tutoriale C++ - The Cherno", el.types.playlist, "https://www.youtube.com/user/TheChernoProject/videos", 0);
prgm.addItem("Analiza complexității unui algoritm", el.types.video, "https://www.youtube.com/embed/DhXD2yil0-Q", 0);
prgm.addItem("Introducerea în algoritmică și structuri de date - MIT (lb.engleză)", el.types.playlist, "https://www.youtube.com/playlist?list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb", 0);
prgm.addItem("Implementarea algoritmilor în limbajul de programare C++(lb.engleză)", el.types.playlist, "https://www.youtube.com/playlist?list=PLB7ZlVMcmjIDsjPQfjxT-_ClgEtr-udS2", 0);

/* ISTORIE */

istorie.addItem("Bacalaureat 2020", el.types.seemore, "#", 1);
istorie.addSubitem(1, "Rezolvare subiecte - Adevărul", el.types.video, "https://www.youtube.com/embed/N_U7B9YdOIQ"); 
istorie.addSubitem(1, "Istorie - cunoștințe generale", el.types.read, "http://istorie-bacalaureat-manual.ro/cuprins.html");
istorie.addItem("Clasa a V-a", el.types.playlist, "https://www.youtube.com/playlist?list=PL4MMPTMzcvm2h7oah9HJTSv5sx3nz6BZV", 0);
istorie.addItem("Clasa a VI-a", el.types.playlist, "https://www.youtube.com/playlist?list=PL4MMPTMzcvm37QWJYEWYFBzUn69P7JS1t", 0);
istorie.addItem("Clasa a VII-a", el.types.playlist, "https://www.youtube.com/playlist?list=PL4MMPTMzcvm0DgAjfo5GwPYkB9WKX0a65", 0);
istorie.addItem("Claasa a VIII-a", el.types.playlist, "https://www.youtube.com/playlist?list=PL4MMPTMzcvm2N-klzTaWJqstdkRjykYcy", 0);

/* ECONOMIE */
eco.addItem("Lecții online - elearning. Generalități", el.types.read, "http://elearning.masterprof.ro/index.php?option=com_content&view=article&id=9&Itemid=109", 0);
eco.addItem("Cererea și oferta", el.types.video, "https://www.youtube.com/embed/Jv5qlv_rr8c", 0);
eco.addItem("Costurile firmei", el.types.video, "https://www.youtube.com/embed/MMyadQgFcLs", 0);
eco.addItem("TeleȘcoala - Consumatorul și comportamentul său rațional", el.types.video, "https://www.youtube.com/embed/E3Wkvv5y8c8", 0);

/* GEOGRAFIE */
geo.addItem("Bacalaureat 2020", el.types.seemore, "#", 1);
geo.addItem("Clasa a V-a", el.types.playlist, "https://www.youtube.com/playlist?list=PL4MMPTMzcvm3RVofU5t57hoM0PFf5ZWo6", 0);
geo.addItem("Clasa a VI-a", el.types.playlist, "https://www.youtube.com/playlist?list=PL4MMPTMzcvm37R23lXbRg5Ee5whLhaodK", 0);
geo.addItem("Clasa a VII-a", el.types.playlist, "https://www.youtube.com/playlist?list=PL4MMPTMzcvm0bibPrhNOjCsUM_0Ivmqx9", 0);
geo.addItem("Clasa a VIII-a", el.types.playlist, "https://www.youtube.com/playlist?list=PL4MMPTMzcvm0YQOzjAupwhLLdzrMPWw69", 0);
geo.addSubitem(1, "Pământul, corp cosmic", el.types.video, "https://www.youtube.com/embed/MAdrzMOfCOE");
geo.addSubitem(1, "Individualitatea Pământului în Univers", el.types.video, "https://www.youtube.com/embed/oj9fm75CKN0");
geo.addSubitem(1, "Litosfera", el.types.video, "https://www.youtube.com/embed/Qlc49AAyr40");
geo.addSubitem(1, "Relieful scoarței terestre", el.types.video, "https://www.youtube.com/embed/4U0UYBc4Hcg");
geo.addSubitem(1, "Atmosfera. Caracteristici generale", el.types.video, "https://www.youtube.com/embed/dL1Yu14HXEw");

/* CHIMIE */
chimie.addItem("Bacalaureat 2020", el.types.seemore, "#", 1);
chimie.addSubitem(1, "Consultații. Prof. Mihaela Șerban", el.types.video, "https://www.youtube.com/embed/E8RbZqgkd9Y");
chimie.addItem("Clasa a VII-a", el.types.playlist, "https://www.youtube.com/playlist?list=PL4MMPTMzcvm0E5SMp9aAOyWcGLvTY6c9L", 0);
chimie.addItem("Clasa a VIII-a", el.types.playlist, "https://www.youtube.com/playlist?list=PL4MMPTMzcvm0WKKz2Vj9iE3JEA1m9Wc8n", 0);

/* RELIGIE */
rel.addItem("„Cum este cu putință să credem?” - Conferință, Pr. Constantin Necula", el.types.video, `https://www.youtube.com/embed/97wnOe127c4`, 0);
rel.addItem("„Dialog cu tinerii”, Pr. Constantin Necula", el.types.video, `https://www.youtube.com/embed/u3JZGMxugJI`, 0);
rel.addItem("„Aceasta este viața mea” - Iustinian Chira", el.types.video, "https://www.youtube.com/embed/PFwEvLVcUkI", 0);

/* FILOSOFIE */
filosofie.addItem("Dan Puric - curs, filosofie", el.types.video, "https://www.youtube.com/embed/_aGxhtwdJeM", 0);

/* PSIHOLOGIE */
psihologie.addItem("TheraminTrees (lb.engleză)", el.types.playlist, "https://www.youtube.com/channel/UCJ-vHE5CrGaL_ITEg-n3OeA", 0);

};