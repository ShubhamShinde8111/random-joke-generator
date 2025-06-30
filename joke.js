var modal = document.querySelector('.modal');
var joke = document.querySelector('.container p');

function getJoke(){
   modal.style.display='flex'
   setTimeout(async() => {
    let resobj=await fetch('https://icanhazdadjoke.com/slack')
    let data= await resobj.json()
    joke.textContent=data.attachments[0].text
    modal.style.display='none'  
   }, 3000);
}