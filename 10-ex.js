const testButton=document.querySelector('.js-button')
   console.log(testButton.classList.contains('js-button'))
   const gamingButton = document.querySelector('.js-gaming');

    const techButton = document.querySelector('.js-tech');
const musicButton = document.querySelector('.js-music');

   
   
 


function toggle (){const gamingButton = document.querySelector('.js-gaming');

if(!gamingButton.classList.contains('is-toggled')){gamingButton.classList.add('is-toggled');techButton.classList.remove('is-toggled');musicButton.classList.remove('is-toggled')}


  else {gamingButton.classList.remove('is-toggled')}}





function toggle1 (){const musicButton = document.querySelector('.js-music');

if(!musicButton.classList.contains('is-toggled')){musicButton.classList.add('is-toggled') ; techButton.classList.remove('is-toggled');gamingButton.classList.remove('is-toggled')}

else {musicButton.classList.remove('is-toggled')}
 }



function toggle2 (){const techButton = document.querySelector('.js-tech');

if(!techButton.classList.contains('is-toggled')){techButton.classList.add('is-toggled');musicButton.classList.remove('is-toggled');gamingButton.classList.remove('is-toggled')}

else {techButton.classList.remove('is-toggled')}
 }
