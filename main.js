const welcome = document.querySelector(".welcome");
const migacz = document.getElementById("act");
const strzalka = document.getElementById("znak1");
const txtWelcome = ['Hello','My name is Patryk','Front-end developer',"let's check out more information about Me in the below"];
let index = 0;
let letters = -5;

const startHello = () => {
    if(letters >= 0){
        welcome.textContent += txtWelcome[index][letters];
    }

    letters++;

    if(letters >= txtWelcome[index].length){
        index++;
    
    if(index === txtWelcome.length) return
    
    return setTimeout(() => {
        letters = -5;
        welcome.textContent = ''
        startHello();
    }, 500);

    
}
setTimeout(startHello,100);
}
 
startHello();

// const startHello = ()=> {
//     welcome.textContent += txtWelcome[index];
//     index++;
//     if(index >= txtWelcome.length) clearInterval(przywitanie);
// }

// const przywitanie =  setInterval(startHello,100);


const line = ()=>{
    migacz.classList.toggle("active");
}
setInterval(line,310);

const ani = () =>{
    strzalka.classList.toggle("dol");
}
setInterval(ani,700);