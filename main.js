const welcome = document.querySelector(".welcome");
const migacz = document.getElementById("act");
const strzalka = document.getElementById("znak1");
const txtWelcome = ['WITAJ','MAM NA IMIE PATRYK','MOJA PASJA JEST PROGRAMOWANIE'];
let index = 0;
let letters = -5;

// Hello text function
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


// teoggle mark in welcome text
const line = ()=>{
    migacz.classList.toggle("active");
}
setInterval(line,400);

//toggle arrow on scroll smooth

// const ani = () =>{
//     strzalka.classList.toggle("dol");
// }
// setInterval(ani,700);

//progress number function

// let nbr = 0;
// let pokaz;
// const getNbr = () => {

//     const stop = setInterval(() => {
//         nbr++;
//         console.log(nbr);
//         if(nbr === 70) return clearInterval(stop);
//     }, 100);
// }


window.addEventListener("scroll", ()=> {
    
    if(window.pageYOffset > 540){
        document.getElementById("abt").style.opacity = "1";
        document.getElementById("abt").style.transition = "2s";
       document.getElementById("style1").classList.add("style1");
    } 

    if(window.pageYOffset > 1210){
        
        document.getElementById("htmlBAR").style.width = "70%";
        document.getElementById("cssBAR").style.width = "60%";
        document.getElementById("jsBAR").style.width = "50%";
        document.getElementById("gitBAR").style.width = "20%";
       
    } 

});




