//changing the navbar styles on scrolll

window.addEventListener('scroll',() => {
    document.querySelector('nav').classList.toggle('window-scroll',window.scrollY > 100)
})


const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
faq.addEventListener('click', () => {
  faq.classList.toggle('open');
   // change icon


     const icon = faq.querySelector('.faq__icon i');
     if(icon.className === 'uil uil-plus') {
        icon.className = "uil uil-minus";
     } else { 
        icon.className = "uil uil-plus";
     }
  })
}) 
