import Question from './question'

let imgUrls = {
    q1: 'game_img/intrebare-carpe-diem.jpg',
    q2: 'game_img/intrebare-miscare.jpg',
    q3: 'game_img/intrebare-presedinte.jpg',
    q4: 'game_img/intrebare-diferential.jpg',
    q5: 'game_img/intrebare-institut.jpg',
    q6: 'game_img/intrebare-goethe.jpg',
    q7: 'game_img/intrebare-programare.jpg',
    q8: 'game_img/intrebare-arc.jpg',
    q9: 'game_img/antonpann.jpg',
    q10: 'game_img/vertebrate.jpg'
}

let q1 = new Question("CINE A SPUS ÎNTÂIA OARĂ „CARPE DIEM” ?", ['HORAȚIU', 'HOMER', 'DA VINCI', 'GALILEI'], 'HORAȚIU', 
imgUrls.q1);
let q2 = new Question("UN CORP SE AFLĂ ÎN MIȘCARE RECTILINIE UNIFORMĂ DACĂ ȘI NUMAI DACĂ", ['VITEZA SA VARIAZĂ', 
'ACCELERAȚIA SA VARIAZĂ', 'VITEZA SA ESTE CONSTANTĂ', 'FORȚA DE FRECARE ESTE NULĂ'], 'VITEZA SA ESTE CONSTANTĂ', imgUrls.q2);
let q3 = new Question("PRIMUL PREȘEDINTE COMUNIST AL ROMÂNIEI A FOST", ['ION ILIESCU', 
'GHEORGHE GHEORGHIU-DEJ', 'NICOLAE CEAUȘESCU', 'EMIL CONSTANTINESCU'], 'NICOLAE CEAUȘESCU', imgUrls.q3);
let q4 = new Question("CALCULUL DIFERENȚIAL A FOST INVENTAT DE CĂTRE", ['NEWTON ȘI LEIBNIZ', 
'FERMAT', 'EINSTEIN', 'EULER'], 'NEWTON ȘI LEIBNIZ', imgUrls.q4);
let q5 = new Question("PRIMUL INSTITUT DE BACTERIOLOGIE DIN ROMÂNIA A FOST ÎNFIINȚAT DE CĂTRE", ['TITU MAIORESCU', 
'NICOLAE BACALBAȘA', 'VICTOR BABEȘ', 'PETRACHE POENARU'], 'VICTOR BABEȘ', imgUrls.q5);
let q6 = new Question("PRINTRE OPERELE LUI GOETHE SE NUMĂRĂ", ['FAUST', 
'ILIADA', 'MIZERABILII', 'GARGANTUA ȘI PANTAGRUEL'], 'FAUST', imgUrls.q6);
let q7 = new Question("UNUL DINTRE CELE MAI POPULARE LIMBAJE DE PROGRAMARE ESTE", ['HTTP', 
'C#', 'CSS', 'HTML'], 'C#', imgUrls.q7);
let q8 = new Question("ARCUL DE TRIUMF DE LA BUCUREȘTI SIMBOLIZEAZĂ", ['ÎNTEMEIEREA STATULUI NAȚIONAL UNITAR', 
'PACEA', 'CÂȘTIGAREA PRIMUL RĂZBOI MONDIAL', 'SUPRIMAREA REGIMULUI COMUNIST'], 'CÂȘTIGAREA PRIMUL RĂZBOI MONDIAL', imgUrls.q8);
let q9 = new Question("ANTON PANN", ['A COMPUS IMNUL NAȚIONAL AL ROMÂNIEI', 'A DESCOPERIT PENICILINA', 'A TRADUS PENTRU ÎNTÂIA OARĂ BIBLIA', 'S-A REMARCAT ÎN REVOLUȚIA DIN 1907'], 'A COMPUS IMNUL NAȚIONAL AL ROMÂNIEI', imgUrls.q9)
let q10 = new Question("SUNT ANIMALE VERTEBRATE", ['MELCII', 'PEȘTII', 'VIERMII INELAȚI', 'MEDUZELE'], 'PEȘTII', imgUrls.q10);

export let questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

