let button = document.querySelector('#btn').value;
let resultat = document.querySelector('#imc');

function calculImc()
{
    let taille = document.getElementById('taille').value;
    let poids = document.getElementById('poids').value; 

    let imc = (poids / (taille*taille)).toFixed(2)
    
    if (imc < 16.5)
    {
        resultat.innerHTML ='IMC : ' + imc +" "+'dénutrition'
    } 
    else if (imc>=16.5 && imc<18.5) 
    {
        resultat.innerHTML ='IMC : ' + imc +" "+'-  maigreur'
    } 
    else if (imc>=18.5 && imc<25)
    {
        resultat.innerHTML ='IMC : ' + imc +" "+'poids normal'
    } 
    else if(imc>=25 && imc<30)
    {
        resultat.innerHTML ='IMC : ' + imc +" "+'surpoids'
    }
    else if (imc>=30 && imc<35)
    {
        resultat.innerHTML ='IMC : ' + imc +" "+'obésité modérée'
    }
    else if (imc>=35 && imc<40)
    {
        resultat.innerHTML ='IMC : ' + imc +" "+'obésité sévère'
    }
    else
    {
        resultat.innerHTML ='IMC : ' + imc +" "+'obésité morbide ou massive'
    }
    





    // switch (imc) {
    //     case 0 : imc < 16.5
    //       resultat.innerHTML ='IMC : ' + imc +" "+'dénutrition'
    //     break;

    //     case 1 : imc>=16.5 && imc<18.5
    //       resultat.innerHTML ='IMC : ' + imc +" "+'maigreur'
    //     break;

    //     case 2 : imc>=18.5 && imc<25
    //     resultat.innerHTML ='IMC : ' + imc +" "+'poids normal'
    //     break;

    //     case 3 : imc>=25 && imc<30
    //     resultat.innerHTML ='IMC : ' + imc +" "+'surpoids'
    //     break;

    //     case 4 : imc>=30 && imc<35
    //     resultat.innerHTML ='IMC : ' + imc +" "+'obésité modérée'
    //     break;

    //     case 5 : imc>=35 && imc<40
    //     resultat.innerHTML ='IMC : ' + imc +" "+'obésité sévère'
    //     break;
    
    //     case 5 : imc>=40 
    //     resultat.innerHTML ='IMC : ' + imc +" "+'obésité morbide ou massive'
    //     break;

    //     default:
    //         break;
    // }
}