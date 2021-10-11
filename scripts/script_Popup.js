const popup = document.querySelector('[data-popup]');
const closePopup = document.querySelector('[data-close-button]')
window.onload = function(){
  popup.style.display = "block";
  closePopup.addEventListener('click', () =>{
  popup.style.display = "none";
  })
}