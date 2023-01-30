let mainContainer = document.querySelector(".main-container");
let thankContainer = document.querySelector(".thank-you");
let btn = document.querySelector(".btn");
let rating = document.querySelector('.rating')
let rates = document.querySelectorAll('.rating-icon')

rates.forEach((rate)=>{
rate.addEventListener('click',()=>{
   rating.innerHTML = rate.innerHTML
})
})

btn.addEventListener("click", () => {
  thankContainer.classList.remove("thank-you--hidden");
  mainContainer.classList.add('main-container--active')
});
