let heeftSub = document.querySelectorAll('.nielsmenu > a');
console.log(heeftSub);

for(let i=0; 1<heeftSub.length; i++) {
  heeftSub[i].addEventListener('click', (e)=> e.preventDefault());
}
