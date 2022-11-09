const scrollTopBtn = document.querySelector('.scroll-top');
const nav = document.querySelector('.nav')
const fbLink = document.querySelector('.fb-link');
console.log(fbLink);
console.log(scrollTopBtn);

window.onscroll = () => {
  scrollFunction();
}
function scrollFunction() {
  if( document.body.scrollTop > 150 ||
    document.documentElement.scrollTop > 150){
    // console.log(document.documentElement.scrollTop);
    scrollTopBtn.style.top  = '90%';
    nav.style.top = '-150px';
  }
  else {
    scrollTopBtn.style.top  = '-100px';
    nav.style.top = '0'
  }
}

fbLink.addEventListener('click', () => {
  window.open('https://www.facebook.com/datdeeptry03');
})