



const chiffre1=Math.ceil(Math.random()*12)

const chiffre2=Math.ceil(Math.random()*12)



const questionEl=document.getElementById("b");

const inputEl=document.getElementById("input")

const formEl= document.getElementById("form");

const scoreEl= document.getElementById("score")



let score= JSON.parse(localStorage.getItem("score"));
if(!score){
    score=0;
}

scoreEl.innerText=`${score}` ;

questionEl.innerText=`${chiffre1} multiplier par ${chiffre2} egale a combien?`


const reponseJuste = chiffre1 * chiffre2;

formEl.addEventListener("submit", ()=>{
    const reponseEntre = +inputEl.value
    if(reponseEntre === reponseJuste){
score++;
updateLocalStorage()
    }else{
        score;
        updateLocalStorage()
    }

});


function updateLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
    
}




