window.addEventListener('scroll', reveal);

export default function reveal(){
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowheight = window.innerHeight;
    const revealtop = reveal[i].geBoundingClientRect().top;
    const revealpoint = 150;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active')
    }
  }
}

